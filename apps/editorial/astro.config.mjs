// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [mdx(), react(), tailwind({ applyBaseStyles: false })],
  server: { port: 4321 },
  site: 'https://surface.example.dev',
});
