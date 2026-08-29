import { useContext } from "react";
import { CartContext } from "../features/cart/cart.context";
export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart deve ser usado dentro de CartProvider");
  return context;
}
