# Deploy, DNS e verificação

Passo a passo para colocar `aulasdematematicabh.com.br` no ar em Cloudflare
Pages e destravar o Ciclo 1. Faça na ordem — cada passo depende do anterior.

## 1. Apontar o domínio para a Cloudflare

O domínio já foi comprado no registrador. Para usar Cloudflare Pages com DNS na
Cloudflare (o caminho mais simples, e o que torna o passo 5 trivial):

1. Crie conta gratuita em [cloudflare.com](https://dash.cloudflare.com/sign-up).
2. **Add a site** → digite `aulasdematematicabh.com.br` → plano **Free**.
3. A Cloudflare mostra dois *nameservers* (algo como `ana.ns.cloudflare.com`).
4. No painel do registrador onde comprou o domínio, troque os nameservers pelos
   dois da Cloudflare.
5. Espere propagar. Costuma levar de 15 minutos a algumas horas; o limite formal
   é 48h, mas raramente passa de uma tarde. A Cloudflare manda e-mail quando ativa.

## 2. Publicar o site

Na Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, autorize o
GitHub e escolha o repositório `flavia-vale/aulamatematica`.

Configuração do build:

| Campo | Valor |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |

O arquivo `.nvmrc` do repositório fixa o Node em 22. **Sem ele o build quebra**:
o padrão da Cloudflare Pages é uma versão antiga demais para o Astro 6.

Cada push em `main` republica o site sozinho. Branches viram previews.

## 3. Ligar o domínio ao projeto

No projeto do Pages: **Custom domains → Set up a custom domain**.

Adicione **os dois**:

- `aulasdematematicabh.com.br` (o principal)
- `www.aulasdematematicabh.com.br` (redireciona para o principal)

A Cloudflare cria os registros DNS e emite o certificado SSL sozinha, em poucos
minutos. Se ficar mais de uma hora em "pending", quase sempre é o passo 1 que
ainda não propagou.

## 4. Conferir antes de pedir indexação

Quatro verificações. **A segunda é a que mais quebra** — o site gera arquivos
`.html`, e o canonical de cada página aponta para o endereço sem extensão. A
Cloudflare Pages resolve isso automaticamente, mas confirme:

- [ ] `https://aulasdematematicabh.com.br` abre, com cadeado.
- [ ] `https://aulasdematematicabh.com.br/sobre` abre **sem** `.html` na URL.
- [ ] `https://aulasdematematicabh.com.br/sitemap-index.xml` responde XML.
- [ ] `https://aulasdematematicabh.com.br/robots.txt` responde texto.

Se `/sobre` der 404 e só `/sobre.html` funcionar, pare: o Google vai indexar um
endereço e o site aponta para outro. É correção de uma linha, me avise.

## 5. Verificar no Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) →
   **Adicionar propriedade** → coluna **Domínio** (não "Prefixo do URL").
2. Digite `aulasdematematicabh.com.br`, sem `https://` e sem `www`.
3. O Google mostra um registro TXT. Com o DNS na Cloudflare: **DNS → Records →
   Add record → Type TXT → Name `@` → Content: cole o valor**. Salve.
4. Volte no Google e clique **Verificar**. Costuma valer em minutos.

O tipo **Domínio** cobre http, https, com e sem `www`, tudo numa propriedade só.
"Prefixo do URL" cobriria só um endereço exato, e o tráfego que entrasse pelos
outros ficaria fora da medição.

> **A partir daqui o histórico começa a existir.** O Search Console **não é
> retroativo**: nenhum dado anterior à verificação será recuperado. Cada dia sem
> verificar é um dia que não vai existir na tabela histórica.

## 6. Destravar o ciclo

Assim que a verificação passar:

1. `npm run build && npm run indexnow` — avisa Bing, Yandex e DuckDuckGo de uma
   vez. O Google não participa desse protocolo.
2. Peça indexação manual das 11 páginas no Search Console (Inspeção de URL →
   Solicitar indexação). Cota de ~10 a 12 por dia, então cabe em um dia.
   A lista e o controle estão em
   [leads-organicos/pendencias-indexacao.md](leads-organicos/pendencias-indexacao.md).
3. Marque a data de cada pedido naquela tabela. É essa contagem que depois
   responde se uma página não indexou por qualidade ou por ninguém ter pedido.
4. Espere ~30 dias e rode as Fases 1 e 2 do
   [ciclo](leads-organicos/README.md).
