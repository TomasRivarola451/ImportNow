import React from "react";
import "../styles/Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Products() {
  const products = [
    { name: "iPhone 17 Pro", img: "/images/iphoneprocarru.webp", accent: "#7C3AED" },
    { name: "PlayStation 5 Pro", img: "/images/playcarru.webp", accent: "#7C3AED" },
    { name: "MacBook Pro", img: "/images/macbookcarru.webp", accent: "#7C3AED" },
    { name: "AirPods Pro 3", img: "/images/airpodcarru.webp", accent: "#7C3AED" },
    { name: "Samsung S25 Ultra", img: "/images/samsungcarru.webp", accent: "#7C3AED" },
    { name: "JBL Charge 5", img: "/images/jblcarru.webp", accent: "#7C3AED" },
    { name: "Motorola Razr 60 Ultra", img: "/images/motocarru.webp", accent: "#7C3AED" },
    { name: "DJI Osmo Pocket 3", img: "/images/camcarru.webp", accent: "#7C3AED" },
    { name: "Iphone 16", img: "/images/iphonecarru.webp", accent: "#7C3AED" },
    { name: "Microfono Wireless DJI", img: "/images/miccarru.webp", accent: "#7C3AED" },
    { name: "Drone DJI mini 4 Pro", img: "/images/droncarru.webp", accent: "#7C3AED" },
    { name: "Ipad Pro", img: "/images/ipadcarru.webp", accent: "#7C3AED" },
  ];

  return (
    <section className="products-section">
      <div className="products-header">
        <h2>Productos destacados</h2>
        <p>Descubrí lo último en tecnología</p>
      </div>

      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          loop={true}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.2, spaceBetween: 30 },
            1440: { slidesPerView: 4.2, spaceBetween: 36 },
          }}
          className="products-swiper"
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <div className="product-card" style={{'--accent-color': product.accent}}>
                <div className="product-image">
                  <img src={product.img} alt={product.name} loading="lazy" />
                </div>
                <h3>{product.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev-custom">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button className="swiper-button-next-custom">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}