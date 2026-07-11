import { formatCurrency } from './currency'
export type WhatsappOrderItem = { name: string; price: number; quantity: number }
export function createWhatsappMessage(items: WhatsappOrderItem[], observations: string) {
  const lines = items.map((item) => `• ${item.quantity}x ${item.name} — ${formatCurrency(item.price * item.quantity)}`)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return `Olá! Vim pelo catálogo da Fio & Flor e gostaria de fazer este pedido:\n\n${lines.join('\n')}\n\nTotal estimado: ${formatCurrency(total)}\n\nObservações: ${observations || 'Sem observações.'}\n\nGostaria de confirmar a disponibilidade, o prazo de produção e a entrega.`
}
export const createWhatsappLink = (number: string, message: string) => `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
