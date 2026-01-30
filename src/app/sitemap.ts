import type { MetadataRoute } from "next";
import { SERVICE_AREAS } from "@/data/service-areas";

const BASE_URL = "https://tandtconstructionplumbing.com";
const LAST_DEPLOY = new Date("2026-01-30");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: LAST_DEPLOY,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_DEPLOY,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_DEPLOY,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: LAST_DEPLOY,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: LAST_DEPLOY,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_DEPLOY,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: LAST_DEPLOY,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const areaPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}`,
    lastModified: LAST_DEPLOY,
    changeFrequency: "monthly" as const,
    priority: area.tier === 1 ? 0.8 : area.tier === 2 ? 0.7 : 0.6,
  }));

  const contractorPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}/contractor`,
    lastModified: LAST_DEPLOY,
    changeFrequency: "monthly" as const,
    priority: area.tier === 1 ? 0.7 : area.tier === 2 ? 0.6 : 0.5,
  }));

  return [...staticPages, ...areaPages, ...contractorPages];
}
