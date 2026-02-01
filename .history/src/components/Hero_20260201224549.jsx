import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/RAKEY.jpeg';
import { IoMdDownload } from "react-icons/io";
import SEO from '../SEO';
const Hero = () => {
  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app"
/>

  return (
    <div className='bg-[#212428]' >
      <div className='md:flex md:flex-row md:justify-around flex flex-col  md:mt-[140px] mt-[130px] md:ml-0 ml-4'>
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex md:gap-5 gap-3 flex-col md:mt-[40px] text-5xl'
        >
          <h1 className='text-white md:text-[50px] text-3xl font-semibold'>
            Hi, I'm <span className='text-[#ff014f]'> Rakesh Reddy!</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='text-white md:text-[40px] font-bold'
          >
            FullStack Developer
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-[500px] text-[#858d98] font-semibold"
          >
            <p className="text-base leading-relaxed">
              "I'm an aspiring <span className="text-blue-400 font-semibold">FullStack Developer</span> with a strong foundation in web technologies and a passion for crafting responsive, user-friendly interfaces. Dedicated to turning ideas into interactive experiences, I continuously explore modern frameworks and design principles to build seamless digital solutions."
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className='md:flex md:flex-row flex flex-col gap-8 md:mt-0 mt-5 md:gap-7'
          >
            <div className='border-[1.5px] border-[#858d98] h-[60px] lg:w-[170px] w-[280px] flex items-center justify-center bg-[#ff014f] rounded-md gap-2 cursor-pointer hover:bg-[#212428]'>
              <a
                href="/Rakesh resume.pdf"
                download="Rakesh Reddy Resume.pdf"
                className="flex items-center gap-2 text-white font-semibold text-[17px]"
              >
                <span>Download CV</span>
                <IoMdDownload className='text-[17px]' />
              </a>
            </div>

            <a href="#contact">
              <div className='border-[1.5px] border-[#858d98] h-[60px] lg:w-[170px] w-[280px] flex items-center justify-center rounded-md gap-2 hover:bg-[#ff014f] cursor-pointer'>
                <button className='text-[17px] text-white font-bold'>Get In Touch</button>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative group md:w-[450px] md:h-[450px] md:ml-0 ml-[-3px] md:mt-0 mt-10 w-[300px] h-[300px] rounded-full overflow-hidden bg-[#212428] p-2 shadow-2xl"
        >
          <img src={img} alt="Preview" className="w-full h-full object-cover rounded-full border-1 border-gray-200" />
        </motion.div>
      </div>

      <div className='lg:block hidden w-[88%] border-[0.5px] ml-[40px] mt-[40px] border-[#3f3f3f]'></div>
    </div>
  );
};

export default Hero;
