'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import { Car } from '@/types';
import Image from 'next/image';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="relative">
        <Image
          src="/Fake.jpg"
          alt="Car Image"
          className="w-full h-56 object-cover"
          width={500}
          height={300}
        />
        {car.isNew && (
          <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-md text-sm font-medium">
            NEW
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{car.title}</h3>
        <p className="text-2xl font-bold text-teal-600 mb-4">{car.price}</p>
        <div className="flex items-center text-sm text-gray-600 mb-2 space-x-4">
          <span className="flex items-center">
            <span className="mr-1">📅</span> {car.year}
          </span>
          <span className="flex items-center">
            <span className="mr-1">📊</span> {car.mileage}
          </span>
          <span className="flex items-center">
            <span className="mr-1">⚡</span> {car.transmission}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          {car.isAuto && (
            <span className="flex items-center mr-4">
              <span className="mr-1">⚙️</span> Auto
            </span>
          )}
          <span className="flex items-center">
            <MapPin size={14} className="mr-1" /> {car.location}
          </span>
        </div>
        <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;