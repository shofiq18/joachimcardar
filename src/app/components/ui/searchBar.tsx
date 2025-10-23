'use client';

import React, { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';

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
      <div className="bg-white bg-opacity-50 rounded-lg p-2 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="flex items-center border-r pr-4">
            <Search size={20} className="text-gray-400 mr-2 " />
            <input
              type="text"
              placeholder="Search for keywords"
              className="flex-1 outline-none text-gray-700"
            />
          </div>
          <div className="flex items-center border-r pr-4">
            <button className="flex items-center text-gray-700 w-full">
              <span className="mr-2">🚗</span>
              <span>Model</span>
              <ChevronDown size={16} className="ml-auto" />
            </button>
          </div>
          <div className="flex items-center border-r pr-4">
            <button className="flex items-center text-gray-700 w-full">
              <span className="mr-2">🚗</span>
              <span>Body type</span>
              <ChevronDown size={16} className="ml-auto" />
            </button>
          </div>
          <div className="flex items-center">
            <MapPin size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 outline-none text-gray-700"
            />
          </div>
          <div className="flex items-center">
            <button className="px-12 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
            Filters
          </button>
          </div>
          <div className="flex items-center">
            <button className="px-12 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;