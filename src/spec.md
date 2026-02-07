# Specification

## Summary
**Goal:** Create a modern, light-themed, fully responsive marketing website for the “Start To Succeed” coaching institute with Home, About, Courses, and Contact pages/sections, including SEO, accessibility, click-to-call/WhatsApp CTAs, and a contact form that stores inquiries in-canister.

**Planned changes:**
- Build a mobile-first, light UI (white background, blue/red accents) with consistent typography, card-based sections, soft shadows, and hover/focus states.
- Implement Home page sections: hero (headline/subheadline + “Call Now”, “WhatsApp Us”, “Enroll Now”), “Why Choose” icon cards, course highlights (Classes 6–12, IIT-JEE Foundation, NEET Foundation), and a bottom CTA banner.
- Implement About page/section with Mission, Vision, and Teaching Methodology content blocks in a trust-focused academic tone.
- Implement Courses page/section with two grouped categories (Board 6–12; Competitive foundation IIT-JEE & NEET), each with descriptions and enrollment/contact CTAs.
- Implement Contact page/section showing the exact address and phone/WhatsApp details, a contact form (name, phone, optional email, message) with success/failure states, and a lazy-loaded Google Map embed.
- Add backend (single Motoko actor) canister methods to create/store contact inquiries with timestamp and stable storage persistence across upgrades, including validation and clear errors.
- Add site-wide footer with quick links, contact details, and social links (Facebook + Google My Business URLs provided) opening safely in a new tab.
- Add functional integrations: tel: click-to-call, mobile sticky WhatsApp button, and wire hero CTAs to these actions.
- Add SEO/accessibility basics: semantic headings (single H1), per-page meta title/description, Open Graph basics, accessible form labels, keyboard navigation, visible focus states, alt text, and lazy-load non-critical content.
- Generate and include branded static assets (logo, hero background, favicon/app icon) under `frontend/public/assets/generated` and use them in header/hero and favicon/app icon.

**User-visible outcome:** Visitors can browse a polished “Start To Succeed” site across devices, view institute info and courses, contact via call/WhatsApp, and submit a contact inquiry that is stored reliably on the backend.
