import React from 'react'
import C1 from "../assets/C1.jpg"
import C2 from "../assets/C2.jpg"
import C3 from "../assets/C3.jpg"
import SEO from '../SEO'

const Certifications = () => {
  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app/projects"
/>

  const projects = [
    {
      title: "Practice Website Dewi",
      image: C1,
    },
    {
      title: "Event Management Website",
      image: C2,
    },
    {
      title: "Weather App Using API",
      image:C3,
    },
  ];

  return (
    <div className="mt-[90px] px-6 sm:px-10 md:px-20">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 justify-items-center">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.04] hover:border-[#ff014f] duration-300
              flex flex-col w-[280px] lg:w-[330px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className=" h-[250px] lg:h-[220px] "
            />
          </div>

        ))}
      </div>
    </div>
  );
};

export default Certifications;
