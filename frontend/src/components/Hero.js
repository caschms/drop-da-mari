import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('sobre');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-gray-800 mb-6"
          style={{ fontFamily: 'Sinerva, ui-sans-serif, system-ui' }}
        >
          Os melhores produtos{' '}
          <span className="text-pink-500">fitness</span> com desconto
        </h2>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Produtos cuidadosamente selecionados para turbinar seus treinos
          e potencializar seus resultados. Todos com cupons exclusivos!
        </p>

        {/* Botões no estilo About */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium shadow transition"
          >
            Ver Produtos
          </button>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium shadow transition"
          >
            Sobre Mim
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
