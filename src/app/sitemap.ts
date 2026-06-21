import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://divinenails.at", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://divinenails.at/leistungen", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://divinenails.at/preise", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://divinenails.at/impressum", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://divinenails.at/datenschutz", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
