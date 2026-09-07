import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaHeart } from "react-icons/fa";
import img from "../assets/rakesh_profile.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0b0e17] border-t border-white/10 text-slate-400 pt-8 pb-8 overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff014f]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src={img}
              alt="Rakesh Reddy Amireddy"
              className="w-11 h-11 rounded-full object-cover object-center ring-2 ring-[#ff014f]/50 shadow-md"
            />
            <div>
              <h3 className="text-white text-base font-bold">Rakesh Reddy Amireddy</h3>
              <p className="text-xs text-slate-400">
                Full Stack & Mobile App Developer
              </p>
            </div>
          </div>


          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AMIREDDYRAKEY"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/amireddy-rakesh-reddy-13540b279"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#0077b5] border border-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/amireddy__rakey_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#e1306c] border border-white/10 transition-colors"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#ff014f]/15 hover:bg-[#ff014f] text-[#ff014f] hover:text-white border border-[#ff014f]/30 transition-all cursor-pointer ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom separator and copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Amireddy Rakesh Reddy. Crafted with React, Tailwind CSS & Framer Motion.</p>
          <p className="flex items-center gap-1">
            Built for High-Impact Recruiter Discovery
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
