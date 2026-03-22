import { Resend } from "resend";

const DEFAULT_TO = "cryph00@gmail.com";

function isNonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Server email is not configured (missing RESEND_API_KEY)." },
      { status: 503 }
    );
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

  const { first, last, email, phone, message } = body as Record<
    string,
    unknown
  >;

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

  const emailTrim = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL_TO?.trim() || DEFAULT_TO;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "AZUM Medical <onboarding@resend.dev>";

  const text = [
    `Name: ${first.trim()} ${last.trim()}`,
    `Email: ${emailTrim}`,
    `Phone: ${typeof phone === "string" && phone.trim() ? phone.trim() : "—"}`,
    "",
    "Message:",
    String(message).trim(),
  ].join("\n");

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: emailTrim,
    subject: `Website contact — ${first.trim()} ${last.trim()}`,
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
