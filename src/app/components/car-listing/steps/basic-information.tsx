"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BasicInformationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onNext: (data: any) => void
}

export default function BasicInformation({ data, onNext }: BasicInformationProps) {
  const [formData, setFormData] = useState({
    carTitle: data.carTitle || "",
    category: data.category || "",
    brand: data.brand || "",
    model: data.model || "",
    yearOfManufacture: data.yearOfManufacture || "",
    condition: data.condition || "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.carTitle.trim()) newErrors.carTitle = "Car title is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.brand) newErrors.brand = "Brand is required"
    if (!formData.model) newErrors.model = "Model is required"
    if (!formData.yearOfManufacture) newErrors.yearOfManufacture = "Year is required"
    if (!formData.condition) newErrors.condition = "Condition is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onNext(formData)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h1 className="text-3xl font-bold mb-8">Basic Information</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="carTitle" className="text-base font-medium mb-2 block">
            Car Title
          </Label>
          <Input
            id="carTitle"
            placeholder="e.g. Toyota Camry 2021"
            value={formData.carTitle}
            onChange={(e) => setFormData({ ...formData, carTitle: e.target.value })}
            className="h-12 text-base"
          />
          {errors.carTitle && <p className="text-red-500 text-sm mt-1">{errors.carTitle}</p>}
        </div>

        <div className="block">
          <Label htmlFor="category" className="text-base font-medium mb-2 block">
            Category
          </Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger className="h-12 text-base py-6 w-full ">
              <SelectValue  placeholder="Select Category " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="truck">Truck</SelectItem>
              <SelectItem value="van">Van</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        <div>
          <Label htmlFor="brand" className="text-base font-medium mb-2 block">
            Brand
          </Label>
          <Select value={formData.brand} onValueChange={(value) => setFormData({ ...formData, brand: value })}>
            <SelectTrigger className="h-12 text-base py-6 w-full">
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
              <SelectItem value="ford">Ford</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes</SelectItem>
            </SelectContent>
          </Select>
          {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
        </div>

        <div>
          <Label htmlFor="model" className="text-base font-medium mb-2 block">
            Model
          </Label>
          <Select value={formData.model} onValueChange={(value) => setFormData({ ...formData, model: value })}>
            <SelectTrigger className="h-12 text-base py-6 w-full">
              <SelectValue placeholder="Select Model (after Brand)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="model1">Model 1</SelectItem>
              <SelectItem value="model2">Model 2</SelectItem>
              <SelectItem value="model3">Model 3</SelectItem>
            </SelectContent>
          </Select>
          {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="year" className="text-base font-medium mb-2 block">
              Year of Manufacture
            </Label>
            <Select
              value={formData.yearOfManufacture}
              onValueChange={(value) => setFormData({ ...formData, yearOfManufacture: value })}
            >
              <SelectTrigger className="h-12 text-base py-6 w-full">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.yearOfManufacture && <p className="text-red-500 text-sm mt-1">{errors.yearOfManufacture}</p>}
          </div>

          <div>
            <Label htmlFor="condition" className="text-base font-medium mb-2 block">
              Condition
            </Label>
            <Select
              value={formData.condition}
              onValueChange={(value) => setFormData({ ...formData, condition: value })}
            >
              <SelectTrigger className="h-12 text-base py-6 w-full">
                <SelectValue placeholder="Enter mileage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excellent">Excellent</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="fair">Fair</SelectItem>
                <SelectItem value="poor">Poor</SelectItem>
              </SelectContent>
            </Select>
            {errors.condition && <p className="text-red-500 text-sm mt-1">{errors.condition}</p>}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#00695C] hover:bg-teal-700 cursor-pointer text-white font-semibold text-base rounded-lg"
        >
          Next
        </Button>
      </form>
    </div>
  )
}
