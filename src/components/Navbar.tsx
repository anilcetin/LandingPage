import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { title: 'Ana Sayfa', href: '#home' },
    { title: 'Hizmetler', href: '#services' },
    { title: 'Çözümler', href: '#solutions' },
    { title: 'Referanslar', href: '#references' },
    { title: 'İletişim', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a2e]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-2xl font-bold tracking-tight"
            >
              Uygulama<span className="text-blue-500">.app</span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeSection === item.href.replace('#', '')
                    ? 'text-blue-500 bg-blue-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {item.title}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`
                  block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeSection === item.href.replace('#', '')
                    ? 'text-blue-500 bg-blue-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {item.title}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 