"use client"

import { useState } from "react"
import { Search, RefreshCw, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Transaction {
  id: string
  buyer: string
  seller: string
  vehicle: string
  amount: number
  commission: number
  status: "Completed" | "Pending" | "Failed"
  date: string
  method: "Card" | "Bank" | "Wallet"
}

const mockTransactions: Transaction[] = [
  {
    id: "TXN-001",
    buyer: "Jenny Wilson",
    seller: "Dionne Russell",
    vehicle: "2024 Ford F-150",
    amount: 2560,
    commission: 256,
    status: "Completed",
    date: "2025-10-08",
    method: "Card",
  },
  {
    id: "TXN-002",
    buyer: "Floyd Miles",
    seller: "Albert Flores",
    vehicle: "2023 Honda Civic",
    amount: 1445,
    commission: 144.5,
    status: "Completed",
    date: "2025-10-08",
    method: "Bank",
  },
  {
    id: "TXN-003",
    buyer: "Wade Warren",
    seller: "Jerome Bell",
    vehicle: "2022 BMW X5",
    amount: 2925,
    commission: 292.5,
    status: "Pending",
    date: "2025-10-07",
    method: "Wallet",
  },
  {
    id: "TXN-004",
    buyer: "Jane Cooper",
    seller: "Jerome Bell",
    vehicle: "2023 Tesla Model 3",
    amount: 2100,
    commission: 210,
    status: "Completed",
    date: "2025-10-07",
    method: "Card",
  },
  {
    id: "TXN-005",
    buyer: "Cody Fisher",
    seller: "Jacob Jones",
    vehicle: "2021 Audi A4",
    amount: 0,
    commission: 0,
    status: "Failed",
    date: "2025-10-06",
    method: "Bank",
  },
  {
    id: "TXN-006",
    buyer: "Arlene McCoy",
    seller: "Jane Cooper",
    vehicle: "2024 Toyota RAV4",
    amount: 1925,
    commission: 192.5,
    status: "Completed",
    date: "2025-10-06",
    method: "Card",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700"
    case "Pending":
      return "bg-yellow-100 text-yellow-700"
    case "Failed":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

const getMethodIcon = (method: string) => {
  switch (method) {
    case "Card":
      return "💳"
    case "Bank":
      return "🏦"
    case "Wallet":
      return "👛"
    default:
      return "💰"
  }
}

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All Status")
  const [methodFilter, setMethodFilter] = useState("All Methods")

  const filteredTransactions = mockTransactions.filter((tx) => {
    const matchesSearch =
      tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.seller.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "All Status" || tx.status === statusFilter
    const matchesMethod = methodFilter === "All Methods" || tx.method === methodFilter

    return matchesSearch && matchesStatus && matchesMethod
  })

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#2D2D2D]">Transactions & Payments</h1>
          <p className="text-[#636F85] text-base  mt-4">Monitor all payment transactions and revenue</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg md:p-6 2xl:p-10 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-base">Total Listings</p>
                <p className="text-xl font-semibold text-[#2D2D2D] mt-2">$160,600</p>
              </div>
              <div className="text-3xl"><Image src="/dollar.svg" alt="dollar" width={48} height={48} /></div>
            </div>
          </div>

          <div className="bg-white rounded-lg md:p-6 2xl:p-10 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-base">Commission Earned</p>
                <p className="text-xl font-semibold text-[#2D2D2D] mt-2">$8,030</p>
              </div>
              <div className="text-3xl"><Image src="/tranding.svg" alt="dollar" width={48} height={48} /></div>
            </div>
          </div>

          <div className="bg-white rounded-lg md:p-6 2xl:p-10 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-base">Completed</p>
                <p className="text-xl font-semibold text-[#2D2D2D] mt-2">4 transactions</p>
              </div>
              <div className="text-3xl"><Image src="/complete.svg" alt="check" width={48} height={48} /></div>
            </div>
          </div>

          <div className="bg-white rounded-lg md:p-6 2xl:p-10 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-base">Pending</p>
                <p className="text-xl font-semibold text-[#2D2D2D] mt-2">1 transactions</p>
              </div>
              <div className="text-3xl"><Image src="/users.svg" alt="pending" width={48} height={48} /></div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">All Transactions ({filteredTransactions.length})</h2>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by transaction ID, buyer, or seller..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>

              <select
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option>All Methods</option>
                <option>Card</option>
                <option>Bank</option>
                <option>Wallet</option>
              </select>

              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Buyer</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Seller</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vehicle</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Commission</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-teal-600">{tx.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{tx.buyer}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{tx.seller}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{tx.vehicle}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">${tx.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">${tx.commission.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-4 py-2 rounded-sm text-xs font-medium ${getStatusColor(tx.status)}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
