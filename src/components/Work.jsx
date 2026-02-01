import React from 'react'
import SEO from '../SEO'
const Work = () => {
  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app"
/>

  return (
    <div className="flex justify-center items-center mt-8 px-4">
      <div className="border border-[#858d98] w-full sm:w-[90%] md:w-[80%] rounded-2xl p-4 sm:p-6 text-white">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left">
          Work Experience
        </h2>

        <div className="space-y-6 mt-5">
          <div className="border-l-4 border-blue-400 pl-4">
            <div className="text-lg sm:text-xl font-bold">Intern At Techbuggy</div>
            <p className="mt-1 font-semibold text-gray-400 text-sm sm:text-base">
              JULY 19, 2024 – Present (Part-Time)
            </p>
            <p className="text-gray-400 font-semibold text-sm sm:text-base">
              <strong>Role:</strong> Frontend Developer
            </p>
            <p className="mt-1 font-semibold text-gray-400 text-sm sm:text-base">
              <strong>Mode:</strong> Remote
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React JS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
