import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationKR = [
  { name: "회사소개", href: "/about" },
  { name: "서비스", href: "/service" },
  { name: "브랜드", href: "/brand" },
  { name: "뉴스", href: "/news" },
  { name: "연락처", href: "/contact" },
];

const navigationEN = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Brands", href: "/brand" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

type SectionKey =
  | "hero"
  | "service"
  | "brand"
  | "news"
  | "stats"
  | "cta"
  | "footer";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"KR" | "EN">("KR");
  const [currentSection, setCurrentSection] = useState<SectionKey>("hero");
  const [scrollY, setScrollY] = useState(0);
  const [location] = useLocation();

  const navigation = currentLanguage === "KR" ? navigationKR : navigationEN;

  // 홈 여부
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return;
      const y = window.scrollY;
      setScrollY(y);

      let s: SectionKey = "hero";
      if (y < 600) s = "hero";
      else if (y < 1400) s = "service";
      else if (y < 2200) s = "brand";
      else if (y < 3000) s = "news";
      else if (y < 3800) s = "stats";
      else if (y < 4600) s = "cta";
      else s = "footer";

      if (s !== currentSection) setCurrentSection(s);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, isHomePage]);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const onDocClick = () => {
      if (isLanguageMenuOpen) setIsLanguageMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isLanguageMenuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ✅ 텍스트/아이콘/로고 컬러만 토글
  const isBlackSection =
    isHomePage && (currentSection === "service" || currentSection === "news");

  // 헤더 배경 (서브는 고정 배경)
  const headerBgClass = isHomePage
    ? ""
    : "bg-white/95 backdrop-blur-md shadow-lg";

  // 공통 텍스트 컬러: currentColor로 통일
  const headerTextClass = isHomePage
    ? isBlackSection
      ? "text-black"
      : "text-white"
    : "text-gray-900";

  // 서브페이지 링크 기본/활성
  const subLinkColor = (href: string) =>
    location === href ? "text-gray-900" : "text-gray-500";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${headerBgClass}`}>
      {/* 디버그(원하면 제거) */}
      {isHomePage && (
        <div className="fixed top-20 left-4 z-50 bg-black/70 text-white px-3 py-1 rounded text-sm font-mono space-y-1">
          <div>Section: {currentSection}</div>
          <div>Scroll: {Math.round(scrollY)}</div>
          <div>IsHome: {isHomePage ? "Yes" : "No"}</div>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex justify-between items-center h-16 transition-colors duration-300 ${headerTextClass}`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" onClick={scrollToTop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 204.75 27.91"
                className="h-6 transition-colors duration-300"
                // ✨ 로고는 currentColor를 따름
                fill="currentColor"
              >
                <g>
                  <path d="M3.91,3.58v8.03h15.15v3.58H3.91v12.72H0V0h21.61v3.58H3.91Z" />
                  <path d="M21.28,27.91V0h23.1v3.58h-19.19v8.03h17v3.58h-17v9.14h19.39v3.58h-23.3Z" />
                  <path d="M44.32,27.91V0h23.1v3.58h-19.19v8.03h17v3.58h-17v9.14h19.39v3.58h-23.3Z" />
                  <path d="M89.54,24.41c-2.88,2.33-6.79,3.5-11.73,3.5h-10.58V0h12.14c4.86,0,8.56,1.26,11.12,3.79,2.47,2.44,3.7,5.85,3.7,10.21s-1.55,7.94-4.65,10.41ZM87.65,6.3c-1.81-1.81-4.59-2.72-8.32-2.72h-8.15v20.75h6.75c3.95,0,6.99-.87,9.12-2.61,2.13-1.74,3.19-4.32,3.19-7.72s-.86-5.97-2.59-7.7Z" />
                </g>
                <g>
                  <path d="M118.63,25.68c-1.94,1.05-4.37,1.57-7.3,1.57h-13.61V.66h14.12c2.64,0,4.84.55,6.59,1.65,2.12,1.31,3.18,3.22,3.18,5.73,0,2.12-1.03,3.84-3.1,5.18,2.64,1.26,3.96,3.35,3.96,6.28,0,2.77-1.28,4.84-3.84,6.2ZM116.16,5.03c-1.12-.64-2.59-.96-4.39-.96h-10.28v7.65h10.24c1.8,0,3.27-.33,4.41-.98s1.71-1.61,1.71-2.86-.56-2.2-1.69-2.84ZM116.8,16.23c-1.29-.71-3.01-1.06-5.16-1.06h-10.16v8.67h10.31c2.01,0,3.63-.35,4.86-1.06,1.38-.76,2.08-1.84,2.08-3.26,0-1.49-.65-2.59-1.94-3.29Z" />
                  <path d="M145.33,27.25l-3.8-7.84h-13.1l-3.88,7.84h-4.24L133.65.66h2.94l12.87,26.59h-4.12ZM135.1,6.19l-4.94,9.8h9.73l-4.79-9.8Z" />
                  <path d="M172.47,8.15c-1.15-1.57-2.45-2.69-3.9-3.35-1.45-.67-3.26-1-5.43-1-3.53,0-6.32.92-8.37,2.77-2.05,1.84-3.08,4.32-3.08,7.43s.97,5.54,2.92,7.37c1.95,1.83,4.65,2.75,8.1,2.75,2.06,0,3.84-.34,5.31-1.02,1.48-.68,2.86-1.8,4.14-3.37l3.22,1.92c-3.24,3.92-7.45,5.88-12.63,5.88-4.5,0-8.09-1.21-10.79-3.63-2.69-2.42-4.04-5.67-4.04-9.75s1.38-7.56,4.16-10.04c2.77-2.48,6.46-3.73,11.06-3.73,5.39,0,9.56,1.95,12.51,5.84l-3.18,1.92Z" />
                  <path d="M199.38,27.25l-14.55-12.86-4.71,3.37v9.49h-3.76V.66h3.76v12.83L198.52.66h6.2l-16.83,11.65,16.86,14.94h-5.37Z" />
                </g>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12 font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={scrollToTop}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300
                    ${
                      isHomePage
                        ? isBlackSection
                          ? "text-black hover:text-black/80"
                          : "text-white/80 hover:text-white"
                        : subLinkColor(item.href)
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }}
              className={`flex items-center text-sm font-medium tracking-wide transition-colors duration-300
                ${
                  isHomePage
                    ? isBlackSection
                      ? "text-black hover:text-black/80"
                      : "text-white hover:text-white"
                    : "text-gray-900"
                }`}
            >
              {currentLanguage}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[140px]">
                <button
                  onClick={() => {
                    setCurrentLanguage("KR");
                    setIsLanguageMenuOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 text-gray-800 ${
                    currentLanguage === "KR" ? "bg-gray-50 font-medium" : ""
                  }`}
                >
                  한국어 (KR)
                </button>
                <button
                  onClick={() => {
                    setCurrentLanguage("EN");
                    setIsLanguageMenuOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 text-gray-800 ${
                    currentLanguage === "EN" ? "bg-gray-50 font-medium" : ""
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
              className={`transition-colors duration-300 ${isHomePage ? "hover:bg-black/10" : "hover:bg-gray-100"}
                ${isHomePage ? (isBlackSection ? "text-black" : "text-white") : "text-gray-900"}`}
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
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToTop();
                  }}
                  className={`block px-3 py-2 text-sm font-medium tracking-wide
                    ${location === item.href ? "text-gray-900" : "text-gray-600"}`}
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
