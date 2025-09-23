import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Products from './Products';
import ProductsSection from './ProductsSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Products />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;