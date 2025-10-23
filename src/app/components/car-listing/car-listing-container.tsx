"use client"

import { useState } from "react"
import BasicInformation from "./steps/basic-information"
import VehicleDetails from "./steps/vehicle-details"
import PriceNegotiation from "./steps/price-negotiation"
import Location from "./steps/location"
import UploadPhotos from "./steps/upload-photos"
import SuccessPage from "./steps/success-page"


type CarListingStep = "basic" | "vehicle" | "price" | "location" | "photos" | "success"

interface CarListingData {
  // Basic Information
  carTitle: string
  category: string
  brand: string
  model: string
  yearOfManufacture: string
  condition: string

  // Vehicle Details
  mileage: string
  fuelType: string
  transmission: string
  engineCapacity: string
  color: string
  registrationYear: string
  vinNumber: string

  // Price & Negotiation
  askingPrice: string
  price: string
  negotiable: boolean
  priceType: "fixed" | "financing"
  priceVinNumber: string

  // Location
  cityDistrict: string
  mapLocation: string
  description: string

  // Upload Photos & Contact
  photos: File[]
  sellerName: string
  phoneNumber: string
  email: string
  sellerType: "individual" | "dealer"
}

export default function CarListingContainer() {
  const [currentStep, setCurrentStep] = useState<CarListingStep>("basic")
  const [formData, setFormData] = useState<CarListingData>({
    carTitle: "",
    category: "",
    brand: "",
    model: "",
    yearOfManufacture: "",
    condition: "",
    mileage: "",
    fuelType: "",
    transmission: "",
    engineCapacity: "",
    color: "",
    registrationYear: "",
    vinNumber: "",
    askingPrice: "",
    price: "",
    negotiable: false,
    priceType: "fixed",
    priceVinNumber: "",
    cityDistrict: "",
    mapLocation: "",
    description: "",
    photos: [],
    sellerName: "",
    phoneNumber: "",
    email: "",
    sellerType: "individual",
  })

  const handleNext = (stepData: Partial<CarListingData>) => {
    setFormData({ ...formData, ...stepData })
    const steps: CarListingStep[] = ["basic", "vehicle", "price", "location", "photos", "success"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const handleBack = () => {
    const steps: CarListingStep[] = ["basic", "vehicle", "price", "location", "photos", "success"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const handleComplete = () => {
    console.log("Car listing completed:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {currentStep === "basic" && <BasicInformation data={formData} onNext={handleNext} />}
        {currentStep === "vehicle" && <VehicleDetails data={formData} onNext={handleNext} onBack={handleBack} />}
        {currentStep === "price" && <PriceNegotiation data={formData} onNext={handleNext} onBack={handleBack} />}
        {currentStep === "location" && <Location data={formData} onNext={handleNext} onBack={handleBack} />}
        {currentStep === "photos" && <UploadPhotos data={formData} onNext={handleNext} onBack={handleBack} />}
        {currentStep === "success" && <SuccessPage onComplete={handleComplete} />}
      </div>
    </div>
  )
}
