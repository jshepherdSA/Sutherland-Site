import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

// Open to normal search crawlers and to AI crawlers, so the campaign shows up
// in AI answers as well as search results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
