import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaServer, FaGraduationCap, FaMobileAlt } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiFlutter } from "react-icons/si";
import avatarImg from "../assets/rakesh_profile.jpg";

const titles = [
  "Full Stack Developer",
  "App Developer",
  "MERN Stack Specialist",
  "Flutter Mobile Engineer",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff014f]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Text, Value Proposition, Recruiter Hooks */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Recruiter Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161c2d] border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4 shadow-sm shadow-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Full-Time & Internship Roles</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient-pink">Rakesh Reddy Amireddy</span>
          </h1>

          {/* Animated Dynamic Role Switcher */}
          <div className="h-10 sm:h-12 flex items-center mt-1">
            <span className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-bold mr-2">
              I am a
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-lg sm:text-xl lg:text-2xl font-bold text-[#ff014f] border-b-2 border-[#ff014f]/40 pb-0.5"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Bio Description from Resume */}
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            Full Stack Developer and App Developer with hands-on experience designing and developing scalable web and cross-platform mobile apps using <span className="text-white font-medium">React.js</span>, <span className="text-sky-400 font-medium">Flutter</span>, <span className="text-white font-medium">Node.js</span>, <span className="text-white font-medium">Express.js</span>, and <span className="text-emerald-400 font-medium">MongoDB</span>. Strong foundation in Data Structures, Algorithms, DBMS, OOP, and problem-solving, with a passion for building secure, high-performance, and user-centric applications.
          </p>

          {/* Credential Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
              <FaGraduationCap className="text-cyan-400 text-xs" />
              <span>B.Tech CSE '27 (8.7 CGPA)</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
              <FaServer className="text-emerald-400 text-xs" />
              <span>Techbuggy Full Stack Dev</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
              <FaCode className="text-[#ff014f] text-xs" />
              <span>Smart Bridge Dev</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
              <FaMobileAlt className="text-sky-400 text-xs" />
              <span>Flutter & MERN</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
            <a
              href="/Rakesh-resume.pdf"
              download="Amireddy_Rakesh_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff014f] to-[#ff3b76] hover:from-[#e00045] hover:to-[#ff014f] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#ff014f]/30 hover:shadow-lg hover:shadow-[#ff014f]/50 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Download Resume</span>
              <IoMdDownload className="text-base" />
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151a28] hover:bg-[#1a2133] text-slate-200 font-semibold text-xs sm:text-sm border border-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs text-[#ff014f]" />
            </a>

            {/* Socials */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/AMIREDDYRAKEY"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/amireddy-rakesh-reddy-13540b279"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#0077b5] border border-white/10 transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Avatar Frame with Centered Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
            {/* Animated Rotating Gradient Aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff014f]/30 via-purple-600/20 to-sky-500/25 blur-2xl animate-pulse-slow" />

            {/* Orbit border */}
            <div className="absolute -inset-2 rounded-full border border-white/15 animate-spin-slow pointer-events-none" />

            {/* Circular Avatar Frame - Perfectly Centered Image */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-2 bg-gradient-to-b from-white/25 via-white/10 to-transparent backdrop-blur-xl border-2 border-white/20 shadow-2xl overflow-hidden group">
              <img
                src={avatarImg}
                alt="Rakesh Reddy Amireddy"
                className="w-full h-full object-cover object-center rounded-full filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Badge 1: React 19 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 -left-3 sm:left-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111520]/95 border border-white/15 shadow-xl backdrop-blur-md text-xs font-semibold text-white"
            >
              <SiReact className="text-cyan-400 text-sm" />
              <span>React 19</span>
            </motion.div>

            {/* Floating Badge 2: Flutter */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-2 -right-3 sm:right-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111520]/95 border border-white/15 shadow-xl backdrop-blur-md text-xs font-semibold text-white"
            >
              <SiFlutter className="text-sky-400 text-sm" />
              <span>Flutter</span>
            </motion.div>

            {/* Floating Badge 3: Node & Mongo */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-2 left-2 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111520]/95 border border-[#ff014f]/30 shadow-xl backdrop-blur-md text-xs font-semibold text-white"
            >
              <SiNodedotjs className="text-emerald-400 text-sm" />
              <SiMongodb className="text-green-500 text-sm" />
              <span>Node & Mongo</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
