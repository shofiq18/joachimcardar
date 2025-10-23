"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Role = "buyer" | "seller" | null;

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<Role>("buyer");

  const router = useRouter();

  const handleContinue = () => router.push(`/register?role=${selectedRole}`);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full grid md:grid-cols-2 gap-8 p-12">
        {/* Left Section - Illustration */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-bold text-[#2D2D2D] mb-12 self-start">
            Choose Your Role
          </h1>
          <Image
            src="/icon/role-icon.svg"
            alt="role-icon"
            width={286}
            height={271}
          />
        </div>

        {/* Right Section - Role Selection */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            {/* Buyer Option */}
            <button
              onClick={() => setSelectedRole("buyer")}
              className={`w-full flex items-center justify-between p-6 rounded-xl border-2 transition-all ${
                selectedRole === "buyer"
                  ? "border-teal-700 bg-teal-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  Buyer
                </span>
              </div>
              <div
                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                  selectedRole === "buyer"
                    ? "border-teal-700 bg-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedRole === "buyer" && (
                  <div className="w-4 h-4 rounded-full bg-teal-700"></div>
                )}
              </div>
            </button>

            {/* Seller Option */}
            <button
              onClick={() => setSelectedRole("seller")}
              className={`w-full flex items-center justify-between p-6 rounded-xl border-2 transition-all ${
                selectedRole === "seller"
                  ? "border-teal-700 bg-teal-700"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedRole === "seller" ? "bg-white" : "bg-gray-900"
                  }`}
                >
                  <svg
                    className={`w-6 h-6 ${
                      selectedRole === "seller" ? "text-teal-700" : "text-white"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                  </svg>
                </div>
                <span
                  className={`text-xl font-semibold ${
                    selectedRole === "seller" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Seller
                </span>
              </div>
              <div
                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                  selectedRole === "seller"
                    ? "border-white bg-teal-700"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedRole === "seller" && (
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
                ? "bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
