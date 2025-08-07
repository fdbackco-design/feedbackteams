import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target } from "lucide-react";
import timelineData from "@/data/timeline.json";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">회사 소개</h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            피드백은 <span className="font-semibold text-primary">브랜드·의료·기술</span>을 연결해<br />
            아시아를 넘어 세계로 진출합니다.
          </p>
        </div>
        
        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2023</div>
            <div className="text-gray-600">설립년도</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">3</div>
            <div className="text-gray-600">자체 브랜드</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-gray-600">파트너 국가</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-gray-600">병원 제휴</div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">회사 연혁</h2>
          
          <div className="relative">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex-1 ml-8 bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.year}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Badge variant={item.type === "창립" ? "default" : item.type === "확장" ? "secondary" : "outline"}>
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Timeline Line */}
            <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gray-200 -ml-0.5"></div>
          </div>
        </div>
        
        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-primary text-white">
            <CardHeader>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <CardTitle className="text-3xl">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                <strong>아시아 브랜드의 글로벌화</strong><br /><br />
                아시아의 우수한 브랜드와 기술을 세계 시장에 알리고, 
                글로벌 경쟁력을 갖춘 브랜드로 성장시켜 나갑니다.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary text-white">
            <CardHeader>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <CardTitle className="text-3xl">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                <strong>신뢰 기반 유통 및 브랜드 플랫폼 구축</strong><br /><br />
                투명하고 신뢰할 수 있는 유통 시스템을 구축하여 
                브랜드와 소비자 모두에게 가치를 제공합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
