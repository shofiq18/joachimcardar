// ==========================================
// FILE: src/types/index.ts
// ==========================================
export interface Car {
  id: number;
  image: string;
  title: string;
  price: string;
  year: string;
  mileage: string;
  transmission: string;
  isAuto: boolean;
  location: string;
  isNew?: boolean;
}
export interface ActiveOrderCar {
  id: number;
  image: string;
  title: string;
  price: number;
  fuelType:string;
  mileage: string;
  transmission: string;
  location: string;
  isNew?: boolean;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Category {
  name: string;
  icon: string;
  active?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  videoUrl?: string;
  image?: string;
}
