import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Solutions from './components/Solutions.tsx';
import References from './components/References.tsx';
import ContactForm from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a1a2e]">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white">
      <Navbar />
      <main className="pt-20">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="services">
          <Features />
        </section>
        <section id="solutions">
          <Solutions />
        </section>
        <section id="references">
          <References />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
