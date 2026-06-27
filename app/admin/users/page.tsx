import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin Users", path: "/admin/users" });

export default function AdminUsersPage() {
  return <AdminSectionPage section={getAdminSection("users")!} />;
}
