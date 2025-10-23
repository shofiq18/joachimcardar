
// FILE: src/lib/data.ts
// ==========================================
import { Car, Brand, Category, Feature } from '@/types';

export const featuredCars: Car[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617531653520-bd466944d8f7?w=400&h=300&fit=crop',
    title: 'Luxury Sedan',
    price: '$45,000',
    year: '2022',
    mileage: '35k mi',
    transmission: 'Gas',
    isAuto: true,
    location: 'New York, NY',
    isNew: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617531653520-bd466944d8f7?w=400&h=300&fit=crop',
    title: 'Luxury Sedan',
    price: '$45,000',
    year: '2022',
    mileage: '35k mi',
    transmission: 'Gas',
    isAuto: true,
    location: 'New York, NY',
    isNew: true
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1617531653520-bd466944d8f7?w=400&h=300&fit=crop',
    title: 'Luxury Sedan',
    price: '$45,000',
    year: '2022',
    mileage: '35k mi',
    transmission: 'Gas',
    isAuto: true,
    location: 'New York, NY',
    isNew: true
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617531653520-bd466944d8f7?w=400&h=300&fit=crop',
    title: 'Luxury Sedan',
    price: '$45,000',
    year: '2022',
    mileage: '35k mi',
    transmission: 'Gas',
    isAuto: true,
    location: 'New York, NY',
    isNew: true
  }
];

export const brands: Brand[] = [
  { name: 'Chevrolet', logo: '🚗' },
  { name: 'Audi', logo: '🚗' },
  { name: 'Mercedes', logo: '🚗' },
  { name: 'Toyota', logo: '🚗' },
  { name: 'Mazda', logo: '🚗' },
  { name: 'Nissan', logo: '🚗' },
  { name: 'Hyundai', logo: '🚗' },
  { name: 'Lexus', logo: '🚗' },
  { name: 'Honda', logo: '🚗' },
  { name: 'Renault', logo: '🚗' },
  { name: 'Infiniti', logo: '🚗' }
];

export const categories: Category[] = [
  { name: 'Sedan', icon: '🚗', active: true },
  { name: 'Electric', icon: '⚡' },
  { name: 'SUV', icon: '🚙' },
  { name: 'Truck', icon: '🚚' },
  { name: 'VAN', icon: '🚐' },
  { name: 'Truck', icon: '🚛' }
];

export const features: Feature[] = [
  {
    icon: '👤',
    title: 'Verified Sellers',
    description: 'We ensure every seller and dealer on our platform is verified for your peace of mind.'
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'Our secure payment gateway protects your transactions from start to finish.'
  },
  {
    icon: '🌍',
    title: 'Nationwide Listings',
    description: 'Access a vast inventory of cars from every corner of the country.'
  },
  {
    icon: '📱',
    title: 'Mobile App Access',
    description: 'Browse, buy, and sell on the go with our intuitive mobile app.'
  }
];

export const faqs = [
  'Pellentesque ac bibendum tortor?',
  'How do I list my car for sale?',
  'What are the fees for selling a car?',
  'How do you ensure the safety of transactions?',
  'Can I inspect the car before buying?'
];
