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
    "footer.tagline": "유통에서 브랜드까지 한국의 가치를 세계로 연결합니다",
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
      "Hoid는 프리미엄 라이프스타일 가전 브랜드로서 첫 번째 대표 제품인 Hoid 공기청정기 1세대를 공식 출시했습니다.",
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

    "news.6.date": "2025.10.01",
    "news.6.title": "ASRAN, 하이엔드 스테인리스 쿡웨어 3종 정식 런칭",
    "news.6.summary":
      "프리미엄 주방 브랜드 ASRAN이 스테인리스 냄비 3종 압력솥 프라이팬 3종으로 구성된 하이엔드 쿡웨어 라인업을 공식 출시했습니다.",
    "news.6.content":
      "ASRAN, 하이엔드 스테인리스 쿡웨어 3종 정식 런칭\n\n피드백의 프리미엄 주방 브랜드 ASRAN이 2025년 10월 1일 스테인리스 냄비 3종, 압력솥, 프라이팬 3종으로 구성된 하이엔드 쿡웨어 라인업을 공식 출시했습니다.\n\nASRAN은 독일 기술력 기반의 SUS410 스테인리스 스틸과 3중 바닥 구조를 적용하여 열전도율과 내구성을 극대화한 제품으로 어떤 주방 환경에서도 완벽한 조리가 가능한 것이 특징입니다. 이중 압력 조절 시스템과 정밀한 열전도층은 조리 중 온도 균형을 유지하여 식재료 본연의 맛과 영양을 지켜줍니다.\n\n이번 라인업은 가정용부터 전문가용까지 폭넓게 활용 가능하며 프리미엄 미러 마감과 절제된 곡선 디자인으로 주방의 품격을 한층 높여줍니다. 특히 모든 제품은 내식성과 변색 저항성이 뛰어나 세척 후에도 오랜 기간 새 제품 같은 광택을 유지합니다.\n\nASRAN은 디자인팀과 요리 전문가들이 함께 개발에 참여해 실제 조리 환경에서의 사용자 편의성을 극대화했습니다. 손잡이의 인체공학적 설계와 무게 밸런스는 장시간 조리에도 손목 부담을 최소화하며 유리 뚜껑의 증기 배출 밸브는 조리 과정을 직관적으로 제어할 수 있게 해줍니다.\n\n피드백 관계자는 ASRAN은 단순한 조리도구가 아닌 요리의 완성도를 높이는 셰프의 파트너로서 자리매김할 것이라며 앞으로도 기술적 혁신과 감각적 디자인을 결합한 제품을 지속적으로 선보이겠다고 전했습니다. 또한 ASRAN은 매일의 요리를 예술로 바꾸는 브랜드가 될 것이라고 덧붙였습니다.",

    "news.7.date": "2025.10.10",
    "news.7.title": "La Ceras, 프렌치 럭셔리 캐리어 4종 세트 정식 런칭",
    "news.7.summary":
      "프랑스 감성과 현대적 기술력을 결합한 프리미엄 캐리어 브랜드 La Ceras가 14·20·24·28인치로 구성된 럭셔리 4종 세트를 정식 출시했습니다.",
    "news.7.content":
      "La Ceras, 프렌치 럭셔리 캐리어 4종 세트 정식 런칭\n\n피드백은 2025년 10월 10일 프리미엄 캐리어 브랜드 La Ceras의 4종 세트 14, 20, 24, 28인치를 공식 출시했습니다.\n\nLa Ceras는 프랑스의 장인정신과 모던한 디자인 철학이 결합된 브랜드로 PP와 PC의 하이브리드 구조를 적용하여 가볍고 견고한 내구성을 제공합니다. 210D 베어링 기반의 무소음 휠 시스템으로 부드럽고 안정적인 이동감을 구현합니다.\n\n14인치는 항공 기내 반입에 적합하고 28인치는 장거리 여행과 대용량 수납에 최적화되어 있습니다. 내부는 이중 분리 수납 구조와 고급 방수 라이닝 YKK 지퍼를 적용해 실용성과 내구성을 모두 확보했습니다.\n\nLa Ceras는 단순한 이동 수단을 넘어 사용자의 여정 전반을 함께하는 트래블 컴패니언을 지향합니다. 제품에는 고유 시리얼 넘버가 각인되며 파리 공방 감성을 살린 라벨링 디자인으로 소장가치를 더합니다.\n\n피드백 관계자는 이번 런칭을 통해 La Ceras는 여행의 품격이라는 가치를 실현하고 고객의 개성과 스타일을 완성하는 프리미엄 트래블 브랜드로 성장하겠다며 향후 글로벌 공항 면세점 입점과 유럽 시장 진출도 추진할 예정이라고 전했습니다.",

    "news.8.date": "2025.10.13",
    "news.8.title": "Carvella, 이탈리아 감성의 프리미엄 칼·도마 세트 런칭",
    "news.8.summary":
      "이탈리아 장인정신을 담은 프리미엄 키친 브랜드 Carvella가 6종 칼 세트와 스테인리스 도마로 구성된 Carvella Signature Set을 공식 출시했습니다.",
    "news.8.content":
      "Carvella, 이탈리아 감성의 프리미엄 칼·도마 세트 런칭\n\n피드백의 프리미엄 키친 브랜드 Carvella가 2025년 10월 13일 6종 칼 세트와 스테인리스 도마로 구성된 Carvella Signature Set을 정식 출시했습니다.\n\nCarvella는 이탈리아 북부 장인들의 금속공예 기술을 바탕으로 정밀한 절삭력과 내구성을 갖춘 프리미엄 키친 브랜드입니다. 304 스테인리스 스틸 도마는 위생적이고 변색에 강하며 칼 세트는 인체공학적 손잡이와 탁월한 절삭력을 제공합니다.\n\n칼날은 고탄소강을 사용해 장기간 사용에도 내구성을 유지하고 핸들은 미끄럼 방지 기능을 갖춘 합성 소재로 세밀한 조리에도 안정감을 줍니다. 각 제품은 장인의 수작업 폴리싱으로 Carvella 특유의 광택과 밸런스를 완성했습니다.\n\nCarvella Signature Set은 프로 셰프와 홈 셰프 모두에게 적합하며 프리미엄 포장 구성으로 선물용 가치를 높였습니다. 스테인리스와 블랙톤의 조화는 어떤 주방에서도 세련된 존재감을 드러냅니다.\n\n피드백 관계자는 Carvella는 단순한 조리도구가 아닌 요리 예술의 완성품이라며 장인의 기술과 감성을 이어받아 유럽과 아시아 시장에서도 프리미엄 키친 브랜드로 자리매김할 것이라고 전했습니다. 또한 지속 가능한 생산 공정과 친환경 소재 적용으로 브랜드 철학을 확장할 계획이라고 밝혔습니다.",

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
    "about.timeline.2025_10":
      "아스란, 카르벨라, 라쎄라스, 식구 자사 브랜드 런칭",
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
      ' 고객·파트너 중심: \'공생\'의 유통 모델을<br class="block lg:hidden"/><br class="hidden lg:block"/> 실현합니다',
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
    "asran.feature1.description": "최고급 소재로 내구성과 안전성을 보장합니다",
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
    "news.6.date": "2025.10.01",
    "news.6.title":
      "ASRAN Officially Launches High-End Stainless Cookware Trio",
    "news.6.summary":
      "Premium kitchen brand ASRAN has officially launched a high-end cookware lineup consisting of 3 stainless pots, a pressure cooker, and 3 frying pans.",
    "news.6.content":
      "ASRAN Officially Launches High-End Stainless Cookware Trio\n\nFeed Holdings’ premium kitchen brand ASRAN officially launched its high-end cookware lineup on October 1, 2025, featuring 3 stainless pots, a pressure cooker, and 3 frying pans.\n\nASRAN utilizes German-engineered SUS410 stainless steel and a triple-layer base structure to maximize heat conductivity and durability, ensuring perfect cooking performance in any kitchen. The dual pressure regulation system and precision heat layers maintain temperature balance during cooking, preserving ingredients’ natural flavor and nutrients.\n\nThis collection is suitable for both home and professional use, with a premium mirror finish and refined curved design that elevate kitchen aesthetics. All products feature excellent corrosion and discoloration resistance, maintaining a new-like shine even after repeated cleaning.\n\nASRAN was co-developed by design teams and culinary professionals to maximize user convenience in real cooking environments. Ergonomically designed handles and balanced weight distribution reduce wrist strain during long cooking sessions, while glass lids with steam release valves allow intuitive control.\n\nA Feed Holdings representative stated that ASRAN will establish itself not merely as cookware but as a chef’s partner that enhances the perfection of cooking, continuing to introduce products that combine technological innovation with sophisticated design. They added that ASRAN aims to turn everyday cooking into an art form.",

    "news.7.date": "2025.10.10",
    "news.7.title":
      "La Ceras Officially Launches French Luxury 4-Piece Luggage Set",
    "news.7.summary":
      "Premium travel brand La Ceras, combining French craftsmanship and modern technology, has officially launched its luxury 4-piece luggage set in 14, 20, 24, and 28 inches.",
    "news.7.content":
      "La Ceras Officially Launches French Luxury 4-Piece Luggage Set\n\nFeed Holdings officially launched the premium luggage brand La Ceras and its 4-piece set (14, 20, 24, 28 inches) on October 10, 2025.\n\nLa Ceras merges French artisanal craftsmanship with modern design philosophy, applying a hybrid structure of PP and PC materials for light weight and exceptional durability. The 210D bearing-based silent wheel system provides smooth, stable movement.\n\nThe 14-inch model is optimized for carry-on use, while the 28-inch model is ideal for long-distance travel and large storage capacity. The interior features dual compartments, waterproof lining, and YKK zippers for maximum practicality and strength.\n\nLa Ceras aims to be more than a travel accessory—it’s a true travel companion that accompanies users throughout their journeys. Each product bears a unique serial number, and its Paris-inspired labeling design enhances collectible value.\n\nA Feed Holdings representative noted that through this launch, La Ceras embodies the value of travel sophistication and will grow into a premium travel brand that completes each customer’s individuality and style. They also revealed plans to expand into global airport duty-free stores and the European market.",

    "news.8.date": "2025.10.13",
    "news.8.title":
      "Carvella Launches Premium Italian-Inspired Knife and Cutting Board Set",
    "news.8.summary":
      "Premium kitchen brand Carvella, inspired by Italian craftsmanship, has officially launched the Carvella Signature Set, consisting of 6 knives and a stainless steel cutting board.",
    "news.8.content":
      "Carvella Launches Premium Italian-Inspired Knife and Cutting Board Set\n\nFeed Holdings’ premium kitchen brand Carvella officially launched the Carvella Signature Set on October 13, 2025, featuring a 6-piece knife set and a stainless steel cutting board.\n\nCarvella is a premium kitchen brand built upon northern Italian metalcraft expertise, offering precision cutting power and exceptional durability. The 304 stainless steel cutting board is hygienic and resistant to discoloration, while the knives feature ergonomic handles for a comfortable grip and sharp, long-lasting blades.\n\nEach knife uses high-carbon steel for lasting sharpness, and the anti-slip synthetic handles ensure stability during detailed cooking. Every product is hand-polished by artisans to achieve Carvella’s signature luster and perfect balance.\n\nThe Carvella Signature Set is suitable for both professional chefs and home cooks, presented in premium packaging ideal for gifting. Its stainless and black-tone design brings elegance to any kitchen.\n\nA Feed Holdings representative said that Carvella is not just cookware but a masterpiece of culinary art, inheriting Italian craftsmanship and emotion to grow into a premium kitchen brand across Europe and Asia. The brand also plans to expand its philosophy with sustainable production processes and eco-friendly materials.",

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
      "Born from the traditional metalworking techniques of the Lombardy region in northern Italy, Carvella captures the precision of artisans and their passion for cooking. Each product is completed with the touch of Italian artisans, embodying true artigianato.",
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

    // InYourHeart Brand Page
    "inyourheart.hero.title": "Adding Emotion to Your Skin",
    "inyourheart.hero.description":
      "A premium skincare brand leading the global K-beauty market with clean beauty philosophy and emotional package design.",
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
    "brands.asran.slogan": "หม้อที่รวมเทคโนโลยีเยอรมันกับราคาสมเหตุผล",
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

    "news.4.date": "2025.09.01",
    "news.4.title": "เปิดตัวเครื่องฟอกอากาศ Hoid รุ่นที่ 2",
    "news.4.summary":
      "อัปเกรดทั้งฟังก์ชันและดีไซน์ พร้อมเซ็นเซอร์ฝุ่นละเอียด แอปควบคุม และมอเตอร์เงียบกว่าเดิม",
    "news.4.content":
      "รองรับมอนิเตอร์คุณภาพอากาศแบบเรียลไทม์ ผ่านการเชื่อมต่อกับสมาร์ตโฟน แจ้งเตือนรอบเปลี่ยนไส้กรองอัตโนมัติ และลดเสียงรบกวนในการใช้งาน",

    "news.5.date": "2025.08.20",
    "news.5.title": "เปิดตัวเครื่องดูดฝุ่นไร้สาย Hoid",
    "news.5.summary":
      "มอเตอร์สมรรถนะสูง แรงดูดทรงพลัง และแบตเตอรี่ใช้งานยาวนาน",
    "news.5.content":
      "ดีไซน์ตามหลักสรีรศาสตร์ น้ำหนักเบา ลดภาระข้อมือ หัวแปรงเปลี่ยนได้สำหรับพื้นพรมและที่นอน กล่องฝุ่นและไส้กรองล้างน้ำได้ สะดวกและถูกสุขอนามัย",

    "news.6.date": "2025.10.01",
    "news.6.title":
      "ASRAN เปิดตัวชุดเครื่องครัวสแตนเลสไฮเอนด์ 3 ชิ้นอย่างเป็นทางการ",
    "news.6.summary":
      "แบรนด์เครื่องครัวระดับพรีเมียม ASRAN เปิดตัวชุดเครื่องครัวไฮเอนด์อย่างเป็นทางการ ประกอบด้วยหม้อสแตนเลส 3 ใบ หม้อแรงดัน และกระทะ 3 ใบ",
    "news.6.content":
      "ASRAN เปิดตัวชุดเครื่องครัวสแตนเลสไฮเอนด์ 3 ชิ้นอย่างเป็นทางการ\n\nแบรนด์เครื่องครัวระดับพรีเมียม ASRAN ภายใต้ Feed Holdings ได้เปิดตัวชุดเครื่องครัวไฮเอนด์ในวันที่ 1 ตุลาคม 2025 ซึ่งประกอบด้วยหม้อสแตนเลส 3 ใบ หม้อแรงดัน และกระทะ 3 ใบ\n\nASRAN ใช้เหล็กกล้า SUS410 ที่พัฒนาโดยเทคโนโลยีเยอรมัน พร้อมโครงสร้างฐาน 3 ชั้น เพื่อเพิ่มประสิทธิภาพการนำความร้อนและความทนทานสูงสุด ช่วยให้การทำอาหารสมบูรณ์แบบในทุกสภาพครัว ระบบควบคุมแรงดันคู่และชั้นกระจายความร้อนที่แม่นยำช่วยรักษาอุณหภูมิและรสชาติของวัตถุดิบได้อย่างดีเยี่ยม\n\nผลิตภัณฑ์นี้เหมาะสำหรับทั้งบ้านและเชฟมืออาชีพ มาพร้อมพื้นผิวขัดเงาระดับพรีเมียมและดีไซน์โค้งมนที่ช่วยเพิ่มความหรูหราในครัว ทั้งยังทนต่อการกัดกร่อนและการเปลี่ยนสี ทำให้เงางามเหมือนใหม่แม้ใช้งานเป็นเวลานาน\n\nทีมออกแบบและผู้เชี่ยวชาญด้านอาหารได้ร่วมกันพัฒนา ASRAN เพื่อให้ใช้งานได้จริงในชีวิตประจำวัน ด้ามจับออกแบบตามหลักสรีรศาสตร์เพื่อลดแรงกดข้อมือ และฝาแก้วพร้อมวาล์วระบายไอน้ำช่วยให้ควบคุมการทำอาหารได้ง่าย\n\nตัวแทนจาก Feed Holdings กล่าวว่า ASRAN ไม่ใช่เพียงเครื่องมือทำอาหาร แต่เป็นคู่หูของเชฟที่ช่วยยกระดับความสมบูรณ์แบบของอาหาร และจะยังคงพัฒนาผลิตภัณฑ์ที่ผสานนวัตกรรมกับดีไซน์อันประณีตเพื่อเปลี่ยนการทำอาหารประจำวันให้กลายเป็นศิลปะ",

    "news.7.date": "2025.10.10",
    "news.7.title":
      "La Ceras เปิดตัวเซ็ตกระเป๋าเดินทางหรูหราสไตล์ฝรั่งเศส 4 ชิ้นอย่างเป็นทางการ",
    "news.7.summary":
      "แบรนด์กระเป๋าเดินทางระดับพรีเมียม La Ceras ผสานความประณีตแบบฝรั่งเศสกับเทคโนโลยีทันสมัย เปิดตัวเซ็ตกระเป๋า 4 ขนาด ได้แก่ 14, 20, 24 และ 28 นิ้ว",

    "news.7.content":
      "La Ceras เปิดตัวเซ็ตกระเป๋าเดินทางหรูหราสไตล์ฝรั่งเศส 4 ชิ้นอย่างเป็นทางการ\n\nFeed Holdings เปิดตัวแบรนด์กระเป๋าเดินทางระดับพรีเมียม La Ceras อย่างเป็นทางการเมื่อวันที่ 10 ตุลาคม 2025 พร้อมเซ็ตกระเป๋า 4 ชิ้น (14, 20, 24, 28 นิ้ว)\n\nLa Ceras ผสมผสานความงามแบบฝรั่งเศสเข้ากับแนวคิดการออกแบบสมัยใหม่ โดยใช้โครงสร้างวัสดุผสม PP และ PC เพื่อให้มีน้ำหนักเบาแต่ทนทาน พร้อมล้อระบบแบริ่ง 210D ที่หมุนลื่นเงียบและมั่นคง\n\nขนาด 14 นิ้วเหมาะสำหรับถือขึ้นเครื่องบิน ส่วน 28 นิ้วเหมาะกับการเดินทางไกลที่ต้องการพื้นที่เก็บของมาก ภายในออกแบบแบบสองชั้น มีซับกันน้ำและซิป YKK คุณภาพสูง เพิ่มความทนทานและความสะดวกในการใช้งาน\n\nLa Ceras ไม่ได้เป็นเพียงกระเป๋าเดินทาง แต่เป็น “เพื่อนร่วมทาง” ที่อยู่กับผู้ใช้ในทุกการเดินทาง ผลิตภัณฑ์ทุกใบมีหมายเลขประจำรุ่นและป้ายดีไซน์จากแรงบันดาลใจในปารีสเพิ่มคุณค่าความหรูหรา\n\nตัวแทนจาก Feed Holdings กล่าวว่า การเปิดตัวนี้สะท้อนคุณค่าของความสง่างามในการเดินทาง และตั้งเป้าพัฒนา La Ceras ให้เป็นแบรนด์กระเป๋าเดินทางระดับพรีเมียม พร้อมขยายเข้าสู่ร้านปลอดภาษีสนามบินและตลาดยุโรปในอนาคต",
    "news.8.date": "2025.10.13",
    "news.8.title":
      "Carvella เปิดตัวชุดมีดและเขียงสแตนเลสสไตล์อิตาเลียนระดับพรีเมียม",
    "news.8.summary":
      "แบรนด์เครื่องครัวระดับพรีเมียม Carvella ที่ได้รับแรงบันดาลใจจากงานฝีมือของอิตาลี เปิดตัวชุด Carvella Signature Set ซึ่งประกอบด้วยมีด 6 เล่มและเขียงสแตนเลส",
    "news.8.content":
      "Carvella เปิดตัวชุดมีดและเขียงสแตนเลสสไตล์อิตาเลียนระดับพรีเมียม\n\nแบรนด์เครื่องครัวระดับพรีเมียม Carvella ภายใต้ Feed Holdings เปิดตัว Carvella Signature Set อย่างเป็นทางการเมื่อวันที่ 13 ตุลาคม 2025 ซึ่งประกอบด้วยมีด 6 เล่มและเขียงสแตนเลส\n\nCarvella สืบทอดเทคนิคงานโลหะจากภาคเหนือของอิตาลี ผลิตด้วยความแม่นยำสูง แข็งแรง และมีความคมกริบ เขียงผลิตจากสแตนเลส 304 ที่สะอาด ปลอดภัย ไม่เป็นสนิม ส่วนด้ามจับออกแบบตามหลักสรีรศาสตร์เพื่อให้จับถนัดและตัดได้แม่นยำ\n\nใบมีดทำจากเหล็กคาร์บอนสูงเพื่อความคมคงทน ด้ามจับผลิตจากวัสดุป้องกันลื่นที่ให้ความมั่นคงขณะใช้งาน ผลิตภัณฑ์แต่ละชิ้นผ่านการขัดเงาด้วยมือโดยช่างฝีมือเพื่อสร้างสมดุลและความเงางามในแบบ Carvella\n\nCarvella Signature Set เหมาะสำหรับทั้งเชฟมืออาชีพและผู้ที่ชื่นชอบการทำอาหาร มาพร้อมบรรจุภัณฑ์พรีเมียมที่เหมาะสำหรับของขวัญ ดีไซน์โทนสแตนเลสและสีดำช่วยเพิ่มความหรูหราให้ทุกครัว\n\nตัวแทนจาก Feed Holdings กล่าวว่าชุด Carvella ไม่ใช่แค่เครื่องครัว แต่คือผลงานศิลปะการทำอาหาร ที่สืบทอดความประณีตของช่างฝีมืออิตาเลียน และมุ่งมั่นขยายสู่ตลาดยุโรปและเอเชีย พร้อมคำนึงถึงการผลิตที่ยั่งยืนและวัสดุที่เป็นมิตรต่อสิ่งแวดล้อม",

    // Stats Section
    "stats.title": "เติบโตอย่างต่อเนื่อง",
    "stats.subtitle": "ความสำเร็จของเรา",
    "stats.description":
      "สำรวจตัวชี้วัดสำคัญของ FeedBack ผู้เป็นพาร์ทเนอร์ธุรกิจระดับโลกที่เติบโตไม่หยุด",
    "stats.since": "ก่อตั้ง",
    "stats.since.sub": "ตั้งแต่",
    "stats.brands": "แบรนด์ของตนเอง",
    "stats.brands.sub": "Own Brands",
    "stats.countries": "ประเทศพาร์ทเนอร์",
    "stats.countries.sub": "Countries",
    "stats.hospitals": "พันธมิตรโรงพยาบาล",
    "stats.hospitals.sub": "Hospitals",

    // CTA Section
    "cta.title": "อยากขยายสู่ตลาดโลกหรือไม่?",
    "cta.description":
      "ก้าวข้ามเอเชียสู่ตลาดโลกไปกับ FeedBack\nที่ปรึกษามืออาชีพจะเสนอทางออกที่เหมาะกับธุรกิจของคุณ",
    "cta.consultation": "ขอคำปรึกษาฟรี",
    "cta.proposal": "ดูข้อเสนอโครงการ",

    // Contact Page
    "contact.title": "ติดต่อเรา",
    "contact.subtitle.line1": "สร้างโอกาสทางธุรกิจใหม่",
    "contact.subtitle.line2": "ไปกับ FeedBack",
    "contact.section.contact": "ข้อมูลติดต่อ",
    "contact.section.departments": "แผนกที่เกี่ยวข้อง",
    "contact.section.social": "โซเชียลมีเดีย",

    "contact.info.address.title": "ที่อยู่สำนักงานใหญ่",
    "contact.info.address.content":
      "80 ถนนซงโดควาฮัก-โร เขตยอนซู เมืองอินชอน อาคาร Songdo AIT ชั้น 13 ห้อง 1301, 1302",
    "contact.info.phone.title": "โทรศัพท์",
    "contact.info.email.title": "อีเมล",
    "contact.info.hours.title": "เวลาทำการ",
    "contact.info.hours.content":
      "จันทร์–ศุกร์ 10:00–19:00 (หยุดเสาร์–อาทิตย์และวันหยุดนักขัตฤกษ์)",

    "contact.dept.management": "ฝ่ายสนับสนุนการจัดการ",

    "contact.form.title": "ฝากคำถาม/ข้อเสนอ",
    "contact.form.name": "ชื่อ",
    "contact.form.name.placeholder": "กรอกชื่อของคุณ",
    "contact.form.company": "บริษัท",
    "contact.form.company.placeholder": "กรอกชื่อบริษัทของคุณ",
    "contact.form.email": "อีเมล",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.phone": "โทรศัพท์",
    "contact.form.phone.placeholder": "+82-10-0000-0000",
    "contact.form.inquiry_type": "ประเภทคำถาม",
    "contact.form.inquiry_type.placeholder": "เลือกประเภทคำถาม",
    "contact.form.inquiry_type.business": "สอบถามธุรกิจ",
    "contact.form.inquiry_type.brand": "สอบถามแบรนด์",
    "contact.form.inquiry_type.partner": "ข้อเสนอความร่วมมือ",
    "contact.form.message": "ข้อความ",
    "contact.form.message.placeholder": "พิมพ์ข้อความของคุณ",
    "contact.form.privacy": "ข้าพเจ้ายินยอมให้เก็บและใช้ข้อมูลส่วนบุคคล",
    "contact.form.privacy.link": "ดูรายละเอียด",
    "contact.form.privacy.error.title": "ต้องยินยอมข้อมูลส่วนบุคคล",
    "contact.form.privacy.error.description":
      "โปรดยอมรับนโยบายความเป็นส่วนตัวเพื่อดำเนินการต่อ",
    "contact.form.submit": "ส่งข้อความ",
    "contact.form.sending": "กำลังส่ง...",

    "contact.errors.required.title": "ข้อผิดพลาดในการกรอก",
    "contact.errors.required.description":
      "จำเป็นต้องกรอก ชื่อ อีเมล และข้อความ",

    "contact.toast.success.title": "ส่งอีเมลแล้ว",
    "contact.toast.success.description":
      "เราได้รับคำถามของคุณแล้ว จะติดต่อกลับโดยเร็ว",
    "contact.toast.gmail.title": "ต้องยืนยันสิทธิ์ Gmail",
    "contact.toast.gmail.description": "ต้องยืนยันการใช้ Gmail API",
    "contact.toast.gmail.link": "คลิกที่นี่เพื่อยืนยัน Gmail",
    "contact.toast.unknown": "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ",
    "contact.toast.send_error_console": "ข้อผิดพลาดในการส่งอีเมล:",
    "contact.toast.fail.title": "ส่งไม่สำเร็จ",
    "contact.toast.fail.description":
      "เกิดข้อผิดพลาดระหว่างส่งอีเมล โปรดลองอีกครั้งภายหลัง",

    "contact.map.title": "แผนที่/การเดินทาง",

    // About Page
    "about.story.main":
      '<span class="text-white">Feedback ออกแบบการเติบโตของแบรนด์ผ่านการกระจายสินค้า</span>',
    "about.story.sub":
      'โดยมีแบรนด์ของเรา เช่น Hoid, Medifeed, InYourHeart และ Sangsaeng<br class="hidden sm:block"/>รวมทั้งพันธมิตรระดับโลก รองรับครบตั้งแต่วางแผน ผลิต กระจายสินค้า จนถึงแบรนด์ดิ้ง',
    "about.story.detail":
      'เราจะมุ่งมั่นเสมอ เพื่อให้ทุกแบรนด์ของ FeedBack ที่ซึมซาบอยู่ในชีวิตของคุณ<br class="hidden sm:block"/>ช่วยให้ทุกวันสะดวกสบายและมีความสุขมากยิ่งขึ้น',
    "about.banner.title":
      'FeedBack <br class="block" /><span class="text-[#ffffff]">ออกแบบการเติบโตของแบรนด์ผ่านการกระจายสินค้า</span>',
    "about.parallax.title":
      'ด้วยเป้าหมายเรื่อง <span class="text-[#ffffff] font-bold">\'ความสุขในวิถีชีวิตประจำวัน\'</span><br class="hidden sm:block"/>ที่นี่คือ FeedBack ที่เต็มไปด้วยผู้คนเปี่ยมแพสชัน',
    "about.parallax.description":
      'เรามุ่งมั่นพัฒนานวัตกรรมเทคโนโลยีอย่างต่อเนื่องเพื่อมอบผลิตภัณฑ์ที่ดีที่สุดให้กับคุณ <br class="hidden sm:block"/>ให้กับคุณ และเรายังลงทุนด้านการวิจัยและพัฒนาอย่างต่อเนื่องเพื่อให้บรรลุเป้าหมายนี้อีกด้วย',
    "about.philosophy.title": "ปรัชญาการบริหาร",
    "about.philosophy.description":
      'ในฐานะแพลตฟอร์มกระจายสินค้าที่เน้นการลงมือทำ เพื่อเชื่อมแบรนด์กับตลาด<br class="hidden sm:block"/>FeedBack สร้างระบบนิเวศแห่งการเติบโตร่วมกับพาร์ทเนอร์ทุกฝ่าย',
    "about.timeline.title": "ไทม์ไลน์",
    "about.timeline.2025_10":
      "การเปิดตัวแบรนด์ในเครือ ASRAN, Carvella, La Ceras และ Sikgu",
    "about.timeline.2025_09":
      "เปิดตัวเครื่องฟอกอากาศ Hoid รุ่นที่ 2 ทั่วโลก (ขยายโฮมช้อปปิ้ง)",
    "about.timeline.2025_08": "ออกเครื่องดูดฝุ่นไร้สาย Hoid",
    "about.timeline.2025_04":
      "เปิดตัวเครื่องฟอกอากาศ Hoid รุ่นที่ 1 (เทคโนโลยีฆ่าเชื้อ 3‑in‑1)",
    "about.timeline.2025_01":
      "ตั้งบริษัทย่อย Sangsaeng Medical และเริ่มพัฒนาแพลตฟอร์มแบบบูรณาการ",
    "about.timeline.2024":
      "เปิดตัวแบรนด์ของเรา Hoid, Medifeed, InYourHeart พร้อมกัน",
    "about.timeline.type.expansion": "ขยายตัว",
    "about.timeline.type.product": "เปิดตัวสินค้า",
    "about.timeline.type.founding": "ก่อตั้ง",
    "about.philosophy.value1.title":
      "ยึดลูกค้าและพาร์ทเนอร์เป็นศูนย์กลาง: สร้างโมเดลกระจายสินค้าแบบอยู่ร่วมกัน",
    "about.philosophy.value1.description":
      "ไม่ใช่แค่ที่ซื้อขายสินค้า แต่เราสร้างระบบนิเวศกึ่งร่วมเติบโตระหว่างผู้ผลิต แบรนด์ และผู้ค้าปลีก บนความไว้วางใจระยะยาว",
    "about.philosophy.value2.title":
      "เชื่อมแบรนด์และตลาดด้วยการปฏิบัติการแบบบูรณาการ",
    "about.philosophy.value2.description":
      "เชื่อมงานวางสินค้า แบรนด์ดิ้ง การตลาด และช่องทางกระจายอย่างเป็นองค์รวม ผสานศักยภาพ OEM กับประสบการณ์แบรนด์ของเรา เพื่อทางออกที่ลงมือทำได้จริง",
    "about.philosophy.value3.title":
      "บริษัทที่เน้นการปฏิบัติการ เพื่อศักยภาพการแข่งขันในตลาดโลก",
    "about.philosophy.value3.description":
      "เปิดโอกาสให้แบรนด์ที่เติบโตจากเอเชียก้าวสู่ตลาดโลก ผ่านการออกแบบยุทธศาสตร์และการลงมือทำบนฐานพันธมิตร",
    "about.philosophy.value4.title": "สร้างพาร์ทเนอร์ระยะยาวด้วยความเชื่อใจ",
    "about.philosophy.value4.description":
      "คุณภาพที่พิสูจน์ได้ ซัพพลายที่มั่นคง กระบวนการกระจายที่โปร่งใส และบริการหลังการขายที่จริงใจ คือรากฐานความเชื่อถือร่วมกัน",
    "about.timeline.bottom":
      "เราขยายตลาดอย่างรวดเร็วควบคู่ไปกับการเปิดตัวสินค้า ผ่านโฮมช้อปปิ้ง อีคอมเมิร์ซ และช่องทางค้าส่ง ทั้งในและต่างประเทศ",
    "about.ceo.quote":
      "“เรายึดความสุขของลูกค้าและพันธมิตรระดับโลกเป็นหัวใจสำคัญ”",
    "about.ceo.title": "สารจากซีอีโอ",
    "about.ceo.name": "Song Haemin, Jeong Seonghyeon",
    "about.ceo.position": "ประธานเจ้าหน้าที่บริหารร่วม บริษัท FeedBack",
    "about.ceo.motto": "“เติบโตเป็นบริษัทแพลตฟอร์มที่เชื่อมแบรนด์และตลาด”",
    "about.ceo.message1": "สวัสดีครับ/ค่ะ เราคือซีอีโอร่วมของ FeedBack",
    "about.ceo.message2":
      "ท่ามกลางตลาดกระจายสินค้าระดับโลกที่เปลี่ยนแปลงรวดเร็ว FeedBack ทำหน้าที่เป็นผู้เชื่อมและผู้ลงมือระหว่างแบรนด์กับตลาด",
    "about.ceo.message3":
      "เราไม่ใช่แค่ ‘บริษัทขายของ’ แต่เป็นพาร์ทเนอร์ที่ช่วยเติบโตแบรนด์และวางรากฐานในตลาด รายผู้ผลิต ผู้จัดจำหน่าย และผู้บริโภคพึงพอใจร่วมกัน",
    "about.ceo.highlight":
      "เติมพลังให้สินค้าด้วยแบรนด์ดิ้ง เชื่อมแบรนด์เข้ากับเครือข่ายกระจาย และใส่คอนเทนต์กับประสบการณ์ลงไปในกระจายสินค้า — คือวิถีของ FeedBack",
    "about.ceo.message4":
      "เราจะเดินหน้าสร้างโอกาสในตลาดที่ใหญ่และกว้างขึ้นร่วมกับพาร์ทเนอร์ทั้งในและต่างประเทศ ขอบคุณครับ/ค่ะ",
    "about.org.title": "โครงสร้างองค์กร",
    "about.org.description":
      "ด้วยโครงสร้างที่เป็นระบบและความเชี่ยวชาญเฉพาะด้าน เราพร้อมมอบบริการที่ดีที่สุดให้ลูกค้า",

    // Service Page (Korean literal keys kept)
    "서비스 소개": "แนะนำบริการ",
    "EXPERTISE & SOLUTION": "ความเชี่ยวชาญ & โซลูชัน",
    "피드백은 유통부터 마케팅까지, 글로벌 비즈니스를 위한 전문 서비스를 제공합니다.":
      "FeedBack ให้บริการมืออาชีพเพื่อธุรกิจระดับโลก ตั้งแต่การกระจายสินค้าถึงการตลาด",
    "유통 / 수출입 중개": "กระจายสินค้า / นายหน้าส่งออก–นำเข้า",

    "아시아 전역의 유통망을 통해 효율적인 수출입 및 중개 서비스를 제공합니다. 다양한 제품군에 대한 전문적인 수출입 컨설팅과 물류 솔루션을 함께 제공하여 글로벌 비즈니스를 지원합니다.":
      "ให้บริการนำเข้า–ส่งออกและนายหน้าอย่างมีประสิทธิภาพผ่านเครือข่ายทั่วเอเชีย พร้อมที่ปรึกษาและโซลูชันโลจิสติกส์สำหรับสินค้าหลากหลายประเภท",
    "자체 브랜드 제조 (OEM)": "การผลิตแบรนด์ของตนเอง (OEM)",
    "Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다. 품질 관리부터 제품 개발까지 전 과정을 책임집니다.":
      "สนับสนุนการเติบโตของแบรนด์ผ่านการผลิตและ OEM สำหรับ 4 แบรนด์: Hoid, Medifeed, InYourHeart, Sangsaeng ดูแลครบตั้งแต่คุณภาพจนถึงพัฒนาผลิตภัณฑ์",
    "글로벌 마케팅/브랜딩": "การตลาด/แบรนด์ดิ้งระดับโลก",
    "홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다. 브랜드 아이덴티티 개발부터 글로벌 시장 진출 전략까지 종합적인 마케팅 서비스를 지원합니다.":
      "โซลูชันแบรนด์ดิ้งระดับโลกผ่านโฮมช้อปปิ้งและดิจิทัลมาร์เก็ตติ้ง ตั้งแต่เอกลักษณ์แบรนด์จนถึงกลยุทธ์รุกตลาดต่างประเทศ",
    "의료관광 플랫폼": "แพลตฟอร์มท่องเที่ยวเชิงการแพทย์",
    "상생 브랜드를 통한 의료관광 플랫폼 운영으로 한국의 우수한 의료 서비스를 전 세계에 연결합니다. 태국, 베트남을 시작으로 아시아 전역으로 서비스를 확장하고 있습니다.":
      "ดำเนินแพลตฟอร์มท่องเที่ยวเชิงการแพทย์ผ่านแบรนด์ Sangsaeng เชื่อมบริการแพทย์ชั้นนำของเกาหลีสู่ทั่วโลก เริ่มที่ไทยและเวียดนาม ก่อนขยายทั่วเอเชีย",
    "앱 개발": "พัฒนาแอป",
    "의료/케어 통합 앱 개발로 디지털 헬스케어 솔루션을 제공합니다. 다국어 지원과 실시간 상담 기능을 통해 글로벌 사용자들에게 편리한 서비스를 제공합니다.":
      "พัฒนาแอปรวมการแพทย์/การดูแล เพื่อโซลูชันดิจิทัลเฮลธ์แคร์ รองรับหลายภาษาและสนทนาเรียลไทม์",
    "서비스 문의": "สอบถามบริการ",
    "브랜드 보기": "ดูแบรนด์",
    "상담 신청": "ขอคำปรึกษา",
    "상생 브랜드 보기": "ดูแบรนด์ Sangsaeng",
    "앱 정보 보기": "ดูข้อมูลแอป",
    "프로젝트 문의": "สอบถามโปรเจ็กต์",
    "더 자세한 상담이 필요하신가요?":
      "ต้องการคำปรึกษารายละเอียดมากขึ้นหรือไม่?",
    "전문 컨설턴트가 귀하의 비즈니스에 맞는 최적의 솔루션을 제안해드립니다.":
      "ที่ปรึกษามืออาชีพของเราจะเสนอทางออกที่เหมาะที่สุดให้ธุรกิจของคุณ",
    "무료 상담 신청": "ขอคำปรึกษาฟรี",

    // Brand Page
    "브랜드 소개": "แนะนำแบรนด์",
    "혁신적인 기술과 디자인을 바탕으로 한 FeedBack의 자체 브랜드들을 소개합니다.각 브랜드는 고유한 가치와 비전을 가지고 고객에게 최고의 경험을 제공합니다.":
      "ขอแนะนำแบรนด์ในเครือของ FeedBack ซึ่งสร้างสรรค์ขึ้นจากเทคโนโลยีล้ำสมัยและดีไซน์ที่เป็นเอกลักษณ์ แต่ละแบรนด์มีคุณค่าและวิสัยทัศน์เฉพาะตัว มอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าทุกคน",
    "브랜드 파트너십에 관심이 있으신가요?":
      "คุณสนใจเข้าร่วมเป็นพันธมิตรทางแบรนด์หรือไม่?",
    "FeedBack과 함께 혁신적인 브랜드를 만들어보세요. 기획부터 유통까지 전 과정을 지원하여 성공적인 브랜드 런칭을 도와드립니다.":
      "สร้างแบรนด์ที่โดดเด่นร่วมกับ FeedBack เราพร้อมสนับสนุนทุกขั้นตอนตั้งแต่การวางแผนจนถึงการจัดจำหน่าย เพื่อช่วยให้การเปิดตัวแบรนด์ของคุณประสบความสำเร็จ",
    "파트너십 문의하기": "สอบถามเกี่ยวกับการเป็นพันธมิตร",

    // Brand Detail Pages - Common
    "브랜드 목록으로 돌아가기": "กลับไปยังรายการแบรนด์",

    // Hoid Brand Page
    "hoid.hero.title": "ดีไซน์ที่เปลี่ยนอากาศรอบตัวคุณ",
    "hoid.hero.description":
      "แบรนด์เครื่องใช้ไฟฟ้าอัจฉริยะที่ผสานดีไซน์มินิมอลกับเทคโนโลยีล้ำสมัย เพื่อยกระดับคุณภาพอากาศในชีวิตประจำวันของคุณ",
    "hoid.hero.cta": "เยี่ยมชมเว็บไซต์ Hoid",
    "hoid.features.title": "เทคโนโลยีที่ล้ำสมัย",
    "hoid.features.subtitle":
      "สัมผัสประสบการณ์ใหม่ของการฟอกอากาศ ด้วยเทคโนโลยีล้ำสมัยภายใต้ดีไซน์มินิมอล",
    "hoid.homeshopping.date": "เปิดตัวเดือนสิงหาคม 2025",
    "hoid.homeshopping.heading": "เครื่องใช้ดีไซน์พรีเมียมที่บ้านคุณ",
    "hoid.homeshopping.description":
      "แบรนด์เครื่องใช้ดีไซน์พรีเมียม Hoid เตรียมเปิดตัวผ่านช่องทางโฮมช็อปปิ้ง พบกับดีไซน์อันเรียบหรู ประสิทธิภาพยอดเยี่ยม และเทคโนโลยีที่เปลี่ยนวิถีชีวิตของคุณ",
    "hoid.channels.title": "พบกับเราได้ทั่วประเทศ",
    "hoid.channels.subtitle":
      "เราใกล้ชิดคุณมากขึ้นผ่านช่องทางการจัดจำหน่ายที่หลากหลาย",
    "hoid.channel1.title": "โฮมช็อปปิ้ง",
    "hoid.channel1.description": "จำหน่ายโดยตรงผ่านช่องทางโฮมช็อปปิ้ง",
    "hoid.channel2.title": "สมาร์ทสโตร์",
    "hoid.channel2.description": "การดำเนินงานร้านค้าออนไลน์อย่างเป็นทางการ",
    "hoid.channel3.title": "ผู้ขายระดับโลก",
    "hoid.channel3.description": "ขยายตลาดสู่แพลตฟอร์มออนไลน์ต่างประเทศ",
    "hoid.channel4.title": "ร้านค้าปลีก",
    "hoid.channel4.description":
      "หาซื้อได้ที่ร้านเครื่องใช้ไฟฟ้าและห้างสรรพสินค้าทั่วประเทศ",
    "hoid.cta.title": "อากาศที่สะอาด ชีวิตที่ดีขึ้น",
    "hoid.cta.description":
      "สร้างบรรยากาศภายในบ้านที่สะอาดและสุขภาพดีไปกับ HOID",
    "hoid.cta.button": "ติดต่อเรา",
    "hoid.feature1.title": "เทคโนโลยี 3-in-1",
    "hoid.feature1.description":
      "รวมการฟอกอากาศ ลดความชื้น และฆ่าเชื้อไว้ในเครื่องเดียว",

    "hoid.feature2.title": "แผ่นกรอง HEPA14",
    "hoid.feature2.description":
      "กำจัดฝุ่นละอองขนาดเล็กได้ถึง 99.995% ระดับมาตรฐานทางการแพทย์",

    "hoid.feature3.title": "ดีไซน์มินิมอล",
    "hoid.feature3.description": "เรียบหรู ทันสมัย กลมกลืนกับทุกพื้นที่",

    "MOU 체결 현장": "บรรยากาศพิธีลงนาม MOU",
    "GLOBAL PARTNERSHIP": "ความร่วมมือระดับโลก",

    "hoid.partnership.title": "จุดเปลี่ยนใหม่",
    "hoid.partnership.subtitle": "สู่การขยายระดับโลก",
    "hoid.partnership.date": "16 สิงหาคม 2025",
    "hoid.partnership.mou":
      "ลงนาม MOU กับผู้ผลิตเครื่องฟอกอากาศรายใหญ่ที่สุดของจีน",
    "hoid.partnership.description":
      "HOID ได้ลงนามบันทึกความร่วมมือด้านการกระจายสินค้าและเทคโนโลยีกับผู้ผลิตเครื่องฟอกอากาศรายใหญ่ที่สุดของจีน เพื่อขยายธุรกิจครอบคลุมทั่วเอเชียและมอบอากาศที่สะอาดให้กับลูกค้ามากยิ่งขึ้น",

    "hoid.partnership.point1": "ขยายตลาดครอบคลุมทั่วเอเชีย",
    "hoid.partnership.point2": "ความร่วมมือด้านเทคโนโลยีและการพัฒนาร่วม",
    "hoid.partnership.point3": "ขยายเครือข่ายกระจายสินค้าระดับโลก",

    "HOME SHOPPING LAUNCH": "เปิดตัวบนโฮมช้อปปิ้ง",
    "hoid.homeshopping.title": "ขึ้นสู่หน้าจอทีวีแล้ว",
    "hoid.homeshopping.subtitle": "เครื่องใช้ไฟฟ้าดีไซน์พรีเมียม",

    // Asran Brand Page
    "asran.hero.tagline":
      "หม้อคุณภาพสูง รวมเทคโนโลยีเยอรมันและราคาที่สมเหตุสมผล",
    "asran.hero.description":
      "ผลิตจากสแตนเลส SUS410 และพื้นสามชั้น เพื่อการนำความร้อนที่ยอดเยี่ยมและความทนทานสูง ใช้งานได้ทั้งเตาแก๊สและเตาแม่เหล็กไฟฟ้า เหมาะสำหรับทุกห้องครัว",
    "asran.hero.cta": "เยี่ยมชมเว็บไซต์ ASRAN",
    "asran.features.title": "เทคโนโลยีพิเศษเฉพาะของ ASRAN",
    "asran.features.subtitle":
      "ผสานความแม่นยำของเทคโนโลยีเยอรมันกับความสะดวกสบายแบบเกาหลี",
    "asran.feature1.title": "สแตนเลส SUS410",
    "asran.feature1.description": "วัสดุพรีเมียม มั่นคง ทนทาน และปลอดภัย",

    "asran.feature1.detail1": "ต้านทานการกัดกร่อนและการเปลี่ยนสี",
    "asran.feature1.detail2": "ปรุงอาหารได้ถูกสุขลักษณะและปลอดภัย",
    "asran.feature1.detail3": "อายุการใช้งานยาวนานกึ่งถาวร",
    "asran.feature1.detail4": "ผิวเงาแบบกระจกระดับหรู",

    "asran.feature2.title": "โครงสร้างฐาน 3 ชั้น",
    "asran.feature2.description":
      "เพิ่มประสิทธิภาพพลังงานด้วยการนำความร้อนยอดเยี่ยม",

    "asran.feature2.detail1": "กระจายความร้อนสม่ำเสมอ",
    "asran.feature2.detail2": "ให้ความร้อนได้รวดเร็ว",
    "asran.feature2.detail3": "เปิด-ปิดฝาด้วยมือเดียวได้สะดวก",
    "asran.feature2.detail4": "ลดการสูญเสียความร้อน",

    "asran.feature3.title": "รองรับทุกแหล่งความร้อนอย่างสมบูรณ์",
    "asran.feature3.description": "ใช้งานได้กับทุกสภาพแวดล้อมของห้องครัว",

    "asran.feature3.detail1": "รองรับทุกแหล่งความร้อน",
    "asran.feature3.detail2": "เตาแก๊สและเตาแม่เหล็กไฟฟ้า",
    "asran.feature3.detail3": "ผิวภายนอกแบบไม่ติด ทำความสะอาดง่าย",
    "asran.feature3.detail4": "เตาไฟฟ้า",

    "asran.size1.title": "ชุดหม้อ 3 ชิ้น",
    "asran.size1.usage":
      "ตั้งแต่ปริมาณน้อยถึงมาก เหมาะทั้งทำอาหารคนเดียวและสำหรับครอบครัว",

    "asran.feature1.title · asran.feature2.title":
      "สแตนเลส SUS410 · โครงสร้างฐาน 3 ชั้น",

    "asran.size2.title": "หม้อแรงดัน",
    "asran.size2.usage": "ปรุงเร็วด้วยความดันสูง เพื่อรสชาติสดใหม่และกลมกล่อม",

    "asran.feature2.detail1 · asran.feature2.detail2":
      "กระจายความร้อนสม่ำเสมอ · ให้ความร้อนได้รวดเร็ว",

    "asran.size3.title": "ชุดกระทะ 3 ชิ้น",
    "asran.size3.usage": "เคลือบทนทาน ใช้งานได้ยาวนาน",

    "asran.feature3.detail1 · asran.feature3.detail2":
      "รองรับทุกแหล่งความร้อน · เตาแก๊สและเตาแม่เหล็กไฟฟ้า",

    "asran.reviews.title": "รีวิวจริงจากผู้ใช้จริง",
    "4.87/5.0": "4.87/5.0",
    "asran.review1":
      "คุ้มค่ามาก! ไม่คิดว่าจะได้คุณภาพระดับนี้ในราคานี้ พึงพอใจสุด ๆ",
    "asran.review1.author": "คุณ คิม○○",
    "asran.review2":
      "น้ำหนักหม้อเบามากจนประหลาดใจ! ไม่เปลืองแรงข้อมือ ทำอาหารสะดวกขึ้นเยอะ",
    "asran.review2.author": "คุณ พัก○○",
    "asran.review3":
      "หม้อหูเดี่ยวมีประโยชน์มากเวลาเตรียมอาหารทารก ร้อนเร็วและทำความสะอาดง่าย",
    "asran.review3.author": "คุณ อี○○",

    "asran.cta.subtitle ASRAN": "พบกับเทคโนโลยีเยอรมัน — ASRAN",
    "asran.benefit1.title": "ทำให้การทำอาหารสนุกขึ้น",
    "asran.benefit1.description":
      "การกระจายความร้อนที่สม่ำเสมอช่วยให้ทำอาหารได้ไม่พลาด เพิ่มความมั่นใจในการปรุง",

    "asran.benefit2.title": "ลดเวลาในการทำอาหาร",
    "asran.benefit2.description":
      "ให้ความร้อนรวดเร็วและกระจายอย่างมีประสิทธิภาพ ช่วยย่นเวลาในการปรุงอย่างชัดเจน",

    "asran.benefit3.title": "ห้องครัวสวยยิ่งขึ้น",
    "asran.benefit3.description":
      "ผิวเงาแบบกระจกและดีไซน์ทันสมัย ยกระดับบรรยากาศห้องครัวของคุณ",

    "asran.cta.title": "ประสบการณ์ทำอาหารระดับพรีเมียม",
    "asran.cta.subtitle": "พบกับเทคโนโลยีเยอรมัน",
    "asran.cta.description": "สัมผัสโลกใหม่ของการทำอาหารไปกับ ASRAN",
    "asran.cta.button": "ติดต่อเรา",

    // Medifeed Brand Page
    "medifeed.hero.title": "นิสัยเล็กๆ เพื่อสุขภาพที่ดีทุกวัน",
    "medifeed.hero.description":
      "แบรนด์ผลิตภัณฑ์เสริมอาหารเพื่อสุขภาพเหงือกและดวงตา ที่พัฒนาโดยยึดหลักความปลอดภัยและความสะดวกในการรับประทาน เพื่อสุขภาพที่ดีของทุกคน",
    "medifeed.features.title": "โซลูชันสุขภาพเฉพาะทาง",
    "medifeed.features.subtitle":
      "ผลิตภัณฑ์เสริมอาหารเฉพาะทางที่พัฒนาจากงานวิจัยทางวิทยาศาสตร์เพื่อดูแลสุขภาพในชีวิตประจำวัน",
    "medifeed.category1.title": "ดูแลสุขภาพเหงือก",
    "medifeed.category1.description": "ป้องกันโรคเหงือกและรักษาสุขภาพช่องปาก",
    "medifeed.category1.ingredient1": "โคเอนไซม์ Q10",
    "medifeed.category1.ingredient2": "วิตามินซีคอมเพล็กซ์",
    "medifeed.category1.ingredient3": "สังกะสีและซีลีเนียม",
    "medifeed.category1.ingredient4": "ได้รับการรับรองจาก GMP",
    "medifeed.category2.title": "ดูแลสุขภาพดวงตา",
    "medifeed.category2.description":
      "ปกป้องสายตาและลดความเมื่อยล้าจากการใช้งานหน้าจอ",
    "medifeed.category2.ingredient1": "ลูทีนและซีแซนทีน",
    "medifeed.category2.ingredient2": "สารสกัดบิลเบอร์รี่",
    "medifeed.category2.ingredient3": "กรดไขมันโอเมก้า-3",
    "medifeed.category2.ingredient4": "ช่วยกรองแสงสีฟ้า",
    "medifeed.value1.title": "ความปลอดภัยเป็นอันดับแรก",
    "medifeed.value1.description":
      "ผ่านการควบคุมคุณภาพอย่างเข้มงวดและได้รับการรับรอง GMP เพื่อความปลอดภัยสูงสุด",
    "medifeed.value2.title": "ใช้งานสะดวก",
    "medifeed.value2.description":
      "ออกแบบให้เหมาะกับไลฟ์สไตล์ของคนยุคใหม่ รับประทานง่ายและพกพาสะดวก",
    "medifeed.value3.title": "ราคาที่เข้าถึงได้",
    "medifeed.value3.description":
      "ดูแลสุขภาพได้อย่างต่อเนื่องด้วยราคาที่ย่อมเยา",
    "medifeed.cta.title": "สุขภาพดีในทุกวัน",
    "medifeed.cta.subtitle": "เริ่มจากนิสัยเล็กๆ",
    "medifeed.cta.description": "สร้างสุขภาพที่ดีขึ้นทุกวันไปกับ MEDIFEED",
    "medifeed.cta.button": "ขอคำปรึกษา",
    "medifeed.philosophy.title": "สร้างชีวิตประจำวันที่มีสุขภาพดี",
    "medifeed.philosophy.subtitle":
      "มอบโซลูชันด้านสุขภาพที่เชื่อถือได้ ด้วยความเชื่อมั่นในหลักฐานทางวิทยาศาสตร์และคุณภาพ",

    // LaCeras Brand Page
    "laceras.hero.title": "เมื่อความคลาสสิกและความโมเดิร์นมาบรรจบกัน",
    "laceras.hero.subtitle": "ความหรูหราแบบฝรั่งเศส",
    "laceras.hero.description":
      "แบรนด์กระเป๋าเดินทางหรูจากฝรั่งเศสที่ผสานงานฝีมือระดับช่างฝรั่งเศสเข้ากับดีไซน์ทันสมัย มอบประสบการณ์การเดินทางสุดพรีเมียม",
    "laceras.hero.cta": "เยี่ยมชมเว็บไซต์ La Ceras",
    "laceras.features.title": "งานฝีมือแบบฝรั่งเศส",
    "laceras.features.subtitle":
      "สัมผัสความหรูหราผ่านการออกแบบที่ประณีตและลงตัวในทุกรายละเอียด",
    "laceras.feature1.title": "โครงสร้างแบบไฮบริด",
    "laceras.feature1.description":
      "ผสานความยืดหยุ่นของ PP และความแข็งแรงของ PC เพื่อความเบาและทนทานสูงสุด",
    "laceras.feature2.title": "Sinking Ordinary Lock",
    "laceras.feature2.description":
      "ลดระดับตัวล็อกให้เสมอกับผิวกระเป๋าเพื่อลดรอยขีดข่วน",
    "laceras.feature3.title": "ล้อเงียบ & ระบบแบริ่งนิ่ง",
    "laceras.feature3.description":
      "ระบบล้อพรีเมียมเพื่อการเคลื่อนไหวที่ราบรื่นและเงียบในทุกทิศทาง",
    "laceras.heritage.title": "งานฝีมือฝรั่งเศสที่มีประวัติยาวนาน",
    "laceras.heritage.subtitle": "กว่า 70 ปีแห่งความเชี่ยวชาญ",
    "laceras.heritage.description":
      "ตั้งแต่ปี 1950 La Ceras ได้ผสมผสานความประณีตของฝรั่งเศสกับนวัตกรรมสมัยใหม่อย่างลงตัว สร้างมาตรฐานใหม่ของความหรูหราในการเดินทาง",

    "laceras.heritage.point1": "มีให้เลือกครบ 14, 20, 24 และ 28 นิ้ว",
    "laceras.heritage.point2": "ลดความเมื่อยล้าข้อมือด้วยลูกปืน 210D",
    "laceras.heritage.point3": "โครงสร้างแบบไฮบริด PP & PC",

    "laceras.travel.title": "จากธุรกิจสู่การเดินทางสุดหรู",
    "laceras.travel.subtitle": "โซลูชันการเดินทางที่สมบูรณ์แบบ",
    "laceras.travel.description":
      "La Ceras ไม่ใช่เพียงกระเป๋าเดินทาง แต่เป็นเพื่อนร่วมทางของคุณ ไม่ว่าจะเป็นทริปธุรกิจ ฮันนีมูน หรือท่องเที่ยวกับครอบครัว",
    "laceras.collection.title": "ตอบโจทย์ทุกสไตล์การเดินทาง",
    "laceras.collection.subtitle":
      "เลือกจากคอลเลกชันที่หลากหลายให้เหมาะกับความต้องการของคุณ",
    "laceras.heritage.heading":
      "ความเป็นเลิศแห่งงานฝีมือที่สืบทอดจากรุ่นสู่รุ่น",
    "laceras.travel.heading": "ทุกช่วงเวลาแห่งการเดินทางจะพิเศษยิ่งขึ้น",
    "laceras.travel.size": "ขนาดสินค้า",
    "laceras.travel.warranty": "การรับประกัน (ปี)",
    "laceras.travel.stores": "ร้านค้าทั่วโลก",
    "laceras.travel.rating": "คะแนนความพึงพอใจของลูกค้า",

    "laceras.collection1.title": "กระเป๋าถือขึ้นเครื่อง",
    "laceras.collection1.description":
      "ขนาดกะทัดรัด เหมาะสำหรับนำขึ้นเครื่องบิน",

    "laceras.collection2.title": "กระเป๋าแข็ง (Hard-Shell)",
    "laceras.collection2.description": "ขนาดกลาง เหมาะสำหรับการเดินทางระยะกลาง",

    "laceras.collection3.title": "กระเป๋าเดินทางขนาดใหญ่ (Trunk)",
    "laceras.collection3.description": "ขนาดใหญ่ เหมาะสำหรับการเดินทางระยะยาว",

    "laceras.cta.title": "เดินทางอย่างหรูหราไปกับ La Ceras",
    "laceras.cta.subtitle": "สัมผัสประสบการณ์แห่งความหรูหรา",
    "laceras.cta.description":
      "ยกระดับทุกการเดินทางของคุณด้วยกระเป๋าเดินทางพรีเมียมที่รังสรรค์ด้วยฝีมือช่างฝรั่งเศส",

    // Carvella Brand Page
    "carvella.hero.title": "ความประณีตในแบบช่างฝีมืออิตาเลียน",
    "carvella.hero.subtitle": "สู่ห้องครัวของคุณ",
    "carvella.hero.description":
      "แบรนด์เครื่องครัวพรีเมียมจากอิตาลีที่สืบทอดงานฝีมือดั้งเดิม ผสมผสานสแตนเลสคุณภาพสูงกับโครงสร้างหลายชั้นเพื่อการนำความร้อนและความทนทานที่ยอดเยี่ยม",
    "carvella.hero.cta": "เยี่ยมชมเว็บไซต์ Carvella",
    "carvella.features.title": "จิตวิญญาณแห่งช่างฝีมืออิตาเลียน",
    "carvella.features.subtitle":
      "เทคโนโลยีที่แม่นยำและงานฝีมือดั้งเดิมรวมกันเพื่อสร้างสรรค์เครื่องครัวระดับพรีเมียม",
    "carvella.feature1.title": "สแตนเลสพรีเมียม",
    "carvella.feature1.description":
      "ผลิตจากสแตนเลสเกรดสูงเพื่อความทนทานและสุขอนามัยสูงสุด",
    "carvella.feature2.title": "โครงสร้างพื้นหลายชั้น",
    "carvella.feature2.description":
      "ออกแบบระบบพื้นหลายชั้นเพื่อการกระจายความร้อนที่สม่ำเสมอและคงอุณหภูมิได้ยาวนาน",
    "carvella.feature3.title": "รองรับแหล่งความร้อนทุกประเภท",
    "carvella.feature3.description":
      "ใช้งานได้สมบูรณ์แบบทั้งเตาแม่เหล็กไฟฟ้า เตาแก๊ส และเตาไฟฟ้า",
    "carvella.heritage.title": "ศิลปะแห่งงานโลหะอิตาเลียน",
    "carvella.heritage.subtitle": "อาร์ติจิอานาโต",
    "carvella.heritage.heading": "เมื่อความละเอียดอ่อนและความหลงใหลมาบรรจบกัน",
    "carvella.heritage.description":
      "Carvella กำเนิดขึ้นจากภูมิภาคลอมบาร์เดีย ประเทศอิตาลี โดยสืบทอดเทคนิคงานโลหะดั้งเดิมของช่างฝีมือท้องถิ่น ทุกชิ้นผลิตด้วยความใส่ใจในรายละเอียดและความหลงใหลในศิลปะการทำอาหาร",
    "carvella.heritage.point1": "เทคนิคงานโลหะดั้งเดิมของอิตาลี",
    "carvella.heritage.point2": "ขัดเงาด้วยมือโดยช่างผู้เชี่ยวชาญ",
    "carvella.heritage.point3": "วัสดุพรีเมียมที่ผ่านการรับรองมาตรฐานยุโรป",
    "carvella.cooking.title": "ตั้งแต่มืออาชีพจนถึงคนรักการทำอาหาร",
    "carvella.cooking.subtitle": "คู่หูของทุกห้องครัว",
    "carvella.cooking.heading":
      "เครื่องมือที่สมบูรณ์แบบสำหรับการปรุงอาหารที่สมบูรณ์แบบ",
    "carvella.cooking.description":
      "Carvella ไม่ใช่เพียงเครื่องครัว แต่คือคู่หูแห่งศิลปะแห่งการปรุงอาหาร ออกแบบให้ตอบโจทย์ทั้งเชฟมืออาชีพและผู้ที่รักการทำอาหารในทุกบ้าน",
    "carvella.cooking.lineup": "ไลน์อัปผลิตภัณฑ์",
    "carvella.cooking.warranty": "รับประกันคุณภาพ",
    "carvella.cooking.recommendation": "แนะนำโดยเชฟมืออาชีพ",
    "carvella.cooking.satisfaction": "ความพึงพอใจของลูกค้า",
    "carvella.collection.title": "เครื่องครัวสำหรับทุกเมนู",
    "carvella.collection.subtitle":
      "ตอบโจทย์ทุกสไตล์และความต้องการด้วยผลิตภัณฑ์ที่หลากหลาย",
    "carvella.collection1.title": "หม้อพรีเมียม",
    "carvella.collection1.description":
      "คอลเลกชันหม้อหลายขนาดสำหรับทุกการใช้งาน",
    "carvella.collection2.title": "กระทะ",
    "carvella.collection2.description":
      "ซีรีส์กระทะที่ออกแบบมาเพื่อการนำความร้อนที่สมบูรณ์แบบ",
    "carvella.collection3.title": "ฝาหม้อแรงดัน",
    "carvella.collection3.description":
      "ฝาแรงดันอเนกประสงค์เพื่อการปรุงอาหารที่รวดเร็วและอร่อย",
    "carvella.collection4.title": "เซ็ตเครื่องครัว",
    "carvella.collection4.description": "ชุดครบเซ็ตเพื่อห้องครัวที่สมบูรณ์แบบ",
    "carvella.testimonial.title": "เสียงจากผู้เชี่ยวชาญ",
    "carvella.testimonial1":
      "หม้อของ Carvella ให้การกระจายความร้อนที่ยอดเยี่ยม ทำให้การทำอาหารง่ายขึ้นมาก เหมาะสำหรับครัวมืออาชีพอย่างแท้จริง",
    "carvella.testimonial1.author": "เชฟร้านอาหารอิตาเลียน",
    "carvella.testimonial2":
      "ผ่านการใช้งานกว่า 15 ปีโดยไม่ลดคุณภาพ นี่คือเครื่องครัวที่สะท้อนจิตวิญญาณแห่งช่างฝีมือจริงๆ",
    "carvella.testimonial2.author": "ครูสอนทำอาหาร",
    "carvella.testimonial3":
      "ใช้งานได้ยอดเยี่ยมทั้งเตาแก๊สและเตาแม่เหล็กไฟฟ้า เหมาะกับทั้งบ้านและร้านอาหาร",
    "carvella.testimonial3.author": "บล็อกเกอร์สายทำอาหาร",
    "carvella.cta.title": "Carvella",
    "carvella.cta.subtitle": "ประสบการณ์การทำอาหารระดับพรีเมียม",
    "carvella.cta.description":
      "สัมผัสความพิเศษของศิลปะแห่งการปรุงอาหารด้วยเครื่องครัวที่สร้างขึ้นจากจิตวิญญาณของช่างฝีมืออิตาเลียน",
    "carvella.good1.badge": "สินค้าแนะนำ 01",
    "carvella.good1.title": "เขียงสแตนเลส",
    "carvella.good1.description":
      "ผลิตจากสแตนเลส 304 ปลอดภัยต่อสุขภาพ ไม่ดูดซับกลิ่นหรือสี ทำความสะอาดง่ายและคงทน",
    "carvella.good1.detail1": "วัสดุสแตนเลส 304 ปลอดภัยต่ออาหาร",
    "carvella.good1.detail2": "ทนต่อการขีดข่วนและการเปลี่ยนรูป",
    "carvella.good1.detail3": "ล้างทำความสะอาดง่ายเพียงใช้น้ำ",
    "carvella.good1.detail4": "ฐานกันลื่นเพื่อการใช้งานที่มั่นคง",
    "carvella.good2.badge": "สินค้าแนะนำ 02",
    "carvella.good2.title": "ชุดมีด 6 ชิ้น",
    "carvella.good2.description":
      "ประกอบด้วยมีด กรรไกร และที่ปอกเปลือกในเซ็ตเดียว ครบทุกการใช้งานในครัว",
    "carvella.good2.detail1": "ชุดครบ 6 ชิ้น",
    "carvella.good2.detail2": "ด้ามจับตามหลักสรีรศาสตร์ จับถนัดมือ",
    "carvella.good2.detail3": "คมกริบและตัดได้แม่นยำ",
    "carvella.good2.detail4": "เหมาะสำหรับทั้งบ้านและร้านอาหาร",

    // InYourHeart Brand Page
    "inyourheart.hero.title": "ใส่ความรู้สึกลงบนผิวของคุณ",
    "inyourheart.hero.description":
      "แบรนด์สกินแคร์พรีเมียมจากเกาหลีที่ผสานปรัชญาความงามแบบคลีนบิวตี้เข้ากับดีไซน์แพ็กเกจจิ้งสุดละเมียด เพื่อสร้างความงามที่ทั้งอ่อนโยนและลึกซึ้ง",
    "inyourheart.values.title": "ปรัชญาความงามที่มาพร้อมความรู้สึก",
    "inyourheart.values.subtitle": "อ่อนโยนต่อผิวและอบอุ่นต่อใจในเวลาเดียวกัน",
    "inyourheart.category1.title": "คลีนฟอร์มูล่า",
    "inyourheart.category1.description":
      "ใช้เฉพาะส่วนผสมที่ปลอดภัยและเป็นมิตรต่อสิ่งแวดล้อม เพื่อความงามที่ยั่งยืน",
    "inyourheart.category2.title": "ดีไซน์ที่เต็มไปด้วยอารมณ์",
    "inyourheart.category2.description":
      "ออกแบบบรรจุภัณฑ์ให้สวยงามและให้ความรู้สึกพิเศษทุกครั้งที่ใช้งาน",
    "inyourheart.category3.title": "K-Beauty ระดับโลก",
    "inyourheart.category3.description":
      "เผยแพร่เทคโนโลยีและนวัตกรรมความงามของเกาหลีสู่ตลาดโลก",
    "inyourheart.cta.title": "ความงามที่สัมผัสหัวใจคุณ",
    "inyourheart.cta.subtitle": "งดงามจากภายในสู่ภายนอก",
    "inyourheart.cta.description":
      "เริ่มต้นการเดินทางแห่งความงามไปกับ IN YOUR HEART",
    "inyourheart.cta.button": "ติดต่อเรา",

    // Sangsaeng Brand Page
    "sangsaeng.hero.title": "เชื่อมโยงการแพทย์เกาหลีสู่ระดับโลก",
    "sangsaeng.hero.description":
      "แพลตฟอร์มสุขภาพครบวงจรที่เชื่อมโยงบริการทางการแพทย์ของเกาหลีกับทั่วโลก ตั้งแต่เมดิคัลทัวร์ไปจนถึงบริการเฮลท์แคร์ดิจิทัล",
    "sangsaeng.hero.cta": "เยี่ยมชมเว็บไซต์ Sangsaeng",
    "sangsaeng.services.title": "ระบบนิเวศด้านเฮลท์แคร์ระดับโลก",
    "sangsaeng.services.subtitle":
      "ให้บริการครบวงจรตั้งแต่การแพทย์จนถึงการสร้างแบรนด์",
    "sangsaeng.medical.title": "Sangsaeng Medical",
    "sangsaeng.medical.subtitle": "บริการสุขภาพเฉพาะทาง",
    "sangsaeng.medical.description":
      "แบรนด์เฮลท์แคร์ที่ให้บริการตรวจสุขภาพแบบเฉพาะบุคคลและโปรแกรมดูแลโรคเรื้อรัง",
    "sangsaeng.medical.benefit1": "แพ็กเกจตรวจสุขภาพเฉพาะบุคคล",
    "sangsaeng.medical.benefit2": "บริการปรึกษาแพทย์ผู้เชี่ยวชาญ",
    "sangsaeng.medical.benefit3": "โปรแกรมจัดการโรคเรื้อรัง",
    "sangsaeng.medical.benefit4": "โซลูชันเวชศาสตร์ป้องกัน",
    "sangsaeng.platform.title": "Sangsaeng Platform",
    "sangsaeng.platform.subtitle": "แพลตฟอร์มสุขภาพดิจิทัล",
    "sangsaeng.platform.description":
      "แอปพลิเคชันเฮลท์แคร์หลายภาษาที่เชื่อมโยงบริการทางการแพทย์และการท่องเที่ยวเข้าด้วยกัน",
    "sangsaeng.platform.benefit1": "บริการล่ามทางการแพทย์หลายภาษา",
    "sangsaeng.platform.benefit2": "ระบบจองและจัดการโรงพยาบาล",
    "sangsaeng.platform.benefit3": "แพ็กเกจท่องเที่ยวเชิงการแพทย์",
    "sangsaeng.platform.benefit4": "บริการช่วยเหลือฉุกเฉินตลอด 24 ชั่วโมง",
    "sangsaeng.branding.title": "Sangsaeng Branding",
    "sangsaeng.branding.subtitle": "กลยุทธ์การตลาดทางการแพทย์ระดับโลก",
    "sangsaeng.branding.description":
      "องค์กรด้านคอนเทนต์ เมต้าแอด และการร่วมมือกับอินฟลูเอนเซอร์ระดับโลก",
    "sangsaeng.branding.benefit1": "มาร์เก็ตติ้งคอนเทนต์ทางการแพทย์",
    "sangsaeng.branding.benefit2": "แคมเปญแบรนด์หลายภาษา",
    "sangsaeng.branding.benefit3": "ความร่วมมือกับอินฟลูเอนเซอร์ระดับโลก",
    "sangsaeng.branding.benefit4": "โซลูชันมาร์เก็ตติ้งดิจิทัลครบวงจร",
    "sangsaeng.cta.title1": "อนาคตของการแพทย์เกาหลี",
    "sangsaeng.cta.title2": "ที่เชื่อมโยงกับโลก",
    "sangsaeng.cta.description":
      "สัมผัสประสบการณ์การแพทย์ที่ปลอดภัยและเชื่อถือได้กับ Sangsaeng",
    "sangsaeng.cta.button": "ติดต่อเรา",

    // Footer bottom
    "footer.company": "ข้อมูลบริษัท",
    "footer.services": "บริการ",
    "footer.contact": "ติดต่อ",
    "footer.follow": "ติดตาม",
    "footer.copyright": "© 2024 FeedBack สงวนลิขสิทธิ์",
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
