import type { ConversionFormModel } from "@/types/forms";

export const conversionForms = {
  donation: {
    id: "donation-form",
    title: "Donation interest",
    description:
      "Share giving intent so a future payment or donor-management integration can route the next step.",
    submitLabel: "Prepare Donation Request",
    endpointKey: "DONATION_ENDPOINT",
    integrationNote:
      "Connect this funnel to a payment processor and donor CRM before enabling live submissions.",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "givingLevel",
        label: "Giving interest",
        type: "select",
        required: true,
        options: [
          { label: "One-time gift", value: "one-time" },
          { label: "Monthly giving", value: "monthly" },
          { label: "Legacy or major gift", value: "major-gift" }
        ]
      },
      { name: "message", label: "Notes", type: "textarea", helperText: "Optional context for donor follow-up." }
    ]
  },
  volunteer: {
    id: "volunteer-form",
    title: "Volunteer interest",
    description: "Tell the team how you would like to help so future workflows can route your interest.",
    submitLabel: "Prepare Volunteer Interest",
    endpointKey: "VOLUNTEER_ENDPOINT",
    integrationNote: "Connect this form to volunteer management before enabling live submissions.",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel" },
      {
        name: "role",
        label: "Preferred role",
        type: "select",
        required: true,
        options: [
          { label: "Events and outreach", value: "events" },
          { label: "Resource research", value: "resources" },
          { label: "Administrative support", value: "admin" }
        ]
      },
      { name: "availability", label: "Availability", type: "textarea", required: true }
    ]
  },
  assistance: {
    id: "assistance-form",
    title: "Assistance request",
    description:
      "Request pet food, vaccination, pet deposits, boarding, emotional support animal letters, vet bill help, or adoption assistance.",
    submitLabel: "Prepare Assistance Request",
    endpointKey: "ASSISTANCE_ENDPOINT",
    integrationNote: "Connect this form to secure case intake before enabling live submissions.",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone number", type: "tel", required: true },
      { name: "address", label: "Address", type: "textarea", required: true },
      {
        name: "petType",
        label: "Type of pet",
        type: "select",
        required: true,
        options: [
          { label: "Dog", value: "dog" },
          { label: "Cat", value: "cat" },
          { label: "Bird", value: "bird" },
          { label: "Cat and dog", value: "cat-and-dog" },
          { label: "Other", value: "other" }
        ]
      },
      { name: "petCount", label: "How many pets", type: "text", required: true },
      { name: "yearlyIncome", label: "Yearly income level", type: "text", required: true },
      {
        name: "services",
        label: "Services needed",
        type: "textarea",
        required: true,
        helperText:
          "Examples listed on the official site include food, supplies, vaccination, pet deposit, boarding, emotional support animal letter, vet bill assistance, and adoption assistance."
      },
      {
        name: "agreement",
        label: "Recipient agreement",
        type: "select",
        required: true,
        helperText:
          "Recipients must not breed, sell, flip, resell, redistribute, or return assistance items.",
        options: [
          { label: "Yes, I understand", value: "yes" },
          { label: "No", value: "no" }
        ]
      }
    ]
  },
  contact: {
    id: "contact-form",
    title: "Contact request",
    description: "Route a general, partnership, media, or sponsorship message.",
    submitLabel: "Prepare Contact Request",
    endpointKey: "CONTACT_ENDPOINT",
    integrationNote: "Connect this form to an email service or CRM queue before enabling live submissions.",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "topic",
        label: "Topic",
        type: "select",
        required: true,
        options: [
          { label: "General inquiry", value: "general" },
          { label: "Partnership", value: "partnership" },
          { label: "Media", value: "media" },
          { label: "Sponsorship", value: "sponsorship" }
        ]
      },
      { name: "message", label: "Message", type: "textarea", required: true }
    ]
  },
  newsletter: {
    id: "newsletter-form",
    title: "Newsletter signup",
    description: "Receive updates about resources, events, and ways to help.",
    submitLabel: "Prepare Signup",
    endpointKey: "NEWSLETTER_ENDPOINT",
    integrationNote: "Connect this form to an email marketing provider before enabling live submissions.",
    fields: [{ name: "email", label: "Email address", type: "email", required: true }]
  },
  sponsorship: {
    id: "sponsorship-form",
    title: "Corporate sponsorship inquiry",
    description: "Start a partnership conversation for workplace giving, event support, or program sponsorship.",
    submitLabel: "Prepare Sponsorship Inquiry",
    endpointKey: "SPONSORSHIP_ENDPOINT",
    integrationNote: "Connect this form to partnership CRM workflows before enabling live submissions.",
    fields: [
      { name: "organization", label: "Organization", type: "text", required: true },
      { name: "contact", label: "Primary contact", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "interest", label: "Sponsorship interest", type: "textarea", required: true }
    ]
  }
} satisfies Record<string, ConversionFormModel>;
