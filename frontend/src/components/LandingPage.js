import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProductsSection from './ProductsSection';
import Footer from './Footer';

const LandingPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <Hero />
    <ProductsSection />
    <Footer />
  </div>
);

export default LandingPage;
