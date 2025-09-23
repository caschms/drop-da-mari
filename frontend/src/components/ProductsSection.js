import React, { useState } from "react";
import { mockProducts, categories } from "../data/mockProducts";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProducts = activeCategory === "todos" 
    ? mockProducts 
    : mockProducts.filter(product => product.category === activeCategory);

  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Produtos Selecionados
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cada produto foi cuidadosamente testado e aprovado. 
            Escolha a categoria e encontre o que você precisa!
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500 border border-gray-200"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mensagem se não há produtos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;