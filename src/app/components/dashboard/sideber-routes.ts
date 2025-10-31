import { MdOutlineCategory } from "react-icons/md";
import {
  LayoutDashboard,
  Users,
  Car,
  CreditCard,
  BarChartHorizontalIcon,
  BellIcon,
  Settings,
  User,
} from "lucide-react"; // adjust this if you use another icon lib

const sidebarRoutes = {
  ADMIN: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users Management",
      path: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Listings Management",
      path: "/dashboard/listings",
      icon: Car,
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
      icon: CreditCard,
    },
    {
      title: "Analytics & Reports",
      path: "/dashboard/analytics",
      icon: BarChartHorizontalIcon,
    },
    {
      title: "Notifications",
      path: "/dashboard/notifications",
      icon: BellIcon,
    },
    {
      title: "Category & Content",
      path: "/dashboard/category",
      icon: MdOutlineCategory,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
      subNav: [
        {
          title: "Profile",
          path: "/dashboard/settings/profile",
          icon: User,
        },
      ],
    },
  ],

  SELLER: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Listings",
      path: "/dashboard/my-listings",
      icon: Car,
    },
    {
      title: "Messages",
      path: "/dashboard/messages",
      icon: BellIcon,
    },
    {
      title: "Earnings",
      path: "/dashboard/earnings",
      icon: CreditCard,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
      subNav: [
        {
          title: "Profile",
          path: "/dashboard/settings/profile",
          icon: User,
        },
      ],
    },
  ],
};

export default sidebarRoutes;
