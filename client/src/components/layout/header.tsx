import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "회사소개", href: "/about" },
  { name: "서비스", href: "/service" },
  { name: "브랜드", href: "/brand" },
  { name: "뉴스", href: "/news" },
  { name: "연락처", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('KR');
  const [currentSection, setCurrentSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // 홈페이지가 아니면 섹션 감지 안함
      if (location !== '/') return;
      
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let newSection = 'hero';
      
      // 스크롤 값 업데이트
      setScrollY(currentScrollY);
      
      // 픽셀 기반 섹션 감지 (더 정확)
      if (currentScrollY < 600) {
        newSection = 'hero';     // 메인 섹션 (동영상 배경)
      } else if (currentScrollY < 1400) {
        newSection = 'service';  // 서비스 섹션 (흰색 배경) - 검은 텍스트
      } else if (currentScrollY < 2200) {
        newSection = 'brand';    // 브랜드 섹션 (어두운 배경)
      } else if (currentScrollY < 3000) {
        newSection = 'news';     // 뉴스 섹션 (흰색 배경) - 검은 텍스트
      } else {
        newSection = 'stats';    // 통계 섹션 (파란 배경)
      }
      
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
        // 디버깅용 로그
        console.log('Section changed to:', newSection, 'at scroll:', currentScrollY, 'windowHeight:', windowHeight);
      }
    };
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 초기 실행 (약간의 지연을 두어 DOM이 완전히 로드된 후 실행)
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, location]);

  // 언어 드롭다운 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageMenuOpen) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLanguageMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 홈페이지인지 확인
  const isHomePage = location === '/';

  // 섹션에 따른 텍스트 색상 결정 (홈페이지에서만)
  const getTextColor = () => {
    if (!isHomePage) {
      return 'text-gray-900 font-semibold'; // 서브페이지에서는 기본 어두운 색상
    }
    
    switch (currentSection) {
      case 'service': // 2번째 섹션 - 서비스 (흰색 배경)
      case 'news':    // 4번째 섹션 - 뉴스 (흰색 배경)
        return '!text-black font-bold'; // !important로 강제 적용
      case 'hero':    // 1번째 섹션 - 메인
      case 'brand':   // 3번째 섹션 - 브랜드
      case 'stats':   // 5번째 섹션 - 통계
      default:
        return '!text-white font-semibold'; // !important로 강제 적용
    }
  };

  const getHoverColor = () => {
    if (!isHomePage) {
      return 'text-gray-600 hover:!text-gray-900 font-medium';
    }
    
    switch (currentSection) {
      case 'service': // 2번째 섹션 - 서비스 (흰색 배경)
      case 'news':    // 4번째 섹션 - 뉴스 (흰색 배경)
        return '!text-gray-700 hover:!text-black font-medium';
      case 'hero':    // 1번째 섹션 - 메인
      case 'brand':   // 3번째 섹션 - 브랜드
      case 'stats':   // 5번째 섹션 - 통계
      default:
        return '!text-white/80 hover:!text-white font-medium';
    }
  };

  // 헤더 배경 스타일 결정
  const getHeaderStyle = () => {
    if (!isHomePage) {
      return 'bg-white/95 backdrop-blur-md shadow-lg'; // 서브페이지에서는 배경 있음
    }
    return ''; // 홈페이지에서는 투명
  };

  const textColor = getTextColor();
  const hoverColor = getHoverColor();
  const headerStyle = getHeaderStyle();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${headerStyle}`}>
      {/* 디버깅용 현재 섹션 표시 (임시) */}
      {isHomePage && (
        <div className="fixed top-20 left-4 z-50 bg-black/70 text-white px-3 py-1 rounded text-sm font-mono space-y-1">
          <div>Section: {currentSection}</div>
          <div>Scroll: {Math.round(scrollY)}</div>
          <div>WindowH: {Math.round(window.innerHeight || 0)}</div>
          <div>IsHome: {isHomePage ? 'Yes' : 'No'}</div>
        </div>
      )}
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" onClick={scrollToTop}>
              <span 
                className="text-2xl font-bold tracking-wider transition-colors duration-300"
                style={{
                  color: isHomePage 
                    ? (currentSection === 'service' || currentSection === 'news' ? '#000000' : '#ffffff')
                    : '#1f2937'
                }}
              >
                FeedBack
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12 font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium tracking-wide transition-colors duration-300"
                  style={{
                    color: isHomePage 
                      ? (currentSection === 'service' || currentSection === 'news' ? 
                          (location === item.href ? '#000000' : '#4b5563') : 
                          (location === item.href ? '#ffffff' : 'rgba(255,255,255,0.8)'))
                      : (location === item.href ? '#1f2937' : '#6b7280')
                  }}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="hidden md:flex items-center relative">
            <button 
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center text-sm font-medium tracking-wide transition-colors duration-300"
              style={{
                color: isHomePage 
                  ? (currentSection === 'service' || currentSection === 'news' ? '#000000' : '#ffffff')
                  : '#1f2937'
              }}
            >
              {currentLanguage}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {/* Language Dropdown */}
            {isLanguageMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <button
                  onClick={() => {
                    setCurrentLanguage('KR');
                    setIsLanguageMenuOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                    currentLanguage === 'KR' ? 'bg-gray-50 font-medium' : ''
                  }`}
                >
                  한국어 (KR)
                </button>
                <button
                  onClick={() => {
                    setCurrentLanguage('EN');
                    setIsLanguageMenuOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                    currentLanguage === 'EN' ? 'bg-gray-50 font-medium' : ''
                  }`}
                >
                  English (EN)
                </button>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isHomePage ? 'hover:bg-black/10' : 'hover:bg-gray-100'
              }`}
              style={{
                color: isHomePage 
                  ? (currentSection === 'service' || currentSection === 'news' ? '#000000' : '#ffffff')
                  : '#1f2937'
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium tracking-wide ${
                    location === item.href
                      ? "text-gray-900"
                      : "text-gray-600"
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
