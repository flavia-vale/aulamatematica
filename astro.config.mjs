// @ts-check
import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { atualizacoes } from './src/config/atualizacoes.ts';

/**
 * `lastmod` real de cada rota, das duas únicas fontes que existem no repo:
 *
 * - artigos: `updatedAt ?? publishedAt` do frontmatter, que é a data editorial
 *   do texto e não duplica nada;
 * - todo o resto: a tabela declarada em `src/config/atualizacoes.ts`.
 *
 * Rota sem data não recebe `lastmod` — melhor não declarar do que declarar
 * errado, que é a decisão de 04/09 e continua valendo. O `npm run check` falha
 * se isso acontecer com uma página indexável, então o silêncio aqui não é
 * caminho para uma página nova ficar sem data.
 */
const frontmatterDoArtigo = (slug) => {
  const arquivo = `src/content/blog/${slug}.md`;
  if (!existsSync(arquivo)) return undefined;
  const fm = readFileSync(arquivo, 'utf8').split('---')[1] ?? '';
  const pega = (campo) => fm.match(new RegExp(`^${campo}:\\s*["']?([\\d-]+)`, 'm'))?.[1];
  return pega('updatedAt') ?? pega('publishedAt');
};

const lastmodDe = (rota) => {
  const data = rota.startsWith('/blog/')
    ? frontmatterDoArtigo(rota.slice('/blog/'.length))
    : atualizacoes[rota];
  // Meio-dia UTC, não meia-noite: a data é uma declaração de dia, e 00:00Z cai
  // no dia anterior no fuso de Brasília.
  return data ? new Date(`${data}T12:00:00Z`).toISOString() : undefined;
};

export default defineConfig({
  site: 'https://aulasdematematicabh.com.br',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    // Sem `lastmod` até 18/09/2026, e por um bom motivo: com `new Date()` toda
    // página declarava ter mudado a cada build, inclusive as que não mudaram.
    // Um lastmod que é sempre "agora" é uma informação falsa, e o Google
    // aprende a ignorar o sinal do site inteiro.
    //
    // O que mudou não foi a avaliação, foi a fonte: agora a data vem de uma
    // declaração editorial por página, que fica parada entre builds. Ver o
    // cabeçalho de `src/config/atualizacoes.ts`.
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const rota = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const lastmod = lastmodDe(rota);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});
