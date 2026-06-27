import type { Metadata } from "next";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Privacy Policy", path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  const content = publicPages.privacy;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
    </StandardPage>
  );
}
