// src/pages/Brand.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import HoidLogo from "@/components/HoidLogo";
import AsranLogo from "@/components/AsranLogo";
import hoidImg from "@/assets/brand/hoidintro.jpg";
import medifeedImg from "@assets/medifeed_1_1754636614100.jpg";
import inyourheartImg from "@assets/in_your_1754636664888.jpg";
import sangsaengImg from "@assets/sangsaeng_1_1754636754183.jpg";
import asranImg from "@assets/Mask group_1754982638844.jpg";
import lacerasImg from "@/assets/brand/laceras.jpg";
import carvellaImg from "@/assets/brand/carvella.png";
import lacerasLogo from "@/assets/brand/laceras_logo.png";
import carvellaLogo from "@/assets/brand/carvella_logo.png";
import LazyImage from "@/components/LazyImage";

export default function Brand() {
  const { t } = useLanguage();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  const brands = [
    {
      id: "hoid",
      name: "Hoid",
      category: t("brands.hoid.category"),
      slogan: t("brands.hoid.slogan"),
      logo: "svg",
      description: t("brands.hoid.description"),
      products: [
        t("brands.hoid.products.0"),
        t("brands.hoid.products.1"),
        t("brands.hoid.products.2"),
        t("brands.hoid.products.3"),
      ],
      bgColor: "bg-white",
      buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
      badgeColor: "bg-[#0F4C82]",
      image: hoidImg,
    },
    {
      id: "asran",
      name: "ASRAN",
      category: t("brands.asran.category"),
      slogan: t("brands.asran.slogan"),
      logo: "svg",
      description: t("brands.asran.description"),
      products: [
        t("brands.asran.products.0"),
        t("brands.asran.products.1"),
        t("brands.asran.products.2"),
        t("brands.asran.products.3"),
      ],
      bgColor: "bg-gray-50",
      buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
      badgeColor: "bg-[#0F4C82]",
      image: asranImg,
    },
    {
      id: "laceras",
      name: "La Ceras",
      category: t("brands.laceras.category"),
      slogan: t("brands.laceras.slogan"),
      logo: "img",
      description: t("brands.laceras.description"),
      products: [
        t("brands.laceras.products.0"),
        t("brands.laceras.products.1"),
        t("brands.laceras.products.2"),
        t("brands.laceras.products.3"),
      ],
      bgColor: "bg-white",
      buttonColor: "bg-[#233A73] hover:bg-[#1c2f5c]",
      badgeColor: "bg-[#233A73]",
      image: lacerasImg,
    },
    {
      id: "carvella",
      name: "Carvella",
      category: t("brands.carvella.category"),
      slogan: t("brands.carvella.slogan"),
      logo: "img",
      description: t("brands.carvella.description"),
      products: [
        t("brands.carvella.products.0"),
        t("brands.carvella.products.1"),
        t("brands.carvella.products.2"),
        t("brands.carvella.products.3"),
      ],
      bgColor: "bg-gray-50",
      buttonColor: "bg-[#6C2F1E] hover:bg-[#5a2719]",
      badgeColor: "bg-[#6C2F1E]",
      image: carvellaImg,
    },
    {
      id: "medifeed",
      name: "Medifeed",
      category: t("brands.medifeed.category"),
      slogan: t("brands.medifeed.slogan"),
      logo: "MF",
      description: t("brands.medifeed.description"),
      products: [
        t("brands.medifeed.products.0"),
        t("brands.medifeed.products.1"),
        t("brands.medifeed.products.2"),
        t("brands.medifeed.products.3"),
      ],
      bgColor: "bg-gray-50",
      buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
      badgeColor: "bg-[#0F4C82]",
      image: medifeedImg,
    },
    {
      id: "inyourheart",
      name: "InYourHeart",
      category: t("brands.inyourheart.category"),
      slogan: t("brands.inyourheart.slogan"),
      logo: "♥",
      description: t("brands.inyourheart.description"),
      products: [
        t("brands.inyourheart.products.0"),
        t("brands.inyourheart.products.1"),
        t("brands.inyourheart.products.2"),
        t("brands.inyourheart.products.3"),
      ],
      bgColor: "bg-white",
      buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
      badgeColor: "bg-[#0F4C82]",
      image: inyourheartImg,
    },
    {
      id: "sangsaeng",
      name: "Sangsaeng",
      category: t("brands.sangsaeng.category"),
      slogan: t("brands.sangsaeng.slogan"),
      logo: "상생",
      description: t("brands.sangsaeng.description"),
      products: [
        t("brands.sangsaeng.products.0"),
        t("brands.sangsaeng.products.1"),
        t("brands.sangsaeng.products.2"),
        t("brands.sangsaeng.products.3"),
      ],
      bgColor: "bg-gray-50",
      buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
      badgeColor: "bg-[#0F4C82]",
      image: sangsaengImg,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 mt-16 sm:mt-20 mobile-padding">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-4 sm:mb-6">
            {t("브랜드 소개")}
          </h1>
          <div className="w-16 sm:w-24 h-0.5 bg-[#0F4C82] mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.",
            )}
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`${brand.bgColor} rounded-xl sm:rounded-2xl lg:rounded-3xl mobile-card-padding lg:p-16 shadow-xl border border-gray-100`}
              style={{
                opacity: 0,
                transform: "translateY(50px)",
                transition: `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`,
              }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-4 sm:space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="space-y-3 sm:space-y-4">
                    {brand.logo === "svg" && brand.id === "hoid" ? (
                      <HoidLogo className="brand-logo" />
                    ) : brand.logo === "svg" && brand.id === "asran" ? (
                      <AsranLogo className="brand-logo [&_.cls-1]:fill-black" />
                    ) : brand.logo === "img" && brand.id === "laceras" ? (
                      <LazyImage
                        src={lacerasLogo}
                        alt="La Ceras 로고"
                        className="brand-logo object-contain"
                      />
                    ) : brand.logo === "img" && brand.id === "carvella" ? (
                      <LazyImage
                        src={carvellaLogo}
                        alt="Carvella 로고"
                        className="brand-logo object-contain"
                      />
                    ) : (
                      <h2 className="brand-logo text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight">
                        {brand.name}
                      </h2>
                    )}
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                      {brand.category}
                    </p>
                    <p className="text-[#0F4C82] font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
                      {brand.slogan}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-prose">
                    {brand.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {brand.products.map((product, productIndex) => (
                      <Badge
                        key={productIndex}
                        className={`${brand.badgeColor} text-white px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 text-xs sm:text-sm font-medium rounded-full`}
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/brand/${brand.id}`} className="block">
                    <Button
                      className={`${brand.buttonColor} text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl tap-target w-full sm:w-auto`}
                    >
                      <span className="truncate">
                        {t("ui.view_brand_detail")}
                      </span>
                      <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                    </Button>
                  </Link>
                </div>

                <div
                  className={`mt-4 sm:mt-6 lg:mt-0 ${
                    index % 2 === 1 ? "lg:col-start-1" : "lg:order-last"
                  }`}
                >
                  <LazyImage
                    src={brand.image}
                    alt={`${brand.name} 제품`}
                    className="rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg lg:shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Partnership CTA */}
        <div
          ref={ctaRef}
          className="mt-16 sm:mt-20 md:mt-24 bg-[#0F4C82] rounded-xl sm:rounded-2xl md:rounded-3xl mobile-card-padding text-white text-center shadow-xl sm:shadow-2xl"
          style={{
            opacity: 0,
            transform: "translateY(50px)",
            transition: "opacity 0.8s ease-out 1s, transform 0.8s ease-out 1s",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              {t("브랜드 파트너십에 관심이 있으신가요?")}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed opacity-90">
              {t(
                "FeedBack과 함께 혁신적인 브랜드를 만들어보세요. 기획부터 유통까지 전 과정을 지원하여 성공적인 브랜드 런칭을 도와드립니다.",
              )}
            </p>
            <Button
              asChild
              className="bg-[#000000] text-white hover:bg-gray-800 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg tap-target w-full sm:w-auto"
              size="lg"
            >
              <Link href="/contact">{t("파트너십 문의하기")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
