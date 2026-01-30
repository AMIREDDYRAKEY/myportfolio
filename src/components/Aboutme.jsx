import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Myeducation from './Myeducation';
import Worke from './Work';
import Certifications from './Certifications';
import Strengths from './Strengths';
import SEO from '../SEO';

const Aboutme = () => {
  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app/projects"
/>

  const [Activetab, setActivetab] = useState("education");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mt-10 px-4 sm:px-8 md:px-12"
    >
      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-6 sm:mb-8"
      >
        <h1 className="text-[#858d98] font-bold text-3xl sm:text-4xl">About Me</h1>
        <div className="w-[120px] sm:w-[150px] h-[3px] bg-[#ff014f] mt-2 sm:mt-0"></div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 bg-[#202226] rounded-xl py-4 sm:py-5 px-4 sm:px-8 w-full sm:w-[90%] md:w-[75%] shadow-md shadow-[#111]">
          {[
            { id: 'education', label: 'My Education' },
            { id: 'work', label: 'Work Experience' },
            { id: 'certifi', label: 'Certifications' },
            { id: 'strength', label: 'Strength Beyond Tech' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActivetab(tab.id)}
              className={`border border-[#858d98] px-3 sm:px-5 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
                Activetab === tab.id
                  ? 'bg-[#ff014f] text-black'
                  : 'bg-[#1f2226] text-white hover:bg-[#ff014f] hover:text-black'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={Activetab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 sm:mt-10"
      >
        {Activetab === 'education' && <Myeducation />}
        {Activetab === 'work' && <Worke />}
        {Activetab === 'certifi' && <Certifications />}
        {Activetab === 'strength' && <Strengths />}
      </motion.div>
    </motion.div>
  );
};

export default Aboutme;
