'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-md">
            Real stories from satisfied users: see<br />how our platform changes lives.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
          <video
          className="  h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smooth and Easy Car Buying!
              </h3>
              <p className="text-gray-600 mb-6">
                Buying a muscle car is a reality. The video tours were a game-changer, giving me a real feel for the car before I even saw it in person. This whole process was smooth and hassle-free, and the car was exactly as described!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-900">Md Shakil</div>
                  <div className="text-sm text-gray-600">CEO (company@un)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <button 
            onClick={() => setActiveSlide(0)}
            className={`w-3 h-3 rounded-full ${activeSlide === 0 ? 'bg-teal-600' : 'bg-gray-300'}`}
          ></button>
          <button 
            onClick={() => setActiveSlide(1)}
            className={`w-3 h-3 rounded-full ${activeSlide === 1 ? 'bg-teal-600' : 'bg-gray-300'}`}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;