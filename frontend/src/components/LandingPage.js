import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProductsSection from './ProductsSection';
import ContactSection from './ContactSection'; 
import Footer from './Footer';
import FloatingContactButton from "./FloatingContactButton";

const LandingPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <Hero />
    <ProductsSection />
    <ContactSection /> 
    <Footer />
    <FloatingContactButton /> 
  </div>
);

export default LandingPage;
