export type DemoStatus = "live" | "coming-soon";

export interface PortfolioDemo {
  id: string;
  name: string;
  description: string;
  stack: string[];
  thumbnail: string;
  status: DemoStatus;
  appFolder: string;
}

const env = (key: string) => process.env[key] ?? "";

/** Single source of truth for hub `/` and `/demos` (TASK-015). */
export const portfolioDemos: PortfolioDemo[] = [
  {
    id: "pulse",
    name: "Pulse SaaS",
    description: "Creator analytics dashboard with KPIs, trends, and drill-down tables.",
    stack: ["React", "Vite", "TanStack Query"],
    thumbnail: "/demos/pulse.svg",
    status: env("NEXT_PUBLIC_DEMO_PULSE_URL") ? "live" : "coming-soon",
    appFolder: "apps/saas-dashboard",
  },
  {
    id: "atelier-north",
    name: "Atelier North",
    description: "Boutique creative agency with scroll-driven brand storytelling.",
    stack: ["Next.js", "GSAP", "Tailwind"],
    thumbnail: "/demos/agency.svg",
    status: env("NEXT_PUBLIC_DEMO_AGENCY_URL") ? "live" : "coming-soon",
    appFolder: "apps/agency",
  },
  {
    id: "forma",
    name: "Forma Shop",
    description: "Premium home goods e-commerce focused on conversion UX.",
    stack: ["Next.js", "Cart Context", "Tailwind"],
    thumbnail: "/demos/ecommerce.svg",
    status: env("NEXT_PUBLIC_DEMO_FORMA_URL") ? "live" : "coming-soon",
    appFolder: "apps/ecommerce",
  },
  {
    id: "habit",
    name: "Habit App",
    description: "Mobile-first wellness habit tracker built with Flutter web.",
    stack: ["Flutter", "Riverpod", "Material 3"],
    thumbnail: "/demos/habit.svg",
    status: env("NEXT_PUBLIC_DEMO_HABIT_URL") ? "live" : "coming-soon",
    appFolder: "apps/flutter-habit",
  },
  {
    id: "surface",
    name: "Surface Mag",
    description: "Design & technology magazine optimized for reading and performance.",
    stack: ["Astro", "MDX", "Tailwind"],
    thumbnail: "/demos/editorial.svg",
    status: env("NEXT_PUBLIC_DEMO_SURFACE_URL") ? "live" : "coming-soon",
    appFolder: "apps/editorial",
  },
];

export function getDemoUrl(demo: PortfolioDemo): string | null {
  const urls: Record<string, string> = {
    pulse: env("NEXT_PUBLIC_DEMO_PULSE_URL"),
    "atelier-north": env("NEXT_PUBLIC_DEMO_AGENCY_URL"),
    forma: env("NEXT_PUBLIC_DEMO_FORMA_URL"),
    habit: env("NEXT_PUBLIC_DEMO_HABIT_URL"),
    surface: env("NEXT_PUBLIC_DEMO_SURFACE_URL"),
  };
  const url = urls[demo.id];
  return url || null;
}
