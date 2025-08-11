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

const filterOptions = [
  { value: "all", label: "전체" },
  { value: "press", label: "보도자료" },
  { value: "company", label: "기업소식" },
  { value: "brand", label: "브랜드뉴스" },
];

const categoryColors: Record<string, string> = {
  보도자료: "bg-secondary text-white",
  브랜드뉴스: "bg-primary text-white",
  기업소식: "bg-accent text-white",
};

export default function News() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleNews, setVisibleNews] = useState(6);

  const filteredNews = newsData.filter(
    (news) =>
      activeFilter === "all" ||
      (activeFilter === "press" && news.category === "보도자료") ||
      (activeFilter === "company" && news.category === "기업소식") ||
      (activeFilter === "brand" && news.category === "브랜드뉴스"),
  );

  const loadMoreNews = () => {
    setVisibleNews((prev) => Math.min(prev + 6, filteredNews.length));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 mt-[150px]">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            뉴스 & 보도자료
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FeedBack의 최신 소식과 주요 성과를 확인해보세요.
            <br />
            언론 보도자료와 기업 뉴스를 한눈에 볼 수 있습니다.
          </p>
        </div>

        {/* News Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-sm">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "ghost"}
                className="mr-2 last:mr-0"
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.slice(0, visibleNews).map((news, index) => {
            const src = resolveNewsThumbnail(news.thumbnail);
            return (
              <Card
                key={index}
                className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
              >
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
                      {news.category}
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
                  <Link
                    href={news.link}
                    className="text-primary font-semibold hover:underline self-start"
                  >
                    전체 기사 읽기 →
                  </Link>
                </CardContent>
              </Card>
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
              더 많은 뉴스 보기
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
