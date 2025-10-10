import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "KR" | "EN";

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Translation dictionary
const translations = {
  KR: {
    // Navigation
    "nav.home": "회사소개",
    "nav.services": "서비스",
    "nav.brands": "브랜드",
    "nav.news": "뉴스",
    "nav.contact": "문의하기",

    // Hero Section
    "hero.title": "브랜드와 시장을 연결하는",
    "hero.subtitle": "유통 플랫폼, FEEDBACK",
    "hero.description": "유통·브랜드·마케팅·제조가 하나로 연결되는 상생 플랫폼",
    "hero.cta.consultation": "서비스 둘러보기",
    "hero.cta.proposal": "소개 영상 보기",

    // Services Section
    "services.title": "서비스",
    "services.medical.title": "의료관광 중개업",
    "services.medical.description":
      "한국의 우수한 의료진과 해외 환자를 연결하는 전문 중개 서비스를 제공합니다.",
    "services.app.title": "다국어 앱 개발",
    "services.app.description":
      "글로벌 시장을 타겟으로 한 모바일 애플리케이션 개발 및 현지화 서비스를 제공합니다.",
    "services.brand.title": "브랜드 유통",
    "services.brand.description":
      "아시아 지역 브랜드의 글로벌 진출을 위한 유통 및 마케팅 솔루션을 제공합니다.",
    "services.consulting.title": "마케팅 컨설팅",
    "services.consulting.description":
      "시장 분석부터 브랜딩까지, 종합적인 마케팅 전략 수립을 지원합니다.",

    // Additional Services
    "services.distribution.title": "글로벌 유통/물류",
    "services.distribution.description":
      "아시아 유통망 구축과 수출입 통관 대행, 물류 최적화를 통해 글로벌 시장 진출을 지원합니다.",
    "services.distribution.features.0": "아시아 유통망 구축",
    "services.distribution.features.1": "수출입 통관 대행",
    "services.distribution.features.2": "물류 최적화 솔루션",
    "services.manufacturing.title": "자체 브랜드 제조 (OEM)",
    "services.manufacturing.description":
      "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다.",
    "services.manufacturing.features.0": "4개 자체 브랜드 운영",
    "services.manufacturing.features.1": "OEM/ODM 제조",
    "services.manufacturing.features.2": "품질관리 시스템",
    "services.marketing.title": "글로벌 마케팅/브랜딩",
    "services.marketing.description":
      "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다.",
    "services.marketing.features.0": "홈쇼핑 연계 마케팅",
    "services.marketing.features.1": "디지털 마케팅",
    "services.marketing.features.2": "글로벌 진출 전략",
    "services.medical.features.0": "메디컬 투어리즘",
    "services.medical.features.1": "병원 네트워크",
    "services.medical.features.2": "다국어 플랫폼",
    "services.app.features.0": "의료/케어 통합 앱",
    "services.app.features.1": "다국어 지원",
    "services.app.features.2": "실시간 상담",

    // Brands Section
    "brands.hoid.category": "미니멀 가전 브랜드",
    "brands.hoid.slogan": "공기 속까지 바꾸는 디자인",
    "brands.hoid.description":
      "공기청정기, 제습기 등 미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트 가전 브랜드입니다.",
    "brands.hoid.products.0": "공기청정기",
    "brands.hoid.products.1": "제습기",
    "brands.hoid.products.2": "3-in-1 기술",
    "brands.hoid.products.3": "HEPA14 필터",
    "brands.medifeed.category": "기능성 영양제 브랜드",
    "brands.medifeed.slogan": "매일을 지키는 작은 습관",
    "brands.medifeed.description":
      "잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 건강 솔루션을 제공합니다.",
    "brands.medifeed.products.0": "잇몸 건강",
    "brands.medifeed.products.1": "눈 건강",
    "brands.medifeed.products.2": "기능성 영양제",
    "brands.medifeed.products.3": "GMP 인증",
    "brands.inyourheart.category": "감성 스킨케어 브랜드",
    "brands.inyourheart.slogan": "피부에 감성을 입히다",
    "brands.inyourheart.description":
      "클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 프리미엄 스킨케어 브랜드입니다.",
    "brands.inyourheart.products.0": "클린 포뮬러",
    "brands.inyourheart.products.1": "감성 패키지",
    "brands.inyourheart.products.2": "글로벌 K-뷰티",
    "brands.inyourheart.products.3": "세라마이드",
    "brands.sangsaeng.category": "의료관광 플랫폼",
    "brands.sangsaeng.slogan":
      "WE CONNECT KOREAN MEDICAL SERVICES TO THE WORLD",
    "brands.sangsaeng.description":
      "메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한 의료 서비스를 전 세계에 연결하는 종합 의료 플랫폼입니다.",
    "brands.sangsaeng.products.0": "의료관광",
    "brands.sangsaeng.products.1": "헬스케어 플랫폼",
    "brands.sangsaeng.products.2": "다국어 앱",
    "brands.sangsaeng.products.3": "병원 네트워크",
    "brands.lineup.category": "브랜드 라인업",
    "brands.lineup.slogan": "기술, 디자인, 그리고 일상의 편리함을 잇다.",
    "brands.lineup.description":
      "피드백은 생활가전, 프리미엄 주방, 여행, 리빙 브랜드를 통해 일상을 더 나은 경험으로 만드는 기술과 디자인을 제공합니다.",
    "brands.asran.category": "프리미엄 주방용품",
    "brands.asran.slogan": "독일 기술과 합리적 가격을 모두 갖춘 냄비",
    "brands.asran.description":
      "SUS410 스테인리스 스틸과 3중 바닥구조로 뛰어난 열전도율과 내구성을 자랑하는 프리미엄 주방용품 브랜드입니다.",
    "brands.asran.products.0": "SUS410 스테인리스 스틸",
    "brands.asran.products.1": "3중 바닥구조",
    "brands.asran.products.2": "인덕션 & 가스 겸용",
    "brands.asran.products.3": "프리미엄 마감",
    "brands.laceras.category": "프랑스 럭셔리 캐리어 브랜드",
    "brands.laceras.slogan": "전통과 모던이 만나는 프렌치 럭셔리 트래블",
    "brands.laceras.description":
      "프랑스의 장인정신과 현대적 세련미를 결합한 럭셔리 캐리어 브랜드입니다. 폴리카보네이트 하드셸, 정교한 마감과 균형 잡힌 디자인으로 비즈니스부터 라그주어리 여행까지 완벽한 트래블 솔루션을 제안합니다.",
    "brands.laceras.products.0": "하드셸 캐리어",
    "brands.laceras.products.1": "캐리온",
    "brands.laceras.products.2": "TSA 락",
    "brands.laceras.products.3": "360° 휠",
    "brands.carvella.category": "이탈리아 프리미엄 주방용품",
    "brands.carvella.slogan": "이탈리아 장인의 정밀함, 당신의 주방으로",
    "brands.carvella.description":
      "이탈리아 전통 장인정신으로 완성한 프리미엄 쿠킹웨어 브랜드입니다. 고급 스테인리스와 다층 구조로 뛰어난 열전도와 내구성을 갖추고, 인덕션부터 가스레인지까지 완벽 호환됩니다.",
    "brands.carvella.products.0": "프리미엄 냄비",
    "brands.carvella.products.1": "프라이팬",
    "brands.carvella.products.2": "멀티 압력뚜껑",
    "brands.carvella.products.3": "멀티 호환 열원",

    // Common UI
    "ui.view_brand_detail": "브랜드 자세히 보기",
    "ui.visit_website": "브랜드 홈페이지 가기",

    // B2B2C Section
    "b2b2c.header.title": "제조사부터 소비자까지",
    "b2b2c.header.subtitle": "완���한 유통 생태계를 구축합니다.",
    "b2b2c.b2b.title": "B2B 제조사",
    "b2b2c.b2b.description":
      "품질 높은 제품을 생산하는 제조사와 전략적 파트너십을 구축합니다",
    "b2b2c.b2b.feature1": "전문 제조 파트너",
    "b2b2c.b2b.feature2": "품질 관리 시스템",
    "b2b2c.b2b.feature3": "OEM/ODM 생산",
    "b2b2c.b2b.feature1_short": "전문 제조",
    "b2b2c.b2b.feature2_short": "품질 관리",
    "b2b2c.b2b.feature3_short": "OEM/ODM",
    "b2b2c.arrow1": "유통 연결",
    "b2b2c.hub.title": "FeedBack 유통 허브",
    "b2b2c.hub.description":
      "전국·글로벌 유통망을 통해 제품을 소비자에게 전달합니다",
    "b2b2c.hub.feature1": "전국 유통망",
    "b2b2c.hub.feature2": "물류 최적화",
    "b2b2c.hub.feature3": "브랜드 마케팅",
    "b2b2c.arrow2": "소비자 전달",
    "b2b2c.b2c.title": "B2C 소비자",
    "b2b2c.b2c.description":
      "다양한 채널을 통해 소비자에게 최고의 제품과 서비스를 제공합니다",
    "b2b2c.b2c.feature1": "온라인·오프라인",
    "b2b2c.b2c.feature2": "홈쇼핑 연계",
    "b2b2c.b2c.feature3": "글로벌 진출",
    "b2b2c.summary.title": "완전한 유통 생태계, 피드백",
    "b2b2c.summary.description":
      "제조사의 우수한 제품이 소비자에게 성공적으로 전달될 수 있도록, 피드백은 전체 유통 과정을 설계하고 최적화합니다.",

    // News Section
    "news.title": "뉴스 & 보도자료",
    "news.description":
      "FeedBack의 최신 소식과 주요 성과를 확인해보세요. 언론 보도자료와 기업 뉴스를 한눈에 볼 수 있습니다.",
    "news.filter.all": "전체",
    "news.filter.press": "보도자료",
    "news.filter.company": "기업소식",
    "news.filter.brand": "브랜드뉴스",
    "news.category.press": "보도자료",
    "news.category.company": "기업소식",
    "news.category.brand": "브랜드뉴스",
    "news.readMore": "전체 기사 읽기",
    "news.loadMore": "더 많은 뉴스 보기",
    "news.back_to_list": "뉴스 목록으로 돌아가기",
    "news.coming_soon": "전문 기사 내용이 곧 업데이트될 예정입니다.",
    "news.category.보도자료": "보도자료",
    "news.category.기업소식": "기업소식",
    "news.category.브랜드뉴스": "브랜드뉴스",
    "news.0.date": "2025.08.11",
    "news.0.title":
      "(주)상생·제이일렉트릭, 중국 초대형 공기청정기 공장과 글로벌 MOU 체결",
    "news.0.summary":
      "국내 공기청정기 브랜드 HOID가 세계 최초의 3-in-1 공기청정 기술(공기 정화 + 선풍기 + UV 살균)을 한국에 독점 도입한다. (주)상생(대표 정성현)은 파트너사 제이일렉트릭과 함께 중국 최대 규모의 공기청정기 제조 공장 중 하나와 최근 글로벌 양해각서(MOU)를 체결했다고 16일 밝혔다.",
    "news.0.content":
      "(주)상생·제이일렉트릭, 중국 초대형 공기청정기 공장과 글로벌 MOU 체결\n\n국내 공기청정기 브랜드 HOID가 세계 최초의 3-in-1 공기청정 기술(공기 정화 + 선풍기 + UV 살균)을 한국에 독점 도입한다. (주)상생(대표 정성현)은 파트너사 제이일렉트릭과 함께 중국 최대 규모의 공기청정기 제조 공장 중 하나와 최근 글로벌 양해각서(MOU)를 체결했다고 16일 밝혔다.\n\n이번 협약을 통해 중국 공장의 혁신 기술과 노하우를 국내에 선보이며, HOID 브랜드의 기술력과 신뢰도를 더욱 강화할 예정이다.\n\n(사진: (주)상생 대표, 중국 방문 MOU 체결 계약)\n\n<strong>글로벌 기술력과의 파트너십</strong>\n\n(주)상생과 제이일렉트릭은 국내 소비자들에게 차별화된 공기청정 솔루션을 제공하기 위해 이번 MOU를 추진했다. 협약을 체결한 중국 공장은 중국 내 5대 공기청정기 제조사로 손꼽히는 초대형 시설로, 미국, 일본 등 글로벌 시장에 수출 실적을 보유한 기술 중심 기업이다.\n\n특히 이 공장은 30년 이상 경력을 보유한 R&D 연구진을 중심으로 혁신적인 공기청정 기술 개발에 전념해왔으며, 이번 한국 진출을 통해 HOID와 함께 최초의 3-in-1 공기청정 솔루션을 선보이게 되었다.\n\n(주)상생 정성현 대표는 글로벌 수준의 기술력과 생산력을 갖춘 파트너와 협업하게 되어 뜻깊다며, HOID 브랜드를 통해 한국 소비자에게 새로운 기준의 공기청정기를 제시하겠다고 전했다.\n\n<strong>세계 최초 3-in-1 공기청정 기술</strong>\n\n이번 협약의 핵심은 세계 최초로 개발된 3-in-1 공기청정 기술의 국내 공식 론칭이다. HOID 제품은 공기 정화 기능에 선풍기(팬), UV 살균 기능을 결합한 복합형 공기청정기로, 실내 공기질 개선뿐 아니라 유해 세균 제거와 실내 공기 순환까지 동시에 가능하다.\n\n특히 UV 살균 기능은 최대 2.8m 반경까지 살균 효과를 발휘할 수 있어, 국내 출시된 공기청정기 중 최초로 장거리 UV 살균을 구현한 제품이다. 이 기술은 협약을 체결한 중국 공장의 핵심 자산으로, 자체 기술력의 상징이자 공기청정기 업계의 새로운 표준이라 강조된다.",
    "news.1.date": "2025.04.15",
    "news.1.title": "Hoid 공기청정기 1세대 출시",
    "news.1.summary":
      "Hoid는 프리미엄 라이프스타일 가전 브랜드로서 첫 번째 대표 제품인 Hoid 공기청정기 1세대를 공식 출시했습니다.",
    "news.1.content":
      "Hoid는 프리미엄 라이프스타일 가전 브랜드로서 첫 번째 대표 제품인 Hoid 공기청정기 1세대를 공식 출시했습니다. 이 제품은 강력한 3중 필터 시스템과 360도 전방위 공기 순환 구조를 적용하여, 실내 공기를 빠르게 정화하고 최상의 청정도를 유지합니다. 또한, 세련되고 미니멀한 디자인은 어떤 인테리어 공간에도 자연스럽게 어우러지며, 저소음 모터와 에너지 절약 기능까지 갖추어 사용자의 생활 품질을 높여줍니다. 이번 출시를 통해 Hoid는 공기청정기 시장에 본격 진입하며, 향후 지속적인 기술 혁신과 제품 라인업 확장을 예고했습니다.",
    "news.2.date": "2025.08.08",
    "news.2.title": "Hoid 청소기 공장 방문",
    "news.2.summary":
      "Hoid는 제품의 품질과 신뢰성을 직접 확인하기 위해 최근 Hoid 무선 청소기 생산 공장을 방문했습니다.",
    "news.2.content":
      "Hoid는 제품의 품질과 신뢰성을 직접 확인하기 위해 최근 Hoid 무선 청소기 생산 공장을 방문했습니다. 생산 현장에서는 최신 자동화 라인과 숙련된 기술 인력이 협력하여 완벽한 품질의 제품을 생산하고 있었으며, 각 단계별로 엄격한 품질 관리 절차가 적용되고 있었습니다. 특히, 배터리 내구성 테스트와 모터 성능 점검 등 출고 전 필수 검증 과정을 거쳐 소비자에게 최상의 상태로 전달되도록 하고 있습니다. 이번 공장 방문은 Hoid가 추구하는 품질 우선 철학을 현장에서 다시 한번 확인하는 중요한 계기가 되었습니다.",
    "news.3.date": "2025.08.14",
    "news.3.title": "쥬얼리·그릇 신제품 출시 예정",
    "news.3.summary":
      "Hoid는 가전제품을 넘어 소비자의 일상을 전반적으로 아우르는 토탈 라이프스타일 브랜드로 도약을 준비하고 있습니다.",
    "news.3.content":
      "Hoid는 가전제품을 넘어 소비자의 일상을 전반적으로 아우르는 토탈 라이프스타일 브랜드로 도약을 준비하고 있습니다. 향후 계획에는 프리미엄 쥬얼리 라인과 고급 그릇 컬렉션 출시가 포함되어 있으며, 각각 세심한 디자인과 고품질 소재를 바탕으로 제작됩니다. 쥬얼리 라인은 특별한 날을 더욱 빛나게 해줄 세련된 디자인과 장인정신이 깃든 마감 처리가 특징이며, 그릇 라인은 미니멀하면서도 우아한 라인을 살려, 식탁 위 품격을 높이는 제품으로 선보일 예정입니다. Hoid는 앞으로도 다양한 카테고리에서 혁신과 아름다움을 동시에 제공하며, 소비자의 라이프스타일 가치를 높이는 것을 목표로 하고 있습니다.",
    "news.4.date": "2025.09.01",
    "news.4.title": "Hoid 공기청정기 2세대 출시",
    "news.4.summary":
      "Hoid는 1세대 모델의 성공적인 시장 반응을 기반으로 기능과 디자인을 한층 업그레이드한 Hoid 공기청정기 2세대를 출시했습니다.",
    "news.4.content":
      "Hoid는 1세대 모델의 성공적인 시장 반응을 기반으로 기능과 디자인을 한층 업그레이드한 Hoid 공기청정기 2세대를 출시했습니다. 2세대 모델은 초미세먼지 감지 센서를 통해 실시간 공기질 모니터링이 가능하며, 스마트폰 앱과 연동해 원격 제어 및 상태 확인 기능을 제공합니다. 또한, 더 조용하고 강력한 모터를 장착해 생활 소음을 최소화했으며, 필터 교체 주기를 자동으로 알려주는 스마트 알림 기능이 추가되었습니다. 이로써 Hoid는 스마트 청정이라는 새로운 기준을 제시하며, 공기청정기의 혁신적인 진화를 이끌고 있습니다.",
    "news.5.date": "2025.08.20",
    "news.5.title": "Hoid 청소기 출시",
    "news.5.summary":
      "Hoid의 프리미엄 무선 청소기가 공식적으로 출시되었습니다.",
    "news.5.content":
      "Hoid의 프리미엄 무선 청소기가 공식적으로 출시되었습니다. 이 제품은 고성능 모터와 강력한 흡입력, 장시간 사용이 가능한 고효율 배터리를 갖추어 대형 주택부터 소형 공간까지 효율적으로 청소할 수 있습니다. 또한, 무게를 최소화한 인체공학적 설계로 손목 부담을 줄였으며, 브러시 헤드 교체를 통해 바닥, 카펫, 침구 등 다양한 환경에서 최적의 성능을 발휘합니다. 먼지통과 필터는 물세척이 가능하여 위생적으로 관리할 수 있고, 모든 구성품은 사용 편의성을 최우선으로 설계되었습니다. 이번 출시를 통해 Hoid는 청소기 시장에서도 새로운 기준을 제시하고 있습니다.",

    // Stats Section
    "stats.title": "성장하는",
    "stats.subtitle": "OUR ACHIEVEMENTS",
    "stats.description":
      "글로벌 비즈니스 파트너로서 꾸준히 성장하고 있는 FeedBack의 주요 성과를 확인해보세요.",
    "stats.since": "설립년도",
    "stats.since.sub": "Since",
    "stats.brands": "자체 브랜드",
    "stats.brands.sub": "Own Brands",
    "stats.countries": "파트너 국가",
    "stats.countries.sub": "Countries",
    "stats.hospitals": "병원 제휴",
    "stats.hospitals.sub": "Hospitals",

    // CTA Section
    "cta.title": "글로벌 진출을 꿈꾸시나요?",
    "cta.description":
      "FeedBack과 함께 아시아를 넘어 세계 시장으로 나아가세요.\n전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다.",
    "cta.consultation": "무료 상담 신청",
    "cta.proposal": "사업 제안서 보기",

    // Contact Page
    "contact.title": "문의하기",
    "contact.subtitle": "궁금한 점이 있으시면 언제든지 연락주세요.",
    "본사 주소": "본사 주소",
    "인천 연수구 송도과학로 80, 송도 AIT센터 1301호, 1302호":
      "인천 연수구 송도과학로 80, 송도 AIT센터 1301호, 1302호",
    대표전화: "대표전화",
    이메일: "이메일",
    운영시간: "운영시간",
    "평일 10:00 - 19:00, 주말 및 공휴일 휴무":
      "평일 10:00 - 19:00, 주말 및 공휴일 휴무",
    경영지원부: "경영지원부",
    연락처: "연락처",
    관련부서: "관련부서",
    소셜미디어: "소셜미디어",
    "문의 남기기": "문의 남기기",
    "contact.form.name": "이름",
    "contact.form.name.placeholder": "이름을 입력해주세요",
    "contact.form.email": "이메일",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.phone": "연락처",
    "contact.form.phone.placeholder": "010-0000-0000",
    "contact.form.company": "회사명",
    "contact.form.company.placeholder": "회사명을 입력해주세요",
    "contact.form.service": "관심 서비스",
    "contact.form.service.placeholder": "서비스를 선택해주세요",
    "contact.form.service.medical": "의료관광 중개업",
    "contact.form.service.app": "다국어 앱 개발",
    "contact.form.service.brand": "브랜드 유통",
    "contact.form.service.consulting": "마케팅 컨설팅",
    "contact.form.message": "문의 내용",
    "contact.form.message.placeholder": "문의하실 내용을 자세히 적어주세요...",
    "contact.form.privacy": "개인정보 수집 및 이용에 동의합니다.",
    "contact.form.privacy.link": "자세히 보기",
    "contact.form.privacy.error.title": "동의 필요",
    "contact.form.privacy.error.description":
      "개인정보 수집 및 이용에 동의해주세요.",
    "contact.form.submit": "문의 보내기",
    "발송 중...": "발송 중...",
    "메일 발송 성공": "메일 발송 성공",
    "문의 유형": "문의 유형",
    "사업 문의": "사업 문의",
    "브랜드 문의": "브랜드 문의",
    "파트너 제안": "파트너 제안",
    "contact.map.title": "오시는 길",
    "contact.info.address": "주소",
    "contact.info.phone": "전화",
    "contact.info.email": "이메일",
    "contact.info.hours": "운영시간",
    "contact.info.hours.value": "월-금 09:00-18:00",

    // About Page
    "about.story.main":
      '<span class="text-white">피드백은 브랜드의 성장을 <br>유통으로 설계합니다.</span>',
    "about.story.sub":
      'Hoid, Medifeed, InYourHeart, 상생 등 자체 브랜드와 글로벌 파트너십을 기반으로,<br class="hidden sm:block"/>기획부터 제조·유통·브랜딩까지 전 과정을 함께합니다.',
    "about.story.detail":
      '고객의 삶 속에 스며든 FeedBack의 브랜드 하나하나가 고객 여러분의 하루를<br class="hidden sm:block"/>더욱 편리하고 행복하게 만들 수 있도록 언제나 노력하는 FeedBack이 되겠습니다.',
    "about.banner.title":
      '피드백은 브랜드의 성장을<br class="block" /><span class="text-[#ffffff]"> 유통으로 설계합니다</span>',
    "about.parallax.title":
      '고객님의 <span class="text-[#ffffff] font-bold">\'생활 속 행복\'</span>을 목표로<br class="hidden sm:block"/>열정 넘치는 이들이 모인 FeedBack은',
    "about.parallax.description":
      '최고의 제품을 안겨드리기 위해 기술혁신에 끊임없이 노력을 기울이고 있으며,<br class="hidden sm:block"/>이를 위한 연구개발투자 또한 지속적으로 이루어지고 있습니다.',
    "about.philosophy.title": "경영철학",
    "about.philosophy.description":
      'FeedBack은 브랜드와 시장을 연결하는 실행 중심의 유통 플랫폼으로서<br class="hidden sm:block"/>모든 파트너와 함께 성장하는 상생의 생태계를 구축하고 있습니다.',
    "about.timeline.title": "연혁",
    "about.timeline.2025_09":
      "Hoid 2세대 공기청정기 국내외 동시 론칭 (홈쇼핑 입점 확장)",
    "about.timeline.2025_08": "Hoid 무선 청소기 출시",
    "about.timeline.2025_04":
      "Hoid 1세대 공기청정기 출시 (3-in-1 살균 기술 탑재)",
    "about.timeline.2025_01": "자회사 상생메디컬 설립 및 통합 플랫폼 개발 개시",
    "about.timeline.2024": "자체 브랜드 Hoid, Medifeed, InYourHeart 동시 론칭",
    "about.timeline.type.expansion": "확장",
    "about.timeline.type.product": "제품출시",
    "about.timeline.type.founding": "창립",
    "about.philosophy.value1.title":
      ' ��객·파트너 중심: \'공생\'의 유통 모델을<br class="block lg:hidden"/><br class="hidden lg:block"/> 실현합니다',
    "about.philosophy.value1.description":
      'FeedBack은 단순히 물건을 사고파는 곳이 아닌,<br class="hidden lg:block"/>제조사·브랜드·소매처가 함께 성장할 수 있는 유통 생태계를 구축합니다.<br/><br/>고객사와 파트너의 신뢰를 기반으로 장기 협력과 함께 발전하는<br class="hidden lg:block"/>구조를 설계하며,<br class="hidden sm:block lg:hidden"/><span class="font-semibold text-[0F4C82]">모두가 지속 가능한 이익을 나누는 상생 플랫폼</span>을 <br class="block lg:hidden"/>지향합니다.',
    "about.philosophy.value2.title":
      '통합 실행력으로 브랜드와 시장을<br class="hidden lg:block"/> 연결합니다',
    "about.philosophy.value2.description":
      '단순 유통을 넘어 상품 기획, 브랜딩, 마케팅, 유통 채널을<br class="hidden lg:block"/>유기적으로 연결합니다.<br class="hidden sm:block lg:hidden"/>고유한 OEM 역량과 자체 브랜드 경험을 결합하여,<br class="hidden lg:block"/>브랜드가 시장에서 자리 잡도록 실행 가능한 솔루션을 제공합니다.<br/><br/><span class="font-semibold text-primary">제품력에 브랜딩을 입히고, 브랜딩에 유통을 결합하며,<br class="hidden lg:block"/>유통에 경험과 콘텐츠를 심는 방식이 FeedBack의 방식</span>입니다.',
    "about.philosophy.value3.title":
      '글로벌 시장에서 경쟁력을 만드는<br class="hidden lg:block"/> 실행 중심 기업',
    "about.philosophy.value3.description":
      '아시아를 기반으로 성장해 온 브랜드에게<br class="hidden lg:block"/>글로벌 시장 진출 기회를 제공합니다.<br/><br/><span class="font-semibold text-primary">전략적 진출 설계 + 제휴 기반 실행력</span>을 통해<br class="hidden lg:block"/>브랜드의 세계화를 지원하고,<br class="hidden lg:block"/>국내외 파트너와의 협업을 통해<br class="hidden lg:block"/>더 크고 넓은 시장에서 기회를 <br class="block lg:hidden"/>창출합니다.',
    "about.philosophy.value4.title": "신뢰를 통한 장기 파트너십 구축",
    "about.philosophy.value4.description":
      'FeedBack의 존재 이유는 파트너와 고객의 신뢰입니다.<br/><br/><span class="font-semibold text-primary">검증된 품질과 안정적인 공급, 투명한 유통 프로세스,<br class="block lg:hidden"/><br class="hidden lg:block"/>정직한 사후 서비스 체계</span>를 통해<br class="hidden lg:block"/>파트너가 오래 함께할 수 <br class="block lg:hidden"/>있는 신뢰 기반을 만듭니다.',
    "about.timeline.bottom":
      '피드백은 제품 출시와 동시에 국내외 홈쇼핑, 이커머스, 도매 채널과의 연계를 통해<br class="hidden sm:block"/>빠르게 시장을 확장하고 있습니다.',
    "about.ceo.quote":
      '"고객의 행복과 글로벌 파트너십을 최우선으로 생각합니다."',
    "about.ceo.title": "CEO 인사말",
    "about.ceo.name": "송해민, 정성현",
    "about.ceo.position": "(주)피드백 대표",
    "about.ceo.motto": '"브랜드와 시장을 연결하는<br/>플랫폼 기업으로 성장"',
    "about.ceo.message1": "안녕하세요. (주)피드백 대표 송해민, 정성현입니다.",
    "about.ceo.message2":
      "저희 피드백은 빠르게 변화하는 글로벌 유통 시장 속에서, 브랜드와 시장의 연결자이자 실행자로서 새로운 유통 구조를 제시하고 있습니다.",
    "about.ceo.message3":
      "단순히 '물건을 파는 회사'가 아닌, 브랜드를 함께 키우고 시장에 안착시키는 파트너로서 제조사, 유통사, 소비자 모두가 만족하는 구조를 만들기 위해 노력하고 있습니다.",
    "about.ceo.highlight":
      "제품력에 브랜딩을 더하고, 브랜딩에 유통망을 연결하며, 유통에 콘텐츠와 경험을 심는 것. 이것이 피드백의 방식입니다.",
    "about.ceo.message4":
      "앞으로도 국내외 파트너 여러분과 함께 더 크고 넓은 시장에서 기회를 창출하는 기업이 되겠습니다. 감사합니다.",
    "about.org.title": "조직도",
    "about.org.description":
      '체계적인 조직 구성을 통해 각 분야의 전문성을 바탕으로<br class="hidden sm:block"/>고객에게 최고의 서비스를 제공하고 있습니다.',

    // Service Page
    "서비스 소개": "서비스 소개",
    "EXPERTISE & SOLUTION": "EXPERTISE & SOLUTION",
    "피드백은 유통부터 마케팅까지, 글로벌 비즈니스를 위한 전문 서비스를 제공합니다.":
      "피드백은 유통부터 마케팅까지, 글로벌 비즈니스를 위한 전문 서비스를 제공합니다.",
    "유통 / 수출입 중개": "유통 / 수출입 중개",
    "아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다. 다양한 제품군에 대한 전문적인 수출입 컨설팅과 물류 솔루션을 함께 제공하여 글로벌 비즈니스를 지원합니다.":
      "아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다. 다양한 제품군에 대한 전문적인 수출입 컨설팅과 물류 솔루션을 함께 제공하여 글로벌 비즈니스를 지원합니다.",
    "자체 브랜드 제조 (OEM)": "자체 브랜드 제조 (OEM)",
    "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다. 품질 관리부터 제품 개발까지 전 과정을 책임집니다.":
      "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다. 품질 관리부터 제품 개발까지 전 과정을 책임집니다.",
    "글로벌 마케팅/브랜딩": "글로벌 마케팅/브랜딩",
    "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다. 브랜드 아이덴티티 개발부터 글로벌 시장 진출 전략까지 종합적인 마케팅 서비스를 지원합니다.":
      "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다. 브랜드 아이덴티티 개발부터 글로벌 시장 진출 전략까지 종합적인 마케팅 서비스를 지원합니다.",
    "의료관광 플랫폼": "의료관광 플랫폼",
    "상생 브랜드를 통한 의료관광 플랫폼 운영으로 한국의 우수한 의료 서비스를 전 세계에 연결합니다. 태국, 베트남을 시작으로 아시아 전역으로 서비스를 확장하고 있습니다.":
      "상생 브랜드를 통한 의료관광 플랫폼 운영으로 한국의 우수한 의료 서비스를 전 세계에 연결합니다. 태국, 베트남을 시작으로 아시아 전역으로 서비스를 확장하고 있습니다.",
    "앱 개발": "앱 개발",
    "의료/케어 통합 앱 개발로 디지털 헬스케어 솔루션을 제공합니다. 다국어 지원과 실시간 상담 기능을 통해 글로벌 사용자들에게 편리한 서비스를 제공합니다.":
      "의료/케어 통합 앱 개발로 디지털 헬스케어 솔루션을 제공합니다. 다국어 지원과 실시간 상담 기능을 통해 글로벌 사용자들에게 편리한 서비스를 제공합니다.",
    "서비스 문의": "서비스 문의",
    "브랜드 보기": "브랜드 보기",
    "상담 신청": "상담 신청",
    "상생 브랜드 보기": "상생 브랜드 보기",
    "앱 정보 보기": "앱 정보 보기",
    "프로젝트 문의": "프로젝트 문의",
    "더 자세한 상담이 필요하신가요?": "더 자세한 상담이 필요하신가요?",
    "전문 컨설턴트가 귀하의 비즈니스에 맞는 최적의 솔루션을 제안해드립니다.":
      "전문 컨설턴트가 귀하의 비즈니스에 맞는 최적의 솔루션을 제안해드립니다.",
    "무료 상담 신청": "무료 상담 신청",

    // Brand Page
    "브랜드 소개": "브랜드 소개",
    "혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브���드들을 소개합니다.각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.":
      "혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.",
    "브랜드 파트너십에 관심이 있으신가요?":
      "브랜드 파트너십에 관심이 있으신가요?",
    "FeedBack과 함께 혁신적인 브랜드를 만들어보세요. 기획부터 유통까지 전 과정을 지원하여 성공적인 브랜드 런칭을 도와드립니다.":
      "FeedBack과 함께 혁신적인 브랜드를 만들어보세요. 기획부터 유통까지 전 과정을 지원하여 성공적인 브랜드 런칭을 도와드립니다.",
    "파트너십 문의하기": "파트너십 문의하기",

    // Brand Detail Pages - Common
    "브랜드 목록으로 돌아가기": "브랜드 목록으로 돌아가기",

    // Hoid Brand Page
    "hoid.hero.title": "공기 속까지 바꾸는 디자인",
    "hoid.hero.description": "미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트 가전 브랜드입니다.",
    "hoid.hero.cta": "Hoid 홈페이지 가기",
    "hoid.features.title": "혁신적인 기술력",
    "hoid.features.subtitle": "미니멀한 디자인 속에 숨어있는 첨단 기술로 완전히 새로운 공기청정 경험을 제공합니다",

    // Asran Brand Page
    "asran.hero.tagline": "독일 기술과 합리적 가격을 모두 갖춘 냄비",
    "asran.hero.description": "SUS410 스테인리스 스틸과 3중 바닥구조로 뛰어난 열전도율과 내구성을 자랑합니다. 인덕션과 가스 겸용으로 어떤 주방환경에서도 완벽하게 사용 가능한 프리미엄 냄비입니다.",
    "asran.hero.cta": "ASRAN 홈페이지 가기",
    "asran.features.title": "ASRAN만의 특별한 기술",
    "asran.features.subtitle": "독일의 정밀한 기술력과 한국의 실용성이 만나 탄생한 프리미엄 주방용품",

    // Medifeed Brand Page
    "medifeed.hero.title": "매일을 지키는 작은 습관",
    "medifeed.hero.description": "잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 누구나 쉽게 선택할 수 있는 건강 솔루션을 제공합니다.",
    "medifeed.features.title": "전문화된 건강 솔루션",
    "medifeed.features.subtitle": "과학적 연구를 바탕으로 개발된 특화 영양제로 일상의 건강을 책임집니다",

    // LaCeras Brand Page
    "laceras.hero.title": "전통과 모던이 만나는",
    "laceras.hero.subtitle": "프렌치 럭셔리",
    "laceras.hero.description": "프랑스의 장인정신과 현대적 세련미를 결합한 럭셔리 캐리어 브랜드입니다. 비즈니스부터 럭셔리 여행까지 완벽한 트래블 솔루션을 제안합니다.",
    "laceras.hero.cta": "La Ceras 홈페이지 가기",
    "laceras.features.title": "프렌치 크래프트맨십",

    // Carvella Brand Page
    "carvella.hero.title": "이탈리아 장인의 정밀함",
    "carvella.hero.subtitle": "당신의 주방으로",
    "carvella.hero.description": "이탈리아 전통 장인정신으로 완성한 프리미엄 쿠킹웨어 브랜드입니다. 고급 스테인리스와 다층 구조로 뛰어난 열전도와 내구성을 자랑합니다.",
    "carvella.hero.cta": "Carvella 홈페이지 가기",
    "carvella.features.title": "이탈리아 장인정신",

    // InYourHeart Brand Page
    "inyourheart.hero.title": "피부에 감성을 입히다",
    "inyourheart.hero.description": "클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 프리미엄 스킨케어 브랜드입니다.",
    "inyourheart.values.title": "감성이 담긴 뷰티 철학",
    "inyourheart.values.subtitle": "피부에 순하고 마음까지 따뜻하게 만드는 감성 스킨케어",

    // Sangsaeng Brand Page
    "sangsaeng.hero.title": "한국 의료를 세계로 연결하다",
    "sangsaeng.hero.description": "메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한 의료 서비스를 전 세계에 연결하는 종합 의료 플랫폼입니다.",
    "sangsaeng.hero.cta": "상생 홈페이지 가기",
    "sangsaeng.services.title": "글로벌 헬스케어 생태계",
    "sangsaeng.services.subtitle": "의료 서비스부터 브랜딩까지, 통합된 헬스케어 솔루션을 제공합니다",

    // Footer
    "footer.company": "회사 정보",
    "footer.services": "서비스",
    "footer.contact": "연락처",
    "footer.follow": "팔로우",
    "footer.copyright": "© 2024 FeedBack. All rights reserved.",
  },
  EN: {
    // Navigation
    "nav.home": "About",
    "nav.services": "Services",
    "nav.brands": "Brands",
    "nav.news": "News",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Distribution Platform Connecting",
    "hero.subtitle": "Brands and Markets, FEEDBACK",
    "hero.description":
      "A mutual growth platform where distribution, branding, marketing, and manufacturing connect as one",
    "hero.cta.consultation": "Explore Services",
    "hero.cta.proposal": "Watch Introduction Video",

    // Services Section
    "services.title": "Services",
    "services.medical.title": "Medical Tourism Brokerage",
    "services.medical.description":
      "We provide professional brokerage services connecting Korea's excellent medical staff with overseas patients.",
    "services.app.title": "Multilingual App Development",
    "services.app.description":
      "We provide mobile application development and localization services targeting the global market.",
    "services.brand.title": "Brand Distribution",
    "services.brand.description":
      "We provide distribution and marketing solutions for Asian brands to enter the global market.",
    "services.consulting.title": "Marketing Consulting",
    "services.consulting.description":
      "We support comprehensive marketing strategy development from market analysis to branding.",

    // Additional Services
    "services.distribution.title": "Global Distribution & Logistics",
    "services.distribution.description":
      "We support global market expansion through Asian distribution network establishment, import/export customs clearance, and logistics optimization.",
    "services.distribution.features.0": "Asian Distribution Network",
    "services.distribution.features.1": "Import/Export Customs",
    "services.distribution.features.2": "Logistics Optimization",
    "services.manufacturing.title": "Private Label Manufacturing (OEM)",
    "services.manufacturing.description":
      "We support brand growth through manufacturing and OEM production of 4 private brands: Hoid, Medifeed, InYourHeart, and Sangsaeng.",
    "services.manufacturing.features.0": "4 Private Brands",
    "services.manufacturing.features.1": "OEM/ODM Manufacturing",
    "services.manufacturing.features.2": "Quality Management",
    "services.marketing.title": "Global Marketing & Branding",
    "services.marketing.description":
      "We provide global branding solutions through home shopping partnerships and digital marketing.",
    "services.marketing.features.0": "Home Shopping Marketing",
    "services.marketing.features.1": "Digital Marketing",
    "services.marketing.features.2": "Global Expansion Strategy",
    "services.medical.features.0": "Medical Tourism",
    "services.medical.features.1": "Hospital Network",
    "services.medical.features.2": "Multilingual Platform",
    "services.app.features.0": "Medical/Care Integrated App",
    "services.app.features.1": "Multilingual Support",
    "services.app.features.2": "Real-time Consultation",

    // Brands Section
    "brands.hoid.category": "Minimal Home Appliances",
    "brands.hoid.slogan": "Design that Changes the Air Itself",
    "brands.hoid.description":
      "Smart home appliance brand that revolutionizes daily air quality through minimal design and cutting-edge technology in air purifiers and dehumidifiers.",
    "brands.hoid.products.0": "Air Purifier",
    "brands.hoid.products.1": "Dehumidifier",
    "brands.hoid.products.2": "3-in-1 Technology",
    "brands.hoid.products.3": "HEPA14 Filter",
    "brands.medifeed.category": "Functional Supplements",
    "brands.medifeed.slogan": "Small Habits that Protect Every Day",
    "brands.medifeed.description":
      "Functional supplement brand focusing on gum and eye health, providing health solutions based on practicality and safety.",
    "brands.medifeed.products.0": "Gum Health",
    "brands.medifeed.products.1": "Eye Health",
    "brands.medifeed.products.2": "Functional Supplements",
    "brands.medifeed.products.3": "GMP Certified",
    "brands.inyourheart.category": "Emotional Skincare",
    "brands.inyourheart.slogan": "Dressing the Skin with Emotion",
    "brands.inyourheart.description":
      "Premium skincare brand leading the global K-beauty market with clean beauty philosophy and emotional package design.",
    "brands.inyourheart.products.0": "Clean Formula",
    "brands.inyourheart.products.1": "Emotional Package",
    "brands.inyourheart.products.2": "Global K-Beauty",
    "brands.inyourheart.products.3": "Ceramide",
    "brands.sangsaeng.category": "Medical Tourism Platform",
    "brands.sangsaeng.slogan":
      "WE CONNECT KOREAN MEDICAL SERVICES TO THE WORLD",
    "brands.sangsaeng.description":
      "Comprehensive medical platform connecting Korea's excellent medical services to the world, from medical tourism to global healthcare platform.",
    "brands.sangsaeng.products.0": "Medical Tourism",
    "brands.sangsaeng.products.1": "Healthcare Platform",
    "brands.sangsaeng.products.2": "Multilingual App",
    "brands.sangsaeng.products.3": "Hospital Network",
    "brands.lineup.category": "Brand Lineup",
    "brands.lineup.slogan":
      "Connecting Technology, Design, and Daily Convenience",
    "brands.lineup.description":
      "FeedBack provides technology and design that transform daily life into better experiences through home appliances, premium kitchenware, travel, and living brands.",
    "brands.asran.category": "Premium Kitchenware",
    "brands.asran.slogan": "German Technology with Affordable Prices",
    "brands.asran.description":
      "Premium kitchenware brand featuring SUS410 stainless steel and triple-layer bottom structure for excellent heat conductivity and durability.",
    "brands.asran.products.0": "SUS410 Stainless Steel",
    "brands.asran.products.1": "Triple-Layer Bottom",
    "brands.asran.products.2": "Induction & Gas Compatible",
    "brands.asran.products.3": "Premium Finish",
    "brands.laceras.category": "French Luxury Luggage Brand",
    "brands.laceras.slogan":
      "French Luxury Travel Where Tradition Meets Modern",
    "brands.laceras.description":
      "Luxury luggage brand combining French craftsmanship with contemporary elegance. Offering perfect travel solutions from business to luxury travel with polycarbonate hardshell, precise finishing, and balanced design.",
    "brands.laceras.products.0": "Hardshell Luggage",
    "brands.laceras.products.1": "Carry-on",
    "brands.laceras.products.2": "TSA Lock",
    "brands.laceras.products.3": "360° Wheels",
    "brands.carvella.category": "Italian Premium Kitchenware",
    "brands.carvella.slogan": "Italian Craftsmanship Precision to Your Kitchen",
    "brands.carvella.description":
      "Premium cookware brand crafted with Italian traditional craftsmanship. Features premium stainless steel and multi-layer construction for excellent heat conductivity and durability, compatible from induction to gas stoves.",
    "brands.carvella.products.0": "Premium Pots",
    "brands.carvella.products.1": "Frying Pans",
    "brands.carvella.products.2": "Multi Pressure Lid",
    "brands.carvella.products.3": "Multi Heat Source Compatible",

    // Common UI
    "ui.view_brand_detail": "View Brand Details",
    "ui.visit_website": "Visit Brand Website",

    // B2B2C Section
    "b2b2c.header.title": "From Manufacturers to Consumers",
    "b2b2c.header.subtitle": "Building a Complete Distribution Ecosystem",
    "b2b2c.b2b.title": "B2B Manufacturers",
    "b2b2c.b2b.description":
      "Building strategic partnerships with manufacturers producing high-quality products",
    "b2b2c.b2b.feature1": "Professional Manufacturing Partners",
    "b2b2c.b2b.feature2": "Quality Management System",
    "b2b2c.b2b.feature3": "OEM/ODM Production",
    "b2b2c.b2b.feature1_short": "Professional Manufacturing",
    "b2b2c.b2b.feature2_short": "Quality Control",
    "b2b2c.b2b.feature3_short": "OEM/ODM",
    "b2b2c.arrow1": "Distribution Connect",
    "b2b2c.hub.title": "FeedBack Distribution Hub",
    "b2b2c.hub.description":
      "Delivering products to consumers through nationwide and global distribution networks",
    "b2b2c.hub.feature1": "Nationwide Distribution",
    "b2b2c.hub.feature2": "Logistics Optimization",
    "b2b2c.hub.feature3": "Brand Marketing",
    "b2b2c.arrow2": "Consumer Delivery",
    "b2b2c.b2c.title": "B2C Consumers",
    "b2b2c.b2c.description":
      "Providing the best products and services to consumers through various channels",
    "b2b2c.b2c.feature1": "Online & Offline",
    "b2b2c.b2c.feature2": "Home Shopping Connection",
    "b2b2c.b2c.feature3": "Global Expansion",
    "b2b2c.summary.title": "Complete Distribution Ecosystem, FeedBack",
    "b2b2c.summary.description":
      "FeedBack designs and optimizes the entire distribution process to ensure excellent products from manufacturers are successfully delivered to consumers.",

    // News Section
    "news.title": "News & Press Releases",
    "news.description":
      "Check out the latest news and key achievements of FeedBack. View press releases and company news at a glance.",
    "news.filter.all": "All",
    "news.filter.press": "Press Release",
    "news.filter.company": "Company News",
    "news.filter.brand": "Brand News",
    "news.category.press": "Press Release",
    "news.category.company": "Company News",
    "news.category.brand": "Brand News",
    "news.readMore": "Read Full Article",
    "news.loadMore": "Load More News",
    "news.back_to_list": "Back to News List",
    "news.coming_soon": "Full article content will be updated soon.",
    "news.category.보도자료": "Press Release",
    "news.category.기업소식": "Company News",
    "news.category.브랜드뉴스": "Brand News",
    "news.0.date": "2025.08.11",
    "news.0.title":
      "Sangsaeng·J Electric Signs Global MOU with China's Mega Air Purifier Factory",
    "news.0.summary":
      "Korean air purifier brand HOID exclusively introduces the world's first 3-in-1 air purification technology (air purification + fan + UV sterilization) to Korea. Sangsaeng Co., Ltd. (CEO Jeong Seong-hyeon) announced on the 16th that it recently signed a global MOU with one of China's largest air purifier manufacturing factories along with partner J Electric.",
    "news.0.content":
      'Sangsaeng·J Electric Signs Global MOU with China\'s Mega Air Purifier Factory\n\nKorean air purifier brand HOID exclusively introduces the world\'s first 3-in-1 air purification technology (air purification + fan + UV sterilization) to Korea. Sangsaeng Co., Ltd. (CEO Jeong Seong-hyeon) announced on the 16th that it recently signed a global MOU with one of China\'s largest air purifier manufacturing factories along with partner J Electric.\n\nThrough this agreement, the innovative technology and know-how of the Chinese factory will be introduced to Korea, further strengthening the technology and reliability of the HOID brand.\n\n(Photo: Sangsaeng CEO, China visit MOU signing contract)\n\n<strong>Partnership with Global Technology</strong>\n\nSangsaeng and J Electric promoted this MOU to provide Korean consumers with differentiated air purification solutions. The Chinese factory that signed the agreement is a mega facility counted among the top 5 air purifier manufacturers in China, a technology-oriented company with export records to global markets including the United States and Japan.\n\nIn particular, this factory has been devoted to developing innovative air purification technology centered on an R&D research team with over 30 years of experience, and through this entry into Korea, it has launched the first 3-in-1 air purification solution with HOID.\n\nSangsaeng CEO Jeong Seong-hyeon said, "It is meaningful to collaborate with a partner with global-level technology and production capacity," and "We will present air purifiers with new standards to Korean consumers through the HOID brand."\n\n<strong>World\'s First 3-in-1 Air Purification Technology</strong>\n\nThe core of this agreement is the domestic official launch of the world\'s first 3-in-1 air purification technology. HOID products are multi-functional air purifiers that combine air purification functions with a fan and UV sterilization function, enabling not only indoor air quality improvement but also harmful bacteria removal and indoor air circulation simultaneously.\n\nIn particular, the UV sterilization function can exert sterilization effects up to a 2.8m radius, being the first product among air purifiers released in Korea to implement long-range UV sterilization. This technology is a core asset of the Chinese factory that signed the agreement, emphasized as "a symbol of proprietary technology and a new standard in the air purifier industry."',
    "news.1.date": "2025.04.15",
    "news.1.title": "Hoid Air Purifier 1st Generation Launch",
    "news.1.summary":
      "Hoid, as a premium lifestyle home appliance brand, officially launched its first flagship product, the Hoid Air Purifier 1st Generation.",
    "news.1.content":
      "Hoid, as a premium lifestyle home appliance brand, officially launched its first flagship product, the Hoid Air Purifier 1st Generation. This product applies a powerful 3-layer filter system and 360-degree omnidirectional air circulation structure to quickly purify indoor air and maintain optimal cleanliness. In addition, the refined and minimalist design naturally blends with any interior space, and is equipped with a low-noise motor and energy-saving function to enhance users' quality of life. Through this launch, Hoid has entered the air purifier market in earnest and announced continuous technological innovation and product lineup expansion.",
    "news.2.date": "2025.08.08",
    "news.2.title": "Hoid Vacuum Cleaner Factory Visit",
    "news.2.summary":
      "Hoid recently visited the Hoid cordless vacuum cleaner production factory to directly verify product quality and reliability.",
    "news.2.content":
      'Hoid recently visited the Hoid cordless vacuum cleaner production factory to directly verify product quality and reliability. At the production site, the latest automation lines and skilled technical personnel were cooperating to produce products of perfect quality, with strict quality control procedures applied at each stage. In particular, essential verification processes before shipment, such as battery durability testing and motor performance inspection, are conducted to ensure delivery to consumers in the best condition. This factory visit was an important opportunity to reaffirm on-site Hoid\'s "quality first" philosophy.',
    "news.3.date": "2025.08.14",
    "news.3.title": "Jewelry & Tableware New Products Coming Soon",
    "news.3.summary":
      "Hoid is preparing to leap forward as a total lifestyle brand that comprehensively encompasses consumers' daily lives beyond home appliances.",
    "news.3.content":
      "Hoid is preparing to leap forward as a total lifestyle brand that comprehensively encompasses consumers' daily lives beyond home appliances. Future plans include launching a premium jewelry line and luxury tableware collection, each produced based on meticulous design and high-quality materials. The jewelry line features refined design and craftsmanship finishing that will make special days shine even brighter, while the tableware line will be presented as products that enhance table elegance with minimal yet elegant lines. Hoid aims to continue providing innovation and beauty simultaneously in various categories, enhancing consumers' lifestyle values.",
    "news.4.date": "2025.09.01",
    "news.4.title": "Hoid Air Purifier 2nd Generation Launch",
    "news.4.summary":
      "Hoid launched the Hoid Air Purifier 2nd Generation with upgraded functions and design based on the successful market response of the 1st generation model.",
    "news.4.content":
      'Hoid launched the Hoid Air Purifier 2nd Generation with upgraded functions and design based on the successful market response of the 1st generation model. The 2nd generation model enables real-time air quality monitoring through ultra-fine dust detection sensors and provides remote control and status checking functions linked with smartphone apps. In addition, it is equipped with a quieter and more powerful motor to minimize living noise, and a smart notification function has been added that automatically notifies filter replacement cycles. With this, Hoid presents a new standard called "smart purification" and is leading the innovative evolution of air purifiers.',
    "news.5.date": "2025.08.20",
    "news.5.title": "Hoid Vacuum Cleaner Launch",
    "news.5.summary":
      "Hoid's premium cordless vacuum cleaner has been officially launched.",
    "news.5.content":
      "Hoid's premium cordless vacuum cleaner has been officially launched. This product is equipped with a high-performance motor, powerful suction, and a high-efficiency battery that allows long-term use, enabling efficient cleaning from large houses to small spaces. In addition, it reduces wrist strain with an ergonomic design that minimizes weight, and by replacing the brush head, it demonstrates optimal performance in various environments such as floors, carpets, and bedding. The dust bin and filter are water-washable for hygienic management, and all components are designed with user convenience as the top priority. Through this launch, Hoid is presenting new standards in the vacuum cleaner market as well.",

    // Stats Section
    "stats.title": "Growing",
    "stats.subtitle": "OUR ACHIEVEMENTS",
    "stats.description":
      "Check out the key achievements of FeedBack, which continues to grow as a global business partner.",
    "stats.since": "Established",
    "stats.since.sub": "Since",
    "stats.brands": "Own Brands",
    "stats.brands.sub": "Own Brands",
    "stats.countries": "Partner Countries",
    "stats.countries.sub": "Countries",
    "stats.hospitals": "Hospital Partners",
    "stats.hospitals.sub": "Hospitals",

    // CTA Section
    "cta.title": "Dreaming of Global Expansion?",
    "cta.description":
      "Move beyond Asia to the global market with FeedBack.\nOur professional consultants will propose customized solutions.",
    "cta.consultation": "Free Consultation",
    "cta.proposal": "View Business Proposal",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle":
      "If you have any questions, please feel free to contact us anytime.",
    "본사 주소": "Head Office",
    "인천 연수구 송도과학로 80, 송도 AIT센터 1301호, 1302호":
      "80 Songdogwahak-ro, Yeonsu-gu, Incheon, Songdo AIT Center 1301, 1302",
    대표전화: "Main Phone",
    이메일: "Email",
    운영시간: "Business Hours",
    "평일 10:00 - 19:00, 주말 및 공휴일 휴무":
      "Weekdays 10:00 - 19:00, Weekends and Holidays Closed",
    경영지원부: "Management Support",
    연락처: "Contact",
    관련부서: "Departments",
    소셜미디어: "Social Media",
    "문의 남기기": "Leave an Inquiry",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Please enter your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.phone": "Phone",
    "contact.form.phone.placeholder": "+82-10-0000-0000",
    "contact.form.company": "Company",
    "contact.form.company.placeholder": "Please enter your company name",
    "contact.form.service": "Service of Interest",
    "contact.form.service.placeholder": "Please select a service",
    "contact.form.service.medical": "Medical Tourism Brokerage",
    "contact.form.service.app": "Multilingual App Development",
    "contact.form.service.brand": "Brand Distribution",
    "contact.form.service.consulting": "Marketing Consulting",
    "contact.form.message": "Message",
    "contact.form.message.placeholder":
      "Please write your inquiry in detail...",
    "contact.form.privacy":
      "I agree to the collection and use of personal information.",
    "contact.form.privacy.link": "View Details",
    "contact.form.privacy.error.title": "Consent Required",
    "contact.form.privacy.error.description":
      "Please agree to the collection and use of personal information.",
    "contact.form.submit": "Send Inquiry",
    "발송 중...": "Sending...",
    "메일 발송 성공": "Email Sent Successfully",
    "문의 유형": "Inquiry Type",
    "사업 문의": "Business Inquiry",
    "브랜드 문의": "Brand Inquiry",
    "파트너 제안": "Partnership Proposal",
    "contact.map.title": "Directions",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hours.value": "Mon-Fri 09:00-18:00",

    // About Page
    "about.story.main":
      '<span class="text-white">Feedback designs your brand\'s growth through distribution.</span>',
    "about.story.sub":
      'Based on our own brands such as Hoid, Medifeed, InYourHeart, and Sangsaeng,<br class="hidden sm:block"/>and global partnerships, we support the entire process from planning to manufacturing, distribution, and branding.',
    "about.story.detail":
      'FeedBack will always strive to make every day<br class="hidden sm:block"/>more convenient and happier for you through each of our brands that permeate your daily life.',
    "about.banner.title":
      'FeedBack designs<br class="block" /><span class="text-[#ffffff]"> brand growth through distribution</span>',
    "about.parallax.title":
      'With the goal of <span class="text-[#ffffff] font-bold">\'happiness in your daily life\'</span>,<br class="hidden sm:block"/>FeedBack, where passionate people gather',
    "about.parallax.description":
      'We continuously strive for technological innovation to provide the best products,<br class="hidden sm:block"/>and R&D investments are also being made continuously.',
    "about.philosophy.title": "Management Philosophy",
    "about.philosophy.description":
      'As an execution-focused distribution platform connecting brands and markets,<br class="hidden sm:block"/>FeedBack is building a mutually beneficial ecosystem that grows together with all partners.',
    "about.timeline.title": "History",
    "about.timeline.2025_09":
      "Hoid 2nd Generation Air Purifier Global Launch (Home Shopping Expansion)",
    "about.timeline.2025_08": "Hoid Cordless Vacuum Cleaner Launch",
    "about.timeline.2025_04":
      "Hoid 1st Generation Air Purifier Launch (3-in-1 Sterilization Technology)",
    "about.timeline.2025_01":
      "Sangsaeng Medical Subsidiary Establishment and Integrated Platform Development Initiation",
    "about.timeline.2024":
      "Simultaneous Launch of Own Brands Hoid, Medifeed, InYourHeart",
    "about.timeline.type.expansion": "Expansion",
    "about.timeline.type.product": "Product Launch",
    "about.timeline.type.founding": "Founding",
    "about.philosophy.value1.title":
      'Customer & Partner-Centered: Realizing<br class="block lg:hidden"/><br class="hidden lg:block"/> a Symbiotic Distribution Model',
    "about.philosophy.value1.description":
      'FeedBack is not simply a place to buy and sell,<br class="hidden lg:block"/>but builds a distribution ecosystem where manufacturers, brands, and retailers can grow together.<br/><br/>Based on trust with clients and partners, we design structures for long-term collaboration and mutual development,<br class="hidden lg:block"/><br class="hidden sm:block lg:hidden"/><span class="font-semibold text-[0F4C82]">pursuing a win-win platform where everyone shares sustainable benefits</span>.',
    "about.philosophy.value2.title":
      'Connecting Brands and Markets<br class="hidden lg:block"/> with Integrated Execution',
    "about.philosophy.value2.description":
      'Beyond simple distribution, we organically connect product planning, branding, marketing, and distribution channels.<br class="hidden lg:block"/><br class="hidden sm:block lg:hidden"/>By combining our unique OEM capabilities with our own brand experience,<br class="hidden lg:block"/>we provide actionable solutions to help brands establish themselves in the market.<br/><br/><span class="font-semibold text-primary">Adding branding to product strength, combining distribution with branding,<br class="hidden lg:block"/>and embedding experience and content into distribution - this is FeedBack\'s way</span>.',
    "about.philosophy.value3.title":
      'Execution-Focused Company<br class="hidden lg:block"/> Creating Competitiveness in Global Markets',
    "about.philosophy.value3.description":
      'We provide global market entry opportunities<br class="hidden lg:block"/>to brands that have grown based in Asia.<br/><br/>Through <span class="font-semibold text-primary">strategic entry design + partnership-based execution</span>,<br class="hidden lg:block"/>we support brand globalization,<br class="hidden lg:block"/>and through collaboration with domestic and international partners,<br class="hidden lg:block"/>create opportunities in <br class="block lg:hidden"/>larger and broader markets.',
    "about.philosophy.value4.title":
      "Building Long-term Partnerships Through Trust",
    "about.philosophy.value4.description":
      'The reason for FeedBack\'s existence is the trust of our partners and customers.<br/><br/>Through <span class="font-semibold text-primary">verified quality and stable supply, transparent distribution processes,<br class="block lg:hidden"/><br class="hidden lg:block"/>and honest after-sales service systems</span>,<br class="hidden lg:block"/>we build a foundation of trust where partners <br class="block lg:hidden"/>can stay together for the long term.',
    "about.timeline.bottom":
      'FeedBack is rapidly expanding its market through connections with domestic and international home shopping,<br class="hidden sm:block"/>e-commerce, and wholesale channels simultaneously with product launches.',
    "about.ceo.quote":
      '"We prioritize customer happiness and global partnerships above all."',
    "about.ceo.title": "CEO Message",
    "about.ceo.name": "Song Haemin, Jeong Seonghyeon",
    "about.ceo.position": "Co-CEOs of FeedBack Inc.",
    "about.ceo.motto":
      '"Growing as a platform company<br/>connecting brands and markets"',
    "about.ceo.message1":
      "Hello, we are Song Haemin and Jeong Seonghyeon, Co-CEOs of FeedBack Inc.",
    "about.ceo.message2":
      "In the rapidly changing global distribution market, FeedBack is presenting a new distribution structure as a connector and executor between brands and markets.",
    "about.ceo.message3":
      "We are not simply a 'company that sells products', but are working to create a structure that satisfies manufacturers, distributors, and consumers as a partner that grows brands together and establishes them in the market.",
    "about.ceo.highlight":
      "Adding branding to product strength, connecting distribution networks to branding, and embedding content and experience into distribution. This is FeedBack's way.",
    "about.ceo.message4":
      "We will continue to be a company that creates opportunities in larger and broader markets together with our domestic and international partners. Thank you.",
    "about.org.title": "Organization Chart",
    "about.org.description":
      'Through systematic organizational structure and expertise in each field,<br class="hidden sm:block"/>we provide the best service to our customers.',

    // Service Page
    "서비스 소개": "Our Services",
    "EXPERTISE & SOLUTION": "EXPERTISE & SOLUTION",
    "피드백은 유통부터 마케팅까지, 글로벌 비즈니스를 위한 전문 서비스를 제공합니다.":
      "FeedBack provides professional services for global business, from distribution to marketing.",
    "유통 / 수출입 중개": "Distribution / Import-Export Brokerage",
    "아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다. 다양한 제품군에 대한 전문적인 수출입 컨설팅과 물류 솔루션을 함께 제공하여 글로벌 비즈니스를 지원합니다.":
      "We provide efficient import-export and brokerage services through distribution networks across Asia. We support global business by offering professional import-export consulting and logistics solutions for various product categories.",
    "자체 브랜드 제조 (OEM)": "Private Label Manufacturing (OEM)",
    "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다. 품질 관리부터 제품 개발까지 전 과정을 책임집니다.":
      "We support brand growth through manufacturing and OEM production of 4 private brands: Hoid, Medifeed, InYourHeart, and Sangsaeng. We are responsible for the entire process from quality control to product development.",
    "글로벌 마케팅/브랜딩": "Global Marketing/Branding",
    "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다. 브랜드 아이덴티티 개발부터 글로벌 시장 진출 전략까지 종합적인 마케팅 서비스를 지원합니다.":
      "We provide global branding solutions through home shopping partnerships and digital marketing. We support comprehensive marketing services from brand identity development to global market entry strategies.",
    "의료관광 플랫폼": "Medical Tourism Platform",
    "상생 브랜드를 통한 의료관광 플랫폼 운영으로 한국의 우수한 의료 서비스를 전 세계에 연결합니다. 태국, 베트남을 시작으로 아시아 전역으로 서비스를 확장하고 있습니다.":
      "Through the Sangsaeng brand medical tourism platform, we connect Korea's excellent medical services to the world. We are expanding services across Asia, starting with Thailand and Vietnam.",
    "앱 개발": "App Development",
    "의료/케어 통합 앱 개발로 디지털 헬스케어 솔루션을 제공합니다. 다국어 지원과 실시간 상담 기능을 통해 글로벌 사용자들에게 편리한 서비스를 제공합니다.":
      "We provide digital healthcare solutions through integrated medical/care app development. We offer convenient services to global users through multilingual support and real-time consultation features.",
    "서비스 문의": "Service Inquiry",
    "브랜드 보기": "View Brands",
    "상담 신청": "Request Consultation",
    "상생 브랜드 보기": "View Sangsaeng Brand",
    "앱 정보 보기": "View App Info",
    "프로젝트 문의": "Project Inquiry",
    "더 자세한 상담이 필요하신가요?": "Need More Detailed Consultation?",
    "전문 컨설턴트가 귀하의 비즈니스에 맞는 최적의 솔루션을 제안해드립니다.":
      "Our professional consultants will propose the best solution for your business.",
    "무료 상담 신청": "Free Consultation",

    // Brand Page
    "브랜드 소개": "Our Brands",
    "혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.":
      "Introducing FeedBack's own brands based on innovative technology and design. Each brand offers unique value and vision to provide the best experience to customers.",
    "브랜드 파트너십에 관심이 있으신가요?": "Interested in Brand Partnership?",
    "FeedBack과 함께 혁신적인 브랜드를 만들어보세요. 기획부터 유통까지 전 과정을 지원하여 성공적인 브랜드 런칭을 도와드립니다.":
      "Create an innovative brand with FeedBack. We support the entire process from planning to distribution to help you successfully launch your brand.",
    "파트너십 문의하기": "Inquire About Partnership",

    // Brand Detail Pages - Common
    "브랜드 목록으로 돌아가기": "Back to Brand List",

    // Hoid Brand Page
    "hoid.hero.title": "Design that Changes Even the Air",
    "hoid.hero.description": "A smart home appliance brand that revolutionizes everyday air quality by combining minimalist design with cutting-edge technology.",
    "hoid.hero.cta": "Visit Hoid Website",
    "hoid.features.title": "Innovative Technology",
    "hoid.features.subtitle": "Experience a completely new air purification with cutting-edge technology hidden within minimalist design",

    // Asran Brand Page
    "asran.hero.tagline": "Pots with Both German Technology and Reasonable Price",
    "asran.hero.description": "Boasting excellent heat conductivity and durability with SUS410 stainless steel and triple-layer bottom structure. A premium pot that can be used perfectly in any kitchen environment, compatible with both induction and gas.",
    "asran.hero.cta": "Visit ASRAN Website",
    "asran.features.title": "ASRAN's Special Technology",
    "asran.features.subtitle": "Premium kitchenware born from the meeting of Germany's precision technology and Korea's practicality",

    // Medifeed Brand Page
    "medifeed.hero.title": "Small Habits that Protect Every Day",
    "medifeed.hero.description": "A functional nutritional supplement brand focused on gum and eye health, providing health solutions that anyone can easily choose based on practicality and safety.",
    "medifeed.features.title": "Specialized Health Solutions",
    "medifeed.features.subtitle": "Taking responsibility for everyday health with specialized supplements developed based on scientific research",

    // LaCeras Brand Page
    "laceras.hero.title": "Where Tradition Meets Modern",
    "laceras.hero.subtitle": "French Luxury",
    "laceras.hero.description": "A luxury carrier brand combining French craftsmanship with modern sophistication. Proposing perfect travel solutions from business to luxury travel.",
    "laceras.hero.cta": "Visit La Ceras Website",
    "laceras.features.title": "French Craftsmanship",

    // Carvella Brand Page
    "carvella.hero.title": "Italian Artisan Precision",
    "carvella.hero.subtitle": "To Your Kitchen",
    "carvella.hero.description": "A premium cookware brand completed with traditional Italian craftsmanship. Boasting excellent heat conduction and durability with premium stainless steel and multi-layer structure.",
    "carvella.hero.cta": "Visit Carvella Website",
    "carvella.features.title": "Italian Craftsmanship",

    // InYourHeart Brand Page
    "inyourheart.hero.title": "Adding Emotion to Your Skin",
    "inyourheart.hero.description": "A premium skincare brand leading the global K-beauty market with clean beauty philosophy and emotional package design.",
    "inyourheart.values.title": "Beauty Philosophy with Emotion",
    "inyourheart.values.subtitle": "Emotional skincare that is gentle on the skin and warms the heart",

    // Sangsaeng Brand Page
    "sangsaeng.hero.title": "Connecting Korean Healthcare to the World",
    "sangsaeng.hero.description": "A comprehensive medical platform connecting Korea's excellent medical services to the world, from medical tourism to global healthcare platforms.",
    "sangsaeng.hero.cta": "Visit Sangsaeng Website",
    "sangsaeng.services.title": "Global Healthcare Ecosystem",
    "sangsaeng.services.subtitle": "Providing integrated healthcare solutions from medical services to branding",

    // Footer
    "footer.company": "Company Info",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.follow": "Follow",
    "footer.copyright": "© 2024 FeedBack. All rights reserved.",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("KR");

  const t = (key: string): string => {
    return (translations[currentLanguage] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setCurrentLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
