import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft,
  ChefHat,
  Flame,
  Utensils,
  ArrowRight,
  Calendar,
  Star,
  Award,
  Shield,
} from "lucide-react";
import LazyImage from "@/components/LazyImage";
import LazyVideo from "@/components/LazyVideo";
import carvellaLogo from "@/assets/brand/carvella_logo.png";
import carvellaHero from "@/assets/brand/carvella_hero.png";
import carvellaVideo from "@assets/freepik__cinematic-video-starting-from-the-provided-referen__97177_1759116548781.mp4";

export default function Carvella() {
  const [, setLocation] = useLocation();

  return (
    <div>
      {/* Hero Section with Background Image - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <LazyVideo
            src={carvellaVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Back Navigation - Positioned over image */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/brand">
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              브랜드 목록으로 돌아가기
            </Button>
          </Link>
        </div>

        {/* Content over image */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-white">
              <div className="mb-8">
                <LazyImage
                  src={carvellaLogo}
                  alt="Carvella 로고"
                  className="h-20 md:h-24 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                이탈리아 장인의 정밀함
                <span className="block text-[#D4AF37]">당신의 주방으로</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                이탈리아 전통 장인정신으로 완성한 프리미엄 쿠킹웨어
                브랜드입니다. 고급 스테인리스와 다층 구조로 뛰어난 열전도와
                내구성을 자랑합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#6C2F1E] hover:bg-[#5a2719] border-2 border-[#6C2F1E] text-white px-8 py-4 text-lg font-semibold"
                >
                  제품 컬렉션
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
            <circle cx="200" cy="100" r="100" fill="#6C2F1E" />
            <circle cx="1000" cy="400" r="150" fill="#D4AF37" />
            <path
              d="M300 300 Q600 100 900 300"
              stroke="#6C2F1E"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
              PREMIUM TECHNOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              이탈리아 장인정신
            </h2>
            <div className="w-32 h-1 bg-[#6C2F1E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              정밀한 기술과 전통 크래프트맨십이 만나 완성된 프리미엄 쿠킹웨어
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  프리미엄 스테인리스
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  최고급 스테인리스 스틸 소재로 내구성과 위생성을 동시에 보장
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  다층 바닥구조
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  균등한 열전도와 열보존을 위한 특수 다층 바닥 설계 시스템
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  멀티 호환 열원
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  인덕션부터 가스레인지까지 모든 열원에서 완벽한 성능 발휘
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Italian Heritage Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#6C2F1E] to-[#D4AF37] rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">🇮🇹</div>
                    <div className="text-2xl font-bold">MADE IN ITALY</div>
                    <div className="text-lg opacity-90">
                      Artigianato Italiano
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
                ITALIAN HERITAGE
              </div>
              <h2 className="text-5xl font-bold text-[#000000] mb-8 leading-tight">
                이탈리아 전통의
                <span className="block text-[#6C2F1E]">아르티지아나토</span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  정밀함과 열정이 만나는 곳
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  이탈리아 북부 롬바르디아 지역의 전통 금속공예 기술을 바탕으로
                  탄생한 Carvella는 장인들의 정밀함과 요리에 대한 열정을 그대로
                  담아냅니다. 매 제품마다 이탈리아 장인의 손길이 닿아 완성되는
                  진정한 아르티지아나토입니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#6C2F1E] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    이탈리아 전통 금속공예 기법
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#6C2F1E] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    장인 수작업 마감 처리
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#6C2F1E] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    유럽 인증 프리미엄 소재
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Cooking Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
                PROFESSIONAL COOKING
              </div>
              <h2 className="text-4xl font-bold text-[#000000] mb-6 leading-tight">
                프로 셰프부터 요리 애호가까지
                <span className="block text-[#6C2F1E]">모든 주방의 파트너</span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  완벽한 요리를 위한 완벽한 도구
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Carvella는 단순한 조리도구가 아닌 요리의 예술을 완성하는
                  파트너입니다. 프로 셰프의 엄격한 기준을 충족하면서도 가정에서
                  쉽게 사용할 수 있도록 설계되어 모든 요리 애호가들의 꿈을
                  현실로 만들어드립니다.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#6C2F1E] mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">제품 라인업</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#6C2F1E] mb-2">
                    25
                  </div>
                  <div className="text-sm text-gray-600">년 품질보증</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#6C2F1E] mb-2">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">셰프 추천율</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#6C2F1E] mb-2">
                    4.9
                  </div>
                  <div className="text-sm text-gray-600">고객 만족도</div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <ChefHat className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <div className="text-lg">프리미엄 쿠킹웨어 이미지</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Collection */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
              PRODUCT COLLECTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              모든 요리를 위한
            </h2>
            <div className="w-32 h-1 bg-[#6C2F1E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              다양한 제품 라인으로 모든 요리 스타일과 필요에 완벽하게 부응합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  프리미엄 냄비
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  다양한 사이즈와 용도별 냄비 컬렉션
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  프라이팬
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  완벽한 열전도를 위한 프라이팬 시리즈
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  압력뚜껑
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  다목적 멀티 압력뚜껑 시스템
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  세트 상품
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  완벽한 주방을 위한 종합 세트
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Testimonial Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
              CHEF'S CHOICE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              전문가들의 선택
            </h2>
            <div className="w-32 h-1 bg-[#6C2F1E] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <ChefHat className="w-16 h-16 text-[#6C2F1E] mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "Carvella의 냄비는 열전도가 완벽해서 요리가 훨씬 쉬워졌습니다.
                프로 주방에서도 손색없는 품질입니다."
              </p>
              <div className="font-semibold text-[#6C2F1E]">
                이탈리안 레스토랑 셰프
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <ChefHat className="w-16 h-16 text-[#6C2F1E] mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "15년 넘게 사용해도 변함없는 품질과 성능. 진정한 장인정신을 느낄
                수 있는 제품입니다."
              </p>
              <div className="font-semibold text-[#6C2F1E]">요리 강사</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <ChefHat className="w-16 h-16 text-[#6C2F1E] mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "인덕션에서 가스레인지까지 어떤 열원에서도 완벽한 성능을
                보여줍니다. 가정용으로도 최고의 선택이에요."
              </p>
              <div className="font-semibold text-[#6C2F1E]">요리 블로거</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#6C2F1E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Carvella와 함께하는
            <span className="block text-[#D4AF37]">프리미엄 쿠킹</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            이탈리아 장인정신으로 완성된 프리미엄 쿠킹웨어로 당신의 요리를 더욱
            특별하게 만들어보세요
          </p>
        </div>
      </section>
    </div>
  );
}
