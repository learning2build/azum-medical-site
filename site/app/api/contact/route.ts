import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { verifyTurnstileToken } from "@/lib/contact-server";

const MAX_MESSAGE_CHARS = 8000;

function isNonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

/** Avoid newline injection in email subject / headers. */
function oneLine(s: string, maxLen: number) {
  return s.replace(/[\r\n]+/g, " ").trim().slice(0, maxLen);
}

function clientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

let ratelimit: Ratelimit | null = null;
function getRatelimit(): Ratelimit | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  if (!ratelimit) {
    ratelimit = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      prefix: "contact-form",
    });
  }
  return ratelimit;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Server email is not configured (missing RESEND_API_KEY)." },
      { status: 503 }
    );
  }

  const onVercel = Boolean(process.env.VERCEL);
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (onVercel && !turnstileSecret) {
    return Response.json(
      { error: "Server configuration error (Turnstile)." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_EMAIL_TO?.trim();
  if (!to) {
    return Response.json(
      { error: "Server configuration error (recipient email)." },
      { status: 503 }
    );
  }

  let from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!from) {
    if (onVercel) {
      return Response.json(
        {
          error:
            "Server configuration error (set CONTACT_FROM_EMAIL to a Resend-verified sender).",
        },
        { status: 503 }
      );
    }
    from = "AZUM Medical <onboarding@resend.dev>";
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid payload." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;

  // Honeypot — bots often fill hidden fields
  const trap = record.company;
  if (trap != null && trap !== "" && String(trap).trim() !== "") {
    return Response.json({ ok: true }, { status: 200 });
  }

  const limiter = getRatelimit();
  if (limiter) {
    const ip = clientIp(request);
    const { success } = await limiter.limit(ip);
    if (!success) {
      return Response.json(
        {
          error:
            "Too many messages from this network. Please try again in an hour or call the office.",
        },
        { status: 429 }
      );
    }
  }

  const { first, last, email, phone, message, turnstileToken } = record;

  if (
    !isNonEmpty(first) ||
    !isNonEmpty(last) ||
    !isNonEmpty(email) ||
    !isNonEmpty(message)
  ) {
    return Response.json(
      { error: "First name, last name, email, and message are required." },
      { status: 400 }
    );
  }

  if (turnstileSecret) {
    const token =
      typeof turnstileToken === "string" ? turnstileToken.trim() : "";
    if (!token) {
      return Response.json(
        { error: "Please complete the security check and try again." },
        { status: 400 }
      );
    }
    const ok = await verifyTurnstileToken(
      token,
      turnstileSecret,
      clientIp(request)
    );
    if (!ok) {
      return Response.json(
        { error: "Security check failed. Refresh the page and try again." },
        { status: 400 }
      );
    }
  }

  const emailTrim = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  const msgRaw = String(message).trim();
  if (msgRaw.length > MAX_MESSAGE_CHARS) {
    return Response.json(
      { error: `Message is too long (max ${MAX_MESSAGE_CHARS} characters).` },
      { status: 400 }
    );
  }

  const firstSafe = oneLine(first.trim(), 80);
  const lastSafe = oneLine(last.trim(), 80);

  const text = [
    `Name: ${firstSafe} ${lastSafe}`,
    `Email: ${emailTrim}`,
    `Phone: ${typeof phone === "string" && phone.trim() ? oneLine(phone.trim(), 40) : "—"}`,
    "",
    "Message:",
    msgRaw,
  ].join("\n");

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: emailTrim,
    subject: `Website contact — ${firstSafe} ${lastSafe}`,
    text,
  });

  if (error) {
    console.error("[contact]", error);
    return Response.json(
      { error: "Could not send message. Please try again or call the office." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
