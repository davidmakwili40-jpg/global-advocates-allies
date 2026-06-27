import type { Metadata } from "next";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Mission", path: "/mission" });

export default function MissionPage() {
  const content = publicPages.mission;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
    </StandardPage>
  );
}
