import React, { useState } from "react";

export default function ProductCard({ product, activeProductId, setActiveProductId }) {
  const [copied, setCopied] = useState(false);

  const handleBuyClick = () => {
    // Se tiver cupom e não for o ativo, bloqueia
    if (product.coupon && activeProductId !== product.id) {
      alert("⚠️ Copie o cupom deste produto antes de comprar!");
      return;
    }
    window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
  };

  const handleCopyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(product.coupon);
      setCopied(true);
      setActiveProductId(product.id); // define este como único ativo
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Erro ao copiar cupom:", err);
    }
  };

  const formatBRL = (n) =>
    typeof n === "number"
      ? n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      : n;

  const isActive = activeProductId === product.id;

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

        <div className="flex items-center space-x-2 mb-4">
          {product.price && (
            <span className="text-2xl font-bold text-gray-800">
              {formatBRL(product.price)}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              {formatBRL(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Cupom */}
        {product.coupon ? (
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mb-4">
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
                type="button"
                onClick={handleCopyCoupon}
                className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-500 mb-4">Oferta sem cupom</div>
        )}

        {/* Comprar */}
        <button
          type="button"
          onClick={handleBuyClick}
          disabled={!!product.coupon && !isActive} 
          className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-200 transform shadow-lg ${
            product.coupon && !isActive
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white hover:scale-105 hover:shadow-xl"
          }`}
        >
          Comprar com Desconto
        </button>
      </div>
    </div>
  );
}
