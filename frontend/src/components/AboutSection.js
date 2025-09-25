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
                  src="https://images.unsplash.com/photo-1494790108755-2616b6ca1799?w=300&h=300&fit=crop&crop=face"
                  alt="Mariana Bragança - Fundadora do Drop da Mari"
                  className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 shadow-xl border-4 border-pink-100"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart size={20} className="text-white" />
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
                  Olá! Eu sou a Mari, e minha paixão por fitness e bem-estar me
                  levou a criar este espaço especial. Depois de anos testando
                  produtos, descobrindo marcas incríveis e vivenciando na pele
                  o que realmente funciona, decidi compartilhar tudo isso com
                  vocês.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cada produto aqui foi cuidadosamente selecionado e testado por
                  mim. Não indico nada que eu mesma não usaria ou não
                  recomendaria para uma amiga. Meu objetivo é facilitar sua
                  jornada fitness, oferecendo sempre as melhores opções com
                  descontos exclusivos.
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
