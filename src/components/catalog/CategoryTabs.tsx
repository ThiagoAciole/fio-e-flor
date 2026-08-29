import {
  Flower2,
  Gift,
  Heart,
  PackageOpen,
  Search,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";
import { categories } from "../../data/categories";
import type { CategoryFilter } from "../../types/category";
import { cn } from "../../lib/utils";

const categoryIcons = {
  featured: Heart,
  buques: Flower2,
  flores: Sparkles,
  arranjos: PackageOpen,
  presentes: Gift,
  personalizados: WandSparkles,
};

export function CategoryTabs({
  active,
  onChange,
  query,
  onQueryChange,
}: {
  active: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
  query: string;
  onQueryChange: (query: string) => void;
}) {
  return (
    <div className="sticky top-0 z-20 -mx-4 bg-[color:rgba(255,253,252,.95)] px-4 py-4 backdrop-blur-lg sm:static sm:-mx-6 sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative order-first w-full lg:order-last lg:ml-auto lg:w-64 lg:shrink-0">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            size={17}
          />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Buscar flores"
            aria-label="Buscar flores e buquês"
            className="h-11 w-full rounded-full bg-[#f6f1ef] pl-10 pr-10 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] hover:bg-[var(--secondary)] focus:bg-white focus:ring-2 focus:ring-[color:rgba(163,58,40,.18)]"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label="Limpar busca"
              className="absolute right-1 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-white hover:text-[var(--primary)]"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <nav
          aria-label="Categorias"
          className="hide-scrollbar -mx-4 overflow-x-auto px-4 lg:mx-0 lg:min-w-0 lg:px-0"
        >
          <div className="flex w-max gap-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id];
              return (
                <button
                  key={category.id}
                  onClick={() => onChange(category.id)}
                  aria-current={active === category.id ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-200",
                    active === category.id
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-transparent bg-[#f6f1ef] text-[var(--text-secondary)] hover:bg-[var(--secondary)] hover:text-[var(--secondary-foreground)]",
                  )}
                >
                  <Icon size={15} strokeWidth={1.7} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
