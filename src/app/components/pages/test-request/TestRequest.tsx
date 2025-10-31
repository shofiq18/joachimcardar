"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Fuel,
  Car,
  Settings,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Container from "../../shared/Container";

// --- ADD THESE IMPORTS ---
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
// -------------------------

export default function TestRequest() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();

  // --- ADD STATE FOR DIALOG ---
  const [open, setOpen] = useState(false);
  const router = useRouter();
  // ----------------------------

  return (
    <>
      <div className="bg-gray-50 py-8 ">
        <Container>
          <div className=" ">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
              {/* Left Column - Form */}
              <div className="space-y-6 order-2 lg:order-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl lg:text-2xl">
                      Schedule a Test Drive
                    </CardTitle>
                    <CardDescription>
                      Please provide your contact information and preferred test
                      drive schedule.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Full Name</Label>
                      <Input id="full-name" placeholder="Enter your full name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Contact Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "MM/dd/yyyy") : "mm/dd/yyyy"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <Select value={time} onValueChange={setTime}>
                        <SelectTrigger className="w-full ">
                          <SelectValue placeholder="--:--" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 13 }, (_, i) => i + 9).map(
                            (hour) => (
                              <SelectItem key={hour} value={`${hour}:00`}>
                                {hour > 12 ? hour - 12 : hour}:00{" "}
                                {hour >= 12 ? "PM" : "AM"}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Car Details */}
              <div className="border rounded-md p-4 order-1 lg:order-2">
                <div>
                  <Image
                    src={"/red-luxury-sedan.jpg"}
                    alt="Luxury Sedan"
                    width={500}
                    height={500}
                    className="rounded-md w-full h-[400px] object-cover"
                  />
                </div>

                <div className="mt-5 flex flex-col space-y-2">
                  <div>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                      Luxary Sedan
                    </h1>
                  </div>
                  <p className="text-[#00695C] text-xl font-semibold">$45,000</p>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-gray-700">New York, NY</span>
                  </div>
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
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <h1 className="text-xl lg:text-3xl font-semibold">
                Test Drive Information
              </h1>
              <p className="text-gray-600">
                Test drives are conducted at our dealership located at 123 Main
                Street, Anytown, USA. Please arrive 15 minutes prior to your
                scheduled time. A valid driver's license is required.
              </p>
            </div>
            <div className="mt-4 flex justify-end  items-end text-right">
              {/* --- ON CLICK SHOW DIALOG --- */}
              <Button
                onClick={() => setOpen(true)}
                className="py-5 px-4 text-right cursor-pointer bg-[#00695C] text-white hover:bg-[#00695C]/90"
              >
                Test Drive Request
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* --- SUCCESS DIALOG (EXACT DESIGN MATCH) --- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md mx-auto text-center p-8">
          <DialogHeader className="space-y-4">
            <div className="mx-auto w-20 h-20 relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-green-100 opacity-75"></div>
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-green-50">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              Successful
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Your successfully processed.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button
              onClick={() => router.push("/")}
              className="w-full bg-[#00695C] hover:bg-[#00695C]/90 text-white py-3 rounded-md"
            >
              Go to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}