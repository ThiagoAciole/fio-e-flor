import type { CartItem } from "./cart.types";
export const CART_STORAGE_KEY = "@fio-flor/cart";
export function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) &&
      parsed.every(
        (item) =>
          typeof item === "object" &&
          item !== null &&
          typeof (item as CartItem).productId === "string" &&
          typeof (item as CartItem).quantity === "number" &&
          (item as CartItem).quantity > 0,
      )
      ? (parsed as CartItem[])
      : [];
  } catch {
    return [];
  }
}
export const writeCart = (items: CartItem[]) =>
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
