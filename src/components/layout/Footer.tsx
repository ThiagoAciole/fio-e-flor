import { ArrowRight, Flower2, MapPin } from 'lucide-react'
import { storeConfig } from '../../config/store'
import { InstagramIcon, WhatsAppIcon } from '../icons/SocialIcons'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[#f8f4f2] text-sm text-[var(--text-secondary)]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_1fr_1.25fr] lg:gap-14 lg:py-16">
        <div>
          <img src="/fio-flor-logo.svg" alt="Fio & Flor" className="h-11 w-auto max-w-40 object-contain object-left" />
          <p className="mt-5 max-w-[255px] leading-6">Flores artesanais feitas à mão para transformar sentimentos em lembranças que duram.</p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-[var(--text-primary)]">Fale com a gente</h2>
          <div className="flex flex-col gap-3">
            <a className="flex items-center gap-2 transition-colors hover:text-[var(--primary)]" href={storeConfig.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={17} />{storeConfig.instagramHandle}</a>
            <a className="flex items-center gap-2 transition-colors hover:text-[var(--primary)]" href={`https://wa.me/${storeConfig.whatsappNumber}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} />WhatsApp</a>
            <span className="flex items-center gap-2"><MapPin size={17} />{storeConfig.city}</span>
          </div>
        </div>

        <div className="rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-5">
          <Flower2 size={23} className="text-[var(--primary)]" />
          <h2 className="mt-4 font-serif text-xl font-semibold text-[var(--text-primary)]">Vamos criar algo especial?</h2>
          <p className="mt-2 leading-6">Fale com a gente e envie sua ideia para confirmarmos cada detalhe.</p>
          <a href={`https://wa.me/${storeConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--primary)] px-5 font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]">Falar com a gente <ArrowRight size={17} /></a>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-5 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Fio &amp; Flor. Todos os direitos reservados.</span>
          <span>Feito artesanalmente em Campina Grande – PB.</span>
        </div>
      </div>
    </footer>
  )
}
