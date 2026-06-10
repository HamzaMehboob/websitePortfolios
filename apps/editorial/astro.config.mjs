// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_PAGES_REPO ?? '';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const base = isGitHubPages ? `/${repo}/surface/` : '/';
const origin = process.env.GITHUB_PAGES_ORIGIN ?? 'https://example.github.io';

export default defineConfig({
  integrations: [mdx(), react(), tailwind({ applyBaseStyles: false })],
  server: { port: 4321 },
  base,
  site: isGitHubPages ? `${origin}/${repo}/surface` : 'https://surface.example.dev',
});
