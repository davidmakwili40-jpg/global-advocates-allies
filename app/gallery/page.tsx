import type { Metadata } from "next";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Gallery", path: "/gallery" });

export default function GalleryPage() {
  const content = publicPages.gallery;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Community care", "Partner outreach", "Volunteer support"].map((label) => (
          <div className="aspect-[4/3] rounded-card border border-ink/10 bg-moss-50 p-5" key={label}>
            <p className="font-semibold text-ink">{label}</p>
          </div>
        ))}
      </div>
    </StandardPage>
  );
}
