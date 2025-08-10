import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Target,
  Users,
  Globe,
  TrendingUp,
  ShoppingCart,
  Building2,
  Award,
  Handshake,
  Zap,
  Shield,
} from "lucide-react";
import organizationChart from "@assets/organizationChart_1754563135776.png";
import warehouseImage from "@assets/futuristic-warehouse-with-blue-neon-lights-connected-data_1754566796044.jpg";
import partnershipImage from "@assets/5f76e132-877a-4d9e-8c9c-de9ff84cb5dd_1754568024377.jpg";
import networkImage from "@assets/5068978_1754568223986.jpg";
import globalImage from "@assets/13730_1754568375896.jpg";
import trustImage from "@assets/hands_1754568922347.png";
import peopleImage from "@assets/people_1754639134434.jpg";

import _______ from "@assets/조직도.png";

// SVG 컴포넌트들
const HeroBackgroundSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full object-cover"
    viewBox="0 0 1200 600"
    fill="none"
  >
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#0F4C82", stopOpacity: 0.1 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#000000", stopOpacity: 0.05 }}
        />
      </linearGradient>
    </defs>
    <rect width="1200" height="600" fill="url(#heroGradient)" />
    <circle cx="200" cy="100" r="80" fill="#0F4C82" opacity="0.1" />
    <circle cx="1000" cy="500" r="120" fill="#000000" opacity="0.05" />
    <path
      d="M300 200 L500 250 L700 200 L900 300"
      stroke="#0F4C82"
      strokeWidth="2"
      opacity="0.3"
      fill="none"
    />
  </svg>
);

const BusinessValueSVG = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" className="w-full h-auto">
    <defs>
      <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#0F4C82" }} />
        <stop offset="100%" style={{ stopColor: "#000000" }} />
      </linearGradient>
    </defs>
    <rect
      x="50"
      y="50"
      width="80"
      height="60"
      rx="10"
      fill="url(#businessGradient)"
      opacity="0.8"
    />
    <rect
      x="170"
      y="30"
      width="80"
      height="80"
      rx="10"
      fill="url(#businessGradient)"
      opacity="0.9"
    />
    <rect
      x="290"
      y="70"
      width="80"
      height="60"
      rx="10"
      fill="url(#businessGradient)"
      opacity="0.7"
    />
    <text
      x="90"
      y="85"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      B2B
    </text>
    <text
      x="210"
      y="75"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      Platform
    </text>
    <text
      x="330"
      y="105"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      B2C
    </text>
    <path
      d="M130 80 L170 70"
      stroke="#0F4C82"
      strokeWidth="3"
      markerEnd="url(#arrowhead)"
    />
    <path
      d="M250 70 L290 85"
      stroke="#0F4C82"
      strokeWidth="3"
      markerEnd="url(#arrowhead)"
    />
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="10"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#0F4C82" />
      </marker>
    </defs>
  </svg>
);

const GlobalNetworkSVG = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" className="w-full h-auto">
    <circle
      cx="200"
      cy="150"
      r="100"
      fill="none"
      stroke="#0F4C82"
      strokeWidth="2"
      opacity="0.3"
    />
    <circle
      cx="200"
      cy="150"
      r="60"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      opacity="0.2"
    />
    <circle cx="200" cy="150" r="5" fill="#0F4C82" />
    <circle cx="120" cy="100" r="3" fill="#000000" />
    <circle cx="280" cy="100" r="3" fill="#000000" />
    <circle cx="120" cy="200" r="3" fill="#000000" />
    <circle cx="280" cy="200" r="3" fill="#000000" />
    <path
      d="M200 150 L120 100"
      stroke="#0F4C82"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M200 150 L280 100"
      stroke="#0F4C82"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M200 150 L120 200"
      stroke="#0F4C82"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M200 150 L280 200"
      stroke="#0F4C82"
      strokeWidth="1"
      opacity="0.6"
    />
    <text x="100" y="95" fontSize="10" fill="#000000">
      중국
    </text>
    <text x="270" y="95" fontSize="10" fill="#000000">
      동남아
    </text>
    <text x="100" y="215" fontSize="10" fill="#000000">
      한국
    </text>
    <text x="270" y="215" fontSize="10" fill="#000000">
      Global
    </text>
  </svg>
);

