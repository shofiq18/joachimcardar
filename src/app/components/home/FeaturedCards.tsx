"use client";

import React from "react";

import { featuredCars } from "@/lib/data";
import CarCard from "../ui/CarCard";
import Link from "next/link";

const FeaturedCars = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-[40px] font-bold text-[#2D2D2D] mb-4">
              Featured Cars
            </h2>
          </div>
          <div className="max-w-xl ">
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc molestie feugiat. Nunc dolor consectetur elit.
              pulvinar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      <div className="py-5 lg:py-12 inline-flex justify-center items-center mx-auto text-center w-full">
        <Link href={"/cars"}>
          <button className=" cursor-pointer mx-auto text-center px-6  bg-[#00695C] text-white py-2 rounded-md hover:bg-teal-700 transition font-medium">
            View All Cars
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCars;
