import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(215,98,76,0.20),transparent_28%),radial-gradient(circle_at_88%_30%,rgba(200,168,76,0.16),transparent_30%)]" />
      <Container className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/75">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={primaryHref} size="lg" variant="primary">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
