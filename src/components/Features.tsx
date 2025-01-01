import { motion } from 'framer-motion';

const features = [
  {
    title: "AI Çözümleri",
    description: "Özel AI geliştirme, makine öğrenimi modelleri ve AI entegrasyonları ile işletmenizi geleceğe taşıyın.",
    icon: "🤖",
    details: [
      "Özel AI Geliştirme",
      "Makine Öğrenimi Modelleri",
      "AI Sistem Entegrasyonu"
    ]
  },
  {
    title: "SaaS Geliştirme",
    description: "Ölçeklenebilir ve güvenli SaaS uygulamaları ile işletmenizin dijital dönüşümünü tamamlayın.",
    icon: "☁️",
    details: [
      "Özel SaaS Platformları",
      "SaaS Ürün Geliştirme",
      "Sistem Entegrasyonu"
    ]
  },
  {
    title: "E-ticaret Çözümleri",
    description: "Modern ve güvenli e-ticaret platformları ile online satışlarınızı maksimize edin.",
    icon: "🛍️",
    details: [
      "E-ticaret Platform Geliştirme",
      "AI Destekli E-ticaret",
      "Ödeme Sistemi Entegrasyonu"
    ]
  },
  {
    title: "Özel Yazılım Geliştirme",
    description: "İşletmenizin ihtiyaçlarına özel, ölçeklenebilir ve modern yazılım çözümleri.",
    icon: "💻",
    details: [
      "Özel Uygulama Geliştirme",
      "Kurumsal Yazılımlar",
      "Mobil Uygulama Geliştirme"
    ]
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-[#1E293B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            En son teknolojileri kullanarak işletmeniz için yenilikçi çözümler üretiyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 