const TechnologySVG = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" className="w-full h-auto">
    <rect
      x="100"
      y="100"
      width="200"
      height="100"
      rx="20"
      fill="none"
      stroke="#0F4C82"
      strokeWidth="2"
    />
    <rect
      x="120"
      y="120"
      width="50"
      height="30"
      rx="5"
      fill="#0F4C82"
      opacity="0.7"
    />
    <rect
      x="180"
      y="120"
      width="50"
      height="30"
      rx="5"
      fill="#000000"
      opacity="0.7"
    />
    <rect
      x="240"
      y="120"
      width="50"
      height="30"
      rx="5"
      fill="#0F4C82"
      opacity="0.5"
    />
    <rect
      x="120"
      y="160"
      width="80"
      height="20"
      rx="3"
      fill="#0F4C82"
      opacity="0.3"
    />
    <rect
      x="210"
      y="160"
      width="80"
      height="20"
      rx="3"
      fill="#000000"
      opacity="0.3"
    />
    <text
      x="200"
      y="90"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill="#0F4C82"
    >
      FeedBack Platform
    </text>
    <text
      x="145"
      y="140"
      textAnchor="middle"
      fontSize="8"
      fill="white"
      fontWeight="bold"
    >
      OEM
    </text>
    <text
      x="205"
      y="140"
      textAnchor="middle"
      fontSize="8"
      fill="white"
      fontWeight="bold"
    >
      Brand
    </text>
    <text
      x="265"
      y="140"
      textAnchor="middle"
      fontSize="8"
      fill="white"
      fontWeight="bold"
    >
      Trade
    </text>
  </svg>
);

