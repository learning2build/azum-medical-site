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

## Contact form (Resend)

The **Send Us a Message** block on `/contact` POSTs to `POST /api/contact`, which sends email via [Resend](https://resend.com).

1. Sign up at Resend, create an **API key**.
2. In `site/`, copy `.env.example` → `.env.local` and set:
   - **`RESEND_API_KEY`** — required.
   - **`CONTACT_EMAIL_TO`** — optional; defaults to `cryph00@gmail.com`.
   - **`CONTACT_FROM_EMAIL`** — sender shown in the inbox (must be allowed in Resend). Until you [verify a domain](https://resend.com/docs/dashboard/domains/introduction), use Resend’s test sender, e.g. `AZUM Medical <onboarding@resend.dev>` (often limited to the email on your Resend account).
3. Redeploy with the same variables in **Vercel → Settings → Environment Variables**.

Without `RESEND_API_KEY`, the API returns 503 and the form shows a configuration error.

---

## Production URL

Preview/production URL is whatever you configured in Vercel (e.g. `*.vercel.app` or your custom domain).
