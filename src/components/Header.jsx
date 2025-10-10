// src/components/Header.jsx
import React, { useState } from "react";
import "../styles/Header.css";
import logoIcon from "../assets/icons/2-Photoroom.png";
export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="header">
      {/* LOGO (tu icono pequeño) */}
      <div className="logo">
        <img src={logoIcon} alt="ImportNow logo" />
      </div>

      {/* LINKS EN DESKTOP */}
      <nav className="nav-links">
        <a href="#hero">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* BOTÓN HAMBURGUESA */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={toggleMenu}></div>}

      {/* MENÚ MOBILE */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#hero" onClick={toggleMenu}>Inicio</a>
        <a href="#productos" onClick={toggleMenu}>Productos</a>
        <a href="#nosotros" onClick={toggleMenu}>Nosotros</a>
        <a href="#footer" onClick={toggleMenu}>Contacto</a>
      </div>
    </header>
  );
}
