import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Tags, Globe, ArrowRight, Play, ChevronDown, ChevronUp, Heart, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import HoidLogo from "@/components/HoidLogo";
import shipVideo from "@assets/ship_section_1754640786186.mp4";
import mainBannerVideo from "@assets/main_banner_last_1754645135592.mp4";
import cargoShipImage from "@assets/bada-leul-hanghae-haneun-hwamulseon_1754648981305.jpg";
import factoryImage from "@assets/factory_1754649106831.png";
import homeshoppingImage from "@assets/homeshopping_1754649174036.png";
import hospitalImage from "@assets/Whisk_8652b62135_1754649198457.jpg";
import uiDesignImage from "@assets/UI_1754650048438.png";

const services = [
  {
    title: "유통 / 수출입 중개",
    description: "아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다. 다양한 제품군에 대한 전문적인 수출입 컨설팅과 물류 솔루션을 함께 제공하여 글로벌 비즈니스를 지원합니다.",
    features: ["아시아 유통망 구축", "수출입 통관 대행", "물류 최적화 솔루션"],
    imageUrl: cargoShipImage
  },
  {
    title: "자체 브랜드 제조 (OEM)",
    description: "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다. 품질 관리부터 제품 개발까지 전 과정을 책임집니다.",
    features: ["4개 자체 브랜드 운영", "OEM/ODM 제조", "품질관리 시스템"],
    imageUrl: factoryImage
  },
  {
    title: "글로벌 마케팅/브랜딩",
    description: "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다. 브랜드 아이덴티티 개발부터 글로벌 시장 진출 전략까지 종합적인 마케팅 서비스를 지원합니다.",
    features: ["홈쇼핑 연계 마케팅", "디지털 마케팅", "글로벌 진출 전략"],
    imageUrl: homeshoppingImage
  },
  {
    title: "의료관광 플랫폼",
    description: "상생 브랜드를 통한 의료관광 플랫폼 운영으로 한국의 우수한 의료 서비스를 전 세계에 연결합니다. 태국, 베트남을 시작으로 아시아 전역으로 서비스를 확장하고 있습니다.",
    features: ["메디컬 투어리즘", "병원 네트워크", "다국어 플랫폼"],
    imageUrl: hospitalImage
  },
  {
    title: "앱 개발",
    description: "의료/케어 통합 앱 개발로 디지털 헬스케어 솔루션을 제공합니다. 다국어 지원과 실시간 상담 기능을 통해 글로벌 사용자들에게 편리한 서비스를 제공합니다.",
    features: ["의료/케어 통합 앱", "다국어 지원", "실시간 상담"],
    imageUrl: uiDesignImage
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const serviceCarouselRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'hero', name: '홈' },
    { id: 'services', name: '서비스' },
    { id: 'brands', name: '브랜드' },
    { id: 'stats', name: '실적' },
    { id: 'cta', name: '문의' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        } else {
          setStatsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const yearCount = useCountUp({
    start: 2000,
    end: 2024,
    duration: 2000,
    trigger: statsInView
  });

  const brandCount = useCountUp({
    start: 0,
    end: 4,
    duration: 1800,
    trigger: statsInView
  });

  const partnerCount = useCountUp({
    start: 0,
    end: 5,
    duration: 2200,
    trigger: statsInView
  });

  const hospitalCount = useCountUp({
    start: 0,
    end: 10,
    duration: 2500,
    trigger: statsInView
  });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
      
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
        const targetElement = document.getElementById(sections[newSection].id);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToNextSection();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToPrevSection();
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(sections.length - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, sections]);

  // Touch gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      scrollToNextSection();
    }
    if (isRightSwipe) {
      scrollToPrevSection();
    }
  };

  const scrollToSection = (index: number) => {
    setCurrentSection(index);
    const targetElement = document.getElementById(sections[index].id);
    targetElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    const nextSection = Math.min(sections.length - 1, currentSection + 1);
    scrollToSection(nextSection);
  };

  const scrollToPrevSection = () => {
    const prevSection = Math.max(0, currentSection - 1);
    scrollToSection(prevSection);
  };

  return (
    <div className="fullpage-container hide-scrollbar"
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}>
      {/* Section Navigation Dots */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sections.map((section, index) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-gray-600 ${
                currentSection === index ? 'bg-[#0E9AFF]' : 'bg-[#ccc]'
              }`}
              title={section.name}
            />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {section.name}
            </div>
          </div>
        ))}
      </div>
      {/* Section Counter */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
        {currentSection + 1} / {sections.length}
      </div>
      {/* Navigation Arrows */}
      {currentSection > 0 && (
        <div className="fixed right-4 md:right-8 bottom-4 md:bottom-8 z-50">
          <button
            onClick={() => scrollToSection(0)}
            className="p-2 md:p-3 rounded-full transition-all duration-300 bg-white shadow-lg hover:shadow-xl text-primary hover:bg-primary hover:text-white"
            title="첫 번째 섹션으로"
          >
            <ChevronUp className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      )}
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" 
               style={{ scrollSnapAlign: 'start' }}>
        <div className="absolute inset-0">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={mainBannerVideo}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 transform transition-all duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollY / 500)
          }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight animate-fade-in-up text-white">
            <span className="font-bold">브랜드</span>와 <span className="font-bold">시장</span>을 <span className="font-bold">연결</span>하는<br />
            유통 플랫폼, <span className="font-bold">FEEDBACK</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            유통 · 브랜드 · 마케팅 · 제조가 하나로 연결되는 상생 플랫폼
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button asChild size="lg" className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <Link href="/service">서비스 둘러보기</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white bg-white text-black hover:bg-gray-100 hover:text-black transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="mr-2 w-5 h-5" />
              소개 영상 보기
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">MORE</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>

        {/* Video Modal */}
        {isVideoPlaying && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <div className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <Play className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl">소개 영상이 여기에 표시됩니다</p>
                <p className="text-sm text-gray-300 mt-2">클릭하여 닫기</p>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* Services Section */}
      <section id="services" className="h-screen flex items-center justify-center bg-white"
               style={{ scrollSnapAlign: 'start' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="text-sm text-primary font-semibold tracking-wide uppercase mb-2">SERVICE</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">핵심 서비스</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기획부터 제조, 유통, 브랜딩까지.<br />
              FeedBack은 브랜드 성장의 전 과정을 함께합니다.
            </p>
          </div>
          
          {/* Service Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button 
              onClick={() => {
                const newIndex = currentServiceIndex === 0 ? services.length - 1 : currentServiceIndex - 1;
                setCurrentServiceIndex(newIndex);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={() => {
                const newIndex = (currentServiceIndex + 1) % services.length;
                setCurrentServiceIndex(newIndex);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Service Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-96 lg:h-auto">
                  {services[currentServiceIndex] && (
                    <img 
                      src={services[currentServiceIndex].imageUrl} 
                      alt={services[currentServiceIndex].title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {services[currentServiceIndex] && (
                    <>
                      <div className="text-sm text-primary font-semibold mb-4">
                        0{currentServiceIndex + 1}/0{services.length}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                        {services[currentServiceIndex].title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {services[currentServiceIndex].description}
                      </p>
                      <div className="space-y-2 mb-8">
                        {services[currentServiceIndex].features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  <Link href="/service">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center group">
                      자세히 보기
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentServiceIndex 
                      ? 'bg-primary' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Brands Section */}
      <section id="brands" className="h-screen flex items-center justify-center bg-muted"
               style={{ scrollSnapAlign: 'start' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h2 className="text-4xl font-bold text-foreground mb-4">우리의 브랜드</h2>
            <p className="text-xl text-muted-foreground">혁신적인 브랜드를 통해 고객에게 최고의 가치를 전달합니다</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand 1: Hoid */}
            <Link href="/brand/hoid" className="group opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform group-hover:-translate-y-4 group-hover:scale-105 cursor-pointer relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <HoidLogo className="w-10 h-auto" fill="white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">Hoid</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-foreground text-sm mb-4">공기 속까지 바꾸는 디자인</p>
                  <p className="text-xs text-muted-foreground">공기청정기, 제습기 등 미니멀 가전</p>
                </CardContent>
              </Card>
            </Link>
            
            {/* Brand 2: Medifeed */}
            <Link href="/brand/medifeed" className="group opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform group-hover:-translate-y-4 group-hover:scale-105 cursor-pointer relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">MF</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Medifeed</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-foreground text-sm mb-4">매일을 지키는 작은 습관</p>
                  <p className="text-xs text-muted-foreground">잇몸, 눈 건강 중심 기능성 영양제</p>
                </CardContent>
              </Card>
            </Link>
            
            {/* Brand 3: InYourHeart */}
            <Link href="/brand/inyourheart" className="group opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform group-hover:-translate-y-4 group-hover:scale-105 cursor-pointer relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">InYourHeart</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-foreground text-sm mb-4">피부에 감성을 입히다</p>
                  <p className="text-xs text-muted-foreground">감성 스킨케어, 클린 포뮬러</p>
                </CardContent>
              </Card>
            </Link>

            {/* Brand 4: Sangsaeng */}
            <Link href="/brand/sangsaeng" className="group opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform group-hover:-translate-y-4 group-hover:scale-105 cursor-pointer relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">상생</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">상생</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-foreground text-sm mb-4">WE CONNECT KOREAN MEDICAL</p>
                  <p className="text-xs text-muted-foreground">의료관광, 헬스케어 플랫폼</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section id="stats" ref={statsRef} className="h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden"
               style={{ scrollSnapAlign: 'start' }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-5xl font-bold mb-2 tabular-nums min-w-[120px]">{yearCount}</div>
              <div className="text-xl opacity-90">설립년도</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-5xl font-bold mb-2 tabular-nums min-w-[80px]">{brandCount}+</div>
              <div className="text-xl opacity-90">자체 브랜드</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-5xl font-bold mb-2 tabular-nums min-w-[80px]">{partnerCount}+</div>
              <div className="text-xl opacity-90">파트너 국가</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-5xl font-bold mb-2 tabular-nums min-w-[100px]">{hospitalCount}+</div>
              <div className="text-xl opacity-90">병원 제휴</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section with Video Background */}
      <section id="cta" className="h-screen flex items-center justify-center relative overflow-hidden"
               style={{ scrollSnapAlign: 'start' }}>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={shipVideo} type="video/mp4" />
          </video>
        </div>
        
        {/* Black overlay with 25% transparency */}
        <div className="absolute inset-0 bg-[#0000005e]"></div>
        
        {/* Content over video */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="ml-[10%] max-w-2xl opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              글로벌 진출을 꿈꾸시나요?
            </h2>
            <p className="text-xl text-white/90 mb-12 drop-shadow-lg font-semibold">
              FeedBack과 함께 아시아를 넘어 세계 시장으로 나아가세요.<br />
              전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-10 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-floating bg-white text-blue-600 hover:bg-gray-100"
                style={{animationDelay: '1s'}}
              >
                <Link href="/contact">무료 상담 신청</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-floating border-white bg-white text-blue-600 hover:bg-gray-100"
                style={{animationDelay: '1.5s'}}
              >
                <Link href="/service">사업 제안서 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
