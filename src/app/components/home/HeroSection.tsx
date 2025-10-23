'use client';

import React from 'react';
import SearchBar from '../ui/searchBar';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      <div className="relative max-w-7xl mx-auto   h-full flex flex-col justify-center">
        <div className="max-w-5xl">
          <div className="inline-block bg-gray-700 bg-opacity-50 text-white text-sm px-4 py-1 rounded-full mb-4">
            WELCOME TO MAW MOBILE AUTO MALL
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Buy or Sell Your<br />
            Dream Car Easily<br />
            and Safely.
          </h1>
          <p className="text-white text-lg mb-8">
            Find verified cars, connect with trusted buyers and sellers, and<br />
            complete your deal in just a few clicks
          </p>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;