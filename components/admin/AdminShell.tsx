import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { adminSections } from "@/data/admin";

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <section className="bg-canvas-warm pt-28">
      <Container className="grid gap-8 py-10 lg:grid-cols-[18rem_1fr]">
        <aside className="h-fit rounded-card border border-ink/10 bg-paper p-4">
          <Badge tone="ink">Admin</Badge>
          <nav aria-label="Admin navigation" className="mt-5 grid gap-1">
            {adminSections.map((section) => (
              <Link
                className="rounded-md px-3 py-2 text-sm font-semibold text-ink/70 hover:bg-moss-50 hover:text-ink"
                href={section.href}
                key={section.key}
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </Container>
    </section>
  );
}
