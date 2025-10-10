import React, { useEffect, useRef } from "react";
import "../styles/Benefits.css";
import { FaBoxOpen, FaShippingFast, FaHeadset } from "react-icons/fa";

export default function Benefits() {
  const benefitsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // se quita al salir para reanimar al volver a entrar
          }
        });
      },
      { threshold: 0.2 }
    );

    benefitsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <FaBoxOpen />,
      title: "Productos originales",
      text: "Solo trabajamos con marcas y proveedores oficiales.",
    },
    {
      icon: <FaShippingFast />,
      title: "Envíos rápidos",
      text: "Entregas en todo el país en tiempo récord.",
    },
    {
      icon: <FaHeadset />,
      title: "Atención personalizada",
      text: "Estamos para ayudarte antes y después de tu compra.",
    },
  ];

  return (
    <section className="benefits">
      {benefits.map((b, i) => (
        <div
          key={i}
          className="benefit-card"
          ref={(el) => (benefitsRef.current[i] = el)}
        >
          <div className="benefit-icon">{b.icon}</div>
          <h3>{b.title}</h3>
          <p>{b.text}</p>
        </div>
      ))}
    </section>
  );
}
