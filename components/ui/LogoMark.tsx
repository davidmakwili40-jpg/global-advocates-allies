import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { mediaAssets } from "@/data/media";

export function LogoMark({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link aria-label={`${site.name} home`} className={cn("group flex items-center gap-3", className)} href="/">
      <span className="relative grid size-12 place-items-center overflow-hidden rounded-md bg-white shadow-inset ring-1 ring-ink/10">
        <Image alt={mediaAssets.logo.alt} className="object-contain p-1" fill sizes="48px" src={mediaAssets.logo.src} />
      </span>
      <span className={cn("grid leading-tight", inverted ? "text-white" : "text-ink")}>
        <span className="text-sm font-extrabold tracking-[0.04em]">Global Advocates</span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">& Allies</span>
      </span>
    </Link>
  );
}
