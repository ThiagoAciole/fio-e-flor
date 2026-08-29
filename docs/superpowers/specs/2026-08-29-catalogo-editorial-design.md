# Desenho: catálogo editorial Fio & Flor

## Objetivo

Evoluir a home para alternar entre seções editoriais sem duplicar produtos e o grid de resultados para busca ou filtro, preservando carrinho e checkout por WhatsApp.

## Fonte de dados

`src/data/catalog.json` será a única fonte de produtos, coleções, ordem e composição das seções. Cada seção guardará somente IDs de produtos. O adapter `src/data/catalog.ts` validará o JSON, rejeitará IDs duplicados ou referências inválidas e exportará um `Map` por ID para UI e carrinho.

## Domínio

- `ProductCategory`: `buques`, `flores`, `arranjos` ou `presentes`.
- `CatalogFilter`: categoria comercial, `featured` ou `customizable`.
- `CatalogCollection`: metadado editorial independente de filtros.
- `CatalogSection`: união discriminada dos formatos de apresentação exigidos pelo driver.

Os nove produtos mock existentes manterão seus IDs, preços e disponibilidade. A primeira migração não inventará produtos, preços, variantes ou imagens para as coleções inspiradas no PDF ausente.

## Fluxo de UI

`activeFilter: CatalogFilter | null` terá valor inicial `null`. Sem busca e sem filtro, `App` renderiza `CatalogSections`. Ao buscar ou selecionar um filtro, renderiza `ProductGrid`; ao limpar a busca sem filtro, volta ao editorial. `ProductCard`, `ProductDetails`, reducer, storage e WhatsApp continuam usando o mesmo `productId`.

## Componentes

O renderer despacha somente pelo tipo de section. Os componentes de section recebem dados tipados, resolvem produtos pelo adapter e reutilizam `ProductCard`, recebendo as callbacks atuais de abrir/adicionar/alterar quantidade. A seção CTA reutiliza `createWhatsappLink`; não cria produto ou carrinho paralelo.

## Validação

Cada fase executará `npm run build` e `npm run lint`. A validação do adapter cobrirá categorias, IDs duplicados, collections desconhecidas e referências de sections inexistentes. O fluxo manual verificará busca, filtros, carrinho persistido e mensagem de WhatsApp antes de avançar.
