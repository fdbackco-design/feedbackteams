import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import newsData from "@/data/news.json";
import { resolveNewsThumbnail, FALLBACK } from "@/assets/news";
import { useLanguage } from "@/contexts/LanguageContext";

export default function News() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleNews, setVisibleNews] = useState(6);

  const filterOptions = [
    { value: "all", label: t("news.filter.all") },
    { value: "press", label: t("news.filter.press") },
    { value: "company", label: t("news.filter.company") },
    { value: "brand", label: t("news.filter.brand") },
  ];

  const getCategoryKey = (category: string) => {
    const categoryMap: Record<string, string> = {
      "보도자료": "press",
      "기업소식": "company",
      "브랜드뉴스": "brand",
    };
    return categoryMap[category] || category;
  };

  const categoryColors: Record<string, string> = {
    "보도자료": "bg-secondary text-white",
    "브랜드뉴스": "bg-primary text-white",
    "기업소식": "bg-accent text-white",
  };

  const filteredNews = newsData.filter(
    (news) =>
      activeFilter === "all" || activeFilter === getCategoryKey(news.category)
  );

  const loadMoreNews = () => {
    setVisibleNews((prev) => Math.min(prev + 6, filteredNews.length));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 mt-16 sm:mt-20 mobile-padding">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t("news.title")}
          </h1>
          <div className="w-16 sm:w-24 h-0.5 bg-[#0F4C82] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("news.description")}
          </p>
        </div>

        {/* News Filter - Mobile Optimized */}
        <div className="mb-8 sm:mb-12 mobile-padding">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant="ghost"
                className={`text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-3 tap-target rounded-full shadow-sm border transition-all duration-200 ${
                  activeFilter === option.value 
                    ? "bg-[#0F4C82] text-white border-[#0F4C82] hover:bg-[#0F4C82]/90" 
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-[#0F4C82]"
                }`}
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 mobile-padding">
          {filteredNews.slice(0, visibleNews).map((news, index) => {
            const src = resolveNewsThumbnail(news.thumbnail);
            return (
              <Link
                key={index}
                href={news.link}
                className="block transition-transform hover:scale-[1.02]"
                onClick={() => {
                  // Scroll to top when navigating to external link
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Card className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full cursor-pointer">
                  <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    <img
                      src={src}
                      alt={news.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = FALLBACK;
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        className={
                          categoryColors[news.category] ||
                          "bg-gray-500 text-white"
                        }
                      >
                        {t(`news.category.${getCategoryKey(news.category)}`)}
                      </Badge>
                      <time className="text-gray-500 text-sm">{news.date}</time>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 h-[3.5rem] leading-tight">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between pt-0">
                    <CardDescription className="text-gray-600 mb-6 line-clamp-3 h-[4.5rem] leading-relaxed">
                      {news.summary}
                    </CardDescription>
                    <div className="text-primary font-semibold self-start">
                      {t("news.readMore")} →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleNews < filteredNews.length && (
          <div className="text-center">
            <Button
              size="lg"
              onClick={loadMoreNews}
              className="px-8 py-4 text-lg font-semibold"
            >
              {t("news.loadMore")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
