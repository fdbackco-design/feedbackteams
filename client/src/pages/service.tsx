import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hospital, Smartphone, ShoppingCart, TrendingUp } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Hospital,
    title: "🏥 의료관광 중개",
    description: "베트남, 태국 등 아시아 주요 국가의 우수한 병원들과 제휴하여 안전하고 신뢰할 수 있는 의료관광 서비스를 제공합니다. 성형외과, 치과, 건강검진 등 다양한 의료 서비스를 합리적인 비용으로 이용하실 수 있습니다.",
    features: ["베트남·태국 주요 병원 제휴", "통역 및 동행 서비스", "사후관리 및 A/S"],
    buttonText: "자세히 알아보기",
    buttonColor: "bg-red-600 hover:bg-red-700"
  },
  {
    icon: Smartphone,
    title: "📱 다국어 여정 앱",
    description: "의료관광 고객들을 위한 전용 모바일 애플리케이션을 통해 예약부터 사후관리까지 원스톱 서비스를 제공합니다. 한국어, 영어, 베트남어, 태국어 등 다국어를 지원합니다.",
    features: ["실시간 예약 및 상담", "다국어 지원 (4개국)", "GPS 연동 병원 찾기"],
    buttonText: "앱 다운로드",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    icon: ShoppingCart,
    title: "🛒 자체 브랜드 제품 유통",
    description: "Hoid, Medifeed, InYourHeart 등 자체 개발 브랜드 제품들을 온라인과 오프라인을 통해 유통하고 있습니다. 품질 관리부터 고객 서비스까지 전 과정을 책임집니다.",
    features: ["3개 자체 브랜드 운영", "온라인 쇼핑몰 연동", "전국 배송 및 A/S"],
    buttonText: "제품 둘러보기",
    buttonColor: "bg-green-600 hover:bg-green-700"
  },
  {
    icon: TrendingUp,
    title: "📈 브랜딩·마케팅 컨설팅",
    description: "브랜드 기획부터 마케팅 전략까지, 기업의 브랜딩 성공을 위한 종합적인 컨설팅 서비스를 제공합니다. 홈쇼핑, 디지털 마케팅, 글로벌 진출 전략을 함께 수립합니다.",
    features: ["브랜드 아이덴티티 개발", "홈쇼핑 연계 마케팅", "글로벌 시장 진출 전략"],
    buttonText: "상담 신청하기",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700"
  }
];

export default function Service() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">서비스 소개</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FeedBack은 다양한 분야의 전문적인 서비스를 통해<br />
            고객의 비즈니스 성공을 지원합니다.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="ml-6 flex-1">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="mb-6 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-500">
                          • {feature}
                        </div>
                      ))}
                    </div>
                    <Button className={`${service.buttonColor} text-white transition-colors`}>
                      {service.buttonText}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">더 자세한 상담이 필요하신가요?</h3>
          <p className="text-xl mb-8">전문 컨설턴트가 귀하의 비즈니스에 맞는 최적의 솔루션을 제안해드립니다.</p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">무료 상담 신청</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
