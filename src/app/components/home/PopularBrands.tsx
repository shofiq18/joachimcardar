'use client';

import React from 'react';
import { brands } from '@/lib/data';

const PopularBrands = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="w-20 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <span className="text-3xl">{brand.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;