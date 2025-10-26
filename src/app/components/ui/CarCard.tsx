"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { Car } from "@/types";
import Image from "next/image";

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
          className="w-full h-72 object-cover"
          width={500}
          height={300}
        />
        {car.isNew && (
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-md text-sm font-medium">
            -13%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.title}</h3>
        <p className="text-xl font-semibold text-gray-700 mb-4">{car.price}</p>
        <div className="grid grid-cols-3 text-[16px] text-gray-600 mb-2 space-x-2">
          <span className="flex items-center">
            <span className="mr-1">
              <Image
                src="/icon/road-icon.png"
                alt="setting-icon"
                height={20}
                width={20}
              />
            </span>{" "}
            {car.mileage}
          </span>
          <span className="flex items-center">
            <span className="mr-1">
              <Image
                src="/icon/gas-icon.svg"
                alt="setting-icon"
                height={20}
                width={20}
              />
            </span>{" "}
            {car.transmission}
          </span>
          {car.isAuto && (
            <span className="flex items-center mr-4">
              <span className="mr-1">
                <Image
                  src="/icon/setting.svg"
                  alt="setting-icon"
                  height={20}
                  width={20}
                />
              </span>{" "}
              Auto
            </span>
          )}
        </div>
        <div>
          <span className="flex items-center mb-2 text-gray-600 ">
            <MapPin size={20} className="mr-1 text-gray-600" /> {car.location}
          </span>
        </div>
        <button className="w-full bg-[#00695C] text-white py-2 rounded-md hover:bg-teal-700 transition font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;
