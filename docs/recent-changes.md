# Recent changes – AZUM site

A high-level tracker of recent updates. Use this to review what’s been done and spot what might still be missing.

---

## Content & pages

- **Insurance page** – Replaced placeholder with full content: accepted insurance (e.g. BCBS, United, Cigna), payment options (insurance payers, DPC membership, self-pay, telemedicine), and plan logos. Page is live and linked from nav and homepage.

- **Wellness Insights** – Added as a full section: listing page plus individual article pages. Articles include Wellness Visit, Hypertension, and Diabetes (content sourced from azummedical.com). Accessible from nav and floating nav.

- **Services** – Built out from placeholder: services listing page plus per-service detail pages (e.g. Preventative Care, Acute Care, Chronic Condition Management). Some services marked “coming soon.” Uses shared `services-config` for nav, cards, and service pages.

- **Patient Resources → Wellness Insights** – Patient Resources route now redirects to Wellness Insights so old links and bookmarks still work.

- **Contact** – Already had real content (hours, phone, email, address, book CTA). No change in this pass.

- **About** – Still a “coming soon” placeholder with links to book/contact. Not yet filled with mission, story, or team content.

---

## Build & types

- **Wellness Insights article page** – Fixed TypeScript/build error so Vercel deploys succeed. Articles with intro-only sections (no heading) now type-check correctly.

---

## Header & navigation

- **Header scroll behavior** – Header is no longer sticky/fixed. It scrolls away with the page so the rest of the content is visible when scrolling down (on mobile and desktop).

- **Floating nav (right-side)** – When the user scrolls down past the header, a small nav box appears on the right with links to Home, About, Services, Insurance, Wellness, Contact, and Book. It slides in from the right and hides when scrolling back to the top. Kept small and subtle so it doesn’t block content.

---

## Possible follow-ups to consider

- [ ] Fill in About page (mission, approach, doctor/clinic story).
- [ ] Adjust floating nav scroll threshold or position if needed.
- [ ] Revisit sticky/fixed header if you want the main header to stay on screen again later.
- [ ] Add more entries here as you make further changes.

---

*Last updated: March 2025*
