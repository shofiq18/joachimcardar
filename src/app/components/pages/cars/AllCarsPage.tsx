// "use client";

// import React, { useState } from "react";
// import Container from "../../shared/Container";
// import { Slider } from "@/components/ui/slider";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   ArrowRight,
//   Fuel,
//   Gauge,
//   Heart,
//   MapPin,
//   Settings,
//   X,
// } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const AllCarsPage = () => {
//   const [carTypes, setCarTypes] = useState<"new" | "used">("used");
//   const [priceRange, setPriceRange] = useState([10000, 50000]);

//   return (
//     <div className="py-5">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
//           {/* Sidebar */}
//           <div className="col-span-2 min-h-screen overflow-y-auto border bg-gray-50 rounded-md p-5">
//             {/* Buttons */}
//             <div className="flex justify-center items-center gap-4 border-b pb-4 mb-4">
//               <button
//                 onClick={() => setCarTypes("new")}
//                 className={`border px-5 lg:px-7 py-[7px] rounded-md font-medium cursor-pointer ${
//                   carTypes === "new"
//                     ? "bg-[#004D40] text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 New
//               </button>
//               <button
//                 onClick={() => setCarTypes("used")}
//                 className={`border px-5 lg:px-7 py-[7px] rounded-md font-medium cursor-pointer ${
//                   carTypes === "used"
//                     ? "bg-[#004D40] text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 Used
//               </button>
//             </div>

//             {/* Filters Section */}
//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-semibold">Filters</h3>
//                 <button className="text-sm text-gray-500 hover:text-red-600">
//                   Clear all
//                 </button>
//               </div>

//               {/* Active Filter Tags */}
//               <div className="flex flex-wrap gap-2 mb-4 border-b pb-5 border-gray-400">
//                 {[
//                   "$10,000 - $50,000",
//                   "Crossover",
//                   "Gold",
//                   "Gray",
//                   "Toyota",
//                 ].map((item) => (
//                   <span
//                     key={item}
//                     className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-[3px] rounded-full text-sm"
//                   >
//                     {item} <X size={12} className="cursor-pointer" />
//                   </span>
//                 ))}
//               </div>

//               {/* Location */}
//               <div className="mb-5 w-full">
//                 <Label className="text-sm font-medium">Location</Label>
//                 <Select>
//                   <SelectTrigger className="mt-1 w-full">
//                     <SelectValue placeholder="Choose location" />
//                   </SelectTrigger>
//                   <SelectContent className="w-full">
//                     <SelectItem value="dhaka">Dhaka</SelectItem>
//                     <SelectItem value="rangpur">Rangpur</SelectItem>
//                     <SelectItem value="chittagong">Chittagong</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Body Type */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Body Type
//                 </Label>
//                 {["Sedan", "SUV", "Hatchback", "Pickup"].map((type) => (
//                   <div key={type} className="flex items-center space-x-2 mb-1">
//                     <Checkbox id={type} defaultChecked={type === "Pickup"} />
//                     <Label htmlFor={type}>{type}</Label>
//                   </div>
//                 ))}
//               </div>

//               {/* Make & Model */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Make & Model
//                 </Label>
//                 <Select>
//                   <SelectTrigger className="mb-2 w-full">
//                     <SelectValue placeholder="Any make" />
//                   </SelectTrigger>
//                   <SelectContent className="w-full">
//                     <SelectItem value="toyota">Toyota</SelectItem>
//                     <SelectItem value="honda">Honda</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Select>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Any model" />
//                   </SelectTrigger>
//                   <SelectContent className="w-full">
//                     <SelectItem value="corolla">Corolla</SelectItem>
//                     <SelectItem value="civic">Civic</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Year */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-2 block">
//                   Year
//                 </Label>
//                 <div className="flex w-full items-center gap-2">
//                   <div className="flex-1 w-full">
//                     <Select>
//                       <SelectTrigger className="w-full">
//                         <SelectValue placeholder="All" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="all">All</SelectItem>
//                         <SelectItem value="2020">2020</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <span>-</span>
//                   <div className="flex-1 w-full">
//                     <Select>
//                       <SelectTrigger className="w-full">
//                         <SelectValue placeholder="2019" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="2019">2019</SelectItem>
//                         <SelectItem value="2021">2021</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//               </div>

//               {/* Price */}
//               <div className="mb-6">
//                 <Label className="text-sm font-medium mb-2 block">Price</Label>
//                 <Slider
//                   value={priceRange}
//                   onValueChange={setPriceRange}
//                   min={0}
//                   max={100000}
//                   step={1000}
//                 />
//                 <div className="flex justify-between text-sm mt-2">
//                   <span>${priceRange[0].toLocaleString()}</span>
//                   <span>${priceRange[1].toLocaleString()}</span>
//                 </div>
//               </div>

