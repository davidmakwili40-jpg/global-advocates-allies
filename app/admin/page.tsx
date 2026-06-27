import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { DesignSystemShowcase } from "@/components/sections/DesignSystemShowcase";
import { Card } from "@/components/ui/Card";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin", path: "/admin" });

export default function AdminPage() {
  const section = getAdminSection("dashboard")!;

  return (
    <AdminSectionPage section={section}>
      <Card>
        <DesignSystemShowcase />
      </Card>
    </AdminSectionPage>
  );
}
