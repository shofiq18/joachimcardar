"use client"

import { Search, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const listings = [
  {
    id: 1,
    car: "2023 Tesla Model 3",
    seller: "John Smith",
    price: "$42,000",
    status: "Active",
    date: "2025-10-08",
  },
  {
    id: 2,
    car: "2022 BMW X5",
    seller: "John Smith",
    price: "$42,000",
    status: "Pending",
    date: "2025-10-08",
  },
  {
    id: 3,
    car: "2023 Honda Civic",
    seller: "John Smith",
    price: "$42,000",
    status: "Active",
    date: "2025-10-08",
  },
  {
    id: 4,
    car: "2023 Honda Civic",
    seller: "John Smith",
    price: "$42,000",
    status: "Active",
    date: "2025-10-08",
  },
]

export function RecentListingsTable() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Listings</CardTitle>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Car</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Seller</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{listing.car}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{listing.seller}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{listing.price}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-4 py-2 rounded-sm text-xs font-medium ${
                        listing.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-500"
                      }`}
                    >
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{listing.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
