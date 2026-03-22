"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-[#ebe8f0] bg-white px-4 py-3 text-[#1f2937] shadow-sm outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#5b4d9e] focus:ring-2 focus:ring-[#5b4d9e]/20";

const labelClass = "block text-sm font-medium text-[#374151]";

export function ContactMessageForm() {
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const first = String(fd.get("first") ?? "").trim();
    const last = String(fd.get("last") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!first || !last || !email || !message) return;

    setStatus("opening");
    const subject = encodeURIComponent("Message from AZUM Medical website");
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nEmail: ${email}\nPhone: ${phone || "(not provided)"}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.contactFormEmail}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("idle"), 1500);
  }

  return (
    <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14 lg:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
          Send Us a Message
        </h2>
        <p className="mt-2 text-sm text-[#6b7280]">
          Fill out the form below. Sending will open your email app with your
          message addressed to us—you can review and send from there.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
              rows={5}
              className={`${inputClass} resize-y min-h-[8rem]`}
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "opening"}
            className="min-h-[48px] w-full rounded-full bg-[#5b4d9e] px-8 py-3 font-semibold text-white shadow-[0_2px_12px_rgba(74,61,130,0.35)] transition-all duration-150 hover:bg-[#4a3d82] hover:shadow-[0_4px_16px_rgba(74,61,130,0.4)] disabled:opacity-70 sm:w-auto"
          >
            {status === "opening" ? "Opening email…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
