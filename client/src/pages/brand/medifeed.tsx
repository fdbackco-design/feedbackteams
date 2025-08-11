import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Heart, Shield, Star, Users, ArrowRight, Calendar } from "lucide-react";
import MedifeedLogo from "@/components/MedifeedLogo";
import medifeedVideo from "@assets/medifeed_1754647409969.mp4";

export default function Medifeed() {
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
          src={medifeedVideo}
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
            <div className="max-w-3xl text-white">
              <div className="mb-8">
                <MedifeedLogo className="h-20 md:h-24" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                매일을 지키는 작은 습관
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 
                누구나 쉽게 선택할 수 있는 건강 솔루션을 제공합니다.
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
                  건강 상담 신청
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Categories Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <circle cx="200" cy="100" r="100" fill="#0F4C82" />
            <circle cx="1000" cy="400" r="150" fill="#000000" />
            <path d="M300 300 Q600 100 900 300" stroke="#0F4C82" strokeWidth="3" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
              PRODUCT CATEGORIES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              전문화된 건강 솔루션
            </h2>
            <div className="w-32 h-1 bg-[#0F4C82] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              과학적 연구를 바탕으로 개발된 특화 영양제로 일상의 건강을 책임집니다
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000000] mb-6 text-center">잇몸 건강 전문</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center">
                  치주질환 예방과 잇몸 건강 유지를 위한 전문 영양제
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">코엔자임 Q10</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">비타민 C 복합체</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">아연 & 셀레늄</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">GMP 인증</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center text-[#0F4C82] font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-6">
                  <span className="mr-2">제품 상세보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000000] mb-6 text-center">눈 건강 전문</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center">
                  디지털 시대 눈의 피로와 시력 보호를 위한 기능성 영양제
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">루테인 & 지아잔틴</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">빌베리 추출물</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">오메가-3 지방산</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">블루라이트 차단</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center text-[#0F4C82] font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-6">
                  <span className="mr-2">제품 상세보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Philosophy */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
              BRAND PHILOSOPHY
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#000000] mb-6">
              건강한 일상을 만드는
            </h2>
            <div className="w-32 h-1 bg-[#0F4C82] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              과학적 근거와 품질에 대한 확고한 신념으로 믿을 수 있는 건강 솔루션을 제공합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">안전성 우선</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  엄격한 품질 관리와 GMP 인증을 통해 안전하고 신뢰할 수 있는 제품만을 제공합니다.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">실용적 접근</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  바쁜 현대인의 라이프스타일에 맞춰 간편하게 섭취할 수 있는 형태로 개발합니다.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">합리적 가격</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  누구나 부담 없이 구매할 수 있는 합리적인 가격으로 건강한 습관을 만들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-32 bg-[#0F4C82] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              건강한 하루, 
              <span className="block">작은 습관에서 시작</span>
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
              MEDIFEED와 함께 일상 속 작은 변화로 더 나은 건강을 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-[#0F4C82] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                제품 카탈로그 다운로드
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                건강 상담 신청하기
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}