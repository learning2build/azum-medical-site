# To-do: Contact form — production email & anti-spam

**Status:** Deferred. The site already includes server-side contact (`POST /api/contact` via Resend), Turnstile hooks, optional Upstash rate limiting, and docs in `site/.env.example` + `docs/development-workflow.md`. You can ship without turning everything on locally; **Vercel production** needs the env vars below when you want the form to work live and stay protected.

Use this checklist when you are ready.

---

## 1. Resend — API key, inbox, verified “from”

1. Create or open an account at [Resend](https://resend.com).
2. In the dashboard, create an **API key** and copy it (prefix `re_`).
3. Decide the **inbox** that should receive contact submissions (`CONTACT_EMAIL_TO`). Do not commit this address in application code; only set it in environment variables.
4. [Verify a sending domain](https://resend.com/docs/dashboard/domains/introduction) in Resend and choose a **from** address on that domain, e.g. `AZUM Medical <hello@yourdomain.com>` (`CONTACT_FROM_EMAIL`). Until a domain is verified, Resend’s test sender (`onboarding@resend.dev`) is possible for experiments but has limits.
5. In `site/`, copy `site/.env.example` → `.env.local` (if you have not already) and set:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO`
   - `CONTACT_FROM_EMAIL` (optional locally: the API falls back to `AZUM Medical <onboarding@resend.dev>` when **not** on Vercel and the var is unset).
6. In **Vercel** → your project → **Settings** → **Environment Variables**, add the same variables for **Production** (and **Preview** if previews should send mail). **Redeploy** after saving.

**Reference:** `docs/development-workflow.md` (Contact form section).

---

## 2. Cloudflare Turnstile — required on Vercel

When `VERCEL` is set, the API returns **503** if `TURNSTILE_SECRET_KEY` is missing. The contact form shows the widget when `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set.

1. In [Cloudflare Dashboard](https://dash.cloudflare.com) → **Turnstile** → add a site/widget.
2. Copy the **Site key** (public) and **Secret key** (server-only).
3. Local: set in `site/.env.local`:
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`  
   Without these, local dev can skip captcha verification (secret unset); with both set, behavior matches production.
4. Vercel: add both variables for Production (and Preview if needed). Redeploy.

---

## 3. Upstash Redis — optional rate limit

If `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are both set, `/api/contact` applies a **sliding window** limit of **5 requests per hour per IP** (keyed from `x-forwarded-for` / `x-real-ip`).

1. Create a free Redis database at [Upstash](https://upstash.com).
2. Copy the **REST URL** and **REST TOKEN** from the database page (not the TCP URL unless you change the code).
3. Set both in `.env.local` and in Vercel for the environments where you want limiting. Redeploy.

If these variables are omitted, the form still works; only the per-IP throttle is disabled.

---

## 4. Final verification

- [ ] Submit the contact form on **production** and confirm the message arrives at `CONTACT_EMAIL_TO`.
- [ ] Confirm **reply-to** is the visitor’s email (API sets `replyTo` to the submitted address).
- [ ] With Turnstile enabled, confirm a submission fails without completing the widget and succeeds after.
- [ ] (If Upstash enabled) Optionally hit the limit and confirm **429** with the user-facing error message.

---

## Related files (for implementers)

| Area | Location |
|------|----------|
| API route | `site/app/api/contact/route.ts` |
| Turnstile verify | `site/lib/contact-server.ts` |
| Form UI + widget | `site/components/contact/ContactMessageForm.tsx` |
| Env template | `site/.env.example` |
| Human setup guide | `docs/development-workflow.md` |
