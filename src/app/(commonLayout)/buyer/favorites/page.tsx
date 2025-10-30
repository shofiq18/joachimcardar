"use client"

import { useState } from "react"
import { Heart, MapPin, Gauge, Fuel, Cog } from "lucide-react"

interface Car {
  id: number
  title: string
  price: number
  image: string
  mileage: string
  fuelType: string
  transmission: string
  location: string
  isFavorite: boolean
}

const mockCars: Car[] = [
  {
    id: 1,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-red.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-red.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    isFavorite: true,
  },
  {
    id: 3,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-red.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    isFavorite: true,
  },
  {
    id: 4,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-red.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    isFavorite: true,
  },
  {
    id: 5,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-red.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    isFavorite: true,
  },
  {
    id: 6,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-sedan-red.jpg",
    mileage: "45k mi",
    fuelType: "Gas",
    transmission: "Auto",
    location: "New York, NY",
    isFavorite: true,
  },
]

export default function FavoritesPage() {
  const [sortBy, setSortBy] = useState("newest")
  const [favorites, setFavorites] = useState(mockCars)

  const toggleFavorite = (id: number) => {
    setFavorites(favorites.map((car) => (car.id === id ? { ...car, isFavorite: !car.isFavorite } : car)))
  }

  return (
    <div className="max-w-7xl mx-auto min-h-screen my-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Favourite cars</h1>
        <span className="text-teal-600 font-medium">
          💚 {favorites.filter((c) => c.isFavorite).length} Favourite Car
        </span>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-gray-600 font-medium">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-teal-600"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {favorites.map((car) => (
          <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex">
            {/* Image */}
            <div className="w-40 h-32 bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={car.image || "/placeholder.svg"} alt={car.title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{car.title}</h3>
                  <button onClick={() => toggleFavorite(car.id)} className="text-teal-600 hover:text-teal-700">
                    <Heart size={24} fill={car.isFavorite ? "currentColor" : "none"} />
                  </button>
                </div>
                <p className="text-xl font-bold text-teal-600 mb-2">${car.price.toLocaleString()}</p>

                {/* Details */}
                <div className="flex gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {car.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Gauge size={14} />
                    {car.mileage}
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel size={14} />
                    {car.fuelType}
                  </div>
                  <div className="flex items-center gap-1">
                    <Cog size={14} />
                    {car.transmission}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <button className="w-10 h-10 bg-teal-600 text-white rounded-lg font-medium">1</button>
        <button className="w-10 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">2</button>
        <button className="w-10 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">3</button>
        <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
        <button className="w-10 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">8</button>
        <button className="w-10 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">›</button>
      </div>
    </div>
  )
}
