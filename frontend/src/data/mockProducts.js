// MOCK DATA - SUBSTITUA PELOS PRODUTOS REAIS
// Para editar os produtos, modifique os objetos abaixo:
// - name: Nome do produto
// - description: Descrição curta
// - price: Preço original
// - discountPercent: Porcentagem de desconto
// - coupon: Código do cupom
// - testimonial: Depoimento da Mari
// - image: URL da imagem (substitua por imagens reais)
// - category: Categoria do produto
// - affiliateUrl: URL do parceiro (substitua pela URL real com UTM)

export const mockProducts = [
  {
    id: 1,
    name: "Whey Protein Isolado",
    description: "Proteína de alta qualidade para recuperação muscular",
    price: 149.90,
    discountPercent: 15,
    coupon: "MARI15",
    testimonial: "Uso depois de cada treino! Me ajuda muito na recuperação muscular.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    category: "suplementos",
    affiliateUrl: "https://exemplo.com/whey-protein?coupon=MARI15&utm_source=drop-da-mari&utm_medium=affiliate&utm_campaign=cupom",
    partnerSite: "Loja Exemplo"
  },
  {
    id: 2,
    name: "Legging de Compressão",
    description: "Legging premium para treinos intensos",
    price: 199.90,
    discountPercent: 10,
    coupon: "MARI10",
    testimonial: "Perfeita para corridas longas! O tecido é super confortável.",
    image: "https://images.unsplash.com/photo-1506629905607-96331b86c171?w=400&h=400&fit=crop",
    category: "roupas",
    affiliateUrl: "https://exemplo.com/legging?coupon=MARI10&utm_source=drop-da-mari&utm_medium=affiliate&utm_campaign=cupom",
    partnerSite: "Moda Fitness"
  },
  {
    id: 3,
    name: "Garrafa Térmica 500ml",
    description: "Mantém a temperatura por até 12 horas",
    price: 89.90,
    discountPercent: 5,
    coupon: "MARI5",
    testimonial: "Essencial nos meus treinos! Água sempre na temperatura ideal.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    category: "acessorios",
    affiliateUrl: "https://exemplo.com/garrafa?coupon=MARI5&utm_source=drop-da-mari&utm_medium=affiliate&utm_campaign=cupom",
    partnerSite: "Acessórios Sport"
  },
  {
    id: 4,
    name: "Shampoo Fortalecedor",
    description: "Fortalece e dá brilho aos cabelos",
    price: 59.90,
    discountPercent: 20,
    coupon: "MARI20",
    testimonial: "Meu cabelo ficou muito mais forte e sedoso!",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    category: "cosmeticos",
    affiliateUrl: "https://exemplo.com/shampoo?coupon=MARI20&utm_source=drop-da-mari&utm_medium=affiliate&utm_campaign=cupom",
    partnerSite: "Beleza Natural"
  },
  {
    id: 5,
    name: "Protetor Solar FPS 70",
    description: "Proteção máxima para atividades ao ar livre",
    price: 79.90,
    discountPercent: 15,
    coupon: "MARI15",
    testimonial: "Uso sempre nas corridas matinais. Proteção incrível!",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    category: "dermocosmeticos",
    affiliateUrl: "https://exemplo.com/protetor?coupon=MARI15&utm_source=drop-da-mari&utm_medium=affiliate&utm_campaign=cupom",
    partnerSite: "Derma Care"
  },
  {
    id: 6,
    name: "Creatina Monohidratada",
    description: "Aumenta força e performance nos treinos",
    price: 129.90,
    discountPercent: 12,
    coupon: "MARI12",
    testimonial: "Resultados visíveis em poucas semanas de uso!",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop",
    category: "suplementos",
    affiliateUrl: "https://exemplo.com/creatina?coupon=MARI12&utm_source=drop-da-mari&utm_medium=affiliate&utm_campaign=cupom",
    partnerSite: "Suplementos Pro"
  }
];

export const categories = [
  { id: "todos", name: "Todos", count: mockProducts.length },
  { id: "suplementos", name: "Suplementos", count: mockProducts.filter(p => p.category === "suplementos").length },
  { id: "roupas", name: "Roupas", count: mockProducts.filter(p => p.category === "roupas").length },
  { id: "acessorios", name: "Acessórios", count: mockProducts.filter(p => p.category === "acessorios").length },
  { id: "cosmeticos", name: "Cosméticos", count: mockProducts.filter(p => p.category === "cosmeticos").length },
  { id: "dermocosmeticos", name: "Dermocosméticos", count: mockProducts.filter(p => p.category === "dermocosmeticos").length }
];