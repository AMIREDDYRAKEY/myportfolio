import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import SEO from "../SEO";
const Footer = () => {
  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app/projects"
/>

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a] text-gray-400 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-white text-xl font-semibold">Rakey Rakesh</h2>
          <p className="text-sm mt-1">Front-End Developer | React Enthusiast</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/AMIREDDYRAKEY/MYPortfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff014f] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amireddy-rakesh-reddy-13540b279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff014f] transition"
          >
            <FaLinkedin />
          </a>
           
          <a
            href="https://www.instagram.com/amireddy__rakey_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff014f] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-[#2a2a2a] pt-4">
        © {new Date().getFullYear()} Rakey Rakesh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
