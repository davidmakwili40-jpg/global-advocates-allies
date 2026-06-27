import type { Metadata } from "next";
import { AssistanceCTA } from "@/components/sections/AssistanceCTA";
import { ConversionForm } from "@/components/forms/ConversionForm";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { conversionForms } from "@/data/conversion-forms";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Apply for Assistance",
  path: "/apply-for-assistance"
});

export default function ApplyForAssistancePage() {
  const content = publicPages.assistance;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <ConversionForm form={conversionForms.assistance} />
        <AssistanceCTA />
      </div>
    </StandardPage>
  );
}
