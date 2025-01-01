import { motion } from 'framer-motion';

const references = [
  {
    name: "Tech Solutions Inc.",
    logo: "/images/tech-solutions.svg",
    quote: "Uygulama.app ile çalışmak, dijital dönüşüm sürecimizi hızlandırdı. AI çözümleri sayesinde operasyonel verimliliğimiz %40 arttı.",
    person: "Ahmet Yılmaz",
    title: "CTO"
  },
  {
    name: "E-Commerce Pro",
    logo: "/images/ecommerce-pro.svg",
    quote: "Online satışlarımız, Uygulama.app'in geliştirdiği e-ticaret platformu sayesinde ilk yılda %150 büyüdü.",
    person: "Ayşe Kaya",
    title: "CEO"
  },
  {
    name: "Global Software Ltd.",
    logo: "/images/global-software.svg",
    quote: "SaaS çözümleri konusundaki uzmanlıkları ve profesyonel yaklaşımları ile beklentilerimizin ötesinde bir proje teslim ettiler.",
    person: "Mehmet Demir",
    title: "Product Manager"
  }
];

const clients = [
  "/images/client-1.svg",
  "/images/client-2.svg",
  "/images/client-3.svg",
  "/images/client-4.svg",
  "/images/client-5.svg",
  "/images/client-6.svg",
  "/images/client-7.svg",
  "/images/client-8.svg"
];

const References = () => {
  return (
    <section className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Referanslarımız</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Türkiye'nin önde gelen şirketleri ile çalışıyor, başarı hikayeleri yazıyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E293B] p-6 rounded-xl"
            >
              <div className="h-16 mb-6">
                <img
                  src={reference.logo}
                  alt={reference.name}
                  className="h-full object-contain"
                />
              </div>
              <p className="text-gray-300 mb-6 italic">"{reference.quote}"</p>
              <div>
                <p className="font-semibold">{reference.person}</p>
                <p className="text-sm text-gray-400">{reference.title}</p>
                <p className="text-sm text-blue-500">{reference.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold mb-2">Güvendikleri İçin Teşekkürler</h3>
          <p className="text-gray-300">Birlikte çalıştığımız seçkin markalar</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client}
                alt="Client logo"
                className="h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References; 