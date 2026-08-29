import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
export function BottomSheet({
  open,
  onOpenChange,
  title,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[90svh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[26px] bg-[var(--background)] shadow-2xl sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-h-[82svh] sm:w-[min(560px,calc(100%-2rem))] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[26px]">
          <div className="mx-auto my-3 h-1.5 w-10 rounded-full bg-[var(--border)] sm:hidden" />
          <div className="flex items-center justify-between px-5 pb-3 pt-1 sm:px-6 sm:pt-5">
            <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="grid size-11 place-items-center rounded-full hover:bg-[var(--surface-soft)]"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
