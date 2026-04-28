import React from "react";
import WhatsAppFloat from "../components/WhatsAppFloat"; // 👈 CORREGIDO PATH
import Hero from "../components/Hero";
import Products from "../components/Products";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import About from "../components/About";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      
      {/* HERO */}
      <div id="hero">
        <Hero />
      </div>

      {/* BENEFICIOS */}
      <div id="benefits">
        <Benefits />
      </div>

      {/* CATEGORÍAS */}
      <div id="categories">
        <Categories />
      </div>

      {/* PRODUCTOS */}
      <div id="productos">
        <Products />
      </div>

      {/* NOSOTROS */}
      <div id="nosotros">
        <About />
      </div>

      {/* FOOTER */}
      <div id="contacto">
        <Footer />
      </div>

      {/* ✅ BOTÓN WHATSAPP GLOBAL (STICKY) */}
      <WhatsAppFloat />

    </div>
  );
}