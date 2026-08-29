import type { ProductCategory } from "./product";
export type CategoryFilter = "featured" | ProductCategory;
export type Category = { id: CategoryFilter; label: string };
