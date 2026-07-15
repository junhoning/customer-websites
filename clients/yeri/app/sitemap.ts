import type { MetadataRoute } from "next";
import { NAV_ITEMS, PRIVACY_LINK } from "@/content/nav";
import { SITE } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...NAV_ITEMS.map((item) => item.href), PRIVACY_LINK.href];

  return routes.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
  }));
}
