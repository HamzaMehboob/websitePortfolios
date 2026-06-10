# Portfolio Frontend Strategy — CTO Plan

Six distinct frontends plus a central hub, each answering a different question recruiters and clients ask. This document is the master plan for the `WebsitePortfolios` monorepo.

---

## Strategic Thesis

A UI/UX specialist portfolio should not be six clones with different colors. Each site answers a different buyer question:

| Question recruiters/clients ask | Site that answers it |
|-------------------------------|----------------------|
| Can you ship polished product UI? | **SaaS Dashboard** |
| Can you tell a brand story? | **Creative Agency** |
| Can you optimize conversion? | **E-commerce** |
| Can you design for mobile-first? | **Flutter app shell** |
| Can you handle content + SEO? | **Editorial / Blog** |
| Can you build fast, accessible, modern web? | **Developer portfolio hub** |

### Hub-and-Spoke Model

One **main portfolio** (Next.js) links to the other five as case studies or live demos.

```
                    ┌─────────────────────┐
                    │  Portfolio Hub      │
                    │  (Next.js 15)       │
                    └──────────┬──────────┘
         ┌──────────┬─────────┼─────────┬──────────┐
         ▼          ▼         ▼         ▼          ▼
    SaaS Dash   Agency    E-commerce  Flutter   Editorial
   (React+Vite) (Next.js)  (Next.js)   (Web)    (Astro)
```

---

## Site 1 — Portfolio Hub (Flagship)

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, shadcn/ui

**Purpose:** Primary URL — resume, case studies, contact, links to all other demos.

**UX Focus:**
- Hero with motion that feels intentional, not decorative
- Case study cards with before/after, metrics, tech tags
- Dark/light theme with system preference
- Accessibility: keyboard nav, focus rings, reduced-motion support
- Performance target: Lighthouse 95+ on all categories

**Differentiator:** Narrate *why* you built the other five sites and what UX decisions you made.

**Key Pages:** `/`, `/work`, `/work/[slug]`, `/about`, `/contact`, `/demos` (launcher for sites 2–6)

---

## Site 2 — SaaS Analytics Dashboard

**Stack:** React 19 + Vite, TanStack Query, Recharts or Tremor, Zustand, Tailwind

**Purpose:** Prove ability to design dense, usable B2B interfaces.

**Concept:** "Pulse" — fictional analytics product for creators (revenue, audience, campaigns).

**UX Focus:**
- Information hierarchy: KPIs → trends → drill-down tables
- Empty states, loading skeletons, error boundaries
- Responsive sidebar that collapses cleanly on tablet
- Data visualization with accessible color palettes (not color-only meaning)
- Command palette (⌘K) for power users

**What It Proves:** Component systems, data-heavy UI, micro-interactions, design tokens.

---

## Site 3 — Creative Agency / Studio

**Stack:** Next.js 15, GSAP or Motion One, custom typography (variable fonts), CSS modules or Tailwind

**Purpose:** Show brand storytelling, editorial layout, and visual impact without sacrificing usability.

**Concept:** "Atelier North" — boutique design studio (fictional).

**UX Focus:**
- Scroll-driven narrative (pinned sections, parallax with restraint)
- Typography scale and whitespace as the hero
- Project gallery with filter + case study modals
- Smooth page transitions
- Mobile: simplified motion, touch-friendly CTAs

**What It Proves:** Visual design leadership, motion design, luxury/minimal aesthetics.

---

## Site 4 — E-commerce (Conversion-Focused)

**Stack:** Next.js 15, Shopify Storefront API *or* mock JSON + Cart context, Stripe-style checkout UI (mock)

**Purpose:** Demonstrate conversion UX — the skill clients pay for.

**Concept:** "Forma" — premium home goods (3–4 product categories).

**UX Focus:**
- Product listing: filters, sort, quick view
- PDP: image gallery, size guide, social proof, sticky add-to-cart
- Cart drawer with upsell
- Checkout flow (multi-step, progress indicator, trust badges)
- Guest checkout path; form validation with clear inline errors

**What It Proves:** Funnel thinking, mobile commerce, trust patterns, A/B-ready structure.

---

## Site 5 — Flutter Web (Mobile-First Product Shell)

**Stack:** Flutter 3.x (web target), Riverpod or Bloc, go_router

**Purpose:** Show cross-platform UI craft and native-feeling mobile patterns on the web.

**Concept:** "Habit" — wellness / habit tracker app shell (no real backend).

**UX Focus:**
- Bottom navigation, gestures, haptic-style feedback (visual)
- Onboarding carousel with skip + progress
- Card-based home, streak visualization, settings
- Adaptive layout: phone frame on desktop, full bleed on mobile
- Material 3 theming with custom brand colors

**What It Proves:** Not web-only — understands mobile IA, touch targets, platform conventions.

**Note:** Deploy as static Flutter web build; embed or link from the hub.

---

