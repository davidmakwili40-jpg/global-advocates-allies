import type { AdminSection } from "@/types/admin";

const emptyRows = [
  {
    name: "API integration pending",
    status: "Not connected",
    owner: "Future backend",
    updated: "TBD"
  }
];

export const adminSections: AdminSection[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin",
    description: "Operational overview prepared for verified program, donor, volunteer, and application data.",
    status: "ready-for-api",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "programs",
    label: "Programs",
    href: "/admin/programs",
    description: "Manage public program content, focus areas, and routing once CMS services are connected.",
    status: "ready-for-api",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "events",
    label: "Events",
    href: "/admin/events",
    description: "Prepare event publishing, registration, location, and attendance workflows.",
    status: "ready-for-api",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "volunteers",
    label: "Volunteers",
    href: "/admin/volunteers",
    description: "Track volunteer interest, roles, onboarding, and availability after backend integration.",
    status: "ready-for-api",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "applications",
    label: "Applications",
    href: "/admin/applications",
    description: "Secure assistance intake queue for future triage and follow-up workflows.",
    status: "restricted",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "donations",
    label: "Donations",
    href: "/admin/donations",
    description: "Donation and sponsorship reporting structure for payment processor integration.",
    status: "ready-for-api",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "pets",
    label: "Pets",
    href: "/admin/pets",
    description: "Future animal care records, retention support, and welfare routing.",
    status: "restricted",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "stories",
    label: "Stories",
    href: "/admin/stories",
    description: "Consent, privacy review, and publishing workflow for approved stories.",
    status: "ready-for-api",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "media",
    label: "Media",
    href: "/admin/media",
    description: "Approved media library structure for images, videos, captions, and consent status.",
    status: "ready-for-api",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "website-content",
    label: "Website Content",
    href: "/admin/website-content",
    description: "CMS-ready content editing for public pages, resources, FAQs, and policy text.",
    status: "ready-for-api",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "users",
    label: "Users",
    href: "/admin/users",
    description: "Future role and permission management. Authentication is intentionally not implemented.",
    status: "restricted",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "analytics",
    label: "Analytics",
    href: "/admin/analytics",
    description: "Privacy-aware reporting structure for traffic, conversions, and content performance.",
    status: "planning",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  },
  {
    key: "settings",
    label: "Settings",
    href: "/admin/settings",
    description: "Site configuration, integrations, notification settings, and API connection notes.",
    status: "planning",
    columns: ["name", "status", "owner", "updated"],
    rows: emptyRows
  }
];

export function getAdminSection(key: AdminSection["key"]) {
  return adminSections.find((section) => section.key === key);
}
