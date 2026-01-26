import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import useSectionTracking from "./components/Hooks/useSectionTracking";

const App = () => {
  useSectionTracking([
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ]);

  return (
    <div className="bg-[#212428]">
      <Navbar />

      <div id="home"><Hero /></div>
      <div id="about"><Aboutme /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;
