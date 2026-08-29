import type { Category } from "../types/product";
export const categories = [
  { id: "all", name: "Todos" },
  { id: "buques", name: "Buquês" },
  { id: "flores", name: "Flores" },
  { id: "arranjos", name: "Arranjos" },
  { id: "presentes", name: "Presentes" },
] satisfies Array<Category | { id: "all"; name: string }>;
