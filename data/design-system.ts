import {
  CalendarHeart,
  HandHeart,
  HeartHandshake,
  Home,
  Landmark,
  Leaf,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

export const designPrinciples = [
  {
    title: "Editorial warmth",
    description:
      "Generous measure, quiet contrast, and human-scale typography make service information feel trustworthy."
  },
  {
    title: "Practical dignity",
    description:
      "Controls are direct, accessible, and calm, with enough craft to feel cared for without becoming decorative."
  },
  {
    title: "Motion with restraint",
    description:
      "Movement clarifies hierarchy and pace; it never blocks reading, navigation, or reduced-motion preferences."
  }
];

export const iconLibrary = [
  { label: "Families", icon: UsersRound },
  { label: "Care", icon: HandHeart },
  { label: "Advocacy", icon: Landmark },
  { label: "Home", icon: Home },
  { label: "Protection", icon: ShieldCheck },
  { label: "Animal welfare", icon: Leaf },
  { label: "Events", icon: CalendarHeart },
  { label: "Giving", icon: HeartHandshake },
  { label: "Hope", icon: Sparkles }
];

export const colorStories = [
  { name: "Moss", value: "#31543b", use: "Primary trust, navigation, deep panels" },
  { name: "Coral", value: "#d7624c", use: "Primary action, urgency, warm emphasis" },
  { name: "Gold", value: "#c8a84c", use: "Highlights, dividers, donor moments" },
  { name: "Sky", value: "#4c95a8", use: "Assistance, resource pathways, calm contrast" },
  { name: "Plum", value: "#8b5170", use: "Stories, reflection, editorial accents" },
  { name: "Canvas", value: "#fbfaf6", use: "Page background and reading surfaces" }
];
