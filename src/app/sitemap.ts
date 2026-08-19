import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://makeit.dev";
  const langs = ["en", "id", "jpn"];
  const routes = ["", "/services", "/portfolio", "/pricing", "/about", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}