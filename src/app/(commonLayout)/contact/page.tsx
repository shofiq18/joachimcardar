"use client";
import Link from "next/link";
import React from "react";

import { FaFacebook, FaInstagram, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Map from "../../components/contact/Map";
import ContactForm from "../../components/contact/ContactForm";
import { BsTwitter } from "react-icons/bs";
import ContactHero from "@/app/components/reusabeCard/allHeroSection";

const ContactUs = () => {
  return (
    <div className="">
      
      <ContactHero
      title="Contact Us"
      subtitle="Reach out to us for any inquiries or support."
      currentPage="Contact"
    />

      {/* Contact Info Section */}
      <div>
        <div>{/* left side content */}</div>
        <div className=" py-10 px-3 md:px-0">
          <div className="bg-white  max-w-7xl mx-auto p-8   flex justify-center gap-24 flex-col md:flex-row">
            <div className="md:ml-24">
              <h2 className="text-xl font-semibold mb-4 pb-1 border-b-2 border-[#00695C] w-fit">
                Get in Touch?
              </h2>
              <div className="text-gray-700 p-8 border  rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <MdLocationOn className="text-[#00695C] mr-2" />
                    <span>Address: 123 Auto Lane, Caviler, USA</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhoneSquareAlt className="text-[#00695C] mr-2" />
                    <span>Phone: (406) 555-0120</span>
                  </li>
                  <li className="flex items-center">
                    <MdEmail className="text-[#00695C] mr-2" />
                    <span>Email: example@gmail.com</span>
                  </li>
                  <div className="mt-4 flex justify-start gap-4 items-center">
                    <h3 className="text-base font-semibold ">Follow Us:</h3>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-[#00695C] hover:underline">
                        <FaFacebook className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-[#00695C] hover:underline">
                        <BsTwitter className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-[#00695C] hover:underline">
                        <FaInstagram className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div>
              {/* Map section */}
              <Map />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
