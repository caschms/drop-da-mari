import React, { useState, useMemo, useEffect } from "react";
import products from "../products";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProductId, setActiveProductId] = useState(null); // 🔑 controle global
  const [shuffledProducts, setShuffledProducts] = useState([]); // lista fixa embaralhada

  // Normaliza: minúsculas, remove acentos, remove invisíveis, normaliza espaços
  const normalize = (str) =>
    (str ?? "")
      .toLowerCase()
      .normalize("NFD") // separa acentos
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[\u200B-\u200D\uFEFF]/g, "") // remove zero-width
      .replace(/\u00A0/g, " ") // NBSP -> espaço comum
      .replace(/\s+/g, " ") // colapsa múltiplos espaços
      .trim();

  // 🔀 Embaralhar apenas uma vez ao carregar
  useEffect(() => {
    if (Array.isArray(products)) {
      const arr = [...products];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      setShuffledProducts(arr);
    }
  }, []);

  // Categorias + contagem
  const { categories, counts } = useMemo(() => {
    const countsMap = {};
    for (const p of shuffledProducts) {
      const cat = p?.category || "Outros";
      countsMap[cat] = (countsMap[cat] || 0) + 1;
    }
    return { categories: ["Todos", ...Object.keys(countsMap)], counts: countsMap };
  }, [shuffledProducts]);

  // 1) Filtro por categoria
  const byCategory =
    selectedCategory === "Todos"
      ? shuffledProducts
      : shuffledProducts.filter((p) => (p?.category || "Outros") === selectedCategory);

  // 2) Filtro por busca (normalizado)
  const query = normalize(searchTerm);
  const finalFiltered = byCategory.filter((p) => {
    if (!query) return true;
    const searchable = normalize(`${p?.name || ""} ${p?.description || ""}`);
    return searchable.includes(query);
  });

  // 🔄 Resetar activeProductId quando categoria ou busca mudar
  useEffect(() => {
    setActiveProductId(null);
  }, [selectedCategory, searchTerm]);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Produtos em Destaque
        </h2>

        {/* Busca digitável */}
        <div className="mb-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar produto por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
          />
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-pink-500 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}{" "}
              {cat === "Todos" ? `(${shuffledProducts.length})` : `(${counts[cat] || 0})`}
            </button>
          ))}
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {finalFiltered.length > 0 ? (
            finalFiltered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                activeProductId={activeProductId}
                setActiveProductId={setActiveProductId}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Nenhum produto encontrado.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
