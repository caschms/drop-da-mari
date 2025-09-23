import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 via-white to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Curadoria especial para fitness e bem-estar</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Os melhores produtos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-green-400">
              fitness
            </span>{" "}
            com desconto
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra produtos cuidadosamente selecionados para turbinar seus treinos, 
            cuidar da sua saúde e potencializar seus resultados. Todos com cupons exclusivos!
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={scrollToProducts}
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Ver Produtos
              <ArrowDown size={20} className="ml-2" />
            </Button>
            
            <div className="text-sm text-gray-500">
              ⭐ Mais de 50+ produtos selecionados
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">15%</div>
              <div className="text-gray-600 text-sm">Desconto médio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">5+</div>
              <div className="text-gray-600 text-sm">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">100%</div>
              <div className="text-gray-600 text-sm">Curadoria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;