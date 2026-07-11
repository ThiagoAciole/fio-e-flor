import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { CatalogHeader } from '../components/catalog/CatalogHeader'
import { CatalogHero } from '../components/catalog/CatalogHero'
import { CatalogEmptyState } from '../components/catalog/CatalogEmptyState'
import { CategoryTabs } from '../components/catalog/CategoryTabs'
import { ProductGrid } from '../components/catalog/ProductGrid'
import { ProductDetails } from '../components/catalog/ProductDetails'
import { CartBar } from '../components/cart/CartBar'
import { CartSheet } from '../components/cart/CartSheet'
import { Footer } from '../components/layout/Footer'
import { useProductFilters } from '../hooks/useProductFilters'
import { useCart } from '../hooks/useCart'
import { cartQuantity, cartTotal } from '../features/cart/cart.selectors'
import type { Product } from '../types/product'
import AboutPage from './AboutPage'

// Temporário: enquanto o catálogo é preparado, a página inicial apresenta Sobre.
const catalogEnabled = false

export default function App() {
  const { category, setCategory, query, setQuery, filteredProducts } = useProductFilters()
  const { items, dispatch } = useCart()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const quantities = useMemo(() => Object.fromEntries(items.map((item) => [item.productId, item.quantity])), [items])
  const itemCount = cartQuantity(items)
  const total = cartTotal(items)
  const add = (productId: string) => { dispatch({ type: 'ADD_ITEM', productId }); toast.success('Produto adicionado ao pedido') }
  const decrease = (productId: string) => dispatch({ type: 'DECREASE_ITEM', productId })
  const increase = (productId: string) => dispatch({ type: 'INCREASE_ITEM', productId })
  const clearCart = () => { dispatch({ type: 'CLEAR_CART' }); toast.success('Pedido limpo') }
  const resetFilters = () => { setCategory('featured'); setQuery('') }

  if (!catalogEnabled) return <AboutPage />

  return <div className="site-shell min-h-svh"><CatalogHeader /><CatalogHero /><main className={`mx-auto max-w-[1200px] px-4 sm:px-6 ${itemCount ? 'pb-28' : ''}`}><CategoryTabs active={category} onChange={setCategory} query={query} onQueryChange={setQuery}/><section id="catalogo" className="pt-7" aria-live="polite">{filteredProducts.length ? <ProductGrid products={filteredProducts} quantities={quantities} onOpen={setSelectedProduct} onAdd={add} onDecrease={decrease} onIncrease={increase}/> : <CatalogEmptyState hasSearch={Boolean(query)} onReset={resetFilters} />}</section></main><Footer/><CartBar quantity={itemCount} total={total} onOpen={() => setIsCartOpen(true)} onClear={clearCart}/><CartSheet open={isCartOpen} onOpenChange={setIsCartOpen}/><ProductDetails product={selectedProduct} open={Boolean(selectedProduct)} onOpenChange={(open) => { if (!open) setSelectedProduct(null) }} quantity={selectedProduct ? quantities[selectedProduct.id] ?? 0 : 0} onAdd={() => selectedProduct && add(selectedProduct.id)} onDecrease={() => selectedProduct && decrease(selectedProduct.id)} onIncrease={() => selectedProduct && increase(selectedProduct.id)}/></div>
}
