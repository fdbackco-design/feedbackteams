import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import newsData from "@/data/news.json";

import flow_2025_04_17_193718625 from "@assets/flow_2025-04-17_193718625.png";

import ______1 from "@assets/호이드1.jpg";

const categoryColors: Record<string, string> = {
  "보도자료": "bg-secondary text-white",
  "브랜드뉴스": "bg-primary text-white", 
  "기업소식": "bg-accent text-white"
};

export default function Article() {
  const [location] = useLocation();
  const articleId = location.split("/").pop();
  
  const article = newsData.find((_, index) => index.toString() === articleId);
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">기사를 찾을 수 없습니다</h1>
          <Link href="/news">
            <Button>뉴스 목록으로 돌아가기</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              뉴스 목록으로 돌아가기
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge className={categoryColors[article.category] || "bg-gray-500 text-white"}>
              {article.category}
            </Badge>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
        </div>
      </div>
      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={______1}
            alt={article.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {article.content ? (
            <div 
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }}
            />
          ) : (
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>{article.summary}</p>
              <p className="text-gray-500 italic">전문 기사 내용이 곧 업데이트될 예정입니다.</p>
            </div>
          )}
        </div>
        
        {/* Back to News */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/news">
            <Button size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              뉴스 목록으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}