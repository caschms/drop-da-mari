import React from "react";
import { Instagram, Heart, Mail } from "lucide-react";

const AboutSection = () => {
  const subject = encodeURIComponent("Parceria com o Drop da Mari");
  const body = encodeURIComponent(
    "Olá, Mari!\n\nMeu nome é [Seu Nome] da [Marca]. Gostaria de enviar uma proposta de parceria para divulgação de [Produto/Cupom].\n\nLinks e infos:\n- Site:\n- Instagram:\n- Condições (produto, comissão, cupom, vigência):\n\nObrigado!"
  );
  const mailto = `mailto:contato@dropdamari.com?subject=${subject}&body=${body}`;

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sobre a Mari
            </h2>
            <p className="text-gray-600 text-lg">
              A curadoria por trás dos melhores produtos fitness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto e Info da Mari */}
            <div className="text-center md:text-left">
              <div className="relative inline-block mb-6">
                <img

                  src="https://res.cloudinary.com/dupz0ffvs/image/upload/v1758832450/About_Mariana_oruxqw.jpg"
                  alt="Mariana Bragança - Fundadora do Drop da Mari"
                  className="w-48 h-48 rounded-full shadow-lg object-cover select-none"
                />
                <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Mariana Bragança
              </h3>
              <p className="text-pink-500 font-medium mb-4">
                Apaixonada por fitness & bem-estar
              </p>

              {/* Botões lado a lado */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
            </div>

            {/* Texto sobre a Mari */}
            <div>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Oi, eu sou a Mari! Minha paixão pela rotina saudável e 
                  bem-estar me inspirou a criar este espaço.
                  Depois de experimentar diferentes produtos e conhecer 
                  marcas incríveis, decidi reunir em um só lugar o que 
                  realmente vale a pena.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cada item que você encontra por aqui foi testado e 
                  escolhido com cuidado. Não indico nada que eu mesma 
                  não usaria ou não recomendaria para uma amiga, pode 
                  ficar tranquila!
                  Meu propósito é tornar sua jornada fitness mais leve 
                  e prática, sempre trazendo opções de qualidade e 
                  vantagens exclusivas para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
