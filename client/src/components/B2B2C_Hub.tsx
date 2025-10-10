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
import { useLanguage } from "@/contexts/LanguageContext";

const B2B2C_Hub = () => {
  const { t } = useLanguage();
  
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
            <span className="font-normal">{t("b2b2c.header.title")}</span>, <br />
            {t("b2b2c.header.subtitle")}
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
                    {t("b2b2c.b2b.title")}
                  </h3>
                  <p className="b2b2c-card-description text-gray-600 mb-6">
                    {t("b2b2c.b2b.description")}
                  </p>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.b2b.feature1")}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.b2b.feature2")}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.b2b.feature3")}</span>
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
                <span className="text-xs text-white mt-2">{t("b2b2c.arrow1")}</span>
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
                  <h3 className="b2b2c-card-title mb-4">{t("b2b2c.hub.title")}</h3>
                  <p className="b2b2c-card-description text-white mb-6">
                    {t("b2b2c.hub.description")}
                  </p>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.hub.feature1")}</span>
                    </div>
                    <div className="flex items-center text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.hub.feature2")}</span>
                    </div>
                    <div className="flex items-center text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.hub.feature3")}</span>
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
                <span className="text-xs text-white mt-2">{t("b2b2c.arrow2")}</span>
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
                    {t("b2b2c.b2c.title")}
                  </h3>
                  <p className="b2b2c-card-description text-gray-600 mb-6">
                    {t("b2b2c.b2c.description")}
                  </p>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.b2c.feature1")}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.b2c.feature2")}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0F4C82] mr-2 flex-shrink-0" />
                      <span>{t("b2b2c.b2c.feature3")}</span>
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
                      {t("b2b2c.b2b.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {t("b2b2c.b2b.description")}
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    {t("b2b2c.b2b.feature1_short")}
                  </span>
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    {t("b2b2c.b2b.feature2_short")}
                  </span>
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    {t("b2b2c.b2b.feature3_short")}
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
                      {t("b2b2c.hub.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/80 mb-2">
                  {t("b2b2c.hub.description")}
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-xs">
                    {t("b2b2c.hub.feature1")}
                  </span>
                  <span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-xs">
                    {t("b2b2c.hub.feature2")}
                  </span>
                  <span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-xs">
                    {t("b2b2c.hub.feature3")}
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
                      {t("b2b2c.b2c.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {t("b2b2c.b2c.description")}
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    {t("b2b2c.b2c.feature1")}
                  </span>
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    {t("b2b2c.b2c.feature2")}
                  </span>
                  <span className="px-2 py-0.5 bg-[#0F4C82]/10 text-[#0F4C82] rounded-full text-xs">
                    {t("b2b2c.b2c.feature3")}
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
              "{t("b2b2c.summary.title")}"
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
              {t("b2b2c.summary.description")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default B2B2C_Hub;
