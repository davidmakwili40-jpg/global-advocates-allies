import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin Programs", path: "/admin/programs" });

export default function AdminProgramsPage() {
  return <AdminSectionPage section={getAdminSection("programs")!} />;
}
