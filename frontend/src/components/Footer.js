import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Conteúdo Principal */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-pink-400">Drop</span> da Mari
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Curadoria especial de produtos fitness, corrida e bem-estar. 
            Produtos testados e aprovados com cupons exclusivos.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Drop da Mari. Todos os direitos reservados.
          </div>
          
          <div className="text-gray-400 text-sm">
            Feito com ❤️ para você
          </div>
        </div>

        {/* Disclaimer de Afiliados */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-xs text-center leading-relaxed">
            <strong>Transparência:</strong> Este site contém links de afiliados. 
            Mari pode receber uma comissão ao indicar produtos, sem custo adicional para você. 
            Todos os produtos são genuinamente testados e recomendados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;