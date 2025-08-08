import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Heart, Shield, Star, Users } from "lucide-react";
import MedifeedLogo from "@/components/MedifeedLogo";
import medifeedBannerImage from "@assets/medifeed_2_1754640478083.jpg";

export default function Medifeed() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
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
          style={{ backgroundImage: `url(${medifeedBannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content over image */}
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
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">주요 제품군</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-8">
            <CardHeader>
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <CardTitle className="text-2xl">잇몸 건강</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                치주질환 예방과 잇몸 건강 유지를 위한 전문 영양제
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 코엔자임 Q10 고함량</li>
                <li>• 비타민 C 복합체</li>
                <li>• 아연 및 셀레늄 포함</li>
                <li>• GMP 인증 시설 생산</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8">
            <CardHeader>
              <Star className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-2xl">눈 건강</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                디지털 시대 눈의 피로와 시력 보호를 위한 기능성 영양제
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 루테인 & 지아잔틴</li>
                <li>• 빌베리 추출물</li>
                <li>• 오메가-3 지방산</li>
                <li>• 블루라이트 차단 지원</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">브랜드 철학</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">안전성</h3>
                <p className="text-gray-600">
                  엄격한 품질 관리와 GMP 인증을 통해 안전하고 신뢰할 수 있는 제품만을 제공합니다.
                </p>
              </div>
              
              <div>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">실용성</h3>
                <p className="text-gray-600">
                  바쁜 현대인의 라이프스타일에 맞춰 간편하게 섭취할 수 있는 형태로 개발합니다.
                </p>
              </div>
              
              <div>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">접근성</h3>
                <p className="text-gray-600">
                  누구나 부담 없이 구매할 수 있는 합리적인 가격으로 건강한 습관을 만들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">품질 보증</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="품질 관리 시설" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">철저한 품질 관리</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <span>GMP 인증 제조 시설에서 생산</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <span>원료부터 완제품까지 전 과정 품질 검사</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <span>식약처 기준에 따른 안전성 검증</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <span>제3자 품질 인증 기관 검사 완료</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">김○○님</span>
              </div>
              <p className="text-gray-700">
                "잇몸 출혈이 자주 있었는데, 메디피드 잇몸건강 영양제를 꾸준히 먹고 나서 많이 개선되었어요. 
                이제는 필수템이 되었습니다."
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">박○○님</span>
              </div>
              <p className="text-gray-700">
                "컴퓨터 작업을 많이 해서 눈이 항상 피곤했는데, 
                눈건강 영양제 먹고 나서 확실히 눈의 피로감이 줄어들었습니다."
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">이○○님</span>
              </div>
              <p className="text-gray-700">
                "가격이 합리적이면서도 효과가 좋아서 가족 모두가 함께 먹고 있어요. 
                믿을 수 있는 브랜드인 것 같습니다."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">건강한 습관, 메디피드와 함께</h2>
          <p className="text-xl mb-8 opacity-90">
            매일의 작은 관심이 평생 건강의 큰 차이를 만듭니다
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg">
              제품 구매하기
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
              건강 상담받기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}