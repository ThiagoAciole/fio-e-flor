import type { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";
export function ProductGrid({
  products,
  quantities,
  onOpen,
  onAdd,
  onDecrease,
  onIncrease,
}: {
  products: Product[];
  quantities: Record<string, number>;
  onOpen: (product: Product) => void;
  onAdd: (id: string) => void;
  onDecrease: (id: string) => void;
  onIncrease: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id] ?? 0}
          onOpen={() => onOpen(product)}
          onAdd={() => onAdd(product.id)}
          onDecrease={() => onDecrease(product.id)}
          onIncrease={() => onIncrease(product.id)}
        />
      ))}
    </div>
  );
}
