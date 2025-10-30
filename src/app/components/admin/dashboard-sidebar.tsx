"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Car,
  PersonStandingIcon,
  User,
  BellIcon,
  AlignVerticalJustifyCenterIcon,
  AlignHorizontalJustifyStartIcon,
  ChartBar,
  ChartColumnBigIcon,
  ChartNoAxesCombinedIcon,
  BarChartHorizontalIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MdAnalytics, MdNotifications, MdOutlineCategory } from "react-icons/md"
import { BsPersonFillExclamation } from "react-icons/bs"

const menuItems = [
  {
    title: "Dashboards",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Users Management",
    icon: Users,
    href: "/dashboard/users",
  },
  {
    title: "Listings Management",
    icon: Car,
    href: "/dashboard/listings",
  },
  {
    title: "Transactions",
    icon: CreditCard,
    href: "/dashboard/transactions",
  },
  {
    title: "Analytics & Reports",
    icon: BarChartHorizontalIcon,
    href: "/dashboard/analytics",
  },
  {
    title: "Notificatons",
    icon: BellIcon,
    href: "/dashboard/notifications",
  },
  {
    title: "Category & Content",
    icon: MdOutlineCategory,
    href: "/dashboard/category",
  },
  {
    title: "Setting",
    icon: Settings,
    href: "/dashboard/settings",
  },
  {
    title: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
]

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "flex flex-col bg-white border-r border-gray-200 transition-all duration-300",
        collapsed ? "w-16" : "w-68",
      )}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-center p-4 ">
        {!collapsed && (
          <Link href="/" className="flex items-center ml-8">
            <Image src="/dashboard-logo.svg" alt="dashboard logo" height={9} width={154}/>
          </Link>
        )}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 ml-16">
          {collapsed ? <ChevronRight className="h-4 w-4 " /> : <ChevronLeft className="h-4 w-4 " />}
        </Button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 md:px-4 2xl:px-5">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors",
                    isActive ? "bg-[#00695C] text-white" : "text-gray-700 hover:bg-gray-100",
                    collapsed && "justify-center py-2",
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 ">
        <button
          className={cn(
            "flex items-center justify-center gap-3 px-3 py-2.5 rounded-lg text-lg text-center font-medium text-red-600 bg-red-50 w-full transition-colors",
            collapsed && "justify-center",
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span className="">Log out</span>}
        </button>
      </div>
    </aside>
  )
}
