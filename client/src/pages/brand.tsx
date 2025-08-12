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
    bgColor: "bg-white",
    buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
    badgeColor: "bg-[#0F4C82]",
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
    buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
    badgeColor: "bg-[#0F4C82]",
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
    bgColor: "bg-white",
    buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
    badgeColor: "bg-[#0F4C82]",
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
    buttonColor: "bg-[#0F4C82] hover:bg-[#0d4070]",
    badgeColor: "bg-[#0F4C82]",
    image: sangsaengImg,
  },
];

export default function Brand() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 mt-[75px]">
          <h1 className="text-5xl font-bold text-[#000000] mb-6">브랜드 소개</h1>
          <div className="w-24 h-0.5 bg-[#0F4C82] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.
            <br />각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.
          </p>
        </div>

        <div className="space-y-20">
          {brands.map((brand, index) => (
            <div key={brand.id} className={`${brand.bgColor} rounded-3xl p-12 lg:p-16 shadow-xl border border-gray-100`}>
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-start mb-8">
                    <div
                      className={`w-24 h-24 ${brand.badgeColor} rounded-2xl flex items-center justify-center mr-8 shadow-lg`}
                    >
                      {brand.id === 'hoid' ? (
                        <HoidLogo className="w-14 h-auto" fill="white" />
                      ) : (
                        <span className="text-white font-bold text-2xl">
                          {brand.logo}
                        </span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-2">
                        {brand.name}
                      </h2>
                      <p className="text-gray-500 text-xl mb-2">{brand.category}</p>
                      <p className="text-[#0F4C82] font-semibold text-lg italic">
                        {brand.slogan}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    {brand.products.map((product, productIndex) => (
                      <Badge
                        key={productIndex}
                        className={`${brand.badgeColor} text-white px-5 py-2 text-sm font-medium rounded-full`}
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/brand/${brand.id}`}>
                    <Button
                      className={`${brand.buttonColor} text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-xl shadow-lg hover:shadow-xl`}
                    >
                      {brand.name} 브랜드 자세히 보기
                      <ArrowRight className="ml-3 w-5 h-5" />
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
                    className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Partnership CTA */}
        <div className="mt-24 bg-[#0F4C82] rounded-3xl p-16 text-white text-center shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              브랜드 파트너십에 관심이 있으신가요?
            </h3>
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed opacity-90">
              FeedBack과 함께 혁신적인 브랜드를 만들어보세요. 기획부터 유통까지 전 과정을 지원하여 
              성공적인 브랜드 런칭을 도와드립니다.
            </p>
            <Button 
              asChild 
              className="bg-[#000000] text-white hover:bg-gray-800 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Link href="/contact">파트너십 문의하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
