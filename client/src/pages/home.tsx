import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Tags, Globe, ArrowRight, Play, ChevronDown, ChevronUp } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
         style={{ scrollSnapType: 'y mandatory', height: '100vh', overflowY: 'scroll' }}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}>
      {/* Section Navigation Dots */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sections.map((section, index) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-400 hover:bg-gray-600'
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
      <div className="fixed left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        <button
          onClick={scrollToPrevSection}
          disabled={currentSection === 0}
          className={`p-2 md:p-3 rounded-full transition-all duration-300 ${
            currentSection === 0 
              ? 'bg-gray-300 text-gray-400 cursor-not-allowed' 
              : 'bg-white shadow-lg hover:shadow-xl text-primary hover:bg-primary hover:text-white'
          }`}
          title="이전 섹션"
        >
          <ChevronUp className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button
          onClick={scrollToNextSection}
          disabled={currentSection === sections.length - 1}
          className={`p-2 md:p-3 rounded-full transition-all duration-300 ${
            currentSection === sections.length - 1 
              ? 'bg-gray-300 text-gray-400 cursor-not-allowed' 
              : 'bg-white shadow-lg hover:shadow-xl text-primary hover:bg-primary hover:text-white'
          }`}
          title="다음 섹션"
        >
          <ChevronDown className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            아시아의 브랜드와 의료를<br />
            <span className="text-secondary bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">세계와 연결합니다</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            FeedBack은 유통, 브랜드 플랫폼, 글로벌 마케팅을 통해<br />
            아시아를 넘어 세계로 진출합니다
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
            <span className="text-sm mb-2">다음 섹션</span>
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
              유통부터 브랜딩까지, FeedBack의 통합 솔루션으로 글로벌 시장에 진출하세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">유통 및 수출입</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  아시아 전역의 유통망을 통해 효율적인 수출입 서비스를 제공합니다.
                </CardDescription>
                <Link href="/service" className="text-primary font-semibold hover:underline inline-flex items-center group">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service Card 2 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <Tags className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">브랜드/OEM 운영</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  자체 브랜드 개발부터 OEM 생산까지 브랜드 성장을 위한 종합 솔루션을 제공합니다.
                </CardDescription>
                <Link href="/brand" className="text-primary font-semibold hover:underline inline-flex items-center group">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service Card 3 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">글로벌 마케팅</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 시장 진출을 지원합니다.
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
      <section id="brands" className="h-screen flex items-center justify-center bg-gray-100"
               style={{ scrollSnapAlign: 'start' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">우리의 브랜드</h2>
            <p className="text-xl text-gray-600">혁신적인 브랜드를 통해 고객에게 최고의 가치를 전달합니다</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand 1: Hoid */}
            <div className="group opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform group-hover:-translate-y-4 group-hover:scale-105 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">Hoid</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Hoid</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 mb-6">
                    디자인 가전 브랜드로 청소기, 공기청정기 등 혁신적인 생활가전을 선보입니다.
                  </CardDescription>
                  <Button className="w-full transform group-hover:scale-105 transition-transform duration-300">
                    브랜드 자세히 보기
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Brand 2: Medifeed */}
            <div className="group opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform group-hover:-translate-y-4 group-hover:scale-105 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">MF</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-secondary transition-colors">Medifeed</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 mb-6">
                    건강기능식품 전문 브랜드로 과학적 연구를 바탕으로 한 제품을 제공합니다.
                  </CardDescription>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 transform group-hover:scale-105 transition-transform duration-300">
                    브랜드 자세히 보기
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Brand 3: InYourHeart */}
            <div className="group opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform group-hover:-translate-y-4 group-hover:scale-105 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">IYH</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">InYourHeart</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 mb-6">
                    저자극 스킨케어 브랜드로 민감한 피부를 위한 순한 화장품을 개발합니다.
                  </CardDescription>
                  <Button className="w-full bg-accent hover:bg-accent/90 transform group-hover:scale-105 transition-transform duration-300">
                    브랜드 자세히 보기
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden"
               style={{ scrollSnapAlign: 'start' }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-5xl font-bold mb-2 animate-pulse">2023</div>
              <div className="text-xl opacity-90">설립년도</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-5xl font-bold mb-2 animate-pulse">3+</div>
              <div className="text-xl opacity-90">자체 브랜드</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-5xl font-bold mb-2 animate-pulse">5+</div>
              <div className="text-xl opacity-90">파트너 국가</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-5xl font-bold mb-2 animate-pulse">10+</div>
              <div className="text-xl opacity-90">병원 제휴</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="h-screen flex items-center justify-center bg-white relative overflow-hidden"
               style={{ scrollSnapAlign: 'start' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              글로벌 진출을 꿈꾸시나요?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              FeedBack과 함께 아시아를 넘어 세계 시장으로 나아가세요.<br />
              전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-10 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-floating"
                style={{animationDelay: '1s'}}
              >
                <Link href="/contact">무료 상담 신청</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-floating"
                style={{animationDelay: '1.5s'}}
              >
                <Link href="/service">서비스 자세히 보기</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-floating"></div>
        <div className="absolute top-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-accent/10 rounded-full animate-floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-primary/5 rounded-full animate-floating" style={{animationDelay: '0.5s'}}></div>
      </section>
    </div>
  );
}
