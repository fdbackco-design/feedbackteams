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
  Shield,
  Globe,
  Luggage,
  ArrowRight,
  Calendar,
  Star,
  Award,
} from "lucide-react";
import LazyImage from "@/components/LazyImage";
import LazyVideo from "@/components/LazyVideo";
import lacerasLogo from "@/assets/brand/laceras_logo.png";
import lacerasHero from "@/assets/brand/laceras_hero.png";
import lacerasVideo from "@assets/freepik__closeup-zoomin-of-a-small-black-luxury-suitcase-sm__23771_1759112696236.mp4";
import lacerasCarri from "@/assets/brand/carri-scene.png";

export default function LaCeras() {
  const [, setLocation] = useLocation();

  return (
    <div>
      {/* Hero Section with Background Image - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <LazyVideo
            src={lacerasVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

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
              <div className="mb-8 flex justify-start">
                <LazyImage
                  src={lacerasLogo}
                  alt="La Ceras 로고"
                  className="h-24 md:h-32 w-auto" // 세로 길이 확 키움
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                전통과 모던이 만나는
                <span className="block text-[#FFD700]">프렌치 럭셔리</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                프랑스의 장인정신과 현대적 세련미를 결합한 럭셔리 캐리어
                브랜드입니다. 비즈니스부터 럭셔리 여행까지 완벽한 트래블
                솔루션을 제안합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <circle cx="200" cy="100" r="100" fill="#233A73" />
            <circle cx="1000" cy="400" r="150" fill="#E31E24" />
            <path
              d="M300 300 Q600 100 900 300"
              stroke="#233A73"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#233A73]/10 text-[#233A73] rounded-full text-sm font-semibold mb-6">
              PREMIUM FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              프렌치 크래프트맨십
            </h2>
            <div className="w-32 h-1 bg-[#233A73] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              정교한 마감과 균형 잡힌 디자인으로 완성된 프리미엄 럭셔리 트래블
              경험
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#233A73] to-[#1c2f5c] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  폴리카보네이트 하드셸
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  충격에 강하고 가벼운 프리미엄 소재로 소중한 짐을 안전하게 보호
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#233A73] to-[#1c2f5c] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Luggage className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  TSA 승인 락
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  국제공항 보안검색대 통과 시 안전하고 편리한 TSA 승인 보안
                  시스템
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#233A73] to-[#1c2f5c] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  360° 듀얼 휠
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  어떤 방향으로든 부드럽고 조용한 이동이 가능한 프리미엄 휠
                  시스템
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* French Heritage Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#233A73] to-[#E31E24] rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">🇫🇷</div>
                    <div className="text-2xl font-bold">MADE IN FRANCE</div>
                    <div className="text-lg opacity-90">Since 1950</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#233A73]/10 text-[#233A73] rounded-full text-sm font-semibold mb-6">
                FRENCH HERITAGE
              </div>
              <h2 className="text-5xl font-bold text-[#000000] mb-8 leading-tight">
                프랑스 장인 정신의
                <span className="block text-[#233A73]">70년 전통</span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  세대를 넘나드는 크래프트맨십
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  1950년부터 시작된 La Ceras의 여정은 프랑스 전통 장인정신과
                  현대적 혁신이 만나는 지점에서 계속되고 있습니다. 세심한
                  디테일과 완벽한 마감으로 럭셔리 트래블의 새로운 기준을
                  제시합니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#233A73] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    프랑스 전통 가죽공예 기법 적용
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#233A73] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    유럽 프리미엄 소재 엄선 사용
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#233A73] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    수작업 마감과 품질 검수
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Travel Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#233A73]/10 text-[#233A73] rounded-full text-sm font-semibold mb-6">
                LUXURY TRAVEL
              </div>
              <h2 className="text-4xl font-bold text-[#000000] mb-6 leading-tight">
                비즈니스부터 럭셔리까지
                <span className="block text-[#233A73]">
                  완벽한 트래블 솔루션
                </span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  모든 여행의 순간을 특별하게
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  La Ceras는 단순한 캐리어가 아닌 여행의 파트너입니다. 비즈니스
                  출장부터 로맨틱한 허니문, 가족 여행까지 모든 순간을 더욱
                  세련되고 편안하게 만들어드립니다.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#233A73] mb-2">
                    3
                  </div>
                  <div className="text-sm text-gray-600">사이즈 옵션</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#233A73] mb-2">
                    10
                  </div>
                  <div className="text-sm text-gray-600">년 보증</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#233A73] mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">글로벌 매장</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#233A73] mb-2">
                    4.8
                  </div>
                  <div className="text-sm text-gray-600">고객 만족도</div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl flex items-center justify-center">
                  <LazyImage
                    src={lacerasCarri}
                    alt="럭셔리 캐리어 이미지"
                    className="max-h-80 object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Types */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#233A73]/10 text-[#233A73] rounded-full text-sm font-semibold mb-6">
              COLLECTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              모든 여행 스타일에 맞는
            </h2>
            <div className="w-32 h-1 bg-[#233A73] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              다양한 컬렉션으로 여행자의 취향과 필요에 완벽하게 부응합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#233A73] to-[#1c2f5c] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  캐리온
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  기내 반입 가능한 컴팩트 사이즈
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#233A73] to-[#1c2f5c] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Luggage className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  하드셸 캐리어
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  중거리 여행을 위한 미디움 사이즈
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#233A73] to-[#1c2f5c] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  트렁크
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  장기간 여행을 위한 라지 사이즈
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#233A73] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            La Ceras와 함께하는
            <span className="block text-[#FFD700]">럭셔리 트래블</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            프랑스 장인정신으로 완성된 프리미엄 캐리어로 당신의 여행을 더욱
            특별하게 만들어보세요
          </p>
        </div>
      </section>
    </div>
  );
}
