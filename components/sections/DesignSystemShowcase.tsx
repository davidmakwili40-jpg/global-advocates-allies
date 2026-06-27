import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/IconFrame";
import { FieldLabel, TextInput, Textarea } from "@/components/ui/FormField";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { colorStories, designPrinciples, iconLibrary } from "@/data/design-system";

export function DesignSystemShowcase() {
  return (
    <div className="grid gap-10">
      <section>
        <SectionHeading
          eyebrow="Design Language"
          title="A calm, editorial system for high-trust community action."
          description="The system balances nonprofit clarity with enough craft to feel specific to Global Advocates & Allies."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {designPrinciples.map((principle, index) => (
            <Card key={principle.title} tone={index === 1 ? "warm" : "paper"}>
              <Badge tone={index === 0 ? "coral" : index === 1 ? "gold" : "sky"}>Principle {index + 1}</Badge>
              <h3 className="mt-5 font-serif text-step-2 font-semibold">{principle.title}</h3>
              <p className="mt-3 text-step--1 text-ink/70">{principle.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <Card tone="ink">
          <Badge tone="gold">Palette</Badge>
          <h3 className="mt-5 font-serif text-step-3 font-semibold">Grounded color, not decoration.</h3>
          <p className="mt-4 text-white/72">
            Each accent has a job: action, resource finding, story, warmth, or institutional trust.
          </p>
        </Card>
        <div className="grid gap-3 sm:grid-cols-2">
          {colorStories.map((color) => (
            <Card className="grid grid-cols-[auto_1fr] gap-4 p-4" key={color.name}>
              <span
                aria-hidden="true"
                className="size-12 rounded-md border border-ink/10"
                style={{ backgroundColor: color.value }}
              />
              <span>
                <strong className="block text-sm text-ink">{color.name}</strong>
                <span className="mt-1 block text-sm leading-6 text-ink/65">{color.use}</span>
              </span>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <Badge tone="plum">Buttons</Badge>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Donate</Button>
            <Button variant="secondary">Volunteer</Button>
            <Button variant="outline">Request Assistance</Button>
            <Button variant="ghost">Learn More</Button>
          </div>
        </Card>
        <Card>
          <Badge tone="sky">Forms</Badge>
          <div className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <FieldLabel htmlFor="showcase-email" hint="Used for newsletter and contact flows.">
                Email address
              </FieldLabel>
              <TextInput id="showcase-email" placeholder="name@example.org" type="email" />
            </div>
            <div className="grid gap-2">
              <FieldLabel htmlFor="showcase-message">Message</FieldLabel>
              <Textarea id="showcase-message" placeholder="How can the team help?" />
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Badge tone="moss">Iconography</Badge>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {iconLibrary.map((item, index) => (
            <Card className="flex items-center gap-4 p-4" key={item.label}>
              <IconFrame
                icon={item.icon}
                tone={index % 5 === 0 ? "coral" : index % 5 === 1 ? "moss" : index % 5 === 2 ? "sky" : index % 5 === 3 ? "plum" : "gold"}
              />
              <span className="font-semibold text-ink">{item.label}</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
