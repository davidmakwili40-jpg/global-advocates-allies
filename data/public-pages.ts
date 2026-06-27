export type PublicPageSection = {
  title: string;
  body: string;
  items?: string[];
};

export type PublicPageContent = {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  sections: PublicPageSection[];
};

export const publicPages = {
  about: {
    title: "About Global Advocates and Allies Inc.",
    description:
      "Global Advocates and Allies Inc. is a BIPOC-led human and animal well-being organization providing assistance through education, empowerment, and connecting people and animals to resources and like-minded networks.",
    primaryCta: { label: "Explore Programs", href: "/programs" },
    secondaryCta: { label: "Contact the Team", href: "/contact" },
    sections: [
      {
        title: "A human and animal well-being organization",
        body:
          "The official website describes Global Advocates and Allies Inc. as a Black, Indigenous, and People of Color led organization committed to ensuring diversity, equity, and inclusion in human and animal well-being."
      },
      {
        title: "How the work is organized",
        body:
          "The organization connects people and animals to resources, support networks, education, and empowerment pathways.",
        items: [
          "Promote diversity and equity",
          "Help develop skills needed for self-sufficiency",
          "Inspire and help empower",
          "Connect people and animals to resources"
        ]
      }
    ]
  },
  mission: {
    title: "Our Mission",
    description:
      "To help create equality for older adults, children, and animals in the poorest communities of the world through advocacy, strengthening, and education.",
    primaryCta: { label: "Request Assistance", href: "/apply-for-assistance" },
    secondaryCta: { label: "Donate", href: "/donate" },
    sections: [
      {
        title: "Equality for older adults, children, and animals",
        body:
          "The official mission centers equality for older adults, children, and animals in the poorest communities of the world through advocacy, strengthening, and education."
      },
      {
        title: "Mission-aligned support",
        body:
          "The work applies knowledge about social determinants of health toward improving the lives of animals, older adults, and children.",
        items: ["Advocacy", "Strengthening", "Education", "Resource connection"]
      }
    ]
  },
  vision: {
    title: "Our Vision",
    description:
      "A world where older adults, children, animals, and families in underserved communities experience equity, support, and access to resources.",
    primaryCta: { label: "Volunteer", href: "/volunteer" },
    secondaryCta: { label: "Read Stories", href: "/success-stories" },
    sections: [
      {
        title: "Equity in impoverished communities",
        body:
          "The official site states that the organization does whatever it takes to create equity in the most impoverished communities and populations."
      },
      {
        title: "The future we are building toward",
        body:
          "The vision is expressed through empowerment, animal welfare, older adult support, child advocacy, and resource access.",
        items: ["Empowerment", "Advocacy", "Education", "Community resources"]
      }
    ]
  },
  volunteer: {
    title: "Volunteer",
    description:
      "Bring your time, steadiness, and skills to a growing network of advocates, event helpers, resource navigators, and community allies.",
    primaryCta: { label: "Start Volunteer Form", href: "/volunteer#volunteer-form" },
    secondaryCta: { label: "View Events", href: "/events" },
    sections: [
      {
        title: "Volunteering with care and clarity",
        body:
          "Volunteer roles are structured so people can contribute without confusion. Some roles support events and outreach; others help with resource organization, follow-up preparation, or partner coordination."
      },
      {
        title: "Helpful volunteer strengths",
        body:
          "No single background is required. The most useful qualities are consistency, respect for privacy, and comfort working with people in sensitive moments.",
        items: ["Community outreach", "Research and resource updates", "Event support", "Administrative care"]
      }
    ]
  },
  donate: {
    title: "Donate",
    description:
      "Help impact the lives of children, older adults, and animals through safe and easy giving pathways.",
    primaryCta: { label: "Open Donation Options", href: "/donate#donation-form" },
    secondaryCta: { label: "Corporate Sponsorship", href: "/donate#sponsorship" },
    sections: [
      {
        title: "Safe and easy donations",
        body:
          "The official website frames donations as a way to help impact the lives of children, older adults, and animals."
      },
      {
        title: "Funding priorities",
        body:
          "Donation messaging should connect directly to services shown on the official site.",
        items: ["Children", "Older adults", "Animal care", "Pets and Families Forever"]
      }
    ]
  },
  gallery: {
    title: "Gallery",
    description:
      "A privacy-conscious media archive for approved photos, outreach moments, community education, and partner activity.",
    primaryCta: { label: "Share Media Inquiry", href: "/contact" },
    secondaryCta: { label: "Read Stories", href: "/success-stories" },
    sections: [
      {
        title: "Media with dignity",
        body:
          "The gallery is designed for approved organizational media only. Future images and videos should protect privacy, avoid crisis spectacle, and show the care network with consent."
      },
      {
        title: "Planned collections",
        body:
          "The structure is ready for CMS-backed media collections when assets are approved.",
        items: ["Community clinics", "Volunteer days", "Education events", "Partner collaborations"]
      }
    ]
  },
  resources: {
    title: "Resources",
    description:
      "Guides and pathways for families, caregivers, volunteers, and partners seeking pet-inclusive and people-centered support.",
    primaryCta: { label: "Request Assistance", href: "/apply-for-assistance" },
    secondaryCta: { label: "Ask a Question", href: "/contact" },
    sections: [
      {
        title: "Resources should reduce friction",
        body:
          "Every resource should help someone understand what to do next. Future MDX content can support checklists, partner referrals, printable guides, and program-specific education."
      },
      {
        title: "Prepared resource categories",
        body:
          "These categories keep the library focused as content grows.",
        items: ["Pet-inclusive planning", "Caregiver support", "Volunteer guides", "Community partner referrals"]
      }
    ]
  },
  contact: {
    title: "Contact",
    description:
      "Reach the team for partnerships, media, volunteer questions, assistance routing, sponsorship, or general inquiries.",
    primaryCta: { label: "Send Message", href: "/contact#contact-form" },
    secondaryCta: { label: "Request Assistance", href: "/apply-for-assistance" },
    sections: [
      {
        title: "Route your message to the right place",
        body:
          "Contact pathways are organized so future backend integrations can direct partnership, support, volunteer, media, and sponsorship messages to the right queue."
      }
    ]
  },
  assistance: {
    title: "Apply for Assistance",
    description:
      "Contact Global Advocates and Allies for assistance with pet food, vaccination, pet deposits, boarding, emotional support animal letters, vet bills, and pet adoption assistance.",
    primaryCta: { label: "Start Request", href: "/apply-for-assistance#assistance-form" },
    secondaryCta: { label: "Explore Resources", href: "/resources" },
    sections: [
      {
        title: "Pets and Families Forever assistance",
        body:
          "The official website lists pet food and supplies, vaccination, pet deposits, boarding, emotional pet support animal letters, compassionate animal education, assistance with vet bills and vaccinations, and pet adoption assistance."
      },
      {
        title: "What helps the team respond",
        body:
          "The public form also states that the organization cannot donate to anyone breeding, selling, or flipping animals and reserves the right to refuse assistance under any circumstance.",
        items: ["Pet food and supplies", "Vaccination", "Pet deposit", "Boarding", "Vet bill assistance"]
      }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How privacy commitments should be presented for people who contact, donate, volunteer, or request assistance.",
    primaryCta: { label: "Contact Privacy Team", href: "/contact" },
    sections: [
      {
        title: "Privacy-first content structure",
        body:
          "This page is prepared for legal review and should eventually describe data collection, consent, donor information, assistance requests, analytics, retention, and contact preferences in plain language."
      },
      {
        title: "Production recommendation",
        body:
          "Before launch, replace this operational policy structure with attorney-reviewed language that matches the actual backend systems and data processors."
      }
    ]
  },
  terms: {
    title: "Terms",
    description:
      "Website terms prepared for legal review before launch and future service integrations.",
    primaryCta: { label: "Contact the Team", href: "/contact" },
    sections: [
      {
        title: "Terms content structure",
        body:
          "This page is prepared for reviewed language covering site use, content ownership, donations, volunteer information, assistance requests, third-party links, and liability limitations."
      },
      {
        title: "Production recommendation",
        body:
          "Final terms should be aligned with donation tools, form processors, CMS workflows, analytics tools, and any future account-based admin features."
      }
    ]
  }
} satisfies Record<string, PublicPageContent>;
