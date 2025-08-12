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
  Heart,
  Globe,
  Smartphone,
  Building2,
  Users,
  MapPin,
  ArrowRight,
  Calendar,
} from "lucide-react";
import SangsaengLogo from "@/components/SangsaengLogo";
import medicalVideo from "@assets/medical_1754647118451.mp4";

export default function Sangsaeng() {
  const [, setLocation] = useLocation();
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
          src={medicalVideo}
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Back Navigation - Positioned over video */}
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

        {/* Content over video */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-4xl text-white">
              <div className="mb-8">
                <SangsaengLogo className="h-20 md:h-24" fill="white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                한국 의료를 세계로 연결하다
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한
                의료 서비스를 전 세계에 연결하는 종합 의료 플랫폼입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://sangsaenglife.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] px-8 py-4 text-lg font-semibold"
                  >
                    상생 홈페이지 가기
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Portfolio Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <circle cx="200" cy="100" r="100" fill="#0F4C82" />
            <circle cx="1000" cy="400" r="150" fill="#000000" />
            <path
              d="M300 300 Q600 100 900 300"
              stroke="#0F4C82"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
              SERVICE PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              글로벌 헬스케어 생태계
            </h2>
            <div className="w-32 h-1 bg-[#0F4C82] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              의료 서비스부터 브랜딩까지, 통합된 헬스케어 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4 text-center">
                  상생 메디컬
                </h3>
                <p className="text-gray-600 mb-6 text-center text-base">
                  Sangsaeng Medical
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
                  실생활 기반 건강 솔루션과 의료 서비스를 제공하는 헬스케어
                  브랜드
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        맞춤형 건강 검진 패키지
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        전문의 상담 서비스
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        만성질환 관리 프로그램
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        예방 의학 솔루션
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4 text-center">
                  상생 플랫폼
                </h3>
                <p className="text-gray-600 mb-6 text-center text-base">
                  Sangsaeng Platform
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
                  의료부터 관광까지 손안의 다국어 의료 플랫폼 앱
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        다국어 의료 통역 서비스
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        병원 예약 및 관리
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        의료 관광 패키지
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        24시간 응급 서포트
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4 text-center">
                  상생 브랜딩
                </h3>
                <p className="text-gray-600 mb-6 text-center text-base">
                  Sangsaeng Branding
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
                  콘텐츠, 메타광고, 글로벌 인플루언서 연계 브랜딩 조직
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        의료 콘텐츠 마케팅
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        다국어 브랜드 캠페인
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        글로벌 인플루언서 협업
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        디지털 마케팅 솔루션
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0F4C82] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              세계와 연결되는
              <span className="block">한국 의료의 미래</span>
            </h2>
            <p className="text-lg lg:text-xl mb-12 opacity-90 leading-relaxed">
              상생과 함께 안전하고 신뢰할 수 있는 의료 서비스를 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                onClick={() => setLocation("/contact")}
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
