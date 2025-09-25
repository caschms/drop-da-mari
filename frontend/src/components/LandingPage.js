import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProductsSection from './ProductsSection';
import Footer from './Footer';
import FloatingContactButton from "./FloatingContactButton";
import AboutSection from './AboutSection';


const LandingPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <Hero />
    <ProductsSection />
    <AboutSection />
    <Footer />
    <FloatingContactButton /> 
  </div>
);

export default LandingPage;
