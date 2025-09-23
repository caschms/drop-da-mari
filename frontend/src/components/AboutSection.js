import React from "react";
import { Instagram, Heart, Award, Users } from "lucide-react";
import { Button } from "./ui/button";

const AboutSection = () => {
  const openInstagram = () => {
    // SUBSTITUA PELA URL REAL DO INSTAGRAM DA MARI
    window.open('https://instagram.com/marianabraganca_', '_blank', 'noopener,noreferrer');
  };

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
                {/* SUBSTITUA PELA FOTO REAL DA MARI */}
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b6ca1799?w=300&h=300&fit=crop&crop=face"
                  alt="Mariana Bragança - Fundadora do Drop da Mari"
                  className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 shadow-xl border-4 border-pink-100"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart size={20} className="text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">Mariana Silva</h3>
              <p className="text-pink-500 font-medium mb-4">Apaixonada por fitness & bem-estar</p>
              
              <Button
                onClick={openInstagram}
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
              >
                <Instagram size={18} className="mr-2" />
                Seguir no Instagram
              </Button>
            </div>

            {/* Texto sobre a Mari */}
            <div>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Olá! Eu sou a Mari, e minha paixão por fitness e bem-estar me levou a criar 
                  este espaço especial. Depois de anos testando produtos, descobrindo marcas 
                  incríveis e vivenciando na pele o que realmente funciona, decidi compartilhar 
                  tudo isso com vocês.
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cada produto aqui foi cuidadosamente selecionado e testado por mim. 
                  Não indico nada que eu mesma não usaria ou não recomendaria para uma amiga. 
                  Meu objetivo é facilitar sua jornada fitness, oferecendo sempre as melhores 
                  opções com descontos exclusivos.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <Award size={24} className="text-pink-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-800">5+</div>
                    <div className="text-sm text-gray-600">Anos de experiência</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Users size={24} className="text-green-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-800">1000+</div>
                    <div className="text-sm text-gray-600">Seguidores felizes</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Heart size={24} className="text-purple-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-800">100%</div>
                    <div className="text-sm text-gray-600">Curadoria autêntica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;