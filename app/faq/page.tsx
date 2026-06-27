import type { Metadata } from "next";
import { StandardPage } from "@/components/sections/StandardPage";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faq";
import { faqJsonLd } from "@/lib/structured-data";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "FAQ", path: "/faq" });

export default function FAQPage() {
  return (
    <StandardPage title="Frequently Asked Questions" description="Clear answers for families, volunteers, donors, and partners.">
      <JsonLd data={faqJsonLd()} />
      <Accordion items={faqs} />
    </StandardPage>
  );
}
