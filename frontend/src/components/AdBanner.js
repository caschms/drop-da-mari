import React, { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    ativo: false,
    image: null,
    link: "mailto:contato@dropdamari.com?subject=Quero anunciar no site!",
    alt: "Anuncie aqui",
    placeholder: "Quer ver seu anúncio aqui?"
  },
  {
    id: 2,
    ativo: false,
    image: null,
    link: "mailto:contato@dropdamari.com?subject=Quero anunciar no site!",
    alt: "Anuncie aqui",
    placeholder: "Quer ver seu anúncio aqui?"
  },
  {
    id: 3,
    ativo: false,
    image: null,
    link: "mailto:contato@dropdamari.com?subject=Quero anunciar no site!",
    alt: "Anuncie aqui",
    placeholder: "Quer ver seu anúncio aqui?"
  }
];

const AdBanner = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // filtra só os ativos
  const ativos = banners.filter(b => b.ativo);

  if (ativos.length === 0) return null;

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // fade-out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % ativos.length); // usa só os ativos
        setFade(true); // fade-in
      }, 500);
    }, 15000);
    return () => clearInterval(timer);
  }, [ativos.length]); // dependência corrigida

  const banner = ativos[current]; // pega só entre os ativos

  return (
    <div
      className={`w-full max-w-lg transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {banner.image ? (
        <a
          href={banner.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={banner.image}
            alt={banner.alt}
            className="w-full h-20 md:h-28 object-cover rounded-lg shadow-lg hover:opacity-90 transition"
          />
        </a>
      ) : (
        <a
          href={banner.link}
          className="block w-full h-20 md:h-28 flex items-center justify-center 
          border border-dashed border-gray-400 rounded-lg 
          bg-white/70 backdrop-blur-sm shadow-lg
          text-gray-700 text-xs md:text-sm font-medium hover:bg-white transition"
        >
          {banner.placeholder}
        </a>
      )}
    </div>
  );
};

export default AdBanner;
