import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hospital, Smartphone, ShoppingCart, TrendingUp } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: ShoppingCart,
    title: "🛒 유통 / 수출입 중개",
    description: "아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다. 다양한 제품군에 대한 전문적인 수출입 컨설팅과 물류 솔루션을 함께 제공하여 글로벌 비즈니스를 지원합니다.",
    features: ["아시아 유통망 구축", "수출입 통관 대행", "물류 최적화 솔루션"],
    buttonText: "서비스 문의",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    icon: TrendingUp,
    title: "🏭 자체 브랜드 제조 (OEM)",
    description: "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다. 품질 관리부터 제품 개발까지 전 과정을 책임집니다.",
    features: ["4개 자체 브랜드 운영", "OEM/ODM 제조", "품질관리 시스템"],
    buttonText: "브랜드 보기",
    buttonColor: "bg-green-600 hover:bg-green-700"
  },
  {
    icon: TrendingUp,
    title: "🌐 글로벌 마케팅/브랜딩",
    description: "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다. 브랜드 아이덴티티 개발부터 글로벌 시장 진출 전략까지 종합적인 마케팅 서비스를 지원합니다.",
    features: ["홈쇼핑 연계 마케팅", "디지털 마케팅", "글로벌 진출 전략"],
    buttonText: "상담 신청",
    buttonColor: "bg-purple-600 hover:bg-purple-700"
  },
  {
    icon: Hospital,
    title: "🏥 의료관광 플랫폼",
    description: "상생 브랜드를 통한 의료관광 플랫폼 운영으로 한국의 우수한 의료 서비스를 전 세계에 연결합니다. 태국, 베트남을 시작으로 아시아 전역으로 서비스를 확장하고 있습니다.",
    features: ["메디컬 투어리즘", "병원 네트워크", "다국어 플랫폼"],
    buttonText: "상생 브랜드 보기",
    buttonColor: "bg-red-600 hover:bg-red-700"
  },
  {
    icon: Smartphone,
    title: "📱 앱 개발",
    description: "의료/케어 통합 앱 개발로 디지털 헬스케어 솔루션을 제공합니다. 다국어 지원과 실시간 상담 기능을 통해 글로벌 사용자들에게 편리한 서비스를 제공합니다.",
    features: ["의료/케어 통합 앱", "다국어 지원", "실시간 상담"],
    buttonText: "앱 정보 보기",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
