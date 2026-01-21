/**
 * SEO용 라우트 정의
 * sitemap.xml 생성 및 prerender 대상 관리
 */

export interface RouteConfig {
  path: string;
  priority?: number; // 0.0 ~ 1.0
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastmod?: string; // ISO 8601 형식
}

export const SEO_ROUTES: RouteConfig[] = [
  { path: "/", priority: 1.0, changefreq: "daily" },
  { path: "/about", priority: 0.9, changefreq: "weekly" },
  { path: "/service", priority: 0.9, changefreq: "weekly" },
  { path: "/brand", priority: 0.9, changefreq: "weekly" },
  { path: "/brand/hoid", priority: 0.8, changefreq: "monthly" },
  { path: "/brand/asran", priority: 0.8, changefreq: "monthly" },
  { path: "/brand/medifeed", priority: 0.8, changefreq: "monthly" },
  { path: "/brand/inyourheart", priority: 0.8, changefreq: "monthly" },
  { path: "/brand/sangsaeng", priority: 0.8, changefreq: "monthly" },
  { path: "/brand/laceras", priority: 0.8, changefreq: "monthly" },
  { path: "/brand/carvella", priority: 0.8, changefreq: "monthly" },
  { path: "/brand/moz", priority: 0.8, changefreq: "monthly" },
  { path: "/news", priority: 0.8, changefreq: "daily" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
];

// Prerender 대상 (핵심 라우트만)
export const PRERENDER_ROUTES = [
  "/",
  "/about",
  "/service",
  "/brand",
  "/contact",
  "/news",
];
