import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const brands = [
  {
    id: "hoid",
    name: "Hoid",
    category: "디자인 가전",
    logo: "Hoid",
    description: "Hoid는 혁신적인 디자인과 첨단 기술을 결합한 프리미엄 가전 브랜드입니다. 청소기, 공기청정기 등 생활 필수 가전제품을 통해 더 나은 라이프스타일을 제안합니다. 미니멀한 디자인과 우수한 성능으로 현대인의 삶의 질을 향상시킵니다.",
    products: ["무선 청소기", "공기청정기", "스마트 가전"],
    bgColor: "bg-gray-50",
    buttonColor: "bg-primary hover:bg-blue-700",
    badgeColor: "bg-primary",
    image: "https://pixabay.com/get/g86a1ee4370935648b7ef6b550573b59f114cc5617acb1dce7ba26bbb75815624a98b8a0586d3ff79c31168c3c349e496a418fd9281bc3525bbbe67c7ebee27ac_1280.jpg"
  },
  {
    id: "medifeed",
    name: "Medifeed",
    category: "건강기능식품",
    logo: "MF",
    description: "Medifeed는 과학적 연구를 바탕으로 한 프리미엄 건강기능식품 브랜드입니다. 의료진과의 협업을 통해 개발된 제품들로 고객의 건강한 삶을 지원합니다. 엄격한 품질 관리와 임상 시험을 거친 안전하고 효과적인 제품을 제공합니다.",
    products: ["프로바이오틱스", "오메가-3", "종합 비타민"],
    bgColor: "bg-green-50",
    buttonColor: "bg-secondary hover:bg-green-700",
    badgeColor: "bg-secondary",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "inyourheart",
    name: "InYourHeart",
    category: "저자극 스킨케어",
    logo: "IYH",
    description: "InYourHeart는 민감한 피부를 위한 저자극 스킨케어 브랜드입니다. 자연에서 얻은 순한 성분만을 사용하여 피부에 부담을 주지 않는 화장품을 개발합니다. 모든 피부 타입이 안심하고 사용할 수 있는 순한 제품으로 건강한 아름다움을 추구합니다.",
    products: ["세안제", "토너", "수분크림"],
    bgColor: "bg-yellow-50",
    buttonColor: "bg-accent hover:bg-yellow-600",
    badgeColor: "bg-accent",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function Brand() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">브랜드 소개</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.<br />
            각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.
          </p>
        </div>
        
        <div className="space-y-16">
          {brands.map((brand, index) => (
            <div key={brand.id} className={`${brand.bgColor} rounded-2xl p-12`}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-20 h-20 ${brand.badgeColor} rounded-full flex items-center justify-center mr-6`}>
                      <span className="text-white font-bold text-2xl">{brand.logo}</span>
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">{brand.name}</h2>
                      <p className="text-gray-500 text-lg">{brand.category}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {brand.products.map((product, productIndex) => (
                      <Badge key={productIndex} className={`${brand.badgeColor} text-white px-4 py-2`}>
                        {product}
                      </Badge>
                    ))}
                  </div>
                  <Button className={`${brand.buttonColor} text-white px-8 py-4 text-lg font-semibold transition-colors`}>
                    {brand.name} 브랜드 자세히 보기
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : 'lg:order-last'}>
                  <img 
                    src={brand.image} 
                    alt={`${brand.name} 제품`} 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Brand Partnership CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">브랜드 파트너십에 관심이 있으신가요?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            FeedBack과 함께 혁신적인 브랜드를 만들어보세요. 
            기획부터 유통까지 전 과정을 지원하여 성공적인 브랜드 런칭을 도와드립니다.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">파트너십 문의하기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
