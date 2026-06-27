import type { Metadata } from "next";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Resources", path: "/resources" });

export default function ResourcesPage() {
  const content = publicPages.resources;
  const resources = ["Pet-inclusive housing support", "Emergency planning checklist", "Care partner referral guide"];

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {resources.map((resource) => (
          <article className="rounded-card border border-ink/10 bg-paper p-5" key={resource}>
            <h2 className="font-serif text-xl font-semibold text-ink">{resource}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">Prepared for future MDX resource content.</p>
          </article>
        ))}
      </div>
    </StandardPage>
  );
}
