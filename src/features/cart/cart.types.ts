export type CartItem = { productId: string; quantity: number };
export type CartAction =
  | { type: "ADD_ITEM"; productId: string }
  | { type: "INCREASE_ITEM"; productId: string }
  | { type: "DECREASE_ITEM"; productId: string }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "CLEAR_CART" }
  | { type: "RESTORE_CART"; items: CartItem[] };
