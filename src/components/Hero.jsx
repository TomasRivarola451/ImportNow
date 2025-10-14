import React from "react";
import "../styles/Hero.css";
import logo from "../assets/icons/logoHero.png";
import apple from "../assets/icons/icons8-apple.svg";
import sony from "../assets/icons/icons8-playstation.svg";
import samsung from "../assets/icons/samsung-svgrepo-com.svg";
import dji from "../assets/icons/dji-1-logo-svgrepo-com.svg";
import jbl from "../assets/icons/jbl-svgrepo-com.svg";
import garmin from "../assets/icons/garmin-svgrepo-com.svg";
import motorola from "../assets/icons/moto-svgrepo-com.svg";
import rayban from "../assets/icons/rayban.png";
import xiaomi from "../assets/icons/icons8-xiaomi.svg";
import hp from "../assets/icons/icons8-hp.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Logo */}
        <img src={logo} alt="ImportNow" className="hero-logo s-1" />

        {/* Texto */}
        <h1 className="hero-title s-2">
          Bienvenido a Import Now.
          <br />
          Tecnología premium importada con respaldo profesional.
        </h1>

        {/* Botón */}
          <a
            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR4OsHMq6exsvF5XFmQ2PBiU6U3pNv44Dc_F2d3MWPCXqlmLBgCecim88XZ1jSYpA/pubhtml"
            target="_blank"
            rel="noopener noreferrer"
          >
          Ver Catálogo Completo 
        </a>
      </div>

      {/* Carrusel de marcas */}
      <div className="logo-marquee s-4" aria-hidden="true">
        <div className="logo-track">
         
          {[apple, sony, samsung, dji, jbl, garmin, motorola, rayban, xiaomi, hp].map((src, i) => (
            <img key={i} src={src} alt="marca" />
          ))}
          {[apple, sony, samsung, dji, jbl, garmin, motorola, rayban, xiaomi, hp].map((src, i) => (
            <img key={`2-${i}`} src={src} alt="marca" />
          ))}
                    {[apple, sony, samsung, dji, jbl, garmin, motorola, rayban, xiaomi, hp].map((src, i) => (
            <img key={`2-${i}`} src={src} alt="marca" />
          ))}
                    {[apple, sony, samsung, dji, jbl, garmin, motorola, rayban, xiaomi, hp].map((src, i) => (
            <img key={`2-${i}`} src={src} alt="marca" />
          ))}
        </div>
      </div>
    </section>
  );
}
