---
name: phase-4-homepage-polish
overview: Refine the existing AZUM Medical homepage visuals to feel more premium, warm, and concierge-wellness oriented while preserving the current structure and content flow.
todos:
  - id: polish-typography
    content: Refine global typography and color hierarchy in globals.css and headings across homepage sections.
    status: pending
  - id: polish-spacing-layout
    content: Standardize section spacing, max-widths, and background alternation for consistent rhythm.
    status: pending
  - id: polish-buttons-links
    content: Unify button and link styles, including hover and focus states, across header, hero, CTAs, and sections.
    status: pending
  - id: polish-cards-icons
    content: Refine card shapes, shadows, icon colors/sizes, and hover behavior for services, steps, pillars, and testimonials.
    status: pending
  - id: polish-hero-doctor-finalcta
    content: Enhance Hero, MeetTheDoctor, and FinalCTA sections to feel more concierge and welcoming.
    status: pending
  - id: polish-mobile-cta
    content: Audit and improve mobile spacing, tap targets, and MobileStickyCTA behavior.
    status: pending
  - id: polish-accessibility-pass
    content: Quick accessibility and visual QA pass for contrast, heading order, and overflow on common breakpoints.
    status: pending
isProject: false
---

# Phase 4 — Homepage Polish Plan (3.6)

## Objectives

- Enhance the existing homepage so it feels more **premium, calm, and wellness-focused** while preserving all current sections and structure.
- Improve **typography hierarchy, spacing, and rhythm** for easier scanning and a boutique-clinic feel.
- Refine **buttons, cards, and color usage** to use purple and gold more elegantly and reduce any “starter template” feel.
- Ensure **mobile experience, touch targets, and hover/focus states** are clean and accessible.

## Key Files to Adjust

- Global styles: `[site/app/globals.css](site/app/globals.css)`
- Layout: `[site/app/layout.tsx](site/app/layout.tsx)`, `[site/components/layout/Header.tsx](site/components/layout/Header.tsx)`, `[site/components/layout/Footer.tsx](site/components/layout/Footer.tsx)`, `[site/components/layout/MobileStickyCTA.tsx](site/components/layout/MobileStickyCTA.tsx)`
- Homepage sections:
  - `[site/components/home/Hero.tsx](site/components/home/Hero.tsx)`
  - `[site/components/home/TrustStrip.tsx](site/components/home/TrustStrip.tsx)`
  - `[site/components/home/ServicesOverview.tsx](site/components/home/ServicesOverview.tsx)`
  - `[site/components/home/MeetTheDoctor.tsx](site/components/home/MeetTheDoctor.tsx)`
  - `[site/components/home/NewPatientProcess.tsx](site/components/home/NewPatientProcess.tsx)`
  - `[site/components/home/WhyChooseAzum.tsx](site/components/home/WhyChooseAzum.tsx)`
  - `[site/components/home/Testimonials.tsx](site/components/home/Testimonials.tsx)`
  - `[site/components/home/InsuranceInfo.tsx](site/components/home/InsuranceInfo.tsx)`
  - `[site/components/home/FinalCTA.tsx](site/components/home/FinalCTA.tsx)`

## Detailed Plan

### 1. Typography & Color Hierarchy

- **Refine heading scales** in section components to create a clear visual ladder: Hero `h1` remains dominant, section `h2` slightly reduced but consistent, subheadings unified.
- In `globals.css`, tune base line-height and letter-spacing for headings and body to feel **airy but still clinical**.
- Use the serif font **only for key headings** (hero title, main section titles) and keep body text in sans-serif to maintain readability.
- Introduce a couple of semantic utility classes (e.g. `.eyebrow`, `.section-kicker`) styled via Tailwind classes to add subtle “concierge” flourishes without heavy borders.
- Tighten color usage:
  - Purple for **primary actions and key headings**.
  - Gold for **accents only** (borders, small icons, subtle underline on hover), avoiding large gold blocks.

### 2. Spacing, Rhythm, and Section Framing

- Standardize **vertical padding** for sections (e.g. `py-16` mobile, `py-24` desktop) across all homepage sections to create a predictable rhythm.
- Ensure consistent **max-width containers** (`max-w-5xl` / `max-w-7xl`) and centered content to avoid sections feeling disjointed.
- Replace any overly boxy containers with:
  - Softer **rounded-2xl** corners.
  - Lighter borders (`border-[#ebe8f0]`) and **more subtle shadows**.
- Use gentle background alternation (ivory ↔ soft lavender) to separate sections while keeping the overall page light and calm.

### 3. Buttons, Links, and Hover States

- Unify primary/secondary button styles across components:
  - **Primary**: Filled purple, rounded-full, slightly larger padding, `transition-all duration-200 ease-out`, subtle lift on hover.
  - **Secondary / Outline**: Purple or gold border with transparent background, color-inversion or soft fill on hover.
- Ensure **focus-visible rings** for all interactive elements for accessibility.
- Replace any leftover generic Next/Vercel button styles with this tailored system.

### 4. Cards and Iconography

- Update card components (Services, New Patient Steps, Value Pillars, Testimonials) to:
  - Use consistent inner padding and spacing between titles/body.
  - Use a **soft gradient or very light tint** in specific hero/value cards where appropriate for a more premium feel.
  - Slight `hover:-translate-y-1 hover:shadow-md` transitions on desktop only (`motion-safe` for respect of reduced motion).
- Harmonize icon sizes and colors (purple primary, gold accent where it adds warmth, not distraction).

### 5. Hero & Key Sections Styling

- Hero (`Hero.tsx`):
  - Make hierarchy very clear: larger `h1`, smaller but confident subheadline, and balanced spacing between copy and CTAs.
  - Consider a **softer gradient** and possibly a gold accent line or pill above the headline (e.g. “Concierge primary care in Houston”).
  - Ensure on mobile the text stack, buttons, and image placeholder feel balanced and not cramped.
- Meet the Doctor:
  - Refine the portrait placeholder styling (softer frame, subtle shadow, maybe a gold border accent) to imply a future premium photo.
  - Adjust paragraph spacing to avoid dense blocks.
- Final CTA:
  - Keep strong purple gradient but soften text and button sizing so it feels inviting, not aggressive.

### 6. Mobile Experience & Touch Targets

- Audit all key taps (nav, CTAs, cards) to ensure **at least 44px** tap height and adequate horizontal padding.
- Slightly increase mobile vertical spacing between stacked sections to prevent crowding.
- Verify the **MobileStickyCTA** bar doesn’t overlap important content and has comfortable tap targets.

### 7. Transitions and Micro-interactions

- Add subtle `transition-all duration-150–200 ease-out` to:
  - Buttons
  - Card hover states
  - Nav links (color changes only)
- Avoid heavy entrance animations to keep things performant and non-distracting; focus on **hover/focus feedback** and micro-movement only.

### 8. Accessibility & Cleanliness Pass

- Ensure color combinations for text on backgrounds meet contrast guidelines (especially purple/gold on light backgrounds).
- Check semantic structure (headings order) remains logical while we tweak styles.
- Run a quick manual pass on desktop and mobile widths to ensure no clipped text or overflow.

## Implementation Notes

- No new pages or routing changes; all work stays within existing components.
- No additional dependencies; all polish done with Tailwind CSS utilities and small tweaks to JSX structure where needed (spacing wrappers, etc.).
- Keep code changes localized and readable so future content changes remain straightforward.

