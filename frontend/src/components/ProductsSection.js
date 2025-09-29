import React, { useState, useMemo, useEffect } from "react";
import products from "../products";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProductId, setActiveProductId] = useState(null);

  const [visibleCount, setVisibleCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta mobile pela largura da janela
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Normaliza texto
  const normalize = (str) =>
    (str ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .replace(/\u00A0/g, " ")
      .trim();

  // Embaralha produtos só uma vez
  const shuffledProducts = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5);
  }, []);

  // Filtra por categoria e busca
  const filteredProducts = useMemo(() => {
    return shuffledProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todos" || product.category === selectedCategory;
      const matchesSearch =
        normalize(product.name).includes(normalize(searchTerm)) ||
        normalize(product.description).includes(normalize(searchTerm));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, shuffledProducts]);

  // Resetar produto ativo e ajustar limite inicial ao trocar filtro/busca
  useEffect(() => {
    setActiveProductId(null);
    if (isMobile) {
      setVisibleCount(5); // mobile começa com 5
    } else {
      setVisibleCount(8); // desktop começa com 8
    }
  }, [searchTerm, selectedCategory, isMobile]);

  // Categorias dinâmicas com contagem
  const categories = useMemo(() => {
    const counts = {};
    shuffledProducts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return ["Todos", ...Object.keys(counts)];
  }, [shuffledProducts]);

  // Produtos visíveis
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-6">Produtos</h2>

      {/* Busca */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full max-w-md"
        />
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
            {cat !== "Todos" && (
              <span className="ml-1 text-sm text-gray-500">
                (
                {
                  shuffledProducts.filter((p) => p.category === cat)
                    .length
                }
                )
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid de produtos */}
      {visibleProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              activeProductId={activeProductId}
              setActiveProductId={setActiveProductId}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">
          Nenhum produto encontrado.
        </p>
      )}

      {/* Botão "Mostrar mais" — agora aparece em todas as versões */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              setVisibleCount((prev) =>
                prev + (isMobile ? 5 : 8) // mobile carrega +5, desktop +8
              )
            }
            className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600"
          >
            Mostrar mais
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
