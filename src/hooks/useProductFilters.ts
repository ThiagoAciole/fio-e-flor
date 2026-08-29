import { useMemo, useState } from "react";
import { products } from "../data/catalog";
import { normalizeText } from "../lib/normalizeText";
import type { Product, ProductFilter } from "../types/product";

const PRODUCTS_PER_PAGE = 12;

export function matchesProductFilter(product: Product, filter: ProductFilter) {
  if (filter.type === "all") return true;
  if (filter.type === "category") return product.category.id === filter.id;
  return (
    product.collections?.some((collection) => collection.id === filter.id) ??
    false
  );
}

export function useProductFilters() {
  const [filter, setFilter] = useState<ProductFilter>({ type: "all" });
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filteredProducts = useMemo(() => {
    const normalizedQuery = normalizeText(query);
    return products.filter(
      (product) =>
        matchesProductFilter(product, filter) &&
        [product.name, product.description].some((value) =>
          normalizeText(value).includes(normalizedQuery),
        ),
    );
  }, [filter, query]);
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE,
  );
  const updateFilter = (nextFilter: ProductFilter) => {
    setFilter(nextFilter);
    setPage(1);
  };
  const updateQuery = (nextQuery: string) => {
    setQuery(nextQuery);
    setPage(1);
  };

  return {
    filter,
    setFilter: updateFilter,
    query,
    setQuery: updateQuery,
    filteredProducts,
    paginatedProducts,
    page,
    setPage,
    pageCount,
  };
}
