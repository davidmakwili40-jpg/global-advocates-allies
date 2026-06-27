import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { getAdminSection } from "@/data/admin";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Admin Events", path: "/admin/events" });

export default function AdminEventsPage() {
  return <AdminSectionPage section={getAdminSection("events")!} />;
}
