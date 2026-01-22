import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    company: z.string().optional(),
    brandLogo: z.string().optional(),
    description: z.string(),
    publishDate: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    banner: z.string(),
    gallery: z.array(z.string()).optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { projects };
