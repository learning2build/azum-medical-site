Good. Create a simple **project cheat sheet** so you never forget the workflow. Put this file inside your repo so both **you and future AI agents** know how the project is managed.

Create this file:

```
docs/development-workflow.md
```

Then paste the following.

---

# AZUM Medical Website – Development Workflow

## Quick start — run the site locally

**Always use these three steps:**

1. **Open a terminal** (in Cursor or your system terminal).

2. **Start the dev server** — run this as a single line (the `&&` means “then”):
   ```bash
   cd site && npm run dev
   ```
   (First time only: run `npm install` inside `site` before `npm run dev`.)

3. **Open in your browser:**
   ```
   http://localhost:3000
   ```
   The site runs **only on port 3000**. If you see “port in use,” close the other terminal or app using 3000, then run `npm run dev` again.

**Copy-paste one-liner (from project root):**
```bash
cd site && npm run dev
```
Use `&&` between `cd site` and `npm run dev`. Typing `cd site npm run dev` (no `&&`) causes "cd: too many arguments" because the shell thinks the rest are arguments to `cd`.

**If you see "EADDRINUSE: address already in use 0.0.0.0:3000":** Something is already using port 3000 (e.g. an old dev server). Run:
```bash
lsof -i :3000
```
Note the **PID** (second column, a number like `81716`). Then run (use your PID instead of 81716):
```bash
kill -9 81716
```
Then start the server again: `cd site && npm run dev`.

**zsh vs bash:** On Mac the default shell is zsh. These commands work the same in zsh and bash; you don't need to change anything.

**Why did 127.0.0.1 work but localhost didn't?** The dev server was bound only to the IPv4 loopback address (127.0.0.1). On some systems the name "localhost" resolves to the IPv6 address (::1) first; the server wasn't listening there, so the connection failed. It's now bound to all interfaces (0.0.0.0), so both **http://localhost:3000** and **http://127.0.0.1:3000** work.

---

## When you come back the next day

Use this short routine so everything keeps working:

1. **Open the project** in Cursor (or your editor) and open a terminal in the project folder.

2. **Optional — pull latest** (if you use Git and might have changes from another machine or a teammate):
   ```bash
   git pull
   ```

3. **Go into the site and start the dev server:**
   ```bash
   cd site && npm run dev
   ```
   If you pulled and `package.json` or lockfile changed, run `npm install` once before `npm run dev`.

4. **Open the site** in your browser: **http://localhost:3000** (or http://127.0.0.1:3000).

5. **If something's broken** (weird errors, old code, or the server won't start):
   - Stop the dev server (Ctrl+C in the terminal).
   - Delete the build cache and restart:
     ```bash
     cd site && rm -rf .next && npm run dev
     ```
   - If it's still broken (e.g. after a Node or dependency upgrade), do a clean install:
     ```bash
     cd site && rm -rf node_modules .next && npm install && npm run dev
     ```

That's it. No need to reinstall or rebuild every day unless something changed.

---

## Project Structure

```
azum-medical-site/
├─ docs/
│  └─ development-workflow.md
├─ site/                ← Next.js application
│  ├─ app/
│  ├─ components/
│  ├─ public/
│  ├─ package.json
│  └─ next.config.*
└─ README.md
```

Important:

* The **actual website lives inside `/site`**
* Vercel deploys using **Root Directory = `site`**

---

# Local Development

Run the development server (from project root or from `site`):

```bash
cd site && npm run dev
```
(First time: run `cd site && npm install` once, then `npm run dev`.)

Then open **http://localhost:3000** in your browser. The dev server is fixed to port 3000.

**If the site doesn’t load (“connection failed” or “refused”):**

- In the terminal where you ran `npm run dev`, you should see `✓ Ready in ...`. If you don’t, the server didn’t start.
- If it says “Port 3000 is in use,” either close the other app using 3000 or kill it:
  ```bash
  lsof -i :3000
  kill -9 <PID>
  ```
  Then run `npm run dev` again.
- Use **http://localhost:3000** or **http://127.0.0.1:3000** (same site; if one fails, try the other).

---

# Normal Development Workflow

Every time changes are made in Cursor:

### 1. Verify locally

Confirm the site works locally before committing.

---

### 2. Commit changes

From the **repository root**:

```bash
git add .
git commit -m "Describe what changed"
```

Example:

```bash
git commit -m "Fix footer alignment and improve spacing"
```

---

### 3. Push to GitHub

```bash
git push
```

---

### 4. Automatic deployment

Once pushed:

```
GitHub → triggers Vercel → new deployment
```

Vercel will build the project and publish the updated site.

---

# Deployment Architecture

```
Cursor (local edits)
        ↓
Git commit
        ↓
GitHub repository
        ↓
Vercel auto deployment
        ↓
Live website
```

---

# Vercel Configuration

Project settings should be:

```
Framework Preset: Next.js
Root Directory: site
Build Command: npm run build
Install Command: npm install
Output Directory: .next
```

---

# Checking Deployment Status

### GitHub

Verify commits appear in the repository.

### Vercel

Open:

```
Vercel → Project → Deployments
```

Confirm the newest deployment completed successfully.

---

# Useful Git Commands

Check project status:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "message"
```

Push to GitHub:

```bash
git push
```

View commit history:

```bash
git log
```

---

# Commit Message Guidelines

Use clear messages describing the change.

Examples:

```
Fix footer layout
Improve hero section layout
Update CTA hierarchy
Add Houston location details
Refactor services cards
Polish header spacing
```

Avoid messages like:

```
update
changes
fix stuff
```

---

# When to Push Changes

Push after completing meaningful updates such as:

* hero layout improvements
* footer fixes
* CTA changes
* image additions
* responsive improvements
* content updates

---

# Deployment Troubleshooting

If the site fails to deploy:

1. Check Vercel deployment logs
2. Confirm `site/package.json` exists
3. Confirm Vercel root directory = `site`
4. Verify `npm run build` works locally

---

# Sharing the Site

Production preview URL will look like:

```
https://azum-medical-site.vercel.app
```

Send this link to collaborators or stakeholders for review.

---

# Future Improvements

Potential next steps:

* connect booking system
* add CMS for content editing
* integrate analytics
* improve SEO metadata
* optimize images
* accessibility review

---

## Why this file is useful

You now have:

• a **clear workflow reference**
• instructions future collaborators can follow
• something **AI agents can read for context**

---

One small improvement you should do next (before the site grows):

Add another doc:

```
docs/project-roadmap.md
```

This will track **what features are coming next** so the AI agent doesn’t lose direction.
