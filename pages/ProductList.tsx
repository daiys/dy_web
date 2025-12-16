import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { getProducts } from '../services/storageService';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Products & Services</h2>
          <p className="mt-4 text-xl text-gray-500">Comprehensive industrial solutions for your facility.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 h-56">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-brand-orange mb-2">
                    {product.category}
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{product.name}</p>
                    <p className="mt-3 text-base text-gray-500">{product.description}</p>
                  </a>
                </div>
                <div className="mt-6">
                    <h4 className="sr-only">Features</h4>
                    <ul className="flex flex-wrap gap-2">
                        {product.features?.map((f, i) => (
                            <li key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
             <div className="text-center py-20 text-gray-500">
                 No products found. Please use the Admin panel to add products.
             </div>
        )}
      </div>
    </div>
  );
};