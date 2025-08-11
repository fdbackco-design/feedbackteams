import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'KR' | 'EN';

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  KR: {
    // Navigation
    'nav.home': '회사소개',
    'nav.services': '서비스',
    'nav.brands': '브랜드',
    'nav.news': '뉴스',
    'nav.contact': '문의하기',
    
    // Hero Section
    'hero.title': '브랜드와 시장을 연결하는',
    'hero.subtitle': '유통 플랫폼, FEEDBACK',
    'hero.description': '유통·브랜드·마케팅·제조가 하나로 연결되는 상생 플랫폼',
    'hero.cta.consultation': '서비스 둘러보기',
    'hero.cta.proposal': '소개 영상 보기',
    
    // Services Section
    'services.title': '서비스',
    'services.medical.title': '의료관광 중개업',
    'services.medical.description': '한국의 우수한 의료진과 해외 환자를 연결하는 전문 중개 서비스를 제공합니다.',
    'services.app.title': '다국어 앱 개발',
    'services.app.description': '글로벌 시장을 타겟으로 한 모바일 애플리케이션 개발 및 현지화 서비스를 제공합니다.',
    'services.brand.title': '브랜드 유통',
    'services.brand.description': '아시아 지역 브랜드의 글로벌 진출을 위한 유통 및 마케팅 솔루션을 제공합니다.',
    'services.consulting.title': '마케팅 컨설팅',
    'services.consulting.description': '시장 분석부터 브랜딩까지, 종합적인 마케팅 전략 수립을 지원합니다.',
    
    // Additional Services
    'services.distribution.title': '글로벌 유통/물류',
    'services.distribution.description': '아시아 유통망 구축과 수출입 통관 대행, 물류 최적화를 통해 글로벌 시장 진출을 지원합니다.',
    'services.distribution.features.0': '아시아 유통망 구축',
    'services.distribution.features.1': '수출입 통관 대행',
    'services.distribution.features.2': '물류 최적화 솔루션',
    'services.manufacturing.title': '자체 브랜드 제조 (OEM)',
    'services.manufacturing.description': 'Hoid, Medifeed, InYourHeart, 상생 등 4개 자체 브랜드의 제조 및 OEM 생산을 통해 브랜드 성장을 지원합니다.',
    'services.manufacturing.features.0': '4개 자체 브랜드 운영',
    'services.manufacturing.features.1': 'OEM/ODM 제조',
    'services.manufacturing.features.2': '품질관리 시스템',
    'services.marketing.title': '글로벌 마케팅/브랜딩',
    'services.marketing.description': '홈쇼핑 연계와 디지털 마케팅을 통한 글로벌 브랜딩 솔루션을 제공합니다.',
    'services.marketing.features.0': '홈쇼핑 연계 마케팅',
    'services.marketing.features.1': '디지털 마케팅',
    'services.marketing.features.2': '글로벌 진출 전략',
    'services.medical.features.0': '메디컬 투어리즘',
    'services.medical.features.1': '병원 네트워크',
    'services.medical.features.2': '다국어 플랫폼',
    'services.app.features.0': '의료/케어 통합 앱',
    'services.app.features.1': '다국어 지원',
    'services.app.features.2': '실시간 상담',
    
    // Brands Section
    'brands.hoid.category': '미니멀 가전 브랜드',
    'brands.hoid.slogan': '공기 속까지 바꾸는 디자인',
    'brands.hoid.description': '공기청정기, 제습기 등 미니멀한 디자인과 첨단 기술이 만나 일상의 공기질을 혁신하는 스마트 가전 브랜드입니다.',
    'brands.hoid.products.0': '공기청정기',
    'brands.hoid.products.1': '제습기',
    'brands.hoid.products.2': '3-in-1 기술',
    'brands.hoid.products.3': 'HEPA14 필터',
    'brands.medifeed.category': '기능성 영양제 브랜드',
    'brands.medifeed.slogan': '매일을 지키는 작은 습관',
    'brands.medifeed.description': '잇몸과 눈 건강을 중심으로 한 기능성 영양제 브랜드로, 실용성과 안전성을 바탕으로 건강 솔루션을 제공합니다.',
    'brands.medifeed.products.0': '잇몸 건강',
    'brands.medifeed.products.1': '눈 건강',
    'brands.medifeed.products.2': '기능성 영양제',
    'brands.medifeed.products.3': 'GMP 인증',
    'brands.inyourheart.category': '감성 스킨케어 브랜드',
    'brands.inyourheart.slogan': '피부에 감성을 입히다',
    'brands.inyourheart.description': '클린뷰티 철학과 감성적인 패키지 디자인으로 글로벌 K-뷰티 시장을 선도하는 프리미엄 스킨케어 브랜드입니다.',
    'brands.inyourheart.products.0': '클린 포뮬러',
    'brands.inyourheart.products.1': '감성 패키지',
    'brands.inyourheart.products.2': '글로벌 K-뷰티',
    'brands.inyourheart.products.3': '세라마이드',
    'brands.sangsaeng.category': '의료관광 플랫폼',
    'brands.sangsaeng.slogan': 'WE CONNECT KOREAN MEDICAL SERVICES TO THE WORLD',
    'brands.sangsaeng.description': '메디컬 투어리즘부터 글로벌 헬스케어 플랫폼까지, 한국의 우수한 의료 서비스를 전 세계에 연결하는 종합 의료 플랫폼입니다.',
    'brands.sangsaeng.products.0': '의료관광',
    'brands.sangsaeng.products.1': '헬스케어 플랫폼',
    'brands.sangsaeng.products.2': '다국어 앱',
    'brands.sangsaeng.products.3': '병원 네트워크',
    
    // News Section
    'news.title': '뉴스',
    
    // Stats Section
    'stats.title': '성장하는',
    'stats.subtitle': 'OUR ACHIEVEMENTS',
    'stats.description': '글로벌 비즈니스 파트너로서 꾸준히 성장하고 있는 FeedBack의 주요 성과를 확인해보세요.',
    'stats.since': '설립년도',
    'stats.since.sub': 'Since',
    'stats.brands': '자체 브랜드',
    'stats.brands.sub': 'Own Brands',
    'stats.countries': '파트너 국가',
    'stats.countries.sub': 'Countries',
    'stats.hospitals': '병원 제휴',
    'stats.hospitals.sub': 'Hospitals',
    
    // CTA Section
    'cta.title': '글로벌 진출을 꿈꾸시나요?',
    'cta.description': 'FeedBack과 함께 아시아를 넘어 세계 시장으로 나아가세요.\n전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다.',
    'cta.consultation': '무료 상담 신청',
    'cta.proposal': '사업 제안서 보기',
    
    // Contact Page
    'contact.title': '문의하기',
    'contact.subtitle': '궁금한 점이 있으시면 언제든지 연락주세요.',
    'contact.form.name': '이름',
    'contact.form.name.placeholder': '이름을 입력해주세요',
    'contact.form.email': '이메일',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.phone': '연락처',
    'contact.form.phone.placeholder': '010-0000-0000',
    'contact.form.company': '회사명',
    'contact.form.company.placeholder': '회사명을 입력해주세요',
    'contact.form.service': '관심 서비스',
    'contact.form.service.placeholder': '서비스를 선택해주세요',
    'contact.form.service.medical': '의료관광 중개업',
    'contact.form.service.app': '다국어 앱 개발',
    'contact.form.service.brand': '브랜드 유통',
    'contact.form.service.consulting': '마케팅 컨설팅',
    'contact.form.message': '문의 내용',
    'contact.form.message.placeholder': '문의하실 내용을 자세히 적어주세요...',
    'contact.form.privacy': '개인정보 수집 및 이용에 동의합니다.',
    'contact.form.privacy.link': '자세히 보기',
    'contact.form.submit': '문의 보내기',
    'contact.map.title': '오시는 길',
    'contact.info.address': '주소',
    'contact.info.phone': '전화',
    'contact.info.email': '이메일',
    'contact.info.hours': '운영시간',
    'contact.info.hours.value': '월-금 09:00-18:00',
    
    // Footer
    'footer.company': '회사 정보',
    'footer.services': '서비스',
    'footer.contact': '연락처',
    'footer.follow': '팔로우',
    'footer.copyright': '© 2024 FeedBack. All rights reserved.',
  },
  EN: {
    // Navigation
    'nav.home': 'About',
    'nav.services': 'Services',
    'nav.brands': 'Brands',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Distribution Platform Connecting',
    'hero.subtitle': 'Brands and Markets, FEEDBACK',
    'hero.description': 'A mutual growth platform where distribution, branding, marketing, and manufacturing connect as one',
    'hero.cta.consultation': 'Explore Services',
    'hero.cta.proposal': 'Watch Introduction Video',
    
    // Services Section
    'services.title': 'Services',
    'services.medical.title': 'Medical Tourism Brokerage',
    'services.medical.description': 'We provide professional brokerage services connecting Korea\'s excellent medical staff with overseas patients.',
    'services.app.title': 'Multilingual App Development',
    'services.app.description': 'We provide mobile application development and localization services targeting the global market.',
    'services.brand.title': 'Brand Distribution',
    'services.brand.description': 'We provide distribution and marketing solutions for Asian brands to enter the global market.',
    'services.consulting.title': 'Marketing Consulting',
    'services.consulting.description': 'We support comprehensive marketing strategy development from market analysis to branding.',
    
    // Additional Services
    'services.distribution.title': 'Global Distribution & Logistics',
    'services.distribution.description': 'We support global market expansion through Asian distribution network establishment, import/export customs clearance, and logistics optimization.',
    'services.distribution.features.0': 'Asian Distribution Network',
    'services.distribution.features.1': 'Import/Export Customs',
    'services.distribution.features.2': 'Logistics Optimization',
    'services.manufacturing.title': 'Private Label Manufacturing (OEM)',
    'services.manufacturing.description': 'We support brand growth through manufacturing and OEM production of 4 private brands: Hoid, Medifeed, InYourHeart, and Sangsaeng.',
    'services.manufacturing.features.0': '4 Private Brands',
    'services.manufacturing.features.1': 'OEM/ODM Manufacturing',
    'services.manufacturing.features.2': 'Quality Management',
    'services.marketing.title': 'Global Marketing & Branding',
    'services.marketing.description': 'We provide global branding solutions through home shopping partnerships and digital marketing.',
    'services.marketing.features.0': 'Home Shopping Marketing',
    'services.marketing.features.1': 'Digital Marketing',
    'services.marketing.features.2': 'Global Expansion Strategy',
    'services.medical.features.0': 'Medical Tourism',
    'services.medical.features.1': 'Hospital Network',
    'services.medical.features.2': 'Multilingual Platform',
    'services.app.features.0': 'Medical/Care Integrated App',
    'services.app.features.1': 'Multilingual Support',
    'services.app.features.2': 'Real-time Consultation',
    
    // Brands Section
    'brands.hoid.category': 'Minimal Home Appliances',
    'brands.hoid.slogan': 'Design that Changes the Air Itself',
    'brands.hoid.description': 'Smart home appliance brand that revolutionizes daily air quality through minimal design and cutting-edge technology in air purifiers and dehumidifiers.',
    'brands.hoid.products.0': 'Air Purifier',
    'brands.hoid.products.1': 'Dehumidifier',
    'brands.hoid.products.2': '3-in-1 Technology',
    'brands.hoid.products.3': 'HEPA14 Filter',
    'brands.medifeed.category': 'Functional Supplements',
    'brands.medifeed.slogan': 'Small Habits that Protect Every Day',
    'brands.medifeed.description': 'Functional supplement brand focusing on gum and eye health, providing health solutions based on practicality and safety.',
    'brands.medifeed.products.0': 'Gum Health',
    'brands.medifeed.products.1': 'Eye Health',
    'brands.medifeed.products.2': 'Functional Supplements',
    'brands.medifeed.products.3': 'GMP Certified',
    'brands.inyourheart.category': 'Emotional Skincare',
    'brands.inyourheart.slogan': 'Dressing the Skin with Emotion',
    'brands.inyourheart.description': 'Premium skincare brand leading the global K-beauty market with clean beauty philosophy and emotional package design.',
    'brands.inyourheart.products.0': 'Clean Formula',
    'brands.inyourheart.products.1': 'Emotional Package',
    'brands.inyourheart.products.2': 'Global K-Beauty',
    'brands.inyourheart.products.3': 'Ceramide',
    'brands.sangsaeng.category': 'Medical Tourism Platform',
    'brands.sangsaeng.slogan': 'WE CONNECT KOREAN MEDICAL SERVICES TO THE WORLD',
    'brands.sangsaeng.description': 'Comprehensive medical platform connecting Korea\'s excellent medical services to the world, from medical tourism to global healthcare platform.',
    'brands.sangsaeng.products.0': 'Medical Tourism',
    'brands.sangsaeng.products.1': 'Healthcare Platform',
    'brands.sangsaeng.products.2': 'Multilingual App',
    'brands.sangsaeng.products.3': 'Hospital Network',
    

    
    // News Section
    'news.title': 'News',
    
    // Stats Section
    'stats.title': 'Growing',
    'stats.subtitle': 'OUR ACHIEVEMENTS',
    'stats.description': 'Check out the key achievements of FeedBack, which continues to grow as a global business partner.',
    'stats.since': 'Established',
    'stats.since.sub': 'Since',
    'stats.brands': 'Own Brands',
    'stats.brands.sub': 'Own Brands',
    'stats.countries': 'Partner Countries',
    'stats.countries.sub': 'Countries',
    'stats.hospitals': 'Hospital Partners',
    'stats.hospitals.sub': 'Hospitals',
    
    // CTA Section
    'cta.title': 'Dreaming of Global Expansion?',
    'cta.description': 'Move beyond Asia to the global market with FeedBack.\nOur professional consultants will propose customized solutions.',
    'cta.consultation': 'Free Consultation',
    'cta.proposal': 'View Business Proposal',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'If you have any questions, please feel free to contact us anytime.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Please enter your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+82-10-0000-0000',
    'contact.form.company': 'Company',
    'contact.form.company.placeholder': 'Please enter your company name',
    'contact.form.service': 'Service of Interest',
    'contact.form.service.placeholder': 'Please select a service',
    'contact.form.service.medical': 'Medical Tourism Brokerage',
    'contact.form.service.app': 'Multilingual App Development',
    'contact.form.service.brand': 'Brand Distribution',
    'contact.form.service.consulting': 'Marketing Consulting',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Please write your inquiry in detail...',
    'contact.form.privacy': 'I agree to the collection and use of personal information.',
    'contact.form.privacy.link': 'View Details',
    'contact.form.submit': 'Send Inquiry',
    'contact.map.title': 'Directions',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',
    'contact.info.hours.value': 'Mon-Fri 09:00-18:00',
    
    // Footer
    'footer.company': 'Company Info',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow',
    'footer.copyright': '© 2024 FeedBack. All rights reserved.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('KR');

  const t = (key: string): string => {
    return (translations[currentLanguage] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};