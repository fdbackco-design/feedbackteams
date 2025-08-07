import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">FeedBack</span>
              <p className="text-gray-300 mt-2 text-lg">아시아의 브랜드와 의료를 세계와 연결합니다</p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              유통, 브랜드 플랫폼, 글로벌 마케팅을 통해 아시아 기업들의 
              성공적인 해외 진출을 지원하는 전문 기업입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/service" className="hover:text-white transition-colors">의료관광 중개</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">다국어 앱 개발</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">브랜드 유통</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">마케팅 컨설팅</Link></li>
            </ul>
          </div>
          
          {/* Brands & Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">브랜드</h4>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li><Link href="/brand" className="hover:text-white transition-colors">Hoid</Link></li>
              <li><Link href="/brand" className="hover:text-white transition-colors">Medifeed</Link></li>
              <li><Link href="/brand" className="hover:text-white transition-colors">InYourHeart</Link></li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">뉴스</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">연락처</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
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
