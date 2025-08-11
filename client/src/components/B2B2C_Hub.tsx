import { motion } from "framer-motion";
import { Factory, ShoppingBag, CheckCircle, ArrowLeft, ArrowRight, ArrowDown, Users, Truck, ShoppingCart } from "lucide-react";

const B2B2C_Hub = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background with moving figures */}
      <div className="absolute inset-0">
        {/* Top section with blurred figures */}
        <div className="h-1/2 bg-gradient-to-b from-gray-200 to-gray-100 relative overflow-hidden">
          {/* Animated moving figures */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="absolute w-20 h-20 bg-blue-400 rounded-full filter blur-xl"
              animate={{
                x: [0, 100, 200, 300, 400],
                y: [50, 30, 70, 40, 60],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute w-16 h-16 bg-purple-400 rounded-full filter blur-xl"
              animate={{
                x: [400, 300, 200, 100, 0],
                y: [40, 80, 20, 60, 45],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute w-24 h-24 bg-gray-500 rounded-full filter blur-xl"
              animate={{
                x: [200, 350, 150, 400, 50],
                y: [70, 20, 90, 30, 80],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: 4,
              }}
            />
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-4 h-full">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-r border-gray-400 last:border-r-0" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom dark section */}
        <div className="h-1/2 bg-gradient-to-b from-gray-900 to-black" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Main content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                  가치로운 혁신이 꽃피울 수 있도록<br />
                  믿음직한 기반이 되겠습니다.
                </h2>
              </motion.div>
            </div>

            {/* Right side - Content cards */}
            <div className="text-white space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-300">
                    태동부터 자금조지, NICE와 함께 성장합니다. 그것은 '모든 꿈이어도 자유이 NICE를 충실으로
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    새로운 가치를 만들 수 있도록 기업이 되는 것 입니다. 다양한 생태계와 협력이 우리 삶을<br />
                    어떻듭고 오늘보다 더 좋을 수 있도록, 더함은 정이어역시 가슴들이 어어되자 세 자성에<br />
                    중로이
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    생명의 날 수 인도록, 중극에 가슴이 실리 융타한 가슴을 먹목이 나에 하는 그 속에<br />
                    NICE가
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    든든한 뿌리와 자컸음 있습니다.
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <button className="inline-flex items-center px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition-colors duration-300 group">
                  <span className="mr-2">NICE 사업분야</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-8 border border-white/50 rounded-sm flex items-center justify-center"
            >
              <ArrowDown className="w-4 h-4 text-white/70" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hidden sections for mobile - preserve original content structure */}
      <div className="hidden">
        {/* Original content preserved but hidden for reference */}
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">제조사부터 소비자까지, 완전한 유통 생태계를 구축합니다.</h2>
          
          {/* B2B 제조사 content */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">B2B 제조사</h3>
            <p className="text-gray-600 text-sm mb-6">
              품질 높은 제품을 생산하는 제조사와 전략적 파트너십을 구축합니다
            </p>
            <div className="space-y-2">
              <span>전문 제조 파트너</span>
              <span>품질 관리 시스템</span>
              <span>OEM/ODM 생산</span>
            </div>
          </div>

          {/* FeedBack 유통 허브 content */}
          <div>
            <h3 className="text-xl font-bold mb-4">FeedBack 유통 허브</h3>
            <p className="text-sm mb-6">
              전국·글로벌 유통망을 통해 제품을 소비자에게 전달합니다
            </p>
            <div className="space-y-2">
              <span>전국 유통망</span>
              <span>물류 최적화</span>
              <span>브랜드 마케팅</span>
            </div>
          </div>

          {/* B2C 소비자 content */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">B2C 소비자</h3>
            <p className="text-gray-600 text-sm mb-6">
              다양한 채널을 통해 소비자에게 최고의 제품과 서비스를 제공합니다
            </p>
            <div className="space-y-2">
              <span>온라인·오프라인</span>
              <span>홈쇼핑 연계</span>
              <span>글로벌 진출</span>
            </div>
          </div>

          {/* Bottom Summary */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              "완전한 유통 생태계, 피드백"
            </h3>
            <p className="text-gray-600 leading-relaxed">
              제조사의 우수한 제품이 소비자에게 성공적으로 전달될 수 있도록,<br />
              피드백은 전체 유통 과정을 설계하고 최적화합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2B2C_Hub;