"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { ActiveOrderCar, Car } from "@/types";
import Image from "next/image";

interface CarCardProps {
  car: ActiveOrderCar;
}

const ActiveOrderCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="relative">
        <Image
          src={car.image}
          alt="Car Image"
          className="w-full h-72 object-cover"
          width={500}
          height={300}
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.title}</h3>
        <p className="text-xl font-semibold text-gray-700 mb-4">${car.price}</p>
        <div className="grid grid-cols-3 text-[16px] text-gray-600 mb-2 space-x-2">
          <span className="flex items-center">
            <span className="mr-1">
              <Image
                src="/icon/road-icon.png"
                alt="mileage-icon"
                height={20}
                width={20}
              />
            </span>
            {car.mileage}
          </span>
          <span className="flex items-center">
            <span className="mr-1">
              <Image
                src="/icon/gas-icon.svg"
                alt="fuel-icon"
                height={20}
                width={20}
              />
            </span>
            {car.fuelType}
          </span>
          <span className="flex items-center">
            <span className="mr-1">
              <Image
                src="/icon/setting.svg"
                alt="transmission-icon"
                height={20}
                width={20}
              />
            </span>
            {car.transmission}
          </span>
        </div>
        <div>
          <span className="flex items-center mb-2 text-gray-600">
            <MapPin size={20} className="mr-1 text-gray-600" /> {car.location}
          </span>
        </div>
        <button className="w-full bg-[#00695C] text-white py-2 rounded-md hover:bg-teal-700 transition font-medium">
          Track Order
        </button>
      </div>
    </div>
  );
};

export default ActiveOrderCard;
