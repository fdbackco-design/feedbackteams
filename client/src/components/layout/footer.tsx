import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const FeedBackLogo = ({ className }: { className?: string }) => (
  <svg 
    id="Layer_1" 
    data-name="Layer 1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 204.75 27.91"
    className={className}
  >
    <g>
      <path d="M3.91,3.58v8.03h15.15v3.58H3.91v12.72H0V0h21.61v3.58H3.91Z"/>
      <path d="M21.28,27.91V0h23.1v3.58h-19.19v8.03h17v3.58h-17v9.14h19.39v3.58h-23.3Z"/>
      <path d="M44.32,27.91V0h23.1v3.58h-19.19v8.03h17v3.58h-17v9.14h19.39v3.58h-23.3Z"/>
      <path d="M89.54,24.41c-2.88,2.33-6.79,3.5-11.73,3.5h-10.58V0h12.14c4.86,0,8.56,1.26,11.12,3.79,2.47,2.44,3.7,5.85,3.7,10.21s-1.55,7.94-4.65,10.41ZM87.65,6.3c-1.81-1.81-4.59-2.72-8.32-2.72h-8.15v20.75h6.75c3.95,0,6.99-.87,9.12-2.61,2.13-1.74,3.19-4.32,3.19-7.72s-.86-5.97-2.59-7.7Z"/>
    </g>
    <g>
      <path d="M118.63,25.68c-1.94,1.05-4.37,1.57-7.3,1.57h-13.61V.66h14.12c2.64,0,4.84.55,6.59,1.65,2.12,1.31,3.18,3.22,3.18,5.73,0,2.12-1.03,3.84-3.1,5.18,2.64,1.26,3.96,3.35,3.96,6.28,0,2.77-1.28,4.84-3.84,6.2ZM116.16,5.03c-1.12-.64-2.59-.96-4.39-.96h-10.28v7.65h10.24c1.8,0,3.27-.33,4.41-.98s1.71-1.61,1.71-2.86-.56-2.2-1.69-2.84ZM116.8,16.23c-1.29-.71-3.01-1.06-5.16-1.06h-10.16v8.67h10.31c2.01,0,3.63-.35,4.86-1.06,1.38-.76,2.08-1.84,2.08-3.26,0-1.49-.65-2.59-1.94-3.29Z"/>
      <path d="M145.33,27.25l-3.8-7.84h-13.1l-3.88,7.84h-4.24L133.65.66h2.94l12.87,26.59h-4.12ZM135.1,6.19l-4.94,9.8h9.73l-4.79-9.8Z"/>
      <path d="M172.47,8.15c-1.15-1.57-2.45-2.69-3.9-3.35-1.45-.67-3.26-1-5.43-1-3.53,0-6.32.92-8.37,2.77-2.05,1.84-3.08,4.32-3.08,7.43s.97,5.54,2.92,7.37c1.95,1.83,4.65,2.75,8.1,2.75,2.06,0,3.84-.34,5.31-1.02,1.48-.68,2.86-1.8,4.14-3.37l3.22,1.92c-3.24,3.92-7.45,5.88-12.63,5.88-4.5,0-8.09-1.21-10.79-3.63-2.69-2.42-4.04-5.67-4.04-9.75s1.38-7.56,4.16-10.04c2.77-2.48,6.46-3.73,11.06-3.73,5.39,0,9.56,1.95,12.51,5.84l-3.18,1.92Z"/>
      <path d="M199.38,27.25l-14.55-12.86-4.71,3.37v9.49h-3.76V.66h3.76v12.83L198.52.66h6.2l-16.83,11.65,16.86,14.94h-5.37Z"/>
    </g>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <FeedBackLogo 
                className="h-12 mb-4 fill-white"
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
