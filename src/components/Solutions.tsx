import { motion } from 'framer-motion';

const solutions = [
  {
    title: "Özel AI Çözümleri",
    description: "İşletmenizin ihtiyaçlarına özel AI modelleri ve entegrasyonları geliştiriyoruz.",
    image: "/images/ai-solutions.svg",
    features: [
      "Doğal Dil İşleme",
      "Görüntü İşleme",
      "Tahminleme Modelleri",
      "Chatbot Sistemleri"
    ]
  },
  {
    title: "SaaS Platformları",
    description: "Modern ve ölçeklenebilir SaaS uygulamaları ile işletmenizi dijitalleştirin.",
    image: "/images/saas-solutions.svg",
    features: [
      "Çok Kiracılı Mimari",
      "Abonelik Yönetimi",
      "Analitik Panelleri",
      "API Entegrasyonları"
    ]
  },
  {
    title: "E-ticaret Sistemleri",
    description: "Güçlü ve güvenli e-ticaret platformları ile satışlarınızı artırın.",
    image: "/images/ecommerce-solutions.svg",
    features: [
      "Özel E-ticaret Siteleri",
      "Ödeme Sistemleri",
      "Stok Yönetimi",
      "CRM Entegrasyonu"
    ]
  }
];

const Solutions = () => {
  return (
    <section className="py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Çözümlerimiz</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına özel, yenilikçi ve ölçeklenebilir çözümler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a2e] rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-contain filter brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 