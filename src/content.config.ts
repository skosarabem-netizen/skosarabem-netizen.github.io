import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // work = selected work on the home page, archive = older projects, sub = a deep dive inside another project
    kind: z.enum(['work', 'archive', 'sub']),
    order: z.number(),
    // the page's address, without slashes, e.g. "project/blind-website"
    path: z.string(),
    org: z.string().optional(),
    years: z.string().optional(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),   // file name in public/assets/media
    logo: z.string().optional(),
    link: z.string().url().optional(),
    parent: z.string().optional(),  // for kind: sub — the id of the parent project
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
