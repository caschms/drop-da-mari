import React, { useState, useMemo, useEffect } from "react";
import products from "../products";
import ProductCard from "./ProductCard";

const DESIRED_ORDER = ["Todos","Roupas","Acessórios","Suplementos","Cabelos","Pele"];

const normalize = (str) =>
  (str ?? "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\u00A0/g, " ").trim();

const canonicalizeCategory = (raw) => {
  const n = normalize(raw);
  if (n === "roupa" || n === "roupas") return "Roupas";
  if (["acessorio","acessorios","acessório","acessórios"].includes(n)) return "Acessórios";
  if (n === "suplemento" || n === "suplementos") return "Suplementos";
  if (n === "cabelo" || n === "cabelos") return "Cabelos";
  if (n === "pele") return "Pele";
  return "Todos";
};

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProductId, setActiveProductId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shuffledProducts = useMemo(
    () => [...products].sort(() => Math.random() - 0.5),
    []
  );

  // Divide produtos normais e parceiros
  const produtosNormais = useMemo(() => {
    return shuffledProducts.filter(
      (p) => canonicalizeCategory(p.category) !== "Todos" &&
             normalize(p.category) !== "parceiros"
    );
  }, [shuffledProducts]);

  const parceiros = useMemo(() => {
    return shuffledProducts.filter(
      (p) => normalize(p.category) === "parceiros"
    );
  }, [shuffledProducts]);

  const filteredProducts = useMemo(() => {
    return produtosNormais.filter((product) => {
      const catCanon = canonicalizeCategory(product.category);
      const matchesCategory = selectedCategory === "Todos" || catCanon === selectedCategory;
      const matchesSearch =
        normalize(product.name).includes(normalize(searchTerm)) ||
        normalize(product.description).includes(normalize(searchTerm));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, produtosNormais]);

  useEffect(() => {
    setActiveProductId(null);
    setVisibleCount(isMobile ? 5 : 8);
  }, [searchTerm, selectedCategory, isMobile]);

  const countsByCat = useMemo(() => {
    const counts = { Roupas: 0, Acessórios: 0, Suplementos: 0, Cabelos: 0, Pele: 0 };
    produtosNormais.forEach((p) => {
      const catCanon = canonicalizeCategory(p?.category);
      if (catCanon !== "Todos") counts[catCanon] = (counts[catCanon] || 0) + 1;
    });
    return counts;
  }, [produtosNormais]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section
      id="products"
      className="section-bridge"
      style={{
        background: 'hsl(var(--accent-baby))',
        '--this-bg': 'hsl(var(--accent-baby))',
        '--next-bg': 'hsl(var(--primary-baby))',
      }}
    >
      <div className="bridge-content pt-6 pb-16 px-4 md:px-8 lg:px-16 text-foreground">

        {/* ---------------- Produtos ---------------- */}
        <h2
          className="text-3xl font-bold text-center mb-6 text-[hsl(0,0%,11%)]"
          style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}
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
            className="border rounded-lg px-4 py-2 w-full max-w-md bg-white focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {DESIRED_ORDER.map((cat) => {
            const selected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selected ? "bg-primary text-primary-foreground" : "bg-white text-gray-700"
                } text-sm md:text-base`}
              >
                <span>{cat}</span>
                {cat !== "Todos" && (
                  <span
                    className={`ml-1 ${
                      selected ? "text-primary-foreground" : "text-gray-500"
                    } text-xs md:text-sm`}
                  >
                    ({countsByCat[cat] ?? 0})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Grid Produtos */}
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
          <p className="text-center text-gray-500 mt-8">Nenhum produto encontrado.</p>
        )}

        {/* Botão "Mostrar mais" */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + (isMobile ? 5 : 8))}
              className="px-6 py-2 rounded-full font-semibold shadow text-white 
                         bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition"
            >
              Mostrar mais
            </button>
          </div>
        )}

        {/* ---------------- Parceiros ---------------- */}
        {parceiros.length > 0 && (
          <>
            <h2
              className="text-3xl font-bold text-center my-10 text-[hsl(0,0%,11%)]"
              style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}
            >
              Profissionais Parceiros
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {parceiros.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  activeProductId={activeProductId}
                  setActiveProductId={setActiveProductId}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default ProductsSection;