//               {/* -------- New Sections Below -------- */}

//               {/* Drive Type */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Drive Type
//                 </Label>
//                 {["AWD/4WD", "Front Wheel Drive", "Rear Wheel Drive"].map(
//                   (type) => (
//                     <div
//                       key={type}
//                       className="flex items-center space-x-2 mb-1"
//                     >
//                       <Checkbox id={type} />
//                       <Label htmlFor={type}>{type}</Label>
//                     </div>
//                   )
//                 )}
//               </div>

//               {/* Fuel Type */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Fuel Type
//                 </Label>
//                 {[
//                   "Petrol",
//                   "Electric",
//                   "Diesel",
//                   "Hybrid",
//                   "Gasoline",
//                   "Hydrogen",
//                   "Plug-in Hybrid",
//                 ].map((fuel) => (
//                   <div
//                     key={fuel}
//                     className="flex items-center gap-2 space-y- mb-1"
//                   >
//                     <Checkbox id={fuel} />
//                     <Label htmlFor={fuel}>{fuel}</Label>
//                   </div>
//                 ))}
//               </div>

//               {/* Transmission */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Transmission
//                 </Label>
//                 {[
//                   "Automatic",
//                   "Manual 5 Speed",
//                   "Manual 6 Speed",
//                   "Manual 7 Speed",
//                 ].map((trans) => (
//                   <div key={trans} className="flex items-center space-x-2 mb-1">
//                     <Checkbox id={trans} />
//                     <Label htmlFor={trans}>{trans}</Label>
//                   </div>
//                 ))}
//               </div>

//               {/* Mileage */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Mileage
//                 </Label>
//                 <Select>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Any" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="any">Any</SelectItem>
//                     <SelectItem value="low">Up to 10,000 km</SelectItem>
//                     <SelectItem value="medium">10,000 - 50,000 km</SelectItem>
//                     <SelectItem value="high">50,000+ km</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Color */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Color
//                 </Label>
//                 {["Black", "Blue", "Brown", "Gold", "Gray", "Green"].map(
//                   (color) => (
//                     <div
//                       key={color}
//                       className="flex items-center space-x-2 mb-1"
//                     >
//                       <Checkbox
//                         id={color}
//                         defaultChecked={color === "Gold" || color === "Gray"}
//                       />
//                       <Label htmlFor={color}>{color}</Label>
//                     </div>
//                   )
//                 )}
//               </div>

//               {/* Sellers */}
//               <div className="mb-5">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Sellers
//                 </Label>
//                 {["Dealers Only", "Private Sellers Only"].map((seller) => (
//                   <div
//                     key={seller}
//                     className="flex items-center space-x-2 mb-1"
//                   >
//                     <Checkbox id={seller} />
//                     <Label htmlFor={seller}>{seller}</Label>
//                   </div>
//                 ))}
//               </div>

//               {/* Brand */}
//               <div className="mb-10">
//                 <Label className="text-[16px] font-medium mb-3 block">
//                   Brand
//                 </Label>
//                 {["BMW", "Audi", "Mercedes", "Nissan", "Mazda", "Ford"].map(
//                   (brand) => (
//                     <div
//                       key={brand}
//                       className="flex items-center space-x-2 mb-1"
//                     >
//                       <Checkbox id={brand} />
//                       <Label htmlFor={brand}>{brand}</Label>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="col-span-4  ">
//             <Card className="group relative cursor-pointer hover:border-teal-500 overflow-hidden  bg-card transition-all duration-300 hover:shadow-lg">
//               <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
//                 {/* Car Image */}
//                 <div className="relative h-32 w-48 flex-shrink-0 overflow-hidden rounded-lg">
//                   <img
//                     src={"/red-luxury-sedan.jpg"}
//                     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Car Details */}
//                 <div className="relative">
//                   <div>
//                     <div className="mb-2 flex justify-between">
//                       <h3 className="text-xl font-semibold text-card-foreground">
//                         Luxury Sedan
//                       </h3>
//                     </div>

//                     <p className="mb-3 text-2xl font-bold text-teal-600">
//                       $500
//                     </p>

//                     <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
//                       <MapPin className="h-4 w-4" />
//                       <span>dhaka</span>
//                     </div>

