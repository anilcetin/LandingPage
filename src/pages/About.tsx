import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Hakkımızda</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-6">
              Huzur App, modern yaşamın getirdiği stres ve kaygıyla başa çıkmak isteyenler için
              tasarlanmış bir meditasyon ve mindfulness uygulamasıdır.
            </p>
            <p className="text-gray-300 mb-6">
              2023 yılında kurulan şirketimiz, kullanıcılarımıza daha iyi bir yaşam sunma
              misyonuyla yola çıktı. Profesyonel meditasyon eğitmenleri ve sağlık uzmanlarıyla
              işbirliği yaparak, bilimsel temelli içerikler sunuyoruz.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">Misyonumuz</h2>
            <p className="text-gray-300 mb-6">
              İnsanların günlük yaşamlarında huzur ve dinginliği bulabilmeleri için
              erişilebilir ve etkili araçlar sunmak.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">Vizyonumuz</h2>
            <p className="text-gray-300 mb-6">
              Mental sağlık ve iyi yaşam konusunda global ölçekte öncü bir platform olmak.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 