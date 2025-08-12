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
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
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

    // 디바운싱을 위한 timeout
    setTimeout(() => {
      if (!carouselRef.current) return;
      
      // 첫 번째 세트의 시작 부분에 도달했을 때
      if (carouselRef.current.scrollLeft <= slideWidth / 2) {
        carouselRef.current.style.scrollBehavior = 'auto';
        carouselRef.current.scrollLeft = totalOriginalWidth + carouselRef.current.scrollLeft;
        carouselRef.current.style.scrollBehavior = 'smooth';
      }
      // 세 번째 세트의 끝 부분에 도달했을 때
      else if (carouselRef.current.scrollLeft >= totalOriginalWidth * 2 - slideWidth / 2) {
        carouselRef.current.style.scrollBehavior = 'auto';
        carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - totalOriginalWidth;
        carouselRef.current.style.scrollBehavior = 'smooth';
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
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-8 mt-[75px]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            서비스 소개
          </h1>
          <div className="w-16 sm:w-24 h-0.5 bg-[#0F4C82] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mobile-padding">
            FeedBack은 다양한 분야의 전문적인 서비스를 통해
            <br className="hidden sm:block" />
            고객의 비즈니스 성공을 지원합니다.
          </p>
        </div>

        {/* Horizontal Carousel Layout */}
        <div className="relative w-full">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="tap-target absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="tap-target absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
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
              scrollSnapType: "x mandatory"
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
                className="flex-shrink-0 w-[80%] overflow-hidden flex flex-col border-0 shadow-none bg-transparent"
                style={{ scrollSnapAlign: "center" }}
              >
                {/* Image Section - Clean, no overlays */}
                <div className="h-[400px] lg:h-[450px] overflow-hidden">
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className={`w-full h-full object-cover rounded-2xl ${
                        (index % services.length) === 1 || (index % services.length) === 3
                          ? "object-center"
                          : (index % services.length) === 4
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
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        프로젝트 문의
                      </Link>
                    </Button>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm lg:text-base">
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

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
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
