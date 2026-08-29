import { ShoppingBag } from "lucide-react";
export function CartEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
      <div className="grid size-14 place-items-center rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)]">
        <ShoppingBag size={24} />
      </div>
      <h3 className="mt-4 font-bold">Seu pedido está vazio</h3>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">
        Adicione algumas flores para continuar.
      </p>
    </div>
  );
}
