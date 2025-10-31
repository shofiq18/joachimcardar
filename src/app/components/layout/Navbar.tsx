/* eslint-disable react/jsx-no-comment-textnodes */
 
// /* eslint-disable @next/next/no-html-link-for-pages */
// // ==========================================
// // FILE: src/components/layout/Navbar.tsx
// // ==========================================
// 'use client';


// import { Bell, ChevronDown, Heart, MessageCircle, ShoppingBag, User } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = () => {
//   const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
//   return (
//     <header className=" top-0 left-0 right-0  sticky  z-50   bg-[#00695C] bg-opacity-50 backdrop-blur-md">
//       <nav className="max-w-7xl mx-auto  py-4 flex items-center justify-between">
//         <div className="flex flex-col items-start">
//           <Image src="/Group.png" className='w-15 h-12 filter brightness-150 ' alt="Logo" width={60} height={50} />
//         </div>

//         { }
//         <div className="hidden md:flex items-center space-x-8">
//           { }
//           <a href="/" className="text-white hover:text-teal-400 transition">Home</a>
//           <a href="/contact" className="text-white hover:text-teal-400 transition">Contact</a>
//           <a href="/blog" className="text-white hover:text-teal-400 transition">Blog</a>
//           <a href="/faq" className="text-white hover:text-teal-400 transition">FAQ</a>
//            {/* About Us Dropdown */}
//           <div 
//             className="relative group"
//             onMouseEnter={() => setIsAboutUsOpen(true)}
//             onMouseLeave={() => setIsAboutUsOpen(false)}
//           >
//             <button className="text-white hover:text-teal-400 transition flex items-center py-2">
//               About Us <ChevronDown size={16} className="ml-1" />
//             </button>
            
//             {/* Dropdown Menu */}
//             {isAboutUsOpen && (
//               <div className="absolute top-full left-0 pt-2 w-56 z-50">
//                 <div className="bg-white rounded-md shadow-lg py-2">
//                   <a
//                     href="/about-us"
//                     className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
//                   >
//                     About Us
//                   </a>
//                   <a
//                     href="/privacy-policy"
//                     className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
//                   >
//                     Privacy Policy
//                   </a>
//                   <a
//                     href="/term-conditions"
//                     className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
//                   >
//                     Terms & Conditions
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
        

//         <div className="flex items-center space-x-3">
//           {/* Icon Buttons */}
//           <Link href="/notifications">
//             <button className="w-10 h-10 rounded-full bg-white text-teal-600 flex items-center justify-center hover:bg-teal-50 transition">
//               <Bell size={20} />
//             </button>
//           </Link>

//           <Link href="/favorites">
//             <button className="w-10 h-10 rounded-full bg-white text-teal-600 flex items-center justify-center hover:bg-teal-50 transition">
//               <Heart size={20} />
//             </button>
//           </Link>

//           <Link href="/chats">
//             <button className="w-10 h-10 rounded-full bg-white text-teal-600 flex items-center justify-center hover:bg-teal-50 transition">
//               <MessageCircle size={20} />
//             </button>
//           </Link>

//           <Link href="/cart">
//             <button className="w-10 h-10 rounded-full bg-white text-teal-600 flex items-center justify-center hover:bg-teal-50 transition">
//               <ShoppingBag size={20} />
//             </button>
//           </Link>

//           <Link href="/profile">
//             <button className="w-10 h-10 rounded-full bg-white text-teal-600 flex items-center justify-center hover:bg-teal-50 transition">
//               <User size={20} />
//             </button>
//           </Link>

//           {/* Auth Buttons */}
//           <div className="hidden sm:flex items-center space-x-3 ml-4 pl-4">
//             <Link href="/sign-in">
//               <button className="text-white hover:text-teal-400 cursor-pointer transition">Sign In</button>
//             </Link>
//             <Link href="/add-listing">
//               <button className="bg-white text-teal-600 px-6 py-2 cursor-pointer rounded-md hover:bg-teal-200 hover:text-black transition font-medium">
//                 Add Listing
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;







// "use client"

// import { ChevronDown, Bell, Heart, MessageCircle, ShoppingBag, User } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import { usePathname } from "next/navigation"

// const Navbar = () => {
//   const [isAboutUsOpen, setIsAboutUsOpen] = useState(false)
//   const pathname = usePathname()

