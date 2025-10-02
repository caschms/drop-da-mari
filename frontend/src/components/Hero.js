import React from 'react';
import AdBanner from './AdBanner';

const Hero = () => {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPartners = () => {
    const el = document.getElementById('parceiros');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('sobre');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="section-bridge"
      style={{
        background: 'hsl(var(--primary-baby))',
        '--this-bg': 'hsl(var(--primary-baby))',
        '--next-bg': 'hsl(var(--accent-baby))',
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 pt-8 pb-16">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6 text-[hsl(0,0%,11%)]"
          style={{ fontFamily: 'Sinerva' }}
        >
          Produtos com Cupons Exclusivos
        </h2>

        {/* Botões originais */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={scrollToProducts}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-pink-600 text-white font-medium"
          >
            Ver Produtos
          </button>

          <button
            onClick={scrollToPartners}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-pink-600 text-white font-medium"
          >
            Ver Parceiros
          </button>

          <button
            onClick={scrollToAbout}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-pink-600 text-white font-medium"
          >
            Sobre Mim
          </button>
        </div>

        {/* Banner agora faz parte do fluxo */}
        <div className="flex justify-center">
          <AdBanner />
        </div>
      </div>
    </section>
  );
};

export default Hero;
