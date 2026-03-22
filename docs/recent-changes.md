# Recent changes – AZUM site

A high-level tracker of updates. Entries are **grouped by date** (oldest first, newest last) so you can see how the site evolved over time.

---

## March 15, 2025

### Content & pages

- **Insurance page** – Replaced placeholder with full content: accepted insurance (e.g. BCBS, United, Cigna), payment options (insurance payers, DPC membership, self-pay, telemedicine), and plan logos. Page is live and linked from nav and homepage.

- **Wellness Insights** – Added as a full section: listing page plus individual article pages. Articles include Wellness Visit, Hypertension, and Diabetes (content sourced from azummedical.com). Accessible from nav and floating nav.

- **Services** – Built out from placeholder: services listing page plus per-service detail pages (e.g. Preventative Care, Acute Care, Chronic Condition Management). Some services marked “coming soon.” Uses shared `services-config` for nav, cards, and service pages.

- **Patient Resources → Wellness Insights** – Patient Resources route now redirects to Wellness Insights so old links and bookmarks still work.

- **Contact** – Already had real content (hours, phone, email, address, book CTA). No change in this pass.

- **About** – Still a “coming soon” placeholder with links to book/contact. Not yet filled with mission, story, or team content.

### Build & types

- **Wellness Insights article page** – Fixed TypeScript/build error so Vercel deploys succeed. Articles with intro-only sections (no heading) now type-check correctly.

### Header & navigation

- **Header scroll behavior** – Header is no longer sticky/fixed. It scrolls away with the page so the rest of the content is visible when scrolling down (on mobile and desktop).

- **Floating nav (right-side)** – When the user scrolls down past the header, a small nav box appears on the right with links to Home, About, Services, Insurance, Wellness, Contact, and Book. It slides in from the right and hides when scrolling back to the top. Kept small and subtle so it doesn’t block content.

---

## March 21, 2026

### Service detail pages (rich layouts, azummedical.com parity)

- **Acute Care**, **Chronic Condition Management**, **Holistic Wellness Services**, and **Weight Management** – Full hero + section layouts with images under `site/public/services/…`, copy aligned to the live site, Kareo booking where appropriate. Holistic section CTAs for meal plan / weight program point to **Contact** (not scheduling). Weight page: removed duplicate hero-style buttons in the body block and the “Program coming soon” pill in the hero; hero still has Get notified + Book an appointment.

- **Preventative Care** and **Telemedicine** – Refined in the same pass (heroes, CTAs). Telemedicine hero button label: **Schedule Now** (was “Book now”).

- **Acute** and **Chronic** heroes – Removed header **Book Now** / **Click here** buttons (booking remains in lower content and shared bottom CTA).

### Service & hub UI consistency

- **Hero banners** – Shorter vertical padding and no large `min-height` so purple strips size to content; **title size** reduced consistently across service heroes.

- **Primary hero booking CTA** – Shared **`SERVICE_HERO_BOOKING_BUTTON_CLASS`** (`site/lib/service-hero-booking-cta.ts`): white pill, purple text, same as Telemedicine – applied on Preventative, Holistic, Weight, Telemedicine, and **`/services`** listing hero.

- **Typography** – `text-balance` on service (and About) hero titles and subtitles; **Chronic** title uses an intentional line break so “for a Better Quality of Life” is not orphaned.

### All Services (`/services`)

- Replaced plain cream header with **image hero + purple overlay** (preventative hero image), matching service pages; **Book Appointment** uses the white pill CTA style above.

### About (`/about`)

- Rebuilt from **azummedical.com/about/**: hero with `hero-019.jpg`, practice philosophy + five pillars, “Our approach to care” three-image row, bottom book/contact strip.

- Hero matches **service hero scale** (compact banner); **Book** button removed from About hero only.

### Contact (`/contact`)

- **Send Us a Message** form (`ContactMessageForm`) at bottom of page – submits via **mailto** prefilled to `info@azummedical.com` (opens the user’s mail app).

- Top intro: title **Azum Medical** (replacing “Our Location” only); expanded “Get in Touch” block was reverted so the top matches the earlier simple intro except for the new title.

- **Address / Hours / Contact** cards: aligned typography, softer link colors (purple mainly on hover), telemedicine pill toned down; **Address** card title is “Address.”

- Bottom **Book** CTA uses purple-tinted shadow (consistent with other strips).

### Homepage & global chrome

- **Hero** – Removed `min-h-[85vh]` + tightened padding vs **TrustStrip** so less gap between sections.

- **Header** – Smaller logo sizes; **Hero** top padding reduced so less space under nav.

- **Footer** “Book Appointment” card – Removed harsh **white ring**; lavender-tinted border/shadow and purple-tinted button shadow.

---

## Follow-ups to consider

- [ ] Replace mailto contact form with Formspree, Web3Forms, or server-side email when ready.

- [ ] Adjust floating nav scroll threshold or position if needed.

- [ ] Revisit sticky/fixed header if you want the main header to stay on screen again later.

- [ ] Add new **dated sections** above this block (or append new dates) whenever you ship another batch of changes.

---

*Changelog entries: March 15, 2025 · March 21, 2026 · document last edited March 21, 2026*
