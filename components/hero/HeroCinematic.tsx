import { ArrowRight, HeartHandshake, LifeBuoy, UsersRound } from "lucide-react";
import { GsapReveal } from "@/components/animations/GsapReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { IconFrame } from "@/components/ui/IconFrame";
import { RescuedDogSceneLoader } from "@/components/three/RescuedDogSceneLoader";

export function HeroCinematic() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(245,233,191,0.20),transparent_32%),radial-gradient(circle_at_18%_24%,rgba(215,98,76,0.18),transparent_28%),linear-gradient(135deg,rgba(31,54,39,0.96),rgba(23,32,26,0.86))]" />
      <RescuedDogSceneLoader />
      <Container className="relative z-10 flex min-h-screen items-center pb-24 pt-32">
        <GsapReveal className="max-w-5xl">
          <Badge className="mb-6 border-white/20 bg-white/10 text-gold-100" tone="ink">
            Advocacy, education, resources, and care
          </Badge>
          <h1 className="max-w-4xl font-serif text-step-5 font-semibold sm:text-step-6">
            Keeping Families, Pets, and Communities Together
          </h1>
          <p className="mt-6 max-w-2xl text-step-1 text-white/80">
            Global Advocates & Allies supports people and animals through advocacy, education,
            resources, and compassionate care coordination.
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
