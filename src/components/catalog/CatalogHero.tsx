export function CatalogHero() {
  return (
    <section className="hero-shell relative overflow-hidden">
      <img
        src="/hero-flores-chenille.png"
        alt="Flores artesanais em haste de chenille sobre tecido claro"
        className="hero-image absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      <div className="hero-copy relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[.24em] text-[var(--text-primary)] sm:text-sm">
          Bem-vindo à Fio &amp; Flor
        </p>
        <h1 className="max-w-[760px] font-serif text-[clamp(1.75rem,3.7vw,3.7rem)] font-bold leading-[1.08] tracking-[-.045em] text-[var(--primary)]">
          <span>Transformando Flores em</span>
          <br />
          <span>lembranças Eternas</span>
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-[var(--text-secondary)] sm:text-base">
          Conheça nossas flores artesanais feitas à mão com hastes de chenille, criadas para eternizar sentimentos em cada detalhe.
        </p>
      </div>
    </section>
  )
}
