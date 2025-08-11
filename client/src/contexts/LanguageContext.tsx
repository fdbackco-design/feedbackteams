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
    'nav.home': '홈',
    'nav.services': '서비스',
    'nav.brands': '브랜드',
    'nav.news': '뉴스',
    'nav.contact': '문의하기',
    
    // Hero Section
    'hero.title': '글로벌 비즈니스 파트너',
    'hero.subtitle': 'FeedBack',
    'hero.description': '아시아를 넘어 세계로 나아가는 기업들의 든든한 파트너가 되겠습니다.',
    'hero.cta.consultation': '무료 상담 신청',
    'hero.cta.proposal': '사업 제안서 보기',
    
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
    
    // Brands Section
    'brands.category.medical': '의료관광',
    'brands.category.health': '건강식품',
    'brands.category.beauty': '뷰티',
    'brands.medifeed.slogan': '건강한 삶의 시작',
    'brands.medifeed.description': '전문 의료진과 함께하는 맞춤형 건강관리 솔루션',
    'brands.sangsaeng.slogan': '자연이 주는 선물',
    'brands.sangsaeng.description': '프리미엄 자연 원료로 만든 건강 보조식품',
    'brands.imyour.slogan': '당신만의 뷰티',
    'brands.imyour.description': '개인 맞춤형 뷰티 케어 제품과 서비스',
    'brands.cta': '브랜드 자세히 보기',
    
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
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.brands': 'Brands',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Global Business Partner',
    'hero.subtitle': 'FeedBack',
    'hero.description': 'We will be a reliable partner for companies expanding from Asia to the world.',
    'hero.cta.consultation': 'Free Consultation',
    'hero.cta.proposal': 'View Business Proposal',
    
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
    
    // Brands Section
    'brands.category.medical': 'Medical Tourism',
    'brands.category.health': 'Health Food',
    'brands.category.beauty': 'Beauty',
    'brands.medifeed.slogan': 'The Beginning of Healthy Life',
    'brands.medifeed.description': 'Customized healthcare solutions with professional medical staff',
    'brands.sangsaeng.slogan': 'Nature\'s Gift',
    'brands.sangsaeng.description': 'Health supplements made with premium natural ingredients',
    'brands.imyour.slogan': 'Your Own Beauty',
    'brands.imyour.description': 'Personalized beauty care products and services',
    'brands.cta': 'View Brand Details',
    
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