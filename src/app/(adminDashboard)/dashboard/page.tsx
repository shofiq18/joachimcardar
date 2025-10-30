"use client"

import { RecentListingsTable } from "@/app/components/admin/recent-listings-table"
import { RevenueChart } from "@/app/components/admin/revenue-chart"
import { StatCard } from "@/app/components/admin/stat-card"
import { VehicleCategoriesChart } from "@/app/components/admin/vehicle-categories-chart"
import { TrendingUp, Users, Home, DollarSign } from "lucide-react"


export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "287,612",
      change: "+12.5%",
      icon: Users,
      color: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "Active Listings",
      value: "287,612",
      change: "+12.5%",
      icon: Home,
      color: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      title: "Total Revenue",
      value: "287,612",
      change: "+12.5%",
      icon: DollarSign,
      color: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      title: "Transactions",
      value: "287,612",
      change: "+12.5%",
      icon: TrendingUp,
      color: "bg-red-100",
      iconColor: "text-red-500",
    },
  ]

  return (
    <div className="p-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <VehicleCategoriesChart />
        </div>
      </div>

      {/* Recent Listings */}
      <RecentListingsTable />
    </div>
  )
}
