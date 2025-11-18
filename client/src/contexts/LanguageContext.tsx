import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "KR" | "EN" | "TH";

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
    // Footer
    "footer.tagline": "유통부터 자체브랜드까지 한국의 가치를 세계로 연결합니다",
    "footer.about":
      "유통, 브랜드 제조, 마케팅, 의료관광 플랫폼을 통해 상생의 가치로 글로벌 시장에 진출하는 종합 서비스 기업입니다.",
    "footer.sections.services": "서비스",
    "footer.sections.brands": "브랜드",
    "footer.sections.company": "회사",

    "footer.services.distribution": "유통/수출입 중개",
    "footer.services.manufacturing": "자체 브랜드 제조",
    "footer.services.marketing": "글로벌 마케팅",
    "footer.services.medical": "의료관광 플랫폼",
    "footer.services.app": "앱 개발",

    "footer.brands.hoid": "Hoid",
    "footer.brands.asran": "아슬란",
    "footer.brands.laceras": "라세라스",
    "footer.brands.carvella": "카르벨라",
    "footer.brands.medifeed": "Medifeed",
    "footer.brands.inyourheart": "InYourHeart",
    "footer.brands.sangsaeng": "상생",

    "footer.company.about": "회사소개",
    "footer.company.news": "뉴스",
    "footer.company.contact": "연락처",

    "footer.bottom.copyright": "© 2024 FeedBack Corp. All rights reserved.",
    "footer.bottom.bizinfo":
      "사업자등록번호: 296-87-03628 | 대표이사: 송해민, 정성현",
    "footer.bottom.privacy": "개인정보처리방침",
    "footer.bottom.terms": "이용약관",
    "footer.bottom.cookies": "쿠키정책",

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
    "brands.moz.category": "프리미엄 온열 라이프 브랜드",
    "brands.moz.slogan": "따뜻하고 안전한 수면 환경 연구",
    "brands.moz.description":
      "첨단 카본 히팅 기술과 안전 인증 설계로 건강한 숙면을 제공합니다. 몸과 마음이 회복되는 따뜻한 휴식, 그것이 모즈의 시작입니다.",
    "brands.moz.products.0": "카본 탄소매트 싱글",
    "brands.moz.products.1": "카본 탄소매트 더블",

    // Common UI
    "ui.view_brand_detail": "브랜드 자세히 보기",
    "ui.visit_website": "브랜드 홈페이지 가기",
    "ui.learn_more": "자세히 보기",

    // B2B2C Section
    "b2b2c.header.title": "제조사부터 소비자까지",
    "b2b2c.header.subtitle": "완전한 유통 생태계를 구축합니다.",
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
      "Hoid의 프리미엄 라이프스타일 가전 브랜드로서 첫 번째 대표 제품인 Hoid 공기청정기 1세대를 공식 출시했습니다.",
    "news.1.content":
      "Hoid는 프리미엄 라이프스타일 가전 브랜드로서 첫 번째 대표 제품인 Hoid 공기청정기 1세대를 공식 출시했습니다. 이 제품은 강력한 3중 필터 시스템과 360도 전방위 공기 순환 구조를 적용하여, 실내 공기를 빠르게 정화하고 최상의 청정도를 유지합니다. 또한, 세련되고 미니멀한 디자인은 어떤 인테리어 공간에도 자연스럽게 어우러지며, 저소음 모터와 에너지 절약 기능까지 갖추어 사용자의 생활 품질을 높여줍니다. 이번 출시를 통해 Hoid는 공기청정기 시장에 본격 진입하며, 향후 지속적인 기술 혁신과 제품 라인업 확장을 예고했습니다.",
    "news.2.date": "2025.08.08",
    "news.2.title": "Hoid 청소기 공장 방문",
    "news.2.summary":
      "Hoid는 제품의 품질과 신뢰성을 직접 확인하기 위해 최근 Hoid 무선 청소기 생산 공장을 방문했습니다.",
    "news.2.content":
      "Hoid는 제품의 품질과 신뢰성을 직접 확인하기 위해 최근 Hoid 무선 청소기 생산 공장을 방문했습니다. 생산 현장에서는 최신 자동화 라인과 숙련된 기술 인력이 협력하여 완벽한 품질의 제품을 생산하고 있었으며, 각 단계별로 엄격한 품질 관리 절차가 적용되고 있었습니다. 특히, 배터리 내구성 테스트와 모터 성능 점검 등 출고 전 필수 검증 과정을 거쳐 소비자에게 최상의 상태로 전달되도록 하고 있습니다. 이번 공장 방문은 Hoid가 추구하는 품질 우선 철학을 현장에서 다시 한번 확인하는 중요한 계기가 되었습니다.",
    "news.3.date": "2025.10.13",
    "news.3.title": "ASRAN·Carvella·La Ceras·식구 자사 브랜드 런칭",
    "news.3.summary":
      "Feedback은 글로벌 프리미엄 주방·리빙 브랜드 ASRAN, Carvella와 럭셔리 캐리어 브랜드 La Ceras, 프리미엄 수저 브랜드 식구를 자사 브랜드로 런칭했습니다.",
    "news.3.content":
      "Feedback은 글로벌 프리미엄 주방·리빙 브랜드 ASRAN, Carvella와 럭셔리 캐리어 브랜드 La Ceras, 프리미엄 커트러리 브랜드 식구를 자사 브랜드로 런칭했습니다. 이번 런칭을 통해 Feedback은 네 브랜드의 전 제품에 대한 국내 유통, 마케팅, 고객 서비스 전반을 담당하게 됩니다. ASRAN은 스테인리스 하이엔드 쿡웨어 브랜드로, 정밀한 열전도 기술과 세련된 디자인으로 유명합니다. Carvella는 이탈리아 감성을 담은 프리미엄 키친 브랜드로, 숙련된 장인의 노하우를 바탕으로 제작된 제품군을 선보입니다. La Ceras는 하이브리드 소재와 세련된 디자인으로 주목받는 프리미엄 캐리어 브랜드입니다. 식구는 한국적인 미를 더한 커트러리를 선보이는 브랜드입니다. Feedback은 이번 독점 계약을 통해 글로벌 프리미엄 리빙 브랜드를 국내 시장에 소개하고, 지속적인 품질 관리와 브랜드 가치 강화를 통해 소비자에게 새로운 라이프스타일 경험을 제공할 계획입니다.",
    "news.4.date": "2025.10.14",
    "news.4.title":
      "Hoid 공기청정기 2세대 출시, 하나의 제품으로 사계절 공기질 관리 완성",
    "news.4.summary":
      "HEPA14 의료급 필터와 UV 살균 기능을 탑재한 5-in-1 무날개 공기청정 냉온풍기가 출시되어 78㎡ 광범위 커버리지로 프리미엄 공기청정 시장을 공략한다.",
    "news.4.content":
      "HEPA14 의료급 필터와 UV 살균 기능 탑재, 78㎡ 광범위 커버리지로 프리미엄 공기청정 시장 공략\n\n국내 공기가전 시장에 사계절 모두 사용 가능한 프리미엄 다기능 공기청정 냉온풍기가 출시되어 주목받고 있다.\n\n이번에 선보인 제품은 냉풍, 온풍, 공기청정, 음이온 발생, UV 살균 등 5가지 기능을 하나로 통합한 5-in-1 올인원 솔루션으로, 기존의 단순 냉온풍기나 공기청정기와는 차별화된 토털 공기질 관리 시스템을 제공한다.\n\n(사진: 5-in-1 무날개 공기청정 냉온풍기 제품 이미지)\n\n<strong>의료급 필터로 미세먼지 99.99% 제거</strong>\n\n이 제품의 가장 큰 특징은 HEPA14 의료급 필터를 적용했다는 점이다. HEPA14는 병원 수술실이나 무균실에서 사용되는 최고 등급의 필터로, 0.3마이크로미터 크기의 초미세먼지까지 99.99% 이상 걸러낼 수 있다. 일반 가정용 공기청정기에 주로 쓰이는 HEPA13 필터보다 한 단계 높은 등급으로, 알레르기나 호흡기 질환이 있는 가정에서도 안심하고 사용할 수 있다.\n\n여기에 360도 전 방향 필터링 시스템을 적용해 제품 주변 어느 방향에서든 공기를 흡입하고 정화할 수 있도록 설계됐다. 이를 통해 최대 78㎡(약 24평)의 넓은 공간까지 효과적으로 커버할 수 있어, 거실이나 사무실 등 넓은 공간에서도 충분한 공기청정 능력을 발휘한다.\n\n<strong>UV 살균과 음이온으로 위생적인 실내 환경 구현</strong>\n\n단순히 먼지를 걸러내는 것을 넘어, UV 살균 기능을 탑재해 공기 중의 세균과 바이러스까지 제거한다. 자외선을 이용한 살균 방식은 화학물질을 사용하지 않아 안전하며, 특히 환절기 감기나 독감 예방에도 도움을 줄 수 있다.\n\n또한 음이온 발생 기능을 통해 실내 공기를 상쾌하게 유지한다. 음이온은 공기 중의 양이온과 결합해 미세먼지를 가라앉히고, 삼림욕 효과를 내어 심리적 안정감까지 제공하는 것으로 알려져 있다.\n\n<strong>사계절 강력한 바람, 안전한 무날개 설계</strong>\n\n냉풍과 온풍 기능을 모두 갖춰 여름에는 시원하게, 겨울에는 따뜻하게 사용할 수 있다. 특히 강한 사계절 바람을 구현해 계절에 관계없이 충분한 풍량을 제공하며, 실내 공기 순환을 원활하게 돕는다.\n\n무엇보다 안전성을 최우선으로 고려한 무날개 설계가 눈길을 끈다. 날개가 없는 구조로 어린이나 반려동물이 있는 가정에서도 안심하고 사용할 수 있으며, 청소와 관리도 간편하다. 심플하고 모던한 화이트 컬러의 디자인은 어떤 인테리어에도 자연스럽게 어울린다.\n\n<strong>1년 무상 A/S와 추가 필터 제공</strong>\n\n제조사는 제품에 대한 자신감을 바탕으로 1년 기본 보증과 무상 A/S 서비스를 제공한다. 또한 구매 시 추가 필터 1개를 무상으로 제공해 장기간 경제적으로 사용할 수 있도록 배려했다.\n\n공기질에 대한 소비자들의 관심이 높아지고 있는 가운데, 공기청정과 냉난방 기능을 하나로 통합한 이번 제품이 프리미엄 공기가전 시장에서 어떤 반향을 일으킬지 업계의 주목이 집중되고 있다.",
    "news.5.date": "2025.08.20",
    "news.5.title": "Hoid 청소기 출시",
    "news.5.summary":
      "Hoid의 프리미엄 무선 청소기가 공식적으로 출시되었습니다.",
    "news.5.content":
      "Hoid의 프리미엄 무선 청소기가 공식적으로 출시되었습니다. 이 제품은 고성능 모터와 강력한 흡입력, 장시간 사용이 가능한 고효율 배터리를 갖추어 대형 주택부터 소형 공간까지 효율적으로 청소할 수 있습니다. 또한, 무게를 최소화한 인체공학적 설계로 손목 부담을 줄였으며, 브러시 헤드 교체를 통해 바닥, 카펫, 침구 등 다양한 환경에서 최적의 성능을 발휘합니다. 먼지통과 필터는 물세척이 가능하여 위생적으로 관리할 수 있고, 모든 구성품은 사용 편의성을 최우선으로 설계되었습니다. 이번 출시를 통해 Hoid는 청소기 시장에서도 새로운 기준을 제시하고 있습니다.",

    "news.6.date": "2025.10.01",
    "news.6.title": "ASRAN, 하이엔드 스테인리스 쿡웨어 3종 정식 런칭",
    "news.6.summary":
      "프리미엄 주방 브랜드 ASRAN이 스테인리스 냄비 3종, 압력솥, 프라이팬 3종으로 구성된 하이엔드 쿡웨어 라인업을 공식 출시했습니다.",
    "news.6.content":
      "독일 기술력 기반 SUS410 스틸과 3중 바닥 구조로 프리미엄 조리 경험 제공\n\n피드백(대표 정성현)이 선보이는 프리미엄 주방 브랜드 ASRAN이 하이엔드 스테인리스 쿡웨어 라인업을 2025년 10월 1일 공식 출시했다고 밝혔다.\n\n이번에 출시된 제품군은 스테인리스 냄비 3종, 압력솥, 프라이팬 3종으로 구성되어 있으며, 독일 기술력을 기반으로 한 SUS410 스테인리스 스틸과 3중 바닥 구조를 적용해 열전도율과 내구성을 극대화한 것이 특징이다.\n\n(사진: ASRAN 쿡웨어 제품 라인업)\n\n<strong>독일 기술력과 만난 프리미엄 조리 솔루션</strong>\n\nASRAN 쿡웨어는 가정용부터 전문가용까지 폭넓게 활용 가능한 설계로 개발됐다. 특히 이중 압력 조절 시스템과 정밀한 열전도층을 적용해 조리 중 온도 균형을 유지함으로써 식재료 본연의 맛과 영양을 보존할 수 있도록 설계됐다.\n\nSUS410 스테인리스 스틸은 뛰어난 내식성과 변색 저항성을 자랑하며, 세척 후에도 장기간 광택을 유지할 수 있어 위생적인 주방 환경 조성에 최적화되어 있다. 또한 3중 바닥 구조는 인덕션을 포함한 모든 열원에서 고른 열 분포를 구현해 어떤 주방 환경에서도 완벽한 조리가 가능하다.\n\n<strong>기능성과 심미성을 동시에 구현한 디자인</strong>\n\nASRAN은 제품 개발 과정에서 디자인팀과 요리 전문가가 협업하여 실제 조리 환경에서의 사용자 편의성을 극대화했다. 프리미엄 미러 마감과 절제된 곡선 디자인은 주방의 품격을 높이는 동시에 실용성도 갖췄다.\n\n손잡이는 인체공학적 설계를 적용해 장시간 조리에도 손목 부담을 최소화했으며, 제품의 무게 밸런스 또한 최적화했다. 유리 뚜껑에 적용된 증기 배출 밸브는 조리 과정을 직관적으로 제어할 수 있게 해 편의성을 한층 강화했다.\n\n피드백 관계자는 ASRAN은 단순한 조리도구를 넘어 요리의 완성도를 높이는 셰프의 파트너로 자리매김할 것이라며 앞으로도 기술적 혁신과 감각적 디자인을 결합한 제품을 지속적으로 선보이며, 매일의 요리를 예술로 바꾸는 브랜드로 성장해 나가겠다고 밝혔다.\n\nASRAN 하이엔드 쿠웨어는 공식 온라인몰과 주요 유통 채널을 통해 만나볼 수 있다.",

    "news.7.date": "2025.10.10",
    "news.7.title": "La Ceras, 프렌치 럭셔리 캐리어 4종 세트 정식 런칭",
    "news.7.summary":
      "프랑스 감성과 현대적 기술력을 결합한 프리미엄 캐리어 브랜드 La Ceras가 14·20·24·28인치로 구성된 럭셔리 4종 세트를 정식 출시했습니다.",
    "news.7.content":
      "프랑스 장인정신과 모던 디자인 결합, PP·PC 하이브리드 구조로 경량성과 내구성 동시 구현\n\n피드백(대표 정성현)이 2025년 10월 10일 프리미엄 캐리어 브랜드 La Ceras(라 세라스)의 4종 세트(14·20·24·28인치)를 공식 출시했다고 밝혔다.\n\nLa Ceras는 프랑스의 장인정신과 모던한 디자인 철학이 결합된 브랜드로, PP(폴리프로필렌)와 PC(폴리카보네이트)의 하이브리드 구조를 적용해 가벼우면서도 견고한 내구성을 제공하는 것이 특징이다.\n\n(사진: La Ceras 캐리어를 들고 이동하는 모습)\n\n<strong>프랑스 공방 감성을 담은 프리미엄 트래블 솔루션</strong>\n\n이번에 출시된 La Ceras 캐리어는 14인치부터 28인치까지 다양한 사이즈로 구성되어 있어 여행 목적과 기간에 따라 선택할 수 있다. 14인치는 항공 기내 반입 규정에 적합하게 설계되어 단기 출장이나 여행에 최적화되어 있으며, 28인치는 장거리 여행과 대용량 수납에 특화되어 있다.\n\n특히 210D 베어링 기반의 무소음 휠 시스템을 적용해 부드럽고 안정적인 이동감을 구현했다. 이는 공항이나 호텔 등 조용한 환경에서도 소음 걱정 없이 사용할 수 있도록 설계된 것이 특징이다.\n\n내부는 이중 분리 수납 구조와 고급 방수 라이닝을 적용했으며, 글로벌 지퍼 브랜드 YKK 지퍼를 사용해 실용성과 내구성을 모두 확보했다. 이를 통해 의류와 소지품을 체계적으로 정리할 수 있으며, 예기치 않은 기후 변화에도 내용물을 안전하게 보호할 수 있다.\n\n<strong>소장가치를 더한 프리미엄 디테일</strong>\n\nLa Ceras는 단순한 이동 수단을 넘어 사용자의 여정 전반을 함께하는 트래블 컴패니언을 지향한다. 각 제품에는 고유 시리얼 넘버가 각인되어 진품 인증과 함께 소장가치를 높였으며, 파리 공방 감성을 살린 라벨링 디자인으로 브랜드 아이덴티티를 명확히 했다.\n\n세련된 블랙 컬러와 절제된 곡선 디자인은 비즈니스와 레저 모두에 어울리는 범용성을 제공하며, 프리미엄 소재와 마감 처리로 고급스러운 외관을 완성했다.\n\n<strong>글로벌 시장 진출 계획도 추진</strong>\n\n피드백 관계자는 La Ceras는 여행의 품격이라는 가치를 실현하고, 고객의 개성과 스타일을 완성하는 프리미엄 트래블 브랜드로 성장해 나갈 것이라며 향후 글로벌 공항 면세점 입점과 유럽 시장 진출도 적극 추진할 예정이라고 밝혔다.\n\nLa Ceras 프렌치 럭셔리 캐리어는 공식 온라인몰과 주요 유통 채널을 통해 만나볼 수 있다.",
    "news.8.date": "2025.10.13",
    "news.8.title": "Carvella, 이탈리아 감성의 프리미엄 칼·도마 세트 런칭",
    "news.8.summary":
      "이탈리아 장인정신을 담은 프리미엄 키친 브랜드 Carvella가 6종 칼 세트와 스테인리스 도마로 구성된 Carvella Signature Set을 공식 출시했습니다.",
    "news.8.content":
      "이탈리아 북부 금속공예 기술 기반, 고탄소강 칼날과 304 스테인리스 도마로 정밀 절삭력 구현\n\n피드백(대표 정성현)의 프리미엄 키친 브랜드 Carvella(카르벨라)가 2025년 10월 13일 6종 칼 세트와 스테인리스 도마로 구성된 Carvella Signature Set을 정식 출시했다고 밝혔다.\n\nCarvella는 이탈리아 북부 장인들의 금속공예 기술을 바탕으로 정밀한 절삭력과 내구성을 갖춘 프리미엄 키친 브랜드로, 이번 시그니처 세트는 프로 셰프와 홈 셰프 모두를 위한 프리미엄 조리 솔루션으로 개발됐다.\n\n(사진: Carvella Signature Set 구성품 전체 이미지)\n\n<strong>이탈리아 장인 기술로 완성한 정밀 절삭 시스템</strong>\n\nCarvella Signature Set의 칼 세트는 고탄소강을 사용해 장기간 사용에도 날카로움과 내구성을 유지할 수 있도록 설계됐다. 고탄소강은 일반 스테인리스 스틸 대비 경도가 높아 정밀한 절삭이 가능하며, 변형에 강해 전문가용 주방 도구로 널리 사용되는 소재다.\n\n핸들은 미끄럼 방지 기능을 갖춘 합성 소재를 적용해 세밀한 조리 작업에도 안정감을 제공한다. 인체공학적 설계로 손목 부담을 최소화했으며, 장시간 사용에도 피로도를 줄일 수 있도록 무게 밸런스를 최적화했다.\n\n세트에 포함된 304 스테인리스 스틸 도마는 위생적이고 변색에 강해 장기간 사용에도 깨끗한 상태를 유지할 수 있다. 일반 나무 도마와 달리 세균 번식 위험이 적고, 식기세척기 사용이 가능해 관리가 편리하다는 장점이 있다.\n\n<strong>장인의 손길로 완성한 프리미엄 디테일</strong>\n\nCarvella의 모든 제품은 장인의 수작업 폴리싱 공정을 거쳐 브랜드 고유의 광택과 밸런스를 완성했다. 스테인리스와 블랙톤의 조화는 어떤 주방 환경에서도 세련된 존재감을 드러내며, 프리미엄 포장 구성으로 선물용 가치도 높였다.\n\n6종 칼 세트는 셰프 나이프, 빵 나이프, 유틸리티 나이프, 페어링 나이프, 칼갈이, 주방 가위로 구성되어 다양한 조리 상황에 대응할 수 있도록 설계됐다. 각 제품에는 Carvella 로고가 각인되어 있어 브랜드 아이덴티티를 명확히 했다.\n\n<strong>지속 가능한 브랜드 철학으로 글로벌 시장 공략</strong>\n\n피드백 관계자는 Carvella는 단순한 조리도구가 아닌 요리 예술의 완성품이라며 이탈리아 장인의 기술과 감성을 이어받아 유럽과 아시아 시장에서도 프리미엄 키친 브랜드로 자리매김할 것이라고 밝혔다.\n\n또한 지속 가능한 생산 공정과 친환경으로 브랜드 철학을 확장해 나갈 것이라며 장기적으로는 환경과 품질을 모두 고려한 프리미엄 키친 브랜드로 성장하겠다고 덧붙였다.\n\nCarvella Signature Set은 공식 온라인몰과 주요 유통 채널을 통해 만나볼 수 있다.",

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
    "contact.title": "Contact Us",
    "contact.subtitle.line1": "FeedBack과 함께 새로운 비즈니스 기회를",
    "contact.subtitle.line2": "만들어보세요.",
    "contact.section.contact": "연락처",
    "contact.section.departments": "관련부서",
    "contact.section.social": "소셜미디어",

    "contact.info.address.title": "본사 주소",
    "contact.info.address.content":
      "인천 연수구 송도과학로 80, 송도 AIT센터 1301호, 1302호",
    "contact.info.phone.title": "대표전화",
    "contact.info.email.title": "이메일",
    "contact.info.hours.title": "운영시간",
    "contact.info.hours.content": "평일 10:00 - 19:00, 주말 및 공휴일 휴무",

    "contact.dept.management": "경영지원부",

    "contact.form.title": "문의 남기기",
    "contact.form.name": "이름",
    "contact.form.name.placeholder": "이름을 입력하세요",
    "contact.form.company": "회사명",
    "contact.form.company.placeholder": "회사명을 입력하세요",
    "contact.form.email": "이메일",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.phone": "연락처",
    "contact.form.phone.placeholder": "+82-10-0000-0000",
    "contact.form.inquiry_type": "문의 유형",
    "contact.form.inquiry_type.placeholder": "문의 유형을 선택하세요",
    "contact.form.inquiry_type.business": "사업 문의",
    "contact.form.inquiry_type.brand": "브랜드 문의",
    "contact.form.inquiry_type.partner": "파트너 제안",
    "contact.form.message": "문의 내용",
    "contact.form.message.placeholder": "문의 내용을 입력하세요",
    "contact.form.privacy": "개인정보 수집 및 이용에 동의합니다.",
    "contact.form.privacy.link": "자세히 보기",
    "contact.form.privacy.error.title": "개인정보 동의 필요",
    "contact.form.privacy.error.description":
      "진행을 위해 개인정보 처리방침에 동의해주세요.",
    "contact.form.submit": "문의 보내기",
    "contact.form.sending": "전송하기...",

    "contact.errors.required.title": "입력 오류",
    "contact.errors.required.description":
      "이름, 이메일, 문의내용은 필수 항목입니다.",

    "contact.toast.success.title": "메일 발송 성공",
    "contact.toast.success.description":
      "문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.",
    "contact.toast.gmail.title": "Gmail 인증 필요",
    "contact.toast.gmail.description": "Gmail API 인증이 필요합니다.",
    "contact.toast.gmail.link": "여기를 클릭하여 Gmail 인증 진행",
    "contact.toast.unknown": "알 수 없는 오류가 발생했습니다.",
    "contact.toast.send_error_console": "이메일 발송 오류:",
    "contact.toast.fail.title": "발송 실패",
    "contact.toast.fail.description":
      "이메일 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",

    "contact.map.title": "오시는 길",

    // About Page
    "about.story.main":
      '<span class="text-white">피드백은 브랜드의 성장을 <br>유통으로 설계합니다.</span>',
    "about.story.sub":
      'Hoid, Medifeed, InYourHeart, 상생 등 자체 브랜드와 글로벌 파트너십을 기반으로,<br class="hidden sm:block"/>기획부터 제조·유통·브랜딩까지 전 과정을 함께합니다.',
    "about.story.detail":
      "피드백은 브랜드의 성장을 유통으로 설계합니다.",
    "about.banner.title":
      '피드백은 브랜드의 성장을<br class="block" /><span class="text-[#ffffff]"> 유통으로 설계합니다</span>',
    "about.parallax.title":
      '고객의 삶 속에 스며든 FeedBack의 브랜드 하나하나가 고객 여러분의 하루를<br class="hidden sm:block"/>더욱 편리하고 행복하게 만들 수 있도록 언제나 노력하는 FeedBack이 되겠습니다.',
    "about.parallax.description":
      '최고의 제품을 안겨드리기 위해 기술혁신에 끊임없이 노력을 기울이고 있으며,<br class="hidden sm:block"/>이를 위한 연구개발투자 또한 지속적으로 이루어지고 있습니다.',
    "about.philosophy.title": "경영철학",
    "about.philosophy.description":
      'FeedBack은 브랜드와 시장을 연결하는 실행 중심의 유통 플랫폼으로서<br class="hidden sm:block"/>모든 파트너와 함께 성장하는 상생의 생태계를 구축하고 있습니다.',
    "about.timeline.title": "연혁",
    "about.timeline.2025_10":
      "Asran, Carvella, La Ceras, 식구 자사 브랜드 런칭",
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
      ' 고객·파트너 중심: 공생의 유통 모델을<br class="block lg:hidden"/><br class="hidden lg:block"/> 실현합니다',
    "about.philosophy.value1.description":
      'FeedBack은 단순히 물건을 사고파는 곳이 아닌,<br class="hidden lg:block"/>제조사·브랜드·소매처가 함께 성장할 수 있는 유통 생태계를 구축합니다.<br/><br/>고객사와 파트너의 신뢰를 기반으로 장기 협력과 함께 발전하는<br class="hidden lg:block"/>구조를 설계하며,<br class="hidden sm:block lg:hidden"/><span class="font-semibold text-[0F4C82]">모두가 지속 가능한 이익을 나누는 상생 플랫폼</span>을 <br class="block lg:hidden"/>지향합니다.',
    "about.philosophy.value2.title":
      "통합 실행력으로 브랜드와 시장을 연결합니다",
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
    "혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.":
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
    "hoid.hero.description":
      "미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트 가전 브랜드입니다.",
    "hoid.hero.cta": "Hoid 홈페이지 가기",
    "hoid.features.title": "혁신적인 기술력",
    "hoid.features.subtitle":
      "미니멀한 디자인 속에 숨어있는 첨단 기술로 완전히 새로운 공기청정 경험을 제공합니다",
    "hoid.homeshopping.date": "2025년 8월 런칭",
    "hoid.homeshopping.heading": "프리미엄 디자인 가전, 이제 집에서 만나보세요",
    "hoid.homeshopping.description":
      "프리미엄 디자인 가전 브랜드 호이드가 드디어 홈쇼핑을 통해 여러분을 찾아갑니다. 세련된 디자인과 뛰어난 성능, 그리고 생활을 바꾸는 혁신적인 기술을 이제 TV 속에서 직접 확인하세요.",
    "hoid.channels.title": "전국 어디서나 만날 수 있는",
    "hoid.channels.subtitle":
      "다양한 유통 채널을 통해 고객 여러분께 더 가깝게 다가갑니다",
    "hoid.channel1.title": "홈쇼핑",
    "hoid.channel1.description": "홈쇼핑 채널을 통한 직접 판매",
    "hoid.channel2.title": "스마트스토어",
    "hoid.channel2.description": "온라인 공식 스토어 운영",
    "hoid.channel3.title": "글로벌 셀러",
    "hoid.channel3.description": "해외 온라인 플랫폼 진출",
    "hoid.channel4.title": "오프라인 매장",
    "hoid.channel4.description": "전국 가전 매장 및 백화점",
    "hoid.cta.title": "깨끗한 공기, 새로운 일상",
    "hoid.cta.description":
      "HOID와 함께 건강하고 쾌적한 실내 환경을 만들어보세요",
    "hoid.cta.button": "문의하기",

    // Asran Brand Page
    "asran.hero.tagline": "독일 기술과 합리적 가격을 모두 갖춘 냄비",
    "asran.hero.description":
      "SUS410 스테인리스 스틸과 3중 바닥구조로 뛰어난 열전도율과 내구성을 자랑합니다. 인덕션과 가스 겸용으로 어떤 주방환경에서도 완벽하게 사용 가능한 프리미엄 냄비입니다.",
    "asran.hero.cta": "ASRAN 홈페이지 가기",
    "asran.features.title": "ASRAN만의 특별한 기술",
    "asran.features.subtitle":
      "독일의 정밀한 기술력과 한국의 실용성이 만나 탄생한 프리미엄 주방용품",

    // Medifeed Brand Page
    "medifeed.hero.title": "매일을 지키는 작은 습관",
    "medifeed.hero.description":
      "잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 누구나 쉽게 선택할 수 있는 건강 솔루션을 제공합니다.",
    "medifeed.features.title": "전문화된 건강 솔루션",
    "medifeed.features.subtitle":
      "과학적 연구를 바탕으로 개발된 특화 영양제로 일상의 건강을 책임집니다",
    "medifeed.category1.title": "잇몸 건강 전문",
    "medifeed.category1.description":
      "치주질환 예방과 잇몸 건강 유지를 위한 전문 영양제",
    "medifeed.category1.ingredient1": "코엔자임 Q10",
    "medifeed.category1.ingredient2": "비타민 C 복합체",
    "medifeed.category1.ingredient3": "아연 & 셀레늄",
    "medifeed.category1.ingredient4": "GMP 인증",
    "medifeed.category2.title": "눈 건강 전문",
    "medifeed.category2.description":
      "디지털 시대 눈의 피로와 시력 보호를 위한 기능성 영양제",
    "medifeed.category2.ingredient1": "루테인 & 지아잔틴",
    "medifeed.category2.ingredient2": "빌베리 추출물",
    "medifeed.category2.ingredient3": "오메가-3 지방산",
    "medifeed.category2.ingredient4": "블루라이트 차단",
    "medifeed.philosophy.title": "건강한 일상을 만드는",
    "medifeed.philosophy.subtitle":
      "과학적 근거와 품질에 대한 확고한 신념으로 믿을 수 있는 건강 솔루션을 제공합니다",
    "medifeed.value1.title": "안전성 우선",
    "medifeed.value1.description":
      "엄격한 품질 관리와 GMP 인증을 통해 안전하고 신뢰할 수 있는 제품만을 제공합니다.",
    "medifeed.value2.title": "실용적 접근",
    "medifeed.value2.description":
      "바쁜 현대인의 라이프스타일에 맞춰 간편하게 섭취할 수 있는 형태로 개발합니다.",
    "medifeed.value3.title": "합리적 가격",
    "medifeed.value3.description":
      "누구나 부담 없이 구매할 수 있는 합리적인 가격으로 건강한 습관을 만들어갑니다.",
    "medifeed.cta.title": "건강한 하루,",
    "medifeed.cta.subtitle": "작은 습관에서 시작",
    "medifeed.cta.description":
      "MEDIFEED와 함께 일상 속 작은 변화로 더 나은 건강을 만들어보세요",
    "medifeed.cta.button": "상담 신청하기",

    // LaCeras Brand Page
    "laceras.hero.title": "전통과 모던이 만나는",
    "laceras.hero.subtitle": "프렌치 럭셔리",
    "laceras.hero.description":
      "프랑스의 장인정신과 현대적 세련미를 결합한 럭셔리 캐리어 브랜드입니다. 비즈니스부터 럭셔리 여행까지 완벽한 트래블 솔루션을 제안합니다.",
    "laceras.hero.cta": "La Ceras 홈페이지 가기",
    "laceras.features.title": "프렌치 크래프트맨십",
    "laceras.features.subtitle":
      "정교한 마감과 균형 잡힌 디자인으로 완성된 프리미엄 럭셔리 트래블 경험",
    "laceras.feature1.title": "하이브리드 구조",
    "laceras.feature1.description":
      "PP의 유연성과 PC의 강성을 결합하여 가볍고 튼튼한 바디 구현",
    "laceras.feature2.title": "Sinking Ordinary Lock",
    "laceras.feature2.description":
      "기본 락 구조를 상판과 균형감 있게 낮춰 스크래치 포인트 최소화",
    "laceras.feature3.title": "무소음 휠 & 안정적 베어링 시스템",
    "laceras.feature3.description":
      "어떤 방향으로든 부드럽고 조용한 이동이 가능한 프리미엄 휠 시스템",
    "laceras.heritage.title": "프랑스 장인 정신의",
    "laceras.heritage.subtitle": "70년 전통",
    "laceras.heritage.heading": "세대를 넘나드는 크래프트맨십",
    "laceras.heritage.description":
      "1950년부터 시작된 La Ceras의 여정은 프랑스 전통 장인정신과 현대적 혁신이 만나는 지점에서 계속되고 있습니다. 세심한 디테일과 완벽한 마감으로 럭셔리 트래블의 새로운 기준을 제시합니다.",

    "laceras.heritage.point1": "14인치, 20인치, 24인치, 28인치 올인원 구성",
    "laceras.heritage.point2": "210D 베어링으로 손목 피로 최소화",
    "laceras.heritage.point3": "PP & PC 하이브리드 구조",

    "laceras.travel.title": "비즈니스부터 럭셔리까지",
    "laceras.travel.subtitle": "완벽한 트래블 솔루션",
    "laceras.travel.heading": "모든 여행의 순간을 특별하게",
    "laceras.travel.description":
      "La Ceras는 단순한 캐리어가 아닌 여행 파트너입니다. 비즈니스 출장부터 로맨틱한 허니문, 가족 여행까지 모든 순간을 더욱 세련되고 편안하게 만들어드립니다.",
    "laceras.travel.size": "사이즈 옵션",
    "laceras.travel.warranty": "년 보증",
    "laceras.travel.stores": "글로벌 매장",
    "laceras.travel.rating": "고객 만족도",
    "laceras.collection.title": "모든 여행 스타일에 맞는",
    "laceras.collection.subtitle":
      "다양한 컬렉션으로 여행자의 취향과 필요에 완벽하게 부응합니다",
    "laceras.collection1.title": "캐리온",
    "laceras.collection1.description": "기내 반입 가능한 컴팩트 사이즈",
    "laceras.collection2.title": "하드셸 캐리어",
    "laceras.collection2.description": "중거리 여행을 위한 미디움 사이즈",
    "laceras.collection3.title": "트렁크",
    "laceras.collection3.description": "장기간 여행을 위한 라지 사이즈",
    "laceras.cta.title": "La Ceras와 함께하는",
    "laceras.cta.subtitle": "럭셔리 트래블",
    "laceras.cta.description":
      "프랑스 장인정신으로 완성된 프리미엄 캐리어로 당신의 여행을 더욱 특별하게 만들어보세요",

    // Carvella Brand Page
    "carvella.hero.title": "이탈리아 장인의 정밀함",
    "carvella.hero.subtitle": "당신의 주방으로",
    "carvella.hero.description":
      "이탈리아 전통 장인정신으로 완성한 프리미엄 쿠킹웨어 브랜드입니다. 고급 스테인리스와 다층 구조로 뛰어난 열전도와 내구성을 자랑합니다.",
    "carvella.hero.cta": "Carvella 홈페이지 가기",
    "carvella.features.title": "이탈리아 장인정신",
    "carvella.features.subtitle":
      "정밀한 기술과 전통 크래프트맨십이 만나 완성된 프리미엄 쿠킹웨어",
    "carvella.feature1.title": "프리미엄 스테인리스",
    "carvella.feature1.description":
      "최고급 스테인리스 스틸 소재로 내구성과 위생성을 동시에 보장",
    "carvella.feature2.title": "다층 바닥구조",
    "carvella.feature2.description":
      "균등한 열전도와 열보존을 위한 특수 다층 바닥 설계 시스템",
    "carvella.feature3.title": "멀티 호환 열원",
    "carvella.feature3.description":
      "인덕션부터 가스레인지까지 모든 열원에서 완벽한 성능 발휘",
    "carvella.heritage.title": "이탈리아 전통의",
    "carvella.heritage.subtitle": "아르티지아나토",
    "carvella.heritage.heading": "정밀함과 열정이 만나는 곳",
    "carvella.heritage.description":
      "이탈리아 북부 롬바르디아 지역의 전통 금속공예 기술을 바탕으로 탄생한 Carvella는 장인들의 정밀함과 요리에 대한 열정을 그대로 담아냅니다. 매 제품마다 이탈리아 장인의 손길이 닿아 완성되는 진정한 아르티지아나토입니다.",
    "carvella.heritage.point1": "이탈리아 전통 금속공예 기법",
    "carvella.heritage.point2": "장인 수작업 마감 처리",
    "carvella.heritage.point3": "유럽 인증 프리미엄 소재",
    "carvella.cooking.title": "프로 셰프부터 요리 애호가까지",
    "carvella.cooking.subtitle": "모든 주방의 파트너",
    "carvella.cooking.heading": "완벽한 요리를 위한 완벽한 도구",
    "carvella.cooking.description":
      "Carvella는 단순한 조리도구가 아닌 요리의 예술을 완성하는 파트너입니다. 프로 셰프의 엄격한 기준을 충족하면서도 가정에서 쉽게 사용할 수 있도록 설계되어 모든 요리 애호가들의 꿈을 현실로 만들어드립니다.",
    "carvella.cooking.lineup": "제품 라인업",
    "carvella.cooking.warranty": "년 품질보증",
    "carvella.cooking.recommendation": "셰프 추천율",
    "carvella.cooking.satisfaction": "고객 만족도",
    "carvella.collection.title": "모든 요리를 위한",
    "carvella.collection.subtitle":
      "다양한 제품 라인으로 모든 요리 스타일과 필요에 완벽하게 부응합니다",
    "carvella.collection1.title": "프리미엄 냄비",
    "carvella.collection1.description": "다양한 사이즈와 용도별 냄비 컬렉션",
    "carvella.collection2.title": "프라이팬",
    "carvella.collection2.description": "완벽한 열전도를 위한 프라이팬 시리즈",
    "carvella.collection3.title": "압력뚜껑",
    "carvella.collection3.description": "다목적 멀티 압력뚜껑 시스템",
    "carvella.collection4.title": "세트 상품",
    "carvella.collection4.description": "완벽한 주방을 위한 종합 세트",
    "carvella.testimonial.title": "전문가들의 선택",
    "carvella.testimonial1":
      "Carvella의 냄비는 열전도가 완벽해서 요리가 훨씬 쉬워졌습니다. 프로 주방에서도 손색없는 품질입니다.",
    "carvella.testimonial1.author": "이탈리안 레스토랑 셰프",
    "carvella.testimonial2":
      "15년 넘게 사용해도 변함없는 품질과 성능. 진정한 장인정신을 느낄 수 있는 제품입니다.",
    "carvella.testimonial2.author": "요리 강사",
    "carvella.testimonial3":
      "인덕션에서 가스레인지까지 어떤 열원에서도 완벽한 성능을 보여줍니다. 가정용으로도 최고의 선택이에요.",
    "carvella.testimonial3.author": "요리 블로거",
    "carvella.cta.title": "Carvella와 함께하는",
    "carvella.cta.subtitle": "프리미엄 쿠킹",
    "carvella.cta.description":
      "이탈리아 장인정신으로 완성된 프리미엄 쿠킹웨어로 당신의 요리를 더욱 특별하게 만들어보세요",
    "carvella.good1.badge": "GOOD 01",
    "carvella.good1.title": "스테인리스 도마",
    "carvella.good1.description":
      "304 스테인리스 스틸로 제작되어 위생적이고 내구성이 뛰어난 도마입니다. 음식물 착색과 냄새가 남지 않아 언제나 깔끔하게 사용할 수 있습니다.",
    "carvella.good1.detail1": "위생적인 304 스테인리스 소재",
    "carvella.good1.detail2": "긁힘·변형에 강한 높은 내구성",
    "carvella.good1.detail3": "물세척만으로 간편한 관리",
    "carvella.good1.detail4": "논슬립 구조로 안정감 있는 사용",

    "carvella.good2.badge": "GOOD 02",
    "carvella.good2.title": "6종 칼 세트",
    "carvella.good2.description":
      "가위, 중식도, 감자칼 등 6종 구성으로 다양한 재료를 손쉽게 조리할 수 있습니다.",
    "carvella.good2.detail1": "6종 올인원",
    "carvella.good2.detail2": "인체공학적 손잡이로 편안한 그립",
    "carvella.good2.detail3": "뛰어난 절삭력",
    "carvella.good2.detail4": "가정용·업소용 모두 적합",

    // MOZ Brand Page
    "moz.hero.tagline": "따뜻하고 안전한 수면 환경",
    "moz.hero.description":
      "첨단 카본 히팅 기술과 안전 인증 설계로 건강한 숙면을 제공합니다. 몸과 마음이 회복되는 따뜻한 휴식, 그것이 모즈의 시작입니다.",
    "moz.hero.cta": "제품 문의하기",
    "moz.features.title": "모즈의 핵심 기술",
    "moz.features.subtitle":
      "첨단 카본 히팅과 안전 인증으로 완성한 프리미엄 수면 솔루션",
    "moz.feature1.title": "카본 히팅 기술",
    "moz.feature1.description":
      "전자파 걱정 없는 안전한 카본 열선으로 균일한 온기를 제공합니다",
    "moz.feature1.detail1": "전자파 차단 카본 소재",
    "moz.feature1.detail2": "균일한 온도 분포",
    "moz.feature1.detail3": "빠른 온도 상승",
    "moz.feature1.detail4": "에너지 효율 설계",
    "moz.feature2.title": "안전 인증 설계",
    "moz.feature2.description":
      "엄격한 안전 인증과 과열 방지 시스템으로 안심하고 사용할 수 있습니다",
    "moz.feature2.detail1": "KC 안전 인증",
    "moz.feature2.detail2": "과열 방지 시스템",
    "moz.feature2.detail3": "이중 안전 장치",
    "moz.feature2.detail4": "화재 예방 설계",
    "moz.feature3.title": "건강한 숙면",
    "moz.feature3.description":
      "몸과 마음이 회복되는 따뜻한 온기로 깊고 편안한 잠을 선사합니다",
    "moz.feature3.detail1": "최적 수면 온도 유지",
    "moz.feature3.detail2": "혈액순환 개선",
    "moz.feature3.detail3": "근육 이완 효과",
    "moz.feature3.detail4": "쾌적한 수면 환경",
    "moz.product1.title": "모즈 카본 탄소매트 싱글",
    "moz.product1.description":
      "혼자 써도 포근한 온기, 하루 피로를 녹입니다. 안전한 카본 열선으로 전자파 걱정 없어요.",
    "moz.product1.size": "사이즈",
    "moz.product2.title": "모즈 카본 탄소매트 더블",
    "moz.product2.description":
      "두 사람이 함께하는 따뜻한 온기. 균일한 열로 깊고 편안한 잠을 선사합니다.",
    "moz.product2.size": "사이즈",
    "moz.reviews.title": "고객 후기",
    "moz.review1":
      "전자파 걱정 없이 따뜻하게 잘 수 있어서 너무 좋아요. 겨울철 필수템입니다!",
    "moz.review1.author": "김○○",
    "moz.review2":
      "온도가 균일해서 발끝까지 포근해요. 아침에 일어나면 몸이 한결 가벼워진 느낌입니다.",
    "moz.review2.author": "이○○",
    "moz.review3":
      "안전 인증 받은 제품이라 안심하고 사용할 수 있어요. 품질도 만족스럽습니다.",
    "moz.review3.author": "박○○",
    "moz.benefits.title": "모즈와 함께하는 따뜻한 밤",
    "moz.benefit1.title": "깊은 숙면",
    "moz.benefit1.description":
      "최적의 온도 유지로 편안하고 깊은 잠을 경험하세요",
    "moz.benefit2.title": "빠른 온열",
    "moz.benefit2.description":
      "카본 히팅 기술로 빠르게 따뜻한 온기를 느낄 수 있습니다",
    "moz.benefit3.title": "안전한 설계",
    "moz.benefit3.description":
      "KC 인증과 이중 안전 장치로 걱정 없이 사용하세요",
    "moz.cta.title": "모즈와 함께하는 따뜻한 휴식",
    "moz.cta.description": "첨단 카본 히팅 기술로 건강한 숙면을 경험해보세요",
    "moz.cta.button": "제품 문의하기",

    // InYourHeart Brand Page
    "inyourheart.hero.title": "피부에 감성을 입히다",
    "inyourheart.hero.description":
      "클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 프리미엄 스킨케어 브랜드입니다.",
    "inyourheart.values.title": "감성이 담긴 뷰티 철학",
    "inyourheart.values.subtitle":
      "피부에 순하고 마음까지 따뜻하게 만드는 감성 스킨케어",
    "inyourheart.category1.title": "클린 포뮬러",
    "inyourheart.category1.description":
      "피부에 순하고 환경에 친화적인 성분만을 사용하여 안전하고 지속가능한 뷰티를 추구합니다.",
    "inyourheart.category2.title": "감성 디자인",
    "inyourheart.category2.description":
      "제품 사용 순간부터 특별한 경험이 될 수 있도록 감성적이고 아름다운 패키지를 디자인합니다.",
    "inyourheart.category3.title": "글로벌 K-뷰티",
    "inyourheart.category3.description":
      "한국의 우수한 뷰티 기술과 혁신을 전 세계에 알리며 K-뷰티의 가치를 높여갑니다.",
    "inyourheart.cta.title": "당신의 마음에 닿는",
    "inyourheart.cta.subtitle": "아름다운 감성",
    "inyourheart.cta.description":
      "IN YOUR HEART와 함께 특별한 뷰티 여정을 시작해보세요",
    "inyourheart.cta.button": "문의하기",

    // Sangsaeng Brand Page
    "sangsaeng.hero.title": "한국 의료를 세계로 연결하다",
    "sangsaeng.hero.description":
      "메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한 의료 서비스를 전 세계에 연결하는 종합 의료 플랫폼입니다.",
    "sangsaeng.hero.cta": "상생 홈페이지 가기",
    "sangsaeng.services.title": "글로벌 헬스케어 생태계",
    "sangsaeng.services.subtitle":
      "의료 서비스부터 브랜딩까지, 통합된 헬스케어 솔루션을 제공합니다",
    "sangsaeng.medical.title": "상생 메디컬",
    "sangsaeng.medical.subtitle": "Sangsaeng Medical",
    "sangsaeng.medical.description":
      "실생활 기반 건강 솔루션과 의료 서비스를 제공하는 헬스케어 브랜드",
    "sangsaeng.medical.benefit1": "맞춤형 건강 검진 패키지",
    "sangsaeng.medical.benefit2": "전문의 상담 서비스",
    "sangsaeng.medical.benefit3": "만성질환 관리 프로그램",
    "sangsaeng.medical.benefit4": "예방 의학 솔루션",

    "sangsaeng.platform.title": "상생 플랫폼",
    "sangsaeng.platform.subtitle": "Sangsaeng Platform",
    "sangsaeng.platform.description":
      "의료부터 관광까지 손안의 다국어 의료 플랫폼 앱",

    "sangsaeng.platform.benefit1": "다국어 의료 통역 서비스",
    "sangsaeng.platform.benefit2": "병원 예약 및 관리",
    "sangsaeng.platform.benefit3": "의료 관광 패키지",
    "sangsaeng.platform.benefit4": "24시간 응급 서포트",

    "sangsaeng.branding.title": "상생 브랜딩",
    "sangsaeng.branding.subtitle": "Sangsaeng Branding",
    "sangsaeng.branding.description":
      "콘텐츠, 메타광고, 글로벌 인플루언서 연계 브랜딩 조직",
    "sangsaeng.branding.benefit1": "의료 콘텐츠 마케팅",
    "sangsaeng.branding.benefit2": "다국어 브랜드 캠페인",
    "sangsaeng.branding.benefit3": "글로벌 인플루언서 협업",
    "sangsaeng.branding.benefit4": "디지털 마케팅 솔루션",

    "sangsaeng.cta.title1": "세계와 연결되는",
    "sangsaeng.cta.title2": "한국 의료의 미래",
    "sangsaeng.cta.description":
      "상생과 함께 안전하고 신뢰할 수 있는 의료 서비스를 경험해보세요",
    "sangsaeng.cta.button": "문의하기",

    // Hoid Details
    "hoid.feature1.title": "3-in-1 기술",
    "hoid.feature1.description":
      "공기청정, 제습, 살균 기능을 하나로 통합한 혁신적인 올인원 솔루션",
    "hoid.feature2.title": "HEPA14 필터",
    "hoid.feature2.description":
      "99.995% 초미세먼지 제거 효율을 자랑하는 의료급 고성능 필터 시스템",
    "hoid.feature3.title": "미니멀 디자인",
    "hoid.feature3.description":
      "어떤 공간에도 자연스럽게 어울리는 세련되고 모던한 디자인 철학",
    "hoid.partnership.title": "글로벌 확장의",
    "hoid.partnership.subtitle": "새로운 전환점",
    "hoid.partnership.date": "2025년 8월 16일",
    "hoid.partnership.mou": "중국 초대형 공기청정기 제조사와 MOU 체결",
    "hoid.partnership.description":
      "HOID는 중국 최대 공기청정기 제조업체와 글로벌 유통 및 기술 협력 MOU를 체결했습니다. 이를 통해 아시아 전역으로 사업 영역을 확장하고, 더 많은 고객에게 깨끗한 공기를 제공할 예정입니다.",
    "hoid.partnership.point1": "아시아 전역 시장 진출",
    "hoid.partnership.point2": "기술 협력 및 공동 개발",
    "hoid.partnership.point3": "글로벌 유통망 확대",
    "hoid.homeshopping.title": "TV 속으로 들어간",
    "hoid.homeshopping.subtitle": "프리미엄 디자인",

    // Asran Details
    "asran.feature1.title": "SUS410 스테인리스 스틸",
    "asran.feature1.description":
      "최고급 소재로 내구성과 안전성을 보장합니다",
    "asran.feature1.detail1": "부식 방지 & 변색 방지",
    "asran.feature1.detail2": "위생적이고 안전한 조리",
    "asran.feature1.detail3": "반영구적 사용 가능",
    "asran.feature1.detail4": "고급스러운 미러 마감",

    "asran.feature2.title": "3중 바닥구조",
    "asran.feature2.description": "뛰어난 열전도율로 에너지 효율성 극대화",
    "asran.feature2.detail1": "균등한 열 분산",
    "asran.feature2.detail2": "빠른 가열 시간",
    "asran.feature2.detail3": "한 손으로 뚜껑 쉽게 개폐 가능",
    "asran.feature2.detail4": "열 손실 최소화",

    "asran.feature3.title": "모든 열원 완벽 호환",
    "asran.feature3.description": "어떤 주방환경에서도 완벽하게 사용 가능",
    "asran.feature3.detail1": "모든 열원 완벽 호환",
    "asran.feature3.detail2": "가스 레인지, 인덕션",
    "asran.feature3.detail3": "논스틱 외부 코팅으로 쉬운 세척",
    "asran.feature3.detail4": "전기 레인지",

    "asran.size1.title": "냄비 3종 세트",
    "asran.size1.usage": "소용량부터 대용량까지, 혼자서도 가족과도 완벽하게",

    "asran.size2.title": "압력솥",
    "asran.size2.usage": "고압의 빠른 조리로 신선하고 풍미있는 요리 가능",

    "asran.size3.title": "프라이팬 3종 세트",
    "asran.size3.usage": "강력한 코팅으로 오래쓰는 프라이팬",

    "asran.cooking1.title": "국물요리",
    "asran.cooking1.description": "깊고 진한 국물 맛 구현",
    "asran.cooking2.title": "찜 & 조림",
    "asran.cooking2.description": "촉촉하고 부드러운 식감",
    "asran.cooking3.title": "건강한 조리",
    "asran.cooking3.description": "영양소 보존하는 조리법",
    "asran.reviews.title": "실제 구매고객들의 생생한 후기",
    "asran.review1":
      "가성비 너무 혜자네요! 이 가격에 이런 품질의 냄비를 만날 수 있다니 정말 만족스럽습니다.",
    "asran.review1.author": "김○○님",
    "asran.review2":
      "냄비의 무게에 놀랐다. 엄청 가볍다! 가벼운 무게 덕분에 손목이 아프지 않고 편하게 요리할 수 있어요.",
    "asran.review2.author": "박○○님",
    "asran.review3":
      "이유식 만들 때 편수냄비가 너무 유용하게 사용되고 있어요. 열 전도도 빠르고 청소도 쉬워서 좋습니다.",
    "asran.review3.author": "이○○님",
    "asran.benefit1.title": "요리가 즐거워집니다",
    "asran.benefit1.description":
      "균등한 열 전도로 실패 없는 요리가 가능하여 요리에 대한 자신감이 생깁니다.",
    "asran.benefit2.title": "요리 시간이 단축됩니다",
    "asran.benefit2.description":
      "빠른 가열 시간과 효율적인 열 분산으로 요리 시간을 대폭 줄일 수 있습니다.",
    "asran.benefit3.title": "주방이 더 아름다워집니다",
    "asran.benefit3.description":
      "고급스러운 미러 마감과 세련된 디자인으로 주방 인테리어가 한층 업그레이드됩니다.",
    "asran.cta.title": "독일 기술력과 만나는",
    "asran.cta.subtitle": "프리미엄 요리 경험",
    "asran.cta.description": "ASRAN과 함께 새로운 요리의 세계를 경험해보세요",
    "asran.cta.button": "문의하기",

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

    // Footer
    "footer.tagline":
      "Connecting the value of Korea to the world — from distribution to branding",
    "footer.about":
      "A full-service company entering the global market through distribution, private-label manufacturing, marketing, and a medical tourism platform.",
    "footer.sections.services": "Services",
    "footer.sections.brands": "Brands",
    "footer.sections.company": "Company",

    "footer.services.distribution": "Distribution / Import–Export Brokerage",
    "footer.services.manufacturing": "Private Label Manufacturing",
    "footer.services.marketing": "Global Marketing",
    "footer.services.medical": "Medical Tourism Platform",
    "footer.services.app": "App Development",

    "footer.brands.hoid": "Hoid",
    "footer.brands.asran": "ASRAN",
    "footer.brands.laceras": "La Ceras",
    "footer.brands.carvella": "Carvella",
    "footer.brands.medifeed": "Medifeed",
    "footer.brands.inyourheart": "InYourHeart",
    "footer.brands.sangsaeng": "Sangsaeng",

    "footer.company.about": "About",
    "footer.company.news": "News",
    "footer.company.contact": "Contact",

    "footer.bottom.copyright": "© 2024 FeedBack Corp. All rights reserved.",
    "footer.bottom.bizinfo":
      "Business Reg. No.: 296-87-03628 | CEOs: Hae-min Song, Sung-hyun Jeong",
    "footer.bottom.privacy": "Privacy Policy",
    "footer.bottom.terms": "Terms of Use",
    "footer.bottom.cookies": "Cookie Policy",

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
      "Premium skincare brand leading the K-beauty market with clean beauty philosophy and emotional package design.",
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
    "brands.moz.category": "Premium Heated Life Brand",
    "brands.moz.slogan": "Researching Warm and Safe Sleeping Environments",
    "brands.moz.description":
      "With advanced carbon heating technology and certified safety design, Moz provides a healthy and restful sleep. Warm relaxation that restores your body and mind — that's where Moz begins.",
    "brands.moz.products.0": "Carbon Heating Mattress - Single",
    "brands.moz.products.1": "Carbon Heating Mattress - Double",

    // Common UI
    "ui.view_brand_detail": "View Brand Details",
    "ui.visit_website": "Visit Brand Website",
    "ui.learn_more": "Learn more",

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
    "news.3.date": "2025.10.13",
    "news.3.title":
      "Launch of ASRAN, Carvella, La Ceras, and Sikgu as In-House Brands",
    "news.3.summary":
      "Feedback has launched its own premium brands — ASRAN and Carvella for global kitchen and living, La Ceras for luxury luggage, and Sikgu for premium cutlery.",
    "news.3.content":
      "Feedback has launched its in-house brands — ASRAN and Carvella, global premium kitchen and living brands; La Ceras, a luxury luggage brand; and Sikgu, a premium cutlery brand that embodies Korean aesthetics. With this launch, Feedback will oversee the domestic distribution, marketing, and customer service for all products under these four brands. ASRAN is a high-end stainless cookware brand known for its precise heat conductivity and refined design. Carvella is a premium Italian-inspired kitchen brand offering products crafted with the expertise of skilled artisans. La Ceras stands out as a luxury carrier brand recognized for its hybrid materials and elegant design. Sikgu showcases sophisticated cutlery that blends practicality with traditional Korean beauty. Through this exclusive partnership, Feedback aims to introduce global premium lifestyle brands to the Korean market, delivering new lifestyle experiences through continuous quality management and brand value enhancement.",
    "news.4.date": "2025.10.14",
    "news.4.title":
      "Hoid Air Purifier 2nd Generation Launch: All-Season Air Quality in One Device",
    "news.4.summary":
      "A 5-in-1 bladeless air-purifying hot & cool fan with a medical-grade HEPA14 filter and UV sterilization debuts with 78 m² coverage to target the premium market.",
    "news.4.content":
      "HEPA14 Medical-Grade Filter with UV Sterilization, 78 m² Wide Coverage for the Premium Segment\n\nA premium multi-function air-purifying hot & cool fan designed for year-round use has debuted in Korea’s home-appliance market.\n\nThe product integrates five functions—cooling, heating, air purification, negative ion generation, and UV sterilization—into a single 5-in-1 all-in-one solution, delivering a total air-quality management system that differentiates it from conventional single-function units.\n\n(Photo: 5-in-1 bladeless air-purifying hot & cool fan)\n\n<strong>Medical-Grade Filtration: 99.99% Fine Particle Removal</strong>\n\nIts standout feature is the medical-grade HEPA14 filter—an operating-room/cleanroom-level medium that captures ≥99.99% of 0.3-micrometer particulates. One grade above the HEPA13 filters common in household units, it offers peace of mind for families with allergies or respiratory concerns.\n\nA 360-degree omni-directional filtration system draws and purifies air from every side of the product, effectively covering spaces up to 78 m² (approx. 840 ft²). It delivers ample performance in larger areas such as living rooms and offices.\n\n<strong>UV Sterilization and Negative Ions for a Hygienic Indoor Environment</strong>\n\nBeyond dust capture, built-in UV sterilization targets airborne bacteria and viruses. Because it relies on ultraviolet light rather than chemicals, it is a safe approach and can help during cold/flu seasons.\n\nNegative-ion generation keeps indoor air feeling fresh. By neutralizing positive ions, it helps precipitate fine particles and is often associated with a “forest-bathing” sense of calm.\n\n<strong>Powerful All-Season Airflow with a Safe Bladeless Design</strong>\n\nWith both cooling and heating modes, it keeps you cool in summer and warm in winter. Its robust all-season airflow promotes healthy circulation regardless of the time of year.\n\nSafety-first, the bladeless construction is reassuring for homes with children or pets, and it’s easy to clean and maintain. The simple, modern white design blends naturally with any interior.\n\n<strong>1-Year Free Service and Extra Filter Included</strong>\n\nThe manufacturer provides a one-year standard warranty with free A/S service and includes an extra filter with purchase for long-term, economical use.\n\nAs consumer interest in air quality grows, the integrated purification and climate functions position this product to make waves in the premium air-appliance segment.",
    "news.5.date": "2025.08.20",
    "news.5.title": "Hoid Vacuum Cleaner Launch",
    "news.5.summary":
      "Hoid's premium cordless vacuum cleaner has been officially launched.",
    "news.5.content":
      "Hoid's premium cordless vacuum cleaner has been officially launched. This product is equipped with a high-performance motor, powerful suction, and a high-efficiency battery that allows long-term use, enabling efficient cleaning from large houses to small spaces. In addition, it reduces wrist strain with an ergonomic design that minimizes weight, and by replacing the brush head, it demonstrates optimal performance in various environments such as floors, carpets, and bedding. The dust bin and filter are water-washable for hygienic management, and all components are designed with user convenience as the top priority. Through this launch, Hoid is presenting new standards in the vacuum cleaner market as well.",
    "news.6.date": "2025.10.01",
    "news.6.title": "ASRAN Launches Three High-End Stainless Cookware Lines",
    "news.6.summary":
      "Premium kitchen brand ASRAN has officially released a high-end cookware lineup consisting of three stainless pots, a pressure cooker, and three frying pans.",
    "news.6.content":
      "Premium Cooking Experience with German-Engineered SUS410 Steel and Tri-Ply Base\n\nFeedback (CEO: Sunghyun Jung) announced that its premium kitchen brand ASRAN officially launched its high-end stainless cookware lineup on October 1, 2025.\n\nThe newly released lineup includes three stainless pots, a pressure cooker, and three frying pans. Built on German engineering, it features SUS410 stainless steel and a tri-ply base to maximize thermal conductivity and durability.\n\n(Photo: ASRAN cookware lineup)\n\n<strong>Premium Cooking Solution Powered by German Technology</strong>\n\nASRAN cookware is engineered for a wide range of use cases—from home kitchens to professional settings. The double pressure-control system and precision heat-conducting layers maintain temperature balance during cooking, helping preserve the natural flavor and nutrition of ingredients.\n\nSUS410 stainless steel offers excellent corrosion resistance and discoloration resistance, maintaining a lasting shine after washing—ideal for a hygienic kitchen environment. The tri-ply base ensures even heat distribution on all heat sources, including induction, enabling perfect results in any kitchen.\n\n<strong>Design that Balances Function and Aesthetics</strong>\n\nDeveloped through collaboration between the design team and culinary professionals, ASRAN maximizes real-world usability. The premium mirror finish and refined curves elevate the look of any kitchen while retaining practical utility.\n\nErgonomic handles minimize wrist strain during extended cooking, and the weight balance is optimized. The steam-release valve on the glass lid makes it easy to control the cooking process with confidence.\n\nA Feedback spokesperson said, “ASRAN is more than cookware—it’s a chef’s partner that elevates the completion of every dish. We will continue to unveil products that combine technical innovation with refined design, growing into a brand that transforms daily cooking into art.”\n\nASRAN’s high-end cookware is available through the official online store and major retail channels.",

    "news.7.date": "2025.10.10",
    "news.7.title": "La Ceras Launches French Luxury 4-Piece Luggage Set",
    "news.7.summary":
      "Premium luggage brand La Ceras, combining French sensibility with modern engineering, has officially launched a luxury 4-piece set in 14, 20, 24, and 28 inches.",
    "news.7.content":
      "French Craftsmanship Meets Modern Design: Lightweight and Durable PP-PC Hybrid Structure\n\nOn October 10, 2025, Feedback (CEO: Sunghyun Jung) announced the official launch of La Ceras (La Ceras) luxury 4-piece luggage set (14, 20, 24, 28 inches).\n\nLa Ceras blends French craftsmanship with a modern design philosophy. Its PP (polypropylene) and PC (polycarbonate) hybrid shell delivers a light yet robust build quality.\n\n(Photo: La Ceras luggage in motion)\n\n<strong>Premium Travel Solution with Parisian Atelier Vibes</strong>\n\nThe lineup spans 14 to 28 inches to suit different trip purposes and durations. The 14-inch model is designed to comply with airline carry-on regulations—ideal for short trips or business travel—while the 28-inch model is optimized for long-haul journeys and high-capacity packing.\n\nA 210D bearing-based silent wheel system ensures smooth, stable rolling, making it suitable for quiet environments such as airports and hotels.\n\nInside, a dual-compartment organizer and premium waterproof lining are paired with YKK zippers for practicality and longevity. This structure keeps clothes and belongings neatly arranged while protecting contents from unexpected weather changes.\n\n<strong>Premium Details with Collectible Value</strong>\n\nPositioned as a true “travel companion,” each piece features a unique serial number for authenticity and collectible appeal. The labeling captures the mood of Parisian ateliers, reinforcing brand identity.\n\nThe refined black colorway and restrained curves work for both business and leisure, while premium materials and finishes complete the luxurious look.\n\n<strong>Pushing into Global Travel Retail</strong>\n\nA Feedback spokesperson said, “La Ceras delivers ‘the dignity of travel’ and will grow into a premium travel brand that completes customers’ individuality and style. We also plan to expand into global airport duty-free channels and the European market.”\n\nLa Ceras French luxury luggage is available via the official online store and major retail partners.",

    "news.8.date": "2025.10.13",
    "news.8.title":
      "Carvella Launches Premium Knife & Cutting Board Set with Italian Heritage",
    "news.8.summary":
      "Premium kitchen brand Carvella, inspired by Italian craftsmanship, has officially launched the Carvella Signature Set comprising a 6-piece knife set and a stainless cutting board.",
    "news.8.content":
      "Precision Cutting with Northern Italian Metalworking: High-Carbon Steel Blades and 304 Stainless Cutting Board\n\nFeedback’s premium kitchen brand Carvella announced the official launch of the ‘Carvella Signature Set’ on October 13, 2025, featuring a 6-piece knife set and a stainless cutting board.\n\nBuilt upon the metalworking heritage of northern Italian artisans, Carvella delivers precise cutting performance and durability. The Signature Set was designed as a premium solution for both professional chefs and passionate home cooks.\n\n(Photo: Full components of the Carvella Signature Set)\n\n<strong>A Precision Cutting System Crafted by Italian Artisans</strong>\n\nThe knife set uses high-carbon steel to maintain sharpness and durability over prolonged use. Compared with common stainless steel, high-carbon steel provides higher hardness for precise cuts and better resistance to deformation—qualities favored in professional kitchens.\n\nHandles are made from a grippy composite material for slip resistance and control during delicate tasks. Ergonomic shaping reduces wrist strain, while optimized weight balance lowers fatigue over long sessions.\n\nThe included 304 stainless-steel cutting board is hygienic and resistant to discoloration, keeping a clean appearance over time. Unlike wooden boards, it reduces bacterial growth and is dishwasher-safe for convenient upkeep.\n\n<strong>Premium Details Finished by Hand</strong>\n\nEvery Carvella product undergoes artisan hand-polishing to achieve the brand’s signature luster and balance. The stainless-and-black palette adds a refined presence to any kitchen, while the premium gift packaging enhances its value for gifting.\n\nThe 6-piece knife set includes a chef’s knife, bread knife, utility knife, paring knife, sharpener, and kitchen shears—covering diverse cooking scenarios. Each item bears the Carvella logo for a clear brand identity.\n\n<strong>Sustainable Philosophy for Global Growth</strong>\n\nA Feedback spokesperson said, “Carvella is not just a tool—it is the completion of culinary art. Carrying forward the techniques and sensibilities of Italian artisans, we will establish ourselves as a premium kitchen brand across Europe and Asia.”\n\n“We also plan to expand our sustainable manufacturing practices and eco-friendly materials, growing as a premium brand that values both the environment and quality.”\n\nThe Carvella Signature Set is available through the official online store and major retail channels.",

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
    "contact.subtitle.line1": "Create new business opportunities",
    "contact.subtitle.line2": "together with FeedBack.",
    "contact.section.contact": "Contact",
    "contact.section.departments": "Departments",
    "contact.section.social": "Social Media",

    "contact.info.address.title": "Head Office",
    "contact.info.address.content":
      "80 Songdogwahak-ro, Yeonsu-gu, Incheon, Songdo AIT Center 1301, 1302",
    "contact.info.phone.title": "Main Phone",
    "contact.info.email.title": "Email",
    "contact.info.hours.title": "Business Hours",
    "contact.info.hours.content":
      "Weekdays 10:00 - 19:00, Weekends and Holidays Closed",

    "contact.dept.management": "Management Support",

    "contact.form.title": "Leave an Inquiry",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Please enter your name",
    "contact.form.company": "Company",
    "contact.form.company.placeholder": "Please enter your company name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.phone": "Phone",
    "contact.form.phone.placeholder": "+82-10-0000-0000",
    "contact.form.inquiry_type": "Inquiry Type",
    "contact.form.inquiry_type.placeholder": "Select inquiry type",
    "contact.form.inquiry_type.business": "Business Inquiry",
    "contact.form.inquiry_type.brand": "Brand Inquiry",
    "contact.form.inquiry_type.partner": "Partnership Proposal",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Please enter your message",
    "contact.form.privacy":
      "I agree to the collection and use of personal information.",
    "contact.form.privacy.link": "View policy",
    "contact.form.privacy.error.title": "Privacy Consent Required",
    "contact.form.privacy.error.description":
      "Please agree to the privacy policy to proceed.",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",

    "contact.errors.required.title": "Input Error",
    "contact.errors.required.description":
      "Name, Email, and Message are required.",

    "contact.toast.success.title": "Email Sent",
    "contact.toast.success.description":
      "Your inquiry has been sent successfully. We will get back to you soon.",
    "contact.toast.gmail.title": "Gmail Authorization Required",
    "contact.toast.gmail.description": "Gmail API authorization is required.",
    "contact.toast.gmail.link": "Click here to authorize Gmail",
    "contact.toast.unknown": "An unknown error occurred.",
    "contact.toast.send_error_console": "Email send error:",
    "contact.toast.fail.title": "Send Failed",
    "contact.toast.fail.description":
      "An error occurred while sending email. Please try again later.",

    "contact.map.title": "Location",

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
    "about.timeline.2025_10":
      "Launch of ASRAN, Carvella, La Ceras, and Sikgu as In-House Brands",
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
      'Connecting Brands and Markets<br class="hidden lg:block"/>with Integrated Execution',
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
      "Adding branding to product strength, connecting distribution networks to branding, and embedding experience and content into distribution. This is FeedBack's way.",
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
    "hoid.hero.description":
      "A smart home appliance brand that revolutionizes everyday air quality by combining minimalist design with cutting-edge technology.",
    "hoid.hero.cta": "Visit Hoid Website",
    "hoid.features.title": "Innovative Technology",
    "hoid.features.subtitle":
      "Experience a completely new air purification with cutting-edge technology hidden within minimalist design",

    // Asran Brand Page
    "asran.hero.tagline":
      "Pots with Both German Technology and Reasonable Price",
    "asran.hero.description":
      "Boasting excellent heat conductivity and durability with SUS410 stainless steel and triple-layer bottom structure. A premium pot that can be used perfectly in any kitchen environment, compatible with both induction and gas.",
    "asran.hero.cta": "Visit ASRAN Website",
    "asran.features.title": "ASRAN's Special Technology",
    "asran.features.subtitle":
      "Premium kitchenware born from the meeting of Germany's precision technology and Korea's practicality",

    // Medifeed Brand Page
    "medifeed.hero.title": "Small Habits that Protect Every Day",
    "medifeed.hero.description":
      "A functional nutritional supplement brand focused on gum and eye health, providing health solutions that anyone can easily choose based on practicality and safety.",
    "medifeed.features.title": "Specialized Health Solutions",
    "medifeed.features.subtitle":
      "Taking responsibility for everyday health with specialized supplements developed based on scientific research",
    "medifeed.category1.title": "Gum Health Specialist",
    "medifeed.category1.description":
      "Professional supplements for preventing periodontal disease and maintaining gum health",
    "medifeed.category1.ingredient1": "Coenzyme Q10",
    "medifeed.category1.ingredient2": "Vitamin C Complex",
    "medifeed.category1.ingredient3": "Zinc & Selenium",
    "medifeed.category1.ingredient4": "GMP Certified",
    "medifeed.category2.title": "Eye Health Specialist",
    "medifeed.category2.description":
      "Functional supplements for digital age eye fatigue and vision protection",
    "medifeed.category2.ingredient1": "Lutein & Zeaxanthin",
    "medifeed.category2.ingredient2": "Bilberry Extract",
    "medifeed.category2.ingredient3": "Omega-3 Fatty Acids",
    "medifeed.category2.ingredient4": "Blue Light Protection",
    "medifeed.philosophy.title": "Creating a Healthy Daily Life",
    "medifeed.philosophy.subtitle":
      "Providing reliable health solutions with firm beliefs in scientific evidence and quality",
    "medifeed.value1.title": "Safety First",
    "medifeed.value1.description":
      "We provide only safe and reliable products through strict quality control and GMP certification.",
    "medifeed.value2.title": "Practical Approach",
    "medifeed.value2.description":
      "Developed in a form that can be easily consumed to suit the busy modern lifestyle.",
    "medifeed.value3.title": "Reasonable Price",
    "medifeed.value3.description":
      "Creating healthy habits with reasonable prices that anyone can afford without burden.",
    "medifeed.cta.title": "Healthy Day,",
    "medifeed.cta.subtitle": "Starts with Small Habits",
    "medifeed.cta.description":
      "Create better health with small changes in daily life together with MEDIFEED",
    "medifeed.cta.button": "Request Consultation",

    // LaCeras Brand Page
    "laceras.hero.title": "Where Tradition Meets Modern",
    "laceras.hero.subtitle": "French Luxury",
    "laceras.hero.description":
      "A luxury carrier brand combining French craftsmanship with modern sophistication. Proposing perfect travel solutions from business to luxury travel.",
    "laceras.hero.cta": "Visit La Ceras Website",
    "laceras.features.title": "French Craftsmanship",
    "laceras.features.subtitle":
      "Premium luxury travel experience completed with sophisticated finish and balanced design",
    "laceras.feature1.title": "Hybrid Structure",
    "laceras.feature1.description":
      "Combines the flexibility of PP with the rigidity of PC to create a lightweight yet durable body.",

    "laceras.feature2.title": "Sinking Ordinary Lock",
    "laceras.feature2.description":
      "The lock is seamlessly integrated into the upper shell, minimizing scratch points and maintaining a sleek balance.",

    "laceras.feature3.title": "Silent Wheels & Stable Bearing System",
    "laceras.feature3.description":
      "Premium wheel system designed for smooth and quiet movement in any direction.",

    "laceras.heritage.title": "70-Year Tradition of",
    "laceras.heritage.subtitle": "French Craftsmanship",
    "laceras.heritage.heading": "Craftsmanship Across Generations",
    "laceras.heritage.description":
      "La Ceras' journey, which began in 1950, continues at the intersection where French traditional craftsmanship meets modern innovation. We set new standards for luxury travel with meticulous details and perfect finishing.",

    "laceras.heritage.point1":
      "All-in-one lineup: 14”, 20”, 24”, and 28” sizes",
    "laceras.heritage.point2": "210D bearing system to minimize wrist fatigue",
    "laceras.heritage.point3": "PP & PC hybrid body structure",

    "laceras.travel.title": "From Business to Luxury",
    "laceras.travel.subtitle": "Perfect Travel Solution",
    "laceras.travel.heading": "Making Every Travel Moment Special",
    "laceras.travel.description":
      "La Ceras is not just a carrier, but a travel partner. We make every moment more elegant and comfortable, from business trips to romantic honeymoons and family vacations.",
    "laceras.travel.size": "Size Options",
    "laceras.travel.warranty": "Year Warranty",
    "laceras.travel.stores": "Global Stores",
    "laceras.travel.rating": "Customer Satisfaction",
    "laceras.collection.title": "For Every Travel Style",
    "laceras.collection.subtitle":
      "Various collections perfectly respond to travelers' tastes and needs",
    "laceras.collection1.title": "Carry-on",
    "laceras.collection1.description":
      "Compact size suitable for cabin luggage",
    "laceras.collection2.title": "Hardshell Carrier",
    "laceras.collection2.description": "Medium size for mid-range travel",
    "laceras.collection3.title": "Trunk",
    "laceras.collection3.description": "Large size for long-term travel",
    "laceras.cta.title": "Luxury Travel",
    "laceras.cta.subtitle": "with La Ceras",
    "laceras.cta.description":
      "Make your journey even more special with premium carriers completed with French craftsmanship",

    // Carvella Brand Page
    "carvella.hero.title": "Italian Artisan Precision",
    "carvella.hero.subtitle": "To Your Kitchen",
    "carvella.hero.description":
      "A premium cookware brand completed with traditional Italian craftsmanship. Boasting excellent heat conduction and durability with premium stainless steel and multi-layer structure.",
    "carvella.hero.cta": "Visit Carvella Website",
    "carvella.features.title": "Italian Craftsmanship",
    "carvella.features.subtitle":
      "Premium cookware completed where precision technology meets traditional craftsmanship",
    "carvella.feature1.title": "Premium Stainless Steel",
    "carvella.feature1.description":
      "Guarantees both durability and hygiene with the finest stainless steel material",
    "carvella.feature2.title": "Multi-Layer Bottom",
    "carvella.feature2.description":
      "Special multi-layer bottom design system for even heat distribution and retention",
    "carvella.feature3.title": "Multi-Compatible Heat Source",
    "carvella.feature3.description":
      "Perfect performance on all heat sources from induction to gas range",
    "carvella.heritage.title": "Italian Traditional",
    "carvella.heritage.subtitle": "Artigianato",
    "carvella.heritage.heading": "Where Precision Meets Passion",
    "carvella.heritage.description":
      "Born from the metalworking heritage of northern Italy, Carvella delivers precise cutting performance and durability. The Signature Set was designed as a premium solution for both professional chefs and passionate home cooks.",
    "carvella.heritage.point1": "Traditional Italian metalworking techniques",
    "carvella.heritage.point2": "Artisan handcrafted finishing",
    "carvella.heritage.point3": "European certified premium materials",
    "carvella.cooking.title": "From Professional Chefs to Cooking Enthusiasts",
    "carvella.cooking.subtitle": "Partner for Every Kitchen",
    "carvella.cooking.heading": "Perfect Tools for Perfect Cooking",
    "carvella.cooking.description":
      "Carvella is not just cookware, but a partner that completes the art of cooking. Designed to meet the strict standards of professional chefs while being easy to use at home, we make every cooking enthusiast's dream a reality.",
    "carvella.cooking.lineup": "Product Lineup",
    "carvella.cooking.warranty": "Year Quality Warranty",
    "carvella.cooking.recommendation": "Chef Recommendation Rate",
    "carvella.cooking.satisfaction": "Customer Satisfaction",
    "carvella.collection.title": "For Every Dish",
    "carvella.collection.subtitle":
      "Various product lines perfectly respond to all cooking styles and needs",
    "carvella.collection1.title": "Premium Pots",
    "carvella.collection1.description":
      "Pot collection in various sizes and purposes",
    "carvella.collection2.title": "Frying Pans",
    "carvella.collection2.description":
      "Frying pan series for perfect heat conduction",
    "carvella.collection3.title": "Pressure Lids",
    "carvella.collection3.description": "Multi-purpose pressure lid system",
    "carvella.collection4.title": "Set Products",
    "carvella.collection4.description":
      "Comprehensive set for the perfect kitchen",
    "carvella.testimonial.title": "Chef's Choice",
    "carvella.testimonial1":
      "Carvella's pots have perfect heat conduction, making cooking much easier. Quality that doesn't fall short even in professional kitchens.",
    "carvella.testimonial1.author": "Italian Restaurant Chef",
    "carvella.testimonial2":
      "Unchanged quality and performance even after 15 years of use. A product where you can feel true craftsmanship.",
    "carvella.testimonial2.author": "Cooking Instructor",
    "carvella.testimonial3":
      "Shows perfect performance on any heat source from induction to gas range. The best choice for home use too.",
    "carvella.testimonial3.author": "Food Blogger",
    "carvella.cta.title": "Premium Cooking",
    "carvella.cta.subtitle": "with Carvella",
    "carvella.cta.description":
      "Make your cooking even more special with premium cookware completed with Italian craftsmanship",
    "carvella.good1.badge": "GOOD 01",
    "carvella.good1.title": "Stainless Cutting Board (304)",
    "carvella.good1.description":
      "Made from 304 stainless steel, this cutting board offers superior hygiene and durability. It resists stains and odors, keeping your prep surface clean every time.",
    "carvella.good1.detail1": "Hygienic 304 stainless steel",
    "carvella.good1.detail2": "Highly resistant to scratches and warping",
    "carvella.good1.detail3": "Easy to clean with simple rinsing",
    "carvella.good1.detail4": "Non-slip design for stable use",

    "carvella.good2.badge": "GOOD 02",
    "carvella.good2.title": "6-Piece Knife Set (Includes Scissors & Peeler)",
    "carvella.good2.description":
      "Everything you need in one set! With scissors, a Chinese cleaver, a peeler and more, the 6-piece lineup handles every ingredient with ease.",
    "carvella.good2.detail1":
      "All-in-one 6-piece set incl. scissors, cleaver, peeler",
    "carvella.good2.detail2": "Ergonomic handles for a comfortable grip",
    "carvella.good2.detail3": "Sharp, durable stainless steel blades",
    "carvella.good2.detail4": "Great for home or professional kitchens",

    // MOZ Brand Page
    "moz.hero.tagline": "Warm and Safe Sleep Environment",
    "moz.hero.description":
      "Providing healthy sleep with advanced carbon heating technology and safety-certified design. Warm rest where body and mind recover - that's where MOZ begins.",
    "moz.hero.cta": "Product Inquiry",
    "moz.features.title": "MOZ Core Technology",
    "moz.features.subtitle":
      "Premium sleep solution completed with advanced carbon heating and safety certification",
    "moz.feature1.title": "Carbon Heating Technology",
    "moz.feature1.description":
      "Provides uniform warmth with safe carbon heating wires without electromagnetic wave concerns",
    "moz.feature1.detail1": "Electromagnetic wave blocking carbon material",
    "moz.feature1.detail2": "Uniform temperature distribution",
    "moz.feature1.detail3": "Fast temperature rise",
    "moz.feature1.detail4": "Energy efficient design",
    "moz.feature2.title": "Safety Certified Design",
    "moz.feature2.description":
      "Use with confidence through strict safety certification and overheat prevention system",
    "moz.feature2.detail1": "KC safety certification",
    "moz.feature2.detail2": "Overheat prevention system",
    "moz.feature2.detail3": "Dual safety device",
    "moz.feature2.detail4": "Fire prevention design",
    "moz.feature3.title": "Healthy Sleep",
    "moz.feature3.description":
      "Provides deep and comfortable sleep with warm warmth where body and mind recover",
    "moz.feature3.detail1": "Optimal sleep temperature maintenance",
    "moz.feature3.detail2": "Improved blood circulation",
    "moz.feature3.detail3": "Muscle relaxation effect",
    "moz.feature3.detail4": "Pleasant sleep environment",
    "moz.product1.title": "MOZ Carbon Mat Single",
    "moz.product1.description":
      "Cozy warmth even when used alone, melts away daily fatigue. No electromagnetic wave concerns with safe carbon heating wire.",
    "moz.product1.size": "Size",
    "moz.product2.title": "MOZ Carbon Mat Double",
    "moz.product2.description":
      "Warm warmth for two. Provides deep and comfortable sleep with uniform heat.",
    "moz.product2.size": "Size",
    "moz.reviews.title": "Customer Reviews",
    "moz.review1":
      "I love being able to sleep warm without worrying about electromagnetic waves. It's a must-have for winter!",
    "moz.review1.author": "Kim○○",
    "moz.review2":
      "The temperature is uniform so my feet feel cozy. I feel lighter when I wake up in the morning.",
    "moz.review2.author": "Lee○○",
    "moz.review3":
      "It's a safety-certified product so I can use it with confidence. The quality is satisfactory too.",
    "moz.review3.author": "Park○○",
    "moz.benefits.title": "Warm Nights with MOZ",
    "moz.benefit1.title": "Deep Sleep",
    "moz.benefit1.description":
      "Experience comfortable and deep sleep with optimal temperature maintenance",
    "moz.benefit2.title": "Fast Heating",
    "moz.benefit2.description":
      "Feel warm warmth quickly with carbon heating technology",
    "moz.benefit3.title": "Safe Design",
    "moz.benefit3.description":
      "Use without worry with KC certification and dual safety device",
    "moz.cta.title": "Warm Rest with MOZ",
    "moz.cta.description":
      "Experience healthy sleep with advanced carbon heating technology",
    "moz.cta.button": "Product Inquiry",

    // InYourHeart Brand Page
    "inyourheart.hero.title": "Adding Emotion to Your Skin",
    "inyourheart.hero.description":
      "A premium skincare brand leading the K-beauty market with clean beauty philosophy and emotional package design.",
    "inyourheart.values.title": "Beauty Philosophy with Emotion",
    "inyourheart.values.subtitle":
      "Emotional skincare that is gentle on the skin and warms the heart",
    "inyourheart.category1.title": "Clean Formula",
    "inyourheart.category1.description":
      "We pursue safe and sustainable beauty using only gentle and eco-friendly ingredients.",
    "inyourheart.category2.title": "Emotional Design",
    "inyourheart.category2.description":
      "We design emotional and beautiful packaging to make every moment of use a special experience.",
    "inyourheart.category3.title": "Global K-Beauty",
    "inyourheart.category3.description":
      "We promote Korea’s outstanding beauty technology and innovation worldwide to enhance the value of K-beauty.",
    "inyourheart.cta.title": "Reaching Your Heart with",
    "inyourheart.cta.subtitle": "Beautiful Emotions",
    "inyourheart.cta.description":
      "Start a special beauty journey with IN YOUR HEART.",
    "inyourheart.cta.button": "Contact Us",

    // Sangsaeng Brand Page
    "sangsaeng.hero.title": "Connecting Korean Healthcare to the World",
    "sangsaeng.hero.description":
      "A comprehensive medical platform connecting Korea's excellent medical services to the world, from medical tourism to global healthcare platforms.",
    "sangsaeng.hero.cta": "Visit Sangsaeng Website",
    "sangsaeng.services.title": "Global Healthcare Ecosystem",
    "sangsaeng.services.subtitle":
      "Providing integrated healthcare solutions from medical services to branding",
    "sangsaeng.medical.title": "Sangsaeng Medical",
    "sangsaeng.medical.subtitle": "Sangsaeng Medical",
    "sangsaeng.medical.description":
      "A healthcare brand that provides everyday health solutions and medical services.",
    "sangsaeng.medical.benefit1": "Personalized health check-up packages",
    "sangsaeng.medical.benefit2": "Specialist consultation services",
    "sangsaeng.medical.benefit3": "Chronic disease management programs",
    "sangsaeng.medical.benefit4": "Preventive medicine solutions",

    "sangsaeng.platform.title": "Sangsaeng Platform",
    "sangsaeng.platform.subtitle": "Sangsaeng Platform",
    "sangsaeng.platform.description":
      "A multilingual healthcare platform app—from medical services to tourism—in your hand.",
    "sangsaeng.platform.benefit1": "Multilingual medical interpretation",
    "sangsaeng.platform.benefit2": "Hospital booking & management",
    "sangsaeng.platform.benefit3": "Medical tourism packages",
    "sangsaeng.platform.benefit4": "24/7 emergency support",

    "sangsaeng.branding.title": "Sangsaeng Branding",
    "sangsaeng.branding.subtitle": "Sangsaeng Branding",
    "sangsaeng.branding.description":
      "Branding organization connecting content, Meta ads, and global influencers.",
    "sangsaeng.branding.benefit1": "Medical content marketing",
    "sangsaeng.branding.benefit2": "Multilingual brand campaigns",
    "sangsaeng.branding.benefit3": "Global influencer collaborations",
    "sangsaeng.branding.benefit4": "Digital marketing solutions",

    "sangsaeng.cta.title1": "Connecting with the World,",
    "sangsaeng.cta.title2": "The Future of Korean Healthcare",
    "sangsaeng.cta.description":
      "Experience safe and trustworthy medical services with Sangsaeng.",
    "sangsaeng.cta.button": "Contact Us",

    // Hoid Details
    "hoid.feature1.title": "3-in-1 Technology",
    "hoid.feature1.description":
      "Innovative all-in-one solution integrating air purification, dehumidification, and sterilization",
    "hoid.feature2.title": "HEPA14 Filter",
    "hoid.feature2.description":
      "Medical-grade high-performance filter system boasting 99.995% ultra-fine dust removal efficiency",
    "hoid.feature3.title": "Minimalist Design",
    "hoid.feature3.description":
      "Refined and modern design philosophy that naturally complements any space",
    "hoid.partnership.title": "New Turning Point",
    "hoid.partnership.subtitle": "in Global Expansion",
    "hoid.partnership.date": "August 16, 2025",
    "hoid.partnership.mou":
      "MOU Signed with China's Largest Air Purifier Manufacturer",
    "hoid.partnership.description":
      "HOID has signed a global distribution and technology cooperation MOU with China's largest air purifier manufacturer. Through this, we plan to expand our business to Asia and provide clean air to more customers.",
    "hoid.partnership.point1": "Market Expansion Across Asia",
    "hoid.partnership.point2": "Technology Cooperation and Joint Development",
    "hoid.partnership.point3": "Global Distribution Network Expansion",
    "hoid.homeshopping.title": "Premium Design",
    "hoid.homeshopping.subtitle": "Enters TV Screens",
    "hoid.homeshopping.date": "Launching August 2025",
    "hoid.homeshopping.heading": "Premium Design Appliances, Now in Your Home",
    "hoid.homeshopping.description":
      "The premium design appliance brand HOID is finally coming to you through home shopping. Experience sophisticated design, outstanding performance, and life-changing innovative technology directly on your TV.",
    "hoid.channels.title": "Available Everywhere Nationwide",
    "hoid.channels.subtitle":
      "Getting closer to our customers through various distribution channels",
    "hoid.channel1.title": "Home Shopping",
    "hoid.channel1.description": "Direct sales through home shopping channels",
    "hoid.channel2.title": "Smart Store",
    "hoid.channel2.description": "Official online store operation",
    "hoid.channel3.title": "Global Seller",
    "hoid.channel3.description": "Expansion to overseas online platforms",
    "hoid.channel4.title": "Offline Stores",
    "hoid.channel4.description":
      "Nationwide appliance stores and department stores",
    "hoid.cta.title": "Clean Air, New Daily Life",
    "hoid.cta.description":
      "Create a healthy and comfortable indoor environment with HOID",
    "hoid.cta.button": "Contact Us",

    // Asran Details
    "asran.feature1.title": "SUS410 Stainless Steel",
    "asran.feature1.description":
      "Premium material ensuring durability and safety",
    "asran.feature1.detail1": "Corrosion & Discoloration Resistant",
    "asran.feature1.detail2": "Hygienic and Safe Cooking",
    "asran.feature1.detail3": "Semi-Permanent Use",
    "asran.feature1.detail4": "Luxurious Mirror Finish",

    "asran.feature2.title": "Triple-Layer Bottom Structure",
    "asran.feature2.description":
      "Maximized energy efficiency with excellent heat conductivity",
    "asran.feature2.detail1": "Even Heat Distribution",
    "asran.feature2.detail2": "Fast Heating Time",
    "asran.feature2.detail3": "Easy One-Handed Lid Opening",
    "asran.feature2.detail4": "Minimized Heat Loss",

    "asran.feature3.title": "Perfect Compatibility with All Heat Sources",
    "asran.feature3.description": "Usable in any kitchen environment",
    "asran.feature3.detail1": "Fully Compatible with All Heat Sources",
    "asran.feature3.detail2": "Gas Range, Induction",
    "asran.feature3.detail3": "Non-Stick Exterior for Easy Cleaning",
    "asran.feature3.detail4": "Electric Range",

    "asran.size1.title": "3-Piece Pot Set",
    "asran.size1.usage":
      "Perfect for everything from small to large portions—ideal for solo or family cooking",

    "asran.size2.title": "Pressure Cooker",
    "asran.size2.usage":
      "High-pressure cooking for fresh, flavorful meals in less time",

    "asran.size3.title": "3-Piece Frying Pan Set",
    "asran.size3.usage": "Durable non-stick coating for long-lasting use",

    "asran.cooking1.title": "Soup Dishes",
    "asran.cooking1.description": "Deep and rich soup flavor",
    "asran.cooking2.title": "Steaming & Braising",
    "asran.cooking2.description": "Moist and tender texture",
    "asran.cooking3.title": "Healthy Cooking",
    "asran.cooking3.description": "Cooking method that preserves nutrients",
    "asran.reviews.title": "Authentic Reviews from Real Customers",
    "asran.review1":
      "Amazing value for money! So satisfied to find a pot of this quality at this price.",
    "asran.review1.author": "Kim ○○",
    "asran.review2":
      "Surprised by the weight of the pot. It's incredibly light! The light weight makes it comfortable to cook without hurting my wrist.",
    "asran.review2.author": "Park ○○",
    "asran.review3":
      "The single handle pot is very useful for making baby food. It heats quickly and is easy to clean.",
    "asran.review3.author": "Lee ○○",

    "asran.benefit1.title": "Cooking Becomes Enjoyable",
    "asran.benefit1.description":
      "Uniform heat conduction enables fail-proof cooking, giving you confidence in your cooking skills.",
    "asran.benefit2.title": "Cooking Time Reduced",
    "asran.benefit2.description":
      "Fast heating time and efficient heat distribution significantly reduce cooking time.",
    "asran.benefit3.title": "Your Kitchen Becomes More Beautiful",
    "asran.benefit3.description":
      "Luxurious mirror finish and sophisticated design elevate your kitchen interior.",
    "asran.cta.title": "Premium Cooking Experience",
    "asran.cta.subtitle": "Meets German Technology",
    "asran.cta.description": "Experience a new world of cooking with ASRAN",
    "asran.cta.button": "Contact Us",

    // Footer
    "footer.company": "Company Info",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.follow": "Follow",
    "footer.copyright": "© 2024 FeedBack. All rights reserved.",
  },
  TH: {
    // Navigation
    "nav.home": "เกี่ยวกับเรา",
    "nav.services": "บริการ",
    "nav.brands": "แบรนด์",
    "nav.news": "ข่าว",
    "nav.contact": "ติดต่อเรา",

    // Footer
    "footer.tagline":
      "เชื่อมคุณค่าของเกาหลีสู่โลก – ตั้งแต่การกระจายสินค้าถึงการสร้างแบรนด์",
    "footer.about":
      "บริษัทบริการแบบครบวงจร ที่รุกสู่ตลาดโลกผ่านการกระจายสินค้า การผลิตแบรนด์ของตนเอง การตลาด และแพลตฟอร์มท่องเที่ยวเชิงการแพทย์",
    "footer.sections.services": "บริการ",
    "footer.sections.brands": "แบรนด์",
    "footer.sections.company": "บริษัท",

    "footer.services.distribution": "กระจายสินค้า / นายหน้าส่งออก–นำเข้า",
    "footer.services.manufacturing": "การผลิตแบรนด์ของตนเอง",
    "footer.services.marketing": "การตลาดระดับโลก",
    "footer.services.medical": "แพลตฟอร์มท่องเที่ยวเชิงการแพทย์",
    "footer.services.app": "พัฒนาแอป",

    "footer.brands.hoid": "Hoid",
    "footer.brands.asran": "ASRAN",
    "footer.brands.laceras": "La Ceras",
    "footer.brands.carvella": "Carvella",
    "footer.brands.medifeed": "Medifeed",
    "footer.brands.inyourheart": "InYourHeart",
    "footer.brands.sangsaeng": "Sangsaeng",

    "footer.company.about": "เกี่ยวกับ",
    "footer.company.news": "ข่าว",
    "footer.company.contact": "ติดต่อ",
    "footer.bottom.copyright": "© 2024 FeedBack Corp. สงวนลิขสิทธิ์",
    "footer.bottom.bizinfo":
      "เลขทะเบียนธุรกิจ: 296-87-03628 | ซีอีโอ: Hae-min Song, Sung-hyun Jeong",
    "footer.bottom.privacy": "นโยบายความเป็นส่วนตัว",
    "footer.bottom.terms": "ข้อกำหนดการใช้งาน",
    "footer.bottom.cookies": "นโยบายคุกกี้",

    // Hero Section
    "hero.title": "แพลตฟอร์มกระจายสินค้าที่เชื่อม",
    "hero.subtitle": "แบรนด์และตลาด — FEEDBACK",
    "hero.description":
      "แพลตฟอร์มการเติบโตร่วมกัน ที่เชื่อมการกระจายสินค้า แบรนด์ดิ้ง การตลาด และการผลิตเข้าไว้ด้วยกัน",
    "hero.cta.consultation": "ดูบริการ",
    "hero.cta.proposal": "ชมวิดีโอแนะนำ",

    // Services Section
    "services.title": "บริการ",
    "services.medical.title": "นายหน้าท่องเที่ยวเชิงการแพทย์",
    "services.medical.description":
      "ให้บริการนายมืออาชีพ เชื่อมต่อบุคลากรทางการแพทย์ของเกาหลีกับผู้ป่วยต่างชาติ",
    "services.app.title": "พัฒนาแอปหลายภาษา",
    "services.app.description": "พัฒนาและโลคัลไลซ์แอปมือถือสำหรับตลาดโลก",
    "services.brand.title": "กระจายสินค้าแบรนด์",
    "services.brand.description":
      "โซลูชันการกระจายสินค้าและการตลาด เพื่อพาแบรนด์เอเชียสู่ตลาดโลก",
    "services.consulting.title": "ที่ปรึกษาการตลาด",
    "services.consulting.description":
      "สนับสนุนการวางลยุทธ์การตลาดแบบครบวงจร ตั้งแต่วิเคราะห์ตลาดถึงแบรนด์ดิ้ง",

    // Additional Services
    "services.distribution.title": "กระจายสินค้าและโลจิสติกส์ระดับโลก",
    "services.distribution.description":
      "สนับสนุนการรุกตลาดโลกผ่านเครือข่ายกระจายสินค้าในเอเชีย พิธีการศุลกากร นำเข้า/ส่งออก และการเพิ่มประสิทธิภาพโลจิสติกส์",
    "services.distribution.features.0": "เครือข่ายกระจายสินค้าในเอเชีย",
    "services.distribution.features.1": "พิธีการศุลกากร นำเข้า/ส่งออก",
    "services.distribution.features.2": "โซลูชันการเพิ่มประสิทธิภาพโลจิสติกส์",
    "services.manufacturing.title": "การผลิตแบรนด์ของตนเอง (OEM)",
    "services.manufacturing.description":
      "สนับสนุนการเติบโตของแบรนด์ ผ่านการผลิตและ OEM สำหรับ 4 แบรนด์ของเรา: Hoid, Medifeed, InYourHeart และ Sangsaeng",
    "services.manufacturing.features.0": "มี 4 แบรนด์ของตนเอง",
    "services.manufacturing.features.1": "การผลิตแบบ OEM/ODM",
    "services.manufacturing.features.2": "ระบบควบคุมคุณภาพ",
    "services.marketing.title": "การตลาดและแบรนด์ดิ้งระดับโลก",
    "services.marketing.description":
      "โซลูชันแบรนด์ดิ้งระดับโลกผ่านพันธมิตรโฮมช้อปปิ้งและการตลาดดิจิทัล",
    "services.marketing.features.0": "การตลาดผ่านโฮมช้อปปิ้ง",
    "services.marketing.features.1": "การตลาดดิจิทัล",
    "services.marketing.features.2": "กลยุทธ์ขยายสู่ตลาดโลก",
    "services.medical.features.0": "ท่องเที่ยวเชิงการแพทย์",
    "services.medical.features.1": "เครือข่ายโรงพยาบาล",
    "services.medical.features.2": "แพลตฟอร์มหลายภาษา",
    "services.app.features.0": "แอปรวมการแพทย์/การดูแล",
    "services.app.features.1": "รองรับหลายภาษา",
    "services.app.features.2": "ปรึกษาแบบเรียลไทม์",

    // Brands Section
    "brands.hoid.category": "เครื่องใช้ไฟฟ้าดีไซน์มินิมอล",
    "brands.hoid.slogan": "ดีไซน์ที่เปลี่ยนอากาศได้",
    "brands.hoid.description":
      "แบรนด์เครื่องใช้ไฟฟ้าอัจฉริยะ ที่ยกระดับคุณภาพอากาศในชีวิตประจำวันด้วยดีไซน์มินิมอลและเทคโนโลยีล้ำสมัย ทั้งเครื่องฟอกอากาศและเครื่องลดความชื้น",
    "brands.hoid.products.0": "เครื่องฟอกอากาศ",
    "brands.hoid.products.1": "เครื่องลดความชื้น",
    "brands.hoid.products.2": "เทคโนโลยี 3-in-1",
    "brands.hoid.products.3": "แผ่นกรอง HEPA14",
    "brands.medifeed.category": "อาหารเสริมเพื่อการทำงานของร่างกาย",
    "brands.medifeed.slogan": "นิสัยเล็ก ๆ ที่ปกป้องคุณทุกวัน",
    "brands.medifeed.description":
      "แบรนด์อาหารเสริมเน้นสุขภาพเหงือกและดวงตา มอบโซลูชันสุขภาพที่ใช้งานได้จริงและปลอดภัย",
    "brands.medifeed.products.0": "สุขภาพเหงือก",
    "brands.medifeed.products.1": "สุขภาพดวงตา",
    "brands.medifeed.products.2": "อาหารเสริมเชิงหน้าที่",
    "brands.medifeed.products.3": "มาตรฐาน GMP",
    "brands.inyourheart.category": "สกินแคร์เชิงอารมณ์",
    "brands.inyourheart.slogan": "สวมอารมณ์ให้ผิวของคุณ",
    "brands.inyourheart.description":
      "สกินแคร์พรีเมียม ผู้นำตลาด K‑Beauty ทั่วโลก ด้วยปรัชญาคลีนบิวตี้และแพ็กเกจจิ้งที่มีอารมณ์",
    "brands.inyourheart.products.0": "สูตรคลีน",
    "brands.inyourheart.products.1": "แพ็กเกจจิ้งเชิงอารมณ์",
    "brands.inyourheart.products.2": "K‑Beauty ระดับโลก",
    "brands.inyourheart.products.3": "เซราไมด์",
    "brands.sangsaeng.category": "แพลตฟอร์มท่องเที่ยวเชิงการแพทย์",
    "brands.sangsaeng.slogan":
      "WE CONNECT KOREAN MEDICAL SERVICES TO THE WORLD",
    "brands.sangsaeng.description":
      "แพลตฟอร์มการแพทย์ครบวงจร เชื่อมบริการการแพทย์ชั้นเยี่ยมของเกาหลีสู่ทั่วโลก ตั้งแต่เมดิคัลทัวริซึมถึงเฮลธ์แคร์แพลตฟอร์ม",
    "brands.sangsaeng.products.0": "ท่องเที่ยวเชิงการแพทย์",
    "brands.sangsaeng.products.1": "แพลตฟอร์มเฮลธ์แคร์",
    "brands.sangsaeng.products.2": "แอปหลายภาษา",
    "brands.sangsaeng.products.3": "เครือข่ายโรงพยาบาล",
    "brands.lineup.category": "ไลน์อัปแบรนด์",
    "brands.lineup.slogan":
      "เชื่อมเทคโนโลยี ดีไซน์ และความสะดวกสบายในชีวิตประจำวัน",
    "brands.lineup.description":
      "FeedBack นำเสนอเทคโนโลยีและดีไซน์ที่ยกระดับประสบการณ์ชีวิต ผ่านแบรนด์เครื่องใช้ไฟฟ้า เครื่องครัวพรีเมียม การท่องเที่ยว และไลฟ์สไตล์",
    "brands.asran.category": "เครื่องครัวพรีเมียม",
    "brands.asran.slogan": "หม้อที่รวมเทคโนโลยีเยอรมันกับราคาสมเหตุสมผล",
    "brands.asran.description":
      "แบรนด์เครื่องครัวพรีเมียม ใช้สแตนเลส SUS410 และฐาน 3 ชั้น ให้การนำความร้อนยอดเยี่ยมและทนทาน",
    "brands.asran.products.0": "สแตนเลส SUS410",
    "brands.asran.products.1": "ฐาน 3 ชั้น",
    "brands.asran.products.2": "ใช้ได้ทั้งเตาแม่เหล็กไฟฟ้าและแก๊ส",
    "brands.asran.products.3": "งานเกรดพรีเมียม",
    "brands.laceras.category": "กระเป๋าเดินทางลักชัวรีจากฝรั่งเศส",
    "brands.laceras.slogan":
      "การเดินทางหรูสไตล์ฝรั่งเศส ที่ผสานอดีตกับความโมเดิร์น",
    "brands.laceras.description":
      "แบรนด์กระเป๋าเดินทางหรู ที่ผสานงานช่างฝีมือฝรั่งเศสกับความลุ่มลึกสมัยใหม่ โครงสร้างฮาร์ดเชลล์พอลีคาร์บอเนต งานประกอบพิถีพิถัน และดีไซน์สมดุล เหมาะตั้งแต่ทริปธุรกิจถึงท่องเที่ยวระดับลักชัวรี",
    "brands.laceras.products.0": "กระเป๋าเดินทางฮาร์ดเชลล์",
    "brands.laceras.products.1": "กระเป๋าถือขึ้นเครื่อง",
    "brands.laceras.products.2": "ตัวล็อก TSA",
    "brands.laceras.products.3": "ล้อ 360°",
    "brands.carvella.category": "เครื่องครัวพรีเมียมจากอิตาลี",
    "brands.carvella.slogan": "ความประณีตของช่างอิตาลี สู่วิถีครัวของคุณ",
    "brands.carvella.description":
      "แบรนด์เครื่องครัวพรีเมียมจากงานช่างดั้งเดิมของอิตาลี สแตนเลสคุณภาพสูง โครงสร้างหลายชั้น นำความร้อนดีเยี่ยม ทนทาน ใช้ได้ตั้งแต่เตาแม่เหล็กไฟฟ้าถึงเตาแก๊ส",
    "brands.carvella.products.0": "หม้อพรีเมียม",
    "brands.carvella.products.1": "กระทะทอด",
    "brands.carvella.products.2": "ฝาแรงดันอเนกประสงค์",
    "brands.carvella.products.3": "รองรับแหล่งความร้อนหลากหลาย",
    "brands.moz.category": "แบรนด์ไลฟ์สไตล์พรีเมียมระบบทำความร้อน",
    "brands.moz.slogan": "การวิจัยสภาพแวดล้อมการนอนที่อบอุ่นและปลอดภัย",
    "brands.moz.description":
      "ด้วยเทคโนโลยีทำความร้อนคาร์บอนขั้นสูงและการออกแบบที่ผ่านการรับรองด้านความปลอดภัย Moz มอบการนอนหลับที่ดีต่อสุขภาพและผ่อนคลาย ความอบอุ่นที่ฟื้นฟูทั้งร่างกายและจิตใจ — นั่นคือจุดเริ่มต้นของ Moz",
    "brands.moz.products.0": "ที่นอนคาร์บอนทำความร้อน รุ่นเดี่ยว",
    "brands.moz.products.1": "ที่นอนคาร์บอนทำความร้อน รุ่นคู่",

    // Common UI
    "ui.view_brand_detail": "ดูรายละเอียดแบรนด์",
    "ui.visit_website": "ไปที่เว็บไซต์แบรนด์",
    "ui.learn_more": "ดูเพิ่มเติม",

    // B2B2C Section
    "b2b2c.header.title": "ตั้งแต่ผู้ผลิตถึงผู้บริโภค",
    "b2b2c.header.subtitle": "สร้างระบบนิเวศการกระจายสินค้าที่สมบูรณ์",
    "b2b2c.b2b.title": "ผู้ผลิต B2B",
    "b2b2c.b2b.description": "สร้างพันธมิตรเชิงกลยุทธ์กับผู้ผลิตที่มีคุณภาพ",
    "b2b2c.b2b.feature1": "พาร์ทเนอร์การผลิตมืออาชีพ",
    "b2b2c.b2b.feature2": "ระบบควบคุมคุณภาพ",
    "b2b2c.b2b.feature3": "การผลิตแบบ OEM/ODM",
    "b2b2c.b2b.feature1_short": "การผลิตมืออาชีพ",
    "b2b2c.b2b.feature2_short": "ควบคุมคุณภาพ",
    "b2b2c.b2b.feature3_short": "OEM/ODM",
    "b2b2c.arrow1": "เชื่อมสู่การกระจาย",
    "b2b2c.hub.title": "ศูนย์กระจายสินค้า FeedBack",
    "b2b2c.hub.description":
      "ส่งมอบสินค้าแก่ผู้บริโภค ผ่านเครือข่ายทั้งในประเทศและทั่วโลก",
    "b2b2c.hub.feature1": "เครือข่ายทั่วประเทศ",
    "b2b2c.hub.feature2": "เพิ่มประสิทธิภาพโลจิสติกส์",
    "b2b2c.hub.feature3": "การตลาดแบรนด์",
    "b2b2c.arrow2": "ส่งถึงผู้บริโภค",
    "b2b2c.b2c.title": "ผู้บริโภค B2C",
    "b2b2c.b2c.description":
      "มอบสินค้าและบริการที่ดีที่สุด ผ่านหลากหลายช่องทาง",
    "b2b2c.b2c.feature1": "ออนไลน์ & ออฟไลน์",
    "b2b2c.b2c.feature2": "เชื่อมต่อโฮมช้อปปิ้ง",
    "b2b2c.b2c.feature3": "ขยายสู่ระดับโลก",
    "b2b2c.summary.title": "ระบบนิเวศการกระจายสินค้าที่สมบูรณ์ — FeedBack",
    "b2b2c.summary.description":
      "FeedBack ออกแบบและเพิ่มประสิทธิภาพกระบวนการกระจายสินค้าทั้งหมด เพื่อให้สินค้าคุณภาพจากผู้ผลิตไปถึงผู้บริโภคได้สำเร็จ",

    // News Section
    "news.title": "ข่าว & ข่าวประชาสัมพันธ์",
    "news.description":
      "ติดตามข่าวสารล่าสุดและความสำเร็จสำคัญของ FeedBack — รวมข่าวบริษัทและข่าวแบรนด์ในที่เดียว",
    "news.filter.all": "ทั้งหมด",
    "news.filter.press": "ข่าวประชาสัมพันธ์",
    "news.filter.company": "ข่าวบริษัท",
    "news.filter.brand": "ข่าวแบรนด์",
    "news.category.press": "ข่าวประชาสัมพันธ์",
    "news.category.company": "ข่าวบริษัท",
    "news.category.brand": "ข่าวแบรนด์",
    "news.readMore": "อ่านบทความเต็ม",
    "news.loadMore": "ดูข่าวเพิ่มเติม",
    "news.back_to_list": "กลับไปหน้าข่าว",
    "news.coming_soon": "กำลังอัปเดตเนื้อหาแบบเต็มเร็ว ๆ นี้",
    "news.category.보도자료": "ข่าวประชาสัมพันธ์",
    "news.category.기업소식": "ข่าวบริษัท",
    "news.category.브랜드뉴스": "ข่าวแบรนด์",

    // (Sample items translated; add the rest of your items similarly)
    "news.0.date": "2025.08.11",
    "news.0.title":
      "Sangsaeng·J Electric ลงนาม MOU ระดับโลกกับโรงงานเครื่องฟอกอากาศยักษ์ใหญ่ในจีน",
    "news.0.summary":
      "แบรนด์เครื่องฟอกอากาศ HOID เตรียมนำเทคโนโลยีฟอกอากาศ 3‑in‑1 (ฟอกอากาศ + พัดลม + ฆ่าเชื้อด้วย UV) สู่เกาหลีแบบเอ็กซ์คลูซีฟ โดย Sangsaeng จับมือพาร์ทเนอร์ J Electric ลงนาม MOU กับหนึ่งในโรงงานผู้ผลิตเครื่องฟอกอากาศที่ใหญ่ที่สุดของจีน",
    "news.0.content":
      "Sangsaeng·J Electric ลงนาม MOU ระดับโลกกับโรงงานเครื่องฟอกอากาศยักษ์ใหญ่ในจีน\n\nแบรนด์เครื่องฟอกอากาศเกาหลี HOID เตรียมนำเทคโนโลยี 3-in-1 (ฟอกอากาศ + พัดลม + ฆ่าเชื้อ UV) เข้าสู่เกาหลีแบบผูกขาด Sangsaeng Co., Ltd. ประกาศเมื่อวันที่ 16 ว่าได้ลงนาม MOU กับหนึ่งในโรงงานผู้ผลิตเครื่องฟอกอากาศที่ใหญ่ที่สุดของจีน ร่วมกับพาร์ทเนอร์ J Electric\n\nผ่านข้อตกลงนี้ เทคโนโลยีและองค์ความรู้เชิงนวัตกรรมจากโรงงานจีนจะถูกนำมาใช้ในเกาหลี เสริมความแข็งแกร่งให้เทคโนโลยีและความน่าเชื่อถือของแบรนด์ HOID\n\n(ภาพ: ผู้บริหาร Sangsaeng เยือนจีนเพื่อเซ็นสัญญา MOU)\n\n<strong>พันธมิตรกับเทคโนโลยีระดับโลก</strong>\n\nSangsaeng และ J Electric ผลักดัน MOU ครั้งนี้เพื่อมอบโซลูชันฟอกอากาศที่แตกต่างแก่ผู้บริโภคชาวเกาหลี โรงงานจีนที่ลงนามเป็นหนึ่งใน 5 ผู้ผลิตเครื่องฟอกอากาศรายใหญ่ของประเทศ มีผลงานส่งออกไปสู่สหรัฐ ญี่ปุ่น และตลาดโลก\n\nโดยเฉพาะ โรงงานนี้มีทีมวิจัยและพัฒนา (R&D) ที่มีประสบการณ์กว่า 30 ปี มุ่งพัฒนาเทคโนโลยีฟอกอากาศนวัตกรรมอย่างต่อเนื่อง และครั้งนี้จะเปิดตัวโซลูชัน 3-in-1 เป็นครั้งแรกในเกาหลีกับ HOID\n\nซีอีโอ Jeong Seong-hyeon กล่าวว่ารู้สึกยินดีที่ได้ร่วมงานกับพาร์ทเนอร์ที่มีเทคโนโลยีและกำลังการผลิตระดับโลก และจะนำเสนอเครื่องฟอกอากาศมาตรฐานใหม่ให้ผู้บริโภคชาวเกาหลีผ่านแบรนด์ HOID\n\n<strong>เทคโนโลยีฟอกอากาศ 3-in-1 ครั้งแรกของโลก</strong>\n\nหัวใจของข้อตกลงนี้คือการเปิดตัวเทคโนโลยี 3-in-1 อย่างเป็นทางการในประเทศ ผลิตภัณฑ์ HOID ผสานการฟอกอากาศ พัดลม และการฆ่าเชื้อด้วย UV ในเครื่องเดียว ช่วยทั้งปรับปรุงคุณภาพอากาศภายใน กำจัดเชื้อโรค และหมุนเวียนอากาศไปพร้อมกัน\n\nโดยเฉพาะ ฟังก์ชันฆ่าเชื้อ UV มีประสิทธิภาพรัศมีสูงสุด 2.8 เมตร เป็นครั้งแรกในตลาดเกาหลีที่ทำการฆ่าเชื้อระยะไกลได้ เทคโนโลยีนี้เป็นทรัพย์สินหลักของโรงงานจีน และถูกยกให้เป็นมาตรฐานใหม่ของอุตสาหกรรมเครื่องฟอกอากาศ",
    "news.1.date": "2025.04.15",
    "news.1.title": "เปิดตัวเครื่องฟอกอากาศ Hoid รุ่นที่ 1",
    "news.1.summary":
      "Hoid แบรนด์เครื่องใช้ไฟฟ้าไลฟ์สไตล์พรีเมียม เปิดตัวผลิตภัณฑ์เรือธงรุ่นแรกอย่างเป็นทางการ",
    "news.1.content":
      "Hoid เปิดตัวเครื่องฟอกอากาศรุ่นที่ 1 อย่างเป็นทางการ มาพร้อมระบบกรอง 3 ชั้นกำลังสูงและโครงสร้างหมุนเวียนอากาศรอบทิศ 360° ช่วยฟอกอากาศได้รวดเร็วและรักษาความสะอาดในระดับสูงสุด ดีไซน์มินิมอลเข้ากับทุกสไตล์ตกแต่ง พร้อมมอเตอร์เงียบและประหยัดพลังงาน",
    "news.2.date": "2025.08.08",
    "news.2.title": "เยี่ยมชมโรงงานเครื่องดูดฝุ่น Hoid",
    "news.2.summary":
      "Hoid เข้าเยี่ยมชมโรงงานผลิตเครื่องดูดฝุ่นไร้สาย เพื่อตรวจสอบคุณภาพและความน่าเชื่อถือ",
    "news.2.content":
      "ในสายการผลิต ใช้ไลน์อัตโนมัติสมัยใหม่และบุคลากรเชี่ยวชาญ พร้อมกระบวนการควบคุมคุณภาพเข้มงวดทุกขั้น ตรวจสอบความทนทานของแบตเตอรี่และสมรรถนะมอเตอร์ก่อนส่งมอบ เพื่อให้ถึงมือลูกค้าในสภาพดีที่สุด",
    "news.3.date": "2025.10.13",
    "news.3.title":
      "การเปิดตัวแบรนด์ในเครือ ASRAN, Carvella, La Ceras และ Sikgu",
    "news.3.summary":
      "Feedback เปิดตัวแบรนด์ในเครือของตนเอง ได้แก่ ASRAN และ Carvella แบรนด์เครื่องครัวและของใช้ในบ้านระดับพรีเมียม, La Ceras แบรนด์กระเป๋าเดินทางหรู และ Sikgu แบรนด์ช้อนส้อมคุณภาพสูง",
    "news.3.content":
      "Feedback ได้เปิดตัวแบรนด์ในเครือของตนเอง ได้แก่ ASRAN และ Carvella ซึ่งเป็นแบรนด์เครื่องครัวและของใช้ในบ้านระดับพรีเมียม, La Ceras แบรนด์กระเป๋าเดินทางหรู และ Sikgu แบรนด์ช้อนส้อมที่สะท้อนความงามแบบเกาหลี การเปิดตัวครั้งนี้ทำให้ Feedback รับหน้าที่ดูแลด้านการจัดจำหน่ายภายในประเทศ การตลาด และบริการลูกค้าสำหรับผลิตภัณฑ์ทั้งหมดของทั้งสี่แบรนด์ ASRAN เป็นแบรนด์เครื่องครัวสแตนเลสระดับไฮเอนด์ที่มีชื่อเสียงด้านการนำความร้อนอย่างแม่นยำและการออกแบบที่ประณีต Carvella ถ่ายทอดอารมณ์ความเป็นอิตาเลียนผ่านเครื่องครัวที่ผลิตโดยช่างฝีมือผู้ชำนาญ La Ceras โดดเด่นด้วยวัสดุไฮบริดและดีไซน์ที่หรูหรา ขณะที่ Sikgu นำเสนอเครื่องใช้บนโต๊ะอาหารที่ผสานความเรียบง่ายและความงามแบบเกาหลีได้อย่างลงตัว Feedback มีเป้าหมายที่จะนำเสนอแบรนด์ไลฟ์สไตล์ระดับพรีเมียมสู่ตลาดเกาหลี พร้อมยกระดับประสบการณ์การใช้ชีวิตของผู้บริโภคผ่านการควบคุมคุณภาพและการพัฒนาแบรนด์อย่างต่อเนื่อง",

    "news.4.date": "2025.10.14",
    "news.4.title":
      "เปิดตัวเครื่องฟอกอากาศ Hoid รุ่นที่ 2: ครบจบการดูแลอากาศตลอดทั้งปีในเครื่องเดียว",
    "news.4.summary":
      "พัดลมฟอกอากาศแบบไร้ใบพัด 5-in-1 พร้อมแผ่นกรอง HEPA14 ระดับการแพทย์และระบบฆ่าเชื้อด้วยรังสี UV ครอบคลุมพื้นที่ 78 ม² รุกตลาดพรีเมียม",
    "news.4.content":
      "แผ่นกรอง HEPA14 ระดับการแพทย์ + UV Sterilization ครอบคลุมกว้าง 78 ม² เจาะตลาดเครื่องใช้ไฟฟ้าพรีเมียม\n\nตลาดเครื่องใช้ไฟฟ้าในบ้านของเกาหลีต้อนรับพัดลมฟอกอากาศร้อน-เย็นแบบมัลติฟังก์ชันที่ออกแบบมาเพื่อใช้งานได้ทุกฤดูกาล\n\nรุ่นใหม่นี้รวม 5 ฟังก์ชัน—ลมเย็น ลมร้อน ฟอกอากาศ สร้างประจุลบ และฆ่าเชื้อด้วยรังสี UV—ไว้ในโซลูชันแบบ ‘5-in-1’ เครื่องเดียว มอบระบบจัดการคุณภาพอากาศแบบองค์รวม แตกต่างจากเครื่องทั่วไปที่ทำได้อย่างใดอย่างหนึ่ง\n\n(ภาพ: พัดลมฟอกอากาศไร้ใบพัด 5-in-1 ร้อน-เย็น)\n\n<strong>กรองระดับการแพทย์: กำจัดฝุ่นละเอียดได้ 99.99%</strong>\n\nจุดเด่นคือแผ่นกรอง HEPA14 ระดับห้องผ่าตัด/คลีนรูม สามารถดักจับอนุภาคขนาด 0.3 ไมโครเมตรได้ไม่น้อยกว่า 99.99% สูงกว่าเกรด HEPA13 ที่ใช้กันทั่วไปในบ้าน จึงอุ่นใจได้สำหรับครอบครัวที่มีอาการภูมิแพ้หรือปัญหาระบบทางเดินหายใจ\n\nด้วยระบบกรองอากาศแบบ 360 องศา เครื่องสามารถดูดและฟอกอากาศได้รอบทิศ ครอบคลุมพื้นที่ได้สูงสุด 78 ม² (ประมาณ 24 พย็อง/840 ตร.ฟุต) เหมาะกับพื้นที่ขนาดใหญ่ เช่น ห้องนั่งเล่นหรือสำนักงาน\n\n<strong>UV Sterilization และประจุลบ เพื่อสภาพแวดล้อมภายในที่ถูกสุขอนามัย</strong>\n\nนอกจากดักจับฝุ่น เครื่องยังติดตั้งระบบฆ่าเชื้อด้วยรังสี UV เพื่อลดแบคทีเรียและไวรัสในอากาศ วิธีนี้ไม่ใช้สารเคมีจึงปลอดภัย โดยเฉพาะอย่างยิ่งในช่วงเปลี่ยนฤดู",
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
    "혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.":
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
    "hoid.hero.description":
      "미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트 가전 브랜드입니다.",
    "hoid.hero.cta": "Hoid 홈페이지 가기",
    "hoid.features.title": "혁신적인 기술력",
    "hoid.features.subtitle":
      "미니멀한 디자인 속에 숨어있는 첨단 기술로 완전히 새로운 공기청정 경험을 제공합니다",
    "hoid.homeshopping.date": "2025년 8월 런칭",
    "hoid.homeshopping.heading": "프리미엄 디자인 가전, 이제 집에서 만나보세요",
    "hoid.homeshopping.description":
      "프리미엄 디자인 가전 브랜드 호이드가 드디어 홈쇼핑을 통해 여러분을 찾아갑니다. 세련된 디자인과 뛰어난 성능, 그리고 생활을 바꾸는 혁신적인 기술을 이제 TV 속에서 직접 확인하세요.",
    "hoid.channels.title": "전국 어디서나 만날 수 있는",
    "hoid.channels.subtitle":
      "다양한 유통 채널을 통해 고객 여러분께 더 가깝게 다가갑니다",
    "hoid.channel1.title": "홈쇼핑",
    "hoid.channel1.description": "홈쇼핑 채널을 통한 직접 판매",
    "hoid.channel2.title": "스마트스토어",
    "hoid.channel2.description": "온라인 공식 스토어 운영",
    "hoid.channel3.title": "글로벌 셀러",
    "hoid.channel3.description": "해외 온라인 플랫폼 진출",
    "hoid.channel4.title": "오프라인 매장",
    "hoid.channel4.description": "전국 가전 매장 및 백화점",
    "hoid.cta.title": "깨끗한 공기, 새로운 일상",
    "hoid.cta.description":
      "HOID와 함께 건강하고 쾌적한 실내 환경을 만들어보세요",
    "hoid.cta.button": "문의하기",

    // Asran Brand Page
    "asran.hero.tagline": "독일 기술과 합리적 가격을 모두 갖춘 냄비",
    "asran.hero.description":
      "SUS410 스테인리스 스틸과 3중 바닥구조로 뛰어난 열전도율과 내구성을 자랑합니다. 인덕션과 가스 겸용으로 어떤 주방환경에서도 완벽하게 사용 가능한 프리미엄 냄비입니다.",
    "asran.hero.cta": "ASRAN 홈페이지 가기",
    "asran.features.title": "ASRAN만의 특별한 기술",
    "asran.features.subtitle":
      "독일의 정밀한 기술력과 한국의 실용성이 만나 탄생한 프리미엄 주방용품",

    // Medifeed Brand Page
    "medifeed.hero.title": "매일을 지키는 작은 습관",
    "medifeed.hero.description":
      "잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 누구나 쉽게 선택할 수 있는 건강 솔루션을 제공합니다.",
    "medifeed.features.title": "전문화된 건강 솔루션",
    "medifeed.features.subtitle":
      "과학적 연구를 바탕으로 개발된 특화 영양제로 일상의 건강을 책임집니다",
    "medifeed.category1.title": "잇몸 건강 전문",
    "medifeed.category1.description":
      "치주질환 예방과 잇몸 건강 유지를 위한 전문 영양제",
    "medifeed.category1.ingredient1": "코엔자임 Q10",
    "medifeed.category1.ingredient2": "비타민 C 복합체",
    "medifeed.category1.ingredient3": "아연 & 셀레늄",
    "medifeed.category1.ingredient4": "GMP 인증",
    "medifeed.category2.title": "눈 건강 전문",
    "medifeed.category2.description":
      "디지털 시대 눈의 피로와 시력 보호를 위한 기능성 영양제",
    "medifeed.category2.ingredient1": "루테인 & 지아잔틴",
    "medifeed.category2.ingredient2": "빌베리 추출물",
    "medifeed.category2.ingredient3": "오메가-3 지방산",
    "medifeed.category2.ingredient4": "블루라이트 차단",
    "medifeed.philosophy.title": "건강한 일상을 만드는",
    "medifeed.philosophy.subtitle":
      "과학적 근거와 품질에 대한 확고한 신념으로 믿을 수 있는 건강 솔루션을 제공합니다",
    "medifeed.value1.title": "안전성 우선",
    "medifeed.value1.description":
      "엄격한 품질 관리와 GMP 인증을 통해 안전하고 신뢰할 수 있는 제품만을 제공합니다.",
    "medifeed.value2.title": "실용적 접근",
    "medifeed.value2.description":
      "바쁜 현대인의 라이프스타일에 맞춰 간편하게 섭취할 수 있는 형태로 개발합니다.",
    "medifeed.value3.title": "합리적 가격",
    "medifeed.value3.description":
      "누구나 부담 없이 구매할 수 있는 합리적인 가격으로 건강한 습관을 만들어갑니다.",
    "medifeed.cta.title": "건강한 하루,",
    "medifeed.cta.subtitle": "작은 습관에서 시작",
    "medifeed.cta.description":
      "MEDIFEED와 함께 일상 속 작은 변화로 더 나은 건강을 만들어보세요",
    "medifeed.cta.button": "상담 신청하기",

    // LaCeras Brand Page
    "laceras.hero.title": "전통과 모던이 만나는",
    "laceras.hero.subtitle": "프렌치 럭셔리",
    "laceras.hero.description":
      "프랑스의 장인정신과 현대적 세련미를 결합한 럭셔리 캐리어 브랜드입니다. 비즈니스부터 럭셔리 여행까지 완벽한 트래블 솔루션을 제안합니다.",
    "laceras.hero.cta": "La Ceras 홈페이지 가기",
    "laceras.features.title": "프렌치 크래프트맨십",
    "laceras.features.subtitle":
      "정교한 마감과 균형 잡힌 디자인으로 완성된 프리미엄 럭셔리 트래블 경험",
    "laceras.feature1.title": "하이브리드 구조",
    "laceras.feature1.description":
      "PP의 유연성과 PC의 강성을 결합하여 가볍고 튼튼한 바디 구현",
    "laceras.feature2.title": "Sinking Ordinary Lock",
    "laceras.feature2.description":
      "기본 락 구조를 상판과 균형감 있게 낮춰 스크래치 포인트 최소화",
    "laceras.feature3.title": "무소음 휠 & 안정적 베어링 시스템",
    "laceras.feature3.description":
      "어떤 방향으로든 부드럽고 조용한 이동이 가능한 프리미엄 휠 시스템",
    "laceras.heritage.title": "프랑스 장인 정신의",
    "laceras.heritage.subtitle": "70년 전통",
    "laceras.heritage.heading": "세대를 넘나드는 크래프트맨십",
    "laceras.heritage.description":
      "1950년부터 시작된 La Ceras의 여정은 프랑스 전통 장인정신과 현대적 혁신이 만나는 지점에서 계속되고 있습니다. 세심한 디테일과 완벽한 마감으로 럭셔리 트래블의 새로운 기준을 제시합니다.",

    "laceras.heritage.point1": "14인치, 20인치, 24인치, 28인치 올인원 구성",
    "laceras.heritage.point2": "210D 베어링으로 손목 피로 최소화",
    "laceras.heritage.point3": "PP & PC 하이브리드 구조",

    "laceras.travel.title": "비즈니스부터 럭셔리까지",
    "laceras.travel.subtitle": "완벽한 트래블 솔루션",
    "laceras.travel.heading": "모든 여행의 순간을 특별하게",
    "laceras.travel.description":
      "La Ceras는 단순한 캐리어가 아닌 여행 파트너입니다. 비즈니스 출장부터 로맨틱한 허니문, 가족 여행까지 모든 순간을 더욱 세련되고 편안하게 만들어드립니다.",
    "laceras.travel.size": "사이즈 옵션",
    "laceras.travel.warranty": "년 보증",
    "laceras.travel.stores": "글로벌 매장",
    "laceras.travel.rating": "고객 만족도",
    "laceras.collection.title": "모든 여행 스타일에 맞는",
    "laceras.collection.subtitle":
      "다양한 컬렉션으로 여행자의 취향과 필요에 완벽하게 부응합니다",
    "laceras.collection1.title": "캐리온",
    "laceras.collection1.description": "기내 반입 가능한 컴팩트 사이즈",
    "laceras.collection2.title": "하드셸 캐리어",
    "laceras.collection2.description": "중거리 여행을 위한 미디움 사이즈",
    "laceras.collection3.title": "트렁크",
    "laceras.collection3.description": "장기간 여행을 위한 라지 사이즈",
    "laceras.cta.title": "La Ceras와 함께하는",
    "laceras.cta.subtitle": "럭셔리 트래블",
    "laceras.cta.description":
      "프랑스 장인정신으로 완성된 프리미엄 캐리어로 당신의 여행을 더욱 특별하게 만들어보세요",

    // Carvella Brand Page
    "carvella.hero.title": "이탈리아 장인의 정밀함",
    "carvella.hero.subtitle": "당신의 주방으로",
    "carvella.hero.description":
      "이탈리아 전통 장인정신으로 완성한 프리미엄 쿠킹웨어 브랜드입니다. 고급 스테인리스와 다층 구조로 뛰어난 열전도와 내구성을 자랑합니다.",
    "carvella.hero.cta": "Carvella 홈페이지 가기",
    "carvella.features.title": "이탈리아 장인정신",
    "carvella.features.subtitle":
      "정밀한 기술과 전통 크래프트맨십이 만나 완성된 프리미엄 쿠킹웨어",
    "carvella.feature1.title": "프리미엄 스테인리스",
    "carvella.feature1.description":
      "최고급 스테인리스 스틸 소재로 내구성과 위생성을 동시에 보장",
    "carvella.feature2.title": "다층 바닥구조",
    "carvella.feature2.description":
      "균등한 열전도와 열보존을 위한 특수 다층 바닥 설계 시스템",
    "carvella.feature3.title": "멀티 호환 열원",
    "carvella.feature3.description":
      "인덕션부터 가스레인지까지 모든 열원에서 완벽한 성능 발휘",
    "carvella.heritage.title": "이탈리아 전통의",
    "carvella.heritage.subtitle": "아르티지아나토",
    "carvella.heritage.heading": "정밀함과 열정이 만나는 곳",
    "carvella.heritage.description":
      "이탈리아 북부 롬바르디아 지역의 전통 금속공예 기술을 바탕으로 탄생한 Carvella는 장인들의 정밀함과 요리에 대한 열정을 그대로 담아냅니다. 매 제품마다 이탈리아 장인의 손길이 닿아 완성되는 진정한 아르티지아나토입니다.",
    "carvella.heritage.point1": "이탈리아 전통 금속공예 기법",
    "carvella.heritage.point2": "장인 수작업 마감 처리",
    "carvella.heritage.point3": "유럽 인증 프리미엄 소재",
    "carvella.cooking.title": "프로 셰프부터 요리 애호가까지",
    "carvella.cooking.subtitle": "모든 주방의 파트너",
    "carvella.cooking.heading": "완벽한 요리를 위한 완벽한 도구",
    "carvella.cooking.description":
      "Carvella는 단순한 조리도구가 아닌 요리의 예술을 완성하는 파트너입니다. 프로 셰프의 엄격한 기준을 충족하면서도 가정에서 쉽게 사용할 수 있도록 설계되어 모든 요리 애호가들의 꿈을 현실로 만들어드립니다.",
    "carvella.cooking.lineup": "제품 라인업",
    "carvella.cooking.warranty": "년 품질보증",
    "carvella.cooking.recommendation": "셰프 추천율",
    "carvella.cooking.satisfaction": "고객 만족도",
    "carvella.collection.title": "모든 요리를 위한",
    "carvella.collection.subtitle":
      "다양한 제품 라인으로 모든 요리 스타일과 필요에 완벽하게 부응합니다",
    "carvella.collection1.title": "프리미엄 냄비",
    "carvella.collection1.description": "다양한 사이즈와 용도별 냄비 컬렉션",
    "carvella.collection2.title": "프라이팬",
    "carvella.collection2.description": "완벽한 열전도를 위한 프라이팬 시리즈",
    "carvella.collection3.title": "압력뚜껑",
    "carvella.collection3.description": "다목적 멀티 압력뚜껑 시스템",
    "carvella.collection4.title": "세트 상품",
    "carvella.collection4.description": "완벽한 주방을 위한 종합 세트",
    "carvella.testimonial.title": "전문가들의 선택",
    "carvella.testimonial1":
      "Carvella의 냄비는 열전도가 완벽해서 요리가 훨씬 쉬워졌습니다. 프로 주방에서도 손색없는 품질입니다.",
    "carvella.testimonial1.author": "이탈리안 레스토랑 셰프",
    "carvella.testimonial2":
      "15년 넘게 사용해도 변함없는 품질과 성능. 진정한 장인정신을 느낄 수 있는 제품입니다.",
    "carvella.testimonial2.author": "요리 강사",
    "carvella.testimonial3":
      "인덕션에서 가스레인지까지 어떤 열원에서도 완벽한 성능을 보여줍니다. 가정용으로도 최고의 선택이에요.",
    "carvella.testimonial3.author": "요리 블로거",
    "carvella.cta.title": "Carvella와 함께하는",
    "carvella.cta.subtitle": "프리미엄 쿠킹",
    "carvella.cta.description":
      "이탈리아 장인정신으로 완성된 프리미엄 쿠킹웨어로 당신의 요리를 더욱 특별하게 만들어보세요",
    "carvella.good1.badge": "GOOD 01",
    "carvella.good1.title": "스테인리스 도마",
    "carvella.good1.description":
      "304 스테인리스 스틸로 제작되어 위생적이고 내구성이 뛰어난 도마입니다. 음식물 착색과 냄새가 남지 않아 언제나 깔끔하게 사용할 수 있습니다.",
    "carvella.good1.detail1": "위생적인 304 스테인리스 소재",
    "carvella.good1.detail2": "긁힘·변형에 강한 높은 내구성",
    "carvella.good1.detail3": "물세척만으로 간편한 관리",
    "carvella.good1.detail4": "논슬립 구조로 안정감 있는 사용",

    "carvella.good2.badge": "GOOD 02",
    "carvella.good2.title": "6종 칼 세트",
    "carvella.good2.description":
      "가위, 중식도, 감자칼 등 6종 구성으로 다양한 재료를 손쉽게 조리할 수 있습니다.",
    "carvella.good2.detail1": "6종 올인원",
    "carvella.good2.detail2": "인체공학적 손잡이로 편안한 그립",
    "carvella.good2.detail3": "뛰어난 절삭력",
    "carvella.good2.detail4": "가정용·업소용 모두 적합",

    // MOZ Brand Page
    "moz.hero.tagline": "따뜻하고 안전한 수면 환경",
    "moz.hero.description":
      "첨단 카본 히팅 기술과 안전 인증 설계로 건강한 숙면을 제공합니다. 몸과 마음이 회복되는 따뜻한 휴식, 그것이 모즈의 시작입니다.",
    "moz.hero.cta": "제품 문의하기",
    "moz.features.title": "모즈의 핵심 기술",
    "moz.features.subtitle":
      "첨단 카본 히팅과 안전 인증으로 완성한 프리미엄 수면 솔루션",
    "moz.feature1.title": "카본 히팅 기술",
    "moz.feature1.description":
      "전자파 걱정 없는 안전한 카본 열선으로 균일한 온기를 제공합니다",
    "moz.feature1.detail1": "전자파 차단 카본 소재",
    "moz.feature1.detail2": "균일한 온도 분포",
    "moz.feature1.detail3": "빠른 온도 상승",
    "moz.feature1.detail4": "에너지 효율 설계",
    "moz.feature2.title": "안전 인증 설계",
    "moz.feature2.description":
      "엄격한 안전 인증과 과열 방지 시스템으로 안심하고 사용할 수 있습니다",
    "moz.feature2.detail1": "KC 안전 인증",
    "moz.feature2.detail2": "과열 방지 시스템",
    "moz.feature2.detail3": "이중 안전 장치",
    "moz.feature2.detail4": "화재 예방 설계",
    "moz.feature3.title": "건강한 숙면",
    "moz.feature3.description":
      "몸과 마음이 회복되는 따뜻한 온기로 깊고 편안한 잠을 선사합니다",
    "moz.feature3.detail1": "최적 수면 온도 유지",
    "moz.feature3.detail2": "혈액순환 개선",
    "moz.feature3.detail3": "근육 이완 효과",
    "moz.feature3.detail4": "쾌적한 수면 환경",
    "moz.product1.title": "모즈 카본 탄소매트 싱글",
    "moz.product1.description":
      "혼자 써도 포근한 온기, 하루 피로를 녹입니다. 안전한 카본 열선으로 전자파 걱정 없어요.",
    "moz.product1.size": "사이즈",
    "moz.product2.title": "모즈 카본 탄소매트 더블",
    "moz.product2.description":
      "두 사람이 함께하는 따뜻한 온기. 균일한 열로 깊고 편안한 잠을 선사합니다.",
    "moz.product2.size": "사이즈",
    "moz.reviews.title": "고객 후기",
    "moz.review1":
      "전자파 걱정 없이 따뜻하게 잘 수 있어서 너무 좋아요. 겨울철 필수템입니다!",
    "moz.review1.author": "김○○",
    "moz.review2":
      "온도가 균일해서 발끝까지 포근해요. 아침에 일어나면 몸이 한결 가벼워진 느낌입니다.",
    "moz.review2.author": "이○○",
    "moz.review3":
      "안전 인증 받은 제품이라 안심하고 사용할 수 있어요. 품질도 만족스럽습니다.",
    "moz.review3.author": "박○○",
    "moz.benefits.title": "모즈와 함께하는 따뜻한 밤",
    "moz.benefit1.title": "깊은 숙면",
    "moz.benefit1.description":
      "최적의 온도 유지로 편안하고 깊은 잠을 경험하세요",
    "moz.benefit2.title": "빠른 온열",
    "moz.benefit2.description":
      "카본 히팅 기술로 빠르게 따뜻한 온기를 느낄 수 있습니다",
    "moz.benefit3.title": "안전한 설계",
    "moz.benefit3.description":
      "KC 인증과 이중 안전 장치로 걱정 없이 사용하세요",
    "moz.cta.title": "모즈와 함께하는 따뜻한 휴식",
    "moz.cta.description": "첨단 카본 히팅 기술로 건강한 숙면을 경험해보세요",
    "moz.cta.button": "제품 문의하기",

    // InYourHeart Brand Page
    "inyourheart.hero.title": "피부에 감성을 입히다",
    "inyourheart.hero.description":
      "클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 프리미엄 스킨케어 브랜드입니다.",
    "inyourheart.values.title": "감성이 담긴 뷰티 철학",
    "inyourheart.values.subtitle":
      "피부에 순하고 마음까지 따뜻하게 만드는 감성 스킨케어",
    "inyourheart.category1.title": "클린 포뮬러",
    "inyourheart.category1.description":
      "피부에 순하고 환경에 친화적인 성분만을 사용하여 안전하고 지속가능한 뷰티를 추구합니다.",
    "inyourheart.category2.title": "감성 디자인",
    "inyourheart.category2.description":
      "제품 사용 순간부터 특별한 경험이 될 수 있도록 감성적이고 아름다운 패키지를 디자인합니다.",
    "inyourheart.category3.title": "글로벌 K-뷰티",
    "inyourheart.category3.description":
      "한국의 우수한 뷰티 기술과 혁신을 전 세계에 알리며 K-뷰티의 가치를 높여갑니다.",
    "inyourheart.cta.title": "당신의 마음에 닿는",
    "inyourheart.cta.subtitle": "아름다운 감성",
    "inyourheart.cta.description":
      "IN YOUR HEART와 함께 특별한 뷰티 여정을 시작해보세요",
    "inyourheart.cta.button": "문의하기",

    // Sangsaeng Brand Page
    "sangsaeng.hero.title": "한국 의료를 세계로 연결하다",
    "sangsaeng.hero.description":
      "메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한 의료 서비스를 전 세계에 연결하는 종합 의료 플랫폼입니다.",
    "sangsaeng.hero.cta": "상생 홈페이지 가기",
    "sangsaeng.services.title": "글로벌 헬스케어 생태계",
    "sangsaeng.services.subtitle":
      "의료 서비스부터 브랜딩까지, 통합된 헬스케어 솔루션을 제공합니다",
    "sangsaeng.medical.title": "상생 메디컬",
    "sangsaeng.medical.subtitle": "Sangsaeng Medical",
    "sangsaeng.medical.description":
      "실생활 기반 건강 솔루션과 의료 서비스를 제공하는 헬스케어 브랜드",
    "sangsaeng.medical.benefit1": "맞춤형 건강 검진 패키지",
    "sangsaeng.medical.benefit2": "전문의 상담 서비스",
    "sangsaeng.medical.benefit3": "만성질환 관리 프로그램",
    "sangsaeng.medical.benefit4": "예방 의학 솔루션",

    "sangsaeng.platform.title": "상생 플랫폼",
    "sangsaeng.platform.subtitle": "Sangsaeng Platform",
    "sangsaeng.platform.description":
      "의료부터 관광까지 손안의 다국어 의료 플랫폼 앱",

    "sangsaeng.platform.benefit1": "다국어 의료 통역 서비스",
    "sangsaeng.platform.benefit2": "병원 예약 및 관리",
    "sangsaeng.platform.benefit3": "의료 관광 패키지",
    "sangsaeng.platform.benefit4": "24시간 응급 서포트",

    "sangsaeng.branding.title": "상생 브랜딩",
    "sangsaeng.branding.subtitle": "Sangsaeng Branding",
    "sangsaeng.branding.description":
      "콘텐츠, 메타광고, 글로벌 인플루언서 연계 브랜딩 조직",
    "sangsaeng.branding.benefit1": "의료 콘텐츠 마케팅",
    "sangsaeng.branding.benefit2": "다국어 브랜드 캠페인",
    "sangsaeng.branding.benefit3": "글로벌 인플루언서 협업",
    "sangsaeng.branding.benefit4": "디지털 마케팅 솔루션",

    "sangsaeng.cta.title1": "세계와 연결되는",
    "sangsaeng.cta.title2": "한국 의료의 미래",
    "sangsaeng.cta.description":
      "상생과 함께 안전하고 신뢰할 수 있는 의료 서비스를 경험해보세요",
    "sangsaeng.cta.button": "문의하기",

    // Hoid Details
    "hoid.feature1.title": "3-in-1 기술",
    "hoid.feature1.description":
      "공기청정, 제습, 살균 기능을 하나로 통합한 혁신적인 올인원 솔루션",
    "hoid.feature2.title": "HEPA14 필터",
    "hoid.feature2.description":
      "99.995% 초미세먼지 제거 효율을 자랑하는 의료급 고성능 필터 시스템",
    "hoid.feature3.title": "미니멀 디자인",
    "hoid.feature3.description":
      "어떤 공간에도 자연스럽게 어울리는 세련되고 모던한 디자인 철학",
    "hoid.partnership.title": "글로벌 확장의",
    "hoid.partnership.subtitle": "새로운 전환점",
    "hoid.partnership.date": "2025년 8월 16일",
    "hoid.partnership.mou": "중국 초대형 공기청정기 제조사와 MOU 체결",
    "hoid.partnership.description":
      "HOID는 중국 최대 공기청정기 제조업체와 글로벌 유통 및 기술 협력 MOU를 체결했습니다. 이를 통해 아시아 전역으로 사업 영역을 확장하고, 더 많은 고객에게 깨끗한 공기를 제공할 예정입니다.",
    "hoid.partnership.point1": "아시아 전역 시장 진출",
    "hoid.partnership.point2": "기술 협력 및 공동 개발",
    "hoid.partnership.point3": "글로벌 유통망 확대",
    "hoid.homeshopping.title": "TV 속으로 들어간",
    "hoid.homeshopping.subtitle": "프리미엄 디자인",

    // Asran Details
    "asran.feature1.title": "SUS410 스테인리스 스틸",
    "asran.feature1.description":
      "최고급 소재로 내구성과 안전성을 보장합니다",
    "asran.feature1.detail1": "부식 방지 & 변색 방지",
    "asran.feature1.detail2": "위생적이고 안전한 조리",
    "asran.feature1.detail3": "반영구적 사용 가능",
    "asran.feature1.detail4": "고급스러운 미러 마감",

    "asran.feature2.title": "3중 바닥구조",
    "asran.feature2.description": "뛰어난 열전도율로 에너지 효율성 극대화",
    "asran.feature2.detail1": "균등한 열 분산",
    "asran.feature2.detail2": "빠른 가열 시간",
    "asran.feature2.detail3": "한 손으로 뚜껑 쉽게 개폐 가능",
    "asran.feature2.detail4": "열 손실 최소화",

    "asran.feature3.title": "모든 열원 완벽 호환",
    "asran.feature3.description": "어떤 주방환경에서도 완벽하게 사용 가능",
    "asran.feature3.detail1": "모든 열원 완벽 호환",
    "asran.feature3.detail2": "가스 레인지, 인덕션",
    "asran.feature3.detail3": "논스틱 외부 코팅으로 쉬운 세척",
    "asran.feature3.detail4": "전기 레인지",

    "asran.size1.title": "냄비 3종 세트",
    "asran.size1.usage": "소용량부터 대용량까지, 혼자서도 가족과도 완벽하게",

    "asran.size2.title": "압력솥",
    "asran.size2.usage": "고압의 빠른 조리로 신선하고 풍미있는 요리 가능",

    "asran.size3.title": "프라이팬 3종 세트",
    "asran.size3.usage": "강력한 코팅으로 오래쓰는 프라이팬",

    "asran.cooking1.title": "국물요리",
    "asran.cooking1.description": "깊고 진한 국물 맛 구현",
    "asran.cooking2.title": "찜 & 조림",
    "asran.cooking2.description": "촉촉하고 부드러운 식감",
    "asran.cooking3.title": "건강한 조리",
    "asran.cooking3.description": "영양소 보존하는 조리법",
    "asran.reviews.title": "실제 구매고객들의 생생한 후기",
    "asran.review1":
      "가성비 너무 혜자네요! 이 가격에 이런 품질의 냄비를 만날 수 있다니 정말 만족스럽습니다.",
    "asran.review1.author": "김○○님",
    "asran.review2":
      "냄비의 무게에 놀랐다. 엄청 가볍다! 가벼운 무게 덕분에 손목이 아프지 않고 편하게 요리할 수 있어요.",
    "asran.review2.author": "박○○님    "asran.review3":
      "이유식 만들 때 편수냄비가 너무 유용하게 사용되고 있어요. 열 전도도 빠르고 청소도 쉬워서 좋습니다.",
    "asran.review3.author": "이○○님",
    "asran.benefit1.title": "요리가 즐거워집니다",
    "asran.benefit1.description":
      "균등한 열 전도로 실패 없는 요리가 가능하여 요리에 대한 자신감이 생깁니다.",
    "asran.benefit2.title": "요리 시간이 단축됩니다",
    "asran.benefit2.description":
      "빠른 가열 시간과 효율적인 열 분산으로 요리 시간을 대폭 줄일 수 있습니다.",
    "asran.benefit3.title": "주방이 더 아름다워집니다",
    "asran.benefit3.description":
      "고급스러운 미러 마감과 세련된 디자인으로 주방 인테리어가 한층 업그레이드됩니다.",
    "asran.cta.title": "독일 기술력과 만나는",
    "asran.cta.subtitle": "프리미엄 요리 경험",
    "asran.cta.description": "ASRAN과 함께 새로운 요리의 세계를 경험해보세요",
    "asran.cta.button": "문의하기",

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

    // Footer
    "footer.tagline":
      "Connecting the value of Korea to the world — from distribution to branding",
    "footer.about":
      "A full-service company entering the global market through distribution, private-label manufacturing, marketing, and a medical tourism platform.",
    "footer.sections.services": "Services",
    "footer.sections.brands": "Brands",
    "footer.sections.company": "Company",

    "footer.services.distribution": "Distribution / Import–Export Brokerage",
    "footer.services.manufacturing": "Private Label Manufacturing",
    "footer.services.marketing": "Global Marketing",
    "footer.services.medical": "Medical Tourism Platform",
    "footer.services.app": "App Development",

    "footer.brands.hoid": "Hoid",
    "footer.brands.asran": "ASRAN",
    "footer.brands.laceras": "La Ceras",
    "footer.brands.carvella": "Carvella",
    "footer.brands.medifeed": "Medifeed",
    "footer.brands.inyourheart": "InYourHeart",
    "footer.brands.sangsaeng": "Sangsaeng",

    "footer.company.about": "About",
    "footer.company.news": "News",
    "footer.company.contact": "Contact",

    "footer.bottom.copyright": "© 2024 FeedBack Corp. All rights reserved.",
    "footer.bottom.bizinfo":
      "Business Reg. No.: 296-87-03628 | CEOs: Hae-min Song, Sung-hyun Jeong",
    "footer.bottom.privacy": "Privacy Policy",
    "footer.bottom.terms": "Terms of Use",
    "footer.bottom.cookies": "Cookie Policy",

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
      "Premium skincare brand leading the K-beauty market with clean beauty philosophy and emotional package design.",
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
    "brands.moz.category": "Premium Heated Life Brand",
    "brands.moz.slogan": "Researching Warm and Safe Sleeping Environments",
    "brands.moz.description":
      "With advanced carbon heating technology and certified safety design, Moz provides a healthy and restful sleep. Warm relaxation that restores your body and mind — that's where Moz begins.",
    "brands.moz.products.0": "Carbon Heating Mattress - Single",
    "brands.moz.products.1": "Carbon Heating Mattress - Double",

    // Common UI
    "ui.view_brand_detail": "View Brand Details",
    "ui.visit_website": "Visit Brand Website",
    "ui.learn_more": "Learn more",

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
    "news.3.date": "2025.10.13",
    "news.3.title":
      "Launch of ASRAN, Carvella, La Ceras, and Sikgu as In-House Brands",
    "news.3.summary":
      "Feedback has launched its own premium brands — ASRAN and Carvella for global kitchen and living, La Ceras for luxury luggage, and Sikgu for premium cutlery.",
    "news.3.content":
      "Feedback has launched its in-house brands — ASRAN and Carvella, global premium kitchen and living brands; La Ceras, a luxury luggage brand; and Sikgu, a premium cutlery brand that embodies Korean aesthetics. With this launch, Feedback will oversee the domestic distribution, marketing, and customer service for all products under these four brands. ASRAN is a high-end stainless cookware brand known for its precise heat conductivity and refined design. Carvella is a premium Italian-inspired kitchen brand offering products crafted with the expertise of skilled artisans. La Ceras stands out as a luxury carrier brand recognized for its hybrid materials and elegant design. Sikgu showcases sophisticated cutlery that blends practicality with traditional Korean beauty. Through this exclusive partnership, Feedback aims to introduce global premium lifestyle brands to the Korean market, delivering new lifestyle experiences through continuous quality management and brand value enhancement.",
    "news.4.date": "2025.10.14",
    "news.4.title":
      "Hoid Air Purifier 2nd Generation Launch: All-Season Air Quality in One Device",
    "news.4.summary":
      "A 5-in-1 bladeless air-purifying hot & cool fan with a medical-grade HEPA14 filter and UV sterilization debuts with 78 m² coverage to target the premium market.",
    "news.4.content":
      "HEPA14 Medical-Grade Filter with UV Sterilization, 78 m² Wide Coverage for the Premium Segment\n\nA premium multi-function air-purifying hot & cool fan designed for year-round use has debuted in Korea’s home-appliance market.\n\nThe product integrates five functions—cooling, heating, air purification, negative ion generation, and UV sterilization—into a single 5-in-1 all-in-one solution, delivering a total air-quality management system that differentiates it from conventional single-function units.\n\n(Photo: 5-in-1 bladeless air-purifying hot & cool fan)\n\n<strong>Medical-Grade Filtration: 99.99% Fine Particle Removal</strong>\n\nIts standout feature is the medical-grade HEPA14 filter—an operating-room/cleanroom-level medium that captures ≥99.99% of 0.3-micrometer particulates. One grade above the HEPA13 filters common in household units, it offers peace of mind for families with allergies or respiratory concerns.\n\nA 360-degree omni-directional filtration system draws and purifies air from every side of the product, effectively covering spaces up to 78 m² (approx. 840 ft²). It delivers ample performance in larger areas such as living rooms and offices.\n\n<strong>UV Sterilization and Negative Ions for a Hygienic Indoor Environment</strong>\n\nBeyond dust capture, built-in UV sterilization targets airborne bacteria and viruses. Because it relies on ultraviolet light rather than chemicals, it is a safe approach and can help during cold/flu seasons.\n\nNegative-ion generation keeps indoor air feeling fresh. By neutralizing positive ions, it helps precipitate fine particles and is often associated with a “forest-bathing” sense of calm.\n\n<strong>Powerful All-Season Airflow with a Safe Bladeless Design</strong>\n\nWith both cooling and heating modes, it keeps you cool in summer and warm in winter. Its robust all-season airflow promotes healthy circulation regardless of the time of year.\n\nSafety-first, the bladeless construction is reassuring for homes with children or pets, and it’s easy to clean and maintain. The simple, modern white design blends naturally with any interior.\n\n<strong>1-Year Free Service and Extra Filter Included</strong>\n\nThe manufacturer provides a one-year standard warranty with free A/S service and includes an extra filter with purchase for long-term, economical use.\n\nAs consumer interest in air quality grows, the integrated purification and climate functions position this product to make waves in the premium air-appliance segment.",
    "news.5.date": "2025.08.20",
    "news.5.title": "Hoid Vacuum Cleaner Launch",
    "news.5.summary":
      "Hoid's premium cordless vacuum cleaner has been officially launched.",
    "news.5.content":
      "Hoid's premium cordless vacuum cleaner has been officially launched. This product is equipped with a high-performance motor, powerful suction, and a high-efficiency battery that allows long-term use, enabling efficient cleaning from large houses to small spaces. In addition, it reduces wrist strain with an ergonomic design that minimizes weight, and by replacing the brush head, it demonstrates optimal performance in various environments such as floors, carpets, and bedding. The dust bin and filter are water-washable for hygienic management, and all components are designed with user convenience as the top priority. Through this launch, Hoid is presenting new standards in the vacuum cleaner market as well.",
    "news.6.date": "2025.10.01",
    "news.6.title": "ASRAN Launches Three High-End Stainless Cookware Lines",
    "news.6.summary":
      "Premium kitchen brand ASRAN has officially released a high-end cookware lineup consisting of three stainless pots, a pressure cooker, and three frying pans.",
    "news.6.content":
      "Premium Cooking Experience with German-Engineered SUS410 Steel and Tri-Ply Base\n\nFeedback (CEO: Sunghyun Jung) announced that its premium kitchen brand ASRAN officially launched its high-end stainless cookware lineup on October 1, 2025.\n\nThe newly released lineup includes three stainless pots, a pressure cooker, and three frying pans. Built on German engineering, it features SUS410 stainless steel and a tri-ply base to maximize thermal conductivity and durability.\n\n(Photo: ASRAN cookware lineup)\n\n<strong>Premium Cooking Solution Powered by German Technology</strong>\n\nASRAN cookware is engineered for a wide range of use cases—from home kitchens to professional settings. The double pressure-control system and precision heat-conducting layers maintain temperature balance during cooking, helping preserve the natural flavor and nutrition of ingredients.\n\nSUS410 stainless steel offers excellent corrosion resistance and discoloration resistance, maintaining a lasting shine after washing—ideal for a hygienic kitchen environment. The tri-ply base ensures even heat distribution on all heat sources, including induction, enabling perfect results in any kitchen.\n\n<strong>Design that Balances Function and Aesthetics</strong>\n\nDeveloped through collaboration between the design team and culinary professionals, ASRAN maximizes real-world usability. The premium mirror finish and refined curves elevate the look of any kitchen while retaining practical utility.\n\nErgonomic handles minimize wrist strain during extended cooking, and the weight balance is optimized. The steam-release valve on the glass lid makes it easy to control the cooking process with confidence.\n\nA Feedback spokesperson said, “ASRAN is more than cookware—it’s a chef’s partner that elevates the completion of every dish. We will continue to unveil products that combine technical innovation with refined design, growing into a brand that transforms daily cooking into art.”\n\nASRAN’s high-end cookware is available through the official online store and major retail channels.",

    "news.7.date": "2025.10.10",
    "news.7.title": "La Ceras Launches French Luxury 4-Piece Luggage Set",
    "news.7.summary":
      "Premium luggage brand La Ceras, combining French sensibility with modern engineering, has officially launched a luxury 4-piece set in 14, 20, 24, and 28 inches.",
    "news.7.content":
      "French Craftsmanship Meets Modern Design: Lightweight and Durable PP-PC Hybrid Structure\n\nOn October 10, 2025, Feedback (CEO: Sunghyun Jung) announced the official launch of La Ceras (La Ceras) luxury 4-piece luggage set (14, 20, 24, 28 inches).\n\nLa Ceras blends French craftsmanship with a modern design philosophy. Its PP (polypropylene) and PC (polycarbonate) hybrid shell delivers a light yet robust build quality.\n\n(Photo: La Ceras luggage in motion)\n\n<strong>Premium Travel Solution with Parisian Atelier Vibes</strong>\n\nThe lineup spans 14 to 28 inches to suit different trip purposes and durations. The 14-inch model is designed to comply with airline carry-on regulations—ideal for short trips or business travel—while the 28-inch model is optimized for long-haul journeys and high-capacity packing.\n\nA 210D bearing-based silent wheel system ensures smooth, stable rolling, making it suitable for quiet environments such as airports and hotels.\n\nInside, a dual-compartment organizer and premium waterproof lining are paired with YKK zippers for practicality and longevity. This structure keeps clothes and belongings neatly arranged while protecting contents from unexpected weather changes.\n\n<strong>Premium Details with Collectible Value</strong>\n\nPositioned as a true “travel companion,” each piece features a unique serial number for authenticity and collectible appeal. The labeling captures the mood of Parisian ateliers, reinforcing brand identity.\n\nThe refined black colorway and restrained curves work for both business and leisure, while premium materials and finishes complete the luxurious look.\n\n<strong>Pushing into Global Travel Retail</strong>\n\nA Feedback spokesperson said, “La Ceras delivers ‘the dignity of travel’ and will grow into a premium travel brand that completes customers’ individuality and style. We also plan to expand into global airport duty-free channels and the European market.”\n\nLa Ceras French luxury luggage is available via the official online store and major retail partners.",

    "news.8.date": "2025.10.13",
    "news.8.title":
      "Carvella Launches Premium Knife & Cutting Board Set with Italian Heritage",
    "news.8.summary":
      "Premium kitchen brand Carvella, inspired by Italian craftsmanship, has officially launched the Carvella Signature Set comprising a 6-piece knife set and a stainless cutting board.",
    "news.8.content":
      "Precision Cutting with Northern Italian Metalworking: High-Carbon Steel Blades and 304 Stainless Cutting Board\n\nFeedback’s premium kitchen brand Carvella announced the official launch of the ‘Carvella Signature Set’ on October 13, 2025, featuring a 6-piece knife set and a stainless cutting board.\n\nBuilt upon the metalworking heritage of northern Italian artisans, Carvella delivers precise cutting performance and durability. The Signature Set was designed as a premium solution for both professional chefs and passionate home cooks.\n\n(Photo: Full components of the Carvella Signature Set)\n\n<strong>A Precision Cutting System Crafted by Italian Artisans</strong>\n\nThe knife set uses high-carbon steel to maintain sharpness and durability over prolonged use. Compared with common stainless steel, high-carbon steel provides higher hardness for precise cuts and better resistance to deformation—qualities favored in professional kitchens.\n\nHandles are made from a grippy composite material for slip resistance and control during delicate tasks. Ergonomic shaping reduces wrist strain, while optimized weight balance lowers fatigue over long sessions.\n\nThe included 304 stainless-steel cutting board is hygienic and resistant to discoloration, keeping a clean appearance over time. Unlike wooden boards, it reduces bacterial growth and is dishwasher-safe for convenient upkeep.\n\n<strong>Premium Details Finished by Hand</strong>\n\nEvery Carvella product undergoes artisan hand-polishing to achieve the brand’s signature luster and balance. The stainless-and-black palette adds a refined presence to any kitchen, while the premium gift packaging enhances its value for gifting.\n\nThe 6-piece knife set includes a chef’s knife, bread knife, utility knife, paring knife, sharpener, and kitchen shears—covering diverse cooking scenarios. Each item bears the Carvella logo for a clear brand identity.\n\n<strong>Sustainable Philosophy for Global Growth</strong>\n\nA Feedback spokesperson said, “Carvella is not just a tool—it is the completion of culinary art. Carrying forward the techniques and sensibilities of Italian artisans, we will establish ourselves as a premium kitchen brand across Europe and Asia.”\n\n“We also plan to expand our sustainable manufacturing practices and eco-friendly materials, growing as a premium brand that values both the environment and quality.”\n\nThe Carvella Signature Set is available through the official online store and major retail channels.",

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
    "contact.subtitle.line1": "Create new business opportunities",
    "contact.subtitle.line2": "together with FeedBack.",
    "contact.section.contact": "Contact",
    "contact.section.departments": "Departments",
    "contact.section.social": "Social Media",

    "contact.info.address.title": "Head Office",
    "contact.info.address.content":
      "80 Songdogwahak-ro, Yeonsu-gu, Incheon, Songdo AIT Center 1301, 1302",
    "contact.info.phone.title": "Main Phone",
    "contact.info.email.title": "Email",
    "contact.info.hours.title": "Business Hours",
    "contact.info.hours.content":
      "Weekdays 10:00 - 19:00, Weekends and Holidays Closed",

    "contact.dept.management": "Management Support",

    "contact.form.title": "Leave an Inquiry",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Please enter your name",
    "contact.form.company": "Company",
    "contact.form.company.placeholder": "Please enter your company name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.phone": "Phone",
    "contact.form.phone.placeholder": "+82-10-0000-0000",
    "contact.form.inquiry_type": "Inquiry Type",
    "contact.form.inquiry_type.placeholder": "Select inquiry type",
    "contact.form.inquiry_type.business": "Business Inquiry",
    "contact.form.inquiry_type.brand": "Brand Inquiry",
    "contact.form.inquiry_type.partner": "Partnership Proposal",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Please enter your message",
    "contact.form.privacy":
      "I agree to the collection and use of personal information.",
    "contact.form.privacy.link": "View policy",
    "contact.form.privacy.error.title": "Privacy Consent Required",
    "contact.form.privacy.error.description":
      "Please agree to the privacy policy to proceed.",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",

    "contact.errors.required.title": "Input Error",
    "contact.errors.required.description":
      "Name, Email, and Message are required.",

    "contact.toast.success.title": "Email Sent",
    "contact.toast.success.description":
      "Your inquiry has been sent successfully. We will get back to you soon.",
    "contact.toast.gmail.title": "Gmail Authorization Required",
    "contact.toast.gmail.description": "Gmail API authorization is required.",
    "contact.toast.gmail.link": "Click here to authorize Gmail",
    "contact.toast.unknown": "An unknown error occurred.",
    "contact.toast.send_error_console": "Email send error:",
    "contact.toast.fail.title": "Send Failed",
    "contact.toast.fail.description":
      "An error occurred while sending email. Please try again later.",

    "contact.map.title": "Location",

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
    "about.timeline.2025_10":
      "Launch of ASRAN, Carvella, La Ceras, and Sikgu as In-House Brands",
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
      'Connecting Brands and Markets<br class="hidden lg:block"/>with Integrated Execution',
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
      "Adding branding to product strength, connecting distribution networks to branding, and embedding experience and content into distribution. This is FeedBack's way.",
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
    "hoid.hero.description":
      "A smart home appliance brand that revolutionizes everyday air quality by combining minimalist design with cutting-edge technology.",
    "hoid.hero.cta": "Visit Hoid Website",
    "hoid.features.title": "Innovative Technology",
    "hoid.features.subtitle":
      "Experience a completely new air purification with cutting-edge technology hidden within minimalist design",

    // Asran Brand Page
    "asran.hero.tagline":
      "Pots with Both German Technology and Reasonable Price",
    "asran.hero.description":
      "Boasting excellent heat conductivity and durability with SUS410 stainless steel and triple-layer bottom structure. A premium pot that can be used perfectly in any kitchen environment, compatible with both induction and gas.",
    "asran.hero.cta": "Visit ASRAN Website",
    "asran.features.title": "ASRAN's Special Technology",
    "asran.features.subtitle":
      "Premium kitchenware born from the meeting of Germany's precision technology and Korea's practicality",

    // Medifeed Brand Page
    "medifeed.hero.title": "Small Habits that Protect Every Day",
    "medifeed.hero.description":
      "A functional nutritional supplement brand focused on gum and eye health, providing health solutions that anyone can easily choose based on practicality and safety.",
    "medifeed.features.title": "Specialized Health Solutions",
    "medifeed.features.subtitle":
      "Taking responsibility for everyday health with specialized supplements developed based on scientific research",
    "medifeed.category1.title": "Gum Health Specialist",
    "medifeed.category1.description":
      "Professional supplements for preventing periodontal disease and maintaining gum health",
    "medifeed.category1.ingredient1": "Coenzyme Q10",
    "medifeed.category1.ingredient2": "Vitamin C Complex",
    "medifeed.category1.ingredient3": "Zinc & Selenium",
    "medifeed.category1.ingredient4": "GMP Certified",
    "medifeed.category2.title": "Eye Health Specialist",
    "medifeed.category2.description":
      "Functional supplements for digital age eye fatigue and vision protection",
    "medifeed.category2.ingredient1": "Lutein & Zeaxanthin",
    "medifeed.category2.ingredient2": "Bilberry Extract",
    "medifeed.category2.ingredient3": "Omega-3 Fatty Acids",
    "medifeed.category2.ingredient4": "Blue Light Protection",
    "medifeed.philosophy.title": "Creating a Healthy Daily Life",
    "medifeed.philosophy.subtitle":
      "Providing reliable health solutions with firm beliefs in scientific evidence and quality",
    "medifeed.value1.title": "Safety First",
    "medifeed.value1.description":
      "We provide only safe and reliable products through strict quality control and GMP certification.",
    "medifeed.value2.title": "Practical Approach",
    "medifeed.value2.description":
      "Developed in a form that can be easily consumed to suit the busy modern lifestyle.",
    "medifeed.value3.title": "Reasonable Price",
    "medifeed.value3.description":
      "Creating healthy habits with reasonable prices that anyone can afford without burden.",
    "medifeed.cta.title": "Healthy Day,",
    "medifeed.cta.subtitle": "Starts with Small Habits",
    "medifeed.cta.description":
      "Create better health with small changes in daily life together with MEDIFEED",
    "medifeed.cta.button": "Request Consultation",

    // LaCeras Brand Page
    "laceras.hero.title": "Where Tradition Meets Modern",
    "laceras.hero.subtitle": "French Luxury",
    "laceras.hero.description":
      "A luxury carrier brand combining French craftsmanship with modern sophistication. Proposing perfect travel solutions from business to luxury travel.",
    "laceras.hero.cta": "Visit La Ceras Website",
    "laceras.features.title": "French Craftsmanship",
    "laceras.features.subtitle":
      "Premium luxury travel experience completed with sophisticated finish and balanced design",
    "laceras.feature1.title": "Hybrid Structure",
    "laceras.feature1.description":
      "Combines the flexibility of PP with the rigidity of PC to create a lightweight yet durable body.",

    "laceras.feature2.title": "Sinking Ordinary Lock",
    "laceras.feature2.description":
      "The lock is seamlessly integrated into the upper shell, minimizing scratch points and maintaining a sleek balance.",

    "laceras.feature3.title": "Silent Wheels & Stable Bearing System",
    "laceras.feature3.description":
      "Premium wheel system designed for smooth and quiet movement in any direction.",

    "laceras.heritage.title": "70-Year Tradition of",
    "laceras.heritage.subtitle": "French Craftsmanship",
    "laceras.heritage.heading": "Craftsmanship Across Generations",
    "laceras.heritage.description":
      "La Ceras' journey, which began in 1950, continues at the intersection where French traditional craftsmanship meets modern innovation. We set new standards for luxury travel with meticulous details and perfect finishing.",

    "laceras.heritage.point1":
      "All-in-one lineup: 14”, 20”, 24”, and 28” sizes",
    "laceras.heritage.point2": "210D bearing system to minimize wrist fatigue",
    "laceras.heritage.point3": "PP & PC hybrid body structure",

    "laceras.travel.title": "From Business to Luxury",
    "laceras.travel.subtitle": "Perfect Travel Solution",
    "laceras.travel.heading": "Making Every Travel Moment Special",
    "laceras.travel.description":
      "La Ceras is not just a carrier, but a travel partner. We make every moment more elegant and comfortable, from business trips to romantic honeymoons and family vacations.",
    "laceras.travel.size": "Size Options",
    "laceras.travel.warranty": "Year Warranty",
    "laceras.travel.stores": "Global Stores",
    "laceras.travel.rating": "Customer Satisfaction",
    "laceras.collection.title": "For Every Travel Style",
    "laceras.collection.subtitle":
      "Various collections perfectly respond to travelers' tastes and needs",
    "laceras.collection1.title": "Carry-on",
    "laceras.collection1.description":
      "Compact size suitable for cabin luggage",
    "laceras.collection2.title": "Hardshell Carrier",
    "laceras.collection2.description": "Medium size for mid-range travel",
    "laceras.collection3.title": "Trunk",
    "laceras.collection3.description": "Large size for long-term travel",
    "laceras.cta.title": "Luxury Travel",
    "laceras.cta.subtitle": "with La Ceras",
    "laceras.cta.description":
      "Make your journey even more special with premium carriers completed with French craftsmanship",

    // Carvella Brand Page
    "carvella.hero.title": "Italian Artisan Precision",
    "carvella.hero.subtitle": "To Your Kitchen",
    "carvella.hero.description":
      "A premium cookware brand completed with traditional Italian craftsmanship. Boasting excellent heat conduction and durability with premium stainless steel and multi-layer structure.",
    "carvella.hero.cta": "Visit Carvella Website",
    "carvella.features.title": "Italian Craftsmanship",
    "carvella.features.subtitle":
      "Premium cookware completed where precision technology meets traditional craftsmanship",
    "carvella.feature1.title": "Premium Stainless Steel",
    "carvella.feature1.description":
      "Guarantees both durability and hygiene with the finest stainless steel material",
    "carvella.feature2.title": "Multi-Layer Bottom",
    "carvella.feature2.description":
      "Special multi-layer bottom design system for even heat distribution and retention",
    "carvella.feature3.title": "Multi-Compatible Heat Source",
    "carvella.feature3.description":
      "Perfect performance on all heat sources from induction to gas range",
    "carvella.heritage.title": "Italian Traditional",
    "carvella.heritage.subtitle": "Artigianato",
    "carvella.heritage.heading": "Where Precision Meets Passion",
    "carvella.heritage.description":
      "Born from the metalworking heritage of northern Italy, Carvella delivers precise cutting performance and durability. The Signature Set was designed as a premium solution for both professional chefs and passionate home cooks.",
    "carvella.heritage.point1": "Traditional Italian metalworking techniques",
    "carvella.heritage.point2": "Artisan handcrafted finishing",
    "carvella.heritage.point3": "European certified premium materials",
    "carvella.cooking.title": "From Professional Chefs to Cooking Enthusiasts",
    "carvella.cooking.subtitle": "Partner for Every Kitchen",
    "carvella.cooking.heading": "Perfect Tools for Perfect Cooking",
    "carvella.cooking.description":
      "Carvella is not just cookware, but a partner that completes the art of cooking. Designed to meet the strict standards of professional chefs while being easy to use at home, we make every cooking enthusiast's dream a reality.",
    "carvella.cooking.lineup": "Product Lineup",
    "carvella.cooking.warranty": "Year Quality Warranty",
    "carvella.cooking.recommendation": "Chef Recommendation Rate",
    "carvella.cooking.satisfaction": "Customer Satisfaction",
    "carvella.collection.title": "For Every Dish",
    "carvella.collection.subtitle":
      "Various product lines perfectly respond to all cooking styles and needs",
    "carvella.collection1.title": "Premium Pots",
    "carvella.collection1.description":
      "Pot collection in various sizes and purposes",
    "carvella.collection2.title": "Frying Pans",
    "carvella.collection2.description":
      "Frying pan series for perfect heat conduction",
    "carvella.collection3.title": "Pressure Lids",
    "carvella.collection3.description": "Multi-purpose pressure lid system",
    "carvella.collection4.title": "Set Products",
    "carvella.collection4.description":
      "Comprehensive set for the perfect kitchen",
    "carvella.testimonial.title": "Chef's Choice",
    "carvella.testimonial1":
      "Carvella's pots have perfect heat conduction, making cooking much easier. Quality that doesn't fall short even in professional kitchens.",
    "carvella.testimonial1.author": "Italian Restaurant Chef",
    "carvella.testimonial2":
      "Unchanged quality and performance even after 15 years of use. A product where you can feel true craftsmanship.",
    "carvella.testimonial2.author": "Cooking Instructor",
    "carvella.testimonial3":
      "Shows perfect performance on any heat source from induction to gas range. The best choice for home use too.",
    "carvella.testimonial3.author": "Food Blogger",
    "carvella.cta.title": "Premium Cooking",
    "carvella.cta.subtitle": "with Carvella",
    "carvella.cta.description":
      "Make your cooking even more special with premium cookware completed with Italian craftsmanship",
    "carvella.good1.badge": "GOOD 01",
    "carvella.good1.title": "Stainless Cutting Board (304)",
    "carvella.good1.description":
      "Made from 304 stainless steel, this cutting board offers superior hygiene and durability. It resists stains and odors, keeping your prep surface clean every time.",
    "carvella.good1.detail1": "Hygienic 304 stainless steel",
    "carvella.good1.detail2": "Highly resistant to scratches and warping",
    "carvella.good1.detail3": "Easy to clean with simple rinsing",
    "carvella.good1.detail4": "Non-slip design for stable use",

    "carvella.good2.badge": "GOOD 02",
    "carvella.good2.title": "6-Piece Knife Set (Includes Scissors & Peeler)",
    "carvella.good2.description":
      "Everything you need in one set! With scissors, a Chinese cleaver, a peeler and more, the 6-piece lineup handles every ingredient with ease.",
    "carvella.good2.detail1":
      "All-in-one 6-piece set incl. scissors, cleaver, peeler",
    "carvella.good2.detail2": "Ergonomic handles for a comfortable grip",
    "carvella.good2.detail3": "Sharp, durable stainless steel blades",
    "carvella.good2.detail4": "Great for home or professional kitchens",

    // MOZ Brand Page
    "moz.hero.tagline": "Warm and Safe Sleep Environment",
    "moz.hero.description":
      "Providing healthy sleep with advanced carbon heating technology and safety-certified design. Warm rest where body and mind recover - that's where MOZ begins.",
    "moz.hero.cta": "Product Inquiry",
    "moz.features.title": "MOZ Core Technology",
    "moz.features.subtitle":
      "Premium sleep solution completed with advanced carbon heating and safety certification",
    "moz.feature1.title": "Carbon Heating Technology",
    "moz.feature1.description":
      "Provides uniform warmth with safe carbon heating wires without electromagnetic wave concerns",
    "moz.feature1.detail1": "Electromagnetic wave blocking carbon material",
    "moz.feature1.detail2": "Uniform temperature distribution",
    "moz.feature1.detail3": "Fast temperature rise",
    "moz.feature1.detail4": "Energy efficient design",
    "moz.feature2.title": "Safety Certified Design",
    "moz.feature2.description":
      "Use with confidence through strict safety certification and overheat prevention system",
    "moz.feature2.detail1": "KC safety certification",
    "moz.feature2.detail2": "Overheat prevention system",
    "moz.feature2.detail3": "Dual safety device",
    "moz.feature2.detail4": "Fire prevention design",
    "moz.feature3.title": "Healthy Sleep",
    "moz.feature3.description":
      "Provides deep and comfortable sleep with warm warmth where body and mind recover",
    "moz.feature3.detail1": "Optimal sleep temperature maintenance",
    "moz.feature3.detail2": "Improved blood circulation",
    "moz.feature3.detail3": "Muscle relaxation effect",
    "moz.feature3.detail4": "Pleasant sleep environment",
    "moz.product1.title": "MOZ Carbon Mat Single",
    "moz.product1.description":
      "Cozy warmth even when used alone, melts away daily fatigue. No electromagnetic wave concerns with safe carbon heating wire.",
    "moz.product1.size": "Size",
    "moz.product2.title": "MOZ Carbon Mat Double",
    "moz.product2.description":
      "Warm warmth for two. Provides deep and comfortable sleep with uniform heat.",
    "moz.product2.size": "Size",
    "moz.reviews.title": "Customer Reviews",
    "moz.review1":
      "I love being able to sleep warm without worrying about electromagnetic waves. It's a must-have for winter!",
    "moz.review1.author": "Kim○○",
    "moz.review2":
      "The temperature is uniform so my feet feel cozy. I feel lighter when I wake up in the morning.",
    "moz.review2.author": "Lee○○",
    "moz.review3":
      "It's a safety-certified product so I can use it with confidence. The quality is satisfactory too.",
    "moz.review3.author": "Park○○",
    "moz.benefits.title": "Warm Nights with MOZ",
    "moz.benefit1.title": "Deep Sleep",
    "moz.benefit1.description":
      "Experience comfortable and deep sleep with optimal temperature maintenance",
    "moz.benefit2.title": "Fast Heating",
    "moz.benefit2.description":
      "Feel warm warmth quickly with carbon heating technology",
    "moz.benefit3.title": "Safe Design",
    "moz.benefit3.description":
      "Use without worry with KC certification and dual safety device",
    "moz.cta.title": "Warm Rest with MOZ",
    "moz.cta.description":
      "Experience healthy sleep with advanced carbon heating technology",
    "moz.cta.button": "Product Inquiry",

    // InYourHeart Brand Page
    "inyourheart.hero.title": "Adding Emotion to Your Skin",
    "inyourheart.hero.description":
      "A premium skincare brand leading the K-beauty market with clean beauty philosophy and emotional package design.",
    "inyourheart.values.title": "Beauty Philosophy with Emotion",
    "inyourheart.values.subtitle":
      "Emotional skincare that is gentle on the skin and warms the heart",
    "inyourheart.category1.title": "Clean Formula",
    "inyourheart.category1.description":
      "We pursue safe and sustainable beauty using only gentle and eco-friendly ingredients.",
    "inyourheart.category2.title": "Emotional Design",
    "inyourheart.category2.description":
      "We design emotional and beautiful packaging to make every moment of use a special experience.",
    "inyourheart.category3.title": "Global K-Beauty",
    "inyourheart.category3.description":
      "We promote Korea’s outstanding beauty technology and innovation worldwide to enhance the value of K-beauty.",
    "inyourheart.cta.title": "Reaching Your Heart with",
    "inyourheart.cta.subtitle": "Beautiful Emotions",
    "inyourheart.cta.description":
      "Start a special beauty journey with IN YOUR HEART.",
    "inyourheart.cta.button": "Contact Us",

    // Sangsaeng Brand Page
    "sangsaeng.hero.title": "Connecting Korean Healthcare to the World",
    "sangsaeng.hero.description":
      "A comprehensive medical platform connecting Korea's excellent medical services to the world, from medical tourism to global healthcare platforms.",
    "sangsaeng.hero.cta": "Visit Sangsaeng Website",
    "sangsaeng.services.title": "Global Healthcare Ecosystem",
    "sangsaeng.services.subtitle":
      "Providing integrated healthcare solutions from medical services to branding",
    "sangsaeng.medical.title": "Sangsaeng Medical",
    "sangsaeng.medical.subtitle": "Sangsaeng Medical",
    "sangsaeng.medical.description":
      "A healthcare brand that provides everyday health solutions and medical services.",
    "sangsaeng.medical.benefit1": "Personalized health check-up packages",
    "sangsaeng.medical.benefit2": "Specialist consultation services",
    "sangsaeng.medical.benefit3": "Chronic disease management programs",
    "sangsaeng.medical.benefit4": "Preventive medicine solutions",

    "sangsaeng.platform.title": "Sangsaeng Platform",
    "sangsaeng.platform.subtitle": "Sangsaeng Platform",
    "sangsaeng.platform.description":
      "A multilingual healthcare platform app—from medical services to tourism—in your hand.",
    "sangsaeng.platform.benefit1": "Multilingual medical interpretation",
    "sangsaeng.platform.benefit2": "Hospital booking & management",
    "sangsaeng.platform.benefit3": "Medical tourism packages",
    "sangsaeng.platform.benefit4": "24/7 emergency support",

    "sangsaeng.branding.title": "Sangsaeng Branding",
    "sangsaeng.branding.subtitle": "Sangsaeng Branding",
    "sangsaeng.branding.description":
      "Branding organization connecting content, Meta ads, and global influencers.",
    "sangsaeng.branding.benefit1": "Medical content marketing",
    "sangsaeng.branding.benefit2": "Multilingual brand campaigns",
    "sangsaeng.branding.benefit3": "Global influencer collaborations",
    "sangsaeng.branding.benefit4": "Digital marketing solutions",

    "sangsaeng.cta.title1": "Connecting with the World,",
    "sangsaeng.cta.title2": "The Future of Korean Healthcare",
    "sangsaeng.cta.description":
      "Experience safe and trustworthy medical services with Sangsaeng.",
    "sangsaeng.cta.button": "Contact Us",

    // Hoid Details
    "hoid.feature1.title": "3-in-1 Technology",
    "hoid.feature1.description":
      "Innovative all-in-one solution integrating air purification, dehumidification, and sterilization",
    "hoid.feature2.title": "HEPA14 Filter",
    "hoid.feature2.description":
      "Medical-grade high-performance filter system boasting 99.995% ultra-fine dust removal efficiency",
    "hoid.feature3.title": "Minimalist Design",
    "hoid.feature3.description":
      "Refined and modern design philosophy that naturally complements any space",
    "hoid.partnership.title": "New Turning Point",
    "hoid.partnership.subtitle": "in Global Expansion",
    "hoid.partnership.date": "August 16, 2025",
    "hoid.partnership.mou":
      "MOU Signed with China's Largest Air Purifier Manufacturer",
    "hoid.partnership.description":
      "HOID has signed a global distribution and technology cooperation MOU with China's largest air purifier manufacturer. Through this, we plan to expand our business to Asia and provide clean air to more customers.",
    "hoid.partnership.point1": "Market Expansion Across Asia",
    "hoid.partnership.point2": "Technology Cooperation and Joint Development",
    "hoid.partnership.point3": "Global Distribution Network Expansion",
    "hoid.homeshopping.title": "Premium Design",
    "hoid.homeshopping.subtitle": "Enters TV Screens",
    "hoid.homeshopping.date": "Launching August 2025",
    "hoid.homeshopping.heading": "Premium Design Appliances, Now in Your Home",
    "hoid.homeshopping.description":
      "The premium design appliance brand HOID is finally coming to you through home shopping. Experience sophisticated design, outstanding performance, and life-changing innovative technology directly on your TV.",
    "hoid.channels.title": "Available Everywhere Nationwide",
    "hoid.channels.subtitle":
      "Getting closer to our customers through various distribution channels",
    "hoid.channel1.title": "Home Shopping",
    "hoid.channel1.description": "Direct sales through home shopping channels",
    "hoid.channel2.title": "Smart Store",
    "hoid.channel2.description": "Official online store operation",
    "hoid.channel3.title": "Global Seller",
    "hoid.channel3.description": "Expansion to overseas online platforms",
    "hoid.channel4.title": "Offline Stores",
    "hoid.channel4.description":
      "Nationwide appliance stores and department stores",
    "hoid.cta.title": "Clean Air, New Daily Life",
    "hoid.cta.description":
      "Create a healthy and comfortable indoor environment with HOID",
    "hoid.cta.button": "Contact Us",

    // Asran Details
    "asran.feature1.title": "SUS410 Stainless Steel",
    "asran.feature1.description":
      "Premium material ensuring durability and safety",
    "asran.feature1.detail1": "Corrosion & Discoloration Resistant",
    "asran.feature1.detail2": "Hygienic and Safe Cooking",
    "asran.feature1.detail3": "Semi-Permanent Use",
    "asran.feature1.detail4": "Luxurious Mirror Finish",

    "asran.feature2.title": "Triple-Layer Bottom Structure",
    "asran.feature2.description":
      "Maximized energy efficiency with excellent heat conductivity",
    "asran.feature2.detail1": "Even Heat Distribution",
    "asran.feature2.detail2": "Fast Heating Time",
    "asran.feature2.detail3": "Easy One-Handed Lid Opening",
    "asran.feature2.detail4": "Minimized Heat Loss",

    "asran.feature3.title": "Perfect Compatibility with All Heat Sources",
    "asran.feature3.description": "Usable in any kitchen environment",
    "asran.feature3.detail1": "Fully Compatible with All Heat Sources",
    "asran.feature3.detail2": "Gas Range, Induction",
    "asran.feature3.detail3": "Non-Stick Exterior for Easy Cleaning",
    "asran.feature3.detail4": "Electric Range",

    "asran.size1.title": "3-Piece Pot Set",
    "asran.size1.usage":
      "Perfect for everything from small to large portions—ideal for solo or family cooking",

    "asran.size2.title": "Pressure Cooker",
    "asran.size2.usage":
      "High-pressure cooking for fresh, flavorful meals in less time",

    "asran.size3.title": "3-Piece Frying Pan Set",
    "asran.size3.usage": "Durable non-stick coating for long-lasting use",

    "asran.cooking1.title": "Soup Dishes",
    "asran.cooking1.description": "Deep and rich soup flavor",
    "asran.cooking2.title": "Steaming & Braising",
    "asran.cooking2.description": "Moist and tender texture",
    "asran.cooking3.title": "Healthy Cooking",
    "asran.cooking3.description": "Cooking method that preserves nutrients",
    "asran.reviews.title": "Authentic Reviews from Real Customers",
    "asran.review1":
      "Amazing value for money! So satisfied to find a pot of this quality at this price.",
    "asran.review1.author": "Kim ○○",
    "asran.review2":
      "Surprised by the weight of the pot. It's incredibly light! The light weight makes it comfortable to cook without hurting my wrist.",
    "asran.review2.author": "Park ○○",
    "asran.review3":
      "The single handle pot is very useful for making baby food. It heats quickly and is easy to clean.",
    "asran.review3.author": "Lee ○○",

    "asran.benefit1.title": "Cooking Becomes Enjoyable",
    "asran.benefit1.description":
      "Uniform heat conduction enables fail-proof cooking, giving you confidence in your cooking skills.",
    "asran.benefit2.title": "Cooking Time Reduced",
    "asran.benefit2.description":
      "Fast heating time and efficient heat distribution significantly reduce cooking time.",
    "asran.benefit3.title": "Your Kitchen Becomes More Beautiful",
    "asran.benefit3.description":
      "Luxurious mirror finish and sophisticated design elevate your kitchen interior.",
    "asran.cta.title": "Premium Cooking Experience",
    "asran.cta.subtitle": "Meets German Technology",
    "asran.cta.description": "Experience a new world of cooking with ASRAN",
    "asran.cta.button": "Contact Us",

    // Footer
    "footer.company": "Company Info",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.follow": "Follow",
    "footer.copyright": "© 2024 FeedBack. All rights reserved.",
  },
  TH: {
    // Navigation
    "nav.home": "เกี่ยวกับเรา",
    "nav.services": "บริการ",
    "nav.brands": "แบรนด์",
    "nav.news": "ข่าว",
    "nav.contact": "ติดต่อเรา",

    // Footer
    "footer.tagline":
      "เชื่อมคุณค่าของเกาหลีสู่โลก – ตั้งแต่การกระจายสินค้าถึงการสร้างแบรนด์",
    "footer.about":
      "บริษัทบริการแบบครบวงจร ที่รุกสู่ตลาดโลกผ่านการกระจายสินค้า การผลิตแบรนด์ของตนเอง การตลาด และแพลตฟอร์มท่องเที่ยวเชิงการแพทย์",
    "footer.sections.services": "บริการ",
    "footer.sections.brands": "แบรนด์",
    "footer.sections.company": "บริษัท",

    "footer.services.distribution": "กระจายสินค้า / นายหน้าส่งออก–นำเข้า",
    "footer.services.manufacturing": "การผลิตแบรนด์ของตนเอง",
    "footer.services.marketing": "การตลาดระดับโลก",
    "footer.services.medical": "แพลตฟอร์มท่องเที่ยวเชิงการแพทย์",
    "footer.services.app": "พัฒนาแอป",

    "footer.brands.hoid": "Hoid",
    "footer.brands.asran": "ASRAN",
    "footer.brands.laceras": "La Ceras",
    "footer.brands.carvella": "Carvella",
    "footer.brands.medifeed": "Medifeed",
    "footer.brands.inyourheart": "InYourHeart",
    "footer.brands.sangsaeng": "Sangsaeng",

    "footer.company.about": "เกี่ยวกับ",
    "footer.company.news": "ข่าว",
    "footer.company.contact": "ติดต่อ",
    "footer.bottom.copyright": "© 2024 FeedBack Corp. สงวนลิขสิทธิ์",
    "footer.bottom.bizinfo":
      "เลขทะเบียนธุรกิจ: 296-87-03628 | ซีอีโอ: Hae-min Song, Sung-hyun Jeong",
    "footer.bottom.privacy": "นโยบายความเป็นส่วนตัว",
    "footer.bottom.terms": "ข้อกำหนดการใช้งาน",
    "footer.bottom.cookies": "นโยบายคุกกี้",

    // Hero Section
    "hero.title": "แพลตฟอร์มกระจายสินค้าที่เชื่อม",
    "hero.subtitle": "แบรนด์และตลาด — FEEDBACK",
    "hero.description":
      "แพลตฟอร์มการเติบโตร่วมกัน ที่เชื่อมการกระจายสินค้า แบรนด์ดิ้ง การตลาด และการผลิตเข้าไว้ด้วยกัน",
    "hero.cta.consultation": "ดูบริการ",
    "hero.cta.proposal": "ชมวิดีโอแนะนำ",

    // Services Section
    "services.title": "บริการ",
    "services.medical.title": "นายหน้าท่องเที่ยวเชิงการแพทย์",
    "services.medical.description":
      "ให้บริการนายมืออาชีพ เชื่อมต่อบุคลากรทางการแพทย์ของเกาหลีกับผู้ป่วยต่างชาติ",
    "services.app.title": "พัฒนาแอปหลายภาษา",
    "services.app.description": "พัฒนาและโลคัลไลซ์แอปมือถือสำหรับตลาดโลก",
    "services.brand.title": "กระจายสินค้าแบรนด์",
    "services.brand.description":
      "โซลูชันการกระจายสินค้าและการตลาด เพื่อพาแบรนด์เอเชียสู่ตลาดโลก",
    "services.consulting.title": "ที่ปรึกษาการตลาด",
    "services.consulting.description":
      "สนับสนุนการวางลยุทธ์การตลาดแบบครบวงจร ตั้งแต่วิเคราะห์ตลาดถึงแบรนด์ดิ้ง",

    // Additional Services
    "services.distribution.title": "กระจายสินค้าและโลจิสติกส์ระดับโลก",
    "services.distribution.description":
      "สนับสนุนการรุกตลาดโลกผ่านเครือข่ายกระจายสินค้าในเอเชีย พิธีการศุลกากร นำเข้า/ส่งออก และการเพิ่มประสิทธิภาพโลจิสติกส์",
    "services.distribution.features.0": "เครือข่ายกระจายสินค้าในเอเชีย",
    "services.distribution.features.1": "พิธีการศุลกากร นำเข้า/ส่งออก",
    "services.distribution.features.2": "โซลูชันการเพิ่มประสิทธิภาพโลจิสติกส์",
    "services.manufacturing.title": "การผลิตแบรนด์ของตนเอง (OEM)",
    "services.manufacturing.description":
      "สนับสนุนการเติบโตของแบรนด์ ผ่านการผลิตและ OEM สำหรับ 4 แบรนด์ของเรา: Hoid, Medifeed, InYourHeart และ Sangsaeng",
    "services.manufacturing.features.0": "มี 4 แบรนด์ของตนเอง",
    "services.manufacturing.features.1": "การผลิตแบบ OEM/ODM",
    "services.manufacturing.features.2": "ระบบควบคุมคุณภาพ",
    "services.marketing.title": "การตลาดและแบรนด์ดิ้งระดับโลก",
    "services.marketing.description":
      "โซลูชันแบรนด์ดิ้งระดับโลกผ่านพันธมิตรโฮมช้อปปิ้งและการตลาดดิจิทัล",
    "services.marketing.features.0": "การตลาดผ่านโฮมช้อปปิ้ง",
    "services.marketing.features.1": "การตลาดดิจิทัล",
    "services.marketing.features.2": "กลยุทธ์ขยายสู่ตลาดโลก",
    "services.medical.features.0": "ท่องเที่ยวเชิงการแพทย์",
    "services.medical.features.1": "เครือข่ายโรงพยาบาล",
    "services.medical.features.2": "แพลตฟอร์มหลายภาษา",
    "services.app.features.0": "แอปรวมการแพทย์/การดูแล",
    "services.app.features.1": "รองรับหลายภาษา",
    "services.app.features.2": "ปรึกษาแบบเรียลไทม์",

    // Brands Section
    "brands.hoid.category": "เครื่องใช้ไฟฟ้าดีไซน์มินิมอล",
    "brands.hoid.slogan": "ดีไซน์ที่เปลี่ยนอากาศได้",
    "brands.hoid.description":
      "แบรนด์เครื่องใช้ไฟฟ้าอัจฉริยะ ที่ยกระดับคุณภาพอากาศในชีวิตประจำวันด้วยดีไซน์มินิมอลและเทคโนโลยีล้ำสมัย ทั้งเครื่องฟอกอากาศและเครื่องลดความชื้น",
    "brands.hoid.products.0": "เครื่องฟอกอากาศ",
    "brands.hoid.products.1": "เครื่องลดความชื้น",
    "brands.hoid.products.2": "เทคโนโลยี 3-in-1",
    "brands.hoid.products.3": "แผ่นกรอง HEPA14",
    "brands.medifeed.category": "อาหารเสริมเพื่อการทำงานของร่างกาย",
    "brands.medifeed.slogan": "นิสัยเล็ก ๆ ที่ปกป้องคุณทุกวัน",
    "brands.medifeed.description":
      "แบรนด์อาหารเสริมเน้นสุขภาพเหงือกและดวงตา มอบโซลูชันสุขภาพที่ใช้งานได้จริงและปลอดภัย",
    "brands.medifeed.products.0": "สุขภาพเหงือก",
    "brands.medifeed.products.1": "สุขภาพดวงตา",
    "brands.medifeed.products.2": "อาหารเสริมเชิงหน้าที่",
    "brands.medifeed.products.3": "มาตรฐาน GMP",
    "brands.inyourheart.category": "สกินแคร์เชิงอารมณ์",
    "brands.inyourheart.slogan": "สวมอารมณ์ให้ผิวของคุณ",
    "brands.inyourheart.description":
      "สกินแคร์พรีเมียม ผู้นำตลาด K‑Beauty ทั่วโลก ด้วยปรัชญาคลีนบิวตี้และแพ็กเกจจิ้งที่มีอารมณ์",
    "brands.inyourheart.products.0": "สูตรคลีน",
    "brands.inyourheart.products.1": "แพ็กเกจจิ้งเชิงอารมณ์",
    "brands.inyourheart.products.2": "K‑Beauty ระดับโลก",
    "brands.inyourheart.products.3": "เซราไมด์",
    "brands.sangsaeng.category": "แพลตฟอร์มท่องเที่ยวเชิงการแพทย์",
    "brands.sangsaeng.slogan":
      "WE CONNECT KOREAN MEDICAL SERVICES TO THE WORLD",
    "brands.sangsaeng.description":
      "แพลตฟอร์มการแพทย์ครบวงจร เชื่อมบริการการแพทย์ชั้นเยี่ยมของเกาหลีสู่ทั่วโลก ตั้งแต่เมดิคัลทัวริซึมถึงเฮลธ์แคร์แพลตฟอร์ม",
    "brands.sangsaeng.products.0": "ท่องเที่ยวเชิงการแพทย์",
    "brands.sangsaeng.products.1": "แพลตฟอร์มเฮลธ์แคร์",
    "brands.sangsaeng.products.2": "แอปหลายภาษา",
    "brands.sangsaeng.products.3": "เครือข่ายโรงพยาบาล",
    "brands.lineup.category": "ไลน์อัปแบรนด์",
    "brands.lineup.slogan":
      "เชื่อมเทคโนโลยี ดีไซน์ และความสะดวกสบายในชีวิตประจำวัน",
    "brands.lineup.description":
      "FeedBack นำเสนอเทคโนโลยีและดีไซน์ที่ยกระดับประสบการณ์ชีวิต ผ่านแบรนด์เครื่องใช้ไฟฟ้า เครื่องครัวพรีเมียม การท่องเที่ยว และไลฟ์สไตล์",
    "brands.asran.category": "เครื่องครัวพรีเมียม",
    "brands.asran.slogan": "หม้อที่รวมเทคโนโลยีเยอรมันกับราคาสมเหตุสมผล",
    "brands.asran.description":
      "แบรนด์เครื่องครัวพรีเมียม ใช้สแตนเลส SUS410 และฐาน 3 ชั้น ให้การนำความร้อนยอดเยี่ยมและทนทาน",
    "brands.asran.products.0": "สแตนเลส SUS410",
    "brands.asran.products.1": "ฐาน 3 ชั้น",
    "brands.asran.products.2": "ใช้ได้ทั้งเตาแม่เหล็กไฟฟ้าและแก๊ส",
    "brands.asran.products.3": "งานเกรดพรีเมียม",
    "brands.laceras.category": "กระเป๋าเดินทางลักชัวรีจากฝรั่งเศส",
    "brands.laceras.slogan":
      "การเดินทางหรูสไตล์ฝรั่งเศส ที่ผสานอดีตกับความโมเดิร์น",
    "brands.laceras.description":
      "แบรนด์กระเป๋าเดินทางหรู ที่ผสานงานช่างฝีมือฝรั่งเศสกับความลุ่มลึกสมัยใหม่ โครงสร้างฮาร์ดเชลล์พอลีคาร์บอเนต งานประกอบพิถีพิถัน และดีไซน์สมดุล เหมาะตั้งแต่ทริปธุรกิจถึงท่องเที่ยวระดับลักชัวรี",
    "brands.laceras.products.0": "กระเป๋าเดินทางฮาร์ดเชลล์",
    "brands.laceras.products.1": "กระเป๋าถือขึ้นเครื่อง",
    "brands.laceras.products.2": "ตัวล็อก TSA",
    "brands.laceras.products.3": "ล้อ 360°",
    "brands.carvella.category": "เครื่องครัวพรีเมียมจากอิตาลี",
    "brands.carvella.slogan": "ความประณีตของช่างอิตาลี สู่วิถีครัวของคุณ",
    "brands.carvella.description":
      "แบรนด์เครื่องครัวพรีเมียมจากงานช่างดั้งเดิมของอิตาลี สแตนเลสคุณภาพสูง โครงสร้างหลายชั้น นำความร้อนดีเยี่ยม ทนทาน ใช้ได้ตั้งแต่เตาแม่เหล็กไฟฟ้าถึงเตาแก๊ส",
    "brands.carvella.products.0": "หม้อพรีเมียม",
    "brands.carvella.products.1": "กระทะทอด",
    "brands.carvella.products.2": "ฝาแรงดันอเนกประสงค์",
    "brands.carvella.products.3": "รองรับแหล่งความร้อนหลากหลาย",
    "brands.moz.category": "แบรนด์ไลฟ์สไตล์พรีเมียมระบบทำความร้อน",
    "brands.moz.slogan": "การวิจัยสภาพแวดล้อมการนอนที่อบอุ่นและปลอดภัย",
    "brands.moz.description":
      "ด้วยเทคโนโลยีทำความร้อนคาร์บอนขั้นสูงและการออกแบบที่ผ่านการรับรองด้านความปลอดภัย Moz มอบการนอนหลับที่ดีต่อสุขภาพและผ่อนคลาย ความอบอุ่นที่ฟื้นฟูทั้งร่างกายและจิตใจ — นั่นคือจุดเริ่มต้นของ Moz",
    "brands.moz.products.0": "ที่นอนคาร์บอนทำความร้อน รุ่นเดี่ยว",
    "brands.moz.products.1": "ที่นอนคาร์บอนทำความร้อน รุ่นคู่",

    // Common UI
    "ui.view_brand_detail": "ดูรายละเอียดแบรนด์",
    "ui.visit_website": "ไปที่เว็บไซต์แบรนด์",
    "ui.learn_more": "ดูเพิ่มเติม",

    // B2B2C Section
    "b2b2c.header.title": "ตั้งแต่ผู้ผลิตถึงผู้บริโภค",
    "b2b2c.header.subtitle": "สร้างระบบนิเวศการกระจายสินค้าที่สมบูรณ์",
    "b2b2c.b2b.title": "ผู้ผลิต B2B",
    "b2b2c.b2b.description": "สร้างพันธมิตรเชิงกลยุทธ์กับผู้ผลิตที่มีคุณภาพ",
    "b2b2c.b2b.feature1": "พาร์ทเนอร์การผลิตมืออาชีพ",
    "b2b2c.b2b.feature2": "ระบบควบคุมคุณภาพ",
    "b2b2c.b2b.feature3": "การผลิตแบบ OEM/ODM",
    "b2b2c.b2b.feature1_short": "การผลิตมืออาชีพ",
    "b2b2c.b2b.feature2_short": "ควบคุมคุณภาพ",
    "b2b2c.b2b.feature3_short": "OEM/ODM",
    "b2b2c.arrow1": "เชื่อมสู่การกระจาย",
    "b2b2c.hub.title": "ศูนย์กระจายสินค้า FeedBack",
    "b2b2c.hub.description":
      "ส่งมอบสินค้าแก่ผู้บริโภค ผ่านเครือข่ายทั้งในประเทศและทั่วโลก",
    "b2b2c.hub.feature1": "เครือข่ายทั่วประเทศ",
    "b2b2c.hub.feature2": "เพิ่มประสิทธิภาพโลจิสติกส์",
    "b2b2c.hub.feature3": "การตลาดแบรนด์",
    "b2b2c.arrow2": "ส่งถึงผู้บริโภค",
    "b2b2c.b2c.title": "ผู้บริโภค B2C",
    "b2b2c.b2c.description":
      "มอบสินค้าและบริการที่ดีที่สุด ผ่านหลากหลายช่องทาง",
    "b2b2c.b2c.feature1": "ออนไลน์ & ออฟไลน์",
    "b2b2c.b2c.feature2": "เชื่อมต่อโฮมช้อปปิ้ง",
    "b2b2c.b2c.feature3": "ขยายสู่ระดับโลก",
    "b2b2c.summary.title": "ระบบนิเวศการกระจายสินค้าที่สมบูรณ์ — FeedBack",
    "b2b2c.summary.description":
      "FeedBack ออกแบบและเพิ่มประสิทธิภาพกระบวนการกระจายสินค้าทั้งหมด เพื่อให้สินค้าคุณภาพจากผู้ผลิตไปถึงผู้บริโภคได้สำเร็จ",

    // News Section
    "news.title": "ข่าว & ข่าวประชาสัมพันธ์",
    "news.description":
      "ติดตามข่าวสารล่าสุดและความสำเร็จสำคัญของ FeedBack — รวมข่าวบริษัทและข่าวแบรนด์ในที่เดียว",
    "news.filter.all": "ทั้งหมด",
    "news.filter.press": "ข่าวประชาสัมพันธ์",
    "news.filter.company": "ข่าวบริษัท",
    "news.filter.brand": "ข่าวแบรนด์",
    "news.category.press": "ข่าวประชาสัมพันธ์",
    "news.category.company": "ข่าวบริษัท",
    "news.category.brand": "ข่าวแบรนด์",
    "news.readMore": "อ่านบทความเต็ม",
    "news.loadMore": "ดูข่าวเพิ่มเติม",
    "news.back_to_list": "กลับไปหน้าข่าว",
    "news.coming_soon": "กำลังอัปเดตเนื้อหาแบบเต็มเร็ว ๆ นี้",
    "news.category.보도자료": "ข่าวประชาสัมพันธ์",
    "news.category.기업소식": "ข่าวบริษัท",
    "news.category.브랜드뉴스": "ข่าวแบรนด์",

    // (Sample items translated; add the rest of your items similarly)
    "news.0.date": "2025.08.11",
    "news.0.title":
      "Sangsaeng·J Electric ลงนาม MOU ระดับโลกกับโรงงานเครื่องฟอกอากาศยักษ์ใหญ่ในจีน",
    "news.0.summary":
      "แบรนด์เครื่องฟอกอากาศ HOID เตรียมนำเทคโนโลยีฟอกอากาศ 3‑in‑1 (ฟอกอากาศ + พัดลม + ฆ่าเชื้อด้วย UV) สู่เกาหลีแบบเอ็กซ์คลูซีฟ โดย Sangsaeng จับมือพาร์ทเนอร์ J Electric ลงนาม MOU กับหนึ่งในโรงงานผู้ผลิตเครื่องฟอกอากาศที่ใหญ่ที่สุดของจีน",
    "news.0.content":
      "Sangsaeng·J Electric ลงนาม MOU ระดับโลกกับโรงงานเครื่องฟอกอากาศยักษ์ใหญ่ในจีน\n\nแบรนด์เครื่องฟอกอากาศเกาหลี HOID เตรียมนำเทคโนโลยี 3-in-1 (ฟอกอากาศ + พัดลม + ฆ่าเชื้อ UV) เข้าสู่เกาหลีแบบผูกขาด Sangsaeng Co., Ltd. ประกาศเมื่อวันที่ 16 ว่าได้ลงนาม MOU กับหนึ่งในโรงงานผู้ผลิตเครื่องฟอกอากาศที่ใหญ่ที่สุดของจีน ร่วมกับพาร์ทเนอร์ J Electric\n\nผ่านข้อตกลงนี้ เทคโนโลยีและองค์ความรู้เชิงนวัตกรรมจากโรงงานจีนจะถูกนำมาใช้ในเกาหลี เสริมความแข็งแกร่งให้เทคโนโลยีและความน่าเชื่อถือของแบรนด์ HOID\n\n(ภาพ: ผู้บริหาร Sangsaeng เยือนจีนเพื่อเซ็นสัญญา MOU)\n\n<strong>พันธมิตรกับเทคโนโลยีระดับโลก</strong>\n\nSangsaeng และ J Electric ผลักดัน MOU ครั้งนี้เพื่อมอบโซลูชันฟอกอากาศที่แตกต่างแก่ผู้บริโภคชาวเกาหลี โรงงานจีนที่ลงนามเป็นหนึ่งใน 5 ผู้ผลิตเครื่องฟอกอากาศรายใหญ่ของประเทศ มีผลงานส่งออกไปสู่สหรัฐ ญี่ปุ่น และตลาดโลก\n\nโดยเฉพาะ โรงงานนี้มีทีมวิจัยและพัฒนา (R&D) ที่มีประสบการณ์กว่า 30 ปี มุ่งพัฒนาเทคโนโลยีฟอกอากาศนวัตกรรมอย่างต่อเนื่อง และครั้งนี้จะเปิดตัวโซลูชัน 3-in-1 เป็นครั้งแรกในเกาหลีกับ HOID\n\nซีอีโอ Jeong Seong-hyeon กล่าวว่ารู้สึกยินดีที่ได้ร่วมงานกับพาร์ทเนอร์ที่มีเทคโนโลยีและกำลังการผลิตระดับโลก และจะนำเสนอเครื่องฟอกอากาศมาตรฐานใหม่ให้ผู้บริโภคชาวเกาหลีผ่านแบรนด์ HOID\n\n<strong>เทคโนโลยีฟอกอากาศ 3-in-1 ครั้งแรกของโลก</strong>\n\nหัวใจของข้อตกลงนี้คือการเปิดตัวเทคโนโลยี 3-in-1 อย่างเป็นทางการในประเทศ ผลิตภัณฑ์ HOID ผสานการฟอกอากาศ พัดลม และการฆ่าเชื้อด้วย UV ในเครื่องเดียว ช่วยทั้งปรับปรุงคุณภาพอากาศภายใน กำจัดเชื้อโรค และหมุนเวียนอากาศไปพร้อมกัน\n\nโดยเฉพาะ ฟังก์ชันฆ่าเชื้อ UV มีประสิทธิภาพรัศมีสูงสุด 2.8 เมตร เป็นครั้งแรกในตลาดเกาหลีที่ทำการฆ่าเชื้อระยะไกลได้ เทคโนโลยีนี้เป็นทรัพย์สินหลักของโรงงานจีน และถูกยกให้เป็นมาตรฐานใหม่ของอุตสาหกรรมเครื่องฟอกอากาศ",
    "news.1.date": "2025.04.15",
    "news.1.title": "เปิดตัวเครื่องฟอกอากาศ Hoid รุ่นที่ 1",
    "news.1.summary":
      "Hoid แบรนด์เครื่องใช้ไฟฟ้าไลฟ์สไตล์พรีเมียม เปิดตัวผลิตภัณฑ์เรือธงรุ่นแรกอย่างเป็นทางการ",
    "news.1.content":
      "Hoid เปิดตัวเครื่องฟอกอากาศรุ่นที่ 1 อย่างเป็นทางการ มาพร้อมระบบกรอง 3 ชั้นกำลังสูงและโครงสร้างหมุนเวียนอากาศรอบทิศ 360° ช่วยฟอกอากาศได้รวดเร็วและรักษาความสะอาดในระดับสูงสุด ดีไซน์มินิมอลเข้ากับทุกสไตล์ตกแต่ง พร้อมมอเตอร์เงียบและประหยัดพลังงาน",
    "news.2.date": "2025.08.08",
    "news.2.title": "เยี่ยมชมโรงงานเครื่องดูดฝุ่น Hoid",
    "news.2.summary":
      "Hoid เข้าเยี่ยมชมโรงงานผลิตเครื่องดูดฝุ่นไร้สาย เพื่อตรวจสอบคุณภาพและความน่าเชื่อถือ",
    "news.2.content":
      "ในสายการผลิต ใช้ไลน์อัตโนมัติสมัยใหม่และบุคลากรเชี่ยวชาญ พร้อมกระบวนการควบคุมคุณภาพเข้มงวดทุกขั้น ตรวจสอบความทนทานของแบตเตอรี่และสมรรถนะมอเตอร์ก่อนส่งมอบ เพื่อให้ถึงมือลูกค้าในสภาพดีที่สุด",
    "news.3.date": "2025.10.13",
    "news.3.title":
      "การเปิดตัวแบรนด์ในเครือ ASRAN, Carvella, La Ceras และ Sikgu",
    "news.3.summary":
      "Feedback เปิดตัวแบรนด์ในเครือของตนเอง ได้แก่ ASRAN และ Carvella แบรนด์เครื่องครัวและของใช้ในบ้านระดับพรีเมียม, La Ceras แบรนด์กระเป๋าเดินทางหรู และ Sikgu แบรนด์ช้อนส้อมคุณภาพสูง",
    "news.3.content":
      "Feedback ได้เปิดตัวแบรนด์ในเครือของตนเอง ได้แก่ ASRAN และ Carvella ซึ่งเป็นแบรนด์เครื่องครัวและของใช้ในบ้านระดับพรีเมียม, La Ceras แบรนด์กระเป๋าเดินทางหรู และ Sikgu แบรนด์ช้อนส้อมที่สะท้อนความงามแบบเกาหลี การเปิดตัวครั้งนี้ทำให้ Feedback รับหน้าที่ดูแลด้านการจัดจำหน่ายภายในประเทศ การตลาด และบริการลูกค้าสำหรับผลิตภัณฑ์ทั้งหมดของทั้งสี่แบรนด์ ASRAN เป็นแบรนด์เครื่องครัวสแตนเลสระดับไฮเอนด์ที่มีชื่อเสียงด้านการนำความร้อนอย่างแม่นยำและการออกแบบที่ประณีต Carvella ถ่ายทอดอารมณ์ความเป็นอิตาเลียนผ่านเครื่องครัวที่ผลิตโดยช่างฝีมือผู้ชำนาญ La Ceras โดดเด่นด้วยวัสดุไฮบริดและดีไซน์ที่หรูหรา ขณะที่ Sikgu นำเสนอเครื่องใช้บนโต๊ะอาหารที่ผสานความเรียบง่ายและความงามแบบเกาหลีได้อย่างลงตัว Feedback มีเป้าหมายที่จะนำเสนอแบรนด์ไลฟ์สไตล์ระดับพรีเมียมสู่ตลาดเกาหลี พร้อมยกระดับประสบการณ์การใช้ชีวิตของผู้บริโภคผ่านการควบคุมคุณภาพและการพัฒนาแบรนด์อย่างต่อเนื่อง",

    "news.4.date": "2025.10.14",
    "news.4.title":
      "เปิดตัวเครื่องฟอกอากาศ Hoid รุ่นที่ 2: ครบจบการดูแลอากาศตลอดทั้งปีในเครื่องเดียว",
    "news.4.summary":
      "พัดลมฟอกอากาศแบบไร้ใบพัด 5-in-1 พร้อมแผ่นกรอง HEPA14 ระดับการแพทย์และระบบฆ่าเชื้อด้วยรังสี UV ครอบคลุมพื้นที่ 78 ม² รุกตลาดพรีเมียม",
    "news.4.content":
      "แผ่นกรอง HEPA14 ระดับการแพทย์ + UV Sterilization ครอบคลุมกว้าง 78 ม² เจาะตลาดเครื่องใช้ไฟฟ้าพรีเมียม\n\nตลาดเครื่องใช้ไฟฟ้าในบ้านของเกาหลีต้อนรับพัดลมฟอกอากาศร้อน-เย็นแบบมัลติฟังก์ชันที่ออกแบบมาเพื่อใช้งานได้ทุกฤดูกาล\n\nรุ่นใหม่นี้รวม 5 ฟังก์ชัน—ลมเย็น ลมร้อน ฟอกอากาศ สร้างประจุลบ และฆ่าเชื้อด้วยรังสี UV—ไว้ในโซลูชันแบบ ‘5-in-1’ เครื่องเดียว มอบระบบจัดการคุณภาพอากาศแบบองค์รวม แตกต่างจากเครื่องทั่วไปที่ทำได้อย่างใดอย่างหนึ่ง\n\n(ภาพ: พัดลมฟอกอากาศไร้ใบพัด 5-in-1 ร้อน-เย็น)\n\n<strong>กรองระดับการแพทย์: กำจัดฝุ่นละเอียดได้ 99.99%</strong>\n\nจุดเด่นคือแผ่นกรอง HEPA14 ระดับห้องผ่าตัด/คลีนรูม สามารถดักจับอนุภาคขนาด 0.3 ไมโครเมตรได้ไม่น้อยกว่า 99.99% สูงกว่าเกรด HEPA13 ที่ใช้กันทั่วไปในบ้าน จึงอุ่นใจได้สำหรับครอบครัวที่มีอาการภูมิแพ้หรือปัญหาระบบทางเดินหายใจ\n\nด้วยระบบกรองอากาศแบบ 360 องศา เครื่องสามารถดูดและฟอกอากาศได้รอบทิศ ครอบคลุมพื้นที่ได้สูงสุด 78 ม² (ประมาณ 24 พย็อง/840 ตร.ฟุต) เหมาะกับพื้นที่ขนาดใหญ่ เช่น ห้องนั่งเล่นหรือสำนักงาน\n\n<strong>UV Sterilization และประจุลบ เพื่อสภาพแวดล้อมภายในที่ถูกสุขอนามัย</strong>\n\nนอกจากดักจับฝุ่น เครื่องยังติดตั้งระบบฆ่าเชื้อด้วยรังสี UV เพื่อลดแบคทีเรียและไวรัสในอากาศ วิธีนี้ไม่ใช้สารเคมีจึงปลอดภัย โดยเฉพาะอย่างยิ่งในช่วงเปลี่ยนฤดู",
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
    "혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.":
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
    "hoid.hero.description":
      "미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트 가전 브랜드입니다.",
    "hoid.hero.cta": "Hoid 홈페이지 가기",
    "hoid.features.title": "혁신적인 기술력",
    "hoid.features.subtitle":
      "미니멀한 디자인 속에 숨어있는 첨단 기술로 완전히 새로운 공기청정 경험을 제공합니다",
    "hoid.homeshopping.date": "2025년 8월 런칭",
    "hoid.homeshopping.heading": "프리미엄 디자인 가전, 이제 집에서 만나보세요",
    "hoid.homeshopping.description":
      "프리미엄 디자인 가전 브랜드 호이드가 드디어 홈쇼핑을 통해 여러분을 찾아갑니다. 세련된 디자인과 뛰어난 성능, 그리고 생활을 바꾸는 혁신적인 기술을 이제 TV 속에서 직접 확인하세요.",
    "hoid.channels.title": "전국 어디서나 만날 수 있는",
    "hoid.channels.subtitle":
      "다양한 유통 채널을 통해 고객 여러분께 더 가깝게 다가갑니다",
    "hoid.channel1.title": "홈쇼핑",
    "hoid.channel1.description": "홈쇼핑 채널을 통한 직접 판매",
    "hoid.channel2.title": "스마트스토어",
    "hoid.channel2.description": "온라인 공식 스토어 운영",
    "hoid.channel3.title": "글로벌 셀러",
    "hoid.channel3.description": "해외 온라인 플랫폼 진출",
    "hoid.channel4.title": "오프라인 매장",
    "hoid.channel4.description": "전국 가전 매장 및 백화점",
    "hoid.cta.title": "깨끗한 공기, 새로운 일상",
    "hoid.cta.description":
      "HOID와 함께 건강하고 쾌적한 실내 환경을 만들어보세요",
    "hoid.cta.button": "문의하기",

    // Asran Brand Page
    "asran.hero.tagline": "독일 기술과 합리적 가격을 모두 갖춘 냄비",
    "asran.hero.description":
      "SUS410 스테인리스 스틸과 3중 바닥구조로 뛰어난 열전도율과 내구성을 자랑합니다. 인덕션과 가스 겸용으로 어떤 주방환경에서도 완벽하게 사용 가능한 프리미엄 냄비입니다.",
    "asran.hero.cta": "ASRAN 홈페이지 가기",
    "asran.features.title": "ASRAN만의 특별한 기술",
    "asran.features.subtitle":
      "독일의 정밀한 기술력과 한국의 실용성이 만나 탄생한 프리미엄 주방용품",

    // Medifeed Brand Page
    "medifeed.hero.title": "매일을 지키는 작은 습관",
    "medifeed.hero.description":
      "잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 누구나 쉽게 선택할 수 있는 건강 솔루션을 제공합니다.",
    "medifeed.features.title": "전문화된 건강 솔루션",
    "medifeed.features.subtitle":
      "과학적 연구를 바탕으로 개발된 특화 영양제로 일상의 건강을 책임집니다",
    "medifeed.category1.title": "잇몸 건강 전문",
    "medifeed.category1.description":
      "치주질환 예방과 잇몸 건강 유지를 위한 전문 영양제",
    "medifeed.category1.ingredient1": "코엔자임 Q10",
    "medifeed.category1.ingredient2": "비타민 C 복합체",
    "medifeed.category1.ingredient3": "아연 & 셀레늄",
    "medifeed.category1.ingredient4": "GMP 인증",
    "medifeed.category2.title": "눈 건강 전문",
    "medifeed.category2.description":
      "디지털 시대 눈의 피로와 시력 보호를 위한 기능성 영양제",
    "medifeed.category2.ingredient1": "루테인 & 지아잔틴",
    "medifeed.category2.ingredient2": "빌베리 추출물",
    "medifeed.category2.ingredient3": "오메가-3 지방산",
    "medifeed.category2.ingredient4": "블루라이트 차단",
    "medifeed.philosophy.title": "건강한 일상을 만드는",
    "medifeed.philosophy.subtitle":
      "과학적 근거와 품질에 대한 확고한 신념으로 믿을 수 있는 건강 솔루션을 제공합니다",
    "medifeed.value1.title": "안전성 우선",
    "medifeed.value1.description":
      "엄격한 품질 관리와 GMP 인증을 통해 안전하고 신뢰할 수 있는 제품만을 제공합니다.",
    "medifeed.value2.title": "실용적 접근",
    "medifeed.value2.description":
      "바쁜 현대인의 라이프스타일에 맞춰 간편하게 섭취할 수 있는 형태로 개발합니다.",
    "medifeed.value3.title": "합리적 가격",
    "medifeed.value3.description":
      "누구나 부담 없이 구매할 수 있는 합리적인 가격으로 건강한 습관을 만들어갑니다.",
    "medifeed.cta.title": "건강한 하루,",
    "medifeed.cta.subtitle": "작은 습관에서 시작",
    "medifeed.cta.description":
      "MEDIFEED와 함께 일상 속 작은 변화로 더 나은 건강을 만들어보세요",
    "medifeed.cta.button": "상담 신청하기",

    // LaCeras Brand Page
    "laceras.hero.title": "전통과 모던이 만나는",
    "laceras.hero.subtitle": "프렌치 럭셔리",
    "laceras.hero.description":
      "프랑스의 장인정신과 현대적 세련미를 결합한 럭셔리 캐리어 브랜드입니다. 비즈니스부터 럭셔리 여행까지 완벽한 트래블 솔루션을 제안합니다.",
    "laceras.hero.cta": "La Ceras 홈페이지 가기",
    "laceras.features.title": "프렌치 크래프트맨십",
    "laceras.features.subtitle":
      "정교한 마감과 균형 잡힌 디자인으로 완성된 프리미엄 럭셔리 트래블 경험",
    "laceras.feature1.title": "하이브리드 구조",
    "laceras.feature1.description":
      "PP의 유연성과 PC의 강성을 결합하여 가볍고 튼튼한 바디 구현",
    "laceras.feature2.title": "Sinking Ordinary Lock",
    "laceras.feature2.description":
      "기본 락 구조를 상판과 균형감 있게 낮춰 스크래치 포인트 최소화",
    "laceras.feature3.title": "무소음 휠 & 안정적 베어링 시스템",
    "laceras.feature3.description":
      "어떤 방향으로든 부드럽고 조용한 이동이 가능한 프리미엄 휠 시스템",
    "laceras.heritage.title": "프랑스 장인 정신의",
    "laceras.heritage.subtitle": "70년 전통",
    "laceras.heritage.heading": "세대를 넘나드는 크래프트맨십",
    "laceras.heritage.description":
      "1950년부터 시작된 La Ceras의 여정은 프랑스 전통 장인정신과 현대적 혁신이 만나는 지점에서 계속되고 있습니다. 세심한 디테일과 완벽한 마감으로 럭셔리 트래블의 새로운 기준을 제시합니다.",

    "laceras.heritage.point1": "14인치, 20인치, 24인치, 28인치 올인원 구성",
    "laceras.heritage.point2": "210D 베어링으로 손목 피로 최소화",
    "laceras.heritage.point3": "PP & PC 하이브리드 구조",

    "laceras.travel.title": "비즈니스부터 럭셔리까지",
    "laceras.travel.subtitle": "완벽한 트래블 솔루션",
    "laceras.travel.heading": "모든 여행의 순간을 특별하게",
    "laceras.travel.description":
      "La Ceras는 단순한 캐리어가 아닌 여행 파트너입니다. 비즈니스 출장부터 로맨틱한 허니문, 가족 여행까지 모든 순간을 더욱 세련되고 편안하게 만들어드립니다.",
    "laceras.travel.size": "사이즈 옵션",
    "laceras.travel.warranty": "년 보증",
    "laceras.travel.stores": "글로벌 매장",
    "laceras.travel.rating": "고객 만족도",
    "laceras.collection.title": "모든 여행 스타일에 맞는",
    "laceras.collection.subtitle":
      "다양한 컬렉션으로 여행자의 취향과 필요에 완벽하게 부응합니다",
    "laceras.collection1.title": "캐리온",
    "laceras.collection1.description": "기내 반입 가능한 컴팩트 사이즈",
    "laceras.collection2.title": "하드셸 캐리어",
    "laceras.collection2.description": "중거리 여행을 위한 미디움 사이즈",
    "laceras.collection3.title": "트렁크",
    "laceras.collection3.description": "장기간 여행을 위한 라지 사이즈",
    "laceras.cta.title": "La Ceras와 함께하는",
    "laceras.cta.subtitle": "럭셔리 트래블",
    "laceras.cta.description":
      "프랑스 장인정신으로 완성된 프리미엄 캐리어로 당신의 여행을 더욱 특별하게 만들어보세요",

    // Carvella Brand Page
    "carvella.hero.title": "이탈리아 장인의 정밀함",
    "carvella.hero.subtitle": "당신의 주방으로",
    "carvella.hero.description":
      "이탈리아 전통 장인정신으로 완성한 프리미엄 쿠킹웨어 브랜드입니다. 고급 스테인리스와 다층 구조로 뛰어난 열전도와 내구성을 자랑합니다.",
    "carvella.hero.cta": "Carvella 홈페이지 가기",
    "carvella.features.title": "이탈리아 장인정신",
    "carvella.features.subtitle":
      "정밀한 기술과 전통 크래프트맨십이 만나 완성된 프리미엄 쿠킹웨어",
    "carvella.feature1.title": "프리미엄 스테인리스",
    "carvella.feature1.description":
      "최고급 스테인리스 스틸 소재로 내구성과 위생성을 동시에 보장",
    "carvella.feature2.title": "다층 바닥구조",
    "carvella.feature2.description":
      "균등한 열전도와 열보존을 위한 특수 다층 바닥 설계 시스템",
    "carvella.feature3.title": "멀티 호환 열원",
    "carvella.feature3.description":
      "인덕션부터 가스레인지까지 모든 열원에서 완벽한 성능 발휘",
    "carvella.heritage.title": "이탈리아 전통의",
    "carvella.heritage.subtitle": "아르티지아나토",
    "carvella.heritage.heading": "정밀함과 열정이 만나는 곳",
    "carvella.heritage.description":
      "이탈리아 북부 롬바르디아 지역의 전통 금속공예 기술을 바탕으로 탄생한 Carvella는 장인들의 정밀함과 요리에 대한 열정을 그대로 담아냅니다. 매 제품마다 이탈리아 장인의 손길이 닿아 완성되는 진정한 아르티지아나토입니다.",
    "carvella.heritage.point1": "이탈리아 전통 금속공예 기법",
    "carvella.heritage.point2": "장인 수작업 마감 처리",
    "carvella.heritage.point3": "유럽 인증 프리미엄 소재",
    "carvella.cooking.title": "프로 셰프부터 요리 애호가까지",
    "carvella.cooking.subtitle": "모든 주방의 파트너",
    "carvella.cooking.heading": "완벽한 요리를 위한 완벽한 도구",
    "carvella.cooking.description":
      "Carvella는 단순한 조리도구가 아닌 요리의 예술을 완성하는 파트너입니다. 프로 셰프의 엄격한 기준을 충족하면서도 가정에서 쉽게 사용할 수 있도록 설계되어 모든 요리 애호가들의 꿈을 현실로 만들어드립니다.",
    "carvella.cooking.lineup": "제품 라인업",
    "carvella.cooking.warranty": "년 품질보증",
    "carvella.cooking.recommendation": "셰프 추천율",
    "carvella.cooking.satisfaction": "고객 만족도",
    "carvella.collection.title": "모든 요리를 위한",
    "carvella.collection.subtitle":
      "다양한 제품 라인으로 모든 요리 스타일과 필요에 완벽하게 부응합니다",
    "carvella.collection1.title": "프리미엄 냄비",
    "carvella.collection1.description": "다양한 사이즈와 용도별 냄비 컬렉션",
    "carvella.collection2.title": "프라이팬",
    "carvella.collection2.description": "완벽한 열전도를 위한 프라이팬 시리즈",
    "carvella.collection3.title": "압력뚜껑",
    "carvella.collection3.description": "다목적 멀티 압력뚜껑 시스템",
    "carvella.collection4.title": "세트 상품",
    "carvella.collection4.description": "완벽한 주방을 위한 종합 세트",
    "carvella.testimonial.title": "전문가들의 선택",
    "carvella.testimonial1":
      "Carvella의 냄비는 열전도가 완벽해서 요리가 훨씬 쉬워졌습니다. 프로 주방에서도 손색없는 품질입니다.",
    "carvella.testimonial1.author": "이탈리안 레스토랑 셰프",
    "carvella.testimonial2":
      "15년 넘게 사용해도 변함없는 품질과 성능. 진정한 장인정신을 느낄 수 있는 제품입니다.",
    "carvella.testimonial2.author": "요리 강사",
    "carvella.testimonial3":
      "인덕션에서 가스레인지까지 어떤 열원에서도 완벽한 성능을 보여줍니다. 가정용으로도 최고의 선택이에요.",
    "carvella.testimonial3.author": "요리 블로거",
    "carvella.cta.title": "Carvella와 함께하는",
    "carvella.cta.subtitle": "프리미엄 쿠킹",
    "carvella.cta.description":
      "이탈리아 장인정신으로 완성된 프리미엄 쿠킹웨어로 당신의 요리를 더욱 특별하게 만들어보세요",
    "carvella.good1.badge": "GOOD 01",
    "carvella.good1.title": "스테인리스 도마",
    "carvella.good1.description":
      "304 스테인리스 스틸로 제작되어 위생적이고 내구성이 뛰어난 도마입니다. 음식물 착색과 냄새가 남지 않아 언제나 깔끔하게 사용할 수 있습니다.",
    "carvella.good1.detail1": "위생적인 304 스테인리스 소재",
    "carvella.good1.detail2": "긁힘·변형에 강한 높은 내구성",
    "carvella.good1.detail3": "물세척만으로 간편한 관리",
    "carvella.good1.detail4": "논슬립 구조로 안정감 있는 사용",

    "carvella.good2.badge": "GOOD 02",
    "carvella.good2.title": "6종 칼 세트",
    "carvella.good2.description":
      "가위, 중식도, 감자칼 등 6종 구성으로 다양한 재료를 손쉽게 조리할 수 있습니다.",
    "carvella.good2.detail1": "6종 올인원",
    "carvella.good2.detail2": "인체공학적 손잡이로 편안한 그립",
    "carvella.good2.detail3": "뛰어난 절삭력",
    "carvella.good2.detail4": "가정용·업소용 모두 적합",

    // MOZ Brand Page
    "moz.hero.tagline": "따뜻하고 안전한 수면 환경",
    "moz.hero.description":
      "첨단 카본 히팅 기술과 안전 인증 설계로 건강한 숙면을 제공합니다. 몸과 마음이 회복되는 따뜻한 휴식, 그것이 모즈의 시작입니다.",
    "moz.hero.cta": "제품 문의하기",
    "moz.features.title": "모즈의 핵심 기술",
    "moz.features.subtitle":
      "첨단 카본 히팅과 안전 인증으로 완성한 프리미엄 수면 솔루션",
    "moz.feature1.title": "카본 히팅 기술",
    "moz.feature1.description":
      "전자파 걱정 없는 안전한 카본 열선으로 균일한 온기를 제공합니다",
    "moz.feature1.detail1": "전자파 차단 카본 소재",
    "moz.feature1.detail2": "균일한 온도 분포",
    "moz.feature1.detail3": "빠른 온도 상승",
    "moz.feature1.detail4": "에너지 효율 설계",
    "moz.feature2.title": "안전 인증 설계",
    "moz.feature2.description":
      "엄격한 안전 인증과 과열 방지 시스템으로 안심하고 사용할 수 있습니다",
    "moz.feature2.detail1": "KC 안전 인증",
    "moz.feature2.detail2": "과열 방지 시스템",
    "moz.feature2.detail3": "이중 안전 장치",
    "moz.feature2.detail4": "화재 예방 설계",
    "moz.feature3.title": "건강한 숙면",
    "moz.feature3.description":
      "몸과 마음이 회복되는 따뜻한 온기로 깊고 편안한 잠을 선사합니다",
    "moz.feature3.detail1": "최적 수면 온도 유지",
    "moz.feature3.detail2": "혈액순환 개선",
    "moz.feature3.detail3": "근육 이완 효과",
    "moz.feature3.detail4": "쾌적한 수면 환경",
    "moz.product1.title": "모즈 카본 탄소매트 싱글",
    "moz.product1.description":
      "혼자 써도 포근한 온기, 하루 피로를 녹입니다. 안전한 카본 열선으로 전자파 걱정 없어요.",
    "moz.product1.size": "사이즈",
    "moz.product2.title": "모즈 카본 탄소매트 더블",
    "moz.product2.description":
      "두 사람이 함께하는 따뜻한 온기. 균일한 열로 깊고 편안한 잠을 선사합니다.",
    "moz.product2.size": "사이즈",
    "moz.reviews.title": "고객 후기",
    "moz.review1":
      "전자파 걱정 없이 따뜻하게 잘 수 있어서 너무 좋아요. 겨울철 필수템입니다!",
    "moz.review1.author": "김○○",
    "moz.review2":
      "온도가 균일해서 발끝까지 포근해요. 아침에 일어나면 몸이 한결 가벼워진 느낌입니다.",
    "moz.review2.author": "이○○",
    "moz.review3":
      "안전 인증 받은 제품이라 안심하고 사용할 수 있어요. 품질도 만족스럽습니다.",
    "moz.review3.author": "박○○",
    "moz.benefits.title": "모즈와 함께하는 따뜻한 밤",
    "moz.benefit1.title": "깊은 숙면",
    "moz.benefit1.description":
      "최적의 온도 유지로 편안하고 깊은 잠을 경험하세요",
    "moz.benefit2.title": "빠른 온열",
    "moz.benefit2.description":
      "카본 히팅 기술로 빠르게 따뜻한 온기를 느낄 수 있습니다",
    "moz.benefit3.title": "안전한 설계",
    "moz.benefit3.description":
      "KC 인증과 이중 안전 장치로 걱정 없이 사용하세요",
    "moz.cta.title": "모즈와 함께하는 따뜻한 휴식",
    "moz.cta.description": "첨단 카본 히팅 기술로 건강한 숙면을 경험해보세요",
    "moz.cta.button": "제품 문의하기",

    // InYourHeart Brand Page
    "inyourheart.hero.title": "피부에 감성을 입히다",
    "inyourheart.hero.description":
      "클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 프리미엄 스킨케어 브랜드입니다.",
    "inyourheart.values.title": "감성이 담긴 뷰티 철학",
    "inyourheart.values.subtitle":
      "피부에 순하고 마음까지 따뜻하게 만드는 감성 스킨케어",
    "inyourheart.category1.title": "클린 포뮬러",
    "inyourheart.category1.description":
      "피부에 순하고 환경에 친화적인 성분만을 사용하여 안전하고 지속가능한 뷰티를 추구합니다.",
    "inyourheart.category2.title": "감성 디자인",
    "inyourheart.category2.description":
      "제품 사용 순간부터 특별한 경험이 될 수 있도록 감성적이고 아름다운 패키지를 디자인합니다.",
    "inyourheart.category3.title": "글로벌 K-뷰티",
    "inyourheart.category3.description":
      "한국의 우수한 뷰티 기술과 혁신을 전 세계에 알리며 K-뷰티의 가치를 높여갑니다.",
    "inyourheart.cta.title": "당신의 마음에 닿는",
    "inyourheart.cta.subtitle": "아름다운 감성",
    "inyourheart.cta.description":
      "IN YOUR HEART와 함께 특별한 뷰티 여정을 시작해보세요",
    "inyourheart.cta.button": "문의하기",

    // Sangsaeng Brand Page
    "sangsaeng.hero.title": "한국 의료를 세계로 연결하다",
    "sangsaeng.hero.description":
      "메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한 의료 서비스를 전 세계에 연결하는 종합 의료 플랫폼입니다.",
    "sangsaeng.hero.cta": "상생 홈페이지 가기",
    "sangsaeng.services.title": "글로벌 헬스케어 생태계",
    "sangsaeng.services.subtitle":
      "의료 서비스부터 브랜딩까지, 통합된 헬스케어 솔루션을 제공합니다",
    "sangsaeng.medical.title": "상생 메디컬",
    "sangsaeng.medical.subtitle": "Sangsaeng Medical",
    "sangsaeng.medical.description":
      "실생활 기반 건강 솔루션과 의료 서비스를 제공하는 헬스케어 브랜드",
    "sangsaeng.medical.benefit1": "맞춤형 건강 검진 패키지",
    "sangsaeng.medical.benefit2": "전문의 상담 서비스",
    "sangsaeng.medical.benefit3": "만성질환 관리 프로그램",
    "sangsaeng.medical.benefit4": "예방 의학 솔루션",

    "sangsaeng.platform.title": "상생 플랫폼",
    "sangsaeng.platform.subtitle": "Sangsaeng Platform",
    "sangsaeng.platform.description":
      "의료부터 관광까지 손안의 다국어 의료 플랫폼 앱",

    "sangsaeng.platform.benefit1": "다국어 의료 통역 서비스",
    "sangsaeng.platform.benefit2": "병원 예약 및 관리",
    "sangsaeng.platform.benefit3": "의료 관광 패키지",
    "sangsaeng.platform.benefit4": "24시간 응급 서포트",

    "sangsaeng.branding.title": "상생 브랜딩",
    "sangsaeng.branding.subtitle": "Sangsaeng Branding",
    "sangsaeng.branding.description":
      "콘텐츠, 메타광고, 글로벌 인플루언서 연계 브랜딩 조직",
    "sangsaeng.branding.benefit1": "의료 콘텐츠 마케팅",
    "sangsaeng.branding.benefit2": "다국어 브랜드 캠페인",
    "sangsaeng.branding.benefit3": "글로벌 인플루언서 협업",
    "sangsaeng.branding.benefit4": "디지털 마케팅 솔루션",

    "sangsaeng.cta.title1": "세계와 연결되는",
    "sangsaeng.cta.title2": "한국 의료의 미래",
    "sangsaeng.cta.description":
      "상생과 함께 안전하고 신뢰할 수 있는 의료 서비스를 경험해보세요",
    "sangsaeng.cta.button": "문의하기",

    // Hoid Details
    "hoid.feature1.title": "3-in-1 기술",
    "hoid.feature1.description":
      "공기청정, 제습, 살균 기능을 하나로 통합한 혁신적인 올인원 솔루션",
    "hoid.feature2.title": "HEPA14 필터",
    "hoid.feature2.description":
      "99.995% 초미세먼지 제거 효율을 자랑하는 의료급 고성능 필터 시스템",
    "hoid.feature3.title": "미니멀 디자인",
    "hoid.feature3.description":
      "어떤 공간에도 자연스럽게 어울리는 세련되고 모던한 디자인 철학",
    "hoid.partnership.title": "글로벌 확장의",
    "hoid.partnership.subtitle": "새로운 전환점",
    "hoid.partnership.date": "2025년 8월 16일",
    "hoid.partnership.mou": "중국 초대형 공기청정기 제조사와 MOU 체결",
    "hoid.partnership.description":
      "HOID는 중국 최대 공기청정기 제조업체와 글로벌 유통 및 기술 협력 MOU를 체결했습니다. 이를 통해 아시아 전역으로 사업 영역을 확장하고, 더 많은 고객에게 깨끗한 공기를 제공할 예정입니다.",
    "hoid.partnership.point1": "아시아 전역 시장 진출",
    "hoid.partnership.point2": "기술 협력 및 공동 개발",
    "hoid.partnership.point3": "글로벌 유통망 확대",
    "hoid.homeshopping.title": "TV 속으로 들어간",
    "hoid.homeshopping.subtitle": "프리미엄 디자인",

    // Asran Details
    "asran.feature1.title": "SUS410 스테인리스 스틸",
    "asran.feature1.description":
      "최고급 소재로 내구성과 안전성을 보장합니다",
    "asran.feature1.detail1": "부식 방지 & 변색 방지",
    "asran.feature1.detail2": "위생적이고 안전한 조리",
    "asran.feature1.detail3": "반영구적 사용 가능",
    "asran.feature1.detail4": "고급스러운 미러 마감",

    "asran.feature2.title": "3중 바닥구조",
    "asran.feature2.description": "뛰어난 열전도율로 에너지 효율성 극대화",
    "asran.feature2.detail1": "균등한 열 분산",
    "asran.feature2.detail2": "빠른 가열 시간",
    "asran.feature2.detail3": "한 손으로 뚜껑 쉽게 개폐 가능",
    "asran.feature2.detail4": "열 손실 최소화",

    "asran.feature3.title": "모든 열원 완벽 호환",
    "asran.feature3.description": "어떤 주방환경에서도 완벽하게 사용 가능",
    "asran.feature3.detail1": "모든 열원 완벽 호환",
    "asran.feature3.detail2": "가스 레인지, 인덕션",
    "asran.feature3.detail3": "논스틱 외부 코팅으로 쉬운 세척",
    "asran.feature3.detail4": "전기 레인지",

    "asran.size1.title": "냄비 3종 세트",
    "asran.size1.usage": "소용량부터 대용량까지, 혼자서도 가족과도 완벽하게",

    "asran.size2.title": "압력솥",
    "asran.size2.usage": "고압의 빠른 조리로 신선하고 풍미있는 요리 가능",

    "asran.size3.title": "프라이팬 3종 세트",
    "asran.size3.usage": "강력한 코팅으로 오래쓰는 프라이팬",

    "asran.cooking1.title": "국물요리",
    "asran.cooking1.description": "깊고 진한 국물 맛 구현",
    "asran.cooking2.title": "찜 & 조림",
    "asran.cooking2.description": "촉촉하고 부드러운 식감",
    "asran.cooking3.title": "건강한 조리",
    "asran.cooking3.description": "영양소 보존하는 조리법",
    "asran.reviews.title": "실제 구매고객들의 생생한 후기",
    "asran.review1":
      "가성비 너무 혜자네요! 이 가격에 이런 품질의 냄비를 만날 수 있다니 정말 만족스럽습니다.",
    "asran.review1.author": "김○○님",
    "asran.review2":
      "냄비의 무게에 놀랐다. 엄청 가볍다! 가벼운 무게 덕분에 손목이 아프지 않고 편하게 요리할 수 있어요.",
    "asran.review2.author": "박○○님",
    "asran.review3":
      "이유식 만들 때 편수냄비가 너무 유용하게 사용되고 있어요. 열 전도도 빠르고 청소도 쉬워서 좋습니다.",
    "asran.review3.author": "이○○님",
    "asran.benefit1.title": "요리가 즐거워집니다",
    "asran.benefit1.description":
      "균등한 열 전도로 실패 없는 요리가 가능하여 요리에 대한 자신감이 생깁니다.",
    "asran.benefit2.title": "요리 시간이 단축됩니다",
    "asran.benefit2.description":
      "빠른 가열 시간과 효율적인 열 분산으로 요리 시간을 대폭 줄일 수 있습니다.",
    "asran.benefit3.title": "주방이 더 아름다워집니다",
    "asran.benefit3.description":
      "고급스러운 미러 마감과 세련된 디자인으로 주방 인테리어가 한층 업그레이드됩니다.",
    "asran.cta.title": "독일 기술력과 만나는",
    "asran.cta.subtitle": "프리미엄 요리 경험",
    "asran.cta.description": "ASRAN과 함께 새로운 요리의 세계를 경험해보세요",
    "asran.cta.button": "문의하기",

    // Footer
    "footer.company": "회사 정보",
    "footer.services": "서비스",
    "footer.contact": "연락처",
    "footer.follow": "팔로우",
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