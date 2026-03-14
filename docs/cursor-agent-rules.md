# Cursor Agent Rules

This document defines development rules for AI agents working on this repository. The goal is to keep the codebase clean, maintainable, and production-ready. Agents should behave like a senior frontend engineer, not a code generator.

---

## Project Overview

This project is a rebuild of the AZUM Medical clinic website. The site represents a boutique, concierge-style primary care clinic in Houston, Texas.

**The design should feel:**
- Warm
- Welcoming
- Clean
- Modern healthcare
- Professional but not corporate

**Avoid making the site feel:**
- Overly corporate
- Tech-startup styled
- Luxury-spa themed
- Template-like

---

## Tech Stack

The project uses:
- Next.js
- React
- Tailwind CSS
- Vercel for deployment

All code must remain compatible with this stack. Do not introduce other frameworks or runtimes unless explicitly requested.

---

## General Agent Behavior

Before generating code, agents must:
- Briefly explain the intended implementation before writing code.
- Prefer modifying existing components over creating unnecessary new ones.
- Not introduce new dependencies unless explicitly requested.
- Maintain consistent spacing, typography, and layout across pages.
- Write code that is easy for a human developer to edit later.
- Avoid over-engineering.

---

## Component Structure

All UI should be built as reusable components under `site/components/`.

Typical component names and locations:
- `site/components/home/` — Hero, ServicesOverview, MeetTheDoctor, Testimonials, etc.
- `site/components/layout/` — Header, Footer, MobileStickyCTA

Avoid duplicating layout logic across components; reuse shared layout patterns.

---

## Styling Rules

- Use **Tailwind CSS utilities only**. Avoid inline styles, unnecessary CSS files, and excessive custom classes.
- Spacing should follow a consistent rhythm. Typical patterns: `py-16`, `py-20`, `gap-8`, `gap-12`, `max-w-6xl`.
- Typography hierarchy should be consistent across sections.

---

## Branding Rules

- **Primary color:** Purple (dominant).
- **Accent color:** Gold (use very sparingly for accents only).
- Avoid gradients unless they are extremely subtle.

---

## Design Philosophy

The site should feel like a boutique medical clinic, not a startup landing page.

**Preferred:**
- Generous whitespace
- Soft shadows
- Rounded corners
- Large, readable typography
- Minimal visual clutter

**Avoid:**
- Flashy UI effects
- Excessive animation
- Glossy gradients
- Heavy borders

---

## Layout Rules

- Use a consistent layout container (e.g. `max-w-6xl mx-auto px-6`).
- Sections should use consistent vertical spacing (e.g. `py-20`).
- Content should not stretch too wide; keep readable text width constrained.

---

## Images

- Store images under `site/public/` (e.g. `/doctor.jpg`, `/clinic.jpg`, `/hero.jpg`).
- Use the Next.js `Image` component when possible.
- Optimize images for performance; avoid oversized assets.

---

## Navigation

- Header navigation should stay simple.
- Main nav items: About, Services, Insurance, Wellness Insights, Contact.
- Primary CTA: **Book Appointment** — keep it visible and prominent.

---

## Content Guidelines

- Text should feel human, warm, confident, and clear.
- Avoid overly technical or corporate language.
- Emphasize: prevention, long-term health, and personalized care.

---

## Code Generation Limits

This project is a **marketing website**, not a full web application. Agents must **not**:
- Create unnecessary pages
- Add backend APIs
- Install third-party UI frameworks (beyond the existing stack)
- Introduce complex state management
- Build authentication systems

---

## File Editing Rules

- Modify only the files necessary to complete the task.
- Avoid large refactors unless explicitly requested.
- Explain structural changes before implementing them.

---

## Accessibility

Maintain accessibility best practices:
- Sufficient color contrast
- Alt text for all images
- Semantic HTML structure
- Keyboard navigability

---

## Performance

- Avoid oversized images, unnecessary JavaScript, and heavy animation libraries.
- Keep bundle size and runtime cost in mind.

---

## Deployment Awareness

The project deploys automatically: **Cursor → Git → GitHub → Vercel**. Avoid changes that break production builds (e.g. invalid config, unsupported features, or build errors).

---

## Final Rule

Prioritize **clarity, simplicity, and maintainability** over complexity or novelty. The goal is a clean, professional, production-ready website.
