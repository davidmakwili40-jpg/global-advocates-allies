import type { Metadata } from "next";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Terms", path: "/terms" });

export default function TermsPage() {
  const content = publicPages.terms;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
    </StandardPage>
  );
}
