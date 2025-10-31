"use client";

import {
  CheckCircle,
  Package,
  Truck,
  Train,
  Home,
  Car,
  Fuel,
  Settings,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Container from "../../shared/Container";

export default function TrackOrder() {
  const [completedStep, setCompletedStep] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🧩 Step configuration
  const topSteps = [
    { title: "Verified Payment", icon: Package },
    { title: "Order Packed", icon: Truck },
    { title: "On The Way", icon: Train },
    { title: "Delivered", icon: Home },
  ];

  // 🧠 Simulated API call
  useEffect(() => {
    setLoading(true);
    const fetchOrder = async () => {
      // Simulate API delay
      await new Promise((res) => setTimeout(res, 2000));

      // Dummy API Response
      const data = {
        orderId: "123",
        status: "shipped", // try: "verified" | "packed" | "shipped" | "delivered"
      };

      // Map API status → step index
      const statusMap: Record<string, number> = {
        verified: 1,
        packed: 2,
        shipped: 3,
        delivered: 4,
      };

      setCompletedStep(statusMap[data.status] || 0);
      setLoading(false);
    };

    fetchOrder();
  }, []);

  const handleComplete = () => setCompletedStep(topSteps.length);

  const steps = [
    {
      title: "Verified Payments",
      date: "Dec 15",
      time: "10:04 AM",
      address: "User Verified",
    },
    {
      title: "Order is in Packing",
      date: "Dec 15",
      time: "15:20 PM",
      address: "Warehouse A",
    },
    {
      title: "Orders are On Train",
      date: "Dec 15",
      time: "11:30 AM",
      address: "Station Port",
    },
    {
      title: "Order Customs Port",
      date: "Dec 16",
      time: "14:40 PM",
      address: "Port Location",
    },
  ];

  return (
    <Container>
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
            Track Order
          </h1>

          {loading ? (
            <p className="text-gray-500 text-center py-10">
              Loading order status...
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Left: Car Image + Details */}
              <div className="md:col-span-1">
                <Card className="overflow-hidden shadow-sm">
                  <div className="relative bg-gray-100">
                    <Image
                      src="/red-luxury-sedan.jpg"
                      alt="Luxury Sedan"
                      height={140}
                      width={400}
                      className="object-cover h-[240px] w-full"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold text-lg">Luxury Sedan</h3>
                    <p className="text-2xl font-bold text-green-600">$45,000</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Car className="h-4 w-4" />
                        <span>45k mi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="h-4 w-4" />
                        <span>Gas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Settings className="h-4 w-4" />
                        <span>Auto</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-gray-700">New York, NY</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right: Stepper + Timeline */}
              <div className="md:col-span-2 space-y-6">
                {/* Stepper */}
                <div className="w-full flex items-center justify-between relative mb-10">
                  {topSteps.map((step, i) => {
                    const Icon = step.icon;
                    const isCompleted = i < completedStep;
                    const isActive = i === completedStep;

                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center relative w-full"
                      >
                        {i < topSteps.length - 1 && (
                          <div className="absolute top-4 left-1/2 w-full h-0 border-t-2 border-dotted border-gray-300 z-0"></div>
                        )}
                        <div
                          className={`z-10 flex items-center justify-center w-10 h-10 rounded-full ${
                            isCompleted
                              ? "bg-teal-600 text-white"
                              : isActive
                              ? "border-2 border-teal-500 text-teal-600"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <Icon className="w-5 h-5" />
                          )}
                        </div>
                        <p
                          className={`mt-2 text-sm ${
                            isCompleted
                              ? "text-teal-700 font-medium"
                              : "text-gray-500"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Timeline (auto sync with completedStep) */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Order Status Detail
                  </h3>

                  <div className="space-y-0">
                    {steps.map((step, index) => {
                      const isStepDone = index < completedStep;
                      return (
                        <div key={index} className="relative pb-8">
                          {index < steps.length - 1 && (
                            <div className="absolute left-3.5 top-8 bottom-0 w-px border-l border-dashed border-gray-300"></div>
                          )}
                          <div className="flex gap-4">
                            <div className="relative flex-shrink-0">
                              <div
                                className={`w-7 h-7 rounded-full border-4 border-white shadow-sm ${
                                  isStepDone ? "bg-teal-600" : "bg-gray-300"
                                }`}
                              ></div>
                            </div>
                            <div className="flex-1 pt-1">
                              <h4 className="font-semibold text-gray-900">
                                {step.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {step.address}
                              </p>
                              <p className="text-xs text-gray-500">
                                {step.date} · {step.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handleComplete}
                    className="bg-teal-700 hover:bg-teal-800 text-white"
                  >
                    Mark Completed
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
