'use client';

import React from 'react';
import { Mail, Phone, MapPin, EqualApproximatelyIcon, SendToBack, SendIcon, Facebook, Twitter, Instagram, WholeWordIcon } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white pt-12">
      <div className="max-w-7xl mx-auto ">
        <div className='flex justify-between'>
          <div className='mb-6'>
            <Image src="/Group.png" alt="Logo" width={60} height={50} />
          </div>
          <div>
            <div className="flex items-center relative  space-x-2">
              <select className="bg-transparent right-2 pl-8  text-sm text-gray-400 border border-gray-400 rounded px-3 py-2">
                <option>Eng</option>
                <option>Esp</option>
                <option>Fra</option>
              </select>
              <span className="text-sm text-gray-400 absolute left-2 ">🌐</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <p className="text-gray-400 text-sm mb-4">
              Your one-stop shop for buying and selling cars.
            </p>
            <div className="flex space-x-4">
              <div className="flex space-x-4">
                      <Link href="#" className="text-[#00695C] hover:underline">
                        <FaFacebook className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-[#00695C] hover:underline">
                        <BsTwitter className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-[#00695C] hover:underline">
                        <FaInstagram className="w-5 h-5" />
                      </Link>
                    </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Sell a Car</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/term-conditions" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                example@gmail.com
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                (480) 555-0120
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                123 Auto Lane, Carville, USA
              </li>
            </ul>
          </div>
          <div className="relative">
            <h3 className="font-bold text-2xl mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm">Get the latest deals and news.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-4 p-2 border border-stone-800 text-md item-center pl-10 bg-stone-900 rounded w-full"
            />
            <span className="text-gray-400 absolute left-3 top-26 transform -translate-y-1/2"><MdEmail size={18} className="mr-2" /></span>
            <span className="text-white bg-[#00695C] absolute right-3 top-26 w-8 h-7 rounded-sm item-center transform -translate-y-1/2"><SendIcon size={18} className=" mt-1 ml-2" /></span>
          </div>
        </div>

        <div className="border-t border-gray-800 p-4">
          <div className="">
            <div className="text-base text-gray-400 text-center mb-4 md:mb-0">
              © 2024 M-A-W Mobile Autoent. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
