import type { Metadata } from "next";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description: "Learn how Global Advocates & Allies supports people, pets, and community partners."
});

export default function AboutPage() {
  const content = publicPages.about;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
    </StandardPage>
  );
}
