import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import pot from "@assets/pot.jpeg";
import homeshoppingImage from "@assets/s1.jpeg";
import pan from "@assets/pan.jpg";
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
  Calendar,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import asranMainImg from "@assets/Mask group_1754982638844.jpg";
import asranVideo from "@assets/asran_self_1754985186297.mp4";
import AsranLogo from "@/components/AsranLogo";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AsranPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Shield,
      title: t("asran.feature1.title"),
      description: t("asran.feature1.description"),
      details: [
        t("asran.feature1.detail1"),
        t("asran.feature1.detail2"),
        t("asran.feature1.detail3"),
        t("asran.feature1.detail4"),
      ],
    },
    {
      icon: Thermometer,
      title: t("asran.feature2.title"),
      description: t("asran.feature2.description"),
      details: [
        t("asran.feature2.detail1"),
        t("asran.feature2.detail2"),
        t("asran.feature2.detail3"),
        t("asran.feature2.detail4"),
      ],
    },
    {
      icon: Zap,
      title: t("asran.feature3.title"),
      description: t("asran.feature3.description"),
      details: [
        t("asran.feature3.detail1"),
        t("asran.feature3.detail2"),
        t("asran.feature3.detail3"),
        t("asran.feature3.detail4"),
      ],
    },
  ];

  const productSizes = [
    {
      size: "18cm",
      type: t("asran.size1.title"),
      usage: t("asran.size1.usage"),
      icon: "👶",
    },
    {
      size: "22cm",
      type: t("asran.size2.title"),
      usage: t("asran.size2.usage"),
      icon: "👥",
    },
    {
      size: "28cm",
      type: t("asran.size3.title"),
      usage: t("asran.size3.usage"),
      icon: "👨‍👩‍👧‍👦",
    },
  ];

  const cookingTypes = [
    {
      title: t("asran.cooking1.title"),
      description: t("asran.cooking1.description"),
      icon: "🍲",
    },
    {
      title: t("asran.cooking2.title"),
      description: t("asran.cooking2.description"),
      icon: "🥘",
    },
    {
      title: t("asran.cooking3.title"),
      description: t("asran.cooking3.description"),
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
                  {t("asran.hero.tagline")}
                </p>
              </div>

              <p className="text-xl text-white/90 leading-relaxed">
                {t("asran.hero.description")}
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
                    {t("asran.hero.cta")}
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
              {t("asran.features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("asran.features.subtitle")}
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

      {/* 냄비3종, 압력솥, 프라이팬3종 */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={pot}
                  alt={productSizes[0].type}
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
                GOOD 01
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 leading-tight">
                {productSizes[0].type}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {productSizes[0].usage}
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("asran.feature1.title")} · {t("asran.feature2.title")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("asran.feature3.title")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
                GOOD 02
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 leading-tight">
                {productSizes[1].type}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {productSizes[1].usage}
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("asran.feature2.detail1")} ·{" "}
                    {t("asran.feature2.detail2")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("asran.feature2.detail3")}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <img
                  src={homeshoppingImage}
                  alt={productSizes[1].type}
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={pan}
                  alt={productSizes[2].type}
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
                GOOD 03
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 leading-tight">
                {productSizes[2].type}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {productSizes[2].usage}
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("asran.feature3.detail1")} ·{" "}
                    {t("asran.feature3.detail2")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("asran.feature3.detail3")}
                  </span>
                </div>
              </div>
            </div>
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
              {t("asran.reviews.title")}
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
                text: t("asran.review1"),
                author: t("asran.review1.author"),
              },
              {
                text: t("asran.review2"),
                author: t("asran.review2.author"),
              },
              {
                text: t("asran.review3"),
                author: t("asran.review3.author"),
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
              {t("asran.cta.subtitle")} ASRAN
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: t("asran.benefit1.title"),
                description: t("asran.benefit1.description"),
              },
              {
                icon: Clock,
                title: t("asran.benefit2.title"),
                description: t("asran.benefit2.description"),
              },
              {
                icon: Award,
                title: t("asran.benefit3.title"),
                description: t("asran.benefit3.description"),
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
              {t("asran.cta.title")}
              <span className="block">{t("asran.cta.subtitle")}</span>
            </h2>
            <p className="text-lg lg:text-xl mb-12 opacity-90 leading-relaxed">
              {t("asran.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                onClick={() => setLocation("/contact")}
              >
                {t("asran.cta.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
