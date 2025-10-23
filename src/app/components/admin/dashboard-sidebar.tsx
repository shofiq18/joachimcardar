"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Building2,
  Users,
  Ban,
  ShieldCheck,
  CreditCard,
  Receipt,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Dashboards",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "All properties",
    icon: Building2,
    href: "/dashboard/properties",
  },
  {
    title: "All Users",
    icon: Users,
    href: "/dashboard/users",
  },
  {
    title: "Blocked Properties",
    icon: Ban,
    href: "/dashboard/blocked",
  },
  {
    title: "Verify property",
    icon: ShieldCheck,
    href: "/dashboard/verify",
  },
  {
    title: "Subscriptions",
    icon: CreditCard,
    href: "/dashboard/subscriptions",
  },
  {
    title: "Plan Management",
    icon: CreditCard,
    href: "/dashboard/plan-management",
  },
  {
    title: "Payment History",
    icon: Receipt,
    href: "/dashboard/payments",
  },
  {
    title: "Setting",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "flex flex-col bg-white border-r border-gray-200 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-amber-700">iRendity</span>
          </Link>
        )}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-[#004E60] text-white" : "text-gray-700 hover:bg-gray-100",
                    collapsed && "justify-center",
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
      <div className="p-2 border-t border-gray-200">
        <button
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors",
            collapsed && "justify-center",
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </aside>
  )
}
