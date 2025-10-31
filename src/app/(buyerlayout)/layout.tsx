"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  Package,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const navigationItems = [
  { href: "/buyer/account", label: "Account Details", icon: User },
  { href: "/buyer/order", label: "My Orders", icon: Package },
  { href: "/buyer/notifications", label: "Notification", icon: Bell },
  { href: "/buyer/settings", label: "Account Settings", icon: Settings },
  // { href: "/buyer/help", label: "Help Center", icon: HelpCircle },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">
        <div className="flex min-h-screen max-w-7xl mx-auto">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 bg-white border-r border-gray-200 p-4
          transform transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
          >
            {/* User Profile Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                MS
              </div>
              <span className="font-semibold text-gray-900">Md Shakil</span>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2 flex-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors
                  ${
                    isActive
                      ? "text-white bg-teal-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
                  >
                    <Icon size={20} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-500 bg-red-50 rounded-lg font-medium mt-100 transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </aside>

          {/* Main Content */}
          <main className="p-12 w-full">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
