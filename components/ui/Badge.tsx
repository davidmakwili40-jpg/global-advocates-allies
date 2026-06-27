import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "moss" | "coral" | "gold" | "sky" | "plum" | "ink";

const toneClasses: Record<BadgeTone, string> = {
  moss: "border-moss-500/25 bg-moss-50 text-moss-900",
  coral: "border-coral-500/25 bg-coral-50 text-coral-700",
  gold: "border-gold-400/35 bg-gold-50 text-ink",
  sky: "border-sky-500/25 bg-sky-50 text-sky-700",
  plum: "border-plum-300/35 bg-plum-50 text-plum-800",
  ink: "border-ink/15 bg-ink text-white"
};

export function Badge({
  children,
  tone = "moss",
  className
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
