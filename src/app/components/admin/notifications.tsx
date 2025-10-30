"use client"

import { useState } from "react"
import { Bell, TrendingUp, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Notification {
  id: string
  title: string
  type: "System" | "Feature" | "Important" | "Promotion" | "Security"
  audience: string
  sentAt: string
  status: "Sent" | "Pending" | "Failed"
}

const typeColors: Record<string, { bg: string; text: string; badge: string }> = {
  System: { bg: "bg-blue-100", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  Feature: { bg: "bg-purple-100", text: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
  Important: { bg: "bg-red-100", text: "text-red-600", badge: "bg-red-100 text-red-700" },
  Promotion: { bg: "bg-green-100", text: "text-green-600", badge: "bg-green-100 text-green-700" },
  Security: { bg: "bg-yellow-100", text: "text-yellow-600", badge: "bg-yellow-100 text-yellow-700" },
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "System Maintenance Scheduled",
    type: "System",
    audience: "All Users",
    sentAt: "2025-10-08 10:30",
    status: "Sent",
  },
  {
    id: "2",
    title: "New Feature: 360° Car View",
    type: "Feature",
    audience: "All Users",
    sentAt: "2025-10-07 15:00",
    status: "Sent",
  },
  {
    id: "3",
    title: "Payment Gateway Update",
    type: "Important",
    audience: "Sellers",
    sentAt: "2025-10-06 09:15",
    status: "Sent",
  },
  {
    id: "4",
    title: "Limited Time Promotion",
    type: "Promotion",
    audience: "Buyers",
    sentAt: "2025-10-05 14:20",
    status: "Sent",
  },
  {
    id: "5",
    title: "Security Update Required",
    type: "Security",
    audience: "All Users",
    sentAt: "2025-10-04 11:45",
    status: "Sent",
  },
]

export default function NotificationsPage() {
  const [formData, setFormData] = useState({
    targetAudience: "All Users",
    notificationType: "General",
    title: "",
    message: "",
  })

  const handleSendNotification = () => {
    console.log("Sending notification:", formData)
    setFormData({
      targetAudience: "All Users",
      notificationType: "General",
      title: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Notifications & Announcements</h1>
          <p className="text-gray-600 mt-2">Send notifications and announcements to users</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Sent</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">248</p>
                <p className="text-gray-600 text-xs mt-2">notifications</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm">This Month</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">32</p>
                <p className="text-gray-600 text-xs mt-2">notifications</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg. Open Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">68.5%</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Send Notification Form */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Send className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl font-bold text-gray-900">Send New Notification</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Target Audience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
              <select
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option>All Users</option>
                <option>Buyers</option>
                <option>Sellers</option>
                <option>Dealers</option>
              </select>
            </div>

            {/* Notification Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notification Type</label>
              <select
                value={formData.notificationType}
                onChange={(e) => setFormData({ ...formData, notificationType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option>General</option>
                <option>System</option>
                <option>Feature</option>
                <option>Important</option>
                <option>Promotion</option>
                <option>Security</option>
              </select>
            </div>
          </div>

          {/* Notification Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Notification Title</label>
            <input
              type="text"
              placeholder="Enter notification title..."
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Send Button */}
          <Button
            onClick={handleSendNotification}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Notification
          </Button>
        </div>

        {/* Recent Notifications Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Recent Notifications</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Audience</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Sent At</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockNotifications.map((notification) => (
                  <tr key={notification.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{notification.title}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[notification.type].badge}`}
                      >
                        {notification.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{notification.audience}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{notification.sentAt}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {notification.status}
                      </span>
                    </td>
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
