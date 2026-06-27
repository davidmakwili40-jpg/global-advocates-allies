import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

export function LogoMark({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link aria-label={`${site.name} home`} className={cn("group flex items-center gap-3", className)} href="/">
      <span
        className={cn(
          "relative grid size-12 place-items-center overflow-hidden rounded-md font-serif text-lg font-bold shadow-inset",
          inverted ? "bg-white text-moss-900" : "bg-moss-900 text-white"
        )}
      >
        <span className="absolute inset-x-2 top-2 h-px bg-current opacity-25" />
        GA
        <span className="absolute inset-x-2 bottom-2 h-px bg-current opacity-25" />
      </span>
      <span className={cn("grid leading-tight", inverted ? "text-white" : "text-ink")}>
        <span className="text-sm font-extrabold tracking-[0.04em]">Global Advocates</span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">& Allies</span>
      </span>
    </Link>
  );
}
