"use client"

import { useState, useMemo } from "react"
import { Search, ChevronDown, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type UserRole = "Buyer" | "Seller" | "Dealer"
type UserStatus = "Active" | "Verified" | "Suspended"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  joined: string
  purchases: number
  avatar: string
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Dianne Russell",
    email: "felicia.reid@example.com",
    role: "Dealer",
    status: "Active",
    joined: "May 8, 2014",
    purchases: 2,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dianne",
  },
  {
    id: "2",
    name: "Albert Flores",
    email: "debra.holt@example.com",
    role: "Seller",
    status: "Active",
    joined: "March 6, 2018",
    purchases: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Albert",
  },
  {
    id: "3",
    name: "Darrell Steward",
    email: "tanya.hill@example.com",
    role: "Buyer",
    status: "Active",
    joined: "August 24, 2013",
    purchases: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darrell",
  },
  {
    id: "4",
    name: "Jacob Jones",
    email: "debra.holt@example.com",
    role: "Dealer",
    status: "Verified",
    joined: "May 8, 2014",
    purchases: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jacob",
  },
  {
    id: "5",
    name: "Floyd Miles",
    email: "felicia.reid@example.com",
    role: "Seller",
    status: "Active",
    joined: "August 2, 2013",
    purchases: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Floyd",
  },
  {
    id: "6",
    name: "Kristin Watson",
    email: "sara.cruz@example.com",
    role: "Buyer",
    status: "Suspended",
    joined: "May 29, 2017",
    purchases: 2,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kristin",
  },
  {
    id: "7",
    name: "Leslie Alexander",
    email: "debra.holt@example.com",
    role: "Seller",
    status: "Verified",
    joined: "May 20, 2015",
    purchases: 3,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leslie",
  },
  {
    id: "8",
    name: "Wade Warren",
    email: "bill.sanders@example.com",
    role: "Dealer",
    status: "Active",
    joined: "May 20, 2015",
    purchases: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wade",
  },
  {
    id: "9",
    name: "Savannah Nguyen",
    email: "sara.cruz@example.com",
    role: "Buyer",
    status: "Active",
    joined: "October 25, 2019",
    purchases: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Savannah",
  },
  {
    id: "10",
    name: "Dianne Russell",
    email: "bill.sanders@example.com",
    role: "Dealer",
    status: "Active",
    joined: "October 24, 2018",
    purchases: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dianne2",
  },
  {
    id: "11",
    name: "Jenny Wilson",
    email: "debra.holt@example.com",
    role: "Buyer",
    status: "Suspended",
    joined: "May 12, 2019",
    purchases: 3,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny",
  },
]

const getStatusColor = (status: UserStatus) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700"
    case "Verified":
      return "bg-blue-100 text-blue-700"
    case "Suspended":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState<UserRole | "All">("All")
  const [selectedStatus, setSelectedStatus] = useState<UserStatus | "All">("All")

  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRole = selectedRole === "All" || user.role === selectedRole
      const matchesStatus = selectedStatus === "All" || user.status === selectedStatus
      return matchesSearch && matchesRole && matchesStatus
    })
  }, [searchTerm, selectedRole, selectedStatus])

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <p className="mt-1 text-gray-600">Manage all users, buyers, sellers, and dealers</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="flex gap-3">
          {/* Role Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                {selectedRole === "All" ? "All Roles" : selectedRole}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onClick={() => setSelectedRole("All")}
                className={selectedRole === "All" ? "bg-gray-100" : ""}
              >
                <span className="flex items-center gap-2">
                  {selectedRole === "All" && <span className="text-teal-600">✓</span>}
                  All Roles
                </span>
              </DropdownMenuItem>
              {["Buyer", "Seller", "Dealer"].map((role) => (
                <DropdownMenuItem
                  key={role}
                  onClick={() => setSelectedRole(role as UserRole)}
                  className={selectedRole === role ? "bg-gray-100" : ""}
                >
                  <span className="flex items-center gap-2">
                    {selectedRole === role && <span className="text-teal-600">✓</span>}
                    {role}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                {selectedStatus === "All" ? "All Status" : selectedStatus}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onClick={() => setSelectedStatus("All")}
                className={selectedStatus === "All" ? "bg-gray-100" : ""}
              >
                <span className="flex items-center gap-2">
                  {selectedStatus === "All" && <span className="text-teal-600">✓</span>}
                  All Status
                </span>
              </DropdownMenuItem>
              {["Active", "Verified", "Suspended"].map((status) => (
                <DropdownMenuItem
                  key={status}
                  onClick={() => setSelectedStatus(status as UserStatus)}
                  className={selectedStatus === status ? "bg-gray-100" : ""}
                >
                  <span className="flex items-center gap-2">
                    {selectedStatus === status && <span className="text-teal-600">✓</span>}
                    {status}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">User</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Joined</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Purchases</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-10 w-10 rounded-full" />
                    <span className="text-sm font-medium text-gray-900">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(user.status)}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.joined}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.purchases}</td>
                <td className="px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
                        <MoreVertical className="h-4 w-4 text-gray-600" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">Verify User</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-red-600">Suspend User</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredUsers.length} of {mockUsers.length} users
      </div>
    </div>
  )
}
