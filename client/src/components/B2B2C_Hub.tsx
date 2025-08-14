import { motion } from "framer-motion";
import {
  Factory,
  ShoppingBag,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Users,
  Truck,
  ShoppingCart,
} from "lucide-react";
import sky5Video from "../assets/sky5.mp4";

const B2B2C_Hub = () => {
  return (
    <section className="relative py-8 sm:py-12 lg:py-20 min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={sky5Video}
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h2
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3"
            style={{ lineHeight: "1.2" }}
          >
            <span className="font-normal">제조사부터 소비자까지</span>, <br />
            완전한 유통 생태계를 구축합니다.
          </h2>
        </div>

        {/* Flow Layout */}
        <div className="relative">
          {/* Desktop Flow: Horizontal */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Step 1: B2B (제조사) */}
            <motion.div
              className="flex-1 max-w-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 relative">
                <div className="w-16 h-16 bg-[#0F4C82]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Factory className="w-8 h-8 text-[#0F4C82]" />
                </div>
                <div className="text-center">
                  <h3 className="b2b2c-card-title text-black mb-4">
                    B2B 제조사
                  </h3>
                  <p className="b2b2c-card-description text-gray-600 mb-6">
                    품질 높은 제품을 생산하는 제조사와 전략적 파트너십을
                    구축합니다
                  </p>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>전문 제조 파트너</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>품질 관리 시스템</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>OEM/ODM 생산</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              className="flex-shrink-0 mx-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <ArrowLeft className="w-8 h-8 text-[#0F4C82]" />
                <span className="text-xs text-white mt-2">유통 연결</span>
              </div>
            </motion.div>

            {/* Step 2: FeedBack (유통 허브) */}
            <motion.div
              className="flex-1 max-w-sm"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0F4C82] rounded-2xl shadow-xl p-8 text-white relative">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="b2b2c-card-title mb-4">FeedBack 유통 허브</h3>
                  <p className="b2b2c-card-description text-white mb-6">
                    전국·글로벌 유통망을 통해 제품을 소비자에게 전달합니다
                  </p>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                      <span>전국 유통망</span>
                    </div>
                    <div className="flex items-center text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                      <span>물류 최적화</span>
                    </div>
                    <div className="flex items-center text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                      <span>브랜드 마케팅</span>
                    </div>
                  </div>
                </div>

                {/* Animated spreading effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {/* Gentle pulse from center */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
                    }}
                    animate={{
                      scale: [0.8, 1.8, 0.8],
                      opacity: [0.7, 0.2, 0.7],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Subtle horizontal flow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent"
                    animate={{
                      scaleX: [0.5, 1.5, 0.5],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              className="flex-shrink-0 mx-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <ArrowRight className="w-8 h-8 text-[#0F4C82]" />
                <span className="text-xs text-white mt-2">소비자 전달</span>
              </div>
            </motion.div>

            {/* Step 3: B2C (소비자) */}
            <motion.div
              className="flex-1 max-w-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                <div className="w-16 h-16 bg-[#0F4C82]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-8 h-8 text-[#0F4C82]" />
                </div>
                <div className="text-center">
                  <h3 className="b2b2c-card-title text-black mb-4">
                    B2C 소비자
                  </h3>
                  <p className="b2b2c-card-description text-gray-600 mb-6">
                    다양한 채널을 통해 소비자에게 최고의 제품과 서비스를
                    제공합니다
                  </p>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>온라인·오프라인</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>홈쇼핑 연계</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>글로벌 진출</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Flow: Vertical - Compact */}
          <div className="lg:hidden space-y-4">
            {/* Step 1: B2B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-[#0F4C82]/10 rounded-lg flex items-center justify-center mr-3">
                    <Factory className="w-4 h-4 text-[#0F4C82]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-black">
                      B2B 제조사
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  품질 높은 제품을 생산하는 제조사와 전략적 파트너십을
                  구축합니다
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    전문 제조
                  </span>
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    품질 관리
                  </span>
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    OEM/ODM
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-[#0F4C82]" />
            </div>

            {/* Step 2: FeedBack Hub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0F4C82] rounded-lg shadow-lg p-3 sm:p-4 text-white">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold">
                      FeedBack 유통 허브
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/80 mb-2">
                  전국·글로벌 유통망을 통해 제품을 소비자에게 전달합니다
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-xs">
                    전국 유통망
                  </span>
                  <span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-xs">
                    물류 최적화
                  </span>
                  <span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-xs">
                    브랜드 마케팅
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-[#0F4C82]" />
            </div>

            {/* Step 3: B2C */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-[#0F4C82]/10 rounded-lg flex items-center justify-center mr-3">
                    <ShoppingBag className="w-4 h-4 text-[#0F4C82]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-black">
                      B2C 소비자
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  다양한 채널을 통해 소비자에게 최고의 제품과 서비스를
                  제공합니다
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    온라인·오프라인
                  </span>
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    홈쇼핑 연계
                  </span>
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    글로벌 진출
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Summary - Compact */}
        <motion.div
          className="mt-6 sm:mt-8 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
              "완전한 유통 생태계, 피드백"
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
              제조사의 우수한 제품이 소비자에게 성공적으로 전달될 수 있도록,
              <br className="hidden sm:block" />
              피드백은 전체 유통 과정을 설계하고 최적화합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default B2B2C_Hub;
