/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  ChevronDown,
  Package,
  Car,
  Sliders,
  Logs,
} from "lucide-react";
import { BsCloudy } from "react-icons/bs";

const SearchBar = () => {
  const [selectedTab, setSelectedTab] = useState("New");

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setSelectedTab("New")}
          className={`px-6 py-2 rounded-md font-medium transition ${
            selectedTab === "New"
              ? "bg-white text-teal-600"
              : "bg-gray-600 bg-opacity-50 text-white"
          }`}
        >
          New
        </button>
        <button
          onClick={() => setSelectedTab("Used")}
          className={`px-6 py-2 rounded-md font-medium transition ${
            selectedTab === "Used"
              ? "bg-white text-teal-600"
              : "bg-gray-600 bg-opacity-50 text-white"
          }`}
        >
          Used
        </button>
      </div>

      {/* Search Bar */}
      <div className=" backdrop-blur bg-white/30 rounded-lg p-2 shadow-lg">
        {/* <div className="flex justify-around gap-4">
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
        </div> */}
        <>
          <div className="b  rounded-lg shadow-sm borde  my-">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for keywords"
                  className="w-full pl-10 pr-3 py-2 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {/* Model */}
              <div className="relative w-full">
                <select
                  // value={filters.model}
                  // onChange={(e) =>
                  //   handleFilterChange({ model: e.target.value })
                  // }
                  className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black cursor-pointer"
                >
                  
                  <option value="" className="" selected>Model</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Hatchback">Hatchback</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {/* Body Type */}
              <div className="relative">
                <select
                  // value={filters.bodyType}
                  // onChange={(e) =>
                  //   handleFilterChange({ bodyType: e.target.value })
                  // }
                  className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black cursor-pointer"
                >
                  <option value="">Body type</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Hatchback">Hatchback</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {/* Location */}

              <div className="relative">
                <select
                  // value={filters.location}
                  // onChange={(e) =>
                  //   handleFilterChange({ location: e.target.value })
                  // }
                  className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-whitecursor-pointer"
                >
                  <option value="">Location</option>
                  <option value="New York, NY">New York, NY</option>
                  <option value="Los Angeles, CA">Los Angeles, CA</option>
                  <option value="Miami, FL">Miami, FL</option>
                  <option value="Chicago, IL">Chicago, IL</option>
                  <option value="Seattle, WA">Seattle, WA</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              <button
                // onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 mb-2"
              >
                <Sliders className="w-4 h-4" />
                Filters
              </button>
              {/* Search Button */}
              <div className="lg:col-span-1">
                <button className="w-full bg-[#00695C] text-white py-2 rounded-md font-medium cursor-pointer flex items-center justify-center gap-2">
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default SearchBar;
