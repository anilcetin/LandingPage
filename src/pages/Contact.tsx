import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">İletişim</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-primary w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">E-posta</h3>
                    <p className="text-gray-300">iletisim@huzurapp.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-primary w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-gray-300">+90 (212) 555 0123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-primary w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Adres</h3>
                    <p className="text-gray-300">
                      Levent Mah. Teknoloji Cad.<br />
                      No: 123 Kat: 4<br />
                      34330 Beşiktaş/İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">İletişim Formu</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">İsim</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-[#2D3748] border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-[#2D3748] border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Mesaj</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-[#2D3748] border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 