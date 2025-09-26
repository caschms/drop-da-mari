import React, { useState } from "react";

export default function ProductCard({ product, activeProductId, setActiveProductId }) {
  const [copied, setCopied] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isActive = activeProductId === product.id;
  const isDisabled = !!product.coupon && !isActive;

  const handleBuyClick = () => {
    window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
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

    // Feedback mobile apenas no clique
    const isTouch =
      (window.matchMedia && window.matchMedia("(hover: none)").matches) ||
      (navigator.maxTouchPoints > 0);

    if (isTouch) {
      setShowHint(true);
      if (navigator.vibrate) navigator.vibrate(30);
      setTimeout(() => setShowHint(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Imagem */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/640x400?text=Produto";
          }}
        />
        {product.discount && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {product.discount}
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-6">
        {product.category && (
          <div className="text-pink-500 text-sm font-medium mb-2">
            {product.category}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>

        {product.description && (
          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
            {product.description}
          </p>
        )}

        {/* Base fixa: cupom + comprar */}
        <div className="mt-auto space-y-3">
          {product.coupon ? (
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
              {/* linha 1: label */}
              <p className="text-[10px] sm:text-xs text-pink-600 font-medium uppercase tracking-wide mb-1">
                CUPOM EXCLUSIVO
              </p>

              {/* linha 2: cupom + botão (sem wrap) */}
              <div className="flex items-center gap-2">
                <p className="flex-1 min-w-0 text-pink-700 font-bold leading-tight text-base sm:text-lg whitespace-nowrap truncate">
                  {product.coupon}
                </p>
                <button
                  id={`coupon-${product.id}`}
                  type="button"
                  onClick={handleCopyCoupon}
                  className="shrink-0 bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded text-sm font-medium transition-colors"
                >
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </div>

              {/* Dica inline (mobile) */}
              {showHint && (
                <div className="mt-2 text-xs text-pink-700 bg-pink-100/70 rounded px-2 py-1">
                  Toque em <strong>Copiar</strong> para liberar o botão de compra.
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm text-gray-500">Oferta sem cupom</div>
          )}

          {/* Botão de compra */}
          {isDisabled ? (
            <div className="relative group">
              <button
                type="button"
                aria-disabled="true"
                onClick={guideToCopy} // só no clique
                className="w-full font-bold py-3 px-4 rounded-lg transition-all duration-200 transform shadow-lg bg-gray-300 text-gray-500 cursor-pointer"
              >
                Comprar com Desconto
              </button>
              {/* Tooltip no hover (desktop) */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 bg-pink-600 text-white text-xs font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap">
                Copie o cupom!
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleBuyClick}
              className="w-full font-bold py-3 px-4 rounded-lg transition-all duration-200 transform shadow-lg bg-green-500 hover:bg-green-600 text-white hover:scale-105 hover:shadow-xl"
            >
              Comprar com Desconto
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
