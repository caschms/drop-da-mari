import React, { useState } from "react";
import { Instagram, Mail, ChevronRight, ChevronLeft } from "lucide-react";

const AboutSection = () => {
  const subject = encodeURIComponent("Parceria com o Drop da Mari");
  const body = encodeURIComponent(
    "Olá, Mari!\n\nMeu nome é [Seu Nome] da [Marca]. Gostaria de enviar uma proposta de parceria para divulgação de [Produto/Cupom].\n\nLinks e infos:\n- Site:\n- Instagram:\n- Condições (produto, comissão, cupom, vigência):\n\nObrigado!"
  );
  const mailto = `mailto:contato@dropdamari.com?subject=${subject}&body=${body}`;

  const [current, setCurrent] = useState(0);

  const slides = [
    {
      // SLIDE 1 — imagem à ESQUERDA, com nome/subtítulo/botões
      image:
        "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758832450/About_Mariana_oruxqw.jpg",
      alt: "Mariana Bragança - Fundadora do Drop da Mari",
      showInfo: true,
      reverse: false, // texto à direita (ordem normal)
      text: (
        <>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Diferente do que muita gente imagina, eu não sou modelo nem vivo de publis. Além do Drop, sou proprietária da minha própria “EUpresa”. Trabalho como social media manager, profissão que me realiza, me dá base e estrutura para seguir com meus projetos pessoais. Inclusive, algumas das marcas que você vê aqui também confiam em mim nesse trabalho.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Tudo começou no Instagram, quando eu compartilhei a minha preparação para a primeira maratona. E foi ali que, sem planejar, uma comunidade nasceu. Mulheres reais, assim como eu, começaram a se identificar com a rotina, com as indicações sinceras, com o meu jeito de mostrar a vida sem filtros de perfeição.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            O Drop nasceu como um espaço paralelo, da vontade de catalogar todas as recomendações, os produtos, os cupons. Pra que ninguém se perdesse no meio do caminho.
          </p>
        </>
      ),
    },
    {
      // SLIDE 2 — imagem à DIREITA, maior e sem nome/subtítulo/botões
      image:
        "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758832450/About_Mari_Run.jpg",
      alt: "Mariana Bragança correndo",
      showInfo: false,
      reverse: true, // inverte: texto à esquerda, imagem à direita
      text: (
        <>
          <p className="text-gray-600 mb-6 leading-relaxed">
            O Drop da Mari não é uma curadoria distante. Aqui você só encontra produtos que realmente fazem parte da minha vida, da minha rotina. São marcas que admiro, que acreditam no meu trabalho e fazem questão de caminhar junto, seja apoiando, trazendo novidades, ou confiando em mim para ser a ponte entre elas e vocês.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Mais do que descontos e vantagens, o que me motiva é essa comunidade que a gente construiu. Ter um espaço onde posso apoiar, inspirar e ser apoiada de volta me emociona de verdade.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            No fim, o Drop é isso: um lugar para compartilhar recomendações pessoais de forma transparente, prática e carinhosa, do jeito que eu vivo e acredito.
          </p>
        </>
      ),
    },
  ];

  const slide = slides[current];

  return (
    <section id="sobre" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a Mari</h2>
          </div>

          {/* Dois “quadrados”: imagem (sempre centralizada) + texto */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* QUADRADO DA IMAGEM */}
            <div
              className={`flex flex-col items-center justify-center text-center ${
                slide.reverse ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`rounded-full shadow-lg object-cover select-none mb-6 ${
                  slide.showInfo ? "w-48 h-48" : "w-64 h-64"
                }`}
              />

              {slide.showInfo && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Mariana Bragança
                  </h3>
                  <p className="text-pink-500 font-medium mb-4">
                    Apaixonada por fitness & bem-estar
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://instagram.com/marianabraganca_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium shadow transition"
                    >
                      <Instagram size={18} className="mr-2" />
                      Seguir no Instagram
                    </a>

                    <a
                      href={mailto}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium shadow transition"
                    >
                      <Mail size={18} className="mr-2" />
                      Propor Parceria
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* QUADRADO DO TEXTO */}
            <div
              className={`prose prose-lg ${
                slide.reverse ? "md:order-1" : "md:order-2"
              }`}
            >
              {slide.text}
            </div>
          </div>
        </div>
      </div>

      {/* Navegação (botão pequeno de deslizar) */}
      {current > 0 && (
        <button
          onClick={() => setCurrent(current - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-pink-100"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-pink-500" />
        </button>
      )}
      {current < slides.length - 1 && (
        <button
          onClick={() => setCurrent(current + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-pink-100"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6 text-pink-500" />
        </button>
      )}
    </section>
  );
};

export default AboutSection;
