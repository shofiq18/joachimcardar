"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, X, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface Category {
  id: string
  name: string
  icon: string
  metric: string
  metricValue: string
  status: "Active" | "Inactive"
  iconColor: string
}

interface Brand {
  id: string
  name: string
  activeListings: number
  status: "Active" | "Inactive"
}

const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Sedan",
    icon: "/category.svg",
    metric: "Total Sent",
    metricValue: "1,234",
    status: "Active",
    iconColor: "text-blue-500",
  },
  {
    id: "2",
    name: "SUV",
    icon: "/convertile.svg",
    metric: "This Month",
    metricValue: "856",
    status: "Active",
    iconColor: "text-green-500",
  },
  {
    id: "3",
    name: "Truck",
    icon: "/category.svg",
    metric: "Avg. Open Rate",
    metricValue: "42%",
    status: "Active",
    iconColor: "text-yellow-500",
  },
  {
    id: "4",
    name: "Electric Vehicle",
    icon: "/electril.svg",
    metric: "Avg. Open Rate",
    metricValue: "38%",
    status: "Active",
    iconColor: "text-purple-500",
  },
  {
    id: "5",
    name: "Sports",
    icon: "/category.svg",
    metric: "180 listings",
    metricValue: "",
    status: "Active",
    iconColor: "text-red-500",
  },
  {
    id: "6",
    name: "Luxury",
    icon: "/category.svg",
    metric: "145 listings",
    metricValue: "",
    status: "Active",
    iconColor: "text-indigo-500",
  },
  {
    id: "7",
    name: "Convertible",
    icon: "/convertile.svg",
    metric: "98 listings",
    metricValue: "",
    status: "Active",
    iconColor: "text-pink-500",
  },
  {
    id: "8",
    name: "Hybrid",
    icon: "/hybrid.svg",
    metric: "167 listings",
    metricValue: "",
    status: "Active",
    iconColor: "text-cyan-500",
  },
]

const BRANDS: Brand[] = [
  { id: "1", name: "Toyota", activeListings: 342, status: "Active" },
  { id: "2", name: "Honda", activeListings: 298, status: "Active" },
  { id: "3", name: "Ford", activeListings: 267, status: "Active" },
  { id: "4", name: "BMW", activeListings: 234, status: "Active" },
  { id: "5", name: "Mercedes-Benz", activeListings: 156, status: "Active" },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES)
  const [brands, setBrands] = useState<Brand[]>(BRANDS)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showBrandModal, setShowBrandModal] = useState(false)
  const [categoryName, setCategoryName] = useState("")
  const [brandName, setBrandName] = useState("")

  const handleAddCategory = () => {
    if (categoryName.trim()) {
      const newCategory: Category = {
        id: Date.now().toString(),
        name: categoryName,
        icon: "/category.svg",
        metric: "Total Sent",
        metricValue: "0",
        status: "Active",
        iconColor: "text-gray-500",
      }
      setCategories([...categories, newCategory])
      setCategoryName("")
      setShowCategoryModal(false)
    }
  }

  const handleAddBrand = () => {
    if (brandName.trim()) {
      const newBrand: Brand = {
        id: Date.now().toString(),
        name: brandName,
        activeListings: 0,
        status: "Active",
      }
      setBrands([...brands, newBrand])
      setBrandName("")
      setShowBrandModal(false)
    }
  }

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((cat) => cat.id !== id))
  }

  const handleDeleteBrand = (id: string) => {
    setBrands(brands.filter((brand) => brand.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#2D2D2D]">Category & Content Management</h1>
        <p className="text-[#636F85] text-base mt-4">Manage vehicle categories, brands, and content</p>
      </div>

      {/* Vehicle Categories Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#2D2D2D]">Vehicle Categories</h2>
          <Button onClick={() => setShowCategoryModal(true)} className="bg-[#00695C] hover:bg-teal-800 text-white">
            <Plus className="w-5 h-5 mr-2" />
            Add Category
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <Image width={64} height={64} src={category.icon} alt={category.name} className={`p-3 rounded-lg text-4xl`} />
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className=" text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{category.metric}</p>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                Active
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Brands Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#2D2D2D]">Vehicle Brands</h2>
          <Button onClick={() => setShowBrandModal(true)} className="bg-[#00695C] hover:bg-teal-800 text-white">
            <Plus className="w-5 h-5 mr-2" />
            Add Brand
          </Button>
        </div>

        {/* Brands Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Brand Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Active Listings</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <tr key={brand.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{brand.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{brand.activeListings}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-xs font-medium rounded">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button className="px-3 rounded-sm py-1 border border-gray-300 text-gray-600 flex items-center gap-1">
                        <Edit2 className="w-4 h-4" />
                        <span className="text-xs">Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteBrand(brand.id)}
                        className=" px-3 rounded-sm py-1 border border-red-300 text-red-400 flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="text-sm">Delete</span>
                      </button>
                    </div>
                    </td>
                    </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add New Category</h3>
              <button onClick={() => setShowCategoryModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-6">Create a new vehicle category for your marketplace</p>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">Car Title</label>
              <Input
                type="text"
                placeholder="E.g., Minivan"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full"
              />
            </div>
            <Button onClick={handleAddCategory} className="w-full bg-[#00695C] hover:bg-teal-800 text-white">
              Create Category
            </Button>
          </div>
        </div>
      )}

      {/* Add Brand Modal */}
      {showBrandModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add New Brand</h3>
              <button onClick={() => setShowBrandModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-6">Add a new vehicle brand to your marketplace</p>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">Brand Name</label>
              <Input
                type="text"
                placeholder="E.g., Volkswagen"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full"
              />
            </div>
            <Button onClick={handleAddBrand} className="w-full bg-[#00695C] hover:bg-teal-800 text-white">
              Create Brand
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
