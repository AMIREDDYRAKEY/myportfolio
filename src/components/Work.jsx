import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Techbuggy Pvt. Ltd.",
    period: "Jul 2025 – Aug 2026",
    type: "Professional Experience",
    mode: "Remote",
    description:
      "Engineered scalable full-stack web applications using the MERN stack with responsive, high-performance interfaces.",
    highlights: [
      "Developed scalable web apps using MongoDB, Express.js, React.js, and Node.js with modern component architecture.",
      "Designed secure RESTful APIs with JWT authentication, role-based access control (RBAC), bcrypt hashing, and Express middleware.",
      "Built reusable React components using Redux Toolkit, React Router, Axios, and Tailwind CSS following MVC patterns.",
      "Integrated MongoDB Atlas, Multer, and Cloudinary for database & asset storage; deployed to Vercel and Render.",
    ],
    techStack: ["MERN Stack", "JWT & RBAC", "Redux Toolkit", "MongoDB Atlas", "Cloudinary", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "Smart Bridge",
    period: "May 2026 – Jul 2026",
    type: "Internship / Full Stack",
    mode: "Remote",
    description:
      "Collaborated on building end-to-end full-stack web applications with responsive architecture and secure API operations.",
    highlights: [
      "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB with scalable architecture.",
      "Designed and integrated RESTful APIs with CRUD operations, authentication, request validation, and error handling.",
      "Implemented optimized MongoDB/Mongoose schemas and efficient database operations.",
      "Managed version control using Git/GitHub, debugging, testing, and team sprint deliverables.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git / GitHub"],
  },
];

const Work = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#ff014f]/30 space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline icon */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[#111520] border-2 border-[#ff014f] flex items-center justify-center text-[#ff014f] shadow-md shadow-[#ff014f]/30">
              <FaBriefcase className="text-xs" />
            </div>

            {/* Content card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#ff014f]/40 transition-all duration-300 shadow-xl">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-white/10 pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-0.5">
                  <span className="flex items-center gap-1.5 font-medium">
                    <FaCalendarAlt className="text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <FaMapMarkerAlt className="text-slate-400" />
                    {exp.mode} • {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                {exp.description}
              </p>

              {/* Impact Highlights */}
              <div className="space-y-1.5 mb-4">
                {exp.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <FaCheckCircle className="text-emerald-400 text-xs mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 border border-white/10 text-slate-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
