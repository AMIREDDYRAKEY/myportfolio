import React from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
const Myeducation = () => {
  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app"
/>


  // Parent animation for stagger
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.25,
      },
    },
  };

  // Animation for each item
  const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center mt-[30px]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="border-[1px] h-auto w-[94%] border-[#858d98] rounded-2xl p-6 text-white"
      >
        <h2 className="text-xl font-semibold">My Education</h2>

        <div className="space-y-6 mt-5">

          {/* Item 1 */}
          <motion.div
            variants={item}
             
            className="border-l-4 border-blue-400 pl-4"
          >
            <div className="text-xl">
              <strong>Currently Studying:</strong> Btech 3rd year CSE
            </div>
            <p className="text-gray-400">
              Annamacharya Institute of Technology And Sciences | 2024 - 2027
            </p>
            <p className="mt-1 font-semibold">CGPA: 8.7/10</p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            variants={item}
             
            className="border-l-4 border-green-400 pl-4"
          >
            <h2 className="text-xl font-semibold">Higher Secondary Education</h2>
            <p className="text-gray-400">
              Priyadarshini Institute Of Technology And Sciences | 2021 - 2024
            </p>
            <p className="mt-1 font-semibold text-[#fff]">
              Diploma in Electronic And Communication Engineering (ECE) <br />
              Percentage: 90
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            variants={item}
             
            className="border-l-4 border-yellow-400 pl-4"
          >
            <h2 className="text-xl font-semibold">Secondary School</h2>
            <p className="text-gray-400">
              Sri Shiridi Sai High School | 2020 - 2021
            </p>
            <p className="mt-1 font-semibold">CGPA: 10/10</p>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Myeducation;
