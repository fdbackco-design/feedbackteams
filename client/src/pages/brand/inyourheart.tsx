import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Heart, Leaf, Sparkles, Globe2, ArrowRight } from "lucide-react";
import inyourHeartVideo from "@assets/imyour_banner_1754643247969.mp4";

export default function InYourHeart() {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={inyourHeartVideo}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Back Navigation - Positioned over video */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/brand">
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              브랜드 목록으로 돌아가기
            </Button>
          </Link>
        </div>

        {/* Content over video */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-4xl text-white">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                IN YOUR HEART
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-200">피부에 감성을 입히다</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 
                프리미엄 스킨케어 브랜드입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0F4C82] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  제품 카탈로그 보기
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] px-8 py-4 text-lg font-semibold"
                >
                  뷰티 컨설팅 신청
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <circle cx="200" cy="100" r="100" fill="#ec4899" />
            <circle cx="1000" cy="400" r="150" fill="#0F4C82" />
            <path d="M300 300 Q600 100 900 300" stroke="#ec4899" strokeWidth="3" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-6">
              BRAND VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              감성이 담긴 뷰티 철학
            </h2>
            <div className="w-32 h-1 bg-pink-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              피부에 순하고 마음까지 따뜻하게 만드는 감성 스킨케어
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000000] mb-6 text-center">클린 포뮬러</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center">
                  피부에 순하고 환경에 친화적인 성분만을 사용하여 안전하고 지속가능한 뷰티를 추구합니다.
                </p>
                <div className="flex items-center justify-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">성분 상세보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000000] mb-6 text-center">감성 디자인</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center">
                  제품 사용 순간부터 특별한 경험이 될 수 있도록 감성적이고 아름다운 패키지를 디자인합니다.
                </p>
                <div className="flex items-center justify-center text-pink-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">디자인 상세보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000000] mb-6 text-center">글로벌 K-뷰티</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center">
                  한국의 우수한 뷰티 기술과 혁신을 전 세계에 알리며 K-뷰티의 가치를 높여갑니다.
                </p>
                <div className="flex items-center justify-center text-[#0F4C82] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">글로벌 진출</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-pink-600 via-purple-600 to-[#0F4C82] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              당신의 마음에 닿는
              <span className="block">아름다운 감성</span>
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
              IN YOUR HEART와 함께 특별한 뷰티 여정을 시작해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-pink-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                제품 체험하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                글로벌 스토어 방문
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}