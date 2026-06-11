import { publicAsset } from "@/lib/assets";

export type ProjectCategory = "branding" | "digital" | "spatial";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: number;
  description: string;
  image: string;
  accent: string;
}

export const categories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "digital", label: "Digital" },
  { id: "spatial", label: "Spatial" },
];

export const projects: Project[] = [
  {
    id: "northlight",
    title: "Northlight Rebrand",
    client: "Northlight Co.",
    category: "branding",
    year: 2025,
    description: "Identity system for a Scandinavian lighting manufacturer — wordmark, packaging, and art direction.",
    image: publicAsset("/projects/northlight.svg"),
    accent: "#a8a29e",
  },
  {
    id: "maison",
    title: "Maison Vale",
    client: "Maison Vale",
    category: "branding",
    year: 2024,
    description: "Luxury hospitality brand with editorial typography and tactile print applications.",
    image: publicAsset("/projects/maison.svg"),
    accent: "#78716c",
  },
  {
    id: "atlas",
    title: "Atlas Digital",
    client: "Atlas Ventures",
    category: "digital",
    year: 2025,
    description: "Investor portal UX with data-forward layouts and restrained motion.",
    image: publicAsset("/projects/atlas.svg"),
    accent: "#57534e",
  },
  {
    id: "tide",
    title: "Tide Journal",
    client: "Tide Media",
    category: "digital",
    year: 2024,
    description: "Reading-first magazine site with custom CMS templates and subscription funnel.",
    image: publicAsset("/projects/tide.svg"),
    accent: "#44403c",
  },
  {
    id: "folio",
    title: "Folio Gallery",
    client: "Folio Arts",
    category: "spatial",
    year: 2025,
    description: "Wayfinding and exhibition graphics for a contemporary art space.",
    image: publicAsset("/projects/folio.svg"),
    accent: "#292524",
  },
  {
    id: "ember",
    title: "Ember Workspace",
    client: "Ember Collective",
    category: "spatial",
    year: 2023,
    description: "Coworking environment — signage, environmental graphics, and brand touchpoints.",
    image: publicAsset("/projects/ember.svg"),
    accent: "#1c1917",
  },
  {
    id: "lumen",
    title: "Lumen App",
    client: "Lumen Health",
    category: "digital",
    year: 2024,
    description: "Wellness app UI system with calm palettes and accessible component library.",
    image: publicAsset("/projects/lumen.svg"),
    accent: "#d6d3d1",
  },
  {
    id: "haven",
    title: "Haven Estates",
    client: "Haven Group",
    category: "branding",
    year: 2023,
    description: "Property development brand balancing heritage cues with modern minimalism.",
    image: publicAsset("/projects/haven.svg"),
    accent: "#a8a29e",
  },
];
