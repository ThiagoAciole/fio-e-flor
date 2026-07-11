import type { CartAction, CartItem } from './cart.types'
export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  const find = (id: string) => state.find((item) => item.productId === id)
  switch (action.type) {
    case 'ADD_ITEM': return find(action.productId) ? state.map((item) => item.productId === action.productId ? { ...item, quantity:item.quantity + 1 } : item) : [...state, { productId:action.productId, quantity:1 }]
    case 'INCREASE_ITEM': return state.map((item) => item.productId === action.productId ? { ...item, quantity:item.quantity + 1 } : item)
    case 'DECREASE_ITEM': return state.flatMap((item) => item.productId !== action.productId ? item : item.quantity > 1 ? { ...item, quantity:item.quantity - 1 } : [])
    case 'REMOVE_ITEM': return state.filter((item) => item.productId !== action.productId)
    case 'CLEAR_CART': return []
    case 'RESTORE_CART': return action.items
  }
}
