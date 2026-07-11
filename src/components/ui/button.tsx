import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'
const variants = cva('inline-flex min-h-11 items-center justify-center rounded-2xl font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-45', { variants:{ variant:{ default:'bg-[var(--primary)] px-4 text-white hover:bg-[var(--primary-hover)]', secondary:'bg-[var(--secondary)] px-4 text-[var(--secondary-foreground)] hover:brightness-95', ghost:'px-3 text-[var(--text-secondary)] hover:bg-[var(--surface-soft)]', outline:'border border-[var(--border)] bg-white px-4 text-[var(--text-primary)] hover:bg-[var(--surface-soft)]' } }, defaultVariants:{ variant:'default' } })
type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants> & { asChild?: boolean }
export function Button({ className, variant, asChild, ...props }: Props) { const Component = asChild ? Slot : 'button'; return <Component className={cn(variants({ variant }), className)} {...props} /> }
