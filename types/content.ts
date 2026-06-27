export type ProgramSlug =
  | "animal-welfare"
  | "older-adults"
  | "children-families"
  | "pets-families-forever";

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
};

export type Program = {
  slug: ProgramSlug;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  href: string;
  focusAreas: string[];
};

export type ImpactMetric = {
  label: string;
  value: string;
  context: string;
};

export type Event = {
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  href: string;
};

export type Story = {
  title: string;
  person: string;
  summary: string;
  href: string;
  programSlug: ProgramSlug;
};
