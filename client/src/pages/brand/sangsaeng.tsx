import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Heart, Globe, Smartphone, Building2, Users, MapPin } from "lucide-react";
import SangsaengLogo from "@/components/SangsaengLogo";
import sangsaengBannerImage from "@assets/Whisk_13273bb9d1_1754641826671.jpg";

export default function Sangsaeng() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/brand">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            브랜드 목록으로 돌아가기
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${sangsaengBannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content over image */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-4">
              <SangsaengLogo className="h-16 md:h-20 mx-auto" fill="white" />
            </div>
            <p className="text-2xl md:text-3xl font-medium mb-6 text-blue-200 drop-shadow-lg">
              WE CONNECT KOREAN MEDICAL SERVICES TO THE WORLD
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg opacity-90">
              메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한 의료 서비스를 
              전 세계에 연결하는 종합 의료 플랫폼입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Service Portfolio */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">서비스 포트폴리오</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-blue-200">
            <CardHeader>
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <CardTitle>상생 메디컬</CardTitle>
              <CardDescription>Sangsaeng Medical</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                실생활 기반 건강 솔루션과 의료 서비스를 제공하는 헬스케어 브랜드
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 맞춤형 건강 검진 패키지</li>
                <li>• 전문의 상담 서비스</li>
                <li>• 만성질환 관리 프로그램</li>
                <li>• 예방 의학 솔루션</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-blue-200">
            <CardHeader>
              <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>상생 플랫폼</CardTitle>
              <CardDescription>Sangsaeng Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                의료부터 관광까지 손안의 다국어 의료 플랫폼 앱
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 다국어 의료 통역 서비스</li>
                <li>• 병원 예약 및 관리</li>
                <li>• 의료 관광 패키지</li>
                <li>• 24시간 응급 서포트</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-blue-200">
            <CardHeader>
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>상생 브랜딩</CardTitle>
              <CardDescription>Sangsaeng Branding</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                콘텐츠, 메타광고, 글로벌 인플루언서 연계 브랜딩 조직
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 의료 콘텐츠 마케팅</li>
                <li>• 다국어 브랜드 캠페인</li>
                <li>• 글로벌 인플루언서 협업</li>
                <li>• 디지털 마케팅 솔루션</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Medical Tourism */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">의료관광 서비스</h2>
              <p className="text-lg text-gray-600 mb-6">
                태국, 베트남을 시작으로 아시아 전역에 한국의 우수한 의료 서비스를 제공하고 있습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span><strong>태국 방콕:</strong> 성형외과, 건강검진 전문</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span><strong>베트남 호치민:</strong> 치과, 피부과 중심</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span><strong>향후 확장:</strong> 싱가포르, 말레이시아</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="의료관광 서비스" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Network */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">글로벌 병원 네트워크</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">서울대병원</h3>
            <p className="text-sm text-gray-600">종합검진, 암치료</p>
          </Card>
          
          <Card className="text-center p-6">
            <Building2 className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">삼성서울병원</h3>
            <p className="text-sm text-gray-600">심장혈관, 신경외과</p>
          </Card>
          
          <Card className="text-center p-6">
            <Building2 className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">세브란스병원</h3>
            <p className="text-sm text-gray-600">이식수술, 재활의학</p>
          </Card>
          
          <Card className="text-center p-6">
            <Building2 className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">아산의료원</h3>
            <p className="text-sm text-gray-600">소아과, 산부인과</p>
          </Card>
        </div>
      </section>

      {/* App Development */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">상생 플랫폼 앱 (개발 중)</h2>
            <p className="text-lg text-gray-600 mb-12">
              2025년 하반기 출시 예정인 통합 의료 플랫폼으로, 
              언어 장벽 없는 글로벌 의료 서비스를 제공합니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>주요 기능</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      실시간 의료 통역 서비스
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      병원 예약 및 일정 관리
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      의료 기록 관리 시스템
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      응급상황 알림 서비스
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader>
                  <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>지원 언어</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      한국어, 영어, 중국어
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      태국어, 베트남어
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      일본어, 인도네시아어
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      아랍어, 러시아어
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">성공 사례</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold">태국 환자 A씨</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                "한국에서 심장 수술을 받았는데, 상생 플랫폼 덕분에 언어 문제 없이 
                모든 과정을 편안하게 진행할 수 있었습니다."
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-6">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-600 mr-2" />
                <span className="font-semibold">베트남 환자 B씨</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                "치과 임플란트 치료를 위해 한국을 방문했는데, 
                체계적인 관리와 높은 의료 기술에 매우 만족했습니다."
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-6">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-600 mr-2" />
                <span className="font-semibold">중국 환자 C씨</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                "성형수술 후 회복까지 전 과정에서 세심한 케어를 받았고, 
                결과에 대해서도 매우 만족하고 있습니다."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">세계와 연결되는 한국 의료</h2>
          <p className="text-xl mb-8 opacity-90">
            상생과 함께 안전하고 신뢰할 수 있는 의료 서비스를 경험해보세요
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg">
              의료관광 상담받기
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              병원 파트너십 문의
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}