import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin Volunteers", path: "/admin/volunteers" });

export default function AdminVolunteersPage() {
  return <AdminSectionPage section={getAdminSection("volunteers")!} />;
}
