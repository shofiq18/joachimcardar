"use client"

import type React from "react"

import { useState } from "react"
import { Search, Eye, MoreVertical, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Listing {
  id: string
  vehicle: string
  seller: string
  price: number
  category: string
  status: "Active" | "Pending" | "Rejected" | "Expired"
  views: number
  date: string
}

const mockListings: Listing[] = [
  {
    id: "1",
    vehicle: "2023 Tesla Model 3",
    seller: "John Smith",
    price: 42000,
    category: "EV",
    status: "Active",
    views: 234,
    date: "2025-10-08",
  },
  {
    id: "2",
    vehicle: "2022 BMW X5",
    seller: "AutoDealer Plus",
    price: 58500,
    category: "SUV",
    status: "Pending",
    views: 189,
    date: "2025-10-08",
  },
  {
    id: "3",
    vehicle: "2024 Ford F-150",
    seller: "Mike Johnson",
    price: 51200,
    category: "Truck",
    status: "Active",
    views: 412,
    date: "2025-10-07",
  },
  {
    id: "4",
    vehicle: "2023 Honda Civic",
    seller: "Sarah Williams",
    price: 28900,
    category: "Sedan",
    status: "Active",
    views: 321,
    date: "2025-10-07",
  },
  {
    id: "5",
    vehicle: "2021 Audi A4",
    seller: "CarWorld Inc",
    price: 35000,
    category: "Sedan",
    status: "Rejected",
    views: 87,
    date: "2025-10-06",
  },
  {
    id: "6",
    vehicle: "2023 Porsche 911",
    seller: "Robert Brown",
    price: 125000,
    category: "Sports",
    status: "Active",
    views: 567,
    date: "2025-10-06",
  },
  {
    id: "7",
    vehicle: "2024 Toyota RAV4",
    seller: "Emma Davis",
    price: 38500,
    category: "SUV",
    status: "Active",
    views: 298,
    date: "2025-10-05",
  },
  {
    id: "8",
    vehicle: "2023 Tesla Model 3",
    seller: "AutoDealer Plus",
    price: 42000,
    category: "SUV",
    status: "Expired",
    views: 100,
    date: "2025-10-05",
  },
  {
    id: "9",
    vehicle: "2023 Honda Civic",
    seller: "Sarah Williams",
    price: 28900,
    category: "SUV",
    status: "Active",
    views: 400,
    date: "2025-10-05",
  },
]

const categories = ["All Categories", "Sedan", "SUV", "Truck", "EV", "Sports"]
const statuses = ["All Status", "Active", "Pending", "Rejected", "Expired"]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700"
    case "Pending":
      return "bg-yellow-100 text-yellow-700"
    case "Rejected":
      return "bg-red-100 text-red-700"
    case "Expired":
      return "bg-gray-100 text-gray-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

const StatCard = ({
  label,
  value,
  icon: Icon,
}: {
  label: string
  value: string | number
  icon: React.ReactNode
}) => (
  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6">
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
    <div className="text-3xl text-teal-600">{Icon}</div>
  </div>
)

export default function ListingsManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedStatus, setSelectedStatus] = useState("All Status")

  const filteredListings = mockListings.filter((listing) => {
    const matchesSearch =
      listing.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.seller.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || listing.category === selectedCategory
    const matchesStatus = selectedStatus === "All Status" || listing.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Listings Management</h1>
        <p className="mt-2 text-gray-600">Review and manage all vehicle listings</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Listings" value="8" icon="📋" />
        <StatCard label="Active" value="5" icon="✓" />
        <StatCard label="Pending Review" value="1" icon="🚩" />
        <StatCard label="Total Views" value="2,264" icon="👁️" />
      </div>

      {/* Listings Table Section */}
      <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-lg font-semibold text-gray-900">All Listings ({filteredListings.length})</h2>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            {/* Search */}
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search listings by car or seller..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-teal-500 focus:outline-none md:w-64"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm text-gray-900 focus:border-teal-500 focus:outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm text-gray-900 focus:border-teal-500 focus:outline-none"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Vehicle</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Seller</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Views</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredListings.map((listing) => (
                <tr key={listing.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm text-gray-900">{listing.vehicle}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{listing.seller}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">${listing.price.toLocaleString()}</td>
                  <td className="px-4 py-4 text-sm">
                    <span className="inline-block rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-700">
                      {listing.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(listing.status)}`}
                    >
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">{listing.views}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{listing.date}</td>
                  <td className="px-4 py-4 text-sm">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="rounded-lg p-2 hover:bg-gray-100">
                          <MoreVertical className="h-5 w-5 text-gray-600" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem className="cursor-pointer">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        {listing.status === "Pending" && (
                          <>
                            <DropdownMenuItem className="cursor-pointer text-green-600">✓ Approve</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-600">✕ Reject</DropdownMenuItem>
                          </>
                        )}
                        {listing.status !== "Pending" && (
                          <DropdownMenuItem className="cursor-pointer text-red-600">🗑️ Delete</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
