export const mediaAssets = {
  logo: {
    src: "/images/logo.png",
    alt: "Global Advocates and Allies official logo"
  },
  heroFallback: {
    src: "/images/official-shelter-dog.jpg",
    alt: "Dog awaiting care, representing animal welfare support"
  },
  communityCare: {
    src: "/images/official-community-care.jpg",
    alt: "Global Advocates and Allies community outreach"
  },
  outreach: {
    src: "/images/official-outreach.jpg",
    alt: "Global Advocates and Allies outreach and assistance"
  },
  feedingDogs: {
    src: "/images/official-feeding-dogs.jpg",
    alt: "Feeding dogs through community animal welfare outreach"
  },
  feedingOutreach: {
    src: "/images/official-feeding-outreach.jpg",
    alt: "Animal care and food support outreach"
  },
  drTika: {
    src: "/images/official-dr-tika.webp",
    alt: "Public organization image from Global Advocates and Allies"
  }
} as const;

export const galleryMedia = [
  mediaAssets.communityCare,
  mediaAssets.outreach,
  mediaAssets.feedingDogs,
  mediaAssets.feedingOutreach,
  mediaAssets.drTika
];
