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
  ChefHat,
  Flame,
  Utensils,
  ArrowRight,
  Calendar,
  Star,
  Award,
  Shield,
} from "lucide-react";
import LazyImage from "@/components/LazyImage";
import LazyVideo from "@/components/LazyVideo";
import carvellaLogo from "@/assets/brand/carll.png";
import carvella from "@/assets/brand/car44.png";
import carvellaVideo from "@assets/freepik__cinematic-video-starting-from-the-provided-referen__97177_1759116548781.mp4";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Carvella() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section with Background Image - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <LazyVideo
            src={carvellaVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Back Navigation - Positioned over image */}
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

        {/* Content over image */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-white">
              <div className="mb-8">
                <LazyImage
                  src={carvellaLogo}
                  alt="Carvella 로고"
                  className="h-20 md:h-24 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t("carvella.hero.title")}
                <span className="block text-[#D4AF37]">
                  {t("carvella.hero.subtitle")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                {t("carvella.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.carvellakitchen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C82] px-8 py-4 text-lg font-semibold"
                  >
                    {t("carvella.hero.cta")}
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
            <circle cx="200" cy="100" r="100" fill="#6C2F1E" />
            <circle cx="1000" cy="400" r="150" fill="#D4AF37" />
            <path
              d="M300 300 Q600 100 900 300"
              stroke="#6C2F1E"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
              PREMIUM TECHNOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              {t("carvella.features.title")}
            </h2>
            <div className="w-32 h-1 bg-[#6C2F1E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("carvella.features.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.feature1.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {t("carvella.feature1.description")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.feature2.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {t("carvella.feature2.description")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.feature3.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {t("carvella.feature3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Italian Heritage Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#6C2F1E] to-[#D4AF37] rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">🇮🇹</div>
                    <div className="text-2xl font-bold">ITALY</div>
                    <div className="text-lg opacity-90">
                      Artigianato Italiano
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
                ITALIAN HERITAGE
              </div>
              <h2 className="text-5xl font-bold text-[#000000] mb-8 leading-tight">
                {t("carvella.heritage.title")}
                <span className="block text-[#6C2F1E]">
                  {t("carvella.heritage.subtitle")}
                </span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.heritage.heading")}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {t("carvella.heritage.description")}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#6C2F1E] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("carvella.heritage.point1")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#6C2F1E] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("carvella.heritage.point2")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#6C2F1E] rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">
                    {t("carvella.heritage.point3")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Cooking Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
                PROFESSIONAL COOKING
              </div>
              <h2 className="text-4xl font-bold text-[#000000] mb-6 leading-tight">
                {t("carvella.cooking.title")}
                <span className="block text-[#6C2F1E]">
                  {t("carvella.cooking.subtitle")}
                </span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.cooking.heading")}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {t("carvella.cooking.description")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#6C2F1E] mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("carvella.cooking.lineup")}
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#6C2F1E] mb-2">
                    25
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("carvella.cooking.warranty")}
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#6C2F1E] mb-2">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("carvella.cooking.recommendation")}
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#6C2F1E] mb-2">
                    4.9
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("carvella.cooking.satisfaction")}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl flex items-center justify-center">
                  <LazyImage
                    src={carvella}
                    alt="럭셔리 캐리어 이미지"
                    className="max-h-80 object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Collection */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
              PRODUCT COLLECTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              {t("carvella.collection.title")}
            </h2>
            <div className="w-32 h-1 bg-[#6C2F1E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("carvella.collection.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.collection1.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("carvella.collection1.description")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.collection2.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("carvella.collection2.description")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.collection3.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("carvella.collection3.description")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C2F1E] to-[#5a2719] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {t("carvella.collection4.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("carvella.collection4.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Testimonial Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#6C2F1E]/10 text-[#6C2F1E] rounded-full text-sm font-semibold mb-6">
              CHEF'S CHOICE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              {t("carvella.testimonial.title")}
            </h2>
            <div className="w-32 h-1 bg-[#6C2F1E] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <ChefHat className="w-16 h-16 text-[#6C2F1E] mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{t("carvella.testimonial1")}"
              </p>
              <div className="font-semibold text-[#6C2F1E]">
                {t("carvella.testimonial1.author")}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <ChefHat className="w-16 h-16 text-[#6C2F1E] mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{t("carvella.testimonial2")}"
              </p>
              <div className="font-semibold text-[#6C2F1E]">
                {t("carvella.testimonial2.author")}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <ChefHat className="w-16 h-16 text-[#6C2F1E] mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{t("carvella.testimonial3")}"
              </p>
              <div className="font-semibold text-[#6C2F1E]">
                {t("carvella.testimonial3.author")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#6C2F1E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("carvella.cta.title")}
            <span className="block text-[#D4AF37]">
              {t("carvella.cta.subtitle")}
            </span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t("carvella.cta.description")}
          </p>
        </div>
      </section>
    </div>
  );
}
