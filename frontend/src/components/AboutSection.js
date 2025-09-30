import React, { useState, useEffect } from "react";
import { Instagram, Mail, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const subject = encodeURIComponent("Parceria com o Drop da Mari");
  const body = encodeURIComponent(
    "Olá, Mari!\n\nMeu nome é [Seu Nome] da [Marca]. Gostaria de enviar uma proposta de parceria para divulgação de [Produto/Cupom].\n\nLinks e infos:\n- Site:\n- Instagram:\n- Condições (produto, comissão, cupom, vigência):\n\nObrigado!"
  );
  const mailto = `mailto:contato@dropdamari.com?subject=${subject}&body=${body}`;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showMobileButton, setShowMobileButton] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("sobre");
    const footer = document.querySelector("footer");
    if (!aboutSection) return;

    let aboutVisible = false;
    let footerVisible = false;

    const update = () => setShowMobileButton(aboutVisible && !footerVisible);

    const aboutObs = new IntersectionObserver(
      (entries) => {
        aboutVisible = entries[0]?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.2 }
    );

    let footerObs;
    if (footer) {
      footerObs = new IntersectionObserver(
        (entries) => {
          footerVisible = entries[0]?.isIntersecting ?? false;
          update();
        },
        { threshold: 0.01 }
      );
      footerObs.observe(footer);
    }

    aboutObs.observe(aboutSection);

    return () => {
      aboutObs.disconnect();
      if (footerObs) footerObs.disconnect();
    };
  }, []);

  const slides = [
    {
      image:
        "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758832450/About_Mariana_oruxqw.jpg",
      alt: "Mariana Bragança - Fundadora do Drop da Mari",
      showInfo: true,
      reverse: false,
      textAlign: "text-right",
      text: (
        <>
          <p>
            Diferente do que muita gente imagina, eu não sou modelo nem vivo de publis. Além do Drop, sou proprietária da minha própria “EUpresa”. Trabalho como social media manager, profissão que me realiza, me dá base e estrutura para seguir com meus projetos pessoais. Inclusive, algumas das marcas que você vê aqui também confiam em mim nesse trabalho.
          </p>
          <p>
            Tudo começou no Instagram, quando eu compartilhei a minha preparação para a primeira maratona. E foi ali que, sem planejar, uma comunidade nasceu. Mulheres reais, assim como eu, começaram a se identificar com a rotina, com as indicações sinceras, com o meu jeito de mostrar a vida sem filtros de perfeição.
          </p>
          <p>
            O Drop nasceu como um espaço paralelo, da vontade de catalogar todas as recomendações, os produtos, os cupons. Pra que ninguém se perdesse no meio do caminho.
          </p>
        </>
      ),
    },
    {
      image:
        "https://res.cloudinary.com/dupz0ffvs/image/upload/f_auto,q_auto:best,cs_srgb,dpr_auto,c_fit,w_768,e_noise_reduction:40,e_auto_color,e_auto_contrast/v1759172143/IMG_0182.JPEG_fvcnzd.jpg",
      alt: "Mariana Bragança correndo",
      showInfo: false,
      reverse: true,
      textAlign: "text-left",
      text: (
        <>
          <p>
            O Drop da Mari não é uma curadoria distante. Aqui você só encontra produtos que realmente fazem parte da minha vida, da minha rotina. São marcas que admiro, que acreditam no meu trabalho e fazem questão de caminhar junto, seja apoiando, trazendo novidades, ou confiando em mim para ser a ponte entre elas e vocês.
          </p>
          <p>
            Mais do que descontos e vantagens, o que me motiva é essa comunidade que a gente construiu. Ter um espaço onde posso apoiar, inspirar e ser apoiada de volta me emociona de verdade.
          </p>
          <p>
            No fim, o Drop é isso: um lugar para compartilhar recomendações pessoais de forma transparente, prática e carinhosa, do jeito que eu vivo e acredito.
          </p>
        </>
      ),
    },
  ];

  const slide = slides[current];
  const paginate = (dir) => { setDirection(dir); setCurrent((prev) => prev + dir); };
  const isLast = current === slides.length - 1;

  return (
    <section
      id="sobre"
      className="section-bridge relative overflow-visible"
      style={{
        /* Fundo sólido do About (rosa bebê) */
        background: "hsl(var(--primary-baby))",
        /* Bridge: de rosa bebê -> offwhite (para o Footer) */
        "--this-bg": "hsl(var(--primary-baby))",
        "--next-bg": "hsl(var(--offwhite))",
      }}
    >
      <div className="bridge-content container mx-auto px-4 pt-6 pb-20 text-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(0,0%,11%)]"
              style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}
            >
              Sobre a Mari
            </h2>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-10 items-stretch relative"
            >
              {/* Imagem + CTA */}
              <div className={`flex flex-col items-center justify-center text-center ${slide.reverse ? "md:order-2" : "md:order-1"}`}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`rounded-full shadow-lg object-cover select-none mb-6 ${slide.showInfo ? "w-56 h-56" : "w-72 h-72"}`}
                  loading="lazy"
                  decoding="async"
                />

                {slide.showInfo && (
                  <>
                    <h3
                      className="text-2xl font-bold mb-2 text-[hsl(0,0%,11%)]"
                      style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}
                    >
                      Mariana Bragança
                    </h3>
                    <p className="text-[hsl(var(--primary))] font-medium mb-4">
                      Apaixonada por corrida & bem-estar
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://instagram.com/marianabraganca_"
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-white font-medium shadow transition"
                      >
                        <Instagram size={18} className="mr-2" />
                        Seguir no Instagram
                      </a>
                      <a
                        href={mailto}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-white font-medium shadow transition"
                      >
                        <Mail size={18} className="mr-2" />
                        Propor Parceria
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Texto (sem prose, com espaçamento controlado) */}
              <div className={`${slide.reverse ? "md:order-1" : "md:order-2"} ${slide.textAlign}`}>
                <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                  {slide.text}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE: botão flutuante (vazado) */}
      <AnimatePresence>
        {showMobileButton && (
          <motion.button
            key="about-floating"
            onClick={() => paginate(isLast ? -1 : 1)}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed bottom-6 right-6 p-3 rounded-full z-40"
            aria-label={isLast ? "Anterior" : "Próximo"}
            style={{ background: "transparent", border: "none", boxShadow: "0 0 10px rgba(0,0,0,0.25)" }}
          >
            {isLast ? (
              <ChevronLeft className="w-7 h-7 text-[hsl(var(--primary))]" />
            ) : (
              <ChevronRight className="w-7 h-7 text-[hsl(var(--primary))]" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* DESKTOP: setas laterais */}
      {current > 0 && (
        <button
          onClick={() => paginate(-1)}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-muted"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-[hsl(var(--primary))]" />
        </button>
      )}
      {current < slides.length - 1 && (
        <button
          onClick={() => paginate(1)}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-muted"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6 text-[hsl(var(--primary))]" />
        </button>
      )}
    </section>
  );
};

export default AboutSection;
