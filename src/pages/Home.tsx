import React from 'react';
import { ArrowRight, ShoppingBag, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Descubre nuestra colección exclusiva
          </h1>
          <p className="mt-6 max-w-xl text-xl">
            Encuentra los mejores productos con la mejor calidad y al mejor precio.
          </p>
          <div className="mt-10">
            <Link
              to="/productos"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
            >
              Ver productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <ShoppingBag className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Productos de calidad</h3>
            <p className="mt-2 text-gray-500">
              Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Envío rápido</h3>
            <p className="mt-2 text-gray-500">
              Entrega garantizada en 24-48 horas a cualquier parte del país.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Compra segura</h3>
            <p className="mt-2 text-gray-500">
              Garantizamos la seguridad de tus datos y transacciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}