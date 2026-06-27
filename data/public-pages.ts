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
    title: "About Global Advocates & Allies",
    description:
      "A nonprofit built to help households, care partners, and community organizations protect the bonds that keep people and animals stable.",
    primaryCta: { label: "Explore Programs", href: "/programs" },
    secondaryCta: { label: "Contact the Team", href: "/contact" },
    sections: [
      {
        title: "Built for the moments when systems feel hard to navigate",
        body:
          "Global Advocates & Allies exists for families, older adults, caregivers, and advocates who need practical support before a preventable crisis becomes separation. The organization centers care coordination, education, and resource navigation for people and animals together."
      },
      {
        title: "How the work is organized",
        body:
          "Programs are designed around real household needs: pet-inclusive stability, humane support, family advocacy, older adult dignity, and partner coordination.",
        items: ["Listen first", "Map options clearly", "Coordinate with trusted partners", "Protect dignity and privacy"]
      }
    ]
  },
  mission: {
    title: "Our Mission",
    description:
      "To support people and animals through advocacy, education, resources, and care that preserve safety, dignity, and connection.",
    primaryCta: { label: "Request Assistance", href: "/apply-for-assistance" },
    secondaryCta: { label: "Donate", href: "/donate" },
    sections: [
      {
        title: "Advocacy that stays close to daily life",
        body:
          "The mission is practical: help households understand available options, connect with reliable partners, and keep essential relationships intact during pressure points such as housing instability, medical disruption, caregiving transitions, and animal welfare needs."
      },
      {
        title: "What mission-aligned support looks like",
        body:
          "Support should be clear, compassionate, and grounded in the needs of the person seeking help.",
        items: ["Resource navigation", "Pet-inclusive planning", "Community education", "Care partner referral pathways"]
      }
    ]
  },
  vision: {
    title: "Our Vision",
    description:
      "A future where no family is separated from safety, dignity, or a beloved companion because support arrived too late.",
    primaryCta: { label: "Volunteer", href: "/volunteer" },
    secondaryCta: { label: "Read Stories", href: "/success-stories" },
    sections: [
      {
        title: "A stronger care network",
        body:
          "Global Advocates & Allies envisions communities where humane services, family support, older adult resources, and pet-inclusive solutions work together instead of forcing households to solve complex problems alone."
      },
      {
        title: "The future we are building toward",
        body:
          "Every program should make help easier to find, easier to understand, and easier to act on.",
        items: ["Accessible information", "Trusted referrals", "Compassionate response", "Long-term community learning"]
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
      "Support advocacy, education, resource navigation, and care coordination for families, older adults, children, and animals.",
    primaryCta: { label: "Open Donation Options", href: "/donate#donation-form" },
    secondaryCta: { label: "Corporate Sponsorship", href: "/donate#sponsorship" },
    sections: [
      {
        title: "Gifts strengthen practical support",
        body:
          "Donations help maintain the infrastructure behind responsive care: resource libraries, community education, volunteer coordination, outreach materials, and the operational work that makes support easier to access."
      },
      {
        title: "Funding priorities",
        body:
          "Giving pathways are prepared for future payment processing and campaign reporting.",
        items: ["Resource navigation", "Pet-inclusive family stability", "Volunteer coordination", "Community education"]
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
      "Start a support request for advocacy, resources, or pet-inclusive care coordination when your household needs help navigating options.",
    primaryCta: { label: "Start Request", href: "/apply-for-assistance#assistance-form" },
    secondaryCta: { label: "Explore Resources", href: "/resources" },
    sections: [
      {
        title: "A calm intake path",
        body:
          "The assistance funnel gathers only the information needed to understand the situation and prepare a thoughtful next step. It is structured for future secure submission, triage, and follow-up workflows."
      },
      {
        title: "What helps the team respond",
        body:
          "Clear context makes routing easier while protecting privacy.",
        items: ["Household needs", "Animal care needs", "Timing and urgency", "Preferred contact method"]
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
