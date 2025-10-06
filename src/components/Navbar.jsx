import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">ImportNow</h1>
        <a
          href="https://docs.google.com/spreadsheets/d/1AKIuEjemploExcelLink"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ver Catálogo
        </a>
      </div>
    </nav>
  );
}
