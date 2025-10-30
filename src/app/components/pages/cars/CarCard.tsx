"use client";

import { useState } from "react";
import { Heart, MapPin, Fuel, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CarCardProps {
  car: {
    id: number;
    title: string;
    price: number;
    location: string;
    mileage: number;
    fuel: string;
    transmission: string;
    image: string;
  };
}

export default function CarCard({ car }: CarCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        {/* Image */}
        <div className="relative w-full sm:w-48 h-40 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
          <img
            src={car.image || "/placeholder.svg"}
            alt={car.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {car.title}
            </h3>
            <p className="text-2xl font-bold text-teal-600 mb-3">
              ${car.price.toLocaleString()}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <MapPin className="w-4 h-4" />
              <span>{car.location}</span>
            </div>

            {/* Details */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span className="text-foreground font-medium">
                  {car.mileage}k
                </span>
                <span>mi</span>
              </div>
              <div className="flex items-center gap-1">
                <Fuel className="w-4 h-4" />
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center gap-1">
                <Settings2 className="w-4 h-4" />
                <span>{car.transmission}</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-4 sm:mt-0 flex justify-end">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-12 h-12 p-0 flex items-center justify-center">
              <span className="text-lg">→</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
