import React from 'react';
import products from '../products';
import ProductCard from './ProductCard';

const Products = () => (
  <section id="products" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      {Array.isArray(products) && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default Products;
