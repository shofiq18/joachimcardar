"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PriceNegotiationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onNext: (data: any) => void
  onBack: () => void
}

export default function PriceNegotiation({ data, onNext, onBack }: PriceNegotiationProps) {
  const [formData, setFormData] = useState({
    askingPrice: data.askingPrice || "",
    price: data.price || "",
    negotiable: data.negotiable || false,
    priceType: data.priceType || "fixed",
    priceVinNumber: data.priceVinNumber || "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.askingPrice.trim()) newErrors.askingPrice = "Asking price is required"
    if (!formData.price.trim()) newErrors.price = "Price is required"
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
      <h1 className="text-3xl font-bold mb-8">Price & Negotiation</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="askingPrice" className="text-base font-medium mb-2 block">
            Asking Price($)
          </Label>
          <Input
            id="askingPrice"
            placeholder="e.g. 25000"
            type="number"
            value={formData.askingPrice}
            onChange={(e) => setFormData({ ...formData, askingPrice: e.target.value })}
            className="h-12 text-base"
          />
          {errors.askingPrice && <p className="text-red-500 text-sm mt-1">{errors.askingPrice}</p>}
        </div>

        <div>
          <Label htmlFor="price" className="text-base font-medium mb-2 block">
            Price ($)
          </Label>
          <Input
            id="price"
            placeholder="Enter asking price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="h-12 text-base"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        <div className="flex items-center justify-between py-4 border-t border-b">
          <Label htmlFor="negotiable" className="text-base font-medium">
            Negotiable
          </Label>
          <Switch
            id="negotiable"
            checked={formData.negotiable}
            onCheckedChange={(checked) => setFormData({ ...formData, negotiable: checked })}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-base font-medium">Price Type</Label>
          <RadioGroup
            value={formData.priceType}
            onValueChange={(value) => setFormData({ ...formData, priceType: value as "fixed" | "financing" })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fixed" id="fixed" />
              <Label htmlFor="fixed" className="font-normal cursor-pointer">
                Fixed
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="financing" id="financing" />
              <Label htmlFor="financing" className="font-normal cursor-pointer">
                Financing Available
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="priceVinNumber" className="text-base font-medium mb-2 block">
            VIN / Chassis Number (Optional)
          </Label>
          <Select
            value={formData.priceVinNumber}
            onValueChange={(value) => setFormData({ ...formData, priceVinNumber: value })}
          >
            <SelectTrigger className="h-12 text-base py-6 w-full">
              <SelectValue placeholder="Enter vehicle's VIN or Chassis Number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vin1">VIN 1</SelectItem>
              <SelectItem value="vin2">VIN 2</SelectItem>
            </SelectContent>
          </Select>
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
