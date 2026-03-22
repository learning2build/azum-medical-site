"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-[#ebe8f0] bg-white px-4 py-3 text-[#1f2937] shadow-sm outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#5b4d9e] focus:ring-2 focus:ring-[#5b4d9e]/20";

const labelClass = "block text-sm font-medium text-[#374151]";

const turnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactMessageForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const first = String(fd.get("first") ?? "").trim();
    const last = String(fd.get("last") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();

    if (!first || !last || !email || !message) return;

    if (turnstileSiteKey && !captchaToken) {
      setErrorMessage("Please complete the security check below.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first,
          last,
          email,
          phone,
          message,
          company,
          turnstileToken: captchaToken,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setErrorMessage(
          data.error || "Something went wrong. Please try again or call us."
        );
        setStatus("error");
        setCaptchaToken(null);
        setCaptchaKey((k) => k + 1);
        return;
      }

      setStatus("success");
      setCaptchaToken(null);
      setCaptchaKey((k) => k + 1);
      form.reset();
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setStatus("error");
      setCaptchaToken(null);
      setCaptchaKey((k) => k + 1);
    }
  }

  return (
    <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14 lg:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
          Send Us a Message
        </h2>
        <p className="mt-2 text-sm text-[#6b7280]">
          Submit the form and we&apos;ll receive your message by email. You
          don&apos;t need to open your mail app.
        </p>

        {status === "success" ? (
          <div
            className="mt-8 rounded-2xl border border-[#d4e8dc] bg-[#f0faf3] px-5 py-4 text-[#166534]"
            role="status"
          >
            <p className="font-medium">Thanks — your message was sent.</p>
            <p className="mt-1 text-sm text-[#15803d]">
              We&apos;ll get back to you as soon as we can.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm font-semibold text-[#5b4d9e] underline-offset-2 hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative mt-8 space-y-6"
          >
            {status === "error" && errorMessage ? (
              <p
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}

            {/* Honeypot — leave hidden; bots often fill it */}
            <div
              className="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden opacity-0"
              aria-hidden="true"
            >
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <span className={labelClass}>
                Name <span className="text-red-600">*</span>
              </span>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-first" className="sr-only">
                    First name
                  </label>
                  <input
                    id="contact-first"
                    name="first"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="First"
                    className={inputClass}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="contact-last" className="sr-only">
                    Last name
                  </label>
                  <input
                    id="contact-last"
                    name="last"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Last"
                    className={inputClass}
                    disabled={status === "submitting"}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                Phone number{" "}
                <span className="font-normal text-[#6b7280]">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={inputClass}
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={8000}
                rows={5}
                className={`${inputClass} resize-y min-h-[8rem]`}
                placeholder="How can we help you?"
                disabled={status === "submitting"}
              />
            </div>

            {turnstileSiteKey ? (
              <div className="flex justify-center">
                <Turnstile
                  key={captchaKey}
                  siteKey={turnstileSiteKey}
                  onSuccess={setCaptchaToken}
                  onExpire={() => setCaptchaToken(null)}
                  onError={() => setCaptchaToken(null)}
                  options={{ theme: "light" }}
                />
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="min-h-[48px] w-full rounded-full bg-[#5b4d9e] px-8 py-3 font-semibold text-white shadow-[0_2px_12px_rgba(74,61,130,0.35)] transition-all duration-150 hover:bg-[#4a3d82] hover:shadow-[0_4px_16px_rgba(74,61,130,0.4)] disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
