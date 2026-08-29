import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-none rounded-2xl border border-[var(--border)] bg-white p-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)]",
        className,
      )}
      {...props}
    />
  );
}
