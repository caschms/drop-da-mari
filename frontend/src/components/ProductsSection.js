import React, { useMemo, useState } from "react";
import products from "../products";
import ProductCard from "./ProductCard";

// util simples para contar por categoria
function buildCategories(list) {
  const map = new Map();
  for (const p of list) {
    const cat = (p.category || "Outros").trim();
    map.set(cat, (map.get(cat) || 0) + 1);
  }
  // ordena por nome
  const items = Array.from(map.entries())
    .map(([name, count]) => ({ id: name, name, count }))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  // inclui "Todos" no início
  return [{ id: "Todos", name: "Todos", count: list.length }, ...items];
}

const ProductsSection = () => {
  const [active, setActive] = useState("Todos");

  const categories = useMemo(() => buildCategories(products), []);
  const filtered = useMemo(() => {
    if (active === "Todos") return products;
    return products.filter((p) => (p.category || "").trim() === active);
  }, [active]);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Produtos Selecionados
          </h2>
          <p className="text-gray-600 text-lg">
            Cada produto foi cuidadosamente testado e aprovado
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={[
                "px-4 py-2 rounded-full border text-sm font-medium transition",
                active === c.id
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-gray-700 border-gray-200 hover:border-pink-300"
              ].join(" ")}
              aria-pressed={active === c.id}
            >
              {c.name} {c.id !== "Todos" ? `(${c.count})` : ""}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Vazio */}
        {filtered.length === 0 && (
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
