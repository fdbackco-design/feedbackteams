import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hospital, Smartphone, ShoppingCart, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import cargoShipImage from "@assets/bada-leul-hanghae-haneun-hwamulseon_1754648981305.jpg";
import factoryImage from "@assets/factory_1754649106831.png";
import homeshoppingImage from "@assets/homeshopping_1754649174036.png";
import hospitalImage from "@assets/Whisk_8652b62135_1754649198457.jpg";
import appDevImage from "@assets/representation-user-experience-interface-design_1754649277467.jpg";

const services = [
  {
    icon: ShoppingCart,
    title: "🛒 유통 / 수출입 중개",
    description: "아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다. 다양한 제품군에 대한 전문적인 수출입 컨설팅과 물류 솔루션을 함께 제공하여 글로벌 비즈니스를 지원합니다.",
    features: ["아시아 유통망 구축", "수출입 통관 대행", "물류 최적화 솔루션"],
    buttonText: "서비스 문의",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    imageUrl: cargoShipImage
  },
  {
    icon: TrendingUp,
    title: "🏭 자체 브랜드 제조 (OEM)",
    description: "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다. 품질 관리부터 제품 개발까지 전 과정을 책임집니다.",
    features: ["4개 자체 브랜드 운영", "OEM/ODM 제조", "품질관리 시스템"],
    buttonText: "브랜드 보기",
    buttonColor: "bg-green-600 hover:bg-green-700",
    imageUrl: factoryImage
  },
  {
    icon: TrendingUp,
    title: "🌐 글로벌 마케팅/브랜딩",
    description: "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다. 브랜드 아이덴티티 개발부터 글로벌 시장 진출 전략까지 종합적인 마케팅 서비스를 지원합니다.",
    features: ["홈쇼핑 연계 마케팅", "디지털 마케팅", "글로벌 진출 전략"],
    buttonText: "상담 신청",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    imageUrl: homeshoppingImage
  },
  {
    icon: Hospital,
    title: "🏥 의료관광 플랫폼",
    description: "상생 브랜드를 통한 의료관광 플랫폼 운영으로 한국의 우수한 의료 서비스를 전 세계에 연결합니다. 태국, 베트남을 시작으로 아시아 전역으로 서비스를 확장하고 있습니다.",
    features: ["메디컬 투어리즘", "병원 네트워크", "다국어 플랫폼"],
    buttonText: "상생 브랜드 보기",
    buttonColor: "bg-red-600 hover:bg-red-700",
    imageUrl: hospitalImage
  },
  {
    icon: Smartphone,
    title: "📱 앱 개발",
    description: "의료/케어 통합 앱 개발로 디지털 헬스케어 솔루션을 제공합니다. 다국어 지원과 실시간 상담 기능을 통해 글로벌 사용자들에게 편리한 서비스를 제공합니다.",
    features: ["의료/케어 통합 앱", "다국어 지원", "실시간 상담"],
    buttonText: "앱 정보 보기",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    imageUrl: appDevImage
  }
];

export default function Service() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 24; // gap-6 = 24px
      carouselRef.current.scrollTo({
        left: ((currentIndex + 1) % services.length) * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };
  
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 24; // gap-6 = 24px
      carouselRef.current.scrollTo({
        left: newIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 24; // gap-6 = 24px
      carouselRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  // 드래그 이벤트 핸들러들
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      // 드래그 후 가장 가까운 슬라이드로 스냅
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      const slideWidth = cardWidth + gap;
      const currentScroll = carouselRef.current.scrollLeft;
      const newIndex = Math.round(currentScroll / slideWidth);
      const clampedIndex = Math.max(0, Math.min(newIndex, services.length - 1));
      setCurrentIndex(clampedIndex);
      goToSlide(clampedIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 드래그 속도 조절
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">서비스 소개</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FeedBack은 다양한 분야의 전문적인 서비스를 통해<br />
            고객의 비즈니스 성공을 지원합니다.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Carousel Track */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 cursor-grab select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {services.map((service, index) => (
              <Card key={index} className="flex-shrink-0 w-96 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  {service.imageUrl ? (
                    <img 
                      src={service.imageUrl} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-gray-600" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </CardDescription>
                    <div className="mb-4 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-xs text-gray-500">
                          • {feature}
                        </div>
                      ))}
                    </div>
                    {service.buttonText === "브랜드 보기" ? (
                      <Button asChild className={`${service.buttonColor} text-white transition-colors text-sm`}>
                        <Link href="/brand">{service.buttonText}</Link>
                      </Button>
                    ) : (
                      <Button className={`${service.buttonColor} text-white transition-colors text-sm`}>
                        {service.buttonText}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">더 자세한 상담이 필요하신가요?</h3>
          <p className="text-xl mb-8">전문 컨설턴트가 귀하의 비즈니스에 맞는 최적의 솔루션을 제안해드립니다.</p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">무료 상담 신청</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
