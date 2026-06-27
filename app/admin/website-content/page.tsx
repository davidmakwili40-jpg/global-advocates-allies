import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Admin Website Content",
  path: "/admin/website-content"
});

export default function AdminWebsiteContentPage() {
  return <AdminSectionPage section={getAdminSection("website-content")!} />;
}
