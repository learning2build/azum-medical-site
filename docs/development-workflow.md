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

2. **Start the dev server:**
   ```bash
   cd site
   npm run dev
   ```
   (First time only: run `npm install` before `npm run dev`.)

3. **Open in your browser:**
   ```
   http://localhost:3000
   ```
   The site runs **only on port 3000**. If you see “port in use,” close the other terminal or app using 3000, then run `npm run dev` again.

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
cd site
npm install    # first time only
npm run dev
```

Then open **http://localhost:3000** in your browser. The dev server is fixed to port 3000.

**If the site doesn’t load (“connection failed” or “refused”):**

- In the terminal where you ran `npm run dev`, you should see `✓ Ready in ...`. If you don’t, the server didn’t start.
- If it says “Port 3000 is in use,” either close the other app using 3000 or kill it:
  ```bash
  lsof -i :3000
  kill -9 <PID>
  ```
  Then run `npm run dev` again.
- Always use **http://localhost:3000** (not 3001 or 3002).

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
