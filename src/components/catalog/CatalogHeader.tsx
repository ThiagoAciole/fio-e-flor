import { storeConfig } from "../../config/store";
import { Button } from "../ui/button";
import { InstagramIcon, WhatsAppIcon } from "../icons/SocialIcons";

export function CatalogHeader() {
  return (
    <header className="bg-[var(--background)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#catalogo" aria-label="Ir para o catálogo da Fio &amp; Flor">
          <img
            src="/fio-flor-logo.svg"
            alt="Fio &amp; Flor"
            className="h-10 w-auto max-w-36 object-contain object-left sm:h-11 sm:max-w-40"
          />
        </a>
        <div className="flex gap-0.5 sm:gap-2">
          <Button asChild variant="ghost" className="size-11 rounded-full p-0">
            <a
              href={storeConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram da Fio &amp; Flor"
            >
              <InstagramIcon size={21} />
            </a>
          </Button>
          <Button asChild variant="ghost" className="size-11 rounded-full p-0">
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
