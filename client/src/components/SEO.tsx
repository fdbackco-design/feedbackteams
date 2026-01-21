import { Helmet } from "react-helmet-async";
import { SEOProps } from "@/lib/seo-config";
import { SEO_CONFIG } from "@/lib/seo-config";

interface SEOComponentProps extends SEOProps {
  path?: string;
}

export default function SEO({
  title,
  description,
  ogImage,
  ogType = "website",
  canonical,
  path,
  noindex = false,
  jsonLd,
}: SEOComponentProps) {
  const finalTitle = title
    ? `${title} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.siteNameFull;
  
  const finalDescription = description || SEO_CONFIG.defaultDescription;
  const finalOgImage = ogImage || SEO_CONFIG.defaultOgImage;
  
  // Canonical URL 생성
  const finalCanonical = canonical || 
    (path ? `${SEO_CONFIG.baseUrl}${path}` : SEO_CONFIG.baseUrl);

  // 기본 JSON-LD (Organization)
  const defaultJsonLd = SEO_CONFIG.organization;
  const finalJsonLd = jsonLd || defaultJsonLd;

  return (
    <Helmet>
      {/* 기본 메타 */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      {SEO_CONFIG.twitterHandle && (
        <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      )}
      
      {/* JSON-LD */}
      {finalJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(finalJsonLd)}
        </script>
      )}
    </Helmet>
  );
}
