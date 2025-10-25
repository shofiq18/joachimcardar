"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface VehicleDetailsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onNext: (data: any) => void
  onBack: () => void
}

export default function VehicleDetails({ data, onNext, onBack }: VehicleDetailsProps) {
  const [formData, setFormData] = useState({
    mileage: data.mileage || "",
    fuelType: data.fuelType || "",
    transmission: data.transmission || "",
    engineCapacity: data.engineCapacity || "",
    color: data.color || "",
    registrationYear: data.registrationYear || "",
    vinNumber: data.vinNumber || "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.mileage.trim()) newErrors.mileage = "Mileage is required"
    if (!formData.fuelType) newErrors.fuelType = "Fuel type is required"
    if (!formData.transmission) newErrors.transmission = "Transmission is required"
    if (!formData.engineCapacity) newErrors.engineCapacity = "Engine capacity is required"
    if (!formData.color) newErrors.color = "Color is required"
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
      <h1 className="text-3xl font-bold mb-8">Vehicle Details</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="mileage" className="text-base font-medium mb-2 block">
            Mileage (km driven)
          </Label>
          <Input
            id="mileage"
            placeholder="e.g. 50000"
            type="number"
            value={formData.mileage}
            onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
            className="h-12 text-base"
          />
          {errors.mileage && <p className="text-red-500 text-sm mt-1">{errors.mileage}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fuelType" className="text-base font-medium mb-2 block">
              Fuel Type
            </Label>
            <Select value={formData.fuelType} onValueChange={(value) => setFormData({ ...formData, fuelType: value })}>
              <SelectTrigger className="h-12 text-base py-6 w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="petrol">Petrol</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
              </SelectContent>
            </Select>
            {errors.fuelType && <p className="text-red-500 text-sm mt-1">{errors.fuelType}</p>}
          </div>

          <div>
            <Label htmlFor="transmission" className="text-base font-medium mb-2 block">
              Transmission
            </Label>
            <Select
              value={formData.transmission}
              onValueChange={(value) => setFormData({ ...formData, transmission: value })}
            >
              <SelectTrigger className="h-12 text-base py-6 w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">Manual</SelectItem>
                <SelectItem value="automatic">Automatic</SelectItem>
                <SelectItem value="cvt">CVT</SelectItem>
              </SelectContent>
            </Select>
            {errors.transmission && <p className="text-red-500 text-sm mt-1">{errors.transmission}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="engineCapacity" className="text-base font-medium mb-2 block">
            Engine Capacity (cc)
          </Label>
          <Select
            value={formData.engineCapacity}
            onValueChange={(value) => setFormData({ ...formData, engineCapacity: value })}
          >
            <SelectTrigger className="h-12 text-base py-6 w-full">
              <SelectValue placeholder="e.g. 1500" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1000">1000cc</SelectItem>
              <SelectItem value="1200">1200cc</SelectItem>
              <SelectItem value="1500">1500cc</SelectItem>
              <SelectItem value="1800">1800cc</SelectItem>
              <SelectItem value="2000">2000cc</SelectItem>
            </SelectContent>
          </Select>
          {errors.engineCapacity && <p className="text-red-500 text-sm mt-1">{errors.engineCapacity}</p>}
        </div>

        <div>
          <Label htmlFor="color" className="text-base font-medium mb-2 block">
            Color
          </Label>
          <Select value={formData.color} onValueChange={(value) => setFormData({ ...formData, color: value })}>
            <SelectTrigger className="h-12 text-base py-6 w-full">
              <SelectValue placeholder="e.g. Pearl White" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="white">Pearl White</SelectItem>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="silver">Silver</SelectItem>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="gray">Gray</SelectItem>
            </SelectContent>
          </Select>
          {errors.color && <p className="text-red-500 text-sm mt-1">{errors.color}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="registrationYear" className="text-base font-medium mb-2 block">
              Registration Year (Optional)
            </Label>
            <Select
              value={formData.registrationYear}
              onValueChange={(value) => setFormData({ ...formData, registrationYear: value })}
            >
              <SelectTrigger className="h-12 text-base py-6 w-full">
                <SelectValue placeholder="e.g. 2022" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="vinNumber" className="text-base font-medium mb-2 block">
              VIN / Chassis Number (Optional)
            </Label>
            <Input
              id="vinNumber"
              placeholder="Enter vehicle's VIN or Chassis Num..."
              value={formData.vinNumber}
              onChange={(e) => setFormData({ ...formData, vinNumber: e.target.value })}
              className="h-12 text-base py-6 w-full"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            className="flex-1 h-12 text-base font-semibold rounded-lg bg-transparent"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="flex-1 h-12 bg-[#00695C] hover:bg-teal-700 text-white font-semibold text-base rounded-lg"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}
