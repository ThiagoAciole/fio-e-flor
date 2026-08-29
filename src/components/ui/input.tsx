import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-2xl border border-[var(--border)] bg-white px-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)]",
        className,
      )}
      {...props}
    />
  );
}
