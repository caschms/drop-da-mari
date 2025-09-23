import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../products.js';

const Products = () => {
  const products = productsData.products;

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Produtos Selecionados
          </h2>
          <p className="text-gray-600 text-lg">
            Cada produto foi cuidadosamente testado e aprovado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;