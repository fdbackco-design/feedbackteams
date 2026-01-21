/**
 * Vite 플러그인: sitemap.xml 생성
 */

import type { Plugin } from "vite";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { SEO_ROUTES } from "./client/src/lib/seo-routes";

export function vitePluginSitemap(): Plugin {
  return {
    name: "vite-plugin-sitemap",
    writeBundle() {
      const siteUrl = process.env.VITE_SITE_URL || "https://www.feedbackteams.com";
      const buildDir = join(process.cwd(), "dist", "public");
      const sitemapPath = join(buildDir, "sitemap.xml");
      
      const now = new Date().toISOString().split("T")[0];
      
      const urls = SEO_ROUTES.map((route) => {
        const url = `${siteUrl}${route.path}`;
        const lastmod = route.lastmod || now;
        const changefreq = route.changefreq || "weekly";
        const priority = route.priority || 0.5;
        
        return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      }).join("\n");
      
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
      
      mkdirSync(buildDir, { recursive: true });
      writeFileSync(sitemapPath, sitemapContent, "utf-8");
      console.log(`✅ sitemap.xml generated at ${sitemapPath}`);
      console.log(`   Total URLs: ${SEO_ROUTES.length}`);
    },
  };
}
