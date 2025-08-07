import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Tags, Globe, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            아시아의 브랜드와 의료를<br />
            <span className="text-secondary">세계와 연결합니다</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            FeedBack은 유통, 브랜드 플랫폼, 글로벌 마케팅을 통해<br />
            아시아를 넘어 세계로 진출합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/service">서비스 둘러보기</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900">
              <Link href="/about">회사 소개</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Summary Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">핵심 서비스</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              유통부터 브랜딩까지, FeedBack의 통합 솔루션으로 글로벌 시장에 진출하세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">유통 및 수출입</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  아시아 전역의 유통망을 통해 효율적인 수출입 서비스를 제공합니다.
                </CardDescription>
                <Link href="/service" className="text-primary font-semibold hover:underline inline-flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service Card 2 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tags className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">브랜드/OEM 운영</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  자체 브랜드 개발부터 OEM 생산까지 브랜드 성장을 위한 종합 솔루션을 제공합니다.
                </CardDescription>
                <Link href="/brand" className="text-primary font-semibold hover:underline inline-flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service Card 3 */}
            <Card className="bg-gray-50 hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">글로벌 마케팅</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 시장 진출을 지원합니다.
                </CardDescription>
                <Link href="/service" className="text-primary font-semibold hover:underline inline-flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Brand Logos Slider */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">우리의 브랜드</h2>
            <p className="text-xl text-gray-600">혁신적인 브랜드를 통해 고객에게 최고의 가치를 전달합니다</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand 1: Hoid */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">Hoid</span>
                </div>
                <CardTitle className="text-2xl">Hoid</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  디자인 가전 브랜드로 청소기, 공기청정기 등 혁신적인 생활가전을 선보입니다.
                </CardDescription>
                <Button className="w-full">
                  브랜드 자세히 보기
                </Button>
              </CardContent>
            </Card>
            
            {/* Brand 2: Medifeed */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">MF</span>
                </div>
                <CardTitle className="text-2xl">Medifeed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  건강기능식품 전문 브랜드로 과학적 연구를 바탕으로 한 제품을 제공합니다.
                </CardDescription>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  브랜드 자세히 보기
                </Button>
              </CardContent>
            </Card>
            
            {/* Brand 3: InYourHeart */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">IYH</span>
                </div>
                <CardTitle className="text-2xl">InYourHeart</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  저자극 스킨케어 브랜드로 민감한 피부를 위한 순한 화장품을 개발합니다.
                </CardDescription>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  브랜드 자세히 보기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
