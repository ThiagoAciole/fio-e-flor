# Fio & Flor

Catálogo digital mobile-first para flores artesanais em haste de chenille. O fluxo é simples: escolher produtos, revisar o pedido e enviá-lo pelo WhatsApp.

## Tecnologias

React, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide, Context API + `useReducer`, localStorage e Sonner.

## Rodar localmente

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Personalização da loja

- WhatsApp, Instagram e cidade: edite `src/config/store.ts`. O número atual é um placeholder e deve conter apenas país, DDD e número.
- Produtos: adicione ou edite itens em `src/data/products.ts`.
- Categorias: edite `src/data/categories.ts`.
- Imagens: coloque os arquivos em `public/products/` e aponte a propriedade `image` do produto para `/products/nome-do-arquivo.webp`. Enquanto a foto não existir, o catálogo mostra automaticamente `public/products/placeholder.svg`. A logo atual está em `public/fio-flor-logo.svg`.

## Estrutura

```txt
src/
  app/                 composição e providers
  components/          catálogo, carrinho, layout e primitives de UI
  config/store.ts      dados centrais da marca
  data/                produtos e categorias
  features/cart/       reducer, contexto, storage e selectors
  hooks/               filtros e acesso ao carrinho
  lib/                 moeda, busca e WhatsApp
  styles/globals.css   tokens e estilos globais
```

## Publicação

### Vercel

Importe este repositório no painel da Vercel. O preset Vite detecta `npm run build` e publica a pasta `dist` automaticamente.

### Netlify

Crie um novo site a partir do repositório, usando `npm run build` como comando de build e `dist` como diretório de publicação.

Como é uma SPA estática, não há backend, pagamento ou banco de dados para configurar.
