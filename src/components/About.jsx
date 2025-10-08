import React, { useEffect } from "react";
import "../styles/About.css";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".person-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Nuestro equipo</h2>
          <p>
            En <strong>ImportNow</strong> acercamos tecnología de primer nivel a todo el país,
            con procesos simples, precios competitivos y respaldo profesional.
          </p>
          <p>
            Somos <strong>Lucas</strong> y <strong>Simón</strong>, técnicos en comercio exterior,
            y combinamos nuestra experiencia con una red de proveedores confiables
            para ofrecer productos originales, sin intermediarios ni complicaciones.
          </p>
          <p>
            Desde <strong>Mendoza</strong> llegamos a toda Argentina con envíos seguros
            y atención personalizada. Nuestra misión es que comprar tecnología importada
            sea una experiencia transparente, segura y confiable.
          </p>
          <p className="about-slogan">
            En ImportNow, importamos más que productos: <span>importamos confianza.</span>
          </p>
        </div>

        <div className="about-images">
          <div className="person-card fade-up">
            <img src="/images/simon.webp" alt="Simón - Co-fundador ImportNow" loading="lazy" />
            <h4>Simón</h4>
            <p>Co-fundador</p>
          </div>

          <div className="person-card fade-up">
            <img src="/images/lucas.webp" alt="Lucas - Co-fundador ImportNow" loading="lazy" />
            <h4>Lucas</h4>
            <p>Co-fundador</p>
          </div>
        </div>
      </div>
    </section>
  );
}
