import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import mozImage from "@/assets/brand/moz.png";
import mozVideo from "@/assets/moz_video.mp4";
import LazyVideo from "@/components/LazyVideo";
import {
  Thermometer,
  Shield,
  Heart,
  Star,
  CheckCircle,
  Moon,
  Zap,
  Award,
  ArrowLeft,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MozPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Thermometer,
      title: t("moz.feature1.title"),
      description: t("moz.feature1.description"),
      details: [
        t("moz.feature1.detail1"),
        t("moz.feature1.detail2"),
        t("moz.feature1.detail3"),
        t("moz.feature1.detail4"),
      ],
    },
    {
      icon: Shield,
      title: t("moz.feature2.title"),
      description: t("moz.feature2.description"),
      details: [
        t("moz.feature2.detail1"),
        t("moz.feature2.detail2"),
        t("moz.feature2.detail3"),
        t("moz.feature2.detail4"),
      ],
    },
    {
      icon: Heart,
      title: t("moz.feature3.title"),
      description: t("moz.feature3.description"),
      details: [
        t("moz.feature3.detail1"),
        t("moz.feature3.detail2"),
        t("moz.feature3.detail3"),
        t("moz.feature3.detail4"),
      ],
    },
  ];

  const productSizes = [
    {
      size: "110×180cm",
      type: t("moz.product1.title"),
      usage: t("moz.product1.description"),
      icon: "🛏️",
    },
    {
      size: "140×180cm",
      type: t("moz.product2.title"),
      usage: t("moz.product2.description"),
      icon: "👥",
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
        className="relative h-screen w-full overflow-hidden"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <LazyVideo
            src={mozVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Back Navigation - Positioned over video */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/brand">
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("브랜드 목록으로 돌아가기")}
            </Button>
          </Link>
        </div>

        {/* Content over video */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl font-bold text-white">
                    MOZ
                  </h1>
                  <p className="text-2xl text-white font-semibold">
                    {t("moz.hero.tagline")}
                  </p>
                </div>

                <p className="text-xl text-white/90 leading-relaxed">
                  {t("moz.hero.description")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#8B7355] px-8 py-4 text-lg font-semibold"
                    onClick={() => setLocation("/contact")}
                  >
                    {t("moz.hero.cta")}
                  </Button>
                </div>
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
              {t("moz.features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("moz.features.subtitle")}
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
                  <div className="flex items-center justify-center w-16 h-16 bg-[#8B7355] rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Product 1: Single */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={mozImage}
                  alt={productSizes[0].type}
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm font-semibold mb-6">
                PRODUCT 01
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 leading-tight">
                {productSizes[0].type}
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {productSizes[0].usage}
              </p>
              <p className="text-md text-gray-500 mb-8">
                {t("moz.product1.size")}: {productSizes[0].size}
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#8B7355] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("moz.feature1.title")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#8B7355] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("moz.feature2.title")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: Double */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm font-semibold mb-6">
                PRODUCT 02
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 leading-tight">
                {productSizes[1].type}
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {productSizes[1].usage}
              </p>
              <p className="text-md text-gray-500 mb-8">
                {t("moz.product2.size")}: {productSizes[1].size}
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#8B7355] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("moz.feature3.title")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#8B7355] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("moz.feature1.title")}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <img
                  src={mozImage}
                  alt={productSizes[1].type}
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section
        ref={testimonialsRef}
        className="py-20 bg-[#8B7355]"
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
              {t("moz.reviews.title")}
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9/5.0</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: t("moz.review1"),
                author: t("moz.review1.author"),
              },
              {
                text: t("moz.review2"),
                author: t("moz.review2.author"),
              },
              {
                text: t("moz.review3"),
                author: t("moz.review3.author"),
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
              {t("moz.benefits.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Moon,
                title: t("moz.benefit1.title"),
                description: t("moz.benefit1.description"),
              },
              {
                icon: Zap,
                title: t("moz.benefit2.title"),
                description: t("moz.benefit2.description"),
              },
              {
                icon: Award,
                title: t("moz.benefit3.title"),
                description: t("moz.benefit3.description"),
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#8B7355] rounded-xl mx-auto mb-6">
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
      <section className="py-20 bg-[#8B7355] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t("moz.cta.title")}
            </h2>
            <p className="text-lg lg:text-xl mb-12 opacity-90 leading-relaxed">
              {t("moz.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#8B7355] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                onClick={() => setLocation("/contact")}
              >
                {t("moz.cta.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
