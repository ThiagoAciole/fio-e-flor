import {
  ChevronLeft,
  ChevronRight,
  Flower2,
  Gift,
  KeyRound,
  Lamp,
  LayoutGrid,
  PackageOpen,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useRef } from "react";
import { categories, collections } from "../../data/catalog";
import { cn } from "../../lib/utils";
import type { CategoryId, ProductFilter } from "../../types/product";

const categoryIcons: Record<CategoryId, typeof Flower2> = {
  buques: Flower2,
  flores: Sparkles,
  arranjos: PackageOpen,
  presentes: Gift,
  chaveiros: KeyRound,
  luminarias: Lamp,
};

function sameFilter(first: ProductFilter, second: ProductFilter) {
  if (first.type !== second.type) return false;
  return first.type === "all" || (second.type !== "all" && first.id === second.id);
}

export function ProductFilters({
  active,
  onChange,
  query,
  onQueryChange,
}: {
  active: ProductFilter;
  onChange: (filter: ProductFilter) => void;
  query: string;
  onQueryChange: (query: string) => void;
}) {
  const filtersRef = useRef<HTMLElement>(null);
  const dragRef = useRef<{ startX: number; scrollLeft: number } | null>(null);
  const chipClass = (filter: ProductFilter) =>
    cn(
      "flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-200",
      sameFilter(active, filter)
        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
        : "border-transparent bg-[#f6f1ef] text-[var(--text-secondary)] hover:bg-[var(--secondary)] hover:text-[var(--secondary-foreground)]",
    );

  const scrollFilters = (direction: 1 | -1) => {
    const container = filtersRef.current;
    if (!container) return;
    const chips = Array.from(container.querySelectorAll("button"));
    const currentIndex = Math.max(
      0,
      chips.findIndex(
        (chip) => chip.offsetLeft + chip.offsetWidth > container.scrollLeft + 1,
      ),
    );
    const target = chips[Math.min(chips.length - 1, Math.max(0, currentIndex + direction * 3))];
    target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <div className="sticky top-0 z-20 -mx-4 bg-[color:rgba(255,253,252,.95)] px-4 py-4 backdrop-blur-lg sm:static sm:-mx-6 sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative w-full lg:order-last lg:w-64 lg:shrink-0">
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
        <div className="group relative min-w-0 lg:flex-1">
          <nav
            ref={filtersRef}
            aria-label="Filtros do catálogo"
            onWheel={(event) => {
              if (!event.deltaY) return;
              event.currentTarget.scrollLeft += event.deltaY;
              event.preventDefault();
            }}
            onPointerDown={(event) => {
              if (
                event.button !== 0 ||
                (event.target instanceof Element && event.target.closest("button"))
              )
                return;
              dragRef.current = {
                startX: event.clientX,
                scrollLeft: event.currentTarget.scrollLeft,
              };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (!dragRef.current) return;
              event.currentTarget.scrollLeft =
                dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
            }}
            onPointerUp={() => {
              dragRef.current = null;
            }}
            onPointerCancel={() => {
              dragRef.current = null;
            }}
            className="hide-scrollbar -mx-4 cursor-grab overflow-x-auto px-4 active:cursor-grabbing sm:mx-0 sm:px-0 lg:min-w-0"
          >
            <div className="flex w-max gap-2">
            <button
              onClick={() => onChange({ type: "all" })}
              aria-current={active.type === "all" ? "page" : undefined}
              className={chipClass({ type: "all" })}
            >
              <LayoutGrid size={15} strokeWidth={1.7} />
              Todos
            </button>
            {categories.map((category) => {
              const Icon = categoryIcons[category.id];
              const filter: ProductFilter = { type: "category", id: category.id };
              return (
                <button
                  key={category.id}
                  onClick={() => onChange(filter)}
                  aria-current={sameFilter(active, filter) ? "page" : undefined}
                  className={chipClass(filter)}
                >
                  <Icon size={15} strokeWidth={1.7} />
                  {category.name}
                </button>
              );
            })}
            {collections.map((collection) => {
              const filter: ProductFilter = { type: "collection", id: collection.id };
              return (
                <button
                  key={collection.id}
                  onClick={() => onChange(filter)}
                  aria-current={sameFilter(active, filter) ? "page" : undefined}
                  className={chipClass(filter)}
                >
                  {collection.name}
                </button>
              );
            })}
            </div>
          </nav>
          <button
            type="button"
            onClick={() => scrollFilters(-1)}
            aria-label="Ver filtros anteriores"
            className="absolute left-0 top-1/2 hidden size-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[var(--text-secondary)] shadow-sm opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 lg:grid"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollFilters(1)}
            aria-label="Ver mais filtros"
            className="absolute right-0 top-1/2 hidden size-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[var(--text-secondary)] shadow-sm opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 lg:grid"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
