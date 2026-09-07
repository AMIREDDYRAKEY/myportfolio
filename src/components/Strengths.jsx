import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaPalette, FaSearch, FaUsers, FaSyncAlt, FaRocket } from "react-icons/fa";

const strengthsList = [
  {
    icon: FaBrain,
    title: "Algorithmic & Problem-Solving",
    tag: "Core Capability",
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    description: "Deconstructs complex frontend logic and architectural challenges into modular, maintainable, and high-performance algorithms.",
  },
  {
    icon: FaPalette,
    title: "Modern UI/UX & Responsive Design",
    tag: "Design Systems",
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    description: "Passionate about creating fluid, aesthetic, mobile-first interfaces with pixel-perfect attention to hierarchy, micro-interactions, and accessibility.",
  },
  {
    icon: FaSearch,
    title: "Attention to Detail & Code Quality",
    tag: "Engineering Discipline",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    description: "Enforces clean component boundaries, readable code structures, thorough testing of edge cases, and cross-browser consistency.",
  },
  {
    icon: FaSyncAlt,
    title: "Fast Learner & Adaptability",
    tag: "Growth Mindset",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    description: "Rapidly adopts new frontend libraries, backend frameworks (like FastAPI), and modern dev tools to meet changing product requirements.",
  },
  {
    icon: FaUsers,
    title: "Collaborative Communication",
    tag: "Team Player",
    color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    description: "Proactive communicator who thrives in remote and distributed team environments, clearly articulating technical solutions and documentation.",
  },
  {
    icon: FaRocket,
    title: "Performance & SEO Optimization",
    tag: "Production Readiness",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    description: "Focuses on fast page loads, lightweight bundles, smooth 60fps animations, and proper search engine optimization tags.",
  },
];

const Strengths = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strengthsList.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff014f]/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-xl" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#ff014f] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Strengths;
