
import type React from "react"
import { DashboardSidebar } from "../components/admin/dashboard-sidebar"
import { DashboardHeader } from "../components/admin/dashboard-header"
import { SellerDashboardSidebar } from "../components/seller-dashbaord/sellerDashboardSidebar"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SellerDashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader/>
        <main className="flex-1 overflow-y-auto bg-gray-50">{children}</main>
      </div>
    </div>
  )
}
