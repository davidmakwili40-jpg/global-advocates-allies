import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { EventCard } from "@/components/cards/EventCard";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { StoryCard } from "@/components/cards/StoryCard";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { HeroCinematic } from "@/components/hero/HeroCinematic";
import { AssistanceCTA } from "@/components/sections/AssistanceCTA";
import { CTASection } from "@/components/sections/CTASection";
import { DonationCTA } from "@/components/sections/DonationCTA";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { VolunteerCTA } from "@/components/sections/VolunteerCTA";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { designPrinciples } from "@/data/design-system";
import { events } from "@/data/events";
import { impactMetrics } from "@/data/impact";
import { programs } from "@/data/programs";
import { stories } from "@/data/stories";

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <section className="editorial-section">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Mission"
            title="Compassionate advocacy for people, animals, and the bonds that sustain them."
            description="We work across community systems to reduce preventable separation, improve access to trusted resources, and help households move through crisis with dignity."
          />
          <p className="text-xl leading-9 text-ink/70">
            Global Advocates & Allies is built for real-world care: practical navigation, partner
            coordination, humane education, and direct pathways to support.
          </p>
        </Container>
      </section>
      <section className="bg-canvas-warm editorial-section">
        <Container>
          <StaggerReveal className="grid gap-5 md:grid-cols-3">
            {designPrinciples.map((principle) => (
              <StaggerItem key={principle.title}>
              <Card tone="paper">
                <Badge tone="gold">Guiding principle</Badge>
                <h2 className="mt-5 font-serif text-step-2 font-semibold text-ink">{principle.title}</h2>
                <p className="mt-3 text-step--1 text-ink/70">{principle.description}</p>
              </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>
      <section className="bg-moss-50 editorial-section">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Support designed around families, pets, and community care."
            description="Each program is structured to be clear, measurable, and easy to evolve as services expand."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => (
              <FadeIn key={program.slug}>
                <ProgramCard program={program} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <section className="editorial-section">
        <Container>
          <SectionHeading
            eyebrow="Impact"
            title="Measured by stability, dignity, and bonds preserved."
            description="The public reporting framework is ready for verified annual data once program records, partner listings, and board-approved outcomes are available."
          />
          <div className="mt-10">
            <ImpactStats metrics={impactMetrics} />
          </div>
        </Container>
      </section>
      <section className="bg-ink editorial-section text-white">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Success Story"
            title="Every preserved bond changes the next chapter."
            description="Story publishing is structured for consent, privacy review, and program verification before any personal narrative appears on the site."
            className="text-white [&_h2]:text-white [&_p]:text-white/75"
          />
          <StoryCard story={stories[0]} />
        </Container>
      </section>
      <section className="editorial-section">
        <Container>
          <SectionHeading
            eyebrow="Get Involved"
            title="Choose the path that matches your capacity to help."
          />
          <StaggerReveal className="mt-10 grid gap-5 md:grid-cols-3">
            <StaggerItem>
              <DonationCTA />
            </StaggerItem>
            <StaggerItem>
              <VolunteerCTA />
            </StaggerItem>
            <StaggerItem>
              <AssistanceCTA />
            </StaggerItem>
          </StaggerReveal>
        </Container>
      </section>
      <section className="bg-moss-50 editorial-section">
        <Container>
          <SectionHeading eyebrow="Events" title="Upcoming community touchpoints." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {events.map((event) => (
              <EventCard event={event} key={event.title} />
            ))}
          </div>
        </Container>
      </section>
      <section className="editorial-section">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="Stay close to new resources, events, and ways to help."
          />
          <NewsletterSignup />
        </Container>
      </section>
      <CTASection
        title="Help keep families, pets, and communities together."
        description="Your support strengthens advocacy, education, resources, and compassionate care coordination."
        primaryHref="/donate"
        primaryLabel="Donate"
        secondaryHref="/volunteer"
        secondaryLabel="Volunteer"
      />
    </>
  );
}
