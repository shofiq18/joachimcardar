"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin } from "lucide-react"

interface LocationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onNext: (data: any) => void
  onBack: () => void
}

export default function Location({ data, onNext, onBack }: LocationProps) {
  const [formData, setFormData] = useState({
    cityDistrict: data.cityDistrict || "",
    mapLocation: data.mapLocation || "",
    description: data.description || "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.cityDistrict.trim()) newErrors.cityDistrict = "City/District is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
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
      <h1 className="text-3xl font-bold mb-8">Location</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="cityDistrict" className="text-base font-medium mb-2 block">
            City / District
          </Label>
          <Input
            id="cityDistrict"
            placeholder="e.g. Downtown"
            value={formData.cityDistrict}
            onChange={(e) => setFormData({ ...formData, cityDistrict: e.target.value })}
            className="h-12 text-base"
          />
          {errors.cityDistrict && <p className="text-red-500 text-sm mt-1">{errors.cityDistrict}</p>}
        </div>

        <div>
          <Label htmlFor="mapLocation" className="text-base font-medium mb-2 block">
            City / District
          </Label>
          <button
            type="button"
            className="w-full h-12 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-2 text-gray-500 hover:border-gray-400 transition-colors"
          >
            <MapPin size={20} />
            Pin Location on Map (Optional)
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <Label htmlFor="description" className="text-base font-medium mb-2 block">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Describe your car in detail..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="min-h-32 text-base"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
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
            className="flex-1 h-12 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base rounded-lg"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}
