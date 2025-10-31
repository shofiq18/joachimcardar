"use client";


import React, { useState } from 'react';
import { Car, Clock, MessageCircle, DollarSign, ChevronDown, Edit, Pause, Trash2 } from 'lucide-react';

export default function SellerDashboard() {
  const [timeFilter, setTimeFilter] = useState('Monthly');
  const [showDropdown, setShowDropdown] = useState(false);
  const [monthFilter, setMonthFilter] = useState('August');
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const stats = [
    { label: 'Active Listings', value: '12', icon: Car, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
    { label: 'Pending Approvals', value: '3', icon: Clock, bgColor: 'bg-red-50', iconColor: 'text-red-600' },
    { label: 'New Messages', value: '5', icon: MessageCircle, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
    { label: 'Total Earnings', value: '24,350', icon: DollarSign, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
  ];

  const chartData = [
    { month: 'Feb', value: 110, isActive: false },
    { month: 'Mar', value: 700, isActive: false },
    { month: 'Apr', value: 400, isActive: false },
    { month: 'May', value: 95, isActive: false },
    { month: 'Jun', value: 325, isActive: true, growth: '+6%' },
    { month: 'Jul', value: 90, isActive: false },
    { month: 'Aug', value: 100, isActive: false },
    { month: 'Sep', value: 500, isActive: false },
    { month: 'Oct', value: 65, isActive: false },
    { month: 'Nov', value: 80, isActive: false },
  ];

  const orderList = [
    { name: 'Toyota Corolla 2022', status: 'Active' },
    { name: 'Toyota Corolla 2022', status: 'Complete' },
    { name: 'Toyota Corolla 2022', status: 'Active' },
    { name: 'Toyota Corolla 2022', status: 'Complete' },
    { name: 'Toyota Corolla 2022', status: 'Active' },
  ];

  const recentListings = [
    { id: 1, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400', name: 'Toyota Corolla 2022', price: '$18,500', status: 'Active', views: 420, date: 'Sep 25' },
    { id: 2, image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400', name: 'Honda Civic 2021', price: '$18,500', status: 'Pending', views: 190, date: 'Sep 22' },
    { id: 3, image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400', name: 'Nissan Altima 2020', price: '$18,500', status: 'Active', views: 250, date: 'Sep 20' },
    { id: 4, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400', name: 'Toyota Corolla 2022', price: '$18,500', status: 'Pending', views: 290, date: 'Sep 25' },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart and Order List Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Overview Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Order Overview</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00695C' }}></div>
                  <span className="text-sm text-gray-600">Earning</span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {timeFilter}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((filter) => (
                        <div
                          key={filter}
                          onClick={() => {
                            setTimeFilter(filter);
                            setShowDropdown(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                        >
                          {filter}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-64 pt-4">
              <div className="absolute left-0 top-4 bottom-8 flex flex-col justify-between text-xs text-gray-500">
                <span>120</span>
                <span>110</span>
                <span>90</span>
                <span>70</span>
                <span>40</span>
                <span>0</span>
              </div>
              <div className="ml-12 h-full pb-6 flex items-end justify-between gap-2">
                {chartData.map((data, index) => (
                  <div key={index} className="relative flex-1 flex flex-col items-center justify-end group h-full">
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                      <p className="text-xs text-gray-600 mb-1">{data.month}</p>
                      <p className="text-lg font-bold text-gray-900">{data.value}</p>
                      <p className="text-xs text-green-600">Total Growth {data.growth}</p>
                    </div>
                    <div
                      className="w-full rounded-t-lg transition-all cursor-pointer min-h-[20px]"
                      style={{
                        height: `${(data.value / maxValue) * 85}%`,
                        backgroundColor: data.isActive ? '#00695C' : '#C5E1DD',
                      }}
                      onMouseEnter={(e) => {
                        if (!data.isActive) {
                          e.currentTarget.style.backgroundColor = '#00695C';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!data.isActive) {
                          e.currentTarget.style.backgroundColor = '#C5E1DD';
                        }
                      }}
                    ></div>
                    <span className="text-xs text-gray-600 mt-2 absolute -bottom-6">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order List */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Order List</h2>
              <div className="relative">
                <button
                  onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                  className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                >
                  {monthFilter}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showMonthDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                      <div
                        key={month}
                        onClick={() => {
                          setMonthFilter(month);
                          setShowMonthDropdown(false);
                        }}
                        className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                      >
                        {month}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              {orderList.map((order, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400" 
                        alt="Car"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{order.name}</span>
                  </div>
                  <span
                    className="px-3 py-1 rounded-md text-xs font-medium text-white"
                    style={{ backgroundColor: order.status === 'Active' ? '#00695C' : '#6B7280' }}
                  >
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Your Recent Listings */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Your Recent Listings</h2>
            <button className="text-sm text-gray-600 hover:text-gray-900">View All Listings</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Car Image</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Car Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Views</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date Added</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentListings.map((listing) => (
                  <tr key={listing.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="w-14 h-10 bg-gray-800 rounded overflow-hidden">
                        <img 
                          src={listing.image} 
                          alt={listing.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-gray-900">{listing.name}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-900">{listing.price}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-block px-4 py-1 rounded-md text-xs font-medium ${
                          listing.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-900">{listing.views}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-900">{listing.date}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                          <Pause className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}