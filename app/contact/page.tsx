import type { Metadata } from "next";
import { ConversionForm } from "@/components/forms/ConversionForm";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { Card } from "@/components/ui/Card";
import { conversionForms } from "@/data/conversion-forms";
import { publicPages } from "@/data/public-pages";
import { site } from "@/data/site";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  const content = publicPages.contact;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="font-serif text-step-3 font-semibold text-ink">Official contact information</h2>
          <dl className="mt-6 grid gap-4 text-step-0">
            <div>
              <dt className="font-bold text-ink">Email</dt>
              <dd className="mt-1 text-ink/72">
                <a className="underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ink">Phone</dt>
              <dd className="mt-1 text-ink/72">
                <a className="underline-offset-4 hover:underline" href="tel:+17863202003">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ink">Address</dt>
              <dd className="mt-1 text-ink/72">{site.address}</dd>
            </div>
          </dl>
        </Card>
        <ConversionForm form={conversionForms.contact} />
      </div>
      <div className="mt-6">
        <ConversionForm form={conversionForms.sponsorship} />
      </div>
    </StandardPage>
  );
}
