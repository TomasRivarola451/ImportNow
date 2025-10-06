import React from "react";

export default function Contact() {
  return (
    <section className="py-12 bg-white text-gray-900 text-center">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <p className="mb-6">¿Tenés dudas o querés hacer un pedido?</p>
      <a
        href="https://wa.me/5491112345678"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
      >
        Escribir por WhatsApp
      </a>
    </section>
  );
}

