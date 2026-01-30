import React from "react";
import { motion } from "framer-motion";
import eventImg from "../assets/event.png";
import DewiImg from "../assets/dew.png";
import Weath from "../assets/wea.png";
import Redux from "../assets/redu.png";
import SEO from "../SEO";
const Projects = () => {
  const projects = [
    {
      title: "Practice Website Dewi",
      description:
        "A responsive and modern practice website built using HTML, CSS, and Tailwind CSS. It showcases clean layout design, smooth animations, and mobile-friendly sections like Home, About, and Contact to strengthen front-end development skills.",
      image: DewiImg,
      techStack: ["HTML", "CSS", "Tailwind CSS"],
      link: "https://dewi-five.vercel.app",
    },
    {
      title: "Event Management Website",
      description:
        "A responsive web app for creating, managing, and registering events. Built with React, Node.js, and MongoDB to handle schedules, rules, and results efficiently.",
      image: eventImg,
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://college-events-jade.vercel.app",
    },
    {
      title: "Weather App Using API",
      description:
        "A responsive web application that shows real-time weather updates using the OpenWeather API. Built with React, it features dynamic city search, temperature display, and weather conditions with a clean, user-friendly interface.",
      image: Weath,
      techStack: ["JavaScript", "OpenWeather API", "CSS"],
      link: "https://weather-api-gules-tau.vercel.app",
    },
    {
      title: "Redux Toolkit using Fetch",
      description:
        "A React project using Redux Toolkit for efficient state management. It integrates Fetch API to handle data smoothly with clean structure, async logic, and centralized state updates.",
      image: Redux,
      techStack: ["React", "Redux Toolkit", "Fetch API"],
      link: "https://redux-sepia-omega.vercel.app",
    },
  ];

  return (
    <div className="mt-[90px] px-6 sm:px-10 md:px-20">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
      >
        <h1 className="text-[#858d98] font-bold text-3xl sm:text-4xl">
          My Projects
        </h1>
        <div className="w-[150px] h-[3px] bg-[#ff014f]" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.03] hover:border-[#ff014f] 
                      lg:w-[370px] w-[290px] h-[430px] lg:h-[420px] flex flex-col justify-between ml-[-10px] lg:ml-0"
          >
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={project.image}
              alt={project.title}
              className="w-[290px] lg:w-[370px] h-[230px] object-cover"
            />

            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-white text-xl font-semibold">
                {project.title}
              </h2>

              <p className="text-gray-400 text-[10px] mt-2 line-clamp-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-1">
                <p className="text-[#ff014f] text-sm font-bold">Tech Stack:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-[#2a2a2a] text-gray-300 px-3 py-1 rounded-full border border-[#3a3a3a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                className="inline-block mt-5 text-[#ff014f] font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
