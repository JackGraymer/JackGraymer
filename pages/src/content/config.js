import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    order: z.number(),
    company: z.string().optional(),
    brandLogo: image().optional(),
    description: z.string(),
    publishDate: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    thumbnail: image(),
    banner: image(),
    gallery: z.array(image()).optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { projects };
