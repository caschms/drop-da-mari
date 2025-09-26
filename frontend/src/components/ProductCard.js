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

    // Feedback mobile
    const isTouch =
      (window.matchMedia && window.matchMedia("(hover: none)").matches) ||
      (navigator.maxTouchPoints > 0);

    if (isTouch) {
      setShowHint(true);
      if (navigator.vibrate) navigator.vibrate(30);
      setTimeout(() => setShowHint(false), 2000);
    }
  };

  const handleBuyHover = () => {
    if (isDisabled) {
      guideToCopy();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
      <div className="p-6">
        {product.category && (
          <div className="text-pink-500 text-sm font-medium mb-2">
            {product.category}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>

        {product.description && (
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Cupom */}
        {product.coupon ? (
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-pink-600 font-medium">
                  CUPOM EXCLUSIVO
                </p>
                <p className="text-lg font-bold text-pink-700">
                  {product.coupon}
                </p>
              </div>
              <button
                id={`coupon-${product.id}`}
                type="button"
                onClick={handleCopyCoupon}
                className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded text-sm font-medium transition-colors"
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
          <div className="text-sm text-gray-500 mb-4">Oferta sem cupom</div>
        )}

        {/* Comprar */}
        {isDisabled ? (
          <div className="relative group">
            <button
              type="button"
              aria-disabled="true"
              onClick={guideToCopy}
              onMouseEnter={handleBuyHover}
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
  );
}
