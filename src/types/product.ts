export type ProductCategory =
  "buques" | "flores" | "arranjos" | "presentes" | "personalizados";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  priceLabel?: string;
  image: string;
  customizable: boolean;
  productionDays: number;
  featured: boolean;
  available: boolean;
};