//                     <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
//                       <div className="flex items-center gap-1.5">
//                         <Gauge className="h-4 w-4" />
//                         <span>500 km</span>
//                       </div>
//                       <div className="flex items-center gap-1.5">
//                         <Fuel className="h-4 w-4" />
//                         <span>Gas</span>
//                       </div>
//                       <div className="flex items-center gap-1.5">
//                         <Settings className="h-4 w-4" />
//                         <span>Auto</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* View Details Button */}
//                 <div className="absolute bottom-3 lg:bottom-6 right-2 lg:right-4">
//                   <Button
//                     size="icon"
//                     className="h-10 w-10 rounded-full bg-teal-600 text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
//                     // onClick={onViewDetails}
//                   >
//                     <ArrowRight className="h-5 w-5" />
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default AllCarsPage;

"use client";

import React, { useState } from "react";
import Container from "../../shared/Container";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  Settings,
  X,
  Filter,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

const AllCarsPage = () => {
  const [carTypes, setCarTypes] = useState<"new" | "used">("used");
  const [priceRange, setPriceRange] = useState([10000, 50000]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="py-5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full bg-[#004D40] hover:bg-[#003d33]"
            >
              <Filter className="mr-2 h-4 w-4" />
              {isSidebarOpen ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          {/* Sidebar */}
          <div
            className={`
            col-span-1 lg:col-span-2 
            ${isSidebarOpen ? "block" : "hidden"} lg:block
            lg:min-h-screen lg:overflow-y-auto 
            border bg-gray-50 rounded-md p-4 lg:p-5
            max-h-[80vh] overflow-y-auto
          `}
          >
            {/* Buttons */}
            <div className="flex justify-center items-center gap-3 lg:gap-4 border-b pb-4 mb-4">
              <button
                onClick={() => setCarTypes("new")}
                className={`border px-4 lg:px-7 py-[7px] rounded-md font-medium cursor-pointer text-sm lg:text-base ${
                  carTypes === "new"
                    ? "bg-[#004D40] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                }`}
              >
                New
              </button>
              <button
                onClick={() => setCarTypes("used")}
                className={`border px-4 lg:px-7 py-[7px] rounded-md font-medium cursor-pointer text-sm lg:text-base ${
                  carTypes === "used"
                    ? "bg-[#004D40] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Used
              </button>
            </div>

            {/* Filters Section */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-sm lg:text-base">Filters</h3>
                <button className="text-xs lg:text-sm text-gray-500 hover:text-red-600">
                  Clear all
                </button>
              </div>

              {/* Active Filter Tags */}
              <div className="flex flex-wrap gap-2 mb-4 border-b pb-5 border-gray-400">
                {[
                  "$10,000 - $50,000",
                  "Crossover",
                  "Gold",
                  "Gray",
                  "Toyota",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1 bg-gray-200 text-gray-700 px-2 lg:px-3 py-[3px] rounded-full text-xs lg:text-sm"
                  >
                    {item} <X size={12} className="cursor-pointer" />
                  </span>
                ))}
              </div>

              {/* Location */}
              <div className="mb-5 w-full">
                <Label className="text-xs lg:text-sm font-medium">
                  Location
                </Label>
                <Select>
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Choose location" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="dhaka">Dhaka</SelectItem>
                    <SelectItem value="rangpur">Rangpur</SelectItem>
                    <SelectItem value="chittagong">Chittagong</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Body Type */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Body Type
                </Label>
                {["Sedan", "SUV", "Hatchback", "Pickup"].map((type) => (
                  <div key={type} className="flex items-center space-x-2 mb-1">
                    <Checkbox id={type} defaultChecked={type === "Pickup"} />
                    <Label htmlFor={type} className="text-xs lg:text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>

              {/* Make & Model */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Make & Model
                </Label>
                <Select>
                  <SelectTrigger className="mb-2 w-full">
                    <SelectValue placeholder="Any make" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Any model" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="corolla">Corolla</SelectItem>
                    <SelectItem value="civic">Civic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Year */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-2 block">
                  Year
                </Label>
                <div className="flex w-full items-center gap-2">
                  <div className="flex-1 w-full">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <span>-</span>
                  <div className="flex-1 w-full">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="2019" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <Label className="text-xs lg:text-sm font-medium mb-2 block">
                  Price
                </Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={100000}
                  step={1000}
                />
                <div className="flex justify-between text-xs lg:text-sm mt-2">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* -------- New Sections Below -------- */}

              {/* Drive Type */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Drive Type
                </Label>
                {["AWD/4WD", "Front Wheel Drive", "Rear Wheel Drive"].map(
                  (type) => (
                    <div
                      key={type}
                      className="flex items-center space-x-2 mb-1"
                    >
                      <Checkbox id={type} />
                      <Label htmlFor={type} className="text-xs lg:text-sm">
                        {type}
                      </Label>
                    </div>
                  )
                )}
              </div>

              {/* Fuel Type */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Fuel Type
                </Label>
                {[
                  "Petrol",
                  "Electric",
                  "Diesel",
                  "Hybrid",
                  "Gasoline",
                  "Hydrogen",
                  "Plug-in Hybrid",
                ].map((fuel) => (
                  <div
                    key={fuel}
                    className="flex items-center gap-2 space-y- mb-1"
                  >
                    <Checkbox id={fuel} />
                    <Label htmlFor={fuel} className="text-xs lg:text-sm">
                      {fuel}
                    </Label>
                  </div>
                ))}
              </div>

              {/* Transmission */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Transmission
                </Label>
                {[
                  "Automatic",
                  "Manual 5 Speed",
                  "Manual 6 Speed",
                  "Manual 7 Speed",
                ].map((trans) => (
                  <div key={trans} className="flex items-center space-x-2 mb-1">
                    <Checkbox id={trans} />
                    <Label htmlFor={trans} className="text-xs lg:text-sm">
                      {trans}
                    </Label>
                  </div>
                ))}
              </div>

              {/* Mileage */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Mileage
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="low">Up to 10,000 km</SelectItem>
                    <SelectItem value="medium">10,000 - 50,000 km</SelectItem>
                    <SelectItem value="high">50,000+ km</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Color */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Color
                </Label>
                {["Black", "Blue", "Brown", "Gold", "Gray", "Green"].map(
                  (color) => (
                    <div
                      key={color}
                      className="flex items-center space-x-2 mb-1"
                    >
                      <Checkbox
                        id={color}
                        defaultChecked={color === "Gold" || color === "Gray"}
                      />
                      <Label htmlFor={color} className="text-xs lg:text-sm">
                        {color}
                      </Label>
                    </div>
                  )
                )}
              </div>

              {/* Sellers */}
              <div className="mb-5">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Sellers
                </Label>
                {["Dealers Only", "Private Sellers Only"].map((seller) => (
                  <div
                    key={seller}
                    className="flex items-center space-x-2 mb-1"
                  >
                    <Checkbox id={seller} />
                    <Label htmlFor={seller} className="text-xs lg:text-sm">
                      {seller}
                    </Label>
                  </div>
                ))}
              </div>

              {/* Brand */}
              <div className="mb-10">
                <Label className="text-sm lg:text-[16px] font-medium mb-3 block">
                  Brand
                </Label>
                {["BMW", "Audi", "Mercedes", "Nissan", "Mazda", "Ford"].map(
                  (brand) => (
                    <div
                      key={brand}
                      className="flex items-center space-x-2 mb-1"
                    >
                      <Checkbox id={brand} />
                      <Label htmlFor={brand} className="text-xs lg:text-sm">
                        {brand}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-1 lg:col-span-4">
            <div className="flex flex-col gap-y-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((car) => (
                <Card
                  key={car}
                  className="group relative cursor-pointer hover:border-teal-500 overflow-hidden bg-card transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
                    {/* Car Image */}
                    <div className="relative h-32 w-48 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src="/red-luxury-sedan.jpg"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        alt="Luxury Sedan"
                      />
                    </div>

                    {/* Car Details */}
                    <div className="relative">
                      <div>
                        <div className="mb-2 flex justify-between">
                          <h3 className="text-xl font-semibold text-card-foreground">
                            Luxury Sedan
                          </h3>
                        </div>

                        <p className="mb-3 text-2xl font-bold text-teal-600">
                          $500
                        </p>

                        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>Dhaka</span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Gauge className="h-4 w-4" />
                            <span>500 km</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Fuel className="h-4 w-4" />
                            <span>Gas</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Settings className="h-4 w-4" />
                            <span>Automatic</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="absolute bottom-3 lg:bottom-6 right-2 lg:right-4">
                      <Link href={`/cars/1`}>
                        <Button
                          size="icon"
                          className="h-10 w-10 rounded-full bg-teal-600 text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/*  Pagination */}
            <div className="flex justify-start mt-5 lg:mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious className="pointer-events-none opacity-50" />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink
                      isActive
                      className="bg-[#00695C] text-white cursor-pointer rounded-md"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink className="cursor-pointer">
                      2
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink className="cursor-pointer">
                      3
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink className="cursor-pointer">
                      8
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext className="cursor-pointer" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllCarsPage;
