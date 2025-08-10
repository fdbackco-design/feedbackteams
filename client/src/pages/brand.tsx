import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import HoidLogo from "@/components/HoidLogo";
import hoidImg from "@/assets/brand/hoidintro.jpg";
import medifeedImg from "@assets/medifeed_1_1754636614100.jpg";
import inyourheartImg from "@assets/in_your_1754636664888.jpg";
import sangsaengImg from "@assets/sangsaeng_1_1754636754183.jpg";

const brands = [
  {
    id: "hoid",
    name: "Hoid",
    category: "미니멀 가전 브랜드",
    slogan: "공기 속까지 바꾸는 디자인",
    logo: "svg",
    description:
      "공기청정기, 제습기 등 미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트 가전 브랜드입니다. 홈쇼핑과 해외진출을 통해 글로벌 시장에서 인정받고 있습니다.",
    products: ["공기청정기", "제습기", "3-in-1 기술", "HEPA14 필터"],
    bgColor: "bg-gray-50",
    buttonColor: "bg-accent hover:bg-accent/90",
    badgeColor: "bg-accent",
    image: hoidImg,
  },
  {
    id: "medifeed",
    name: "Medifeed",
    category: "기능성 영양제 브랜드",
    slogan: "매일을 지키는 작은 습관",
    logo: "MF",
    description:
      "잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 누구나 쉽게 선택할 수 있는 건강 솔루션을 제공합니다.",
    products: ["잇몸 건강", "눈 건강", "기능성 영양제", "GMP 인증"],
    bgColor: "bg-gray-50",
    buttonColor: "bg-primary hover:bg-primary/90",
    badgeColor: "bg-primary",
    image: medifeedImg,
  },
  {
    id: "inyourheart",
    name: "InYourHeart",
    category: "감성 스킨케어 브랜드",
    slogan: "피부에 감성을 입히다",
    logo: "♥",
    description:
      "클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 프리미엄 스킨케어 브랜드입니다.",
    products: ["클린 포뮬러", "감성 패키지", "글로벌 K-뷰티", "세라마이드"],
    bgColor: "bg-gray-50",
    buttonColor: "bg-accent hover:bg-accent/90",
    badgeColor: "bg-accent",
    image: inyourheartImg,
  },
  {
    id: "sangsaeng",
    name: "상생 (Sangsaeng)",
    category: "의료관광 플랫폼",
    slogan: "WE CONNECT KOREAN MEDICAL SERVICES TO THE WORLD",
    logo: "상생",
    description:
      "메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한 의료 서비스를 전 세계에 연결하는 종합 의료 플랫폼입니다. 태국, 베트남을 시작으로 아시아 전역에 서비스를 확장하고 있습니다.",
    products: ["의료관광", "헬스케어 플랫폼", "다국어 앱", "병원 네트워크"],
    bgColor: "bg-gray-50",
    buttonColor: "bg-primary hover:bg-primary/90",
    badgeColor: "bg-primary",
    image: sangsaengImg,
  },
];

export default function Brand() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">브랜드 소개</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을
            소개합니다.
            <br />각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을
            제공합니다.
          </p>
        </div>

        <div className="space-y-16">
          {brands.map((brand, index) => (
            <div key={brand.id} className={`${brand.bgColor} rounded-2xl p-12`}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-20 h-20 ${brand.badgeColor} rounded-full flex items-center justify-center mr-6`}
                    >
                      {brand.id === 'hoid' ? (
                        <HoidLogo className="w-12 h-auto" fill="white" />
                      ) : (
                        <span className="text-white font-bold text-2xl">
                          {brand.logo}
                        </span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">
                        {brand.name}
                      </h2>
                      <p className="text-gray-500 text-lg">{brand.category}</p>
                      <p className="text-blue-600 font-medium italic">
                        {brand.slogan}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {brand.products.map((product, productIndex) => (
                      <Badge
                        key={productIndex}
                        className={`${brand.badgeColor} text-white px-4 py-2`}
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/brand/${brand.id}`}>
                    <Button
                      className={`${brand.buttonColor} text-white px-8 py-4 text-lg font-semibold transition-colors`}
                    >
                      {brand.name} 브랜드 자세히 보기
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1" : "lg:order-last"
                  }
                >
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
          <h3 className="text-3xl font-bold mb-4">
            브랜드 파트너십에 관심이 있으신가요?
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            FeedBack과 함께 혁신적인 브랜드를 만들어보세요. 기획부터 유통까지 전
            과정을 지원하여 성공적인 브랜드 런칭을 도와드립니다.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">파트너십 문의하기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
