import { useMemo, useState } from "react";
import { products } from "../data/products";
import { normalizeText } from "../lib/normalizeText";
import type { CategoryFilter } from "../types/product";
export function useProductFilters() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "all" || product.category.id === category) &&
          normalizeText(product.name).includes(normalizeText(query)),
      ),
    [category, query],
  );
  return { category, setCategory, query, setQuery, filteredProducts };
}
