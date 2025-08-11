import { motion } from "framer-motion";
import { Factory, ShoppingBag, CheckCircle, ArrowRight, ArrowLeft, ArrowDown, ArrowUp } from "lucide-react";

const B2B2C_Hub = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-stretch">
          {/* B2B Card - Left */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Factory className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">B2B</div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              제조사의 시장 진입을 가속하는 전략적 유통 파트너
            </h3>
            
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">전국·글로벌 유통망을 통한 안정적인 판로 제공</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">홈쇼핑, 온라인 마켓, 해외 수출 등 다각화된 판매 채널 확보</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">브랜드 포지셔닝과 제품 가치에 맞춘 맞춤형 유통 전략</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">계약, 물류, 마케팅까지 원스톱 지원</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                글로벌 진출
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                안정적인 판로
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                전략적 제휴
              </span>
            </div>
          </div>

          {/* Center Connector Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-full flex flex-col justify-center items-center relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            {/* Animated flowing lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-1">
                {/* Background line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full"></div>
                
                {/* Animated flowing gradient bars */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600 to-transparent rounded-full"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-500 to-transparent rounded-full"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                  }}
                />
              </div>
              
              {/* Left Arrow */}
              <div className="absolute left-4">
                <ArrowLeft className="w-6 h-6 text-slate-600" />
              </div>
              
              {/* Right Arrow */}
              <div className="absolute right-4">
                <ArrowRight className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center z-10 bg-white px-6 py-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "B2B와 B2C를 잇는 유통 허브, 피드백"
              </h3>
              <p className="text-gray-600 leading-relaxed">
                제조사의 제품이 소비자에게 도달하기까지,<br />
                피드백은 모든 과정을 설계하고 실행합니다.
              </p>
            </div>
          </div>

          {/* B2C Card - Right */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <ShoppingBag className="w-7 h-7 text-purple-600" />
              </div>
              <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">B2C</div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              소비자에게 직접 전달되는 차별화된 브랜드 경험
            </h3>
            
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Hoid, Medifeed, InYourHeart 등 자체 브랜드 운영</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">제품 기획부터 패키징, 콘텐츠까지 완성된 브랜드 경험 제공</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">온라인·오프라인 통합 마케팅으로 인지도와 충성도 강화</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">고객 피드백 기반의 제품 개선과 신제품 개발</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                브랜드 경험
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                소비자 신뢰
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                프리미엄 품질
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Stacked */}
        <div className="lg:hidden space-y-8">
          {/* B2B Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">B2B</div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              제조사의 시장 진입을 가속하는 전략적 유통 파트너
            </h3>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">전국·글로벌 유통망을 통한 안정적인 판로 제공</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">홈쇼핑, 온라인 마켓, 해외 수출 등 다각화된 판매 채널 확보</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">브랜드 포지셔닝과 제품 가치에 맞춘 맞춤형 유통 전략</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">계약, 물류, 마케팅까지 원스톱 지원</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                글로벌 진출
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                안정적인 판로
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                전략적 제휴
              </span>
            </div>
          </div>

          {/* Mobile Connector */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center relative overflow-hidden">
            {/* Vertical animated flowing lines */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 flex flex-col items-center justify-center">
              <div className="relative h-full w-1">
                {/* Background line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-300 to-transparent rounded-full"></div>
                
                {/* Animated flowing gradient bars */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-600 to-transparent rounded-full"
                  animate={{
                    y: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-500 to-transparent rounded-full"
                  animate={{
                    y: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                  }}
                />
              </div>
              
              {/* Up Arrow */}
              <div className="absolute top-4">
                <ArrowUp className="w-5 h-5 text-slate-600" />
              </div>
              
              {/* Down Arrow */}
              <div className="absolute bottom-4">
                <ArrowDown className="w-5 h-5 text-slate-600" />
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 bg-white px-4 py-6 rounded-xl mx-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                "B2B와 B2C를 잇는 유통 허브, 피드백"
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                제조사의 제품이 소비자에게 도달하기까지,<br />
                피드백은 모든 과정을 설계하고 실행합니다.
              </p>
            </div>
          </div>

          {/* B2C Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
                <ShoppingBag className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">B2C</div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              소비자에게 직접 전달되는 차별화된 브랜드 경험
            </h3>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Hoid, Medifeed, InYourHeart 등 자체 브랜드 운영</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">제품 기획부터 패키징, 콘텐츠까지 완성된 브랜드 경험 제공</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">온라인·오프라인 통합 마케팅으로 인지도와 충성도 강화</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">고객 피드백 기반의 제품 개선과 신제품 개발</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                브랜드 경험
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                소비자 신뢰
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                프리미엄 품질
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2B2C_Hub;