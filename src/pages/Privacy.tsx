import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-6">
              Huzur App olarak kişisel verilerinizin güvenliği konusunda büyük hassasiyet gösteriyoruz.
              Bu gizlilik politikası, uygulamamızı kullanırken toplanan verilerin nasıl işlendiğini
              açıklamaktadır.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Toplanan Veriler</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>Ad ve e-posta gibi hesap bilgileri</li>
              <li>Uygulama kullanım istatistikleri</li>
              <li>Cihaz bilgileri ve kullanım analitikleri</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Verilerin Kullanımı</h2>
            <p className="text-gray-300 mb-6">
              Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>Hizmet kalitesini iyileştirmek</li>
              <li>Kişiselleştirilmiş içerik sunmak</li>
              <li>Teknik sorunları çözmek</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Veri Güvenliği</h2>
            <p className="text-gray-300 mb-6">
              Verileriniz endüstri standardı güvenlik önlemleriyle korunmaktadır. SSL şifreleme,
              güvenli veri depolama ve düzenli güvenlik denetimleri uyguluyoruz.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">İletişim</h2>
            <p className="text-gray-300 mb-6">
              Gizlilik politikamızla ilgili sorularınız için privacy@huzurapp.com adresinden
              bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy; 