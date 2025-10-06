import React from "react";
import "../styles/Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Products() {
  const products = [
    { name: "MacBook Pro M3", img: "/images/6.png" },
    { name: "PlayStation 5", img: "/images/14.png" },
    { name: "AirPods Pro 2", img: "/images/8.png" },
    { name: "iPhone 17 Pro", img: "/images/iphone17pro.webp" },
    { name: "Samsung S24 Ultra", img: "/images/samsungultra.webp" },
    { name: "Apple Watch Ultra 2", img: "/images/applewatch.webp" },
  ];

  return (
    <section className="products-section">
      <div className="products-header">
        <h2>Productos destacados</h2>
        <p>Descubrí lo último en tecnología</p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1.2}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3.2, spaceBetween: 30 },
          1440: { slidesPerView: 4.2, spaceBetween: 40 },
        }}
        className="products-swiper"
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="product-card">
              <div className="product-image">
                <img src={product.img} alt={product.name} loading="lazy" />
              </div>
              <h3>{product.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
