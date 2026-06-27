import type { Metadata } from "next";
import { ConversionForm } from "@/components/forms/ConversionForm";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { conversionForms } from "@/data/conversion-forms";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  const content = publicPages.contact;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ConversionForm form={conversionForms.contact} />
        <ConversionForm form={conversionForms.sponsorship} />
      </div>
    </StandardPage>
  );
}
