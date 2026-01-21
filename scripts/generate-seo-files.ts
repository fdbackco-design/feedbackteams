/**
 * SEO 파일 생성 스크립트
 * - robots.txt: 환경별로 생성
 * - sitemap.xml: 빌드 시점에 생성
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// 라우트 직접 정의 (import.meta.env 문제 회피)
const SEO_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "daily" as const },
  { path: "/about", priority: 0.9, changefreq: "weekly" as const },
  { path: "/service", priority: 0.9, changefreq: "weekly" as const },
  { path: "/brand", priority: 0.9, changefreq: "weekly" as const },
  { path: "/brand/hoid", priority: 0.8, changefreq: "monthly" as const },
  { path: "/brand/asran", priority: 0.8, changefreq: "monthly" as const },
  { path: "/brand/medifeed", priority: 0.8, changefreq: "monthly" as const },
  { path: "/brand/inyourheart", priority: 0.8, changefreq: "monthly" as const },
  { path: "/brand/sangsaeng", priority: 0.8, changefreq: "monthly" as const },
  { path: "/brand/laceras", priority: 0.8, changefreq: "monthly" as const },
  { path: "/brand/carvella", priority: 0.8, changefreq: "monthly" as const },
  { path: "/brand/moz", priority: 0.8, changefreq: "monthly" as const },
  { path: "/news", priority: 0.8, changefreq: "daily" as const },
  { path: "/contact", priority: 0.7, changefreq: "monthly" as const },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// 환경 변수 확인
// 원칙: staging에서만 크롤링 차단, 그 외(prod 포함)는 허용
const isStaging = process.env.VITE_ENV === "staging";
const siteUrl = process.env.VITE_SITE_URL || "https://www.feedbackteams.com";

// robots.txt 생성
function generateRobotsTxt() {
  const publicDir = join(rootDir, "client", "public");
  const robotsPath = join(publicDir, "robots.txt");
  
  let robotsContent = "";
  
  if (isStaging) {
    // Staging: 크롤링 차단
    robotsContent = `User-agent: *
Disallow: /
`;
  } else {
    // Production/Dev: Allow + Sitemap
    robotsContent = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
  }
  
  mkdirSync(publicDir, { recursive: true });
  writeFileSync(robotsPath, robotsContent, "utf-8");
  console.log(`✅ robots.txt generated at ${robotsPath}`);
}

// sitemap.xml 생성
function generateSitemap() {
  const buildDir = join(rootDir, "dist", "public");
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
}

// 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRobotsTxt();
  
  // sitemap은 빌드 시에만 생성
  if (process.argv.includes("--sitemap")) {
    generateSitemap();
  }
}

export { generateRobotsTxt, generateSitemap };
