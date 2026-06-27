import type { Metadata } from "next";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { StandardPage } from "@/components/sections/StandardPage";
import { impactMetrics } from "@/data/impact";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Impact", path: "/impact" });

export default function ImpactPage() {
  return (
    <StandardPage title="Impact" description="Transparent reporting for the people, animals, and partners served.">
      <ImpactStats metrics={impactMetrics} />
    </StandardPage>
  );
}
