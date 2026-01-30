import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import SEO from "../SEO";
const Contact = () => {

  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app/projects"
/>

  return (
    <div id="contact" className="mt-[90px] px-6 sm:px-10 md:px-20 text-white">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <h1 className="text-[#858d98] font-bold text-3xl sm:text-4xl">
          Contact Me
        </h1>
        <div className="w-[150px] h-[3px] bg-[#ff014f]" />
      </div>

      {/* Contact Info */}
      <div className="mt-10 bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] shadow-lg flex flex-col gap-6">
        {/* Email */}
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-[#ff014f] text-xl" />
          <p className="text-gray-300">rakeyr213@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-[#ff014f] text-xl" />
          <p className="text-gray-300">+91 6305541105</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[#ff014f] text-xl" />
          <p className="text-gray-300">
             India,Andhra Pradesh, Kadapa(Dist), Duvur(M), ChinnaSinganapalli
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
