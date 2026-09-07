import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaAward, FaBolt, FaUserCheck } from "react-icons/fa";
import Myeducation from "./Myeducation";
import Work from "./Work";
import Certifications from "./Certifications";
import Strengths from "./Strengths";

const tabs = [
  { id: "work", label: "Work Experience", icon: FaBriefcase, count: "Techbuggy" },
  { id: "education", label: "Education", icon: FaGraduationCap, count: "B.Tech CSE" },
  { id: "certifi", label: "Certifications", icon: FaAward, count: "3 Verified" },
  { id: "strength", label: "Core Strengths", icon: FaBolt, count: "6 Pillars" },
];

const Aboutme = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#ff014f] mb-2">
          <FaUserCheck className="text-xs" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          About & <span className="text-gradient-pink">Credentials</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#ff014f] to-rose-400 rounded-full mt-2" />
        <p className="mt-2.5 text-slate-400 max-w-2xl text-xs sm:text-sm leading-relaxed">
          Comprehensive overview of my professional experience, academic achievements, verified certifications, and core competencies.
        </p>
      </div>

      {/* Modern Segmented Navigation Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#111520]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeAboutTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff014f] to-[#ff3b76] shadow-lg shadow-[#ff014f]/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <IconComponent className={isActive ? "text-white" : "text-slate-400"} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md hidden sm:inline-block ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
                  }`}>
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content with Smooth Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {activeTab === "work" && <Work />}
          {activeTab === "education" && <Myeducation />}
          {activeTab === "certifi" && <Certifications />}
          {activeTab === "strength" && <Strengths />}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Aboutme;
