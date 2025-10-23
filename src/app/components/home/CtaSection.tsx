'use client';

import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Want to sell your car?</h2>
        <p className="text-white mb-8">Join thousands of sellers (2233)</p>
        <button className="bg-white text-teal-600 px-8 py-3 rounded-md hover:bg-gray-100 transition font-medium">
          Sell Your Car
        </button>
      </div>
    </section>
  );
};

export default CTASection;