"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { UserIcon } from "lucide-react";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vl8aqnk", //  EmailJS Service ID
        "template_vev1yt4", //Template ID
        formData,
        "WcJTiybLjPwfKn76B" //  Public Key
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-5xl relative mx-auto mt-20  mb-10">
      <h2 className="text-xl font-semibold mb-4 pb-1 border-b-2 border-[#00695C] w-fit">Drop us a line</h2>

      

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-sm pl-10 bg-gray-100 p-3 mb-4"
        />
        <span className="absolute left-3 top-1/5 transform -translate-y-1/2 text-teal-800"><UserIcon size={18} /></span>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-sm pl-10 bg-gray-100 mb-4"
        />
        <span className="absolute left-3 top-35 transform -translate-y-1/2 text-teal-800"><MdEmail size={18} /></span>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-100 h-16 md:h-32 rounded-sm mb-4"
        ></textarea>
        <div className="flex items-center justify-start">
          <button
            type="submit"
            className="px-2 md:px-4 bg-[#00695C] rounded-sm text-white py-2 md:py-2 hover:bg-[#004D40] transition-colors duration-300"
          >
            SEND MESSAGE
          </button>
        </div>
        {successMessage && (
        <p className="text-center text-green-500 font-semibold mb-4">
          {successMessage}
        </p>
      )}
      </form>
    </div>
  );
};

export default ContactForm;