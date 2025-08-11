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
      <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Product Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">주요 제품 특징</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>3-in-1 기술</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                공기청정, 제습, 살균 기능을 하나로 통합한 혁신적인 기술
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>HEPA14 필터</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                99.995% 초미세먼지 제거 효율의 의료급 고성능 필터
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>미니멀 디자인</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                어떤 공간에도 자연스럽게 어울리는 세련된 디자인
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* MOU News */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              글로벌 파트너십
            </h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={flow_2025_04_17_193718625_1754623144595}
                    alt="MOU 체결 현장"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-xl">
                      중국 초대형 공기청정기 제조사와 MOU 체결
                    </CardTitle>
                    <CardDescription>2025년 8월 16일</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <p className="text-gray-600 mb-4">
                      HOID는 중국 최대 공기청정기 제조업체와 글로벌 유통 및 기술
                      협력 MOU를 체결했습니다. 이를 통해 아시아 전역으로 사업
                      영역을 확장하고, 더 많은 고객에게 깨끗한 공기를 제공할
                      예정입니다.
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Home Shopping Launch */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            호이드, 홈쇼핑 진출!
          </h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={homeshoppingImage}
                  alt="호이드 홈쇼핑 방송 현장"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">
                    프리미엄 디자인 가전, 이제 집에서 만나보세요.
                  </CardTitle>
                  <CardDescription>2025년 8월</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-gray-600 mb-4">
                    프리미엄 디자인 가전 브랜드 호이드가 드디어 홈쇼핑을 통해 여러분을 찾아갑니다.
                    세련된 디자인과 뛰어난 성능, 그리고 생활을 바꾸는 혁신적인 기술을 이제 TV 속에서 직접 확인하세요.
                    첫 방송 특별 혜택과 한정 구성으로 더욱 합리적인 기회를 놓치지 마세요.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>
      {/* Distribution Channels */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">유통 채널</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <ShoppingCart className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">홈쇼핑</h3>
            <p className="text-sm text-gray-600">
              TV 홈쇼핑 채널을 통한 직접 판매
            </p>
          </Card>

          <Card className="text-center p-6">
            <Globe className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">네이버 스마트스토어</h3>
            <p className="text-sm text-gray-600">온라인 공식 스토어 운영</p>
          </Card>

          <Card className="text-center p-6">
            <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">글로벌 셀러</h3>
            <p className="text-sm text-gray-600">해외 온라인 플랫폼 진출</p>
          </Card>

          <Card className="text-center p-6">
            <Zap className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">오프라인 매장</h3>
            <p className="text-sm text-gray-600">전국 가전 매장 및 백화점</p>
          </Card>
        </div>
      </section>
      {/* CTA Section */}
      <section className="text-white py-16 bg-[#0f4780]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">깨끗한 공기, 새로운 일상</h2>
          <p className="text-xl mb-8 opacity-90">
            HOID와 함께 건강하고 쾌적한 실내 환경을 만들어보세요
          </p>
          <div className="space-x-4">
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#000000] text-primary-foreground hover:bg-[#000000]/90 h-11 rounded-md px-8" size="lg">
              제품 카탈로그 다운로드
            </Button>
            <Button
              size="lg"
              className="bg-[#000000] text-white border border-white hover:bg-white hover:text-blue-600"
            >
              문의하기
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
