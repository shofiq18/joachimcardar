"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Role = 'buyer' | 'seller' | null;

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<Role>('buyer');

  const router = useRouter();

  const handleContinue = () => router.push(`/register?role=${selectedRole}`);



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full grid md:grid-cols-2 gap-8 p-12">
        {/* Left Section - Illustration */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 self-start">
            Choose Your Role
          </h1>
          
          <div className="relative w-full max-w-sm">
            <svg className="w-full h-auto" viewBox="0 0 350 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Checklist/Document */}
              <rect x="40" y="120" width="130" height="180" rx="12" fill="white" stroke="#D1D5DB" strokeWidth="3" />
              
              {/* Progress bar 1 */}
              <rect x="60" y="145" width="60" height="12" rx="6" fill="#0F766E" />
              <rect x="125" y="145" width="25" height="12" rx="6" fill="#E5E7EB" />
              
              {/* Checkmark 1 */}
              <circle cx="175" cy="151" r="18" fill="#0F766E" />
              <path d="M167 151 L172 156 L183 145" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              
              {/* Progress bar 2 */}
              <rect x="60" y="190" width="40" height="12" rx="6" fill="#D1D5DB" />
              <rect x="105" y="190" width="45" height="12" rx="6" fill="#E5E7EB" />
              
              {/* Circle icon 2 */}
              <circle cx="175" cy="196" r="16" fill="#F59E0B" stroke="white" strokeWidth="2" />
              
              {/* Progress bar 3 */}
              <rect x="60" y="235" width="50" height="12" rx="6" fill="#D1D5DB" />
              <rect x="115" y="235" width="35" height="12" rx="6" fill="#E5E7EB" />
              
              {/* Checkmark large in corner */}
              <circle cx="210" cy="110" r="28" fill="#0F766E" />
              <path d="M198 110 L206 118 L222 102" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              
              {/* Person illustration */}
              {/* Head */}
              <circle cx="240" cy="200" r="28" fill="#F3E8E0" />
              
              {/* Hair */}
              <path d="M218 190 Q215 175 225 170 L240 168 Q250 170 255 175 Q265 185 260 195 L240 200" fill="#F59E0B" />
              
              {/* Eyes */}
              <circle cx="233" cy="198" r="2.5" fill="#1F2937" />
              <circle cx="247" cy="198" r="2.5" fill="#1F2937" />
              
              {/* Smile */}
              <path d="M232 208 Q240 213 248 208" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none" />
              
              {/* Body - Shirt */}
              <ellipse cx="240" cy="270" rx="45" ry="50" fill="#0F766E" />
              
              {/* Neck */}
              <rect x="230" y="225" width="20" height="20" fill="#F3E8E0" />
              
              {/* Arms */}
              <path d="M200 260 Q195 265 200 280 L208 300" stroke="#F3E8E0" strokeWidth="14" strokeLinecap="round" />
              <path d="M280 260 Q285 265 283 285 L295 310" stroke="#F3E8E0" strokeWidth="14" strokeLinecap="round" />
              
              {/* Right hand pointing up */}
              <circle cx="208" cy="300" r="10" fill="#F3E8E0" />
              <path d="M208 300 L205 285 L203 275" stroke="#F3E8E0" strokeWidth="8" strokeLinecap="round" />
              
              {/* Left hand with red item */}
              <circle cx="295" cy="310" r="10" fill="#F3E8E0" />
              <ellipse cx="305" cy="320" rx="12" ry="15" fill="#EF4444" />
              <rect x="300" y="335" width="10" height="8" rx="2" fill="#DC2626" />
              
              {/* Legs */}
              <path d="M220 315 L215 370" stroke="#1F2937" strokeWidth="18" strokeLinecap="round" />
              <path d="M260 315 L265 370" stroke="#1F2937" strokeWidth="18" strokeLinecap="round" />
              
              {/* Shoes */}
              <ellipse cx="215" cy="375" rx="18" ry="8" fill="#1F2937" />
              <ellipse cx="265" cy="375" rx="18" ry="8" fill="#1F2937" />
              
              {/* Plant decoration */}
              <ellipse cx="100" cy="330" rx="15" ry="20" fill="#10B981" />
              <path d="M88 315 Q82 305 88 298" fill="#059669" />
              <path d="M112 320 Q120 312 117 305" fill="#059669" />
              <path d="M95 335 Q88 345 92 352" fill="#14B8A6" />
            </svg>
          </div>
        </div>

        {/* Right Section - Role Selection */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            {/* Buyer Option */}
            <button
              onClick={() => setSelectedRole('buyer')}
              className={`w-full flex items-center justify-between p-6 rounded-xl border-2 transition-all ${
                selectedRole === 'buyer'
                  ? 'border-teal-700 bg-teal-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-gray-900">Buyer</span>
              </div>
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                selectedRole === 'buyer'
                  ? 'border-teal-700 bg-white'
                  : 'border-gray-300 bg-white'
              }`}>
                {selectedRole === 'buyer' && (
                  <div className="w-4 h-4 rounded-full bg-teal-700"></div>
                )}
              </div>
            </button>

            {/* Seller Option */}
            <button
              onClick={() => setSelectedRole('seller')}
              className={`w-full flex items-center justify-between p-6 rounded-xl border-2 transition-all ${
                selectedRole === 'seller'
                  ? 'border-teal-700 bg-teal-700'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  selectedRole === 'seller' ? 'bg-white' : 'bg-gray-900'
                }`}>
                  <svg className={`w-6 h-6 ${selectedRole === 'seller' ? 'text-teal-700' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                  </svg>
                </div>
                <span className={`text-xl font-semibold ${
                  selectedRole === 'seller' ? 'text-white' : 'text-gray-900'
                }`}>Seller</span>
              </div>
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                selectedRole === 'seller'
                  ? 'border-white bg-teal-700'
                  : 'border-gray-300 bg-white'
              }`}>
                {selectedRole === 'seller' && (
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                )}
              </div>
            </button>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`w-full mt-8 py-4 px-6 rounded-xl font-semibold text-white transition-all ${
              selectedRole
                ? 'bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}