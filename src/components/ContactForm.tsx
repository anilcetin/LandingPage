import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    subject: '',
    message: ''
  });

  const services = [
    'AI Çözümleri',
    'SaaS Geliştirme',
    'E-ticaret Çözümleri',
    'Özel Yazılım Geliştirme',
    'Diğer'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-[#1a1a2e]">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bize Ulaşın</h2>
          <p className="text-gray-300">
            Projeniz için en iyi çözümü birlikte geliştirelim. Size nasıl yardımcı olabileceğimizi anlatın.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Şirket Adı
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                İlgilendiğiniz Hizmet
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
              >
                <option value="">Seçiniz</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Konu
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1E293B] rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Projeniz hakkında bize bilgi verin..."
              className="w-full px-4 py-3 bg-[#1E293B] rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white resize-none"
              required
            />
          </div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-all duration-300 group w-full md:w-auto"
            >
              <span>Mesajı Gönder</span>
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                />
              </svg>
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm; 