import { Minus, Plus } from "lucide-react";
import type { Product } from "../../types/product";
import { formatCurrency } from "../../lib/currency";
import { Button } from "../ui/button";

type ProductCardProps = {
  product: Product;
  quantity: number;
  onOpen: () => void;
  onAdd: () => void;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function ProductCard({
  product,
  quantity,
  onOpen,
  onAdd,
  onDecrease,
  onIncrease,
}: ProductCardProps) {
  return (
    <article className="product-card flex h-full flex-col">
      <div className="relative overflow-hidden rounded-[20px] bg-[var(--surface-soft)]">
        <img
          className={`product-image aspect-square w-full object-cover ${product.available ? "" : "grayscale opacity-60"}`}
          src={product.image}
          alt={product.name}
          onError={(event) => {
            event.currentTarget.src = "/products/placeholder.svg";
          }}
          loading="lazy"
        />

        <button
          className="absolute inset-0 z-[1] rounded-[20px]"
          onClick={onOpen}
          aria-label={`Ver detalhes de ${product.name}`}
        />

        {product.available ? (
          quantity > 0 ? (
            <div className="absolute bottom-3 right-3 z-[2] flex h-12 items-center rounded-2xl border border-[var(--border)] bg-white text-[var(--text-primary)]">
              <button
                className="grid size-11 place-items-center rounded-2xl text-[var(--primary)] transition-colors hover:bg-[var(--surface-soft)]"
                onClick={onDecrease}
                aria-label="Diminuir quantidade"
              >
                <Minus size={17} />
              </button>
              <span
                className="min-w-6 text-center text-sm font-bold"
                aria-live="polite"
              >
                {quantity}
              </span>
              <button
                className="grid size-11 place-items-center rounded-2xl text-[var(--primary)] transition-colors hover:bg-[var(--surface-soft)]"
                onClick={onIncrease}
                aria-label="Aumentar quantidade"
              >
                <Plus size={17} />
              </button>
            </div>
          ) : (
            <Button
              className="absolute bottom-3 right-3 z-[2] size-12 rounded-2xl p-0"
              onClick={onAdd}
              aria-label={`Adicionar ${product.name}`}
            >
              <Plus size={23} />
            </Button>
          )
        ) : (
          <span className="absolute bottom-3 right-3 z-[2] rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-[var(--text-secondary)] backdrop-blur-sm">
            Indisponível
          </span>
        )}
      </div>

      <div className="px-1 pt-3">
        <button
          onClick={onOpen}
          className="line-clamp-2 text-left text-[15px] font-medium leading-5 text-[var(--text-primary)]"
        >
          {product.name}
        </button>
        <p className="mt-1.5 text-lg font-bold text-[var(--primary)]">
          {product.priceLabel && (
            <span className="mr-1 text-sm font-normal text-[var(--text-secondary)]">
              {product.priceLabel}
            </span>
          )}
          {formatCurrency(product.price)}
        </p>
      </div>
    </article>
  );
}
