/**
 * IndexNow — Fase 0 do Ciclo de Leads Orgânicos.
 *
 * Avisa Bing, Yandex e DuckDuckGo de toda página publicada, de graça e sem
 * intervenção manual. O Google NÃO participa do protocolo: lá o pedido é um a
 * um, na mão, em Search Console → Inspeção de URL → Solicitar indexação.
 * Controle desses pedidos manuais: docs/leads-organicos/pendencias-indexacao.md
 *
 * Uso: npm run build && npm run indexnow
 */
import { readdirSync, statSync, existsSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const HOST = 'aulasdematematicabh.com.br';
const KEY = '979cbb76d71340fd8d64204a516c73ca';
const DIST = 'dist';

if (!existsSync(join('public', KEY + '.txt'))) {
  console.error('Arquivo de chave ausente em public/. O IndexNow rejeita sem ele.');
  process.exit(1);
}
if (!existsSync(DIST)) {
  console.error('dist/ não existe. Rode `npm run build` antes.');
  process.exit(1);
}

const html = (d) =>
  readdirSync(d).flatMap((n) => {
    const p = join(d, n);
    return statSync(p).isDirectory() ? html(p) : n.endsWith('.html') ? [p] : [];
  });

const urlList = html(DIST)
  .filter((f) => !/<meta name="robots" content="[^"]*noindex/.test(readFileSync(f, 'utf8')))
  .map((f) => {
    const r = '/' + relative(DIST, f).split(sep).join('/').replace(/\.html$/, '');
    return `https://${HOST}${r === '/index' ? '' : r}`;
  })
  .sort();

const payload = { host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList };

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

console.log(`${urlList.length} URLs enviadas — HTTP ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) console.log('Aceito.');
else { console.error(await res.text()); process.exit(1); }
