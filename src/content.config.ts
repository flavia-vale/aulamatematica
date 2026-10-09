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
    /** Quem edita o texto. Assina como edição, nunca como autoria nem dentro
     *  da bio da professora (CLAUDE.md, "Quem mantém o site"). Decidido em
     *  09/10/2026: a autoridade de conteúdo de matemática é da professora. */
    editor: z.string().default('Flávia Vale'),
    /** Imagem de capa, caminho em `public/` (ex.: `/blog/slug.png`). Vira o
     *  `og:image` da página e o `image` do `BlogPosting`. Sem ela, a página
     *  usa a og-image do site e não mostra capa. */
    image: z.string().startsWith('/').optional(),
    imageAlt: z.string().optional(),
    /** Perguntas frequentes do artigo. Aparecem visíveis no fim do texto e
     *  viram `FAQPage` no JSON-LD com o mesmo texto: as IAs reproduzem o que
     *  a página declara assim (Ciclo 1, 03/10). */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    /** Declara a vigência quando o texto exibe R$ — exigido pela regra
     *  `preco-sem-vigencia` do npm run check. Preço sem data envelhece em silêncio. */
    precoVigencia: z.string().regex(/^\d{4}-\d{2}$/).optional(),
    draft: z.boolean().default(false),
  }).refine((d) => !d.image || Boolean(d.imageAlt), {
    message: 'imagem de capa sem imageAlt',
    path: ['imageAlt'],
  }),
});

export const collections = { blog };
