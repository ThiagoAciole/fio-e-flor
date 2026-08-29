import { ShoppingBag, Trash2 } from "lucide-react";
import { formatCurrency } from "../../lib/currency";
import { Button } from "../ui/button";

export function CartBar({
  quantity,
  total,
  onOpen,
  onClear,
}: {
  quantity: number;
  total: number;
  onOpen: () => void;
  onClear: () => void;
}) {
  if (!quantity) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[1200px] p-3 pb-[max(.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 pl-4 text-[var(--text-primary)]">
        <div>
          <p className="text-xs text-[var(--text-secondary)]">
            {quantity} {quantity === 1 ? "item" : "itens"}
          </p>
          <p className="font-bold">{formatCurrency(total)}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="size-11 rounded-xl p-0 text-[var(--danger)] hover:bg-[var(--surface-soft)]"
            onClick={onClear}
            aria-label="Limpar carrinho"
          >
            <Trash2 size={18} />
          </Button>
          <Button onClick={onOpen} className="gap-2 rounded-xl">
            <ShoppingBag size={17} />
            Ver pedido
          </Button>
        </div>
      </div>
    </div>
  );
}
