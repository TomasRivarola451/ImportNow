import React, { useEffect, useState } from "react";
import "../styles/Categories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Categories() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 efecto aparición scroll (solo mobile)
  useEffect(() => {
    if (!isMobile) return;
    const cards = document.querySelectorAll(".category-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const index = Number(el.dataset.index) || 0;
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${index * 0.12}s`;
            el.classList.add("show");
          } else {
            el.classList.remove("show");
            el.style.transitionDelay = "";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    cards.forEach((el, i) => {
      el.dataset.index = i;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  // Cambié el orden: iPhone primero para diagnosticar
  const images = [
    { src: "/images/iphonebaner.webp", alt: "iPhone 17 Pro", eager: true },
    { src: "/images/samsungultra.webp", alt: "Samsung Galaxy S24 Ultra" },
    { src: "/images/macbookbanner.webp", alt: "MacBook Pro" },
  ];

  return (
    <section className="categories-section">
      {isMobile ? (
        <div className="categories-stack">
          {images.map((img, i) => (
            <div className="category-card" key={i} data-index={i}>
              <img 
                src={img.src} 
                alt={img.alt} 
                loading={img.eager ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="desktop-slider-wrap">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
            className="categories-swiper"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="category-slide">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading={img.eager ? "eager" : "lazy"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}