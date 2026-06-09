# Cluster Leaf Safaris

**Client:** Cluster Leaf Safaris (Taedza Mtambanengwe / Mr. T)
**Studio:** Tangison
**Date:** 9 June 2026
**Repo:** github.com/tangison/clusterleaf-safaris
**Live:** clusterleafsafaris.com

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + custom brand tokens |
| UI Kit | shadcn/ui (Radix primitives) |
| Animation | Framer Motion |
| Fonts | Playfair Display (headings), Inter (body) |
| Hosting | Vercel (production) |
| CMS | Static — all content in src/lib/content.ts |

---

## Project Structure

```
src/
  app/             Pages and layouts (App Router)
    about/         About page
    blog/          Blog listing + [slug] pages
    contact/       Contact form (WhatsApp redirect)
    destinations/  Destinations page
    faq/           FAQ page
    gallery/       Gallery page
    privacy/       Privacy policy
    reviews/       Testimonials page
    safaris/       Safari listing + [slug] pages
    terms/         Terms of service
  components/
    ui/            shadcn/ui components
    sections/      FAQSection, CompactFAQ
    widgets/       WhatsAppWidget, ScrollToTop
    Navbar.tsx     Floating pill navigation
    Footer.tsx     Site footer
    CTASection.tsx Call-to-action block
    ...            Hero, SafariCard, etc.
  lib/
    content.ts     All site data (company info, safaris, destinations, etc.)
    faqData.ts     FAQ items
    schema.ts      JSON-LD structured data
    utils.ts       Utility functions
  hooks/
    use-toast.ts   Toast notifications
```

---

## Key Decisions

**WhatsApp-first contact.** The contact form builds a pre-filled WhatsApp message and opens wa.me. No email API, no backend contact route, no payment integration. This is intentional for the SADC market.

**Single source of truth.** All company contact details (phone, email, WhatsApp, address, social links) live in `src/lib/content.ts` under `companyInfo`. Every component imports from there — no hardcoded values anywhere.

**Static generation.** All 23 pages are pre-rendered at build time. No server-side rendering, no API routes, no database. Maximum performance on Vercel's edge network.

**SEO.** Each page exports its own `Metadata` object with canonical URLs, Open Graph tags, and JSON-LD structured data (Organization, WebSite, LocalBusiness, BreadcrumbList schemas).

---

## Getting Started

```bash
npm install
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # eslint
```

Node 18+ required. Bun also works.

---

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| savanna | #4A5D4E | Primary brand |
| charcoal | #2C3E2D | Text, dark backgrounds |
| sunset | #D97757 | CTAs, highlights |
| desert | #E3D5C1 | Borders, secondary |
| gold | #D4AF37 | Ratings, accents |
| warm-white | #F9F9F7 | Page backgrounds |

---

## Changelog

### v2.1.0 — 9 June 2026

- Consolidated all hardcoded phone, email, and address values to companyInfo source of truth
- Fixed WhatsApp deep link bug in Footer (was including + prefix in wa.me URL)
- Removed docx dependency (not used by the website)
- Updated README to Tangison branding

### v2.0.0 — June 2026

- Migrated to Next.js 16 with Turbopack
- Converted 119 images to WebP (66.8% size reduction)
- Re-encoded 3 videos to H.264 CRF28 (90.1% size reduction)
- Removed all dead code: unused UI components, unreachable pages, unused hooks, dead metadata files
- Removed ~209MB of unreferenced assets (duplicate JPGs, unused backgrounds, unused logos)
- Contact form converted to WhatsApp-first (no API route, no email backend)
- Added WhatsApp floating widget with scroll/time triggers
- Added grain texture overlay, scroll-to-top widget
- Full SEO overhaul: per-page metadata, JSON-LD schemas, robots.txt, sitemap.xml
- Tailwind CSS v4 migration with custom brand tokens

### v1.0.0 — January 2025

- Initial Next.js website build

---

## License

Copyright 2025-2026 Cluster Leaf Safaris. All rights reserved.

Built by [Tangison](mailto:tangison@proton.me)
