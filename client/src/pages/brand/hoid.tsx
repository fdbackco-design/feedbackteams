import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Globe, ShoppingCart, Zap, ArrowRight, Calendar } from "lucide-react";
import HoidLogo from "@/components/HoidLogo";

import flow_2025_04_17_193718625_1754623144595 from "@assets/flow_2025-04-17_193718625_1754623144595.png";
import homeshoppingImage from "@assets/homeshopping_1754639787939.png";

export default function Hoid() {
  return (
    <div>
      {/* Hero Section with Video Background - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1074153050?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&dnt=1&controls=0"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 border-0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="HOID Brand Video"
            style={{ 
              width: '177.78vh',
              height: '56.25vw',
              minWidth: '100%',
              minHeight: '100%'
            }}
          ></iframe>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

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
                <HoidLogo className="h-20 md:h-24" fill="white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                공기 속까지 바꾸는 디자인
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트 가전 브랜드입니다.
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
                  홈쇼핑 방송 보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Features Section */}
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
              PRODUCT FEATURES
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#000000] mb-6">
              혁신적인 기술력
            </h2>
            <div className="w-32 h-1 bg-[#0F4C82] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              미니멀한 디자인 속에 숨어있는 첨단 기술로 완전히 새로운 공기청정 경험을 제공합니다
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">3-in-1 기술</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  공기청정, 제습, 살균 기능을 하나로 통합한 혁신적인 올인원 솔루션
                </p>
                <div className="flex items-center text-[#0F4C82] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">자세히 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">HEPA14 필터</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  99.995% 초미세먼지 제거 효율을 자랑하는 의료급 고성능 필터 시스템
                </p>
                <div className="flex items-center text-[#0F4C82] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">기술 상세</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">미니멀 디자인</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  어떤 공간에도 자연스럽게 어울리는 세련되고 모던한 디자인 철학
                </p>
                <div className="flex items-center text-[#0F4C82] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">디자인 스토리</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Global Partnership Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={flow_2025_04_17_193718625_1754623144595}
                  alt="MOU 체결 현장"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
                GLOBAL PARTNERSHIP
              </div>
              <h2 className="text-5xl font-bold text-[#000000] mb-8 leading-tight">
                글로벌 확장의 
                <span className="block text-[#0F4C82]">새로운 전환점</span>
              </h2>
              
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-[#0F4C82] text-white rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  2025년 8월 16일
                </div>
                <h3 className="text-3xl font-bold text-[#000000] mb-6">
                  중국 초대형 공기청정기 제조사와 MOU 체결
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  HOID는 중국 최대 공기청정기 제조업체와 글로벌 유통 및 기술 협력 MOU를 체결했습니다. 
                  이를 통해 아시아 전역으로 사업 영역을 확장하고, 더 많은 고객에게 깨끗한 공기를 제공할 예정입니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">아시아 전역 시장 진출</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">기술 협력 및 공동 개발</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">글로벌 유통망 확대</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Shopping Launch Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
                HOME SHOPPING LAUNCH
              </div>
              <h2 className="text-5xl font-bold text-[#000000] mb-8 leading-tight">
                TV 속으로 들어간 
                <span className="block text-[#0F4C82]">프리미엄 디자인</span>
              </h2>
              
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-[#0F4C82] text-white rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  2025년 8월 런칭
                </div>
                <h3 className="text-3xl font-bold text-[#000000] mb-6">
                  프리미엄 디자인 가전, 이제 집에서 만나보세요
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  프리미엄 디자인 가전 브랜드 호이드가 드디어 홈쇼핑을 통해 여러분을 찾아갑니다. 
                  세련된 디자인과 뛰어난 성능, 그리고 생활을 바꾸는 혁신적인 기술을 이제 TV 속에서 직접 확인하세요.
                </p>
              </div>

              <Button className="bg-[#0F4C82] text-white hover:bg-[#0d4070] px-8 py-4 text-lg font-semibold">
                방송 일정 알림 신청
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div>
              <div className="relative">
                <img
                  src={homeshoppingImage}
                  alt="호이드 홈쇼핑 방송 현장"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Distribution Channels */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
              DISTRIBUTION CHANNELS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#000000] mb-6">
              전국 어디서나 만날 수 있는
            </h2>
            <div className="w-32 h-1 bg-[#0F4C82] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              다양한 유통 채널을 통해 고객 여러분께 더 가깝게 다가갑니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">홈쇼핑</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  TV 홈쇼핑 채널을 통한 직접 판매
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">스마트스토어</h3>
                <p className="text-gray-600 leading-relaxed text-lg">온라인 공식 스토어 운영</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">글로벌 셀러</h3>
                <p className="text-gray-600 leading-relaxed text-lg">해외 온라인 플랫폼 진출</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">오프라인 매장</h3>
                <p className="text-gray-600 leading-relaxed text-lg">전국 가전 매장 및 백화점</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#0F4C82] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              깨끗한 공기, 새로운 일상
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
              HOID와 함께 건강하고 쾌적한 실내 환경을 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[#000000] text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-medium"
              >
                제품 카탈로그 다운로드
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-medium"
              >
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
