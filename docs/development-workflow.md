# AZUM site – development workflow

Quick reference for local work, Git/GitHub, and how changes reach production.

---

## New machine or first time in this repo

1. Clone the repo and open the folder in Cursor.
2. Install dependencies (once, or after `package.json` / lockfile changes):

   ```bash
   cd site && npm install
   ```

3. Start the app:

   ```bash
   cd site && npm run dev
   ```

4. Open **http://localhost:3000** (dev server uses port **3000**).

---

## When you open the project again

1. Optional: `git pull` if you might have remote changes.
2. `cd site && npm run dev`
3. If dependencies changed after a pull: `cd site && npm install` then `npm run dev`.

**If things act stale or won’t start:** stop the server (Ctrl+C), then:

```bash
cd site && rm -rf .next && npm run dev
```

Still broken after a Node or major dependency change:

```bash
cd site && rm -rf node_modules .next && npm install && npm run dev
```

**Port 3000 in use:** `lsof -i :3000`, then `kill -9 <PID>`, then start the dev server again.

**Shell:** Use `cd site && npm run dev` (with `&&`). `cd site npm run dev` without `&&` will error.

---

## Project layout

```
azum-site-rebuild/
├── docs/
└── site/              ← Next.js app (run commands from here)
    ├── app/
    ├── components/
    ├── public/
    └── package.json
```

Vercel uses **Root Directory = `site`**.

---

## Before you commit

Confirm the site looks right locally (`npm run dev`), then from the **repo root**:

```bash
git status
git add .
git commit -m "Short description of the change"
git push
```

Push triggers **GitHub → Vercel → new deployment**.

**Handy Git:** `git log` for history. Prefer clear commit messages (e.g. “Fix footer spacing on mobile”) over “update” or “fixes”.

---

## Vercel (expect these settings)

| Setting           | Value              |
| ----------------- | ------------------ |
| Framework         | Next.js            |
| Root Directory    | `site`             |
| Build Command     | `npm run build`    |
| Install Command   | `npm install`      |
| Output Directory  | `.next`            |

Check **Vercel → Project → Deployments** after a push. If deploy fails: read Vercel logs, confirm root is `site`, and run `cd site && npm run build` locally.

Add **Environment Variables** in Vercel for anything in `site/.env.example` (e.g. contact form — see below).

---

## Contact form (Resend + Turnstile)

The **Send Us a Message** block on `/contact` POSTs to `POST /api/contact`. Email is sent with [Resend](https://resend.com). **Spam control:** Cloudflare [Turnstile](https://developers.cloudflare.com/turnstile/) (required on Vercel), optional **Upstash** rate limit (5 sends / hour / IP), and a hidden honeypot field.

### Required environment variables

| Variable | Purpose |
| -------- | ------- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_EMAIL_TO` | Where submissions are delivered (not stored in repo) |
| `CONTACT_FROM_EMAIL` | **Required on Vercel** — must be a [verified domain](https://resend.com/docs/dashboard/domains/introduction) sender, e.g. `AZUM Medical <hello@yourdomain.com>` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile widget (public) |
| `TURNSTILE_SECRET_KEY` | Turnstile server verification (**required** whenever `VERCEL` is set) |

Local dev without Turnstile keys: the widget is hidden and the API skips captcha (only when **not** running on Vercel). For a realistic local test, add Turnstile keys from the Cloudflare dashboard.

### Optional

- **`UPSTASH_REDIS_REST_URL`** + **`UPSTASH_REDIS_REST_TOKEN`** — [Upstash Redis](https://upstash.com) for per-IP rate limiting.

Copy `site/.env.example` → `.env.local`, fill in values, and mirror them in **Vercel → Environment Variables** for Preview + Production. Redeploy after changes.

If `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, or (on Vercel) Turnstile / `CONTACT_FROM_EMAIL` are missing, the API returns **503** with a generic error.

---

## Production URL

Preview/production URL is whatever you configured in Vercel (e.g. `*.vercel.app` or your custom domain).
