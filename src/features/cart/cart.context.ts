import { createContext, type Dispatch } from 'react'
import type { CartAction, CartItem } from './cart.types'
type CartContextValue = { items: CartItem[]; dispatch: Dispatch<CartAction> }
export const CartContext = createContext<CartContextValue | null>(null)
