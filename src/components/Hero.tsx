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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Yenilikçi Yazılım Çözümleri ile Geleceği Şekillendirin
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AI, SaaS, E-ticaret ve Özel Yazılım çözümleriyle işletmenizi dijital dönüşüm yolculuğunda ileriye taşıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3"
              >
                Hemen Başlayın
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-8 py-3"
              >
                Hizmetlerimiz
              </motion.button>
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
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl filter blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 