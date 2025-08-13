'use client';

import React, { useState, useEffect } from 'react';

const KavarnaPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Kavárna U Kódu - Nejlepší káva v Praze';

    // Dynamically create and append favicon
    const faviconSvg = `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="%231A1A1A"/>
        <path d="M10 24V8L16 16L10 24Z" fill="%23D4AF37"/>
        <path d="M16 16L22 8V24L16 16Z" fill="%23C0C0C0"/>
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="16" fill="%23D4AF37" font-weight="700">&lt;/&gt;</text>
      </svg>
    `;
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;
    let faviconLink = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = faviconUrl;

    // Dynamically load Google Fonts to prevent build timeouts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Roboto:wght@300;400&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

  }, []);

  const navLinks = [
    { href: '#o-nas', label: 'O nás' },
    { href: '#nabidka', label: 'Nabídka' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-[#1A1A1A] text-white min-h-screen font-sans">
       <style jsx global>{`
        h1, h2, h3, .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        body, p, a, span, div {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-gray-700/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-serif text-[#D4AF37]">
            Kavárna U Kódu <span className="text-gray-400 text-xl">{'>'}</span>
          </a>
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">{link.label}</a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none">
               <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" className="w-8 h-8 text-gray-300" alt="Menu Icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/90 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} className="focus:outline-none">
             <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" className="w-8 h-8 text-gray-300" alt="Close Icon" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-3xl font-serif text-gray-300 hover:text-[#D4AF37] transition-colors" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
          ))}
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative px-6"
          style={{backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 1)), url(https://images.unsplash.com/photo-1511920183276-5942b58b5b47?q=80&w=1974&auto=format&fit=crop)'}}>
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider leading-tight font-serif">
                    Vítejte v Kavárně <span className="text-[#D4AF37]">U Kódu</span>
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">Nejlepší káva pro vaše bugy.</p>
                <a href="#nabidka" className="mt-12 inline-block bg-[#D4AF37] text-[#1A1A1A] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#c8a032] transition-colors duration-300 transform hover:scale-105">
                    Objevte naši nabídku
                </a>
            </div>
        </section>

        {/* About Section */}
        <section id="o-nas" className="py-20 md:py-32 bg-[#1F1F1F]">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md mx-auto">
                <img src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1974&auto=format&fit=crop" alt="Interiér kavárny" className="rounded-lg shadow-2xl"/>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#D4AF37]">Náš Příběh</h2>
              <div className="w-24 h-1 bg-[#C0C0C0] my-6 mx-auto md:mx-0"></div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Jsme moderní kavárna v srdci Prahy, stvořená jako útočiště pro kreativní mysli a technologické nadšence. Nabízíme nejen precizně připravenou výběrovou kávu, ale i klidné a inspirativní prostředí, ideální pro soustředěnou práci, brainstorming i neformální setkání. Naší specialitou je legendární "Debuggovací Doppio", které zaručeně nakopne vaši produktivitu.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="nabidka" className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#D4AF37]">Co nabízíme</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                Pečlivě vybrané speciality pro maximální požitek a produktivitu.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-neutral-800/50 p-8 rounded-lg border border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/coffee.svg" className="w-12 h-12 mx-auto text-[#D4AF37]" alt="Coffee Icon"/>
                <h3 className="text-2xl font-bold mt-6 font-serif">Výběrová káva</h3>
                <p className="mt-4 text-gray-400">Čerstvě pražená zrna z nejlepších světových farem, připravená s láskou a precizností.</p>
              </div>
              <div className="bg-neutral-800/50 p-8 rounded-lg border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 transform hover:-translate-y-2 transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/binary-tree.svg" className="w-12 h-12 mx-auto text-[#D4AF37]" alt="Code Icon"/>
                <h3 className="text-2xl font-bold mt-6 font-serif">Debuggovací Doppio</h3>
                <p className="mt-4 text-gray-400">Naše signature dvojité espresso. Intenzivní a silné, navržené pro řešení těch nejtěžších bugů.</p>
              </div>
              <div className="bg-neutral-800/50 p-8 rounded-lg border border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/wifi.svg" className="w-12 h-12 mx-auto text-[#D4AF37]" alt="Wifi Icon"/>
                <h3 className="text-2xl font-bold mt-6 font-serif">Klid a konektivita</h3>
                <p className="mt-4 text-gray-400">Inspirativní atmosféra, pohodlné sezení a vysokorychlostní Wi-Fi pro vaši nerušenou práci.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 md:py-32 bg-[#1F1F1F]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#D4AF37]">Zastavte se</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">
Rádi vás uvidíme. Najdete nás v centru dění, připravené s vaší denní dávkou kofeinu.
            </p>
            <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-lg">
                <div className="flex items-center gap-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" className="w-8 h-8 text-[#D4AF37]" alt="Address Icon"/>
                    <span className="text-gray-300">Bugfixová 1, 110 00 Praha 1</span>
                </div>
                <div className="flex items-center gap-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" className="w-8 h-8 text-[#D4AF37]" alt="Email Icon"/>
                    <a href="mailto:test@kavarna.cz" className="text-gray-300 hover:text-[#D4AF37] transition-colors">test@kavarna.cz</a>
                </div>
                <div className="flex items-center gap-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" className="w-8 h-8 text-[#D4AF37]" alt="Phone Icon"/>
                    <a href="tel:+420777123456" className="text-gray-300 hover:text-[#D4AF37] transition-colors">+420 777 123 456</a>
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] border-t border-gray-700/50 py-6">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} Kavárna U Kódu. Všechna práva vyhrazena.</p>
          <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
            Vytvořeno s láskou od DigitalFusion
          </a>
        </div>
      </footer>
    </div>
  );
};

export default KavarnaPage;
