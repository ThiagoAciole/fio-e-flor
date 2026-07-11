import { Flower2 } from 'lucide-react'
import { Button } from '../ui/button'

export function CatalogEmptyState({ hasSearch, onReset }: { hasSearch: boolean; onReset: () => void }) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-[24px] bg-[var(--surface-soft)] px-6 py-12 text-center">
      <div className="grid size-14 place-items-center rounded-full bg-white text-[var(--primary)]">
        <Flower2 size={25} strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[var(--text-primary)]">
        {hasSearch ? 'Nenhuma flor encontrada' : 'Ainda não há produtos nesta seleção'}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
        {hasSearch ? 'Tente outro nome ou volte para os produtos mais pedidos.' : 'Escolha outra categoria para descobrir as flores disponíveis.'}
      </p>
      <Button variant="outline" className="mt-5 rounded-xl" onClick={onReset}>Ver mais pedidos</Button>
    </div>
  )
}
