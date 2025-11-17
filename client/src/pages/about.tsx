import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Target,
  Users,
  Globe,
  TrendingUp,
  ShoppingCart,
  Building2,
  Award,
  Handshake,
  Zap,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import organizationChart from "@assets/organizationChart_1754563135776.png";
import warehouseImage from "@assets/futuristic-warehouse-with-blue-neon-lights-connected-data_1754566796044.jpg";
import partnershipImage from "@assets/5f76e132-877a-4d9e-8c9c-de9ff84cb5dd_1754568024377.jpg";
import networkImage from "@assets/5068978_1754568223986.jpg";
import globalImage from "@assets/13730_1754568375896.jpg";
import trustImage from "@assets/hands_1754568922347.png";
import peopleImage from "@assets/people_1754639134434.jpg";
import mapImage from "@assets/map_1754832577677.png";
import newOrganizationChart from "@assets/company.png";

// SVG 컴포넌트들
const HeroBackgroundSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full object-cover"
    viewBox="0 0 1200 600"
    fill="none"
  >
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#0F4C82", stopOpacity: 0.1 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#000000", stopOpacity: 0.05 }}
        />
      </linearGradient>
    </defs>
    <rect width="1200" height="600" fill="url(#heroGradient)" />
    <circle cx="200" cy="100" r="80" fill="#0F4C82" opacity="0.1" />
    <circle cx="1000" cy="500" r="120" fill="#000000" opacity="0.05" />
    <path
      d="M300 200 L500 250 L700 200 L900 300"
      stroke="#0F4C82"
      strokeWidth="2"
      opacity="0.3"
      fill="none"
    />
  </svg>
);

const BusinessValueSVG = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" className="w-full h-auto">
    <defs>
      <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#0F4C82" }} />
        <stop offset="100%" style={{ stopColor: "#000000" }} />
      </linearGradient>
    </defs>
    <rect
      x="50"
      y="50"
      width="80"
      height="60"
      rx="10"
      fill="url(#businessGradient)"
      opacity="0.8"
    />
    <rect
      x="170"
      y="30"
      width="80"
      height="80"
      rx="10"
      fill="url(#businessGradient)"
      opacity="0.9"
    />
    <rect
      x="290"
      y="70"
      width="80"
      height="60"
      rx="10"
      fill="url(#businessGradient)"
      opacity="0.7"
    />
    <text
      x="90"
      y="85"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      B2B
    </text>
    <text
      x="210"
      y="75"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      Platform
    </text>
    <text
      x="330"
      y="105"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      B2C
    </text>
    <path
      d="M130 80 L170 70"
      stroke="#0F4C82"
      strokeWidth="3"
      markerEnd="url(#arrowhead)"
    />
    <path
      d="M250 70 L290 85"
      stroke="#0F4C82"
      strokeWidth="3"
      markerEnd="url(#arrowhead)"
    />
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="10"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#0F4C82" />
      </marker>
    </defs>
  </svg>
);

const GlobalNetworkSVG = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" className="w-full h-auto">
    <circle
      cx="200"
      cy="150"
      r="100"
      fill="none"
      stroke="#0F4C82"
      strokeWidth="2"
      opacity="0.3"
    />
    <circle
      cx="200"
      cy="150"
      r="60"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      opacity="0.2"
    />
    <circle cx="200" cy="150" r="5" fill="#0F4C82" />
    <circle cx="120" cy="100" r="3" fill="#000000" />
    <circle cx="280" cy="100" r="3" fill="#000000" />
    <circle cx="120" cy="200" r="3" fill="#000000" />
    <circle cx="280" cy="200" r="3" fill="#000000" />
    <path
      d="M200 150 L120 100"
      stroke="#0F4C82"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M200 150 L280 100"
      stroke="#0F4C82"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M200 150 L120 200"
      stroke="#0F4C82"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M200 150 L280 200"
      stroke="#0F4C82"
      strokeWidth="1"
      opacity="0.6"
    />
    <text x="100" y="95" fontSize="10" fill="#000000">
      중국
    </text>
    <text x="270" y="95" fontSize="10" fill="#000000">
      동남아
    </text>
    <text x="100" y="215" fontSize="10" fill="#000000">
      한국
    </text>
    <text x="270" y="215" fontSize="10" fill="#000000">
      Global
    </text>
  </svg>
);

