# Cluster Leaf Safaris - Project Documentation

---

## Project Overview

### Business Description

**Company Name:** Cluster Leaf Safaris  
**Founded:** 2015  
**Founder:** Taedza Mtambanengwe ("Mr. T")  
**Location:** Windhoek, Namibia  

Cluster Leaf Safaris is a premium, owner-operated safari company specializing in personalized guided experiences across Southern Africa. The company delivers authentic African adventures with emphasis on conservation, cultural immersion, and bespoke itineraries.

### Core Services

1. **Guided Safari Tours** - Multi-day wildlife and landscape tours
2. **Custom Itineraries** - Tailored safari experiences
3. **Cross-Border Adventures** - Tours spanning multiple countries
4. **Photography Safaris** - Specialized tours for photographers
5. **Cultural Experiences** - Visits to local communities

### Geographic Coverage

| Country | Key Destinations |
|---------|-----------------|
| Namibia | Etosha, Sossusvlei, Swakopmund, Damaraland, Skeleton Coast |
| Botswana | Okavango Delta, Chobe, Moremi, Savuti |
| Zimbabwe | Victoria Falls, Hwange National Park |
| Zambia | South Luangwa, Lower Zambezi |

### Contact Information

| Type | Value |
|------|-------|
| Primary Email | clusterleaf@outlook.com |
| Founder Email | taedza@clusterleafsafaris.com |
| Info Email | info@clusterleafsafaris.com |
| Phone | +264 81 737 8313 |
| WhatsApp | +264 81 737 8313 |
| Location | Windhoek, Namibia |

### Social Media

- **Facebook:** https://www.facebook.com/profile.php?id=100054251930452
- **Instagram:** https://instagram.com/clusterleafsafaris
- **TripAdvisor:** https://tripadvisor.com/clusterleafsafaris
- **Your African Safari:** https://www.yourafricansafari.com/c/3237-cluster-leaf-safaris/

---

## Technical Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14 | React framework with App Router |
| TypeScript | 5 | Type-safe JavaScript |
| Tailwind CSS | 4 | Utility-first CSS |
| Framer Motion | Latest | Animations |
| shadcn/ui | Latest | UI components |

### Fonts

- **Playfair Display** - Headings (serif)
- **Inter** - Body text (sans-serif)

---

## Project Structure

```
/src
├── /app                    # Next.js App Router pages
│   ├── /about              # About page
│   ├── /api/contact        # Contact form API
│   ├── /blog               # Blog pages
│   ├── /contact            # Contact page
│   ├── /destinations       # Destinations page
│   ├── /gallery            # Gallery page
│   ├── /reviews            # Reviews page
│   ├── /safaris            # Safari pages
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
│
├── /components             # React components
│   ├── /ui                 # shadcn/ui components
│   ├── Navbar.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Hero section
│   ├── SafariCard.tsx      # Safari cards
│   └── ...                 # Other components
│
├── /hooks                  # Custom hooks
│   └── use-toast.ts        # Toast notifications
│
└── /lib
    └── content.ts          # Static content data
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- bun (recommended) or npm

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Run linting
bun run lint

# Build for production
bun run build
```

---

## Color System

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Savanna Green | `#4A5D4E` | Primary brand, buttons |
| Deep Forest | `#2C3E2D` | Text, dark backgrounds |
| Warm Ivory | `#F9F9F7` | Page backgrounds |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Desert Sand | `#E3D5C1` | Borders, secondary backgrounds |
| Safari Sunset | `#D97757` | CTAs, highlights |
| Acacia Gold | `#D4AF37` | Ratings, badges |

---

## Navigation Three-Zone Layout

The navigation uses a three-zone layout for visual balance:

```
┌─────────────────────────────────────────────────────────────────┐
│  [ZONE 1: BRAND]    [ZONE 2: NAVIGATION]    [ZONE 3: ACTIONS] │
│                                                                  │
│  Logo               Centered Nav Links        Phone + CTA       │
└─────────────────────────────────────────────────────────────────┘
```

**Zone 1 (Brand):** Fixed width, flex-shrink-0  
**Zone 2 (Navigation):** Flex-1, justify-center  
**Zone 3 (Actions):** Fixed width, flex-shrink-0

---

## Safari Offerings

1. **10-Day Botswana Glamping Safari** - Luxury delta experience
2. **12-Day Classic Namibia** - Major highlights tour
3. **13-Day Photogenic Namibia** - Photography-focused
4. **Victoria Falls & Chobe Combination** - 7-day cross-border
5. **Etosha National Park Experience** - 5-day wildlife focus

---

## Development Notes

### Animation Standards

- **Fast:** 200ms (micro-interactions)
- **Normal:** 400ms (standard transitions)
- **Slow:** 600ms (page transitions)

### Responsive Breakpoints

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### Code Style

- TypeScript strict mode enabled
- Components use "use client" directive for client components
- Framer Motion for animations
- Tailwind utility classes preferred

---

## Changelog

### v1.0.0 - January 2025

#### Added
- Complete Next.js 14 website
- Floating navigation with dropdowns
- Blog section with 5 posts
- Gallery with masonry layout and lightbox
- Contact form with API
- Error pages (404, 500)
- Responsive design
- SEO optimization

---

## License

Copyright © 2025 Cluster Leaf Safaris. All rights reserved.
