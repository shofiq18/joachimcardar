// "use client";

// import React from "react";
// import { categories } from "@/lib/data";
// import Image from "next/image";

// const BrowseCategories = () => {
//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-teal-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-[40px] font-bold text-[#2D2D2D] flex justify-center mb-12">
//           Browse by Categories
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           <div >
//             <Image
//               src="/icon/sedan-category.svg"
//               alt="Car Image"
//               className="w-24 h-14 "
//               width={100}
//               height={100}
//             />
//             <h3 className="font-medium">Sedan</h3>
//           </div>
//           <div >
//             <Image
//               src="/icon/electric.svg"
//               alt="Car Image"
//               className="w-24 h-14 "
//               width={100}
//               height={100}
//             />
//             <h3 className="font-medium">Electric</h3>
//           </div>
//           <div >
//             <Image
//               src="/icon/suv.svg"
//               alt="Car Image"
//               className="w-24 h-14 "
//               width={100}
//               height={100}
//             />
//             <h3 className="font-medium">SUV</h3>
//           </div>
//           <div >
//             <Image
//               src="/icon/truck.svg"
//               alt="Car Image"
//               className="w-24 h-14 "
//               width={100}
//               height={100}
//             />
//             <h3 className="font-medium">Truck</h3>
//           </div>
//           <div >
//             <Image
//               src="/icon/van.svg"
//               alt="Car Image"
//               className="w-24 h-14 "
//               width={100}
//               height={100}
//             />
//             <h3 className="font-medium">VAN</h3>
//           </div>
//           <div >
//             <Image
//               src="/icon/mini-truck.svg"
//               alt="Car Image"
//               className="w-24 h-14 "
//               width={100}
//               height={100}
//             />
//             <h3 className="font-medium">Truck</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BrowseCategories;





"use client";

import React, { useState } from "react";
import Image from "next/image";

const categories = [
  { id: 1, name: "Sedan", icon: "/icon/sedan-category.svg", active: true },
  { id: 2, name: "Electric", icon: "/icon/electric.svg", active: false },
  { id: 3, name: "SUV", icon: "/icon/suv.svg", active: false },
  { id: 4, name: "Truck", icon: "/icon/truck.svg", active: false },
  { id: 5, name: "VAN", icon: "/icon/van.svg", active: false },
  { id: 6, name: "Truck", icon: "/icon/mini-truck.svg", active: false },
];

const BrowseCategories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[40px] font-bold text-[#2D2D2D]  mb-12">
          Browse by Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-teal-600 text-white"
                  : "bg-white text-gray-700"
              } rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer`}
            >
              <Image
                src={category.icon}
                alt={`${category.name} Icon`}
                className={`w-24 h-14 mx-auto mb-3 ${
                  activeCategory === category.id ? "brightness-0 invert" : ""
                }`}
                width={100}
                height={100}
              />
              <h3 className="font-medium">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;