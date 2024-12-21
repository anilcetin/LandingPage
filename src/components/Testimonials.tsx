import { motion } from 'framer-motion';

const pressReviews = [
  {
    logo: "/images/wired-logo.svg",
    quote: "Meditasyon ve uyku için mükemmel bir uygulama. Günlük rutininize ekleyebileceğiniz harika bir araç."
  },
  {
    logo: "/images/times-logo.svg",
    quote: "Modern yaşamın stresine karşı etkili bir çözüm. Kullanıcı dostu arayüzü ve zengin içeriğiyle öne çıkıyor."
  },
  {
    logo: "/images/forbes-logo.svg",
    quote: "Zihinsel sağlık ve iyi yaşam konusunda en iyi uygulamalardan biri. Herkes için tavsiye ediyoruz."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#1a1a2e]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Basında Biz</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Kullanıcılarımız ve basın tarafından sevilen uygulamamız hakkında neler söyleniyor?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E293B] p-8 rounded-xl"
            >
              <div className="h-12 mb-6">
                <img 
                  src={review.logo} 
                  alt="Press logo" 
                  className="h-full object-contain"
                />
              </div>
              <p className="text-gray-300 italic">"{review.quote}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="btn-primary">
            ÜCRETSİZ DENE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 