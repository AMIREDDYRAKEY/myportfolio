import React, { useState } from 'react'
import img from '../assets/RAKEY.jpeg'
import { FaBars } from "react-icons/fa6"
import { IoCloseSharp } from "react-icons/io5"
import SEO from '../SEO'
const Navbar = () => {
  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app"
/>

  const [open, setopen] = useState(false)

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setopen(false)
    }
  }

  return (
    <nav className="bg-[#212428] shadow-xl h-[80px] w-full flex items-center fixed top-0 left-0 z-50 px-5">
      {/* Logo */}
      <div className="flex p-5 gap-2">
        <img src={img} alt="logo" className="w-10 h-10 rounded-full border-2 border-[#858d98]" />
        <h1 className="text-[#858d98] font-bold pt-[6px] text-xl">Rakey</h1>
      </div>

      {/* Desktop Menu */}
      <div className="flex-1 flex justify-center">
        <ul className="lg:flex md:flex hidden md:gap-[80px]">
          <li><button onClick={() => handleScroll("home")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">Home</button></li>
          <li><button onClick={() => handleScroll("about")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">About Me</button></li>
          <li><button onClick={() => handleScroll("skills")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">Skills</button></li>
          <li><button onClick={() => handleScroll("projects")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">Projects</button></li>
          <li><button onClick={() => handleScroll("contact")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">Contact</button></li>
        </ul>
      </div>
  <div className='flex justify-around'>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex text-[#858d98] text-[30px] ">
        <button onClick={() => setopen(!open)}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-[#212428] fixed top-0 right-0 h-screen w-screen z-50">
          <div className="flex justify-end mt-[30px] pr-[30px]">
            <button onClick={() => setopen(false)} className="text-[#858d98] text-3xl">
              <IoCloseSharp />
            </button>
          </div>

          <div className="flex flex-col items-start ml-[50px] mt-[50px] gap-[40px] text-xl">
            <button onClick={() => handleScroll("home")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">Home</button>
            <button onClick={() => handleScroll("about")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">About Me</button>
            <button onClick={() => handleScroll("skills")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">Skills</button>
            <button onClick={() => handleScroll("projects")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">Projects</button>
            <button onClick={() => handleScroll("contact")} className="text-[#858d98] font-semibold hover:text-[#ff014f]">Contact</button>
          </div>
        </div>
      )}
      </div>
    </nav>
  )
}

export default Navbar
