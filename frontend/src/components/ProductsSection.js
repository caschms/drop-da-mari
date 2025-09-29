import React, { useState, useMemo, useEffect } from "react";
import products from "../products";
import ProductCard from "./ProductCard";

// Ordem fixa por importância
const DESIRED_ORDER = [
  "Todos",
  "Roupas",
  "Acessórios",
  "Suplementos",
  "Cabelos",
  "Pele",
  "Outros",
];

// Normaliza texto (acentos, espaços, case)
const normalize = (str) =>
  (str ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\u00A0/g, " ")
    .trim();

// Mapeia categorias do dataset para as categorias canônicas desejadas
const canonicalizeCategory = (raw) => {
  const n = normalize(raw);
  // aliases (singular/plural/sem acento)
  if (n === "roupa" || n === "roupas") return "Roupas";
  if (n === "acessorio" || n === "acessorios" || n === "acessório" || n === "acessórios") return "Acessórios";
  if (n === "suplemento" || n === "suplementos") return "Suplementos";
  if (n === "cabelo" || n === "cabelos") return "Cabelos";
  if (n === "pele") return "Pele";
  if (n === "outro" || n === "outros") return "Outros";

  // Se já vier igual a alguma categoria desejada, mantém
  if (DESIRED_ORDER.includes(raw)) return raw;

  // Qualquer outra cai em "Outros"
  return "Outros";
};

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

  // Embaralha produtos só para exibição (não afeta filtros)
  const shuffledProducts = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5);
  }, []);

  // Filtra por categoria (canônica) e busca
  const filteredProducts = useMemo(() => {
    return shuffledProducts.filter((product) => {
      const catCanon = canonicalizeCategory(product.category);
      const matchesCategory =
        selectedCategory === "Todos" || catCanon === selectedCategory;

      const matchesSearch =
        normalize(product.name).includes(normalize(searchTerm)) ||
        normalize(product.description).includes(normalize(searchTerm));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, shuffledProducts]);

  // Resetar produto ativo e ajustar limite inicial ao trocar filtro/busca
  useEffect(() => {
    setActiveProductId(null);
    setVisibleCount(isMobile ? 5 : 8);
  }, [searchTerm, selectedCategory, isMobile]);

  // Contagem por categoria (usando categorias canônicas)
  const countsByCat = useMemo(() => {
    const counts = {
      Roupas: 0,
      "Acessórios": 0,
      Suplementos: 0,
      Cabelos: 0,
      Pele: 0,
      Outros: 0,
    };
    products.forEach((p) => {
      const catCanon = canonicalizeCategory(p?.category);
      if (catCanon !== "Todos") counts[catCanon] = (counts[catCanon] || 0) + 1;
    });
    return counts;
  }, []);

  // Produtos visíveis
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-12 px-4 md:px-8 lg:px-16">
    <h2
      className="text-2xl font-bold text-center mb-6"
     style={{ fontFamily: 'Sinerva, ui-sans-serif, system-ui' }}
    >
        Produtos
    </h2>
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

      {/* Filtros (ordem fixa) */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {DESIRED_ORDER.map((cat) => {
          const selected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selected ? "bg-pink-500 text-white" : "bg-white text-gray-700"
              }`}
            >
              {/* Tudo branco quando selecionado */}
              <span className={selected ? "text-white" : ""}>{cat}</span>
              {cat !== "Todos" && (
                <span className={`ml-1 text-sm ${selected ? "text-white" : "text-gray-500"}`}>
                  ({countsByCat[cat] ?? 0})
                </span>
              )}
            </button>
          );
        })}
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

      {/* Botão "Mostrar mais" */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + (isMobile ? 5 : 8))}
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