## Site 6 — Editorial / Magazine (Content + Performance)

**Stack:** Astro 5, MDX, minimal React islands, Tailwind

**Purpose:** Prove content UX, readability, and extreme performance (different from SPA-heavy stacks).

**Concept:** "Surface" — design & technology magazine (fictional articles).

**UX Focus:**
- Reading experience: optimal line length, typographic rhythm
- Table of contents, reading progress, estimated read time
- Tag/archive pages, author bios
- Image lazy loading, blur placeholders
- Near-instant navigation (Astro's islands architecture)

**What It Proves:** Content strategy, SEO-minded structure, performance engineering.

---

## Optional Site 7 (Stretch Goal)

**Stack:** React + Three.js (React Three Fiber) or SvelteKit

**Concept:** Interactive 3D product configurator or spatial portfolio room.

**Use When:** Standing out for creative tech / WebGL roles. Skip if timeline is tight — Sites 1–6 already cover the market.

---

## Monorepo Structure

```
WebsitePortfolios/
├── apps/
│   ├── hub/                 # Next.js — main portfolio
│   ├── saas-dashboard/      # React + Vite
│   ├── agency/              # Next.js
│   ├── ecommerce/           # Next.js
│   ├── flutter-habit/       # Flutter
│   └── editorial/           # Astro
├── packages/
│   ├── ui-tokens/           # Shared colors, spacing, typography
│   ├── eslint-config/
│   └── tsconfig/
├── docs/
│   └── case-studies/        # MDX writeups per site
├── package.json             # Turborepo or pnpm workspaces
└── README.md
```

**Tooling:** pnpm workspaces + Turborepo for JS/TS apps; Flutter stays in its folder with its own toolchain.

---

## Shared Design System (Lightweight)

Avoid one generic theme across all six — each site should feel distinct. Share only:

| Token Layer | Shared | Per-Site |
|-------------|--------|----------|
| Spacing scale (4/8px) | ✓ | — |
| Neutral grays | ✓ | — |
| Brand primary/accent | — | ✓ unique per demo |
| Typography families | — | ✓ (e.g. agency = serif editorial, SaaS = geometric sans) |
| Motion duration/easing | ✓ | — |

Document decisions in each case study: *"Why Inter + 12-column grid for SaaS vs. why Fraunces + asymmetric layout for agency."*

---

## Phased Delivery (12–16 Weeks, Solo)

| Phase | Weeks | Deliverable |
|-------|-------|-------------|
| **0 — Foundation** | 1–2 | Monorepo, tokens package, hub shell, deploy pipeline (Vercel + Flutter web host) |
| **1 — Credibility** | 3–5 | Hub complete + Site 2 (SaaS) — strongest hire signal |
| **2 — Brand** | 6–8 | Site 3 (Agency) + case study writeups |
| **3 — Commerce** | 9–11 | Site 4 (E-commerce) |
| **4 — Breadth** | 12–14 | Site 5 (Flutter) + Site 6 (Editorial) |
| **5 — Polish** | 15–16 | Cross-linking, Lighthouse pass, accessibility audit, OG images |

---

## Deployment Matrix

| Site | Host | Domain Pattern |
|------|------|----------------|
| Hub | Vercel | `yourname.dev` |
| SaaS, Agency, E-commerce | Vercel (subpaths or subdomains) | `saas.yourname.dev` |
| Flutter | Firebase Hosting or GitHub Pages | `habit.yourname.dev` |
| Editorial | Netlify or Vercel | `surface.yourname.dev` |

---

## Expert UI/UX Differentiation

For each site, ship a **one-page case study** on the hub covering:

1. **Problem** — who is the user, what job are they doing
2. **Research** — even lightweight (competitive audit, 3 user flows)
3. **IA** — sitemap + key wireframe
4. **Design decisions** — 3–5 with tradeoffs
5. **Accessibility & performance** — concrete scores and fixes
6. **Outcome** — "checkout abandonment patterns addressed," not just "built a shop"

That narrative matters more than the stack list.

---

## Tech Summary

| # | Project | Stack | Primary UX Proof |
|---|---------|-------|------------------|
| 1 | Portfolio Hub | Next.js 15, shadcn, Framer Motion | Storytelling, a11y, performance |
| 2 | Pulse SaaS | React + Vite, TanStack, charts | Data UI, design systems |
| 3 | Atelier North | Next.js, GSAP | Brand, motion, editorial layout |
| 4 | Forma Shop | Next.js, cart/checkout patterns | Conversion, mobile commerce |
| 5 | Habit App | Flutter Web | Mobile IA, cross-platform |
| 6 | Surface Mag | Astro, MDX | Content UX, SEO, speed |

---

## Recommended Starting Order

1. **Hub** — so everything has a home from day one
2. **SaaS Dashboard** — fastest path to "senior product designer/dev" signal
3. **Agency** — visual portfolio piece for creative roles
