import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Heart, Globe, Smartphone } from "lucide-react";
import SangsaengLogo from "@/components/SangsaengLogo";
import medicalVideo from "@assets/medical_1754647118451.mp4";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Sangsaeng() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={medicalVideo}
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Back Navigation */}
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
            <div className="max-w-4xl text-white">
              <div className="mb-8">
                <SangsaengLogo className="h-20 md:h-24" fill="white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t("sangsaeng.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                {t("sangsaeng.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://sangsaenglife.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] px-8 py-4 text-lg font-semibold"
                  >
                    {t("sangsaeng.hero.cta")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Portfolio Section */}
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
              {t("sangsaeng.services.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              {t("sangsaeng.services.title")}
            </h2>
            <div className="w-32 h-1 bg-[#0F4C82] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("sangsaeng.services.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Medical */}
            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-2 text-center">
                  {t("sangsaeng.medical.title")}
                </h3>
                <p className="text-gray-600 mb-6 text-center text-base">
                  {t("sangsaeng.medical.subtitle")}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
                  {t("sangsaeng.medical.description")}
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-3">
                    <ItemDot text={t("sangsaeng.medical.benefit1")} />
                    <ItemDot text={t("sangsaeng.medical.benefit2")} />
                    <ItemDot text={t("sangsaeng.medical.benefit3")} />
                    <ItemDot text={t("sangsaeng.medical.benefit4")} />
                  </div>
                </div>
              </div>
            </div>

            {/* Platform */}
            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-2 text-center">
                  {t("sangsaeng.platform.title")}
                </h3>
                <p className="text-gray-600 mb-6 text-center text-base">
                  {t("sangsaeng.platform.subtitle")}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
                  {t("sangsaeng.platform.description")}
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-3">
                    <ItemDot text={t("sangsaeng.platform.benefit1")} />
                    <ItemDot text={t("sangsaeng.platform.benefit2")} />
                    <ItemDot text={t("sangsaeng.platform.benefit3")} />
                    <ItemDot text={t("sangsaeng.platform.benefit4")} />
                  </div>
                </div>
              </div>
            </div>

            {/* Branding */}
            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C82] to-[#1a5c94] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-2 text-center">
                  {t("sangsaeng.branding.title")}
                </h3>
                <p className="text-gray-600 mb-6 text-center text-base">
                  {t("sangsaeng.branding.subtitle")}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
                  {t("sangsaeng.branding.description")}
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-3">
                    <ItemDot text={t("sangsaeng.branding.benefit1")} />
                    <ItemDot text={t("sangsaeng.branding.benefit2")} />
                    <ItemDot text={t("sangsaeng.branding.benefit3")} />
                    <ItemDot text={t("sangsaeng.branding.benefit4")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0F4C82] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t("sangsaeng.cta.title1")}
              <span className="block">{t("sangsaeng.cta.title2")}</span>
            </h2>
            <p className="text-lg lg:text-xl mb-12 opacity-90 leading-relaxed">
              {t("sangsaeng.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                onClick={() => setLocation("/contact")}
              >
                {t("sangsaeng.cta.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* 작은 점 아이템 컴포넌트 */
function ItemDot({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <div className="w-2 h-2 bg-[#0F4C82] rounded-full mr-3"></div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}
