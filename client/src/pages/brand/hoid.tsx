import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft,
  CheckCircle,
  Globe,
  ShoppingCart,
  Zap,
  ArrowRight,
  Calendar,
} from "lucide-react";
import HoidLogo from "@/components/HoidLogo";
import LazyVideo from "@/components/LazyVideo";
import { useLanguage } from "@/contexts/LanguageContext";

import flow_2025_04_17_193718625_1754623144595 from "@assets/flow_2025-04-17_193718625_1754623144595.png";
import homeshoppingImage from "@assets/homeshopping_1754639787939.png";
import hoidVideo from "@assets/공기청정기_pc_visual_1760075331444.mp4";

export default function Hoid() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section with Video Background - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <LazyVideo
            src={hoidVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

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
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-white">
              <div className="mb-8">
                <HoidLogo className="h-20 md:h-24" fill="white" />
              </div>
              <h1 className="text-fluid-title break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold maxw-title mb-6">
                {t("hoid.hero.title")}
              </h1>
              <p className="text-fluid-sub break-keep text-pretty leading-relaxed-mobile maxw-body mb-8 opacity-90">
                {t("hoid.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://hoid.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] px-8 py-4 text-lg font-semibold"
                  >
                    {t("hoid.hero.cta")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <circle cx="200" cy="100" r="100" fill="#0F4C82" />
            <circle cx="1000" cy="400" r="150" fill="#000000" />
            <path
              d="M300 300 Q600 100 900 300"
              stroke="#0F4C82"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
              PRODUCT FEATURES
            </div>
            <h2 className="text-fluid-title break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold text-[#000000] maxw-title mx-auto mb-6">
              {t("hoid.features.title")}
            </h2>
            <div className="w-32 h-1 bg-[#0F4C82] mx-auto mb-8"></div>
            <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-600 maxw-body mx-auto">
              {t("hoid.features.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="break-keep text-balance text-pretty leading-tight font-bold text-[#000000] maxw-title mb-4" style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>
                  {t("hoid.feature1.title")}
                </h3>
                <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-600 maxw-body mb-6">
                  {t("hoid.feature1.description")}
                </p>
                
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="break-keep text-balance text-pretty leading-tight font-bold text-[#000000] maxw-title mb-4" style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>
                  {t("hoid.feature2.title")}
                </h3>
                <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-600 maxw-body mb-6">
                  {t("hoid.feature2.description")}
                </p>
                
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="break-keep text-balance text-pretty leading-tight font-bold text-[#000000] maxw-title mb-4" style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>
                  {t("hoid.feature3.title")}
                </h3>
                <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-600 maxw-body mb-6">
                  {t("hoid.feature3.description")}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Global Partnership Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={flow_2025_04_17_193718625_1754623144595}
                  alt="MOU 체결 현장"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
                GLOBAL PARTNERSHIP
              </div>
              <h2 className="text-fluid-title break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold text-[#000000] maxw-title mb-8">
                {t("hoid.partnership.title")}
                <span className="block text-[#0F4C82]">{t("hoid.partnership.subtitle")}</span>
              </h2>

              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-[#0F4C82] text-white rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t("hoid.partnership.date")}
                </div>
                <h3 className="break-keep text-balance text-pretty leading-tight font-bold text-[#000000] maxw-title mb-4" style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>
                  {t("hoid.partnership.mou")}
                </h3>
                <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-600 maxw-body mb-6">
                  {t("hoid.partnership.description")}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("hoid.partnership.point1")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("hoid.partnership.point2")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("hoid.partnership.point3")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Shopping Launch Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
                HOME SHOPPING LAUNCH
              </div>
              <h2 className="text-fluid-title break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold text-[#000000] maxw-title mb-6">
                {t("hoid.homeshopping.title")}
                <span className="block text-[#0F4C82]">{t("hoid.homeshopping.subtitle")}</span>
              </h2>

              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-[#0F4C82] text-white rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t("hoid.homeshopping.date")}
                </div>
                <h3 className="break-keep text-balance text-pretty leading-tight font-bold text-[#000000] maxw-title mb-4" style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>
                  {t("hoid.homeshopping.heading")}
                </h3>
                <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-600 maxw-body mb-6">
                  {t("hoid.homeshopping.description")}
                </p>
              </div>


            </div>
            <div>
              <div className="relative">
                <img
                  src={homeshoppingImage}
                  alt="호이드 홈쇼핑 방송 현장"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Distribution Channels */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-sm font-semibold mb-6">
              DISTRIBUTION CHANNELS
            </div>
            <h2 className="text-fluid-title break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold text-[#000000] maxw-title mx-auto mb-6">
              {t("hoid.channels.title")}
            </h2>
            <div className="w-32 h-1 bg-[#0F4C82] mx-auto mb-8"></div>
            <p className="text-fluid-body break-keep text-pretty leading-relaxed-mobile text-gray-600 maxw-body mx-auto">
              {t("hoid.channels.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("hoid.channel1.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("hoid.channel1.description")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("hoid.channel2.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("hoid.channel2.description")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("hoid.channel3.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("hoid.channel3.description")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("hoid.channel4.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("hoid.channel4.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#0F4C82] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-fluid-title break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold maxw-title mx-auto mb-6">
              {t("hoid.cta.title")}
            </h2>
            <p className="text-fluid-sub break-keep text-pretty leading-relaxed-mobile maxw-body mx-auto mb-12 opacity-90">
              {t("hoid.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-medium"
                onClick={() => setLocation("/contact")}
              >
                {t("hoid.cta.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
