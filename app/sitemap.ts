import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

// Add new pages here when they are created.
const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/privacy", priority: 0.3 },
  { path: "/cookies", priority: 0.3 },
  { path: "/accessibility", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? "weekly" : "yearly",
    priority,
  }));
}
