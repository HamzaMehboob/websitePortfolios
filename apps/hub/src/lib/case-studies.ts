export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  stack: string[];
  demoId?: string;
  sections: {
    problem: string;
    research: string;
    ia: string;
    decisions: string[];
    a11yPerf: string;
    outcome: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "hub",
    title: "Portfolio Hub",
    excerpt: "Central launcher connecting six portfolio demos with case study narratives.",
    stack: ["Next.js", "Framer Motion", "Tailwind"],
    sections: {
      problem: "Recruiters and clients need one place to evaluate UI/UX craft across stacks without hunting scattered repos.",
      research: "Audited 3 developer portfolios; mapped flows for discover demo → read case study → contact.",
      ia: "Hub routes: /, /work, /demos, /about, /contact with breadcrumbs on inner pages.",
      decisions: [
        "Index page as portfolio launcher — demos above the fold",
        "Shared demos registry for / and /demos",
        "System theme with persisted override",
      ],
      a11yPerf: "Target Lighthouse 95+; skip link, focus rings, reduced-motion fallbacks.",
      outcome: "Single canonical entry point with clear paths to every demo and case study.",
    },
  },
  {
    slug: "pulse",
    title: "Pulse SaaS",
    excerpt: "Creator analytics dashboard proving dense B2B UI, data hierarchy, and accessible charts.",
    stack: ["React", "Vite", "TanStack Query", "Recharts"],
    demoId: "pulse",
    sections: {
      problem: "Creators need revenue, audience, and campaign metrics in one view without exporting spreadsheets.",
      research: "Compared Stripe Dashboard and GA; defined flows for morning overview, campaign drill-down, and ⌘K navigation.",
      ia: "Sidebar: Overview → Campaigns → Audience → Analytics → Settings; KPI row above charts above tables.",
      decisions: [
        "Inter + 12-column grid for scan-friendly KPI density",
        "Chart palette uses line vs bar + labels — not color alone",
        "Collapsible sidebar with mobile drawer and Portfolio Home link",
      ],
      a11yPerf: "Keyboard command palette; chart aria labels; status badges use text + color; focus rings on controls.",
      outcome: "Dashboard hierarchy mirrors how creators actually scan metrics — totals first, trends second, detail on demand.",
    },
  },
  {
    slug: "atelier-north",
    title: "Atelier North",
    excerpt: "Boutique agency site with editorial typography, scroll narrative, and refined project gallery.",
    stack: ["Next.js", "GSAP", "Fraunces", "Tailwind"],
    demoId: "atelier-north",
    sections: {
      problem: "Premium brands need a studio presence that signals craft without template agency clutter.",
      research: "Audited Pentagram and high-motion agency sites; flows for discover → filter work → contact.",
      ia: "Home scroll story, /work gallery with filters, /about editorial, /contact with 44px CTAs.",
      decisions: [
        "Fraunces + asymmetric layouts — serif as hero, sans for UI chrome",
        "GSAP pin/parallax desktop only; stacked static sections on mobile",
        "Project modals instead of heavy case-study pages for gallery speed",
      ],
      a11yPerf: "Reduced-motion disables scroll-jacking; focus rings on filters and modals; Portfolio Home on all routes.",
      outcome: "Brand reads luxury/minimal while gallery and contact remain fully usable on mobile.",
    },
  },
  {
    slug: "forma",
    title: "Forma Shop",
    excerpt: "Premium e-commerce with conversion-focused PLP, PDP, cart drawer, and guest checkout.",
    stack: ["Next.js", "Zustand", "Tailwind"],
    demoId: "forma",
    sections: {
      problem: "Shoppers abandon when mobile checkout is clunky or trust signals are missing.",
      research: "Audited Article and West Elm; mapped browse → PDP → cart → guest checkout funnel.",
      ia: "/shop PLP, /product/[slug] PDP, cart drawer, 3-step /checkout, confirmation.",
      decisions: [
        "Sticky mobile ATC bar — purchase always one tap away",
        "Cart drawer upsell row to lift AOV without leaving flow",
        "Guest-only checkout with trust badges on payment step",
      ],
      a11yPerf: "Inline validation with focus to first error; 44px touch targets; Portfolio Home in header.",
      outcome: "Reduced perceived checkout friction via guest path, progress indicator, and specific error copy.",
    },
  },
  {
    slug: "habit",
    title: "Habit App",
    excerpt: "Mobile-first wellness tracker with Material 3, onboarding, streaks, and adaptive phone-frame layout.",
    stack: ["Flutter", "Riverpod", "go_router"],
    demoId: "habit",
    sections: {
      problem: "Habit apps fail when onboarding is heavy and daily check-ins feel punitive instead of rewarding.",
      research: "Audited Headspace and Streaks; mapped flows for first-run education, one-tap completion, and settings escape hatch.",
      ia: "Onboarding carousel → bottom nav shell: Home, Habits, Stats, Settings; Portfolio Home in app bar.",
      decisions: [
        "Material 3 seed palette with teal primary and amber accent for warmth",
        "Phone frame on desktop ≥1024px; full-bleed on mobile viewports",
        "SharedPreferences onboarding flag — skip persists permanently",
      ],
      a11yPerf: "48dp touch targets; snackbar confirmation; reduced-motion disables nonessential animation; hub link via HUB_URL.",
      outcome: "Demonstrates native-feeling mobile UX on Flutter web without backend complexity.",
    },
  },
  {
    slug: "surface",
    title: "Surface Mag",
    excerpt: "Editorial magazine with MDX articles, reading progress, TOC, and tag/archive/author routes.",
    stack: ["Astro", "MDX", "React islands"],
    demoId: "surface",
    sections: {
      problem: "Long-form design writing needs typographic polish and reading affordances without SPA bloat.",
      research: "Compared Medium and A List Apart; flows for browse → deep read → tag discovery → author follow-through.",
      ia: "Home featured grid, /articles/[slug], /tags/[tag], /archive, /authors/[slug].",
      decisions: [
        "Source Serif 4 + IBM Plex Sans pairing for editorial voice",
        "React islands only for reading progress and TOC — body stays static HTML",
        "Lazy-loaded hero images with aspect-ratio boxes to limit CLS",
      ],
      a11yPerf: "Skip link, focus rings, reduced-motion hides progress bar; Portfolio Home in site header.",
      outcome: "Fast, readable magazine demo proving content architecture and performance-conscious editorial UX.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
