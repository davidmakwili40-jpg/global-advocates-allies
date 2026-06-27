import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconTone = "moss" | "coral" | "gold" | "sky" | "plum" | "light";

const toneClasses: Record<IconTone, string> = {
  moss: "bg-moss-50 text-moss-700 ring-moss-500/20",
  coral: "bg-coral-50 text-coral-700 ring-coral-500/20",
  gold: "bg-gold-50 text-gold-600 ring-gold-400/25",
  sky: "bg-sky-50 text-sky-700 ring-sky-500/20",
  plum: "bg-plum-50 text-plum-800 ring-plum-300/25",
  light: "bg-white/12 text-white ring-white/20"
};

export function IconFrame({
  icon: Icon,
  tone = "moss",
  className
}: {
  icon: LucideIcon;
  tone?: IconTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-md ring-1",
        toneClasses[tone],
        className
      )}
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
    </span>
  );
}
