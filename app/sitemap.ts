import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  "",
  "/about",
  "/mission",
  "/vision",
  "/programs",
  "/programs/animal-welfare",
  "/programs/older-adults",
  "/programs/children-families",
  "/programs/pets-families-forever",
  "/volunteer",
  "/donate",
  "/events",
  "/gallery",
  "/impact",
  "/success-stories",
  "/resources",
  "/faq",
  "/contact",
  "/apply-for-assistance",
  "/privacy-policy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
