import { motion } from 'framer-motion';
import { FaMoon, FaMusic, FaHeart, FaPrayingHands } from 'react-icons/fa';

const features = [
  {
    icon: <FaMoon className="w-8 h-8" />,
    title: "Uyku Hikayeleri",
    description: "Rahatlatıcı sesler ve hikayelerle derin ve huzurlu bir uykuya dalın."
  },
  {
    icon: <FaPrayingHands className="w-8 h-8" />,
    title: "Meditasyon Seansları", 
    description: "Stres ve kaygıyı azaltan yüzlerce saatlik rehberli meditasyon."
  },
  {
    icon: <FaMusic className="w-8 h-8" />,
    title: "Rahatlatıcı Müzikler",
    description: "Özel olarak bestelenmiş, dinlendirici müzik koleksiyonu."
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Kişisel Gelişim",
    description: "Yaşam değiştiren alışkanlıklar ve sağlıklı bir yaşam için araçlar."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#16213e] to-[#1a1a2e]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Neler Sunuyoruz?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Size daha iyi bir yaşam sunmak için tasarlanmış özelliklerimizi keşfedin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E293B] p-6 rounded-xl hover:bg-primary/10 transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 