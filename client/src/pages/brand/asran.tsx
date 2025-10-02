import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChefHat,
  Shield,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Thermometer,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import asranMainImg from "@assets/Mask group_1754982638844.jpg";
import asranVideo from "@assets/asran_self_1754985186297.mp4";
import AsranLogo from "@/components/AsranLogo";

export default function AsranPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [, setLocation] = useLocation();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Shield,
      title: "SUS410 스테인리스 스틸",
      description: "최고급 소재로 내구성과 안전성을 보장합니다",
      details: [
        "부식 방지 & 변색 방지",
        "위생적이고 안전한 조리",
        "반영구적 사용 가능",
        "고급스러운 미러 마감",
      ],
    },
    {
      icon: Thermometer,
      title: "3중 바닥구조",
      description: "뛰어난 열전도율로 에너지 효율성 극대화",
      details: [
        "균등한 열 분산",
        "에너지 효율성 극대화",
        "빠른 가열 시간",
        "열 손실 최소화",
      ],
    },
    {
      icon: Zap,
      title: "모든 열원 완벽 호환",
      description: "어떤 주방환경에서도 완벽하게 사용 가능",
      details: ["인덕션 레인지", "가스 레인지", "하이라이트", "전기 레인지"],
    },
  ];

  const productSizes = [
    {
      size: "18cm",
      type: "편수냄비",
      usage: "소용량 요리, 이유식 제조에 최적",
      icon: "👶",
    },
    {
      size: "22cm",
      type: "양수냄비",
      usage: "2-3인 가족 요리에 적합",
      icon: "👥",
    },
    {
      size: "28cm",
      type: "양수냄비",
      usage: "대용량 요리, 대가족 요리에 완벽",
      icon: "👨‍👩‍👧‍👦",
    },
  ];

  const cookingTypes = [
    {
      title: "국물요리",
      description: "깊고 진한 국물 맛 구현",
      icon: "🍲",
    },
    {
      title: "찜 & 조림",
      description: "촉촉하고 부드러운 식감",
      icon: "🥘",
    },
    {
      title: "건강한 조리",
      description: "영양소 보존하는 조리법",
      icon: "🥗",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    [heroRef, featuresRef, testimonialsRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
        (ref.current as HTMLElement).style.opacity = "0";
        (ref.current as HTMLElement).style.transform = "translateY(30px)";
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-black pt-48 pb-48"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={asranVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <AsranLogo
                  className="filter brightness-0 invert"
                  width="300"
                  height="75"
                />
                <p className="text-2xl text-white font-semibold">
                  독일 기술과 합리적 가격을 모두 갖춘 냄비
                </p>
              </div>

              <p className="text-xl text-white/90 leading-relaxed">
                SUS410 스테인리스 스틸과 3중 바닥구조로 뛰어난 열전도율과
                내구성을 자랑합니다. 인덕션과 가스 겸용으로 어떤 주방환경에서도
                완벽하게 사용 가능한 프리미엄 냄비입니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.asrankitchen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] px-8 py-4 text-lg font-semibold"
                  >
                    ASRAN 홈페이지 가기
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        ref={featuresRef}
        className="py-20 bg-gray-50"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition:
            "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ASRAN만의 특별한 기술
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              독일의 정밀한 기술력과 한국의 실용성이 만나 탄생한 프리미엄
              주방용품
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white"
                onClick={() => setActiveFeature(index)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#0F4C82] rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section
        ref={testimonialsRef}
        className="py-20 bg-[#0F4C82]"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition:
            "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              실제 구매고객들의 생생한 후기
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.87/5.0</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "가성비 너무 혜자네요! 이 가격에 이런 품질의 냄비를 만날 수 있다니 정말 만족스럽습니다.",
                author: "김○○님",
              },
              {
                text: "냄비의 무게에 놀랐다. 엄청 가볍다! 가벼운 무게 덕분에 손목이 아프지 않고 편하게 요리할 수 있어요.",
                author: "박○○님",
              },
              {
                text: "이유식 만들 때 편수냄비가 너무 유용하게 사용되고 있어요. 열 전도도 빠르고 청소도 쉬워서 좋습니다.",
                author: "이○○님",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur border-white/20"
              >
                <CardContent className="p-6">
                  <p className="text-white/90 mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="text-white/70 font-medium">- {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ASRAN 냄비와 함께하는 성공적인 요리 라이프
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "요리가 즐거워집니다",
                description:
                  "균등한 열 전도로 실패 없는 요리가 가능하여 요리에 대한 자신감이 생깁니다.",
              },
              {
                icon: Clock,
                title: "요리 시간이 단축됩니다",
                description:
                  "빠른 가열 시간과 효율적인 열 분산으로 요리 시간을 대폭 줄일 수 있습니다.",
              },
              {
                icon: Award,
                title: "주방이 더 아름다워집니다",
                description:
                  "고급스러운 미러 마감과 세련된 디자인으로 주방 인테리어가 한층 업그레이드됩니다.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#0F4C82] rounded-xl mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F4C82] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              독일 기술력과 만나는
              <span className="block">프리미엄 요리 경험</span>
            </h2>
            <p className="text-lg lg:text-xl mb-12 opacity-90 leading-relaxed">
              ASRAN과 함께 새로운 요리의 세계를 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                onClick={() => setLocation("/contact")}
              >
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
