

"use client";

import { useState } from "react";
import { Send, Search, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface Message {
  id: number;
  sender: "user" | "other";
  text: string;
  time: string;
  avatar?: string;
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  onlineStatus?: string;
  memberCount?: number;
  onlineCount?: number;
}

const mockChats: Chat[] = [
  {
    id: 1,
    name: "Dustin",
    avatar: "/profile-blog.jpeg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:31 am",
    unread: 0,
  },
  {
    id: 2,
    name: "Md Shakil",
    avatar: "/profile-blog.jpeg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:40 am",
    unread: 0,
    onlineStatus: "online",
    memberCount: 45,
    onlineCount: 24,
  },
  {
    id: 3,
    name: "Philip",
    avatar: "/profile-blog.jpeg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:35 am",
    unread: 5,
  },
  {
    id: 4,
    name: "Marvin",
    avatar: "/profile-blog.jpeg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:50 am",
    unread: 0,
  },
  {
    id: 5,
    name: "Nathan",
    avatar: "/profile-blog.jpeg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:55 am",
    unread: 0,
  },
  {
    id: 6,
    name: "Randall",
    avatar: "/profile-blog.jpeg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "8:31 am",
    unread: 0,
  },
  {
    id: 7,
    name: "Mitchell",
    avatar: "/profile-blog.jpeg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:25 am",
    unread: 0,
  },
  {
    id: 8,
    name: "Nathan",
    avatar: "/man-blue-background.png",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:55 am",
    unread: 0,
  },
  {
    id: 9,
    name: "Randall",
    avatar: "/woman-with-red-background.jpg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "8:31 am",
    unread: 0,
  },
  {
    id: 10,
    name: "Mitchell",
    avatar: "/woman-pink-background.png",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:25 am",
    unread: 0,
  },
  {
    id: 11,
    name: "Nathan",
    avatar: "/man-blue-background.png",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:55 am",
    unread: 0,
  },
  {
    id: 12,
    name: "Randall",
    avatar: "/woman-with-red-background.jpg",
    lastMessage: "But I dont on not shaped for sportive",
    time: "8:31 am",
    unread: 0,
  },
  {
    id: 13,
    name: "Mitchell",
    avatar: "/woman-pink-background.png",
    lastMessage: "But I dont on not shaped for sportive",
    time: "9:25 am",
    unread: 0,
  },
];

const mockMessages: Message[] = [
  {
    id: 1,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "07:59 pm",
    avatar: "/man-with-orange-background.jpg",
  },
  {
    id: 2,
    sender: "user",
    text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas.",
    time: "11:43 pm",
    avatar: "/woman-pink-background.png",
  },
  {
    id: 3,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "02:30 pm",
    avatar: "/man-with-orange-background.jpg",
  },
  {
    id: 4,
    sender: "user",
    text: "Same here! Been working project for the past 5 hours despite of having so much to do",
    time: "04:15 am",
    avatar: "/woman-pink-background.png",
  },
  {
    id: 5,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "04:02 am",
    avatar: "/man-with-orange-background.jpg",
  },
  {
    id: 6,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "02:30 pm",
    avatar: "/man-with-orange-background.jpg",
  },
  {
    id: 7,
    sender: "user",
    text: "Same here! Been working project for the past 5 hours despite of having so much to do",
    time: "04:15 am",
    avatar: "/woman-pink-background.png",
  },
  {
    id: 8,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "04:02 am",
    avatar: "/man-with-orange-background.jpg",
  },
  {
    id: 9,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "02:30 pm",
    avatar: "/man-with-orange-background.jpg",
  },
  {
    id: 10,
    sender: "user",
    text: "Same here! Been working project for the past 5 hours despite of having so much to do",
    time: "04:15 am",
    avatar: "/woman-pink-background.png",
  },
  {
    id: 11,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "04:02 am",
    avatar: "/man-with-orange-background.jpg",
  },
  {
    id: 12,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "02:30 pm",
    avatar: "/man-with-orange-background.jpg",
  },
  {
    id: 13,
    sender: "user",
    text: "Same here! Been working project for the past 5 hours despite of having so much to do",
    time: "04:15 am",
    avatar: "/woman-pink-background.png",
  },
  {
    id: 14,
    sender: "other",
    text: "I'm just working on a our AD project. What about you ?",
    time: "04:02 am",
    avatar: "/man-with-orange-background.jpg",
  },
];

export default function SellerChat() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(mockChats[1]);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageText, setMessageText] = useState("");

  return (
    <div className="bg-gray-50 py-12">
      <div className="flex px-6  mx-auto">
        {/* Sidebar */}
        <div className="w-96 border-r border-gray-200 flex flex-col bg-white shadow-2xl rounded-2xl">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Chats</h2>
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search message"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-600"
              />
            </div>
          </div>

          {/* Chat List - Added max-height for scrolling */}
          <div className="flex-1 overflow-y-auto" style={{ maxHeight: "calc(90vh - 250px)" }}>
            {mockChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`w-full px-4 py-3 text-left transition ${
                  selectedChat?.id === chat.id ? "bg-teal-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={chat.avatar || "/placeholder.svg"}
                      alt={chat.name}
                      height={18}
                      width={18}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {selectedChat?.id === chat.id && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-teal-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">{chat.name}</p>
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <p className="text-xs text-gray-500">{chat.time}</p>
                    {chat.unread ? (
                      <span className="bg-teal-600 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                        {chat.unread}
                      </span>
                    ) : null}
                  </div>
                  </div>
                </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 ml-6 flex flex-col bg-white shadow-2xl rounded-2xl">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-4">
                <button className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft size={24} />
                </button>
                <div className="relative flex-shrink-0">
                  <Image
                    src={selectedChat.avatar || "/placeholder.svg"}
                    alt={selectedChat.name}
                    width={18}
                    height={18}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-teal-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{selectedChat.name}</p>
                  <p className="text-sm text-gray-500">
                    {selectedChat.memberCount
                      ? `${selectedChat.memberCount} members, ${selectedChat.onlineCount} online`
                      : "Active now"}
                  </p>
                </div>
              </div>

              {/* Messages - Added max-height for scrolling */}
              <div className="flex-1 px-4 py-4 overflow-y-auto" style={{ maxHeight: "calc(90vh - 250px)" }}>
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} gap-3 mb-4`}
                  >
                    {message.sender === "other" && (
                      <Image
                        src={selectedChat.avatar || "/placeholder.svg"}
                        alt={selectedChat.name}
                        width={18}
                        height={18}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div
                      className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-sm px-4 py-2 rounded-lg ${
                          message.sender === "user" ? "bg-gray-100 text-gray-900" : "bg-teal-50 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                    </div>
                    {message.sender === "user" && (
                      <Image
                        src={selectedChat.avatar || "/placeholder.svg"}
                        alt={selectedChat.name}
                        width={20}
                        height={20}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Type Messages"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-600"
                  />
                  <button className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition flex-shrink-0">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">Select a chat to start messaging</div>
          )}
        </div>
      </div>
    </div>
  );
}
