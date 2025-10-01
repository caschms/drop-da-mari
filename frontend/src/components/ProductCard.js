import React, { useState } from "react";

export default function ProductCard({ product, activeProductId, setActiveProductId }) {
  const [copied, setCopied] = useState(false);

  const isActive = activeProductId === product.id;
  const isDisabled = !!product.coupon && !isActive;
  const isParceiro = product.category === "Parceiros";

  // Mensagens personalizadas fixas por parceiro
  const getPartnerMessage = (text = "") => {
    const n = (text || "").toLowerCase();

    if (n.includes("fisioterapeuta"))
      return "Oi, Thiago! Encontrei seu contato pelo Drop da Mari 👋 e gostaria de mais informações sobre consultas.";

    if (n.includes("personal"))
      return "Oi, Kayque! Vi sua indicação no Drop da Mari 👋 e gostaria de conversar sobre treinos personalizados.";

    if (n.includes("corrida"))
      return "Oi, Rodrigo! Encontrei seu contato no Drop da Mari 👋 e quero saber mais sobre seus treinos de corrida.";

    if (n.includes("nutricionista"))
      return "Oi, Nathalia! Vi sua indicação no Drop da Mari 👋 e gostaria de mais informações sobre consultas.";

    if (n.includes("fotografia") || n.includes("fotógrafo") || n.includes("fotografo"))
      return "Oi, Karol! Encontrei seu contato pelo Drop da Mari 👋 e quero conversar sobre um ensaio fotográfico.";
  };

  const handleBuyClick = () => {
    if (window.gtag) {
      window.gtag("event", "click_comprar", {
        event_category: "E-commerce",
        event_label: product.name,
        value: product.price || 0,
      });
    }

    if (isParceiro) {
      const msg = encodeURIComponent(getPartnerMessage(product.name + " " + product.description));
      const url = `${product.affiliateLink}?text=${msg}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(product.coupon);
      setCopied(true);
      setActiveProductId(product.id);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Erro ao copiar cupom:", err);
    }
  };

  const guideToCopy = () => {
    const couponButton = document.getElementById(`coupon-${product.id}`);
    if (couponButton) {
      couponButton.scrollIntoView({ behavior: "smooth", block: "center" });
      couponButton.classList.add("shake");
      setTimeout(() => couponButton.classList.remove("shake"), 500);
    }
    const isTouch =
      (window.matchMedia && window.matchMedia("(hover: none)").matches) ||
      (navigator.maxTouchPoints > 0);
    if (isTouch && navigator.vibrate) navigator.vibrate(30);
  };

  const handleBuyHover = () => {
    if (isDisabled) guideToCopy();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      {/* Imagem */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/640x400?text=Produto";
          }}
        />
        {!isParceiro && product.discount && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {product.discount}
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4 md:p-5 flex flex-col h-full">
        {product.category && (
          <div className="text-pink-500 text-sm md:text-xs font-medium mb-2 md:mb-1">
            {product.category}
          </div>
        )}

        <h3 className="text-lg md:text-base font-bold text-gray-800 mb-3 md:mb-2 leading-relaxed md:leading-snug">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-sm md:text-xs text-gray-600 mb-4 md:mb-3 leading-relaxed md:leading-snug">
            {product.description}
          </p>
        )}

        {/* Base fixa do card */}
        <div className="mt-auto space-y-3 md:space-y-2">
          {/* Cupom só aparece se não for Parceiro */}
          {!isParceiro && (
            product.coupon ? (
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 md:p-2">
                <div className="flex items-center justify-between min-w-0 gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-pink-600 font-medium">CUPOM EXCLUSIVO</p>
                    <p
                      className="text-lg md:text-base font-bold text-pink-700 truncate"
                      title={product.coupon}
                      aria-label={`Cupom ${product.coupon}`}
                    >
                      {product.coupon}
                    </p>
                  </div>

                  <button
                    id={`coupon-${product.id}`}
                    type="button"
                    onClick={handleCopyCoupon}
                    className="shrink-0 bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded text-sm font-medium transition-colors"
                  >
                    {copied ? "Copiado!" : "Copiar"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500">Oferta sem cupom</div>
            )
          )}

          {/* Botão principal */}
          <button
            type="button"
            onClick={handleBuyClick}
            className="w-full font-bold py-3 md:py-2 px-4 rounded-lg transition-all duration-200 transform shadow-lg bg-green-500 hover:bg-green-600 text-white hover:scale-105 hover:shadow-xl"
          >
            {isParceiro ? "Falar no WhatsApp" : "Comprar com Desconto"}
          </button>
        </div>
      </div>
    </div>
  );
}
