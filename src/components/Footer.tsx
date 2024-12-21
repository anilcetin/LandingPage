import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'Hakkımızda', to: '/about' },
      { name: 'Kariyer', to: '/careers' },
      { name: 'Blog', to: '/blog' },
      { name: 'Eğitmenlerimiz', to: '/instructors' },
    ],
    legal: [
      { name: 'Gizlilik Politikası', to: '/privacy' },
      { name: 'Kullanım Şartları', to: '/terms' },
      { name: 'KVKK', to: '/kvkk' },
      { name: 'Çerezler', to: '/cookies' },
    ],
    support: [
      { name: 'SSS', to: '/faq' },
      { name: 'İletişim', to: '/contact' },
      { name: 'Hediye Kartı', to: '/gift' },
      { name: 'Kurumsal', to: '/corporate' },
    ],
  };

  return (
    <footer className="bg-[#1E293B] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-xl font-bold mb-4 block">Huzur App</Link>
            <p className="text-gray-400 mb-4">
              Daha iyi bir yaşam için meditasyon ve uyku uygulaması.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Destek</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Huzur App. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 