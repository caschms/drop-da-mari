import React from 'react';

const ProductCard = ({ product }) => {
  const handleBuyClick = () => {
    // Abre o link de afiliado em nova aba
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  const handleCopyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(product.coupon);
      alert(`Cupom ${product.coupon} copiado! Cole no checkout para aplicar o desconto.`);
    } catch (err) {
      alert('Erro ao copiar cupom. Tente copiar manualmente: ' + product.coupon);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Imagem do Produto */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        {/* Badge de Desconto */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {product.discount}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        {/* Categoria */}
        <div className="text-pink-500 text-sm font-medium mb-2">
          {product.category}
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {product.title}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Preços */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-800">
            {product.price}
          </span>
          <span className="text-lg text-gray-500 line-through">
            {product.originalPrice}
          </span>
        </div>

        {/* Cupom */}
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-pink-600 font-medium">CUPOM EXCLUSIVO</p>
              <p className="text-lg font-bold text-pink-700">{product.coupon}</p>
            </div>
            <button
              onClick={handleCopyCoupon}
              className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              Copiar
            </button>
          </div>
        </div>

        {/* Botão de Compra */}
        <button
          onClick={handleBuyClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Comprar com Desconto
        </button>

        {/* Aviso */}
        <p className="text-xs text-gray-500 text-center mt-3">
          Link com cupom já aplicado • Sem custo adicional
        </p>
      </div>
    </div>
  );
};

export default ProductCard;