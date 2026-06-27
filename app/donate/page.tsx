import type { Metadata } from "next";
import { DonationCTA } from "@/components/sections/DonationCTA";
import { ConversionForm } from "@/components/forms/ConversionForm";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { conversionForms } from "@/data/conversion-forms";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Donate", path: "/donate" });

export default function DonatePage() {
  const content = publicPages.donate;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <ConversionForm form={conversionForms.donation} />
        <DonationCTA />
      </div>
      <div className="mt-6" id="sponsorship">
        <ConversionForm form={conversionForms.sponsorship} />
      </div>
    </StandardPage>
  );
}
