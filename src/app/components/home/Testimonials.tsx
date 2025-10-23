"use client";

import React from "react";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    title: "Smooth and Easy Car Buying!",
    feedback:
      "Buying a muscle car was a reality. The video tours were a game-changer, giving me a real feel for the car before I saw it in person. The process was smooth and hassle-free, and the car was exactly as described!",
    name: "Md Shakil",
    position: "CEO, AutoTrend Inc.",
    videoSrc: "/video1.mp4",
  },
  {
    title: "Exceptional Service!",
    feedback:
      "The platform made finding my dream car so easy. The detailed listings and transparent process gave me confidence in my purchase. Highly recommend to anyone looking for a seamless car-buying experience!",
    name: "Sarah Johnson",
    position: "Marketing Director, DriveNow",
    videoSrc: "/video2.mp4",
  },
  {
    title: "A Trustworthy Platform!",
    feedback:
      "I was skeptical at first, but the platform exceeded my expectations. The customer support was fantastic, and the car I bought was in perfect condition. I’ll definitely be back for my next purchase!",
    name: "James Carter",
    position: "Freelance Designer",
    videoSrc: "/video3.mp4",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-12">
          <h2 className="text-[40px] font-bold text-[#2D2D2D]">
            What Our Customers Say
          </h2>
          <p className="text-[#636F85] text-lg max-w-md mt-4 sm:mt-0">
            Real stories from satisfied users: see how our platform changes lives.
          </p>
        </div>
        <Carousel
          className="w-full max-w-7xl mx-auto"
          opts={{
            align: "start",
            slidesToScroll: 1, // Show one item at a time
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="-ml-1">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-full">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
                      <video
                        className="w-full h-[300px] object-cover rounded-lg"
                        controls
                        muted
                        loop
                        playsInline
                      >
                        <source src={testimonial.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="flex-1">
                      <div className="">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-4">
                          {testimonial.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {testimonial.feedback}
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                          <div>
                            <div className="font-bold text-gray-900">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-white shadow-md" />
          <CarouselNext className="right-0 bg-white shadow-md" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;