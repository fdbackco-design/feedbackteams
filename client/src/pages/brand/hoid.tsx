import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Globe, ShoppingCart, Zap } from "lucide-react";
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
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-4">
              <HoidLogo className="h-16 md:h-20 mx-auto" fill="white" />
            </div>
            <p className="text-2xl md:text-3xl font-medium mb-6 text-blue-200 drop-shadow-lg">
              공기 속까지 바꾸는 디자인
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg opacity-90">
              미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트
              가전 브랜드입니다.
            </p>
          </div>
        </div>
      </section>
      {/* Rest of the content with background */}
      <div className="bg-white">
      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">주요 제품 특징</h2>
            <div className="w-24 h-1 bg-[#0F4C82] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#0F4C82] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#000000]">3-in-1 기술</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  공기청정, 제습, 살균 기능을 하나로 통합한 혁신적인 기술
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#0F4C82] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#000000]">HEPA14 필터</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  99.995% 초미세먼지 제거 효율의 의료급 고성능 필터
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#0F4C82] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#000000]">미니멀 디자인</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  어떤 공간에도 자연스럽게 어울리는 세련된 디자인
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* MOU News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">글로벌 파트너십</h2>
            <div className="w-24 h-1 bg-[#0F4C82] mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={flow_2025_04_17_193718625_1754623144595}
                    alt="MOU 체결 현장"
                    className="w-full h-72 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#0F4C82] text-white text-sm font-medium rounded-full mb-4">
                      2025년 8월 16일
                    </span>
                    <h3 className="text-2xl font-bold text-[#000000] mb-6 leading-tight">
                      중국 초대형 공기청정기 제조사와 MOU 체결
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      HOID는 중국 최대 공기청정기 제조업체와 글로벌 유통 및 기술 협력 MOU를 체결했습니다. 
                      이를 통해 아시아 전역으로 사업 영역을 확장하고, 더 많은 고객에게 깨끗한 공기를 제공할 예정입니다.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Home Shopping Launch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">호이드, 홈쇼핑 진출!</h2>
            <div className="w-24 h-1 bg-[#0F4C82] mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <div className="lg:flex lg:flex-row-reverse">
                <div className="lg:w-1/2">
                  <img
                    src={homeshoppingImage}
                    alt="호이드 홈쇼핑 방송 현장"
                    className="w-full h-72 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#0F4C82] text-white text-sm font-medium rounded-full mb-4">
                      2025년 8월
                    </span>
                    <h3 className="text-2xl font-bold text-[#000000] mb-6 leading-tight">
                      프리미엄 디자인 가전, 이제 집에서 만나보세요.
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      프리미엄 디자인 가전 브랜드 호이드가 드디어 홈쇼핑을 통해 여러분을 찾아갑니다. 
                      세련된 디자인과 뛰어난 성능, 그리고 생활을 바꾸는 혁신적인 기술을 이제 TV 속에서 직접 확인하세요.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Distribution Channels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">유통 채널</h2>
            <div className="w-24 h-1 bg-[#0F4C82] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0F4C82] to-[#1a5c94] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#000000] mb-3">홈쇼핑</h3>
              <p className="text-gray-600 leading-relaxed">
                TV 홈쇼핑 채널을 통한 직접 판매
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0F4C82] to-[#1a5c94] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#000000] mb-3">네이버 스마트스토어</h3>
              <p className="text-gray-600 leading-relaxed">온라인 공식 스토어 운영</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0F4C82] to-[#1a5c94] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#000000] mb-3">글로벌 셀러</h3>
              <p className="text-gray-600 leading-relaxed">해외 온라인 플랫폼 진출</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0F4C82] to-[#1a5c94] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#000000] mb-3">오프라인 매장</h3>
              <p className="text-gray-600 leading-relaxed">전국 가전 매장 및 백화점</p>
            </Card>
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
    </div>
  );
}
