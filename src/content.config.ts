import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    linkedinUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
    /** Article language. Site chrome stays English; articles can be EN or FR. */
    lang: z.enum(['en', 'fr']).default('en'),
    /** Post id (filename without .md) of the counterpart in the other language. */
    translationOf: z.string().optional(),
  }),
});

export const collections = { writing };
