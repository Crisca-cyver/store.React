import React from 'react';
import { ProductCard } from '../components/ProductCard';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Cámara DSLR Profesional",
    price: 699.99,
    description: "Cámara digital profesional con sensor full-frame y grabación 4K.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Electrónica"
  },
  {
    id: 2,
    name: "Smartwatch Premium",
    price: 299.99,
    description: "Reloj inteligente con monitor cardíaco y GPS integrado.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Accesorios"
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos",
    price: 159.99,
    description: "Auriculares con cancelación de ruido y sonido premium.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Audio"
  }
];

export function Products() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestros Productos</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}