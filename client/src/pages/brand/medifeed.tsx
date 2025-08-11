import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Heart, Shield, Star, Users } from "lucide-react";
import MedifeedLogo from "@/components/MedifeedLogo";
import medifeedVideo from "@assets/medifeed_1754647409969.mp4";

export default function Medifeed() {
  return (
    <div className="bg-white">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <Link href="/brand">
          <Button variant="ghost" className="mb-6 text-[#000000] hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            브랜드 목록으로 돌아가기
          </Button>
        </Link>
      </div>
      {/* Hero Section */}
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
        
        {/* Content over video */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-4">
              <MedifeedLogo className="h-16 md:h-20 mx-auto" />
            </div>
            <p className="text-2xl md:text-3xl font-medium mb-6 text-green-200 drop-shadow-lg">
              매일을 지키는 작은 습관
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg opacity-90">
              잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 
              누구나 쉽게 선택할 수 있는 건강 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>
      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">주요 제품군</h2>
            <div className="w-24 h-1 bg-[#0F4C82] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="text-center p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-[#0F4C82] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#000000]">잇몸 건강</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  치주질환 예방과 잇몸 건강 유지를 위한 전문 영양제
                </p>
                <div className="bg-gray-50 rounded-lg p-6 text-left">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-center"><span className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></span>코엔자임 Q10 고함량</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></span>비타민 C 복합체</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></span>아연 및 셀레늄 포함</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></span>GMP 인증 시설 생산</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-[#0F4C82] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#000000]">눈 건강</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  디지털 시대 눈의 피로와 시력 보호를 위한 기능성 영양제
                </p>
                <div className="bg-gray-50 rounded-lg p-6 text-left">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-center"><span className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></span>루테인 & 지아잔틴</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></span>빌베리 추출물</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></span>오메가-3 지방산</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></span>블루라이트 차단 지원</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Brand Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">브랜드 철학</h2>
            <div className="w-24 h-1 bg-[#0F4C82] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-16 h-16 bg-[#0F4C82] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-4">안전성</h3>
              <p className="text-gray-600 leading-relaxed">
                엄격한 품질 관리와 GMP 인증을 통해 안전하고 신뢰할 수 있는 제품만을 제공합니다.
              </p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-16 h-16 bg-[#0F4C82] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-4">실용성</h3>
              <p className="text-gray-600 leading-relaxed">
                바쁜 현대인의 라이프스타일에 맞춰 간편하게 섭취할 수 있는 형태로 개발합니다.
              </p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-16 h-16 bg-[#0F4C82] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-4">접근성</h3>
              <p className="text-gray-600 leading-relaxed">
                누구나 부담 없이 구매할 수 있는 합리적인 가격으로 건강한 습관을 만들어갑니다.
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">품질 보증</h2>
            <div className="w-24 h-1 bg-[#0F4C82] mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="품질 관리 시설" 
                className="w-full rounded-xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-[#000000] mb-8">철저한 품질 관리</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#0F4C82] rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">GMP 인증 제조 시설에서 생산</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#0F4C82] rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">원료부터 완제품까지 전 과정 품질 검사</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#0F4C82] rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">식약처 기준에 따른 안전성 검증</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#0F4C82] rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">제3자 품질 인증 기관 검사 완료</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">고객 후기</h2>
            <div className="w-24 h-1 bg-[#0F4C82] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-[#0F4C82]">김○○님</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                "잇몸 출혈이 자주 있었는데, 메디피드 잇몸건강 영양제를 꾸준히 먹고 나서 많이 개선되었어요. 
                이제는 필수템이 되었습니다."
              </p>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-[#0F4C82]">박○○님</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                "컴퓨터 작업을 많이 해서 눈이 항상 피곤했는데, 
                눈건강 영양제 먹고 나서 확실히 눈의 피로감이 줄어들었습니다."
              </p>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-[#0F4C82]">이○○님</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                "가격이 합리적이면서도 효과가 좋아서 가족 모두가 함께 먹고 있어요. 
                믿을 수 있는 브랜드인 것 같습니다."
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#0F4C82] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              건강한 습관, 메디피드와 함께
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
              매일의 작은 관심이 평생 건강의 큰 차이를 만듭니다
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[#000000] text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-medium"
              >
                제품 구매하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-medium"
              >
                건강 상담받기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}