const TechnologySVG = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" className="w-full h-auto">
    <rect
      x="100"
      y="100"
      width="200"
      height="100"
      rx="20"
      fill="none"
      stroke="#0F4C82"
      strokeWidth="2"
    />
    <rect
      x="120"
      y="120"
      width="50"
      height="30"
      rx="5"
      fill="#0F4C82"
      opacity="0.7"
    />
    <rect
      x="180"
      y="120"
      width="50"
      height="30"
      rx="5"
      fill="#000000"
      opacity="0.7"
    />
    <rect
      x="240"
      y="120"
      width="50"
      height="30"
      rx="5"
      fill="#0F4C82"
      opacity="0.5"
    />
    <rect
      x="120"
      y="160"
      width="80"
      height="20"
      rx="3"
      fill="#0F4C82"
      opacity="0.3"
    />
    <rect
      x="210"
      y="160"
      width="80"
      height="20"
      rx="3"
      fill="#000000"
      opacity="0.3"
    />
    <text
      x="200"
      y="90"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill="#0F4C82"
    >
      FeedBack Platform
    </text>
    <text
      x="145"
      y="140"
      textAnchor="middle"
      fontSize="8"
      fill="white"
      fontWeight="bold"
    >
      OEM
    </text>
    <text
      x="205"
      y="140"
      textAnchor="middle"
      fontSize="8"
      fill="white"
      fontWeight="bold"
    >
      Brand
    </text>
    <text
      x="265"
      y="140"
      textAnchor="middle"
      fontSize="8"
      fill="white"
      fontWeight="bold"
    >
      Trade
    </text>
  </svg>
);

