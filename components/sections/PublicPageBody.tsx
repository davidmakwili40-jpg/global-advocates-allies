import { Button } from "@/components/ui/Button";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PublicPageContent } from "@/data/public-pages";

export function PublicPageBody({ content }: { content: PublicPageContent }) {
  return (
    <div className="grid gap-10">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="prose-measure">
          <p className="text-step-1 text-ink/75">{content.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
          {content.secondaryCta ? (
            <Button href={content.secondaryCta.href} variant="outline">
              {content.secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
      <StaggerReveal className="grid gap-5 lg:grid-cols-2">
        {content.sections.map((section) => (
          <StaggerItem key={section.title}>
          <Card as="section">
            <SectionHeading title={section.title} />
            <p className="mt-5 text-step-0 text-ink/72">{section.body}</p>
            {section.items ? (
              <ul className="mt-6 grid gap-3">
                {section.items.map((item) => (
                  <li className="border-l-2 border-gold-400 pl-3 text-sm font-semibold text-ink/75" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </Card>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </div>
  );
}
