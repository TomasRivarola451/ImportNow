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
          href="https://wa.me/2616851478?text=%C2%A1Hola!%20Estoy%20interesado%20en%20los%20productos%20de%20Import%20Now.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp size={24} />
          Escribir por WhatsApp
        </a>
      </div>

      <div className="footer-info">
        <div className="footer-item">
          <FaEnvelope />
          <span>import.now.arg@gmail.com</span>
        </div>
        <div className="footer-item">
          <FaMapMarkerAlt />
          <span>Mendoza, Argentina</span>
        </div>
        <div className="footer-item">
          <FaInstagram />
          <a
            href="https://www.instagram.com/importnow.arg/"
            target="_blank"
            rel="noopener noreferrer"
          >
          importnow
          </a>
        </div>
      </div>

      <div className="footer-bottom">
         {currentYear} <span>ImportNow</span>. Importamos confianza.
      </div>
    </footer>
  );
}
