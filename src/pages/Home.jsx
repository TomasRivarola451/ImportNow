import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Products from "../components/Products";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

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


      {/* PRODUCTOS DESTACADOS */}
      <div id="featured">
        <Featured />
      </div>
      <div id="productos">
        <Products />
        <section className="p-4">
          <h3 className="text-lg font-semibold mb-2">Productos destacados</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 h-24 rounded-lg flex items-center justify-center">
              <p>iPhone 15</p>
            </div>
            <div className="bg-gray-900 h-24 rounded-lg flex items-center justify-center">
              <p>PS5</p>
            </div>
            <div className="bg-gray-900 h-24 rounded-lg flex items-center justify-center">
              <p>AirPods</p>
            </div>
            <div className="bg-gray-900 h-24 rounded-lg flex items-center justify-center">
              <p>Drone DJI</p>
            </div>
          </div>
        </section>
      </div>

      {/* ACERCA DE NOSOTROS */}
      <div id="contacto">
        <Contact />
        <section className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-3">Acerca de nosotros</h3>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
            <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
          </div>
          <p className="mt-3 text-sm text-gray-300">
            Somos Juan y Pedro, apasionados por la tecnología. Traemos los mejores
            productos al mejor precio con total confianza.
          </p>
        </section>
      </div>

      {/* FOOTER */}
      <div id="footer">
        <Footer />
        <footer className="p-4 text-center text-gray-400 text-sm">
          <p>© 2025 ImportNow</p>
          <p>📱 WhatsApp | 📸 Instagram</p>
        </footer>
      </div>
    </div>
  );
}
