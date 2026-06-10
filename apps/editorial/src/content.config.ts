import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authorSlug: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
