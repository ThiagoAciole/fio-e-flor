import { AppLink, useNavigation } from "../../app/navigation";
import { storeConfig } from "../../config/store";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { InstagramIcon, WhatsAppIcon } from "../icons/SocialIcons";

export function CatalogHeader() {
  const { pathname } = useNavigation();
  const isCatalog = pathname === "/" || pathname === "/catalogo";
  const navLinkClass = (path: string, className = "") =>
    cn(
      "rounded-full px-2 py-2 text-sm font-medium transition-colors sm:px-3",
      (path === "/" ? isCatalog : pathname === path)
        ? "bg-[var(--primary)] text-white"
        : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--primary)]",
      className,
    );
  return (
    <header className="bg-[var(--background)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-2 px-3 py-3 sm:px-6 sm:py-4">
        <a href="#catalogo" aria-label="Ir para o catálogo da Fio &amp; Flor">
          <img
            src="/fio-flor-logo.svg"
            alt="Fio &amp; Flor"
            className="h-8 w-auto max-w-24 object-contain object-left sm:h-11 sm:max-w-40"
          />
        </a>
        <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
          <nav className="flex items-center gap-0 sm:gap-1" aria-label="Navegação principal">
            <AppLink
              to="/"
              className={navLinkClass("/")}
            >
              Catálogo
            </AppLink>
            <AppLink
              to="/sobre"
              className={navLinkClass("/sobre")}
            >
              <span className="sm:hidden">Sobre</span>
              <span className="hidden sm:inline">Sobre a Fio &amp; Flor</span>
            </AppLink>
          </nav>
          <Button asChild variant="ghost" className="size-10 rounded-full p-0 sm:size-11">
            <a
              href={storeConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram da Fio &amp; Flor"
            >
              <InstagramIcon size={21} />
            </a>
          </Button>
          <Button asChild variant="ghost" className="size-10 rounded-full p-0 sm:size-11">
            <a
              href={`https://wa.me/${storeConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp da Fio &amp; Flor"
            >
              <WhatsAppIcon size={21} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
