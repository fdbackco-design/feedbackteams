/**
 * SEO 설정 중앙 관리 파일
 */

export const SEO_CONFIG = {
  // 기본 사이트 정보
  siteName: "FeedBack",
  siteNameFull: "FeedBack — 브랜드와 시장을 연결하는 유통 플랫폼",
  defaultDescription: "유통, 브랜드, 마케팅, 제조가 하나로 연결되는 상생 플랫폼. FEEDBACK 공식 사이트",
  
  // Base URL (환경변수로 오버라이드 가능)
  baseUrl: import.meta.env.VITE_SITE_URL || "https://www.feedbackteams.com",
  
  // 기본 OG 이미지
  defaultOgImage: import.meta.env.VITE_SITE_URL 
    ? `${import.meta.env.VITE_SITE_URL}/og/feedback_logo.png`
    : "https://www.feedbackteams.com/og/feedback_logo.png",
  
  // Twitter 핸들
  twitterHandle: "@feedbackteams",
  
  // 기본 언어
  defaultLanguage: "ko",
  
  // 사업자 정보 (JSON-LD용)
  organization: {
    "@type": "Organization",
    name: "FeedBack Corp.",
    url: "https://www.feedbackteams.com",
    logo: "https://www.feedbackteams.com/og/feedback_logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "인천광역시",
      addressLocality: "연수구",
      streetAddress: "송도과학로 32, 에스동 3003-3호",
      postalCode: "21984"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@feedbackteams.com"
    }
  },
  
  // LocalBusiness JSON-LD (연락처 페이지용)
  localBusiness: {
    "@type": "LocalBusiness",
    "@id": "https://www.feedbackteams.com/#organization",
    name: "FeedBack Corp.",
    image: "https://www.feedbackteams.com/og/feedback_logo.png",
    url: "https://www.feedbackteams.com",
    telephone: "+82-10-0000-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "송도과학로 32, 에스동 3003-3호",
      addressLocality: "송도동",
      addressRegion: "인천광역시 연수구",
      postalCode: "21984",
      addressCountry: "KR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.3818133,
      longitude: 126.6623116
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  }
} as const;

export interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, any>;
}
