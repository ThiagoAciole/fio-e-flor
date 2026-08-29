import { products } from "../../data/products";
import type { CartItem } from "./cart.types";
export const cartQuantity = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.quantity, 0);
export const cartDetails = (items: CartItem[]) =>
  items.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return product
      ? [
          {
            product,
            quantity: item.quantity,
            subtotal: product.price * item.quantity,
          },
        ]
      : [];
  });
export const cartTotal = (items: CartItem[]) =>
  cartDetails(items).reduce((sum, item) => sum + item.subtotal, 0);
