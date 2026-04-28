import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import WhatsAppFloat from "./components/WhatsAppFloat"; // 👈 IMPORTANTE

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <WhatsAppFloat /> {/* 👈 BOTÓN GLOBAL */}
      </div>
    </Router>
  );
}

export default App;