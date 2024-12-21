import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Huzur ve Dinlenme için
              <span className="text-primary"> #1 Uygulama</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Milyonlarca kullanıcı gibi siz de daha iyi uyku, daha az stres ve kaygı için uygulamamızı keşfedin.
            </p>
            <button className="btn-primary">
              HEMEN BAŞLA
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="/images/mockup.svg" 
                alt="App mockup" 
                className="w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full filter blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 