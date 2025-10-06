import React from "react";

export default function Featured() {
  return (
    <section className="py-12 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card ejemplo 1 */}
          <div className="border rounded-lg shadow p-4 text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/200"
              alt="Producto 1"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">Auriculares Bluetooth</h3>
          </div>

          {/* Card ejemplo 2 */}
          <div className="border rounded-lg shadow p-4 text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/200"
              alt="Producto 2"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">Smartwatch</h3>
          </div>

          {/* Card ejemplo 3 */}
          <div className="border rounded-lg shadow p-4 text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/200"
              alt="Producto 3"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">Parlante Portátil</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
