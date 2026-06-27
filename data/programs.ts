import type { Program } from "@/types/content";

export const programs: Program[] = [
  {
    slug: "animal-welfare",
    title: "Animal Welfare",
    eyebrow: "Care and protection",
    summary: "Animal welfare advocacy, pet care education, adoption support, and resource connection.",
    description:
      "The official site emphasizes animal welfare through education, empowerment, adoption encouragement, vaccination and veterinary assistance, pet food, supplies, boarding, and compassionate support for animals and families.",
    href: "/programs/animal-welfare",
    focusAreas: ["Pet food and supplies", "Vaccination and vet bill assistance", "Pet adoption assistance"]
  },
  {
    slug: "older-adults",
    title: "Older Adults",
    eyebrow: "Dignity and connection",
    summary: "Support for older adults who need resources, entitlement-benefit access, connection, and advocacy.",
    description:
      "The official site notes that many older adults lack the support needed to access resources and entitlement benefits. Global Advocates and Allies is committed to helping them reconnect with society through support, advocacy, volunteerism, and opportunity.",
    href: "/programs/older-adults",
    focusAreas: ["Resource and entitlement navigation", "Social connection", "Advocacy and empowerment"]
  },
  {
    slug: "children-families",
    title: "Children & Families",
    eyebrow: "Stability for households",
    summary: "Advocacy for children facing inequity, discrimination, and barriers to well-being.",
    description:
      "The official site frames children's support around racial discrimination, inequity, psychological distress, and the need to create equality for Black, Indigenous, and children of color.",
    href: "/programs/children-families",
    focusAreas: ["Equity advocacy", "Education", "Well-being support"]
  },
  {
    slug: "pets-families-forever",
    title: "Pets & Families Forever",
    eyebrow: "Keeping bonds intact",
    summary: "Pet food, vaccination, deposits, boarding, emotional support letters, and pet care resources.",
    description:
      "Pets and Families Forever supports families with practical pet-related assistance, including pet food, supplies, vaccination, pet deposits, boarding, emotional support animal letters, compassionate animal education, vet bill assistance, and adoption assistance.",
    href: "/programs/pets-families-forever",
    focusAreas: ["Pet food and supplies", "Pet deposits and boarding", "Emotional support and care education"]
  }
];
