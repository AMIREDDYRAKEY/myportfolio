import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educations = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    status: "Currently Pursuing (3rd Year)",
    institution: "Annamacharya Institute of Technology And Sciences (AITS)",
    period: "2024 – 2027",
    score: "8.7 / 10 CGPA",
    scoreType: "CGPA",
    color: "from-cyan-500/20 to-blue-500/10",
    badgeColor: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10",
    details: "Focused on Data Structures & Algorithms, Full-Stack Web Development, Database Management Systems, and Machine Learning.",
  },
  {
    degree: "Diploma in Electronics & Communication Engineering (ECE)",
    status: "Completed with Distinction",
    institution: "Priyadarshini Institute Of Technology And Sciences (PITS)",
    period: "2021 – 2024",
    score: "90%",
    scoreType: "Percentage",
    color: "from-emerald-500/20 to-teal-500/10",
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
    details: "Developed fundamental hardware & software principles, microcontrollers, digital circuits, and core programming concepts.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    status: "Completed with Top Honors",
    institution: "Sri Shiridi Sai High School",
    period: "2020 – 2021",
    score: "10 / 10 CGPA",
    scoreType: "Perfect Score",
    color: "from-amber-500/20 to-yellow-500/10",
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
    details: "Achieved perfect grade point average across all mathematics, science, and academic subjects.",
  },
];

const Myeducation = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-8">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative group"
          >
            {/* Dot indicator */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[#111520] border-2 border-slate-600 group-hover:border-[#ff014f] flex items-center justify-center text-slate-300 group-hover:text-[#ff014f] transition-colors shadow-md">
              <FaGraduationCap className="text-xs" />
            </div>

            {/* Educational card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${edu.badgeColor}`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="flex items-center gap-1.5 text-sm text-slate-300 font-medium mt-1">
                    <FaUniversity className="text-slate-400 text-xs" />
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <FaCalendarAlt className="text-slate-400 text-xs" />
                    {edu.period}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#ff014f]/10 border border-[#ff014f]/30 text-xs font-bold text-[#ff014f]">
                    <FaAward className="text-xs" />
                    <span>{edu.score}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Myeducation;
