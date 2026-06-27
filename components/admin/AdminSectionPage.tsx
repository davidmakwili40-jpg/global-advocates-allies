import { AdminDataTable } from "@/components/admin/AdminDataTable";
import { AdminShell } from "@/components/admin/AdminShell";
import { Card } from "@/components/ui/Card";
import type { ReactNode } from "react";
import type { AdminSection } from "@/types/admin";

export function AdminSectionPage({ section, children }: { section: AdminSection; children?: ReactNode }) {
  return (
    <AdminShell>
      <div className="grid gap-6">
        <AdminDataTable section={section} />
        {children}
        <Card tone="warm">
          <h2 className="font-serif text-step-2 font-semibold text-ink">Future API integration notes</h2>
          <p className="mt-3 text-step--1 text-ink/70">
            This section is wired for repository and service integration. Add authentication, authorization,
            server-side validation, audit logging, and API-backed pagination before exposing operational data.
          </p>
        </Card>
      </div>
    </AdminShell>
  );
}
