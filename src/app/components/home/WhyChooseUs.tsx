'use client';

import React from 'react';
import { features } from '@/lib/data';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] font-bold text-[#2D2D2D] flex justify-center  mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <span className="text-3xl">{feature.icon}</span> */}
                <Image src={feature.icon}
                alt={`${feature.title} Icon`} width={100} height={100} />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">{feature.title}</h3>
              <p className="text-[#636F85] text-[16px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;