import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Truck,
  Tags,
  Globe,
  ArrowRight,
  Play,
  ChevronDown,
  ChevronUp,
  Heart,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Pause,
  PlayCircle,
  Newspaper,
  TrendingUp,
  Award,
  Calendar,
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import HoidLogo from "@/components/HoidLogo";
import Footer from "@/components/layout/footer";
import B2B2C_Hub from "@/components/B2B2C_Hub";
import NetworkBackground from "@/components/NetworkBackground";
import shipVideo from "@assets/ship_section_1754640786186.mp4";
import mainBannerVideo from "@assets/main_banner_last_1754645135592.mp4";
import cargoShipImage from "@assets/bada-leul-hanghae-haneun-hwamulseon_1754648981305.jpg";
import factoryImage from "@assets/factory_1754649106831.png";
import homeshoppingImage from "@assets/homeshopping_1754649174036.png";
import hospitalImage from "@assets/Whisk_8652b62135_1754649198457.jpg";
import uiDesignImage from "@assets/UI_1754650048438.png";
import newsBackgroundImage from "@assets/representation-user-experience-interface-design_1754649277467.jpg";
import serviceBackgroundImage from "@assets/futuristic-warehouse-with-blue-neon-lights-connected-data_1754566796044.jpg";
import hoidImg from "@assets/brand2_1754881083408.jpg";
import medifeedImg from "@assets/medifeed_1_1754636614100.jpg";
import inyourheartImg from "@assets/brand3_1754881349690.jpg";
import sangsaengImg from "@assets/sangsaeng_1_1754636754183.jpg";
import newsData from "@/data/news.json";
import { resolveNewsThumbnail, FALLBACK } from "@/assets/news";

const getServices = (t: (key: string) => string) => [
  {
    title: t("services.distribution.title"),
    description: t("services.distribution.description"),
    features: [
      t("services.distribution.features.0"),
      t("services.distribution.features.1"),
      t("services.distribution.features.2")
    ],
    imageUrl: cargoShipImage,
  },
  {
    title: t("services.manufacturing.title"),
    description: t("services.manufacturing.description"),
    features: [
      t("services.manufacturing.features.0"),
      t("services.manufacturing.features.1"),
      t("services.manufacturing.features.2")
    ],
    imageUrl: factoryImage,
  },
  {
    title: t("services.marketing.title"),
    description: t("services.marketing.description"),
    features: [
      t("services.marketing.features.0"),
      t("services.marketing.features.1"),
      t("services.marketing.features.2")
    ],
    imageUrl: homeshoppingImage,
  },
  {
    title: t("services.medical.title"),
    description: t("services.medical.description"),
    features: [
      t("services.medical.features.0"),
      t("services.medical.features.1"),
      t("services.medical.features.2")
    ],
    imageUrl: hospitalImage,
  },
  {
    title: t("services.app.title"),
    description: t("services.app.description"),
    features: [
      t("services.app.features.0"),
      t("services.app.features.1"),
      t("services.app.features.2")
    ],
    imageUrl: uiDesignImage,
  },
];

const getBrands = (t: (key: string) => string) => [
  {
    id: "hoid",
    name: "Hoid",
    category: t("brands.hoid.category"),
    slogan: t("brands.hoid.slogan"),
    description: t("brands.hoid.description"),
    products: [
      t("brands.hoid.products.0"),
      t("brands.hoid.products.1"),
      t("brands.hoid.products.2"),
      t("brands.hoid.products.3")
    ],
    image: hoidImg,
    color: "from-gray-400 to-gray-600",
  },
  {
    id: "medifeed",
    name: "Medifeed",
    category: t("brands.medifeed.category"),
    slogan: t("brands.medifeed.slogan"),
    description: t("brands.medifeed.description"),
    products: [
      t("brands.medifeed.products.0"),
      t("brands.medifeed.products.1"),
      t("brands.medifeed.products.2"),
      t("brands.medifeed.products.3")
    ],
    image: medifeedImg,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "inyourheart",
    name: "InYourHeart",
    category: t("brands.inyourheart.category"),
    slogan: t("brands.inyourheart.slogan"),
    description: t("brands.inyourheart.description"),
    products: [
      t("brands.inyourheart.products.0"),
      t("brands.inyourheart.products.1"),
      t("brands.inyourheart.products.2"),
      t("brands.inyourheart.products.3")
    ],
    image: inyourheartImg,
    color: "from-pink-500 to-pink-700",
  },
  {
    id: "sangsaeng",
    name: "상생 (Sangsaeng)",
    category: t("brands.sangsaeng.category"),
    slogan: t("brands.sangsaeng.slogan"),
    description: t("brands.sangsaeng.description"),
    products: [
      t("brands.sangsaeng.products.0"),
      t("brands.sangsaeng.products.1"),
      t("brands.sangsaeng.products.2"),
      t("brands.sangsaeng.products.3")
    ],
    image: sangsaengImg,
    color: "from-green-500 to-green-700",
  },
];

