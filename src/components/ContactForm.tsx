import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  nameSurname: string;
  email: string;
  companyName: string;
  branch: string;
  title: string;
  message: string;
}

const API_URL = import.meta.env.VITE_API_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nameSurname: '',
    email: '',
    companyName: '',
    branch: '',
    title: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const services = [
    'AI Çözümleri',
    'SaaS Geliştirme',
    'E-ticaret Çözümleri',
    'Özel Yazılım Geliştirme',
    'Diğer'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46YWRtaW4xMjM='
        },
        body: JSON.stringify({
          nameSurname: formData.nameSurname,
          email: formData.email,
          companyName: formData.companyName,
          branch: formData.branch,
          title: formData.title,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
      });
      setFormData({
        nameSurname: '',
        email: '',
        companyName: '',
        branch: '',
        title: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Bir hata oluştu'
      });
    } finally {
      setIsSubmitting(false);
    }
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

        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg mb-6 ${
              submitStatus.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nameSurname" className="block text-sm font-medium text-gray-300 mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                id="nameSurname"
                name="nameSurname"
                value={formData.nameSurname}
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
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                Şirket Adı
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-300 mb-2">
                İlgilendiğiniz Hizmet
              </label>
              <select
                id="branch"
                name="branch"
                value={formData.branch}
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
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Konu
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
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
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium shadow-lg transition-all duration-300 group w-full md:w-auto ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Gönderiliyor...
                </>
              ) : (
                <>
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
                </>
              )}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm; 