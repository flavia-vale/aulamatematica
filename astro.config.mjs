// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aulasdematematicabh.com.br',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    // Sem `lastmod`: com `new Date()` toda página declarava ter mudado a cada
    // build, inclusive as que não mudaram. Um lastmod que é sempre "agora" é
    // uma informação falsa, e o Google aprende a ignorar o sinal do site
    // inteiro. Melhor não declarar do que declarar errado.
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});
