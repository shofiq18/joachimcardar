'use client';

import React from 'react';
import { categories } from '@/lib/data';

const BrowseCategories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Browse by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${
                category.active ? 'bg-teal-600 text-white' : 'bg-white text-gray-700'
              } rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer`}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <div className="font-medium">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
