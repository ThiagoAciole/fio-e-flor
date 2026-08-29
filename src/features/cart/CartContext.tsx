import { useEffect, useReducer, type ReactNode } from "react";
import { cartReducer } from "./cart.reducer";
import { readCart, writeCart } from "./cart.storage";
import { CartContext } from "./cart.context";
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [], readCart);
  useEffect(() => {
    writeCart(items);
  }, [items]);
  return (
    <CartContext.Provider value={{ items, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
