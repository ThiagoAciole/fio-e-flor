import categoriesJson from "./categories.json";
import collectionsJson from "./collections.json";
import productsJson from "./products.json";
import type { Category, Collection, Product } from "../types/product";

export const categories = categoriesJson as Category[];
export const collections = collectionsJson as Collection[];
export const catalogProducts = productsJson as Product[];

const priorityProductIds = [
  "girassol-buque-unitario",
  "girassol-mini",
  "van-gogh-girassois",
  "van-gogh-vaso",
  "van-gogh-noite-estrelada",
  "luminaria-flor-de-lotus--azul",
  "buque-lirios--rosa",
  "vaso-moranguinho",
  "enrolados-buque",
  "jardim-azul-1",
  "chaveiro-girassol",
  "chaveiro-margarida",
];

const priorityById = new Map(
  priorityProductIds.map((id, index) => [id, index]),
);

export const products = catalogProducts
  .flatMap((product) =>
    product.variants?.length
      ? product.variants.map((variant) => ({
          ...product,
          id: `${product.id}--${variant.id}`,
          name: `${product.name} — ${variant.name}`,
          image: variant.image ?? product.image,
          variants: undefined,
        }))
      : [product],
  )
  .sort(
    (first, second) =>
      (priorityById.get(first.id) ?? Infinity) -
      (priorityById.get(second.id) ?? Infinity),
  );

export const getProductById = (id: string) =>
  products.find((product) => product.id === id) ??
  catalogProducts.find((product) => product.id === id);