//   const isActive = (href: string) => {
//     return pathname === href || pathname.startsWith(href + "/")
//   }

//   return (
//     <header className="top-0 left-0 right-0 sticky z-50 bg-[#00695C] bg-opacity-50 backdrop-blur-md">
//       <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between px-4">
//         <div className="flex flex-col items-start">
//           <Image src="/Group.png" className="w-15 h-12 filter brightness-150" alt="Logo" width={60} height={50} />
//         </div>

//         <div className="hidden md:flex items-center space-x-8">
          
//           <Link
//             href="/"
//             className={`transition ${
//               isActive("/") && pathname === "/" ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
//             }`}
//           >
//             Home
//           </Link>
//           <a
//             href="/contact"
//             className={`transition ${
//               isActive("/contact") ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
//             }`}
//           >
//             Contact
//           </a>
//           <a
//             href="/blog"
//             className={`transition ${
//               isActive("/blog") ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
//             }`}
//           >
//             Blog
//           </a>
//           <a
//             href="/faq"
//             className={`transition ${
//               isActive("/faq") ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
//             }`}
//           >
//             FAQ
//           </a>

//           {/* About Us Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsAboutUsOpen(true)}
//             onMouseLeave={() => setIsAboutUsOpen(false)}
//           >
//             <button
//               className={`flex items-center py-2 transition ${
//                 isActive("/about-us") || isActive("/privacy-policy") || isActive("/term-conditions")
//                   ? "text-teal-400 font-semibold"
//                   : "text-white hover:text-teal-400"
//               }`}
//             >
//               About Us <ChevronDown size={16} className="ml-1" />
//             </button>

//             {/* Dropdown Menu */}
//             {isAboutUsOpen && (
//               <div className="absolute top-full left-0 pt-2 w-56 z-50">
//                 <div className="bg-white rounded-md shadow-lg py-2">
//                   <a
//                     href="/about-us"
//                     className={`block px-4 py-2 transition ${
//                       isActive("/about-us")
//                         ? "bg-teal-100 text-teal-600 font-semibold"
//                         : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
//                     }`}
//                   >
//                     About Us
//                   </a>
//                   <a
//                     href="/privacy-policy"
//                     className={`block px-4 py-2 transition ${
//                       isActive("/privacy-policy")
//                         ? "bg-teal-100 text-teal-600 font-semibold"
//                         : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
//                     }`}
//                   >
//                     Privacy Policy
//                   </a>
//                   <a
//                     href="/term-conditions"
//                     className={`block px-4 py-2 transition ${
//                       isActive("/term-conditions")
//                         ? "bg-teal-100 text-teal-600 font-semibold"
//                         : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
//                     }`}
//                   >
//                     Terms & Conditions
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center space-x-3">
//           {/* Icon Buttons */}
//           <Link href="/buyer/notification">
//             <button
//               className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
//                 isActive("/buyer/notification") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
//               }`}
//             >
//               <Bell size={20} />
//             </button>
//           </Link>

//           <Link href="/buyer/favorites">
//             <button
//               className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
//                 isActive("/buyer/favorites") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
//               }`}
//             >
//               <Heart size={20} />
//             </button>
//           </Link>

//           <Link href="/buyer/chat">
//             <button
//               className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
//                 isActive("/buyer/chat") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
//               }`}
//             >
//               <MessageCircle size={20} />
//             </button>
//           </Link>

//           <Link href="/buyer/orders">
//             <button
//               className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
//                 isActive("/buyer/orders") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
//               }`}
//             >
//               <ShoppingBag size={20} />
//             </button>
//           </Link>

//           <Link href="/profile">
//             <button
//               className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
//                 isActive("/profile") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
//               }`}
//             >
//               <User size={20} />
//             </button>
//           </Link>

//           {/* Auth Buttons */}
//           <div className="hidden sm:flex items-center space-x-3 ml-4 pl-4 border-l border-white border-opacity-30">
//             <Link href="/sign-in">
//               <button
//                 className={`cursor-pointer transition ${
//                   isActive("/sign-in") ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
//                 }`}
//               >
//                 Sign In
//               </button>
//             </Link>
//             <Link href="/add-listing">
//               <button
//                 className={`px-6 py-2 cursor-pointer rounded-md transition font-medium ${
//                   isActive("/add-listing")
//                     ? "bg-teal-400 text-white"
//                     : "bg-white text-teal-600 hover:bg-teal-200 hover:text-black"
//                 }`}
//               >
//                 Add Listing
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar




