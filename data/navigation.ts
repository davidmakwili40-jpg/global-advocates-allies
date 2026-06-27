import type { NavigationItem } from "@/types/content";

export const primaryNavigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Animal Welfare", href: "/programs/animal-welfare" },
      { label: "Older Adults", href: "/programs/older-adults" },
      { label: "Children & Families", href: "/programs/children-families" },
      { label: "Pets & Families Forever", href: "/programs/pets-families-forever" }
    ]
  },
  { label: "Impact", href: "/impact" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];

export const footerNavigation: NavigationItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "Vision", href: "/vision" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Request Assistance", href: "/apply-for-assistance" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" }
];
