'use client';

import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { faqs } from '@/lib/data';
import Image from 'next/image';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left hover:text-teal-600 transition"
                  >
                    <span className="font-medium text-gray-900">{faq}</span>
                    {openIndex === index ? (
                      <X size={20} className="text-teal-600" />
                    ) : (
                      <ChevronRight size={20} className="text-gray-400" />
                    )}
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-600 text-sm">
                      Curabitur aliquet auctor ultricies. Proin lorem odio, mattis pretium molestie in, interdum ut tortor. Fusce condimentum sem.
                    </p>
                  )}
                </div>
              ))}
            </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked<br />Question and<br />Answer!
            </h2>
            <div>
            
            <Image
              src="/Fake.jpg" 
              alt="Customer Support" 
              className="w-full rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
            <p className="text-gray-600 mt-4 mb-4">Still Have Questions? We are here to Help!</p>
            <button className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition">
              Contact Us <ChevronRight size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;