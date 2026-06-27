import type { Metadata } from "next";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { AssistanceCTA } from "@/components/sections/AssistanceCTA";
import { StandardPage } from "@/components/sections/StandardPage";
import { programs } from "@/data/programs";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Programs", path: "/programs" });

export default function ProgramsPage() {
  return (
    <StandardPage
      title="Programs"
      description="Focused support areas for animals, older adults, children, families, and pet-inclusive stability."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {programs.map((program) => (
          <ProgramCard program={program} key={program.slug} />
        ))}
      </div>
      <div className="mt-10">
        <AssistanceCTA />
      </div>
    </StandardPage>
  );
}
