import { ArrowLeft } from "lucide-react";
import { storeConfig } from "../../config/store";
import { Button } from "../ui/button";
import { InstagramIcon, WhatsAppIcon } from "../icons/SocialIcons";

export function AboutHeader() {
  return (
    <header className="bg-[var(--background)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" aria-label="Voltar ao catálogo da Fio Flor">
          <img
            src="/fio-flor-logo.svg"
            alt="Fio Flor"
            className="h-10 w-auto max-w-36 object-contain object-left sm:h-11 sm:max-w-40"
          />
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="/"
            className="mr-1 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--primary)] sm:px-4"
          >
            <ArrowLeft size={17} />{" "}
            <span className="hidden sm:inline">Catálogo</span>
          </a>
          <Button asChild variant="ghost" className="size-11 rounded-full p-0">
            <a
              href={storeConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram da Fio Flor"
            >
              <InstagramIcon size={21} />
            </a>
          </Button>
          <Button asChild variant="ghost" className="size-11 rounded-full p-0">
            <a
              href={`https://wa.me/${storeConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp da Fio Flor"
            >
              <WhatsAppIcon size={21} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
