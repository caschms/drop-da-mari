import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "hsl(var(--offwhite))" }}>
      <div className="max-w-7xl mx-auto px-4 py-8 text-foreground">
        {/* Título central com ícone */}
        <div className="text-center mb-6">
          <h3
            className="flex items-baseline justify-center gap-2 text-xl sm:text-2xl font-bold mb-1 text-[hsl(0,0%,11%)] leading-tight"
            style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}
          >
            <img
              src="/favicon.png"
              alt="Logo Mabra"
              className="inline-block h-[1em] w-auto align-text-top relative top-[2px] opacity-90"
            />
            <span>
              <span className="text-[hsl(var(--primary))]">Drop</span> da Mari
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-snug text-sm sm:text-base">
            Curadoria especial de produtos fitness, corrida e bem-estar.  
            Produtos testados e aprovados com cupons exclusivos.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-6"></div>

        {/* Direitos reservados com ícone */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="flex items-baseline gap-2 text-muted-foreground text-xs sm:text-sm leading-tight">
            <img
              src="/favicon.png"
              alt="Logo Mabra"
              className="inline-block h-[1em] w-auto align-text-top relative top-[2px] opacity-80"
            />
            <span>
              © {currentYear}{" "}
              <span style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}>
                Drop da Mari
              </span>
              . Todos os direitos reservados.
            </span>
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            Feito com <span className="text-[hsl(var(--primary))]">❤️</span> para você
          </div>
        </div>

        {/* Disclaimer de Afiliados */}
        <div className="mt-6 pt-4 border-t border-border">
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
