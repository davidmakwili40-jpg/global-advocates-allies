import { AssistanceCTA } from "@/components/sections/AssistanceCTA";
import { DonationCTA } from "@/components/sections/DonationCTA";
import { VolunteerCTA } from "@/components/sections/VolunteerCTA";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Program } from "@/types/content";

export function ProgramDetail({ program }: { program: Program }) {
  return (
    <div className="grid gap-10">
      <Card>
        <SectionHeading
          eyebrow={program.eyebrow}
          title={`${program.title} support is designed for clear next steps.`}
          description={program.description}
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {program.focusAreas.map((area) => (
            <li className="rounded-card border border-ink/10 bg-canvas-warm p-5 font-semibold text-ink" key={area}>
              {area}
            </li>
          ))}
        </ul>
      </Card>
      <div className="grid gap-5 md:grid-cols-3">
        <AssistanceCTA />
        <VolunteerCTA />
        <DonationCTA />
      </div>
    </div>
  );
}
