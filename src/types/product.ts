export type CategoryId = "buques" | "flores" | "arranjos" | "presentes";
export type CategoryFilter = "all" | CategoryId;

export type Category = {
  id: CategoryId;
  name: string;
};

export type Collection = {
  id: string;
  name: string;
};

export type Variant = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  priceLabel?: string;
  image: string;
  sellable: boolean;
  collections?: Collection[];
  variants?: Variant[];
};
