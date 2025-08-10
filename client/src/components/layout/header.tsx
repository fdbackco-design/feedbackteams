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
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" onClick={scrollToTop}>
              <span className="text-white text-2xl font-bold tracking-wider">FeedBack</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    location === item.href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center text-white text-sm font-medium tracking-wide">
              KR
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/10"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 border-t border-white/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium tracking-wide ${
                    location === item.href
                      ? "text-white"
                      : "text-white/70"
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
