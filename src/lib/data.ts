// FILE: src/lib/data.ts
// ==========================================
import { Car, Brand, Category, Feature } from "@/types";

export const featuredCars: Car[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1617531653520-bd466944d8f7?w=400&h=300&fit=crop",
    title: "Luxury Sedan",
    price: "$45,000",
    year: "2022",
    mileage: "35k mi",
    transmission: "Gas",
    isAuto: true,
    location: "New York, NY",
    isNew: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1617531653520-bd466944d8f7?w=400&h=300&fit=crop",
    title: "Luxury Sedan",
    price: "$45,000",
    year: "2022",
    mileage: "35k mi",
    transmission: "Gas",
    isAuto: true,
    location: "New York, NY",
    isNew: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1617531653520-bd466944d8f7?w=400&h=300&fit=crop",
    title: "Luxury Sedan",
    price: "$45,000",
    year: "2022",
    mileage: "35k mi",
    transmission: "Gas",
    isAuto: true,
    location: "New York, NY",
    isNew: true,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1617531653520-bd466944d8f7?w=400&h=300&fit=crop",
    title: "Luxury Sedan",
    price: "$45,000",
    year: "2022",
    mileage: "35k mi",
    transmission: "Gas",
    isAuto: true,
    location: "New York, NY",
    isNew: true,
  },
];

export const brands: Brand[] = [
  { name: "Chevrolet", logo: "🚗" },
  { name: "Audi", logo: "🚗" },
  { name: "Mercedes", logo: "🚗" },
  { name: "Toyota", logo: "🚗" },
  { name: "Mazda", logo: "🚗" },
  { name: "Nissan", logo: "🚗" },
  { name: "Hyundai", logo: "🚗" },
  { name: "Lexus", logo: "🚗" },
  { name: "Honda", logo: "🚗" },
  { name: "Renault", logo: "🚗" },
  { name: "Infiniti", logo: "🚗" },
];

export const categories: Category[] = [
  { name: "Sedan", icon: "🚗", active: true },
  { name: "Electric", icon: "⚡" },
  { name: "SUV", icon: "🚙" },
  { name: "Truck", icon: "🚚" },
  { name: "VAN", icon: "🚐" },
  { name: "Truck", icon: "🚛" },
];

export const features: Feature[] = [
  {
    icon: "/icon/verified-icon.svg",
    title: "Verified Sellers",
    description:
      "We ensure every seller and dealer on our platform is verified for your peace of mind.",
  },
  {
    icon: "/icon/payments.svg",
    title: "Secure Payments",
    description:
      "Our secure payment gateway protects your transactions from start to finish.",
  },
  {
    icon: "/icon/listings.svg",
    title: "Nationwide Listings",
    description:
      "Access a vast inventory of cars from every corner of the country.",
  },
  {
    icon: "/icon/app-access.svg",
    title: "Mobile App Access",
    description:
      "Browse, buy, and sell on the go with our intuitive mobile app.",
  },
];

export const faqs = [
  "Pellentesque ac bibendum tortor?",
  "How do I list my car for sale?",
  "What are the fees for selling a car?",
  "How do you ensure the safety of transactions?",
  "Can I inspect the car before buying?",
];

export const mockCars = [
  {
    id: 1,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-black-sedan-car.jpg",
    mileage: "35k mi",

    transmission: "Gas",
    location: "New York, NY",
    discount: 10,
    isNew: true,
    model: "Sedan",
    isAuto: true,
    bodyType: "Sedan",
  },
  {
    id: 2,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-red-sedan-car.jpg",
    mileage: "32k mi",

    transmission: "Gas",
    location: "New York, NY",
    discount: 10,
    model: "Sedan",
    isAuto: true,
    bodyType: "Sedan",
  },
  {
    id: 3,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-dark-sedan-car.jpg",
    mileage: "24k mi",

    transmission: "Gas",
    location: "New York, NY",
    discount: 10,
    model: "Sedan",
    isNew: true,
    isAuto: true,
    bodyType: "Sedan",
  },
  {
    id: 4,
    title: "Luxury Sedan",
    price: 45000,
    image: "/luxury-white-sedan-car.jpg",
    mileage: "24k mi",

    transmission: "Gas",
    location: "New York, NY",
    discount: 15,
    model: "Sedan",
    isNew: true,
    isAuto: true,
    bodyType: "Sedan",
  },
  {
    id: 5,
    title: "Luxury SUV",
    price: 55000,
    image: "/luxury-black-suv-car.jpg",
    mileage: "24k mi",

    transmission: "Gas",
    location: "Los Angeles, CA",
    discount: 12,
    isAuto: true,
    model: "SUV",
    isNew: true,
    bodyType: "SUV",
  },
  {
    id: 6,
    title: "Luxury Coupe",
    price: 52000,
    image: "/luxury-red-coupe-car.jpg",
    mileage: "27k mi",

    transmission: "Gas",
    location: "Miami, FL",
    discount: 8,
    isAuto: true,
    model: "Coupe",
    bodyType: "Coupe",
  },
  {
    id: 7,
    title: "Luxury Sedan",
    price: 48000,
    image: "/luxury-silver-sedan-car.jpg",
    mileage: "14k mi",

    transmission: "Gas",
    location: "Chicago, IL",
    discount: 10,
    isAuto: true,
    model: "Sedan",
    isNew: true,
    bodyType: "Sedan",
  },
  {
    id: 8,
    title: "Luxury Hatchback",
    price: 42000,
    image: "/luxury-blue-hatchback-car.jpg",
    mileage: "24k mi",

    transmission: "Gas",
    location: "Seattle, WA",
    isAuto: true,
    discount: 9,
    model: "Hatchback",
    isNew: true,
    bodyType: "Hatchback",
  },
];

export const cars = [
  {
    id: 1,
    title: "Luxury Sedan",
    price: 45000,
    location: "New York, NY",
    mileage: 45,
    fuel: "Gas",
    transmission: "Auto",
    image: "/red-luxury-sedan.jpg",
  },
  {
    id: 2,
    title: "Luxury Sedan",
    price: 45000,
    location: "New York, NY",
    mileage: 45,
    fuel: "Gas",
    transmission: "Auto",
    image: "/red-luxury-sedan.jpg",
  },
  {
    id: 3,
    title: "Luxury Sedan",
    price: 45000,
    location: "New York, NY",
    mileage: 45,
    fuel: "Gas",
    transmission: "Auto",
    image: "/red-luxury-sedan.jpg",
  },
  {
    id: 4,
    title: "Luxury Sedan",
    price: 45000,
    location: "New York, NY",
    mileage: 45,
    fuel: "Gas",
    transmission: "Auto",
    image: "/red-luxury-sedan.jpg",
  },
  {
    id: 5,
    title: "Luxury Sedan",
    price: 45000,
    location: "New York, NY",
    mileage: 45,
    fuel: "Gas",
    transmission: "Auto",
    image: "/red-luxury-sedan.jpg",
  },
];
