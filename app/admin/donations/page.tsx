import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin Donations", path: "/admin/donations" });

export default function AdminDonationsPage() {
  return <AdminSectionPage section={getAdminSection("donations")!} />;
}
