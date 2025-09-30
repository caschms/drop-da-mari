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
    <section
      className="section-bridge"
      style={{
        background: 'hsl(var(--primary-baby))',
        '--this-bg': 'hsl(var(--primary-baby))',
        '--next-bg': 'hsl(var(--accent-baby))',
      }}
    >
      <div className="bridge-content relative text-foreground overflow-visible">
        <img
          src="/assets/libelula.svg"
          alt=""
          className="absolute right-0 top-0 w-96 opacity-10 pointer-events-none select-none"
        />
        <div className="max-w-4xl mx-auto text-center px-4 pt-8 pb-16">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6 text-[hsl(0,0%,11%)]"
            style={{ fontFamily: 'Sinerva, ui-sans-serif, system-ui' }}
          >
            Os melhores produtos{' '}
            <span className="text-[hsl(var(--secondary))]">fitness</span> com desconto
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Produtos cuidadosamente selecionados para turbinar seus treinos e potencializar seus resultados.
            Todos com cupons exclusivos!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full 
                         bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent 
                         text-white font-medium shadow transition"
            >
              Ver Produtos
            </button>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full 
                         bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent 
                         text-white font-medium shadow transition"
            >
              Sobre Mim
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
