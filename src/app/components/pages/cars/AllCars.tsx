"use client";
import CarCard from "@/app/components/ui/CarCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { mockCars } from "@/lib/data";
import { ChevronDown, Logs, Search, Sliders } from "lucide-react";
import { useMemo, useState } from "react";

const AllCars = () => {
  const [carTypes, setCarTypes] = useState<string>("new");

  // filterin code
  const [filters, setFilters] = useState({
    keyword: "",
    model: "",
    bodyType: "",
    location: "",
    sortBy: "newest",
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredCars = useMemo(() => {
    let result = mockCars;

    if (filters.keyword) {
      result = result.filter((car) =>
        car.title.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    if (filters.model) {
      result = result.filter((car) => car.model === filters.model);
    }

    if (filters.bodyType) {
      result = result.filter((car) => car.bodyType === filters.bodyType);
    }

    if (filters.location) {
      result = result.filter((car) =>
        car.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Sort
    if (filters.sortBy === "newest") {
      result = [...result].reverse();
    } else if (filters.sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters]);

  const handleFilterChange = (newFilter: any) => {
    setFilters((prev) => ({ ...prev, ...newFilter }));
  };


  

  return (
    <div>
      {/* top filtering */}
      <div className="py-5 mt-4">
        {" "}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <a href="/" className="text-gray-600 hover:underline">
            Home
          </a>
          <span>/</span>
          <a href="#" className="text-teal-600 hover:underline">
            View All Car
          </a>
        </div>
        <div>
          <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">
            Used cars
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => setCarTypes("new")}
              className={`px-5 lg:px-7 py-[7px] rounded-lg font-medium cursor-pointer ${
                carTypes === "new"
                  ? "bg-[#004D40] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-100"
              }`}
            >
              New
            </button>

            <button
              onClick={() => setCarTypes("used")}
              className={`px-5 lg:px-7 py-[7px] rounded-lg font-medium cursor-pointer ${
                carTypes === "used"
                  ? "bg-[#004D40] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Used
            </button>
          </div>
        </div>
        {/* filtering box */}
        <>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 my-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for keywords"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {/* Model */}
              <div className="relative w-full">
                <select
                  value={filters.model}
                  onChange={(e) =>
                    handleFilterChange({ model: e.target.value })
                  }
                  className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer"
                >
                  <option value="">Model</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Hatchback">Hatchback</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {/* Body Type */}
              <div className="relative">
                <select
                  value={filters.bodyType}
                  onChange={(e) =>
                    handleFilterChange({ bodyType: e.target.value })
                  }
                  className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer"
                >
                  <option value="">Body type</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Hatchback">Hatchback</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {/* Location */}

              <div className="relative">
                <select
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange({ location: e.target.value })
                  }
                  className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer"
                >
                  <option value="">Location</option>
                  <option value="New York, NY">New York, NY</option>
                  <option value="Los Angeles, CA">Los Angeles, CA</option>
                  <option value="Miami, FL">Miami, FL</option>
                  <option value="Chicago, IL">Chicago, IL</option>
                  <option value="Seattle, WA">Seattle, WA</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 mb-2"
              >
                <Sliders className="w-4 h-4" />
                Filters
              </button>
              {/* Search Button */}
              <div className="lg:col-span-1">
                <button className="w-full bg-[#00695C] text-white py-2 rounded-md font-medium cursor-pointer flex items-center justify-center gap-2">
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm flex items-center gap-2 text-gray-600">
              <Logs size={20} />
              Sort by:
            </span>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
              className="appearance-none px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </>
      </div>

      {/* grid cards */}
      <div className="py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car: any) => (
            <CarCard key={car.id} car={car} />
          ))}
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No cars found matching your filters.
              </p>
            </div>
          )}
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
                <PaginationLink className="cursor-pointer">2</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink className="cursor-pointer">3</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink className="cursor-pointer">8</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext className="cursor-pointer" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
