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
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let newSection = 'hero';
      
      // 각 섹션의 위치를 기반으로 현재 섹션 감지
      if (scrollY < windowHeight * 0.8) {
        newSection = 'hero';     // 1번째 섹션 - 흰색
      } else if (scrollY < windowHeight * 1.8) {
        newSection = 'service';  // 2번째 섹션 - 검은색
      } else if (scrollY < windowHeight * 2.8) {
        newSection = 'brand';    // 3번째 섹션 - 흰색
      } else if (scrollY < windowHeight * 3.8) {
        newSection = 'news';     // 4번째 섹션 - 검은색
      } else {
        newSection = 'stats';    // 5번째 섹션 - 흰색
      }
      
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
        console.log('Section changed to:', newSection); // 디버깅용
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

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

  // 섹션에 따른 텍스트 색상 결정
  const getTextColor = () => {
    switch (currentSection) {
      case 'service': // 2번째 섹션
      case 'news':    // 4번째 섹션
        return 'text-black';
      case 'hero':    // 1번째 섹션
      case 'brand':   // 3번째 섹션
      case 'stats':   // 5번째 섹션
      default:
        return 'text-white';
    }
  };

  const getHoverColor = () => {
    switch (currentSection) {
      case 'service': // 2번째 섹션
      case 'news':    // 4번째 섹션
        return 'text-black/70 hover:text-black';
      case 'hero':    // 1번째 섹션
      case 'brand':   // 3번째 섹션
      case 'stats':   // 5번째 섹션
      default:
        return 'text-white/70 hover:text-white';
    }
  };

  const textColor = getTextColor();
  const hoverColor = getHoverColor();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 디버깅용 섹션 표시 */}
      <div className="absolute top-16 left-4 text-xs font-mono bg-black/50 text-white p-2 rounded">
        Current Section: {currentSection}
      </div>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" onClick={scrollToTop}>
              <span className={`text-2xl font-bold tracking-wider transition-colors duration-300 ${textColor}`}>
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
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    location === item.href
                      ? textColor
                      : hoverColor
                  }`}
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
              className={`flex items-center text-sm font-medium tracking-wide transition-colors duration-300 ${textColor}`}
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
              className={`transition-colors duration-300 ${textColor} hover:bg-black/10`}
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
                      ? "text-black"
                      : "text-black/70"
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
