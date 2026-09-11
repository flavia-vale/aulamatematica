import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Taciane Andrade'),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    /** Declara a vigência quando o texto exibe R$ — exigido pela regra
     *  `preco-sem-vigencia` do npm run check. Preço sem data envelhece em silêncio. */
    precoVigencia: z.string().regex(/^\d{4}-\d{2}$/).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
