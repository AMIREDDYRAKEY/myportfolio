import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaFileAlt, FaBriefcase } from "react-icons/fa";
import img from "../assets/rakesh_profile.jpg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#0f1422]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60"
              : "bg-[#111520]/75 backdrop-blur-md border border-white/10 shadow-lg"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <img
                src={img}
                alt="Amireddy Rakesh"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#ff014f]/80 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0f1422] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm tracking-tight group-hover:text-[#ff014f] transition-colors">
                Rakesh Reddy
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                FullStack Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 bg-[#161c2d]/70 px-3 py-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff014f] to-[#ff3b76] shadow-sm shadow-[#ff014f]/50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Recruiter Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/Rakesh-resume.pdf"
              download="Amireddy_Rakesh_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <FaFileAlt className="text-[#ff014f] text-xs" />
              <span>Resume</span>
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#ff014f] to-[#ff416c] hover:opacity-95 text-white shadow-md shadow-[#ff014f]/30 hover:shadow-lg hover:shadow-[#ff014f]/50 transition-all cursor-pointer"
            >
              <FaBriefcase className="text-xs" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white bg-white/5 rounded-full border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden bg-[#111520]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/80 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(sectionId)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-semibold transition-all ${
                      isActive
                        ? "bg-[#ff014f]/15 text-[#ff014f] border border-[#ff014f]/30"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#ff014f]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/Rakesh-resume.pdf"
                download="Amireddy_Rakesh_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10"
              >
                <FaFileAlt className="text-[#ff014f]" />
                Download Resume (PDF)
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#ff014f] to-[#ff416c] text-white shadow-lg shadow-[#ff014f]/30"
              >
                <FaBriefcase />
                Get In Touch / Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
