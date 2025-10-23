"use client";

import React from "react";
import { brands } from "@/lib/data";
import Image from "next/image";

const PopularBrands = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] font-bold text-[#2D2D2D] flex justify-center mb-12">
          Popular Brands
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div>
            <Image
              src="/icon/opel-brand.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/audi.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/mercedes-benz.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/toyota.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/mazda.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/nissan.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/hyundai.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/lexus.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/honda.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/renault.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/icon/infiniti.svg"
              alt="Car Image"
              className="w-24 h-14 "
              width={100}
              height={100}
            />
          </div>
          {/* {brands.map((brand, index) => (
            <div 
              key={index} 
              className="w-20 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <span className="text-3xl">{brand.logo}</span>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
