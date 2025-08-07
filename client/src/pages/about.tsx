import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, Users, Globe } from "lucide-react";
import organizationChart from "@assets/organizationChart_1754563135776.png";

export default function About() {
  const timelineData = [
    { year: "2024", description: "자체 브랜드 Hoid, Medifeed, InYourHeart 동시 론칭", type: "창립" },
    { year: "2025.01", description: "자회사 상생메디컬 설립 및 통합 플랫폼 개발 개시", type: "확장" },
    { year: "2025.04", description: "Hoid 1세대 공기청정기 출시 (3-in-1 살균 기술 탑재)", type: "제품출시" },
    { year: "2025.08", description: "Hoid 무선 청소기 출시", type: "제품출시" },
    { year: "2025.09", description: "Hoid 2세대 공기청정기 국내외 동시 론칭 (홈쇼핑 입점 확장)", type: "확장" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-8">회사 소개</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              유통에서 브랜드까지, 한국의 가치를 세계로 연결합니다
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">회사개요</h2>
          <div className="text-lg text-foreground leading-relaxed space-y-6">
            <p>
              (주)피드백(FeedBack)은 유통을 중심축으로 브랜드 마케팅, OEM(전자기기·건강기능식품), 무역 수출입까지 아우르는 종합 커머스 기업입니다.
            </p>
            <p>
              단순한 유통 중개를 넘어 브랜드의 탄생부터 글로벌 확장까지 전 과정을 함께 설계하고 실행합니다.
            </p>
            <p>
              저희는 자체 브랜드를 보유하고 직접 제조 및 유통하며, 동시에 국내외 파트너 브랜드와의 협업을 통해 B2B·B2C 전 채널에서 성과를 창출하고 있습니다.
            </p>
            <p className="text-accent font-semibold">
              FeedBack은 소매처에게는 신뢰할 수 있는 제품 공급처, 브랜드에게는 판매 채널과 마케팅을 제공하는 파트너입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">주요 사업영역</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">B2B 유통</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">홈쇼핑, 쇼핑몰, 도매망, 셀러 공급</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">B2C 유통</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">브랜드 자사몰, 네이버, 오픈마켓, SNS 마케팅</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">OEM/ODM 사업</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">전자기기, 헬스케어, 뷰티 제품 전문 제조</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">수출입 무역</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">중국·동남아 제조사와의 독점 계약 및 수입</p>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl">브랜드 개발 및 마케팅</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">콘텐츠, 광고, 크리에이터 연계까지 자체 인력 운영</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <CardTitle className="text-3xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-4">유통에서 브랜드까지, 한국의 가치를 세계로 연결합니다</p>
                <p className="leading-relaxed">
                  우리는 단순한 공급자나 수요자를 넘어, 브랜드와 시장을 연결하는 '플랫폼 기업'으로 성장하고자 합니다.
                  피드백은 아시아에서 성장한 브랜드가 세계에서 경쟁력을 가질 수 있도록 상품력 + 브랜딩 + 유통 채널을 결합한 솔루션을 제공합니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent text-accent-foreground">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <CardTitle className="text-3xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-4">브랜드, 제조사, 소매처가 함께 성장하는 구조를 만듭니다</p>
                <p className="leading-relaxed">
                  브랜드에는 글로벌 시장 진출 기회 제공, 소매처에는 검증된 제품의 안정적 공급, 
                  파트너 모두가 신뢰와 이익을 함께 나누는 유통 생태계 구축
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">연혁</h2>
          
          <div className="relative">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex-1 ml-8 bg-muted rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.year}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
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
            <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-border -ml-0.5"></div>
          </div>
          
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-foreground leading-relaxed">
              피드백은 제품 출시와 동시에 국내외 홈쇼핑, 이커머스, 도매 채널과의 연계를 통해 빠르게 시장을 확장하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">CEO 인사말</h2>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* CEO Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-semibold text-foreground">송해민</p>
                    <p className="text-sm text-muted-foreground">(주)피드백 대표</p>
                  </div>
                </div>
                
                {/* CEO Message */}
                <div className="flex-1">
                  <blockquote className="text-xl font-semibold text-accent mb-6 text-center md:text-left">
                    "고객의 행복과 글로벌 파트너십을 최우선으로 생각합니다."
                  </blockquote>
                  
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>안녕하세요. (주)피드백 대표 송해민입니다.</p>
                    
                    <p>
                      저희 피드백은 빠르게 변화하는 글로벌 유통 시장 속에서, 브랜드와 시장의 연결자이자 실행자로서 새로운 유통 구조를 제시하고 있습니다.
                    </p>
                    
                    <p>
                      단순히 '물건을 파는 회사'가 아닌, 브랜드를 함께 키우고 시장에 안착시키는 파트너로서 
                      제조사, 유통사, 소비자 모두가 만족하는 구조를 만들기 위해 노력하고 있습니다.
                    </p>
                    
                    <p className="font-semibold text-accent">
                      제품력에 브랜딩을 더하고, 브랜딩에 유통망을 연결하며, 유통에 콘텐츠와 경험을 심는 것. 
                      이것이 피드백의 방식입니다.
                    </p>
                    
                    <p>
                      앞으로도 국내외 파트너 여러분과 함께 더 크고 넓은 시장에서 기회를 창출하는 기업이 되겠습니다. 
                      감사합니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">조직도</h2>
          
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-full overflow-x-auto">
              <img 
                src={organizationChart} 
                alt="피드백 조직도" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
