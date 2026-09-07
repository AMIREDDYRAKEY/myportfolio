import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaFolderOpen, FaStar } from "react-icons/fa";

import eventImg from "../assets/event.png";
import DewiImg from "../assets/dew.png";
import Weath from "../assets/wea.png";
import Redux from "../assets/redu.png";
import Ecommerce from "../assets/Ecommerce.png";
import CSE from "../assets/CSE.png";
import Fraud from "../assets/Fraud.png";
import placementImg from "../assets/placement.jpg";
import schoolImg from "../assets/school.png";
import pvmImg from "../assets/pvm.png";
import hotelImg from "../assets/hotel.png";
import nutritionImg from "../assets/nutrition.png";

const projectsData = [
  {
    title: "Learnzilla School App",
    category: "mobile",
    featured: true,
    badge: "School ERP",
    badgeColor: "bg-blue-500/15 border-blue-500/30 text-blue-400",
    description: "Institutional dashboard for student records, fee collection, attendance, quizzes, and class schedules.",
    image: schoolImg,
    techStack: ["Flutter", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://github.com/AMIREDDYRAKEY/school-app.git",
    githubLink: "https://github.com/AMIREDDYRAKEY/school-app.git",
  },
  {
    title: "Majestic Luxury Hotel",
    category: "frontend",
    featured: true,
    badge: "Luxury Hospitality",
    badgeColor: "bg-amber-500/15 border-amber-500/30 text-amber-400",
    description: "5-star luxury hotel reservation web experience with suite explorer, date booking, and amenities.",
    image: hotelImg,
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://hotel-new-7cfw.vercel.app/",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "Police Visitor Management",
    category: "mern",
    featured: true,
    badge: "Security Portal",
    badgeColor: "bg-indigo-500/15 border-indigo-500/30 text-indigo-400",
    description: "Enterprise command portal for visitor verification, dual-role guard authorization, and digital passes.",
    image: pvmImg,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://pvm-olive.vercel.app/login",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "Placement Assist Portal",
    category: "mobile",
    featured: true,
    badge: "Placement Hub",
    badgeColor: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",
    description: "Campus recruitment portal with student pipelines, company criteria filters, and interview scheduler.",
    image: placementImg,
    techStack: ["Flutter", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://github.com/AMIREDDYRAKEY/palcement_app.git",
    githubLink: "https://github.com/AMIREDDYRAKEY/palcement_app.git",
  },
  {
    title: "NutriGuide Assistant",
    category: "frontend",
    featured: true,
    badge: "HealthTech",
    badgeColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    description: "Personalized nutrition app for smart meal tracking, dietary plans, and macro-nutrient analytics.",
    image: nutritionImg,
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
    liveLink: "https://nutrition-assistant-livid.vercel.app",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "E-Commerce Platform",
    category: "mern",
    featured: true,
    badge: "Full-Stack MERN",
    badgeColor: "bg-purple-500/15 border-purple-500/30 text-purple-400",
    description: "Full-featured shopping web app with dynamic product catalogs, cart management, and checkout.",
    image: Ecommerce,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://e-commerce-ten-psi-78.vercel.app/",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "Bank Fraud Detection",
    category: "ml",
    featured: false,
    badge: "ML & FastAPI",
    badgeColor: "bg-rose-500/15 border-rose-500/30 text-rose-400",
    description: "Financial security ML system identifying fraudulent transaction anomalies with real-time alerts.",
    image: Fraud,
    techStack: ["Python", "FastAPI", "React.js", "ML Models"],
    liveLink: "https://bank-fraud-detection-ese2.vercel.app/",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "College Events Portal",
    category: "mern",
    featured: false,
    badge: "Campus Platform",
    badgeColor: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",
    description: "Centralized campus events platform for organizing registrations, schedules, and live updates.",
    image: eventImg,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://college-events-jade.vercel.app",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "CSE Rockers Community",
    category: "mern",
    featured: false,
    badge: "Community Hub",
    badgeColor: "bg-blue-500/15 border-blue-500/30 text-blue-400",
    description: "Student community platform showcasing departmental updates, hackathons, and activities.",
    image: CSE,
    techStack: ["React.js", "Express.js", "MongoDB", "Node.js"],
    liveLink: "https://cse-rockers.vercel.app/",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "Real-Time Weather App",
    category: "frontend",
    featured: false,
    badge: "API App",
    badgeColor: "bg-amber-500/15 border-amber-500/30 text-amber-400",
    description: "Live weather tracker querying global weather metrics via OpenWeatherMap API.",
    image: Weath,
    techStack: ["JavaScript", "OpenWeather API", "CSS3"],
    liveLink: "https://weather-api-gules-tau.vercel.app",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "Redux State Architecture",
    category: "frontend",
    featured: false,
    badge: "State Demo",
    badgeColor: "bg-rose-500/15 border-rose-500/30 text-rose-400",
    description: "Predictable state architecture utilizing Redux Toolkit slices, async thunk, and Fetch API.",
    image: Redux,
    techStack: ["React.js", "Redux Toolkit", "Fetch API"],
    liveLink: "https://redux-sepia-omega.vercel.app",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
  {
    title: "Dewi Landing Page",
    category: "frontend",
    featured: false,
    badge: "UI/UX Demo",
    badgeColor: "bg-teal-500/15 border-teal-500/30 text-teal-400",
    description: "Clean modern agency landing page testing responsive Tailwind CSS layouts.",
    image: DewiImg,
    techStack: ["HTML5", "CSS3", "Tailwind CSS"],
    liveLink: "https://dewi-five.vercel.app",
    githubLink: "https://github.com/AMIREDDYRAKEY",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "mern", label: "Full Stack (MERN)" },
  { id: "mobile", label: "Flutter & Backend" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "ml", label: "AI & ML" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#ff014f] mb-2.5">
          <FaFolderOpen className="text-xs" />
          <span>Featured Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured <span className="text-gradient-pink">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#ff014f] to-rose-400 rounded-full mt-2.5" />
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-[#111520]/80 backdrop-blur-xl border border-white/10 shadow-lg">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCategory"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff014f] to-[#ff3b76] shadow-md shadow-[#ff014f]/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid - Compact Height Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card rounded-xl overflow-hidden border border-white/10 hover:border-[#ff014f]/40 transition-all duration-300 shadow-md flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Compact Image Container */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111520] via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-[#ff014f] text-white shadow-sm">
                        <FaStar className="text-[8px]" /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Compact Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-white group-hover:text-[#ff014f] transition-colors leading-snug truncate">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Compact Tech Stack */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 text-slate-300 font-mono border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Card Footer */}
              <div className="p-4 pt-0 flex items-center justify-between gap-2.5 border-t border-white/5 mt-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-gradient-to-r from-[#ff014f] to-[#ff3b76] hover:opacity-95 text-white text-xs font-semibold shadow-sm shadow-[#ff014f]/20 transition-all cursor-pointer"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors cursor-pointer"
                  title="Source Code"
                >
                  <FaGithub size={13} />
                  <span>Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/AMIREDDYRAKEY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#161c2d] hover:bg-[#1f273e] text-white font-semibold text-xs sm:text-sm border border-white/10 hover:border-white/20 transition-all shadow-md group"
        >
          <FaGithub className="text-[#ff014f] text-base group-hover:scale-110 transition-transform" />
          <span>Explore All Repositories on GitHub</span>
          <span className="text-slate-400 group-hover:text-white transition-colors">→</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
