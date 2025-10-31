/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { Check, Plus, MessageCircle, CheckCircle } from "lucide-react";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import ContactHero from "@/app/components/reusabeCard/allHeroSection";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ContactHero
      title="About Us"
      subtitle="Learn more about our company and values."
      currentPage="About"
    />

      {/* Who We Are Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Who We Are?
          </h2>

          <div className="grid md:grid-cols-2 relative gap-12 mb-12">
            {/* Left Column - Text */}
            <div>
              <p className="text-[#636F85]  text-lg leading-relaxed mb-6">
                We are idea generators, goal seekers, challenge-thirsty
                professionals, creators, entrepreneurs, thought leaders and
                unconventional solutions. Combining the most advanced web
                technologies, modern design and bold communication. For us, each
                project is a meaningful adventure, in which we become partners
                with our clients, on the road to perfection.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/team-meeting.webp"
                  alt="Office workspace"
                  className="w-full h-[555px] object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>

            {/* Right Column - Image and Stats */}
            <div className="relative">
              <p className="text-[#636F85]  text-lg leading-relaxed">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.Separated they live in Bookmarksgrove
              </p>

              {/* Checkmarks */}
              <div className="space-y-3 mb-6 mt-34">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">
                    far far away, behind the word mountains
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">large language ocean</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">
                    far from the countries Vokalia and Consonantia
                  </span>
                </div>
              </div>
            </div>
            {/* Stats Card */}
            <div className="bg-white rounded-lg absolute bottom-20 left-64 right-0 shadow-xl p-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">
                  50,000+
                </div>
                <div className="text-2xl text-gray-600 font-medium">
                  Cars Sold
                </div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-5xl font-bold text-teal-600 mb-2">
                  45,000+
                </div>
                <div className="text-2xl text-gray-600 font-medium">
                  Satisfied Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">5</div>
                <div className="text-2xl text-gray-600 font-medium">
                  Years in Business
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 ">
          <h2 className="text-[40px] font-bold text-[#2D2D2D] text-center mb-16">
            How It Works
          </h2>

          <div className=" grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">
                List Your Car
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Easily create a detailed listing with photos and information
                about your car
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">
                Connect with Buyers
              </h3>
              <p className="text-gray-600  text-lg leading-relaxed">
                Receive offers and communicate directly with interested buyers
                through our secure platform
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">
                Complete the Sale
              </h3>
              <p className="text-gray-600  text-lg leading-relaxed">
                Finalize the transaction with our support, ensuring a smooth and
                secure transfer of ownership
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ready to Sell Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[40px] font-bold text-[#2D2D2D] mb-4">
            Ready to Sell Your Car?
          </h2>
          <p className="text-[#636F85] text-lg mb-8 max-w-2xl mx-auto">
            Get started today and experience the AutoMart difference.
          </p>
          <button className="bg-[#00695C] text-white px-8 py-3 rounded-md hover:bg-teal-700 transition font-medium">
            Sell Your Car
          </button>
        </div>
      </div>
      {/* Mobile App Section */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 py-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500 rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <h2 className="text-[40px] font-bold mb-4">
                Take a Look at the
                <br />
                M-A-W mobile Auto
                <br />
                welt Mobile App
              </h2>
              <p className="text-teal-100 text-lg mb-8 max-w-md">
                M-A-W mobile Auto welt companies work to sense more security and
                peace they have insurance coverage
              </p>

              {/* App Store Buttons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                  <Image
                    src="/icon/apples.svg"
                    alt="Phone Mockup"
                    width={20}
                    height={20}
                    className=" object-contain"
                  />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Phone Mockups */}
            <div className="">
              <Image
                src="/moblie-app.png"
                alt="Phone Mockup"
                width={500}
                height={600}
                className="w-full h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
