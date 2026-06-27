import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin Media", path: "/admin/media" });

export default function AdminMediaPage() {
  return <AdminSectionPage section={getAdminSection("media")!} />;
}
