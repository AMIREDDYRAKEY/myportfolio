import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import useSectionTracking from "./components/Hooks/useSectionTracking";
import SEO from "./SEO";

const App = () => {
  const [loading, setLoading] = useState(true);

  useSectionTracking(["home", "about", "skills", "projects", "contact"]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0d14] text-slate-100 overflow-x-hidden selection:bg-[#ff014f] selection:text-white bg-grid-pattern">
      <SEO
        title="Rakesh Reddy Amireddy | Full Stack & App Developer"
        description="Official portfolio of Rakesh Reddy Amireddy - Full Stack Developer & App Developer. Experienced in React.js, Flutter, Node.js, Express.js, MongoDB."
        canonical="https://myportfolio-eight-blue.vercel.app"
      />

      {/* Initial Screen Loader */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Custom Animated Trailing Cursor */}
      <CustomCursor />

      {/* Top Animated Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff014f] via-[#ff3b76] to-cyan-400 origin-left z-[999]"
      />

      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#ff014f]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-10 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Sections with compact spacing */}
      <main className="relative z-10 flex flex-col gap-2">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <Aboutme />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-[#ff014f] hover:bg-[#e00045] text-white shadow-xl shadow-[#ff014f]/40 hover:shadow-2xl hover:shadow-[#ff014f]/60 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          title="Scroll back to top"
          aria-label="Back to top"
        >
          <FaArrowUp size={16} />
        </motion.button>
      )}
    </div>
  );
};

export default App;