/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-html-link-for-pages */
// ==========================================
// FILE: src/components/layout/Navbar.tsx
// ==========================================
"use client";

import { ChevronDown, Bell, Heart, MessageCircle, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NotificationModal from "../buyer/notificationModal";

// Import the NotificationModal component
// Adjust the import path as needed

const Navbar = () => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // State for modal
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="top-0 left-0 right-0 sticky z-50 bg-[#00695C] bg-opacity-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between px-4">
        <div className="flex flex-col items-start">
          <Image
            src="/Group.png"
            className="w-15 h-12 filter brightness-150"
            alt="Logo"
            width={60}
            height={50}
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`transition ${
              isActive("/") && pathname === "/" ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
            }`}
          >
            Home
          </Link>
          <a
            href="/contact"
            className={`transition ${
              isActive("/contact") ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
            }`}
          >
            Contact
          </a>
          <a
            href="/faq"
            className={`transition ${
              isActive("/faq") ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
            }`}
          >
            FAQ
          </a>

          {/* About Us Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsAboutUsOpen(true)}
            onMouseLeave={() => setIsAboutUsOpen(false)}
          >
            <button
              className={`flex items-center py-2 transition ${
                isActive("/about-us") || isActive("/privacy-policy") || isActive("/term-conditions")
                  ? "text-teal-400 font-semibold"
                  : "text-white hover:text-teal-400"
              }`}
            >
              About Us <ChevronDown size={16} className="ml-1" />
            </button>

            {/* Dropdown Menu */}
            {isAboutUsOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-white rounded-md shadow-lg py-2">
                  <a
                    href="/about-us"
                    className={`block px-4 py-2 transition ${
                      isActive("/about-us")
                        ? "bg-teal-100 text-teal-600 font-semibold"
                        : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    }`}
                  >
                    About Us
                  </a>
                  <a
                    href="/privacy-policy"
                    className={`block px-4 py-2 transition ${
                      isActive("/privacy-policy")
                        ? "bg-teal-100 text-teal-600 font-semibold"
                        : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    }`}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/term-conditions"
                    className={`block px-4 py-2 transition ${
                      isActive("/term-conditions")
                        ? "bg-teal-100 text-teal-600 font-semibold"
                        : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    }`}
                  >
                    Terms & Conditions
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Icon Buttons */}
          <button
            onClick={() => setIsNotificationOpen(true)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
              isNotificationOpen ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
            }`}
          >
            <Bell size={20} />
          </button>

          <Link href="/buyer/favorites">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                isActive("/buyer/favorites") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
              }`}
            >
              <Heart size={20} />
            </button>
          </Link>

          <Link href="/buyer/chat">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                isActive("/buyer/chat") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
              }`}
            >
              <MessageCircle size={20} />
            </button>
          </Link>

          {/* <Link href="/buyer/orders">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                isActive("/buyer/orders") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
              }`}
            >
              <ShoppingBag size={20} />
            </button>
          </Link> */}

          <Link href="/buyer/account">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                isActive("/buyer/account") ? "bg-teal-600 text-white" : "bg-white text-teal-600 hover:bg-teal-50"
              }`}
            >
              <User size={20} />
            </button>
          </Link>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-3 ml-4 pl-4 ">
            <Link href="/sign-in">
              <button
                className={`cursor-pointer transition ${
                  isActive("/sign-in") ? "text-teal-400 font-semibold" : "text-white hover:text-teal-400"
                }`}
              >
                Sign In
              </button>
            </Link>
            {/* <Link href="/add-listing">
              <button
                className={`px-6 py-2 cursor-pointer rounded-md transition font-medium ${
                  isActive("/add-listing")
                    ? "bg-teal-400 text-white"
                    : "bg-white text-teal-600 hover:bg-teal-200 hover:text-black"
                }`}
              >
                Add Listing
              </button>
            </Link> */}
          </div>
        </div>
      </nav>

      {/* Render Notification Modal */}
      {isNotificationOpen && <NotificationModal />}
    </header>
  );
};

export default Navbar;