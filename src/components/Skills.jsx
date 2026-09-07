import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLayerGroup, FaCode, FaServer, FaTools, FaGitAlt, FaPython } from "react-icons/fa";
import { SiFastapi, SiPostman, SiFlutter, SiMysql } from "react-icons/si";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsIcon from "../assets/js.png";
import tailwindLogo from "../assets/ti.png";
import reactLogo from "../assets/re.png";
import reduxLogo from "../assets/red.png";
import mdblogo from "../assets/MDB.png";
import nodelogo from "../assets/Nod.png";
import Exlogo from "../assets/Ex.png";
import seo from "../assets/seo.png";

const skillsData = [
  // Frontend & Mobile
  { name: "React.js", category: "frontend", img: reactLogo, level: "Advanced", desc: "Hooks, Router, SPA, Performance" },
  { name: "Flutter", category: "frontend", icon: SiFlutter, isIcon: true, iconColor: "text-sky-400", level: "Proficient", desc: "Cross-platform Mobile UI, Dart, State" },
  { name: "JavaScript (ES6+)", category: "frontend", img: jsIcon, level: "Advanced", desc: "Async/Await, DOM, Closures, APIs" },
  { name: "Tailwind CSS", category: "frontend", img: tailwindLogo, level: "Advanced", desc: "Custom Configs, Responsive Layouts" },
  { name: "Redux Toolkit", category: "frontend", img: reduxLogo, level: "Proficient", desc: "Global State, Slices, RTK Query" },
  { name: "HTML5", category: "frontend", img: htmlLogo, level: "Advanced", desc: "Semantic Elements, Accessibility, SEO" },
  { name: "CSS3", category: "frontend", img: cssLogo, level: "Advanced", desc: "Flexbox, Grid, Keyframe Animations" },

  // Backend & DB
  { name: "Node.js", category: "backend", img: nodelogo, level: "Proficient", desc: "Event-driven Server runtime, NPM" },
  { name: "Express.js", category: "backend", img: Exlogo, level: "Proficient", desc: "RESTful Endpoints, Middleware, Routing" },
  { name: "MongoDB", category: "backend", img: mdblogo, level: "Proficient", desc: "Mongoose ODM, Aggregations, NoSQL" },
  { name: "SQL / MySQL", category: "backend", icon: SiMysql, isIcon: true, iconColor: "text-blue-400", level: "Proficient", desc: "Relational Queries, Joins, Schema Design, RDBMS" },
  { name: "Python / ML", category: "backend", icon: FaPython, isIcon: true, iconColor: "text-yellow-400", level: "Intermediate", desc: "Scripting, ML Models, Data analysis" },
  { name: "FastAPI", category: "backend", icon: SiFastapi, isIcon: true, iconColor: "text-emerald-400", level: "Intermediate", desc: "High-speed Python APIs, Swagger Docs" },

  // Tools & Practices
  { name: "Git & GitHub", category: "tools", icon: FaGitAlt, isIcon: true, iconColor: "text-orange-500", level: "Proficient", desc: "Branching, Version Control, Pull Requests" },
  { name: "Postman", category: "tools", icon: SiPostman, isIcon: true, iconColor: "text-orange-400", level: "Proficient", desc: "API Testing, Mocking, Collections" },
  { name: "SEO & Web Perf", category: "tools", img: seo, level: "Proficient", desc: "Meta Tags, Lighthouse, Core Vitals" },
];

const categories = [
  { id: "all", label: "All Skills", icon: FaLayerGroup },
  { id: "frontend", label: "Frontend", icon: FaCode },
  { id: "backend", label: "Backend & DB", icon: FaServer },
  { id: "tools", label: "Tools & DevOps", icon: FaTools },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#ff014f] mb-2">
          <FaTools className="text-xs" />
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Skills & <span className="text-gradient-pink">Tech Stack</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#ff014f] to-rose-400 rounded-full mt-2" />
        <p className="mt-2.5 text-slate-400 max-w-2xl text-xs sm:text-sm leading-relaxed">
          Technologies and tools I work with daily to engineer scalable, high-performance web applications.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#111520]/80 backdrop-blur-xl border border-white/10 shadow-xl">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff014f] to-[#ff3b76] shadow-md shadow-[#ff014f]/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <IconComponent className={isActive ? "text-white" : "text-slate-400"} />
                  <span>{cat.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-between border border-white/10 hover:border-[#ff014f]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff014f]/10 transition-all duration-300 group cursor-default"
            >
              {/* Icon / Image container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-2.5 mb-3 group-hover:scale-110 group-hover:bg-[#ff014f]/10 transition-all duration-300">
                {skill.isIcon ? (
                  <skill.icon className={`text-3xl ${skill.iconColor}`} />
                ) : (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#ff014f] transition-colors leading-tight">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {skill.desc}
              </p>

              {/* Level badge */}
              <div className="mt-3 pt-2 border-t border-white/5 w-full flex justify-center">
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Recruiter Callout Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-r from-[#111520] via-[#161c2d] to-[#111520] flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-xl bg-[#ff014f]/15 border border-[#ff014f]/30 flex items-center justify-center text-[#ff014f] shrink-0 text-xl font-bold">
            ⚡
          </div>
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg">
              Full-Stack Architecture & Modern Practices
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
              Experienced in building end-to-end applications from MongoDB data models and RESTful APIs to fluid React interfaces with Tailwind CSS and responsive design principles.
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="shrink-0 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#ff014f] text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all shadow-md"
        >
          Discuss Tech Stack
        </a>
      </motion.div>
    </section>
  );
};

export default Skills;
