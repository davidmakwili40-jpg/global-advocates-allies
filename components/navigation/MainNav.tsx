import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavigationItem } from "@/types/content";

export function MainNav({ items }: { items: NavigationItem[] }) {
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
      {items.map((item) => (
        <div className="group relative" key={item.href}>
          <Link
            className="inline-flex min-h-11 items-center gap-1 rounded-md px-3 text-sm font-bold text-ink/75 transition hover:bg-moss-50 hover:text-moss-900"
            href={item.href}
          >
            {item.label}
            {item.children ? <ChevronDown aria-hidden="true" className="size-4" /> : null}
          </Link>
          {item.children ? (
            <div className="invisible absolute left-0 top-full z-30 w-72 translate-y-2 rounded-card border border-ink/10 bg-paper-warm p-2 opacity-0 shadow-lift transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {item.children.map((child) => (
                <Link
                  className="block rounded-md px-3 py-3 text-sm font-semibold text-ink/75 hover:bg-moss-50 hover:text-moss-900"
                  href={child.href}
                  key={child.href}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  );
}
