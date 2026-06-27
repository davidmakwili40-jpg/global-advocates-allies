import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Breadcrumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/65">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link aria-label="Home" className="inline-flex items-center hover:text-moss-700" href="/">
            <Home aria-hidden="true" className="size-4" />
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.label}>
            <ChevronRight aria-hidden="true" className="size-4 text-ink/35" />
            {item.href ? (
              <Link className="font-medium hover:text-moss-700" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
