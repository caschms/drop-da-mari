import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Os melhores produtos{' '}
          <span className="text-pink-500">fitness</span> com desconto
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Produtos cuidadosamente selecionados para turbinar seus treinos 
          e potencializar seus resultados. Todos com cupons exclusivos!
        </p>
        <button
          onClick={scrollToProducts}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Ver Produtos
        </button>
      </div>
    </section>
  );
};

export default Hero;