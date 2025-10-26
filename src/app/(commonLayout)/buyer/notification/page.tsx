"use client";

import { useState } from "react";
import { Trash2, CheckCircle, X } from "lucide-react";
import Image from "next/image";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  avatar?: string;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "New Message from Md Shakil",
    message: "You have a new message regarding the AD project.",
    time: "04:15 PM",
    read: false,
    avatar: "/man-with-purple-background.jpg",
  },
  {
    id: 2,
    title: "Order Shipped",
    message: "Your order #12345 has been shipped today.",
    time: "03:30 PM",
    read: true,
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    title: "System Update",
    message: "A new update is available for your account settings.",
    time: "02:00 PM",
    read: false,
    avatar: "/placeholder.svg",
  },
];

export default function NotificationModal() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isOpen, setIsOpen] = useState(true); // Modal state

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className=" min-h-screen fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-4">
        <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
          <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
            <X size={20} />
          </button>
        </div>
        {notifications.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No notifications yet.</p>
        ) : (
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center justify-between p-3 rounded-md ${
                  !notification.read ? "bg-teal-50" : "bg-white"
                } hover:bg-gray-100 transition-all duration-200`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={notification.avatar || "/placeholder.svg"}
                    alt={notification.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{notification.title}</h3>
                    <p className="text-xs text-gray-600">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {!notification.read && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="text-teal-600 hover:text-teal-800 transition-colors"
                    >
                      <CheckCircle size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}