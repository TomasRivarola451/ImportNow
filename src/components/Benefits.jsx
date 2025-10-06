import React from "react";
import "../styles/Benefits.css";

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="benefit-card">
          <h3>Productos Originales</h3>
          <p>Garantía de calidad en cada compra.</p>
        </div>
        <div className="benefit-card">
          <h3>Envíos Rápidos</h3>
          <p>Recibí tu pedido en pocos días.</p>
        </div>
        <div className="benefit-card">
          <h3>Atención Personalizada</h3>
          <p>Siempre disponibles para tus consultas.</p>
        </div>
      </div>
    </section>
  );
}
