import { useState } from "react";
import { MessageCircle, Trash2 } from "lucide-react";
import {
  cartDetails,
  cartQuantity,
  cartTotal,
} from "../../features/cart/cart.selectors";
import { useCart } from "../../hooks/useCart";
import { BottomSheet } from "../ui/sheet";
import { CartEmptyState } from "./CartEmptyState";
import { CartItem } from "./CartItem";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { formatCurrency } from "../../lib/currency";
import { createWhatsappLink, createWhatsappMessage } from "../../lib/whatsapp";
import { storeConfig } from "../../config/store";
export function CartSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { items, dispatch } = useCart();
  const [observations, setObservations] = useState("");
  const details = cartDetails(items);
  const total = cartTotal(items);
  const quantity = cartQuantity(items);
  const order = details.map(({ product, quantity: itemQuantity }) => ({
    name: product.name,
    price: product.price,
    quantity: itemQuantity,
  }));
  const sendOrder = () =>
    window.open(
      createWhatsappLink(
        storeConfig.whatsappNumber,
        createWhatsappMessage(order, observations),
      ),
      "_blank",
      "noopener,noreferrer",
    );
  return (
    <BottomSheet open={open} onOpenChange={onOpenChange} title="Seu pedido">
      <div className="min-h-0 overflow-y-auto px-5">
        {details.length === 0 ? (
          <CartEmptyState />
        ) : (
          <>
            <div className="divide-y divide-[var(--border)]">
              {details.map(({ product, quantity: itemQuantity }) => (
                <CartItem
                  key={product.id}
                  product={product}
                  quantity={itemQuantity}
                  onDecrease={() =>
                    dispatch({ type: "DECREASE_ITEM", productId: product.id })
                  }
                  onIncrease={() =>
                    dispatch({ type: "INCREASE_ITEM", productId: product.id })
                  }
                  onRemove={() =>
                    dispatch({ type: "REMOVE_ITEM", productId: product.id })
                  }
                />
              ))}
            </div>
            <div className="border-t border-[var(--border)] py-4">
              <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                <span>
                  {quantity} {quantity === 1 ? "item" : "itens"}
                </span>
                <span>Total estimado</span>
              </div>
              <p className="mt-1 text-right text-xl font-bold">
                {formatCurrency(total)}
              </p>
            </div>
            <label
              className="block text-sm font-semibold"
              htmlFor="observations"
            >
              Observações do pedido
            </label>
            <Textarea
              id="observations"
              value={observations}
              onChange={(event) => setObservations(event.target.value)}
              placeholder="Conte para a gente as cores, embalagem ou personalização que você deseja."
              className="mt-2"
            />
            <p className="mt-3 text-xs leading-5 text-[var(--text-secondary)]">
              O valor final, a disponibilidade e o prazo serão confirmados pelo
              WhatsApp.
            </p>
            <div className="sticky bottom-0 -mx-5 mt-3 bg-[var(--background)] px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
              <Button className="w-full gap-2" onClick={sendOrder}>
                <MessageCircle size={18} />
                Pedir pelo WhatsApp
              </Button>
              <Button
                variant="ghost"
                className="mt-2 w-full gap-2 text-[var(--danger)]"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                <Trash2 size={16} />
                Limpar pedido
              </Button>
            </div>
          </>
        )}
      </div>
    </BottomSheet>
  );
}
