import { ArrowRight, Clock3, Flower2, Heart, Sparkles } from "lucide-react";
import { storeConfig } from "../config/store";
import { CatalogHeader } from "../components/catalog/CatalogHeader";
import { Footer } from "../components/layout/Footer";
import { CatalogHero } from "../components/catalog/CatalogHero";
import { Button } from "../components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-svh bg-[var(--background)] text-[var(--text-primary)]">
      <CatalogHeader />
      <CatalogHero />
      <main>
        <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-16 pt-8 sm:px-6 md:grid-cols-[.95fr_1.05fr] md:py-20 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
              Sobre a Fio &amp; Flor
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl font-bold leading-[1.05] tracking-[-.045em] text-[var(--primary)] sm:text-5xl lg:text-6xl">
              Entre sonhos e flores, encontrei meu caminho
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
              A Fio &amp; Flor nasceu do desejo de transformar carinho em algo
              que pudesse ser visto, tocado e guardado para sempre.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
              Eu sou a Bruna, tenho 27 anos e sou formada como comissária de
              bordo. Nas flores artesanais encontrei uma nova forma de criar,
              empreender e seguir em frente.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-[var(--secondary)]" />
            <img
              src="/about-bruna.webp"
              alt="Bruna segurando um buquê artesanal de flores em chenille"
              className="relative aspect-[3/4] w-full rounded-[28px] object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-6 sm:pb-20">
          <div className="flex flex-col gap-5 rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[var(--primary)]">
                <Clock3 size={23} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
                  Uma novidade está chegando
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold tracking-[-.03em] text-[var(--text-primary)]">
                  Nosso catálogo estará disponível em breve.
                </h2>
                <p className="mt-2 max-w-2xl leading-7 text-[var(--text-secondary)]">
                  Estamos preparando cada flor com carinho. Enquanto isso, fale
                  com a gente para conhecer as criações disponíveis e fazer um
                  pedido personalizado.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="shrink-0 rounded-full">
              <a
                href={`https://wa.me/${storeConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                Falar pelo WhatsApp <ArrowRight size={17} />
              </a>
            </Button>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-6 md:grid-cols-2 lg:gap-20">
            <img
              src="/about-craft.webp"
              alt="Processo artesanal de montagem de flores com hastes de chenille"
              className="aspect-[4/5] w-full rounded-[28px] object-cover"
              loading="lazy"
            />
            <div>
              <div className="grid size-12 place-items-center rounded-2xl bg-white text-[var(--primary)]">
                <Flower2 size={23} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
                Flores que carregam sentimentos
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-[-.04em] sm:text-4xl">
                Feito à mão, com carinho e propósito
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-[var(--text-secondary)]">
                Cada flor é produzida à mão com hastes de chenille, respeitando
                o tempo e os detalhes de todo o processo artesanal.
              </p>
              <p className="mt-4 max-w-xl leading-8 text-[var(--text-secondary)]">
                Mais do que objetos decorativos, nossas criações são presentes
                que carregam afeto, cuidado e personalidade.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-6 sm:py-24">
          <Sparkles
            className="mx-auto text-[var(--primary)]"
            size={26}
            strokeWidth={1.5}
          />
          <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
            Nossa essência
          </p>
          <blockquote className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight tracking-[-.04em] text-[var(--text-primary)] sm:text-5xl">
            “Criar flores que não apenas decoram, mas representam histórias,
            sentimentos e lembranças que permanecem.”
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[var(--text-secondary)]">
            Na Fio &amp; Flor, acreditamos que os pequenos detalhes podem
            guardar grandes histórias.
          </p>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pb-4 sm:px-6 sm:pb-10">
          <div className="overflow-hidden rounded-[30px] bg-[var(--primary)] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <Heart className="mx-auto" size={26} strokeWidth={1.5} />
            <p className="mt-6 font-serif text-3xl font-bold leading-tight tracking-[-.04em] sm:text-4xl">
              Cada flor nasce das mãos, mas floresce no coração de alguém.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Acompanhe novas criações, bastidores e inspirações no Instagram da
              Fio &amp; Flor.
            </p>
            <Button
              asChild
              variant="secondary"
              className="mt-7 gap-2 rounded-full"
            >
              <a href={storeConfig.instagram} target="_blank" rel="noreferrer">
                {storeConfig.instagramHandle}
                <ArrowRight size={17} />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
