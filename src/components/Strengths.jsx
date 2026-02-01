import React from 'react';
import SEO from '../SEO';
const Strengths = () => {
  <SEO
  title="Projects | Amireddy Portfolio"
  description="My best React projects and frontend work."
  canonical="https://myportfolio-eight-blue.vercel.app"
/>

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">My Strengths</h2>
      <ul className="list-disc list-inside space-y-3 text-base">
        <li><span className="text-blue-400 font-semibold">Problem-Solving:</span> Break down complex challenges and find effective solutions.</li>
        <li><span className="text-blue-400 font-semibold">Creativity & Design:</span> Build intuitive, user-friendly interfaces with visual appeal.</li>
        <li><span className="text-blue-400 font-semibold">Attention to Detail:</span> Ensure consistency, responsiveness, and accessibility in all projects.</li>
        <li><span className="text-blue-400 font-semibold">Teamwork & Communication:</span> Collaborate effectively and communicate ideas clearly.</li>
        <li><span className="text-blue-400 font-semibold">Adaptability:</span> Quickly learn new tools, frameworks, and adjust to changing project needs.</li>
        <li><span className="text-blue-400 font-semibold">Continuous Learning:</span> Stay updated with modern web technologies to deliver high-quality experiences.</li>
      </ul>
    </div>
  );
};

export default Strengths;
