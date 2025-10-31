"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Fuel,
  Gauge,
  Settings,
  Phone,
  Mail,
  ShieldCheck,
  User,
  ClipboardCheck,
  Wrench,
  ChevronDown,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isExteriorOpen, setIsExteriorOpen] = useState(false);
  const [isInteriorOpen, setIsInteriorOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(true);

  const images = [
    "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const thumbnails = [
    "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=200",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const specifications = [
    { label: "Manufacturing Year:", value: "2020" },
    { label: "Mileage:", value: "25K miles" },
    { label: "Body Type:", value: "Convertible" },
    { label: "Drive Type:", value: "2-Wheel Drive, rear" },
    { label: "Engine:", value: "6-Cylinder Turbo" },
    { label: "Transmission:", value: "7-Speed shiftable Automatic" },
    { label: "Fuel Type:", value: "Gasoline" },
    { label: "City MPG:", value: "20 ©" },
    { label: "Highway MPG:", value: "30 ©" },
    { label: "Exterior Color:", value: "Iridium Silver White" },
    { label: "Interior Color:", value: "Charcoal" },
    { label: "VIN:", value: "WDDUG8HB4H754384" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-4 md:py-8 px-4 md:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Luxury Sedan{" "}
                <span className="text-gray-500 font-normal text-xl">
                  (Used)
                </span>
              </h1>
            </div>

            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-black">
                <img
                  src={images[currentImage]}
                  alt="Luxury Sedan"
                  className="w-full h-full object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full h-10 w-10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6 text-gray-900" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full h-10 w-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6 text-gray-900" />
                </Button>
              </div>
              <div className="p-4 bg-white grid grid-cols-3 md:grid-cols-5 gap-2">
                {thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-video rounded overflow-hidden border-2 transition-colors ${
                      currentImage === index
                        ? "border-teal-600"
                        : "border-transparent hover:border-teal-600"
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-medium text-gray-900">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ShieldCheck className="h-12 w-12 text-teal-600 mb-3" />
                  <p className="text-xs text-gray-700 leading-tight">
                    Checked and
                    <br />
                    Certified by Zusäe
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <User className="h-12 w-12 text-teal-600 mb-3" />
                  <p className="text-xs text-gray-700 leading-tight">
                    Single Owner
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ClipboardCheck className="h-12 w-12 text-teal-600 mb-3" />
                  <p className="text-xs text-gray-700 leading-tight">
                    Well-Equipped
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Wrench className="h-12 w-12 text-teal-600 mb-3" />
                  <p className="text-xs text-gray-700 leading-tight">
                    No Damage -<br />
                    Reported
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-4">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <Badge className="bg-green-600 hover:bg-green-700 text-white mb-3">
                  Succeed!
                </Badge>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  $18,000
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  New York, NY
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Gauge className="h-4 w-4" />
                    <span>45K mi</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Fuel className="h-4 w-4" />
                    <span>Gas</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Settings className="h-4 w-4" />
                    <span>Auto</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="border p-2 rounded-md mb-3">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Seller Information:
                  </h3>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900">
                        Auto World
                      </div>
                      <div className="text-sm text-gray-500">Dealer</div>
                    </div>
                    <div className="h-8 w-8 rounded bg-teal-600 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span>+34 (1)2 345 678 (Call)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <div className="flex justify-between">
                        <span className="truncate">sales@autoworld.ik</span>
                      </div>
                      <Link href={`/seller-information/1`}>
                        <Button
                          variant="link"
                          className="text-teal-600 cursor-pointer hover:text-teal-700 p-0 h-auto mb-4"
                        >
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  <Link href={"/test-request"}>
                    <Button
                      variant="outline"
                      className="border-teal-600 cursor-pointer text-teal-600 hover:bg-teal-50"
                    >
                      Test Request
                    </Button>
                  </Link>
                  <Button className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white">
                    Booking
                  </Button>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-900">
                    Email me price drops and new listings for these search
                    results:
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                    />
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                      Subscribe
                    </Button>
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="subscribe"
                      checked={isSubscribed}
                      onCheckedChange={(checked) =>
                        setIsSubscribed(checked as boolean)
                      }
                      className="mt-0.5"
                    />
                    <label
                      htmlFor="subscribe"
                      className="text-xs text-gray-600 leading-tight cursor-pointer"
                    >
                      I agree to receive price drop alerts on this vehicle and
                      helpful shopping information.
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        

        {/* features cars */}
        <div className="mt-6 lg:mt-12">
          <h1 className="text-xl lg:text-2xl font-semibold">Featured Cars</h1>

          <div className="mt-5">
            <div className="grid grid-cols1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((car) => (
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                  <div className="relative">
                    <Image
                      src="/Fake.jpg"
                      alt="Car Image"
                      className="w-full h-72 object-cover"
                      width={500}
                      height={300}
                    />
                    {/* {car.isNew && ( */}
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-md text-sm font-medium">
                      -13%
                    </div>
                    {/* )} */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Mercedes-Benz S-Class
                    </h3>
                    <p className="text-xl font-semibold text-gray-700 mb-4">
                      $458400
                    </p>

                    <div className="flex items-center gap-2 justify-between text-[16px] text-gray-600 mb-2 space-x-4">
                      <span className="flex items-center">
                        <span className="mr-1">
                          <Image
                            src="/icon/road-icon.png"
                            alt="setting-icon"
                            height={20}
                            width={20}
                          />
                        </span>{" "}
                        5000 mi
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">
                          <Image
                            src="/icon/gas-icon.svg"
                            alt="setting-icon"
                            height={20}
                            width={20}
                          />
                        </span>{" "}
                        GAS
                      </span>
                      {/* {car.isAuto && ( */}
                      <span className="flex items-center mr-4">
                        <span className="mr-1">
                          <Image
                            src="/icon/setting.svg"
                            alt="setting-icon"
                            height={20}
                            width={20}
                          />
                        </span>{" "}
                        Auto
                      </span>
                      {/* )} */}
                    </div>
                    <div>
                      <span className="flex items-center mb-2 text-gray-600 ">
                        <MapPin size={20} className="mr-1 text-gray-600" /> New
                        Your, USA
                      </span>
                    </div>
                    <Link href={`/cars/1`}>
                      <button className="w-full bg-[#00695C] text-white py-2 rounded-md hover:bg-teal-700 transition font-medium">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
