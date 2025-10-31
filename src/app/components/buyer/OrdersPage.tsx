
"use client";

import { useState } from "react";
import { ChevronDown, MapPin, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Car {
  id: number;
  title: string;
  price: number;
  image: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  location: string;
  status?: "pending" | "accepted" | "rejected";
}

const mockActiveOrders: Car[] = [
  {
    id: 1,
    title: "Luxury Sedan",
    price: 45000,
    image: "/Fake.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
  },
  {
    id: 2,
    title: "Luxury Sedan",
    price: 45000,
    image: "/gold-car.jpeg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
  },
  {
    id: 3,
    title: "Luxury Sedan",
    price: 45000,
    image: "/gold-car.jpeg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
  },
];

const mockCompletedOrders: Car[] = [
  {
    id: 4,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-black.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
  },
  {
    id: 5,
    title: "Luxury Sedan",
    price: 45000,
    image: "/toyota.png",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
  },
  {
    id: 6,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-white.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
  },
];

const mockTestDriveRequests: Car[] = [
  {
    id: 7,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-black.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    status: "pending",
  },
  {
    id: 8,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-gray.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    status: "rejected",
  },
  {
    id: 9,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-white.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    status: "pending",
  },
  {
    id: 10,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-black.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    status: "rejected",
  },
  {
    id: 11,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-gray.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    status: "accepted",
  },
  {
    id: 12,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-white.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    status: "rejected",
  },
];

type TabType = "active" | "completed" | "testdrive";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<TabType>("active");
  const [sortBy, setSortBy] = useState("newest");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getCurrentData = () => {
    switch (activeTab) {
      case "active":
        return mockActiveOrders;
      case "completed":
        return mockCompletedOrders;
      case "testdrive":
        return mockTestDriveRequests;
      default:
        return [];
    }
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case "active":
        return "My Active Orders";
      case "completed":
        return "My Completed Orders";
      case "testdrive":
        return "My Test Drive Request";
      default:
        return "My Orders";
    }
  };

  const getButtonLabel = () => {
    switch (activeTab) {
      case "active":
        return "Active Orders";
      case "completed":
        return "Completed Orders";
      case "testdrive":
        return "All";
      default:
        return "Orders";
    }
  };

  const getActionButton = (car: Car) => {
    if (activeTab === "active") {
      return (
        <Link href="/track-order">
        <button className="w-full bg-[#00695C] text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition">
          Track Order
        </button>
        </Link>
      );
    }

    if (activeTab === "testdrive") {
      switch (car.status) {
        case "accepted":
          return (
            <button className="w-full bg-green-100 text-green-700 py-2 rounded-lg font-medium hover:bg-green-200 transition">
              Accept
            </button>
          );
        case "rejected":
          return (
            <button className="w-full bg-red-100 text-red-700 py-2 rounded-lg font-medium hover:bg-red-200 transition">
              Rejected
            </button>
          );
        case "pending":
          return (
            <button className="w-full bg-yellow-100 text-black py-2 rounded-lg font-medium hover:bg-red-200 transition">
              Pending
            </button>
          );
      }
    }

    return null;
  };

  const currentData = getCurrentData();

  return (
    <div>
      <div className=" flex justify-between my-12">
        <div className=" gap-2">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {getHeaderTitle()}
            </h1>
          </div>
          <span className="text-gray-600 font-medium mr-5">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-teal-600"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            {activeTab !== "testdrive" && (
              <>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </>
            )}
          </select>
        </div>

        <div className="">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 border-2 border-teal-600 text-teal-600 rounded-lg font-medium hover:bg-teal-50 flex items-center gap-2"
          >
            {getButtonLabel()}
            <ChevronDown size={20} />
          </button>

          {isDropdownOpen && (
            <div className=" mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  setActiveTab("active");
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                  activeTab === "active"
                    ? "bg-teal-50 text-teal-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                Active Orders
              </button>
              <button
                onClick={() => {
                  setActiveTab("completed");
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                  activeTab === "completed"
                    ? "bg-teal-50 text-teal-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                Completed Orders
              </button>
              <button
                onClick={() => {
                  setActiveTab("testdrive");
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                  activeTab === "testdrive"
                    ? "bg-teal-50 text-teal-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                Test Drive Request
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6 mb-8">
        {currentData.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className=" bg-gray-200 overflow-hidden">
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.title}
                width={500}
                height={300}
                className="w-full h-[300px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {car.title}
              </h3>
              <p className="text-xl font-semibold text-gray-900 mb-3">
                ${car.price.toLocaleString()}
              </p>

              {/* Details */}
              <div className="flex gap-4 mb-4 text-sm text-gray-600">
                <span className="flex space-x-3 items-center">
                  <span className="mr-1">
                    <Image
                      src="/icon/road-icon.png"
                      alt="setting-icon"
                      height={20}
                      width={20}
                    />
                  </span>{" "}
                  {car.mileage}
                </span>
                <span className=" flex mr-1">
                  <Image
                    src="/icon/gas-icon.svg"
                    alt="setting-icon"
                    height={20}
                    width={20}
                  />
                  {car.fuelType}
                </span>
                <div className="flex items-center gap-1">
                 <span className="mr-1">
                <Image
                  src="/icon/setting.svg"
                  alt="setting-icon"
                  height={20}
                  width={20}
                />
              </span>
                  {car.transmission}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 text-gray-600 mb-4">
                <MapPin size={16} />
                {car.location}
              </div>

              {/* Button */}
              {getActionButton(car)}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mb-8">
        <button className="w-10 h-10 bg-[#00695C] text-white rounded-lg font-medium">
          1
        </button>
        <button className="w-10 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          2
        </button>
        <button className="w-10 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          3
        </button>
        <span className="w-10 h-10 flex items-center justify-center text-gray-400">
          ...
        </span>
        <button className="w-10 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          8
        </button>
        <button className="w-10 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          ›
        </button>
      </div>
    </div>
  );
}