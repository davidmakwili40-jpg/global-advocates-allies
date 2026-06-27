import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin Pets", path: "/admin/pets" });

export default function AdminPetsPage() {
  return <AdminSectionPage section={getAdminSection("pets")!} />;
}
