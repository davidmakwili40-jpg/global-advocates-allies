import type { Metadata } from "next";
import { ConversionForm } from "@/components/forms/ConversionForm";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { VolunteerCTA } from "@/components/sections/VolunteerCTA";
import { StandardPage } from "@/components/sections/StandardPage";
import { conversionForms } from "@/data/conversion-forms";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Volunteer", path: "/volunteer" });

export default function VolunteerPage() {
  const content = publicPages.volunteer;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <ConversionForm form={conversionForms.volunteer} />
        <VolunteerCTA />
      </div>
    </StandardPage>
  );
}