export default function Home() {
  const { t } = useLanguage();
  const services = getServices(t);
  const brands = getBrands(t);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const newsScrollRef = useRef<HTMLDivElement>(null);
  const [newsScrollProgress, setNewsScrollProgress] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const serviceCarouselRef = useRef<HTMLDivElement>(null);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [nextBrandIndex, setNextBrandIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: "hero", name: "홈" },
    { id: "services", name: "서비스" },
    { id: "brands", name: "브랜드" },
    { id: "achievements", name: "B2B2C" },
    { id: "news", name: "최신뉴스" },
    { id: "stats", name: "실적" },
    { id: "cta", name: "문의" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC key to close video modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVideoPlaying) {
        setIsVideoPlaying(false);
      }
    };

    if (isVideoPlaying) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isVideoPlaying]);

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
      { threshold: 0.5 },
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
    trigger: statsInView,
  });

  const brandCount = useCountUp({
    start: 0,
    end: 4,
    duration: 1800,
    trigger: statsInView,
  });

  const partnerCount = useCountUp({
    start: 0,
    end: 5,
    duration: 2200,
    trigger: statsInView,
  });

  const hospitalCount = useCountUp({
    start: 0,
    end: 10,
    duration: 2500,
    trigger: statsInView,
  });

  // Mouse drag scroll for news section
  useEffect(() => {
    const newsContainer = newsScrollRef.current;
    if (!newsContainer) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      newsContainer.style.cursor = 'grabbing';
      newsContainer.style.userSelect = 'none';
      startX = e.pageX;
      scrollLeft = newsContainer.scrollLeft;
      e.preventDefault();
    };

    const handleMouseLeave = () => {
      // Don't reset if still dragging - let global mouse up handle it
      if (!isDown) {
        newsContainer.style.cursor = 'grab';
        newsContainer.style.userSelect = '';
      }
    };

    const handleMouseUp = () => {
      if (isDown) {
        isDown = false;
        newsContainer.style.cursor = 'grab';
        newsContainer.style.userSelect = '';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 1.5; // Smooth scroll speed
      newsContainer.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = () => {
      const scrollLeft = newsContainer.scrollLeft;
      const maxScrollLeft = newsContainer.scrollWidth - newsContainer.clientWidth;
      const progress = maxScrollLeft > 0 ? (scrollLeft / maxScrollLeft) * 100 : 0;
      setNewsScrollProgress(progress);
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      newsContainer.style.cursor = 'grabbing';
      newsContainer.style.userSelect = 'none';
      startX = e.touches[0].pageX - newsContainer.offsetLeft;
      scrollLeft = newsContainer.scrollLeft;
    };

    const handleTouchEnd = () => {
      isDown = false;
      newsContainer.style.cursor = 'grab';
      newsContainer.style.userSelect = '';
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - newsContainer.offsetLeft;
      const walk = (x - startX) * 2.5;
      newsContainer.scrollLeft = scrollLeft - walk;
    };

    // Mouse events
    newsContainer.addEventListener('mousedown', handleMouseDown);
    newsContainer.addEventListener('mouseleave', handleMouseLeave);
    newsContainer.addEventListener('mouseup', handleMouseUp);
    newsContainer.addEventListener('mousemove', handleMouseMove);
    
    // Global mouse events for better drag experience
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    
    // Touch events
    newsContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    newsContainer.addEventListener('touchend', handleTouchEnd);
    newsContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Scroll progress tracking
    newsContainer.addEventListener('scroll', handleScroll);

    // Initial progress calculation
    handleScroll();

    return () => {
      newsContainer.removeEventListener('mousedown', handleMouseDown);
      newsContainer.removeEventListener('mouseleave', handleMouseLeave);
      newsContainer.removeEventListener('mouseup', handleMouseUp);
      newsContainer.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      newsContainer.removeEventListener('touchstart', handleTouchStart);
      newsContainer.removeEventListener('touchend', handleTouchEnd);
      newsContainer.removeEventListener('touchmove', handleTouchMove);
      newsContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Skip if already scrolling
      if (isScrolling) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.max(
        0,
        Math.min(sections.length - 1, currentSection + direction),
      );

      if (newSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(newSection);
        const targetElement = document.getElementById(sections[newSection].id);
        targetElement?.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
        
        // Reset scrolling state after animation
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToNextSection();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToPrevSection();
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(sections.length - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, sections]);

  // Preload next image for smoother transitions
  useEffect(() => {
    const nextIndex = (currentBrandIndex + 1) % brands.length;
    const img = new Image();
    img.src = brands[nextIndex].image;
  }, [currentBrandIndex]);

  // Auto-slide for brands carousel with fade effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setImageLoaded(false);
        setTimeout(() => {
          setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
          setTimeout(() => setImageLoaded(true), 50); // Small delay for smoother transition
        }, 300); // 300ms fade out duration
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

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
    if (isScrolling) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    const targetElement = document.getElementById(sections[index].id);
    targetElement?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
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
    <div
      className="fullpage-container hide-scrollbar"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Section Navigation Line */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative h-48">
          {/* Background line */}
          <div className={`absolute right-0 top-0 w-0.5 h-full transition-all duration-500 ${
            currentSection === 0 || currentSection === 5 || currentSection === 6
              ? 'bg-gray-300' 
              : 'bg-gray-500'
          }`}></div>
          {/* Progress line */}
          <div 
            className={`absolute right-0 top-0 w-0.5 transition-all duration-500 ${
              currentSection === 0 || currentSection === 5 || currentSection === 6
                ? 'bg-white' 
                : 'bg-primary'
            }`}
            style={{ height: `${((currentSection + 1) / sections.length) * 100}%` }}
          ></div>
          {/* Section numbers */}
          <div className={`absolute right-3 top-0 text-sm font-medium transition-all duration-500 ${
            currentSection === 0 || currentSection === 5 || currentSection === 6
              ? 'text-white' 
              : 'text-gray-900'
          }`}>
            {String(currentSection + 1).padStart(2, '0')}
          </div>
          <div className={`absolute right-3 bottom-0 text-sm font-medium transition-all duration-500 ${
            currentSection === 0 || currentSection === 5 || currentSection === 6
              ? 'text-gray-400' 
              : 'text-gray-600'
          }`}>
            {String(sections.length).padStart(2, '0')}
          </div>
        </div>
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
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
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
            opacity: Math.max(0, 1 - scrollY / 500),
          }}
        >
          <h1 className="hero-title mb-6 animate-fade-in-up">
            {t("hero.title")}
            <br />
            <span className="hero-subtitle">{t("hero.subtitle")}</span>
          </h1>
          <p
            className="hero-description mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {t("hero.description")}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/service">{t("hero.cta.consultation")}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-white bg-white text-black hover:bg-gray-100 hover:text-black transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="mr-2 w-5 h-5" />
              {t("hero.cta.proposal")}
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
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsVideoPlaying(false);
              }
            }}
          >
            <div className="relative max-w-5xl w-full aspect-video">
              {/* Close Button */}
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
                aria-label="Close video"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Video Player */}
              <video
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                playsInline
                onClick={(e) => e.stopPropagation()}
              >
                <source src={mainBannerVideo} type="video/mp4" />
                비디오를 재생할 수 없습니다. 브라우저가 이 비디오 형식을 지원하지 않습니다.
              </video>
              
              {/* Video Info */}
              <div className="absolute -bottom-16 left-0 text-white">
                <p className="text-lg font-semibold">FeedBack 소개 영상</p>
                <p className="text-sm text-gray-300">ESC 키 또는 X 버튼으로 닫을 수 있습니다</p>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{ 
          scrollSnapAlign: "start",
          backgroundImage: `url(${services[currentServiceIndex]?.imageUrl || serviceBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 블러 오버레이 */}
        <div className="absolute inset-0 bg-white/65 backdrop-blur"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div
            className="text-center mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="section-subtitle mb-2">
              SERVICE
            </div>
            <h2 className="section-title-primary mb-4">
              {t("services.title")}
            </h2>
            <p className="section-description">
              {t("hero.description")}
            </p>
          </div>

          {/* Service Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const newIndex =
                  currentServiceIndex === 0
                    ? services.length - 1
                    : currentServiceIndex - 1;
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
              {services[currentServiceIndex] && (
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={services[currentServiceIndex].imageUrl}
                      alt={services[currentServiceIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between min-h-[400px]">
                    <div className="flex-1">
                      <div className="text-sm text-primary font-semibold mb-4">
                        0{currentServiceIndex + 1}/0{services.length}
                      </div>
                      <h3 className="service-card-title mb-6 h-[4rem] leading-tight flex items-center">
                        {services[currentServiceIndex].title}
                      </h3>
                      <p className="service-card-description mb-6 h-[4.5rem] leading-relaxed flex items-start">
                        {services[currentServiceIndex].description}
                      </p>
                      <div className="space-y-2 mb-8 h-[6rem] flex flex-col justify-start">
                        {services[currentServiceIndex].features.map(
                          (feature, index) => (
                            <div
                              key={index}
                              className="flex items-center text-sm text-gray-500"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Link href="/service">
                        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center group">
                          자세히 보기
                          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Progress Bar Pager - Matches Navigation Width */}
            <div className="mt-8">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="h-0.5 bg-gray-300 rounded-full relative overflow-hidden">
                  <div 
                    className="h-full bg-black rounded-full transition-all duration-300 ease-out"
                    style={{ 
                      width: `${((currentServiceIndex + 1) / services.length) * 100}%`,
                      transform: `translateX(0%)` 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brands Section */}
      <section
        id="brands"
        className="h-screen flex items-center justify-center bg-white relative overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="absolute inset-0">
          <img
            src={brands[currentBrandIndex].image}
            alt={brands[currentBrandIndex].name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Black gradient overlay from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 h-full flex flex-col">
          {/* Content Section */}
          <div className="flex-1 flex items-center">
            <div className={`text-white space-y-6 transition-all duration-500 max-w-2xl ${
              imageLoaded ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'
            }`}>
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase tracking-wide opacity-90">
                  {brands[currentBrandIndex].category}
                </div>
                <h2 className="brand-title text-5xl md:text-6xl mb-4">
                  {brands[currentBrandIndex].name}
                </h2>
                <p className="text-2xl md:text-3xl font-light mb-6 opacity-90">
                  {brands[currentBrandIndex].slogan}
                </p>
              </div>

              <p className="brand-description">
                {brands[currentBrandIndex].description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {brands[currentBrandIndex].products.map((product, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white bg-opacity-80 rounded-full text-sm font-medium text-gray-900 backdrop-blur-sm"
                  >
                    {product}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Link href={`/brand/${brands[currentBrandIndex].id}`}>
                    브랜드 자세히 보기
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Section - Bottom Center */}
          <div className="flex items-center justify-center space-x-8 pb-8">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-4 bg-black bg-opacity-40 rounded-full backdrop-blur-sm hover:bg-opacity-60 transition-all"
            >
              {isPaused ? (
                <PlayCircle className="w-6 h-6 text-white" />
              ) : (
                <Pause className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Manual Navigation */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setImageLoaded(false);
                  setTimeout(() => {
                    setCurrentBrandIndex(
                      currentBrandIndex === 0
                        ? brands.length - 1
                        : currentBrandIndex - 1,
                    );
                    setTimeout(() => setImageLoaded(true), 50);
                  }, 300);
                }}
                className="p-4 bg-black bg-opacity-40 rounded-full backdrop-blur-sm hover:bg-opacity-60 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              {/* Brand Counter */}
              <div className="px-6 py-3 bg-black bg-opacity-40 rounded-full backdrop-blur-sm">
                <div className="text-lg text-white font-bold">
                  {String(currentBrandIndex + 1).padStart(2, "0")} /{" "}
                  {String(brands.length).padStart(2, "0")}
                </div>
              </div>
              
              <button
                onClick={() => {
                  setImageLoaded(false);
                  setTimeout(() => {
                    setCurrentBrandIndex(
                      (currentBrandIndex + 1) % brands.length,
                    );
                    setTimeout(() => setImageLoaded(true), 50);
                  }, 300);
                }}
                className="p-4 bg-black bg-opacity-40 rounded-full backdrop-blur-sm hover:bg-opacity-60 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* B2B2C Hub Section */}
      <section
        id="achievements"
        className="min-h-screen"
        style={{ scrollSnapAlign: "start" }}
      >
        <B2B2C_Hub />
      </section>
      {/* News Section */}
      <section
        id="news"
        className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="relative w-full z-10">
          {/* Section Header - Aligned with Navigation */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 sm:mb-12">
            <h2 className="news-title">
              {t("news.title")}
            </h2>
          </div>

          {/* News Cards - Horizontal Scrollable */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            {/* Navigation Buttons - Close to Card Area */}
            <button
              onClick={() => {
                if (newsScrollRef.current) {
                  const containerWidth = newsScrollRef.current.clientWidth;
                  const scrollAmount = containerWidth * 0.8; // 80% of container width
                  newsScrollRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                  });
                }
              }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 border border-gray-100"
              aria-label="Previous news"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => {
                if (newsScrollRef.current) {
                  const containerWidth = newsScrollRef.current.clientWidth;
                  const scrollAmount = containerWidth * 0.8; // 80% of container width
                  newsScrollRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                  });
                }
              }}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 border border-gray-100"
              aria-label="Next news"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div 
              ref={newsScrollRef}
              className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-6 scrollbar-hide cursor-grab"
              style={{ 
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'auto' // Disable smooth scroll for manual dragging
              }}
            >
              
              {newsData.slice(0, 6).map((news, index) => {
                const src = resolveNewsThumbnail(news.thumbnail);
                return (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[480px] 2xl:w-[520px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300" 
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="aspect-[4/3] bg-gray-200 relative">
                      <img
                        src={src}
                        alt={news.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = FALLBACK;
                        }}
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="font-medium text-sm sm:text-base md:text-lg mb-3 text-gray-900 leading-tight line-clamp-2">
                        {news.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-gray-400">{news.date}</div>
                    </div>
                  </div>
                );
              })}
              
            </div>

            {/* Progress Bar Pager - Matches Navigation Width */}
            <div className="mt-8">
              <div className="h-0.5 bg-gray-300 rounded-full relative overflow-hidden">
                <div 
                  className="h-full bg-black rounded-full transition-all duration-300 ease-out"
                  style={{ 
                    width: `${newsScrollProgress}%`,
                    transform: `translateX(0%)` 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section
        id="stats"
        ref={statsRef}
        className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        {/* Dynamic Network Background */}
        <NetworkBackground className="opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="section-subtitle-light mb-4">
              {t("stats.subtitle")}
            </div>
            <h2 className="section-title-primary-white mb-6">
              {t("stats.title")} <span className="text-blue-400">FeedBack</span>
            </h2>
            <p className="section-description-white">
              {t("stats.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/15">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-4 tabular-nums text-white drop-shadow-lg">
                {yearCount}
              </div>
              <div className="text-sm sm:text-lg lg:text-xl text-blue-300 font-medium">{t("stats.since")}</div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 lg:mt-2">{t("stats.since.sub")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/15">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-4 tabular-nums text-white drop-shadow-lg">
                {brandCount}+
              </div>
              <div className="text-sm sm:text-lg lg:text-xl text-blue-300 font-medium">{t("stats.brands")}</div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 lg:mt-2">{t("stats.brands.sub")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/15">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-4 tabular-nums text-white drop-shadow-lg">
                {partnerCount}+
              </div>
              <div className="text-sm sm:text-lg lg:text-xl text-blue-300 font-medium">{t("stats.countries")}</div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 lg:mt-2">{t("stats.countries.sub")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/15">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-4 tabular-nums text-white drop-shadow-lg">
                {hospitalCount}+
              </div>
              <div className="text-sm sm:text-lg lg:text-xl text-blue-300 font-medium">{t("stats.hospitals")}</div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 lg:mt-2">{t("stats.hospitals.sub")}</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section with Video Background */}
      <section
        id="cta"
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
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

        {/* Black overlay with enhanced contrast */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content over video */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div
            className="ml-[10%] max-w-2xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="cta-title text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="cta-description text-white mb-12 font-normal">
              {t("cta.description").split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button
                asChild
                size="lg"
                className="text-lg px-10 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-floating bg-white text-blue-600 hover:bg-gray-100"
                style={{ animationDelay: "1s" }}
              >
                <Link href="/contact">{t("cta.consultation")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-floating border-white bg-white text-blue-600 hover:bg-gray-100"
                style={{ animationDelay: "1.5s" }}
              >
                <Link href="/service">{t("cta.proposal")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
