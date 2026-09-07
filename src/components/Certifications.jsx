import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaSearchPlus, FaTimes, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import C1 from "../assets/C1.jpg";
import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";

const certificates = [
  {
    title: "1st Prize: Paper Presentation",
    program: "CSE TechXplore Program",
    issuer: "AITS Kadapa (Autonomous) • AICTE & NAAC 'A' Accredited",
    category: "Competition & Honor",
    badge: "1st Prize Winner 🏆",
    badgeColor: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    image: C3,
    description: "Awarded 1st prize for exemplary research and technical paper presentation during the CSE TechXplore technical symposium.",
  },
  {
    title: "JAVA Full Stack with React JS & AI",
    program: "National Level Short Term Training Program (NSTTP)",
    issuer: "AICTE & Brainovision Solutions in association with AITS",
    category: "Full Stack & AI Training",
    badge: "National Certification",
    badgeColor: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    image: C1,
    description: "Comprehensive 3-week national level training covering Java Full Stack architecture, React.js client development, and modern AI integrations.",
  },
  {
    title: "Full Stack Development with React.js",
    program: "SkillEcted Campus Development Series",
    issuer: "SkillEcted by JSSAV Edu. Pvt. Ltd.",
    category: "Hands-on Development",
    badge: "Verified Skill",
    badgeColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    image: C2,
    description: "Hands-on engineering workshop focused on modern React component lifecycles, API data fetching, and stateful application architecture.",
  },
];

const Certifications = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff014f]/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div>
              {/* Image Preview with Hover Zoom */}
              <div
                onClick={() => setActiveModal(cert)}
                className="relative h-52 sm:h-56 w-full overflow-hidden bg-black/40 cursor-pointer"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111520] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${cert.badgeColor}`}>
                    {cert.badge}
                  </span>
                </div>

                {/* Click to preview hover button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md">
                    <FaSearchPlus /> Click to View Certificate
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white group-hover:text-[#ff014f] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1">
                  {cert.program}
                </p>
                <p className="text-xs text-[#ff014f] font-semibold mt-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-5 pt-0">
              <button
                onClick={() => setActiveModal(cert)}
                className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 border border-white/10 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FaAward className="text-[#ff014f]" />
                <span>Inspect Credential</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#111520] border border-white/15 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                aria-label="Close Preview"
              >
                <FaTimes size={18} />
              </button>

              <div className="flex flex-col gap-4">
                <div className="pr-10">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border mb-1 ${activeModal.badgeColor}`}>
                    {activeModal.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {activeModal.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {activeModal.program} • {activeModal.issuer}
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-white/10 bg-black max-h-[65vh] flex items-center justify-center">
                  <img
                    src={activeModal.image}
                    alt={activeModal.title}
                    className="w-full h-auto max-h-[65vh] object-contain"
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-300">
                  {activeModal.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
