"use client"

import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function IndividualKYCVerification() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log('Submitting file:', selectedFile.name);
      // Handle submission logic here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">KYC Verification</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side - Illustration */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center relative">
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 text-red-400 text-2xl">+</div>
              <div className="absolute top-12 right-12 text-green-500 text-2xl">✦</div>
              <div className="absolute bottom-16 left-12 text-red-400 text-2xl">×</div>
              <div className="absolute bottom-12 right-16 text-pink-400 text-2xl">◀</div>
              <div className="absolute top-16 left-16 text-yellow-400 text-2xl">◆</div>
              <div className="absolute right-24 bottom-20 text-gray-400 text-2xl">⚬</div>
              
              {/* Certificate/Document illustration */}
              <div className="relative z-10">
                <div className="bg-white rounded-lg shadow-lg p-6 w-40 border-2 border-teal-600">
                  <div className="space-y-2 mb-4">
                    <div className="h-2 bg-teal-600 rounded"></div>
                    <div className="h-2 bg-teal-600 rounded w-3/4"></div>
                    <div className="h-2 bg-teal-600 rounded w-1/2"></div>
                  </div>
                  
                  {/* Checkmark badge */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center border-4 border-white shadow-lg">
                      <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {/* Ribbon */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex gap-1">
                      <div className="w-6 h-12 bg-teal-600"></div>
                      <div className="w-6 h-12 bg-teal-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Upload section */}
          <div className="flex-1 w-full">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6 hover:border-teal-500 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload National ID</h3>
              <p className="text-sm text-gray-500 mb-4">Please upload a clear photo of your NID</p>
              
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="inline-block px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Choose Files
                </span>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
              
              {selectedFile && (
                <p className="mt-3 text-sm text-teal-600 font-medium">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={!selectedFile}
              className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit for Verification
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
}