import Image from "next/image";
import { ArrowRight, HeartHandshake, LifeBuoy, UsersRound } from "lucide-react";
import { GsapReveal } from "@/components/animations/GsapReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { IconFrame } from "@/components/ui/IconFrame";
import { mediaAssets } from "@/data/media";

export function HeroCinematic() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-ink text-white">
      <video
        aria-hidden="true"
        autoPlay
        className="hero-video absolute inset-0 size-full object-cover"
        loop
        muted
        playsInline
        poster={mediaAssets.heroFallback.src}
        preload="metadata"
      >
        <source src="/videos/rescued-dog-hero.mp4" type="video/mp4" />
      </video>
      <Image
        alt={mediaAssets.heroFallback.alt}
        className="hero-fallback-image absolute inset-0 hidden size-full object-cover"
        fill
        priority
        sizes="100vw"
        src={mediaAssets.heroFallback.src}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,32,26,0.92),rgba(23,32,26,0.68)_48%,rgba(23,32,26,0.34)),radial-gradient(circle_at_20%_20%,rgba(215,98,76,0.20),transparent_32%)]" />
      <Container className="relative z-10 flex min-h-screen items-center pb-24 pt-32">
        <GsapReveal className="max-w-5xl">
          <Badge className="mb-6 border-white/20 bg-white/10 text-gold-100" tone="ink">
            Advocacy, education, resources, and care
          </Badge>
          <h1 className="max-w-4xl font-serif text-step-5 font-semibold sm:text-step-6">
            Keeping Families, Pets, and Communities Together
          </h1>
          <p className="mt-6 max-w-2xl text-step-1 text-white/80">
            Global Advocates and Allies Inc. is a BIPOC-led human and animal welfare organization
            providing assistance through education, empowerment, advocacy, and connection to resources.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/donate" size="lg">
              Donate <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button href="/volunteer" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Volunteer
            </Button>
            <Button href="/apply-for-assistance" size="lg" variant="secondary">
              Request Assistance
            </Button>
          </div>
          <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { label: "Family stability", icon: UsersRound },
              { label: "Pet-inclusive care", icon: HeartHandshake },
              { label: "Resource navigation", icon: LifeBuoy }
            ].map((item) => (
              <div className="flex items-center gap-3 border-t border-white/15 pt-4" key={item.label}>
                <IconFrame icon={item.icon} tone="light" />
                <span className="text-sm font-bold text-white/82">{item.label}</span>
              </div>
            ))}
          </div>
        </GsapReveal>
      </Container>
    </section>
  );
}
