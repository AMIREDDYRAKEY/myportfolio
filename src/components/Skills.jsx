import React from 'react';
import { motion } from 'framer-motion';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsIcon from '../assets/js.png';
import tailwindLogo from '../assets/ti.png';
import reactLogo from '../assets/re.png';
import reduxLogo from '../assets/red.png';
import mdblogo from "../assets/MDB.png"
import nodelogo from "../assets/Nod.png"
import Exlogo from "../assets/Ex.png"
import seo from '../assets/seo.png'
const Skills = () => {
  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "JavaScript", img: jsIcon },
    { name: "Tailwind CSS", img: tailwindLogo },
    { name: "React JS", img: reactLogo },
    { name: "Redux", img: reduxLogo },
    { name: "Mongo DB", img: mdblogo },
    { name: "Node Js", img: nodelogo },
    { name: "Express Js", img: Exlogo },
     { name: "SEO", img: seo },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, scale: 0.7 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-12 px-6 sm:px-10 md:px-20"
    >
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <h1 className="text-[#858d98] font-bold text-3xl sm:text-4xl">
          My Skills
        </h1>
        <div className="w-[120px] sm:w-[150px] h-[3px] bg-[#ff014f]" />
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-10 justify-items-center"
      >
        {skills.map((skill, i) => (
          <motion.div
            variants={item}
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 mb-2"
            />
            <p className="text-white font-bold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
