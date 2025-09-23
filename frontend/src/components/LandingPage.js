import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default LandingPage;