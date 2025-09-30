// src/pages/LandingPage.js (exemplo de caminho)
// Se tua LandingPage estiver em outro diretório, ajuste o import abaixo.
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import FloatingContactButton from "../components/FloatingContactButton"; // <- importante: este é o botão com "Parcerias" + mailto completo

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
