"use client"

import { useState, FormEvent } from 'react';



export default function ForgetPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("passoword fortet ")
    // Handle login logic here
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
   
  };




  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">
        {/* Left Section - Welcome */}
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Forgot Password?</h2>
          
          <div className="flex justify-center items-center">
            <svg className="w-64 h-64" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background elements */}
              <rect x="120" y="60" width="100" height="8" rx="4" fill="#E5E7EB" />
              <rect x="120" y="80" width="80" height="8" rx="4" fill="#E5E7EB" />
              <rect x="120" y="120" width="100" height="8" rx="4" fill="#E5E7EB" />
              <rect x="120" y="140" width="60" height="8" rx="4" fill="#E5E7EB" />
              
              {/* Phone mockup */}
              <rect x="180" y="100" width="120" height="200" rx="15" fill="#1F2937" stroke="#374151" strokeWidth="3" />
              <rect x="190" y="115" width="100" height="170" rx="8" fill="white" />
              
              {/* Lock icon */}
              <circle cx="280" cy="140" r="30" fill="#0F766E" />
              <rect x="270" y="145" width="20" height="25" rx="3" fill="#14B8A6" />
              <path d="M265 145 C265 135 275 128 285 128 C295 128 305 135 305 145" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
              <circle cx="280" cy="160" r="3" fill="white" />
              
              {/* Phone content */}
              <circle cx="240" cy="135" r="8" fill="#0F766E" />
              <rect x="200" y="155" width="70" height="4" rx="2" fill="#D1D5DB" />
              <rect x="200" y="165" width="50" height="4" rx="2" fill="#D1D5DB" />
              <rect x="200" y="180" width="60" height="4" rx="2" fill="#0F766E" />
              <rect x="200" y="190" width="30" height="4" rx="2" fill="#D1D5DB" />
              
              {/* Person */}
              <circle cx="140" cy="250" r="20" fill="#F3E8E0" />
              <path d="M140 270 L140 330 M140 290 L120 310 M140 290 L160 310" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" />
              <rect x="120" y="325" width="20" height="25" rx="3" fill="#1F2937" />
              <rect x="140" y="325" width="20" height="25" rx="3" fill="#1F2937" />
              <path d="M130 250 Q120 245 125 238" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" fill="none" />
              
              {/* Plant decoration */}
              <ellipse cx="310" cy="280" rx="15" ry="20" fill="#0F766E" />
              <path d="M295 265 Q290 250 300 245" fill="#14B8A6" />
              <path d="M325 270 Q335 260 330 250" fill="#14B8A6" />
              <rect x="305" y="280" width="10" height="30" fill="#0F766E" />
            </svg>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-12 flex flex-col justify-center bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  placeholder="Email"
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
            </div>

            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-3 px-4 mt-8 rounded-lg font-semibold hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition"
            >
              Send Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}