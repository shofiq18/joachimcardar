"use client";
import React, { useState } from 'react';
import { Search, Plus, Edit, Pause, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function MyListings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const listings = [
    { id: 1, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400', name: 'Toyota Corolla 2022', price: '$18,500', status: 'Active', views: 420, date: 'Sep 25' },
    { id: 2, image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400', name: 'Honda Civic 2021', price: '$18,500', status: 'Pending', views: 190, date: 'Sep 22' },
    { id: 3, image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400', name: 'Nissan Altima 2020', price: '$18,500', status: 'Active', views: 250, date: 'Sep 20' },
    { id: 4, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400', name: 'Toyota Corolla 2022', price: '$18,500', status: 'Pending', views: 290, date: 'Sep 25' },
    { id: 5, image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400', name: 'Nissan Altima 2020', price: '$18,500', status: 'Active', views: 250, date: 'Sep 20' },
    { id: 6, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400', name: 'Toyota Corolla 2022', price: '$18,500', status: 'Pending', views: 290, date: 'Sep 25' },
    { id: 7, image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400', name: 'Nissan Altima 2020', price: '$18,500', status: 'Active', views: 250, date: 'Sep 20' },
    { id: 8, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400', name: 'Toyota Corolla 2022', price: '$18,500', status: 'Pending', views: 290, date: 'Sep 25' },
    { id: 9, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400', name: 'Toyota Corolla 2022', price: '$18,500', status: 'Pending', views: 290, date: 'Sep 25' },
    { id: 10, image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400', name: 'Nissan Altima 2020', price: '$18,500', status: 'Active', views: 250, date: 'Sep 20' },
    { id: 11, image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400', name: 'Nissan Altima 2020', price: '$18,500', status: 'Active', views: 250, date: 'Sep 20' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Listings</h1>
          
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Car Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 w-72 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Add New Car Button */}
            <Link href="/seller-dashboard/my-listings/new">
            <button
              className="flex items-center gap-2 text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition font-medium"
              style={{ backgroundColor: '#00695C' }}
            >
              <Plus className="w-5 h-5" />
              Add New Car
            </button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Car Image</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Car Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Views</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Date Added</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 bg-gray-800 rounded overflow-hidden">
                      <img 
                        src={listing.image} 
                        alt={listing.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-900 font-medium">{listing.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-900 font-medium">{listing.price}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-md text-sm font-medium ${
                        listing.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-900">{listing.views}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-900">{listing.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition">
                        <Pause className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg font-medium text-white"
            style={{ backgroundColor: '#00695C' }}
          >
            1
          </button>
          
          <button className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 rounded-lg font-medium text-gray-700 transition">
            2
          </button>
          
          <button className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 rounded-lg font-medium text-gray-700 transition">
            3
          </button>
          
          <span className="px-2 text-gray-500">...</span>
          
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}