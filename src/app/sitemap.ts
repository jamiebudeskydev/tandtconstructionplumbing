import type { MetadataRoute } from "next";
import { SERVICE_AREAS } from "@/data/service-areas";

const BASE_URL = "https://tandtconstructionplumbing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const areaPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: area.tier === 1 ? 0.8 : area.tier === 2 ? 0.7 : 0.6,
  }));

  const contractorPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}/contractor`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: area.tier === 1 ? 0.7 : area.tier === 2 ? 0.6 : 0.5,
  }));

  return [...staticPages, ...areaPages, ...contractorPages];
}
