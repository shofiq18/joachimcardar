'use client';

import React, { useState } from 'react';

export default function AccountPage() {
  const [formData, setFormData] = useState({
    fullName: 'Md Shakil',
    lastName: 'Md Shakil',
    phone: '+1 234 567 890',
    email: 'jane.doe@example.com',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile & Settings</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Profile</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">Account Details</span>
        </div>
      </div>

      {/* Profile Form Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 max-w-4xl">
        {/* Profile Photo Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold">
            MS
          </div>
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
            Change Photo
          </button>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="px-8 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 font-medium transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
