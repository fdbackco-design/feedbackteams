import { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Hospital,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";
import cargoShipImage from "@assets/bada-leul-hanghae-haneun-hwamulseon_1754648981305.jpg";
import factoryImage from "@assets/factory_1754649106831.png";
import homeshoppingImage from "@assets/homeshopping_1754649174036.png";
import hospitalImage from "@assets/Whisk_8652b62135_1754649198457.jpg";
import appDevImage from "@assets/representation-user-experience-interface-design_1754649277467.jpg";

const services = [
  {
    icon: ShoppingCart,
    title: "유통 / 수출입 중개",
    description:
      "아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다. 다양한 제품군에 대한 전문적인 수출입 컨설팅과 물류 솔루션을 함께 제공하여 글로벌 비즈니스를 지원합니다.",
    features: ["아시아 유통망 구축", "수출입 통관 대행", "물류 최적화 솔루션"],
    buttonText: "서비스 문의",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    imageUrl: cargoShipImage,
  },
  {
    icon: TrendingUp,
    title: "자체 브랜드 제조 (OEM)",
    description:
      "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다. 품질 관리부터 제품 개발까지 전 과정을 책임집니다.",
    features: ["4개 자체 브랜드 운영", "OEM/ODM 제조", "품질관리 시스템"],
    buttonText: "브랜드 보기",
    buttonColor: "bg-green-600 hover:bg-green-700",
    imageUrl: factoryImage,
  },
  {
    icon: TrendingUp,
    title: "글로벌 마케팅/브랜딩",
    description:
      "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다. 브랜드 아이덴티티 개발부터 글로벌 시장 진출 전략까지 종합적인 마케팅 서비스를 지원합니다.",
    features: ["홈쇼핑 연계 마케팅", "디지털 마케팅", "글로벌 진출 전략"],
    buttonText: "상담 신청",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    imageUrl: homeshoppingImage,
  },
  {
    icon: Hospital,
    title: "의료관광 플랫폼",
    description:
      "상생 브랜드를 통한 의료관광 플랫폼 운영으로 한국의 우수한 의료 서비스를 전 세계에 연결합니다. 태국, 베트남을 시작으로 아시아 전역으로 서비스를 확장하고 있습니다.",
    features: ["메디컬 투어리즘", "병원 네트워크", "다국어 플랫폼"],
    buttonText: "상생 브랜드 보기",
    buttonColor: "bg-red-600 hover:bg-red-700",
    imageUrl: hospitalImage,
  },
  {
    icon: Smartphone,
    title: "앱 개발",
    description:
      "의료/케어 통합 앱 개발로 디지털 헬스케어 솔루션을 제공합니다. 다국어 지원과 실시간 상담 기능을 통해 글로벌 사용자들에게 편리한 서비스를 제공합니다.",
    features: ["의료/케어 통합 앱", "다국어 지원", "실시간 상담"],
    buttonText: "앱 정보 보기",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    imageUrl: appDevImage,
  },
];

export default function Service() {
  // [마지막 클론, ...원본, 첫 클론]
  const extendedServices = useMemo(
    () => [services[services.length - 1], ...services, services[0]],
    [],
  );

  // 무한루프 인덱스는 1부터(=실제 첫 슬라이드)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const jumpingRef = useRef(false); // 점프 중 중복 처리 방지

  const GAP = 16; // gap-4

  const getTranslateFor = (index: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const firstCard = track.children[0] as HTMLElement | undefined;
    const cardWidth = firstCard?.clientWidth || 0;
    const containerWidth = track.clientWidth;
    const slideWidth = cardWidth + GAP;
    const centerOffset = (containerWidth - cardWidth) / 2;
    return -(index * slideWidth) + centerOffset;
  };

  const moveTo = (index: number) => {
    // 일반 이동은 transition 유지
    const track = trackRef.current;
    if (track) track.style.transition = ""; // 기본 transition 사용
    setCurrentIndex(index);
    setTranslateX(getTranslateFor(index));
  };

  const nextSlide = () => moveTo(currentIndex + 1);
  const prevSlide = () => moveTo(currentIndex - 1);
  const goToSlide = (realIndex: number) => moveTo(realIndex + 1); // 0~n-1 → +1

  // 초기 배치: transition 끄고 1번으로 즉시 배치
  useEffect(() => {
    const t = setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = "none";
      setCurrentIndex(1);
      setTranslateX(getTranslateFor(1));
      // 강제 리플로우로 스타일 확정
      track.getBoundingClientRect();
      // 다음 프레임에 transition 복구
      requestAnimationFrame(() => {
        const tr = trackRef.current;
        if (tr) tr.style.transition = "";
      });
    }, 100);
    return () => clearTimeout(t);
  }, []);

  // transition 끝나면 경계에서 점프(transition 없이 즉시 이동)
  const handleTransitionEnd = (e?: React.TransitionEvent<HTMLDivElement>) => {
    // 트랙 자신에게서만 처리(이미지 등 자식의 이벤트 무시)
    if (e && e.target !== e.currentTarget) return;

    const track = trackRef.current;
    if (!track || jumpingRef.current) return;

    const lastCloneIndex = extendedServices.length - 1;

    // 오른쪽 끝(마지막 클론) → 실제 첫(1)로 점프
    if (currentIndex === lastCloneIndex) {
      jumpingRef.current = true;
      track.style.transition = "none";
      const real = 1;
      setCurrentIndex(real);
      setTranslateX(getTranslateFor(real));
      track.getBoundingClientRect(); // 리플로우
      requestAnimationFrame(() => {
        const tr = trackRef.current;
        if (tr) tr.style.transition = "";
        jumpingRef.current = false;
      });
      return;
    }

    // 왼쪽 끝(첫 클론) → 실제 마지막(services.length)으로 점프
    if (currentIndex === 0) {
      jumpingRef.current = true;
      track.style.transition = "none";
      const real = services.length;
      setCurrentIndex(real);
      setTranslateX(getTranslateFor(real));
      track.getBoundingClientRect();
      requestAnimationFrame(() => {
        const tr = trackRef.current;
        if (tr) tr.style.transition = "";
        jumpingRef.current = false;
      });
    }
  };

  // 도트 활성 인덱스(0~n-1)
  const activeDot =
    (((currentIndex - 1) % services.length) + services.length) %
    services.length;

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-8 mt-[75px]">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            서비스 소개
          </h1>
          <div className="w-24 h-0.5 bg-[#0F4C82] mx-auto mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            FeedBack은 다양한 분야의 전문적인 서비스를 통해
            <br />
            고객의 비즈니스 성공을 지원합니다.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative w-full">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Track */}
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {extendedServices.map((service, index) => (
                <Card
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 w-[80%] overflow-hidden flex flex-col border-0 shadow-none bg-transparent"
                  style={{ scrollSnapAlign: "center" }}
                >
                  {/* Image */}
                  <div className="h-[400px] lg:h-[450px] overflow-hidden">
                    {service.imageUrl ? (
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className={`w-full h-full object-cover rounded-2xl ${
                          index === 2 || index === 4
                            ? "object-center"
                            : index === 5
                              ? "object-[30%_20%]"
                              : "object-top"
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl">
                        {/* @ts-ignore */}
                        <service.icon className="w-20 h-20 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl lg:text-5xl font-bold text-blue-500">
                        {String(
                          ((index - 1 + services.length) % services.length) + 1,
                        ).padStart(2, "0")}
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
                          프로젝트 문의
                        </Link>
                      </Button>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 mb-4 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div
                          key={i}
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
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeDot
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="mt-16 text-center bg-primary rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            더 자세한 상담이 필요하신가요?
          </h3>
          <p className="text-xl mb-8">
            전문 컨설턴트가 귀하의 비즈니스에 맞는 최적의 솔루션을
            제안해드립니다.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">무료 상담 신청</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
