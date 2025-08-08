import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Tags, Globe, ArrowRight, Play, ChevronDown, ChevronUp, Heart, Smartphone } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import HoidLogo from "@/components/HoidLogo";
import shipVideo from "@assets/ship_section_1754640786186.mp4";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

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
    duration: 1500,
    trigger: statsInView
  });

  const brandCount = useCountUp({
    start: 0,
    end: 4,
    duration: 1500,
    trigger: statsInView
  });

  const partnerCount = useCountUp({
    start: 0,
    end: 5,
    duration: 1500,
    trigger: statsInView
  });

  const hospitalCount = useCountUp({
    start: 0,
    end: 10,
    duration: 1500,
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 transform transition-all duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollY / 500)
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up text-white">
            브랜드와 시장을 연결하는<br />
            <span className="text-white">유통 플랫폼, 피드백</span>
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
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
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
          <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">핵심 서비스</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기획부터 제조, 유통, 브랜딩까지.<br />
              FeedBack은 브랜드 성장의 전 과정을 함께합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">유통 / 수출입 중개</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다.
                </CardDescription>
                <Link href="/service" className="text-primary font-semibold hover:underline inline-flex items-center group">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service Card 2 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <Tags className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">자체 브랜드 제조</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  OEM 생산 및 Hoid 등 자체 브랜드 개발로 브랜드 성장을 지원합니다.
                </CardDescription>
                <Link href="/brand" className="text-primary font-semibold hover:underline inline-flex items-center group">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service Card 3 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">글로벌 마케팅/브랜딩</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다.
                </CardDescription>
                <Link href="/service" className="text-primary font-semibold hover:underline inline-flex items-center group">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            

            
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
