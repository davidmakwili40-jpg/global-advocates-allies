import type { Program } from "@/types/content";

export const programs: Program[] = [
  {
    slug: "animal-welfare",
    title: "Animal Welfare",
    eyebrow: "Care and protection",
    summary: "Practical support for animals in crisis and the people who love them.",
    description:
      "We coordinate humane resources, education, and response pathways for companion animals and community care partners.",
    href: "/programs/animal-welfare",
    focusAreas: ["Emergency resource navigation", "Humane education", "Care partner coordination"]
  },
  {
    slug: "older-adults",
    title: "Older Adults",
    eyebrow: "Dignity and connection",
    summary: "Advocacy and assistance that help older adults remain connected to home and community.",
    description:
      "We support older adults with compassionate navigation, practical referrals, and pet-inclusive planning.",
    href: "/programs/older-adults",
    focusAreas: ["Resource navigation", "Companion animal planning", "Community connection"]
  },
  {
    slug: "children-families",
    title: "Children & Families",
    eyebrow: "Stability for households",
    summary: "Family-centered advocacy, education, and support during vulnerable transitions.",
    description:
      "We help children and caregivers access information, trusted partners, and stabilizing resources.",
    href: "/programs/children-families",
    focusAreas: ["Family advocacy", "Education", "Referral coordination"]
  },
  {
    slug: "pets-families-forever",
    title: "Pets & Families Forever",
    eyebrow: "Keeping bonds intact",
    summary: "Pet-inclusive support designed to prevent unnecessary separation.",
    description:
      "We connect families to resources that help preserve the human-animal bond through hardship.",
    href: "/programs/pets-families-forever",
    focusAreas: ["Retention support", "Crisis planning", "Pet-friendly resources"]
  }
];
