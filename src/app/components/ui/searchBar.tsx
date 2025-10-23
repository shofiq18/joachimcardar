/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Package, Car } from 'lucide-react';
import { BsCloudy } from 'react-icons/bs';


const SearchBar = () => {
  const [selectedTab, setSelectedTab] = useState('New');

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setSelectedTab('New')}
          className={`px-6 py-2 rounded-md font-medium transition ${
            selectedTab === 'New' ? 'bg-white text-teal-600' : 'bg-gray-600 bg-opacity-50 text-white'
          }`}
        >
          New
        </button>
        <button
          onClick={() => setSelectedTab('Used')}
          className={`px-6 py-2 rounded-md font-medium transition ${
            selectedTab === 'Used' ? 'bg-white text-teal-600' : 'bg-gray-600 bg-opacity-50 text-white'
          }`}
        >
          Used
        </button>
      </div>

      {/* Search Bar */}
      <div className=" backdrop-blur bg-white/30 rounded-lg p-2 shadow-lg">
        <div className="flex justify-around gap-4">
          <div className="flex items-center border-r  ">
            <Search size={18} color='white'  className=" shrink-0 mr-2 " />
            <input
              type="text"
              placeholder="Search for keywords"
              className="flex-1 outline-none text-white"
            />
          </div>
          <div className="flex items-center border-r pr-4">
            <button className="flex items-center text-white w-full">
               <Package size={18} className='mr-2' />
              <span>Model</span>
              <ChevronDown size={18}  className="ml-2" />
            </button>
          </div>
          <div className="flex items-center border-r pr-4">
            <button className="flex items-center text-white w-full">
            <Car size={20} className='mr-2'/>
              <span>Body type</span>
              <ChevronDown size={18} className="ml-2" />
            </button>
          </div>
          <div className="flex items-center">
            <MapPin size={20} color='white' className=" mr-2" />
            <button className="flex items-center text-white w-full ">
            
              <span>Location</span>
              <ChevronDown size={18} className="ml-2" />
            </button>
          </div>
          <div className="flex items-center">
            <button className="px-12 py-2 border border-gray-300 rounded-md text-gray-700 font-bold bg-white hover:bg-gray-50 transition">
            Filters
          </button>
          </div>
          <div className="flex items-center">
            <button className="px-12 py-2 bg-[#00695C] text-white rounded-md hover:bg-teal-700 transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;