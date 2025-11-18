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
import heroBackground from "@assets/company_banner_1763445755615.jpg";
import puzzleImage from "@assets/company_1_1763452920681.jpg";

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

  useEffect(() => {
    setTimelineVisible(new Array(timelineData.length).fill(false));
  }, [timelineData.length]);

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
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Company Background"
            className="w-full h-full"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div> */}
        </div>

        {/* 메인 콘텐츠 */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1
            className="font-bold text-white mb-6 tracking-tight"
            style={{ fontSize: "60px" }}
          >
            FEEDBACK
          </h1>
          <p className="text-white font-regular" style={{ fontSize: "20px" }}>
            {t("about.story.sub")}
          </p>
        </div>
      </section>

      {/* Brand Partnership Section */}
      <section
        className="bg-white"
        style={{ paddingTop: "150px", paddingBottom: "150px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full">
            <h2
              className="font-bold text-black mb-6"
              style={{ lineHeight: "69px", fontSize: "50px" }}
            >
              Hoid, Medifeed, InYourHeart, 상생 등<br />
              자체 브랜드와 글로벌 파트너십을 기반으로
              <br />
              기획부터 제조·유통·브랜딩까지 전 과정을 함께합니다.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              고객의 삶 속에 스며든 FeedBack의 브랜드 하나하나가 고객 여러분의
              하루를 더욱 편리하고 행복하게 만들 수 있도록
              <br />
              언제나 노력하는 FeedBack이 되겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-lg text-foreground leading-relaxed space-y-8 max-w-4xl mx-auto">
              <p
                className="text-[20px] font-normal text-center"
                dangerouslySetInnerHTML={{ __html: t("about.story.detail") }}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Parallax Section */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${peopleImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          height: "450px",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

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

      {/* 경영철학 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="about-section-title mb-8">
              {t("about.philosophy.title")}
            </h2>
            <p
              className="about-story-sub text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t("about.philosophy.description"),
              }}
            />
          </div>

          <div className="space-y-16">
            {/* 첫 번째 가치 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={puzzleImage}
                  alt="고객·파트너 중심"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2 text-left">
                <h3
                  className="text-2xl font-bold mb-4"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value1.title"),
                  }}
                />
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: t("about.philosophy.value1.description"),
                  }}
                />
              </div>
            </div>

            {/* 두 번째 가치 */}
            <div className="text-left">
              <h3
                className="text-2xl font-bold mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("about.philosophy.value2.title"),
                }}
              />
              <p
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t("about.philosophy.value2.description"),
                }}
              />
            </div>

            {/* 세 번째 가치 */}
            <div className="text-left">
              <h3
                className="text-2xl font-bold mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("about.philosophy.value3.title"),
                }}
              />
              <p
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t("about.philosophy.value3.description"),
                }}
              />
            </div>

            {/* 네 번째 가치 */}
            <div className="text-left">
              <h3
                className="text-2xl font-bold mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("about.philosophy.value4.title"),
                }}
              />
              <p
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t("about.philosophy.value4.description"),
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 relative overflow-hidden bg-white text-slate-800"
        style={{
          backgroundImage: `url(${mapImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center mb-16 bg-white/70 p-4 rounded-xl backdrop-blur-sm">
            <h2 className="about-section-title text-slate-900">
              {t("about.timeline.title")}
            </h2>
          </div>

          <div className="relative ml-2">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-300"></div>
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
                <div className="absolute left-0 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-blue-600"></div>
                </div>

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

      {/* CEO Message */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <blockquote
              className="about-ceo-quote mb-8 text-center"
              style={{ maxWidth: "100%" }}
            >
              {t("about.ceo.quote")}
            </blockquote>
            <h2 className="about-ceo-title mb-8">{t("about.ceo.title")}</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
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

              <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12">
                <div className="space-y-6 text-foreground leading-relaxed">
                  <p className="about-ceo-message">{t("about.ceo.message1")}</p>
                  <p className="about-ceo-message">{t("about.ceo.message2")}</p>
                  <p className="about-ceo-message">{t("about.ceo.message3")}</p>

                  <div className="bg-primary/5 p-4 sm:p-6 rounded-xl border-l-4 border-primary">
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

          <div className="w-full flex justify-center mt-12">
            <p
              className="about-org-description text-[20px] w-full text-center"
              style={{ maxWidth: "100%" }}
              dangerouslySetInnerHTML={{ __html: t("about.org.description") }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
