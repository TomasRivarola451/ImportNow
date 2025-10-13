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
          href="https://02cf0076-07a2-4021-a4e3-9c08d9200afc.filesusr.com/ugd/983be4_8db884adabd44b608e6ab8ab33bed973.xlsx?dn=CATALOGO%20MINORISTAA%20IMPORT%201.xlsx&fbclid=PAQ0xDSwNRTcFleHRuA2FlbQIxMQABp2iE4lNtPGmsv09pj5m3-sLneVCI02JF4nblyxzeiTzKRyw_UCShqP4n9QnJ_aem_mdmOccLd7cG7liRDSrKWtw"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn s-3"
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
