import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
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

      {/* CATEGORIES */}
    <div id="categories">
        <Categories />
    </div>
  
      <div id="productos">
        <Products />
      </div>

      <div id="nosotros">
        <About />
      </div>

      {/* FOOTER */}
      <div id="contacto">
        <Footer/>
      </div>
    </div>
  );
}
