import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin Applications", path: "/admin/applications" });

export default function AdminApplicationsPage() {
  return <AdminSectionPage section={getAdminSection("applications")!} />;
}
