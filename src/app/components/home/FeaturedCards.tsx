'use client';

import React from 'react';

import { featuredCars } from '@/lib/data';
import CarCard from '../ui/CarCard';

const FeaturedCars = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Cars</h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc molestie feugiat. Nunc dolor consectetur elit. pulvinar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
