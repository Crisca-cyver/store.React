import React from 'react';
import { Product } from '../types';
import { useCart } from '../store/useCart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
}