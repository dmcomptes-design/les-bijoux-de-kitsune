import type { MetadataRoute } from "next";
// Site de développement : tout est bloqué. Au lancement, autoriser et ajouter le sitemap.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
