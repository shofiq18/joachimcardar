// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   LayoutDashboard,
//   Settings,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
//   ListIcon,
//   Mail,
//   MessageCircle,
//   EarIcon,
//   DollarSign,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import {
// } from "react-icons/md";


// const menuItems = [
//   {
//     title: "Dashboards",
//     icon: LayoutDashboard,
//     href: "/seller-dashboard",
//   },
//   {
//     title: "My Listings",
//     icon: ListIcon,
//     href: "/seller-dashboard/my-listings",
//   },
//   {
//     title: "Messages",
//     icon: MessageCircle,
//     href: "/seller-dashboard/messages",
//   },
//   {
//         title: "Earnings",
//         icon: DollarSign,
//     href: "/seller-dashboard/earnings",
//   },
//   {
//     title: "Settings",
//     icon: Settings,
//     href: "/seller-dashboard/settings",
//   },
// ];

// export function SellerDashboardSidebar() {
//   const [collapsed, setCollapsed] = useState(false);
//   const pathname = usePathname();

//   return (
//     <aside
//       className={cn(
//         "flex flex-col bg-white border-r border-gray-200 transition-all duration-300",
//         collapsed ? "w-16" : "w-68"
//       )}
//     >
//       {/* Logo and Toggle */}
//       <div className="flex items-center justify-center p-4 ">
//         {!collapsed && (
//           <Link href="/" className="flex items-center ml-8">
//             <Image
//               src="/dashboard-logo.svg"
//               alt="dashboard logo"
//               height={9}
//               width={154}
//             />
//           </Link>
//         )}
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setCollapsed(!collapsed)}
//           className="h-8 w-8 md:ml-12"
//         >
//           {collapsed ? (
//             <ChevronRight className="h-4 w-4 " />
//           ) : (
//             <ChevronLeft className="h-4 w-4 " />
//           )}
//         </Button>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="flex-1 overflow-y-auto py-4">
//         <ul className="space-y-2 md:px-4 2xl:px-5">
//           {menuItems.map((item) => {
//             const isActive = pathname === item.href;
//             const Icon = item.icon;

//             return (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className={cn(
//                     "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors",
//                     isActive
//                       ? "bg-[#00695C] text-white"
//                       : "text-gray-700 hover:bg-gray-100",
//                     collapsed && "justify-center py-2"
//                   )}
//                 >
//                   <Icon className="h-5 w-5 flex-shrink-0" />
//                   {!collapsed && <span>{item.title}</span>}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Logout Button */}
//       <div className="p-4 ">
//         <button
//           className={cn(
//             "flex items-center justify-center gap-3 px-3 py-2.5 rounded-lg text-lg text-center font-medium text-red-600 bg-red-50 w-full transition-colors",
//             collapsed && "justify-center"
//           )}
//         >
//           <LogOut className="h-5 w-5 flex-shrink-0" />
//           {!collapsed && <span className="">Log out</span>}
//         </button>
//       </div>
//     </aside>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ListIcon,
  MessageCircle,
  DollarSign,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const menuItems = [
  {
    title: "Dashboards",
    icon: LayoutDashboard,
    href: "/seller-dashboard",
  },
  {
    title: "My Listings",
    icon: ListIcon,
    href: "/seller-dashboard/my-listings",
  },
  {
    title: "Messages",
    icon: MessageCircle,
    href: "/seller-dashboard/messages",
  },
  {
    title: "Earnings",
    icon: DollarSign,
    href: "/seller-dashboard/earnings",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/seller-dashboard/settings",          // <-- main link stays
    subItems: [
      { title: "Basic",        href: "/seller-dashboard/settings/basic" },
      { title: "Account",      href: "/seller-dashboard/settings/account" },
      { title: "Notifications",href: "/seller-dashboard/settings/notifications" },
    ],
  },
];

export function SellerDashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col bg-white border-r border-gray-200 transition-all duration-300",
        collapsed ? "w-16" : "w-68"
      )}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-center p-4">
        {!collapsed && (
          <Link href="/" className="flex items-center ml-8">
            <Image
              src="/dashboard-logo.svg"
              alt="dashboard logo"
              height={9}
              width={154}
            />
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 md:ml-12"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 md:px-4 2xl:px-5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            // active if main href matches OR any sub‑item starts with current path
            const isActive =
              pathname === item.href ||
              (item.subItems?.some((sub) => pathname.startsWith(sub.href)) ?? false);

            const isSubOpen = openSubmenu === item.title;

            return (
              <li key={item.href}>
                {/* ----- MAIN MENU ITEM (still a Link) ----- */}
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors",
                    isActive
                      ? "bg-[#00695C] text-white"
                      : "text-gray-700 hover:bg-gray-100",
                    collapsed && "justify-center py-2"
                  )}
                  onClick={(e) => {
                    if (item.subItems && !collapsed) {
                      e.preventDefault();                 // stop navigation
                      setOpenSubmenu(isSubOpen ? null : item.title);
                    }
                  }}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.title}</span>
                      {item.subItems && (
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isSubOpen && "rotate-180"
                          )}
                        />
                      )}
                    </>
                  )}
                </Link>

                {/* ----- SUB‑MENU (only when expanded & not collapsed) ----- */}
                {item.subItems && !collapsed && isSubOpen && (
                  <ul className="mt-1 space-y-1 ml-10">
                    {item.subItems.map((sub) => {
                      const subActive = pathname === sub.href;
                      return (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className={cn(
                              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                              subActive
                                ? "bg-[#00695C]/10 text-[#00695C]"
                                : "text-gray-600 hover:bg-gray-100"
                            )}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <button
          className={cn(
            "flex items-center justify-center gap-3 px-3 py-2.5 rounded-lg text-lg text-center font-medium text-red-600 bg-red-50 w-full transition-colors",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </aside>
  );
}