// 새로운 브랜드 메시지 배너 - 미래형 창고 배경
const BrandMessageBannerSVG = () => (
  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
    {/* 배경 이미지 */}
    <div className="absolute inset-0">
      <img
        src={warehouseImage}
        alt="미래형 유통 창고"
        className="w-full h-full object-cover"
      />
      {/* 어둡게 하는 오버레이 */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* 블루 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-blue-900/30"></div>
    </div>

    {/* 메인 텍스트 */}
    <div className="relative z-10 flex items-center justify-center h-96 px-8">
      <div className="text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-2xl"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          피드백은 브랜드의 성장을
          <br />
          <span className="text-blue-300">유통으로 설계합니다</span>
        </h2>
        <div className="w-24 h-1 bg-blue-300 mx-auto mt-6 rounded-full shadow-lg drop-shadow-lg"></div>
      </div>
    </div>

    {/* 네온 스타일 장식 요소들 */}
    <div className="absolute top-4 left-4 opacity-60">
      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
    </div>
    <div className="absolute top-8 right-8 opacity-60">
      <div
        className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
    <div className="absolute bottom-6 left-6 opacity-60">
      <div
        className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>

    {/* 연결선 그래픽 요소 */}
    <div className="absolute bottom-4 right-4 opacity-40">
      <svg width="80" height="60" viewBox="0 0 80 60" className="text-blue-300">
        <path
          d="M 10 30 Q 25 10 40 30 Q 55 50 70 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="drop-shadow-lg"
        />
        <circle cx="10" cy="30" r="2" fill="currentColor" />
        <circle cx="40" cy="30" r="2" fill="currentColor" />
        <circle cx="70" cy="30" r="2" fill="currentColor" />
      </svg>
    </div>
  </div>
);

export default function About() {
  const [timelineVisible, setTimelineVisible] = useState<boolean[]>([]);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData = [
    {
      year: "2025.09",
      description: "Hoid 2세대 공기청정기 국내외 동시 론칭 (홈쇼핑 입점 확장)",
      type: "확장",
    },
    { year: "2025.08", description: "Hoid 무선 청소기 출시", type: "제품출시" },
    {
      year: "2025.04",
      description: "Hoid 1세대 공기청정기 출시 (3-in-1 살균 기술 탑재)",
      type: "제품출시",
    },
    {
      year: "2025.01",
      description: "자회사 상생메디컬 설립 및 통합 플랫폼 개발 개시",
      type: "확장",
    },
    {
      year: "2024",
      description: "자체 브랜드 Hoid, Medifeed, InYourHeart 동시 론칭",
      type: "창립",
    },
  ];

  // 타임라인 애니메이션 초기화
  useEffect(() => {
    setTimelineVisible(new Array(timelineData.length).fill(false));
  }, [timelineData.length]);

  // Intersection Observer를 사용한 스크롤 애니메이션
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (index >= 0) {
              // 순차적으로 나타나도록 딜레이 적용
              setTimeout(() => {
                setTimelineVisible(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 300); // 300ms씩 순차적으로 나타남
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* 브랜드 메시지 배너 */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandMessageBannerSVG />
        </div>
      </section>
      {/* Company Story Section - 쿠쿠 스타일 스토리텔링 */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-lg text-foreground leading-relaxed space-y-8 max-w-4xl mx-auto">
              <p className="text-2xl font-semibold">
                <span className="text-primary">Feedback</span>은 유통을 중심으로
                <br />
                브랜드 마케팅, 제조, 무역 수출입을 아우르는
                <span className="text-accent"> 종합 커머스 기업</span>입니다.
              </p>

              <p className="text-xl">
                Hoid, Medifeed, InYourHeart, 상생 등 자체 브랜드와 글로벌
                파트너십을 기반으로,
                <br />
                기획부터 제조·유통·브랜딩까지 전 과정을 함께합니다.
              </p>

              <p className="text-lg">
                고객의 삶 속에 스며든 FeedBack의 브랜드 하나하나가 고객 여러분의
                하루를
                <br />
                더욱 편리하고 행복하게 만들 수 있도록 언제나 노력하는 FeedBack이
                되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Full Bleed Background Image + Parallax Scroll */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${peopleImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            고객님의 <span className="text-blue-300">'생활 속 행복'</span>을
            목표로
            <br />
            열정 넘치는 이들이 모인 FeedBack은
          </h3>
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            최고의 제품을 안겨드리기 위해 기술혁신에 끊임없이 노력을 기울이고
            있으며,
            <br />
            이를 위한 연구개발투자 또한 지속적으로 이루어지고 있습니다.
          </p>
        </div>
      </section>
      {/* 경영철학 - 쿠쿠 스타일의 4개 핵심 가치 */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              경영철학
            </h2>
            <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
              FeedBack은 브랜드와 시장을 연결하는 실행 중심의 유통 플랫폼으로서
              <br />
              모든 파트너와 함께 성장하는 상생의 생태계를 구축하고 있습니다.
            </p>
          </div>

          {/* 첫 번째 가치 - 고객·파트너 중심 */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={partnershipImage}
                    alt="파트너십과 협력"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  고객·파트너 중심: '공생'의 유통 모델을 실현합니다
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  FeedBack은 단순히 물건을 사고파는 곳이 아닌,
                  <br />
                  제조사·브랜드·소매처가 함께 성장할 수 있는 유통 생태계를
                  구축합니다.
                  <br />
                  <br />
                  고객사와 파트너의 신뢰를 기반으로 장기 협력과 함께 발전하는
                  구조를 설계하며,
                  <br />
                  <span className="font-semibold text-primary">
                    모두가 지속 가능한 이익을 나누는 상생 플랫폼
                  </span>
                  을 지향합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 두 번째 가치 - 통합 실행력 */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={networkImage}
                    alt="네트워크와 연결"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  통합 실행력으로 브랜드와 시장을 연결합니다
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  단순 유통을 넘어 상품 기획, 브랜딩, 마케팅, 유통 채널을
                  유기적으로 연결합니다.
                  <br />
                  고유한 OEM 역량과 자체 브랜드 경험을 결합하여,
                  <br />
                  브랜드가 시장에서 자리 잡도록 실행 가능한 솔루션을 제공합니다.
                  <br />
                  <br />
                  <span className="font-semibold text-primary">
                    제품력에 브랜딩을 입히고, 브랜딩에 유통을 결합하며,
                    <br />
                    유통에 경험과 콘텐츠를 심는 방식이 FeedBack의 방식
                  </span>
                  입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 세 번째 가치 - 글로벌 경쟁력 */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={globalImage}
                    alt="글로벌 네트워크"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  글로벌 시장에서 경쟁력을 만드는 실행 중심 기업
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  아시아를 기반으로 성장해 온 브랜드에게
                  <br />
                  글로벌 시장 진출 기회를 제공합니다.
                  <br />
                  <br />
                  <span className="font-semibold text-primary">
                    전략적 진출 설계 + 제휴 기반 실행력
                  </span>
                  을 통해
                  <br />
                  브랜드의 세계화를 지원하고,
                  <br />
                  국내외 파트너와의 협업을 통해
                  <br />더 크고 넓은 시장에서 기회를 창출합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 네 번째 가치 - 신뢰 기반 파트너십 */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={trustImage}
                    alt="신뢰와 파트너십"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  신뢰를 통한 장기 파트너십 구축
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  FeedBack의 존재 이유는 파트너와 고객의 신뢰입니다.
                  <br />
                  <br />
                  <span className="font-semibold text-primary">
                    검증된 품질과 안정적인 공급, 투명한 유통 프로세스,
                    <br />
                    정직한 사후 서비스 체계
                  </span>
                  를 통해
                  <br />
                  파트너가 오래 함께할 수 있는 신뢰 기반을 만듭니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline - 이미지 스타일 레이아웃 */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16">
            <div className="w-4 h-4 bg-blue-400 rounded-full mr-6"></div>
            <h2 className="text-5xl font-bold text-blue-300">연혁</h2>
          </div>

          <div className="relative ml-2">
            {/* 수직 라인 */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-400/30"></div>
            {/* 애니메이션 라인 */}
            <div 
              className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-300 transition-all duration-2000 ease-out"
              style={{
                height: timelineVisible.filter(v => v).length > 0 ? `${(timelineVisible.filter(v => v).length / timelineData.length) * 100}%` : '0%'
              }}
            ></div>

            {timelineData.map((item, index) => (
              <div 
                key={index} 
                ref={(el) => (timelineRefs.current[index] = el)}
                data-index={index}
                className={`relative mb-16 last:mb-0 transition-all duration-1000 ease-out ${
                  timelineVisible[index] 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-[-50px]'
                }`}
              >
                {/* 타임라인 도트 */}
                <div className="absolute left-0 transform -translate-x-1/2">
                  <div className={`w-3 h-3 bg-white rounded-full border-2 border-blue-400 transition-all duration-700 ease-out ${
                    timelineVisible[index] 
                      ? 'scale-100 bg-blue-400' 
                      : 'scale-0 bg-white'
                  }`}></div>
                </div>

                {/* 연도와 내용 */}
                <div className={`ml-8 transition-all duration-1000 ease-out ${
                  timelineVisible[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.year}
                  </h3>
                  <div className="text-gray-300 leading-relaxed">
                    <p className="text-lg flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      {item.description}
                    </p>
                    {item.type && (
                      <div className="mt-2">
                        <Badge
                          variant={
                            item.type === "창립"
                              ? "default"
                              : item.type === "확장"
                                ? "secondary"
                                : "outline"
                          }
                          className={`bg-blue-500/20 text-blue-300 border-blue-400 transition-all duration-1000 ease-out ${
                            timelineVisible[index] 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-75'
                          }`}
                        >
                          {item.type}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-500/10 border border-blue-400/30 p-8 rounded-2xl text-center">
            <p className="text-lg text-blue-100 leading-relaxed font-medium">
              피드백은 제품 출시와 동시에 국내외 홈쇼핑, 이커머스, 도매 채널과의
              연계를 통해
              <br />
              빠르게 시장을 확장하고 있습니다.
            </p>
          </div>
        </div>
      </section>
      {/* CEO Message - 쿠쿠 스타일 대형 메시지 */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <blockquote className="text-3xl font-bold text-primary mb-8">
              "고객의 행복과 글로벌 파트너십을 최우선으로 생각합니다."
            </blockquote>
            <h2 className="text-4xl font-bold text-foreground mb-8">
              CEO 인사말
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* CEO 프로필 영역 */}
              <div className="lg:w-1/3 bg-gradient-to-br from-primary to-accent p-12 text-white text-center flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">송해민</h3>
                <p className="text-lg opacity-90">(주)피드백 대표</p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-80">
                    "브랜드와 시장을 연결하는
                    <br />
                    플랫폼 기업으로 성장"
                  </p>
                </div>
              </div>

              {/* 메시지 영역 */}
              <div className="lg:w-2/3 p-12">
                <div className="space-y-6 text-foreground leading-relaxed">
                  <p className="text-lg">
                    안녕하세요. (주)피드백 대표 송해민입니다.
                  </p>

                  <p className="text-lg">
                    저희 피드백은 빠르게 변화하는 글로벌 유통 시장 속에서,
                    브랜드와 시장의 연결자이자 실행자로서 새로운 유통 구조를
                    제시하고 있습니다.
                  </p>

                  <p className="text-lg">
                    단순히 '물건을 파는 회사'가 아닌, 브랜드를 함께 키우고
                    시장에 안착시키는 파트너로서 제조사, 유통사, 소비자 모두가
                    만족하는 구조를 만들기 위해 노력하고 있습니다.
                  </p>

                  <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                    <p className="text-lg font-semibold text-primary">
                      제품력에 브랜딩을 더하고, 브랜딩에 유통망을 연결하며,
                      유통에 콘텐츠와 경험을 심는 것. 이것이 피드백의
                      방식입니다.
                    </p>
                  </div>

                  <p className="text-lg">
                    앞으로도 국내외 파트너 여러분과 함께 더 크고 넓은 시장에서
                    기회를 창출하는 기업이 되겠습니다. 감사합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Organization Chart */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            조직도
          </h2>

          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-full overflow-x-auto border border-border">
              <img
                src={_______}
                alt="피드백 조직도"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              체계적인 조직 구성을 통해 각 분야의 전문성을 바탕으로
              <br />
              고객에게 최고의 서비스를 제공하고 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
