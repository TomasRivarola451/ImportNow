// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Contacto principal */}
      <div className="footer-contact">
        <h2>¿Tenés dudas o querés hacer un pedido?</h2>
        <p>Comunicate con nosotros por WhatsApp o redes sociales</p>

        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp size={24} />
          Escribir por WhatsApp
        </a>
      </div>

      {/* Info secundaria */}
      <div className="footer-info">
        <div className="footer-item">
          <FaEnvelope />
          <span>importnow@gmail.com</span>
        </div>
        <div className="footer-item">
          <FaMapMarkerAlt />
          <span>Mendoza, Argentina</span>
        </div>
        <div className="footer-item">
          <FaInstagram />
          <a
            href="https://instagram.com/importnow"
            target="_blank"
            rel="noopener noreferrer"
          >
            @importnow
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="footer-bottom">
        © {currentYear} <span>ImportNow</span>. Todos los derechos reservados.
      </div>
    </footer>
  );
}
