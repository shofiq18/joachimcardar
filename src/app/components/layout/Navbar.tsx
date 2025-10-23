/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-html-link-for-pages */
// ==========================================
// FILE: src/components/layout/Navbar.tsx
// ==========================================
'use client';


import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  return (
    <header className=" top-0 left-0 right-0  sticky  z-50   bg-[#00695C] bg-opacity-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto  py-4 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <Image src="/Group.png" className='w-15 h-12 filter brightness-150 ' alt="Logo" width={60} height={50} />
        </div>

        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <div className="hidden md:flex items-center space-x-8">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="text-white hover:text-teal-400 transition">Home</a>
          <a href="/contact" className="text-white hover:text-teal-400 transition">Contact</a>
          <a href="/blog" className="text-white hover:text-teal-400 transition">Blog</a>
          <a href="/faq" className="text-white hover:text-teal-400 transition">FAQ</a>
           {/* About Us Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsAboutUsOpen(true)}
            onMouseLeave={() => setIsAboutUsOpen(false)}
          >
            <button className="text-white hover:text-teal-400 transition flex items-center py-2">
              About Us <ChevronDown size={16} className="ml-1" />
            </button>
            
            {/* Dropdown Menu */}
            {isAboutUsOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-white rounded-md shadow-lg py-2">
                  <a
                    href="/about-us"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
                  >
                    About Us
                  </a>
                  <a
                    href="/privacy-policy"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/term-conditions"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
                  >
                    Terms & Conditions
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        

        <div className="flex items-center space-x-4">
          <Link href="/sign-in">
            <button  className="text-white hover:text-teal-400 cursor-pointer transition">Sign In</button>
          </Link>
          <Link href="/add-listing">
          <button className="bg-white text-teal-600 px-6 py-2 cursor-pointer rounded-md hover:bg-teal-200 hover:text-black transition font-medium">
            Add Listing
          </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
