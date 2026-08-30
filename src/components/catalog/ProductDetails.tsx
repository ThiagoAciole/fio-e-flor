import { useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import type { Product } from "../../types/product";
import { BottomSheet } from "../ui/sheet";
import { Button } from "../ui/button";
import { QuantitySelector } from "../cart/QuantitySelector";
import { formatCurrency } from "../../lib/currency";

function ZoomableProductImage({ src, alt }: { src: string; alt: string }) {
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const cursor = isPanning
    ? "cursor-grabbing"
    : zoom > 1
      ? "cursor-grab"
      : "cursor-zoom-in";

  return (
    <TransformWrapper
      initialScale={1}
      minScale={1}
      maxScale={3}
      centerOnInit
      doubleClick={{ mode: "toggle", step: 2, animationTime: 180 }}
      panning={{ disabled: zoom === 1, allowLeftClickPan: true }}
      onTransform={(_, state) => setZoom(state.scale)}
      onPanningStart={() => setIsPanning(true)}
      onPanningStop={() => setIsPanning(false)}
    >
      <TransformComponent
        wrapperClass={`aspect-square w-full overflow-hidden rounded-2xl bg-[var(--surface-soft)] touch-none ${cursor}`}
        wrapperStyle={{ width: "100%", height: "auto" }}
        contentStyle={{ width: "100%", height: "100%" }}
      >
        <img
          className="size-full object-contain p-3"
          src={src}
          alt={alt}
          onError={(event) => {
            event.currentTarget.src = "/products/placeholder.svg";
          }}
        />
      </TransformComponent>
    </TransformWrapper>
  );
}

export function ProductDetails({
  product,
  open,
  onOpenChange,
  quantity,
  onAdd,
  onDecrease,
  onIncrease,
}: {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  quantity: number;
  onAdd: () => void;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  if (!product) return null;
  return (
    <BottomSheet open={open} onOpenChange={onOpenChange} title={product.name}>
      <div className="overflow-y-auto px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <ZoomableProductImage
          key={`${product.id}-${open}`}
          src={product.image}
          alt={product.name}
        />
        <div className="py-5">
          <p className="text-xl font-bold text-[var(--primary)]">
            {product.priceLabel ? `${product.priceLabel} ` : ""}
            {formatCurrency(product.price)}
          </p>
          <p className="mt-3 leading-6 text-[var(--text-secondary)]">
            {product.description}
          </p>
          <p className="mt-4 rounded-xl bg-[var(--surface-soft)] p-3 text-sm text-[var(--text-secondary)]">
            A disponibilidade e o valor final serão confirmados pelo WhatsApp.
          </p>
        </div>
        {quantity > 0 ? (
          <QuantitySelector
            quantity={quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        ) : (
          <Button
            className="w-full"
            onClick={onAdd}
            disabled={!product.sellable}
          >
            {product.sellable ? "Adicionar ao pedido" : "Produto indisponível"}
          </Button>
        )}
      </div>
    </BottomSheet>
  );
}
