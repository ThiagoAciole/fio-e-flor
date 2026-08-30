import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CatalogHeader } from "../components/catalog/CatalogHeader";
import { CatalogEmptyState } from "../components/catalog/CatalogEmptyState";
import { ProductFilters } from "../components/catalog/ProductFilters";
import { ProductGrid } from "../components/catalog/ProductGrid";
import { ProductDetails } from "../components/catalog/ProductDetails";
import { CartBar } from "../components/cart/CartBar";
import { CartSheet } from "../components/cart/CartSheet";
import { Footer } from "../components/layout/Footer";
import { useProductFilters } from "../hooks/useProductFilters";
import { useCart } from "../hooks/useCart";
import { cartQuantity, cartTotal } from "../features/cart/cart.selectors";
import type { Product } from "../types/product";

export default function App() {
  const {
    filter,
    setFilter,
    query,
    setQuery,
    filteredProducts,
    paginatedProducts,
    page,
    setPage,
    pageCount,
  } =
    useProductFilters();
  const { items, dispatch } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const quantities = useMemo(
    () =>
      Object.fromEntries(items.map((item) => [item.productId, item.quantity])),
    [items],
  );
  const itemCount = cartQuantity(items);
  const total = cartTotal(items);
  const add = (productId: string) => {
    dispatch({ type: "ADD_ITEM", productId });
    toast.success("Produto adicionado ao pedido");
  };
  const decrease = (productId: string) =>
    dispatch({ type: "DECREASE_ITEM", productId });
  const increase = (productId: string) =>
    dispatch({ type: "INCREASE_ITEM", productId });
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.success("Pedido limpo");
  };
  const resetFilters = () => {
    setFilter({ type: "all" });
    setQuery("");
  };
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);
  const mobileFirstPage = Math.min(
    Math.max(1, page - 1),
    Math.max(1, pageCount - 3),
  );
  const mobilePageNumbers = pageNumbers.slice(mobileFirstPage - 1, mobileFirstPage + 3);

  return (
    <div className="site-shell min-h-svh">
      <CatalogHeader />
      <main
        className={`mx-auto max-w-[1200px] px-4 sm:px-6 ${itemCount ? "pb-28" : ""}`}
      >
        <h1 className="pt-10 pb-3 font-serif text-4xl font-bold leading-[1.2] tracking-[-.04em] text-[var(--primary)] sm:pt-14 sm:text-5xl">
          Catálogo
        </h1>
        <ProductFilters
          active={filter}
          onChange={setFilter}
          query={query}
          onQueryChange={setQuery}
        />
        <section id="catalogo" className="pt-7" aria-live="polite">
          {filteredProducts.length ? (
            <ProductGrid
              products={paginatedProducts}
              quantities={quantities}
              onOpen={setSelectedProduct}
              onAdd={add}
              onDecrease={decrease}
              onIncrease={increase}
            />
          ) : (
            <CatalogEmptyState
              hasSearch={Boolean(query)}
              onReset={resetFilters}
            />
          )}
          {filteredProducts.length > 10 && (
            <nav
              className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2"
              aria-label="Paginação do catálogo"
            >
              <button
                type="button"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                aria-label="Página anterior"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f6f1ef] text-[var(--text-secondary)] transition-colors hover:bg-[var(--secondary)] disabled:cursor-not-allowed disabled:opacity-40 sm:size-11"
              >
                <ChevronLeft size={18} />
              </button>
              {pageNumbers.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    aria-current={pageNumber === page ? "page" : undefined}
                    className={`${mobilePageNumbers.includes(pageNumber) ? "inline-grid" : "hidden sm:inline-grid"} size-10 shrink-0 place-items-center rounded-full text-sm font-medium transition-colors sm:size-11 ${pageNumber === page ? "bg-[var(--primary)] text-white" : "bg-[#f6f1ef] text-[var(--text-secondary)] hover:bg-[var(--secondary)]"}`}
                  >
                    {pageNumber}
                  </button>
                ))}
              <button
                type="button"
                onClick={() => setPage(page + 1)}
                disabled={page === pageCount}
                aria-label="Próxima página"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f6f1ef] text-[var(--text-secondary)] transition-colors hover:bg-[var(--secondary)] disabled:cursor-not-allowed disabled:opacity-40 sm:size-11"
              >
                <ChevronRight size={18} />
              </button>
            </nav>
          )}
        </section>
      </main>
      <Footer />
      <CartBar
        quantity={itemCount}
        total={total}
        onOpen={() => setIsCartOpen(true)}
        onClear={clearCart}
      />
      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
      <ProductDetails
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onOpenChange={(open) => {
          if (!open) setSelectedProduct(null);
        }}
        quantity={selectedProduct ? (quantities[selectedProduct.id] ?? 0) : 0}
        onAdd={() => selectedProduct && add(selectedProduct.id)}
        onDecrease={() => selectedProduct && decrease(selectedProduct.id)}
        onIncrease={() => selectedProduct && increase(selectedProduct.id)}
      />
    </div>
  );
}
