import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { CartProvider } from "../features/cart/CartContext";
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Toaster position="top-center" richColors />
    </CartProvider>
  );
}
