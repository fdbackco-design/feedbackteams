import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Hospital,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import cargoShipImage from "@assets/bada-leul-hanghae-haneun-hwamulseon_1754648981305.jpg";
import factoryImage from "@assets/factory_1754649106831.png";
import homeshoppingImage from "@assets/homeshopping_1754649174036.png";
import hospitalImage from "@assets/Whisk_8652b62135_1754649198457.jpg";
import appDevImage from "@assets/representation-user-experience-interface-design_1754649277467.jpg";

export default function Service() {
  const { t } = useLanguage();
  const [location] = useLocation();

  const services = [
    {
      icon: ShoppingCart,
      title: t("services.distribution.title"),
      description: t("services.distribution.description"),
      features: [
        t("services.distribution.features.0"),
        t("services.distribution.features.1"),
        t("services.distribution.features.2"),
      ],
      buttonText: t("services.distribution.button"),
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      imageUrl: cargoShipImage,
    },
    {
      icon: TrendingUp,
      title: t("services.manufacturing.title"),
      description: t("services.manufacturing.description"),
      features: [
        t("services.manufacturing.features.0"),
        t("services.manufacturing.features.1"),
        t("services.manufacturing.features.2"),
      ],
      buttonText: t("services.manufacturing.button"),
      buttonColor: "bg-green-600 hover:bg-green-700",
      imageUrl: factoryImage,
    },
    {
      icon: TrendingUp,
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      features: [
        t("services.marketing.features.0"),
        t("services.marketing.features.1"),
        t("services.marketing.features.2"),
      ],
      buttonText: t("services.marketing.button"),
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      imageUrl: homeshoppingImage,
    },
    {
      icon: Hospital,
      title: t("services.medical.title"),
      description: t("services.medical.description"),
      features: [
        t("services.medical.features.0"),
        t("services.medical.features.1"),
        t("services.medical.features.2"),
      ],
      buttonText: t("services.medical.button"),
      buttonColor: "bg-red-600 hover:bg-red-700",
      imageUrl: hospitalImage,
    },
    {
      icon: Smartphone,
      title: t("services.app.title"),
      description: t("services.app.description"),
      features: [
        t("services.app.features.0"),
        t("services.app.features.1"),
        t("services.app.features.2"),
      ],
      buttonText: t("services.app.button"),
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      imageUrl: appDevImage,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 무한 스크롤을 위해 services 배열을 3배로 복제
  const infiniteServices = [...services, ...services, ...services];

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(newIndex);
    goToSlide(newIndex + services.length); // 중간 세트의 인덱스로 이동
  };

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    goToSlide(newIndex + services.length); // 중간 세트의 인덱스로 이동
  };

  const goToSlide = (actualIndex: number) => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      const firstChild = carouselRef.current.children[0] as HTMLElement;
      const cardWidth = firstChild.clientWidth;
      const gap = 16; // gap-4 = 16px
      const containerWidth = carouselRef.current.clientWidth;

      // 카드를 정확히 화면 중앙에 위치시키기 위한 계산
      const slideWidth = cardWidth + gap;

      // 선택된 카드의 왼쪽 위치
      const cardLeft = actualIndex * slideWidth;

      // 카드 중앙을 화면 중앙에 맞추기 위한 스크롤 위치
      const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;

      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // 무한 루프를 위한 스크롤 처리
  const handleScroll = () => {
    if (!carouselRef.current || isDragging) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
    const gap = 16;
    const slideWidth = cardWidth + gap;
    const totalOriginalWidth = services.length * slideWidth;

    // 현재 인덱스 업데이트
    const currentScrollIndex = Math.round(scrollLeft / slideWidth);
    const normalizedIndex = currentScrollIndex % services.length;
    if (normalizedIndex !== currentIndex) {
      setCurrentIndex(normalizedIndex);
    }

    // 디바운싱을 위한 timeout
    setTimeout(() => {
      if (!carouselRef.current) return;

      // 첫 번째 세트의 시작 부분에 도달했을 때
      if (carouselRef.current.scrollLeft <= slideWidth / 2) {
        carouselRef.current.style.scrollBehavior = "auto";
        carouselRef.current.scrollLeft =
          totalOriginalWidth + carouselRef.current.scrollLeft;
        carouselRef.current.style.scrollBehavior = "smooth";
      }
      // 세 번째 세트의 끝 부분에 도달했을 때
      else if (
        carouselRef.current.scrollLeft >=
        totalOriginalWidth * 2 - slideWidth / 2
      ) {
        carouselRef.current.style.scrollBehavior = "auto";
        carouselRef.current.scrollLeft =
          carouselRef.current.scrollLeft - totalOriginalWidth;
        carouselRef.current.style.scrollBehavior = "smooth";
      }
    }, 100);
  };

  // 드래그 이벤트 핸들러들
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 드래그 속도 조절
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // 초기 위치를 중간 세트로 설정
  useEffect(() => {
    if (carouselRef.current) {
      const timer = setTimeout(() => {
        goToSlide(currentIndex + services.length);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <SEO
        title={t("nav.services")}
        description={t("services.title")}
        path={location}
      />
      <section className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 mt-16 sm:mt-20 mobile-padding">
          <h1 className="text-fluid-title break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold text-gray-900 maxw-title mx-auto mb-4 sm:mb-6">
            {t("서비스 소개")}
          </h1>
          <div className="w-16 sm:w-24 h-0.5 bg-[#0F4C82] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-600 maxw-body mx-auto">
            {t(
              "피드백은 유통부터 마케팅까지, 글로벌 비즈니스를 위한 전문 서비스를 제공합니다.",
            )}
          </p>
        </div>

        {/* Horizontal Carousel Layout */}
        <div className="relative w-full">
          {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex tap-target absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex tap-target absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab select-none w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
          >
            {infiniteServices.map((service, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] overflow-hidden flex flex-col border-0 shadow-none bg-transparent"
                style={{ scrollSnapAlign: "center" }}
              >
                {/* Image Section - Clean, no overlays */}
                <div className="h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[450px] overflow-hidden">
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className={`w-full h-full object-cover rounded-2xl ${
                        index % services.length === 1 ||
                        index % services.length === 3
                          ? "object-center"
                          : index % services.length === 4
                            ? "object-[30%_20%]"
                            : "object-top"
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl">
                      <service.icon className="w-20 h-20 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Content Section - All text content here */}
                <div className="p-6 lg:p-8 flex-1">
                  {/* Service number and button row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl lg:text-5xl font-bold text-blue-500">
                      {String((index % services.length) + 1).padStart(2, "0")}
                    </span>
                    <Button
                      asChild
                      size="sm"
                      className="bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2 text-xs"
                    >
                      <Link
                        href="/contact"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        {t("프로젝트 문의")}
                      </Link>
                    </Button>
                  </div>

                  {/* Title */}
                  <h3
                    className="break-keep text-balance text-pretty leading-tight font-bold text-gray-900 maxw-title mb-4"
                    style={{ fontSize: "clamp(20px, 4vw, 28px)" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-700 maxw-body mb-4">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {service.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-xs lg:text-sm text-gray-600 flex items-start"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Dot Indicators - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex justify-center mt-8 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  goToSlide(index + services.length);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Separate container with max-width */}
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="mt-16 text-center bg-primary rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-fluid-sub break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold maxw-title mx-auto mb-4">
            {t("더 자세한 상담이 필요하신가요?")}
          </h3>
          <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile maxw-body mx-auto mb-8">
            {t(
              "전문 컨설턴트가 귀하의 비즈니스에 맞는 최적의 솔루션을 제안해드립니다.",
            )}
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">{t("무료 상담 신청")}</Link>
          </Button>
        </div>
      </div>
    </section>
    </>
  );
}
