import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "projects");

const projects = [
  { id: "northlight", title: "Northlight", category: "BRANDING", accent: "#a8a29e" },
  { id: "maison", title: "Maison Vale", category: "BRANDING", accent: "#78716c" },
  { id: "atlas", title: "Atlas Digital", category: "DIGITAL", accent: "#57534e" },
  { id: "tide", title: "Tide Journal", category: "DIGITAL", accent: "#44403c" },
  { id: "folio", title: "Folio Gallery", category: "SPATIAL", accent: "#292524" },
  { id: "ember", title: "Ember Workspace", category: "SPATIAL", accent: "#1c1917" },
  { id: "lumen", title: "Lumen App", category: "DIGITAL", accent: "#a8a29e" },
  { id: "haven", title: "Haven Estates", category: "BRANDING", accent: "#78716c" },
];

function svg({ title, category, accent }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#faf9f7"/>
      <stop offset="45%" stop-color="${accent}" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0.5"/>
    </linearGradient>
    <radialGradient id="glow" cx="75%" cy="25%" r="45%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect width="800" height="600" fill="url(#glow)"/>
  <rect x="56" y="72" width="240" height="340" rx="6" fill="${accent}" opacity="0.22"/>
  <rect x="88" y="104" width="176" height="276" rx="2" fill="#faf9f7" opacity="0.55"/>
  <circle cx="620" cy="168" r="112" fill="${accent}" opacity="0.18"/>
  <circle cx="620" cy="168" r="64" fill="${accent}" opacity="0.28"/>
  <rect x="340" y="196" width="380" height="10" rx="2" fill="${accent}" opacity="0.4"/>
  <rect x="340" y="228" width="300" height="8" rx="2" fill="${accent}" opacity="0.28"/>
  <rect x="340" y="256" width="220" height="8" rx="2" fill="${accent}" opacity="0.2"/>
  <rect x="340" y="320" width="360" height="120" rx="4" fill="${accent}" opacity="0.12"/>
  <text x="56" y="500" font-family="Georgia, 'Times New Roman', serif" font-size="42" fill="#1c1917">${title}</text>
  <text x="56" y="538" font-family="system-ui, sans-serif" font-size="13" fill="#57534e" letter-spacing="4">${category}</text>
</svg>
`;
}

mkdirSync(root, { recursive: true });
for (const project of projects) {
  writeFileSync(join(root, `${project.id}.svg`), svg(project));
  console.log(`wrote ${project.id}.svg`);
}
