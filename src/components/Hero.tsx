import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#1a1a2e] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Yenilikçi Yazılım Çözümleri ile Geleceği Şekillendirin
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AI, SaaS, E-ticaret ve Özel Yazılım çözümleriyle işletmenizi dijital dönüşüm yolculuğunda ileriye taşıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <span>Ücretsiz Danışmanlık</span>
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
              >
                <svg 
                  className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
                <span>Hizmetlerimizi Keşfedin</span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/images/hero-illustration.svg"
                alt="Innovative Software Solutions"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl filter blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;