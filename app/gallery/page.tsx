import Image from "next/image";
import type { Metadata } from "next";
import { PublicPageBody } from "@/components/sections/PublicPageBody";
import { StandardPage } from "@/components/sections/StandardPage";
import { galleryMedia } from "@/data/media";
import { publicPages } from "@/data/public-pages";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Gallery", path: "/gallery" });

export default function GalleryPage() {
  const content = publicPages.gallery;

  return (
    <StandardPage title={content.title} description={content.description}>
      <PublicPageBody content={content} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryMedia.map((image) => (
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-ink/10 bg-moss-50" key={image.src}>
            <Image alt={image.alt} className="object-cover" fill sizes="(min-width: 1024px) 33vw, 50vw" src={image.src} />
          </div>
        ))}
      </div>
    </StandardPage>
  );
}
