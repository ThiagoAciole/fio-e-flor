import { useMemo, useState } from "react";
import { products } from "../data/products";
import { normalizeText } from "../lib/normalizeText";
import type { CategoryFilter } from "../types/category";
export function useProductFilters() {
  const [category, setCategory] = useState<CategoryFilter>("featured");
  const [query, setQuery] = useState("");
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "featured"
            ? product.featured
            : category === "personalizados"
              ? product.customizable
              : product.category === category) &&
          normalizeText(product.name).includes(normalizeText(query)),
      ),
    [category, query],
  );
  return { category, setCategory, query, setQuery, filteredProducts };
}
