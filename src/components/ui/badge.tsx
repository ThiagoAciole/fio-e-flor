import type { ReactNode } from 'react'; import { cn } from '../../lib/utils'
export function Badge({ children, className }: { children: ReactNode; className?: string }) { return <span className={cn('inline-flex w-fit items-center rounded-full px-2 py-1 text-[11px] font-semibold', className)}>{children}</span> }
