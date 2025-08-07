import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import feedbackLogo from "@assets/feddback_logo_1754559528597.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src={feedbackLogo} 
                alt="FeedBack" 
                className="h-12 mb-4 filter brightness-0 invert"
              />
              <p className="text-white/80 mt-2 text-lg">유통에서 브랜드까지 한국의 가치를 세계로 연결합니다</p>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              유통, 브랜드 제조, 마케팅, 의료관광 플랫폼을 통해 
              상생의 가치로 글로벌 시장에 진출하는 종합 서비스 기업입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/service" className="hover:text-white transition-colors">유통/수출입 중개</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">자체 브랜드 제조</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">글로벌 마케팅</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">의료관광 플랫폼</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">앱 개발</Link></li>
            </ul>
          </div>
          
          {/* Brands & Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">브랜드</h4>
            <ul className="space-y-2 text-white/60 mb-6">
              <li><Link href="/brand/hoid" className="hover:text-white transition-colors">Hoid</Link></li>
              <li><Link href="/brand/medifeed" className="hover:text-white transition-colors">Medifeed</Link></li>
              <li><Link href="/brand/inyourheart" className="hover:text-white transition-colors">InYourHeart</Link></li>
              <li><Link href="/brand/sangsaeng" className="hover:text-white transition-colors">상생</Link></li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">뉴스</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">연락처</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 FeedBack Corp. All rights reserved.</p>
              <p>사업자등록번호: 123-45-67890 | 대표: 홍길동</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">쿠키정책</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
