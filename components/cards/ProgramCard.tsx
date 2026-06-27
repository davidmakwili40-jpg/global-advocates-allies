import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, UsersRound, Home } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/IconFrame";
import type { Program } from "@/types/content";

const programIcons = {
  "animal-welfare": ShieldCheck,
  "older-adults": HeartHandshake,
  "children-families": UsersRound,
  "pets-families-forever": Home
};

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Card as="article" className="flex h-full flex-col" interactive>
      <div className="flex items-start justify-between gap-4">
        <Badge tone="coral">{program.eyebrow}</Badge>
        <IconFrame icon={programIcons[program.slug]} tone="moss" />
      </div>
      <h3 className="mt-5 font-serif text-step-3 font-semibold text-ink">{program.title}</h3>
      <p className="mt-3 text-step-0 text-ink/75">{program.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-ink/70">
        {program.focusAreas.map((area) => (
          <li className="border-l-2 border-gold-400 pl-3 leading-6" key={area}>
            {area}
          </li>
        ))}
      </ul>
      <Link
        className="mt-6 inline-flex items-center gap-2 font-semibold text-moss-700 hover:text-moss-900"
        href={program.href}
      >
        Explore program
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </Card>
  );
}