// 새로운 브랜드 메시지 배너 - 미래형 창고 배경
const BrandMessageBannerSVG = ({ title }: { title: string }) => (
  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
    {/* 배경 이미지 */}
    <div className="absolute inset-0">
      <img
        src={warehouseImage}
        alt="미래형 유통 창고"
        className="w-full h-full object-cover"
      />
      {/* 어둡게 하는 오버레이 */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* 블루 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-blue-900/30"></div>
    </div>

    {/* 메인 텍스트 */}
    <div className="relative z-10 flex items-center justify-center h-96 px-8">
      <div className="text-center">
        <h2
          className="about-banner-title mb-4"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>

    {/* 네온 스타일 장식 요소들 */}
    <div className="absolute top-4 left-4 opacity-60">
      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
    </div>
    <div className="absolute top-8 right-8 opacity-60">
      <div
        className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
    <div className="absolute bottom-6 left-6 opacity-60">
      <div
        className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>

    {/* 연결선 그래픽 요소 */}
    <div className="absolute bottom-4 right-4 opacity-40">
      <svg width="80" height="60" viewBox="0 0 80 60" className="text-blue-300">
        <path
          d="M 10 30 Q 25 10 40 30 Q 55 50 70 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="drop-shadow-lg"
        />
        <circle cx="10" cy="30" r="2" fill="currentColor" />
        <circle cx="40" cy="30" r="2" fill="currentColor" />
        <circle cx="70" cy="30" r="2" fill="currentColor" />
      </svg>
    </div>
  </div>
);

export default function About() {
  const { t } = useLanguage();
  const [timelineVisible, setTimelineVisible] = useState<boolean[]>([]);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData = [
    {
      year: "2025.10",
      description: t("about.timeline.2025_10"),
      type: t("about.timeline.type.expansion"),
    },
    {
      year: "2025.09",
      description: t("about.timeline.2025_09"),
      type: t("about.timeline.type.expansion"),
    },
    {
      year: "2025.08",
      description: t("about.timeline.2025_08"),
      type: t("about.timeline.type.product"),
    },
    {
      year: "2025.04",
      description: t("about.timeline.2025_04"),
      type: t("about.timeline.type.product"),
    },
    {
      year: "2025.01",
      description: t("about.timeline.2025_01"),
      type: t("about.timeline.type.expansion"),
    },
    {
      year: "2024",
      description: t("about.timeline.2024"),
      type: t("about.timeline.type.founding"),
    },
  ];

  // 타임라인 애니메이션 초기화
  useEffect(() => {
    setTimelineVisible(new Array(timelineData.length).fill(false));
  }, [timelineData.length]);

  // Intersection Observer를 사용한 스크롤 애니메이션 (성능 최적화)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updates: { [key: number]: boolean } = {};

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (index >= 0) {
              updates[index] = true;
            }
          }
        });

        // 한번에 상태 업데이트로 리렌더링 최소화
        if (Object.keys(updates).length > 0) {
          setTimelineVisible((prev) => {
            const newVisible = [...prev];
            Object.entries(updates).forEach(([index, value]) => {
              newVisible[Number(index)] = value;
            });
            return newVisible;
          });
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    const currentRefs = timelineRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* 브랜드 메시지 배너 */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandMessageBannerSVG title={t("about.story.main")} />
        </div>
      </section>
      {/* Company Story Section - 쿠쿠 스타일 스토리텔링 */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-lg text-foreground leading-relaxed space-y-8 max-w-4xl mx-auto">
              <p
                className="about-story-main text-[30px] text-center"
                dangerouslySetInnerHTML={{ __html: t("about.story.main") }}
              />

              <p
                className="about-story-sub w-full text-center"
                dangerouslySetInnerHTML={{ __html: t("about.story.sub") }}
              />

              <p
                className="about-story-detail text-[20px]"
                dangerouslySetInnerHTML={{ __html: t("about.story.detail") }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Full Bleed Background Image + Parallax Scroll */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${peopleImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3
            className="about-parallax-title mb-8 font-light"
            dangerouslySetInnerHTML={{ __html: t("about.parallax.title") }}
          />
          <p
            className="about-parallax-description max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: t("about.parallax.description"),
            }}
          />
        </div>
      </section>
      {/* 경영철학 - 쿠쿠 스타일의 4개 핵심 가치 */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="about-section-title mb-8">
              {t("about.philosophy.title")}
            </h2>
            <p
              className="about-story-sub text-foreground leading-relaxed max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{
                __html: t("about.philosophy.description"),
              }}
            />
          </div>

          {/* 첫 번째 가치 - 고객·파트너 중심 */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={partnershipImage}
                    alt="파트너십과 협력"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3
                  className="about-philosophy-title mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value1.title"),
                  }}
                />
                <p
                  className="about-philosophy-description text-[0F4C82] text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value1.description"),
                  }}
                />
              </div>
            </div>
          </div>

          {/* 두 번째 가치 - 통합 실행력 */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={networkImage}
                    alt="네트워크와 연결"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-right">
                <h3
                  className="about-philosophy-title mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value2.title"),
                  }}
                />
                <p
                  className="about-philosophy-description text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value2.description"),
                  }}
                />
              </div>
            </div>
          </div>

          {/* 세 번째 가치 - 글로벌 경쟁력 */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={globalImage}
                    alt="글로벌 네트워크"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3
                  className="about-philosophy-title mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value3.title"),
                  }}
                />
                <p
                  className="about-philosophy-description text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value3.description"),
                  }}
                />
              </div>
            </div>
          </div>

          {/* 네 번째 가치 - 신뢰 기반 파트너십 */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={trustImage}
                    alt="신뢰와 파트너십"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-right">
                <h3
                  className="about-philosophy-title mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value4.title"),
                  }}
                />
                <p
                  className="about-philosophy-description text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value4.description"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline - 이미지 스타일 레이아웃 */}
      <section
        className="py-20 relative overflow-hidden bg-white text-slate-800"
        style={{
          backgroundImage: `url(${mapImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* 화이트 오버레이 */}
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center mb-16 bg-white/70 p-4 rounded-xl backdrop-blur-sm">
            <div className="w-4 h-4 bg-blue-600 rounded-full mr-6"></div>
            <h2 className="about-section-title text-slate-900">
              {t("about.timeline.title")}
            </h2>
          </div>

          <div className="relative ml-2">
            {/* 수직 라인 */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-300"></div>
            {/* 애니메이션 라인 */}
            <div
              className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-500 transition-all duration-2000 ease-out"
              style={{
                height:
                  timelineVisible.filter((v) => v).length > 0
                    ? `${(timelineVisible.filter((v) => v).length / timelineData.length) * 100}%`
                    : "0%",
              }}
            ></div>

            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (timelineRefs.current[index] = el)}
                data-index={index}
                className={`relative mb-16 last:mb-0 transition-all duration-1000 ease-out ${
                  timelineVisible[index]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[-50px]"
                }`}
              >
                {/* 타임라인 도트 */}
                <div className="absolute left-0 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-blue-600"></div>
                </div>

                {/* 연도와 내용 */}
                <div
                  className={`ml-8 bg-white/70 p-6 rounded-xl backdrop-blur-sm shadow-sm transition-all duration-1000 ease-out ${
                    timelineVisible[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h3 className="about-timeline-year mb-4">{item.year}</h3>
                  <div className="text-slate-700 leading-relaxed">
                    <p className="about-timeline-description flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      {item.description}
                    </p>
                    {item.type && (
                      <div className="mt-2">
                        <Badge
                          variant={
                            item.type === "창립"
                              ? "default"
                              : item.type === "확장"
                                ? "secondary"
                                : "outline"
                          }
                          className={`bg-blue-100 text-blue-800 border-blue-300 transition-all duration-1000 ease-out ${
                            timelineVisible[index]
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-75"
                          }`}
                        >
                          {item.type}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/75 border border-slate-200 p-8 rounded-2xl text-center shadow-lg backdrop-blur-sm">
            <p
              className="about-story-detail leading-relaxed font-medium text-[#000000]"
              dangerouslySetInnerHTML={{ __html: t("about.timeline.bottom") }}
            />
          </div>
        </div>
      </section>
      {/* CEO Message - 쿠쿠 스타일 대형 메시지 */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <blockquote className="about-ceo-quote mb-8">
              {t("about.ceo.quote")}
            </blockquote>
            <h2 className="about-ceo-title mb-8">{t("about.ceo.title")}</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* CEO 프로필 영역 */}
              <div className="lg:w-1/3 bg-gradient-to-br from-primary to-accent p-12 text-white text-center flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">
                  {t("about.ceo.name")}
                </h3>
                <p className="text-lg opacity-90">{t("about.ceo.position")}</p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p
                    className="opacity-80 text-[18px]"
                    dangerouslySetInnerHTML={{ __html: t("about.ceo.motto") }}
                  />
                </div>
              </div>

              {/* 메시지 영역 */}
              <div className="lg:w-2/3 p-12">
                <div className="space-y-6 text-foreground leading-relaxed">
                  <p className="about-ceo-message">{t("about.ceo.message1")}</p>

                  <p className="about-ceo-message">{t("about.ceo.message2")}</p>

                  <p className="about-ceo-message">{t("about.ceo.message3")}</p>

                  <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                    <p className="about-ceo-highlight">
                      {t("about.ceo.highlight")}
                    </p>
                  </div>

                  <p className="about-ceo-message">{t("about.ceo.message4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Organization Chart */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="about-org-title mb-16">{t("about.org.title")}</h2>

          <div className="flex justify-center">
            <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl w-full border border-border">
              <img
                src={newOrganizationChart}
                alt={t("about.org.title")}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="w-full mt-12 px-4">
            <p
              className="text-[20px]"
              style={{ 
                width: '100%', 
                color: '#000000',
                textAlign: 'center',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: t("about.org.description") }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
