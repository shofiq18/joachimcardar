import React from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturedCars from "../components/home/FeaturedCards";
import Footer from "../components/layout/Footer";
import PopularBrands from "../components/home/PopularBrands";
import BrowseCategories from "../components/home/BrowseCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/Fag";
import CTASection from "../components/home/CtaSection";

// Import other sections as you create them
// import PopularBrands from '@/components/home/PopularBrands';
// import BrowseCategories from '@/components/home/BrowseCategories';
// import WhyChooseUs from '@/components/home/WhyChooseUs';
// import Testimonials from '@/components/home/Testimonials';
// import FAQ from '@/components/home/FAQ';
// import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedCars />
      <PopularBrands />
      <BrowseCategories />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
}
