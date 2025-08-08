import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Heart, Leaf, Sparkles, Globe2 } from "lucide-react";

export default function InYourHeart() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white">
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
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="InYourHeart 브랜드 로고" 
              className="mx-auto h-24 w-auto mb-6"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">IN YOUR HEART</h1>
          <p className="text-2xl text-pink-600 font-medium mb-6">피부에 감성을 입히다</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 
            프리미엄 스킨케어 브랜드입니다.
          </p>
        </div>
      </section>

      {/* Brand Values */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">브랜드 가치</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-pink-200">
            <CardHeader>
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>클린 포뮬러</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                피부에 순하고 환경에 친화적인 성분만을 사용하여 안전하고 지속가능한 뷰티를 추구합니다.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 border-pink-200">
            <CardHeader>
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <CardTitle>감성 디자인</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                제품 사용 순간부터 특별한 경험이 될 수 있도록 감성적이고 아름다운 패키지를 디자인합니다.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 border-pink-200">
            <CardHeader>
              <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>글로벌 K-뷰티</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                한국의 우수한 뷰티 기술과 혁신을 전 세계에 알리며 K-뷰티의 가치를 높여갑니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Lines */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">제품 라인업</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle>에센셜 스킨케어</CardTitle>
                <CardDescription>기본 스킨케어 라인</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  클렌저, 토너, 에센스, 크림으로 구성된 기본 스킨케어 루틴으로 
                  모든 피부 타입에 적합한 순하고 효과적인 제품들입니다.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 저자극 클렌징 폼</li>
                  <li>• 히알루론산 토너</li>
                  <li>• 나이아신아마이드 에센스</li>
                  <li>• 세라마이드 모이스처 크림</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle>스페셜 케어</CardTitle>
                <CardDescription>집중 케어 라인</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  특별한 피부 고민을 위한 집중 케어 제품으로 
                  개별 니즈에 맞춘 맞춤형 솔루션을 제공합니다.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 비타민 C 브라이트닝 세럼</li>
                  <li>• 레티놀 안티에이징 크림</li>
                  <li>• 콜라겐 하이드로젤 마스크</li>
                  <li>• 아이케어 펩타이드 크림</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* K-Beauty Global */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">글로벌 K-뷰티 리더</h2>
            <p className="text-lg text-gray-600 mb-6">
              IN YOUR HEART는 한국의 전통적인 미용 철학과 현대적인 과학 기술을 결합하여 
              전 세계 고객들에게 새로운 뷰티 경험을 제공합니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Globe2 className="w-6 h-6 text-pink-600 mr-3" />
                <span>아시아 10개국 진출 완료</span>
              </div>
              <div className="flex items-center">
                <Globe2 className="w-6 h-6 text-pink-600 mr-3" />
                <span>유럽 프리미엄 뷰티 마켓 진입</span>
              </div>
              <div className="flex items-center">
                <Globe2 className="w-6 h-6 text-pink-600 mr-3" />
                <span>북미 온라인 채널 확장</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="글로벌 진출" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">지속가능한 뷰티</h2>
            <p className="text-lg text-gray-600 mb-12">
              아름다움은 지구와 함께 지속되어야 한다는 믿음으로 
              환경을 생각하는 책임감 있는 뷰티 브랜드가 되고자 합니다.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Leaf className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">친환경 포장재</h3>
                <p className="text-sm text-gray-600">재활용 가능한 소재 사용</p>
              </div>
              
              <div className="text-center">
                <Heart className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">동물실험 금지</h3>
                <p className="text-sm text-gray-600">크루얼티 프리 인증</p>
              </div>
              
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">천연 성분</h3>
                <p className="text-sm text-gray-600">자연 유래 원료 우선 사용</p>
              </div>
              
              <div className="text-center">
                <Globe2 className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">탄소 중립</h3>
                <p className="text-sm text-gray-600">친환경 배송 시스템</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">브랜드 스토리</h2>
          <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-8">
            "진정한 아름다움은 피부 깊숙한 곳에서 시작되어 
            마음까지 전해지는 특별한 감정입니다. 
            IN YOUR HEART는 그 감동을 담아내고자 합니다."
          </blockquote>
          <p className="text-gray-600">
            - 브랜드 디렉터 메시지 -
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">당신의 마음에 닿는 아름다움</h2>
          <p className="text-xl mb-8 opacity-90">
            IN YOUR HEART와 함께 특별한 뷰티 여정을 시작해보세요
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg">
              제품 체험하기
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pink-600">
              글로벌 스토어 방문
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}