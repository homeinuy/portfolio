import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    tech: z.array(z.string()).optional(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const desarrollos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/desarrollos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    location: z.string().optional(),
    status: z.string().optional(),
    youtubeId: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, desarrollos };
