import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Conteúdo Principal */}
        <div className="text-center mb-8">
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}
          >
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
            © {currentYear}{" "}
            <span style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}>
              Drop da Mari
            </span>
            . Todos os direitos reservados.
          </div>

          <div className="text-gray-400 text-sm">Feito com ❤️ para você</div>
        </div>

        {/* Selos de Segurança */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* SSL */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span role="img" aria-label="cadeado" className="text-green-400">
              🔒
            </span>
            <span>Conexão segura com certificado SSL</span>
          </div>

          {/* Google Safe Browsing */}
          <a
            href="https://transparencyreport.google.com/safe-browsing/search?url=dropdamari.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 text-sm hover:text-pink-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 21h4a1 1 0 001-1v-4H9v4a1 1 0 001 1z"
              />
            </svg>
            <span>Verificação Google Safe Browsing</span>
          </a>
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
