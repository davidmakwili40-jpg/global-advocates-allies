import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { mediaAssets } from "@/data/media";

type MediaAsset = (typeof mediaAssets)[keyof typeof mediaAssets];

export function MediaFeature({
  image,
  eyebrow,
  title,
  body
}: {
  image: MediaAsset;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="relative min-h-[22rem] overflow-hidden rounded-card">
        <Image alt={image.alt} className="object-cover" fill sizes="(min-width: 1024px) 42vw, 100vw" src={image.src} />
      </div>
      <Card>
        <p className="kicker">{eyebrow}</p>
        <h2 className="mt-4 font-serif text-step-4 font-semibold text-ink">{title}</h2>
        <p className="mt-5 text-step-0 text-ink/72">{body}</p>
      </Card>
    </section>
  );
}
