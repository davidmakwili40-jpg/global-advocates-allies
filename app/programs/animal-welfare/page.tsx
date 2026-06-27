import type { Metadata } from "next";
import { ProgramDetail } from "@/components/sections/ProgramDetail";
import { StandardPage } from "@/components/sections/StandardPage";
import { programs } from "@/data/programs";
import { createMetadata } from "@/utils/metadata";

const program = programs.find((item) => item.slug === "animal-welfare")!;

export const metadata: Metadata = createMetadata({ title: program.title, path: program.href });

export default function AnimalWelfarePage() {
  return (
    <StandardPage title={program.title} description={program.description}>
      <ProgramDetail program={program} />
    </StandardPage>
  );
}
