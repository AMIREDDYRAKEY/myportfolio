import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        // Smooth random increment
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07090e] text-white select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#ff014f]/20 blur-[120px] pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-blue-600/15 blur-[120px] pointer-events-none translate-x-20 translate-y-20" />

      {/* Center Branding Monogram */}
      <div className="relative flex flex-col items-center">
        <div className="relative flex items-center justify-center w-24 h-24 mb-6">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#ff014f] border-r-cyan-400"
          />

          {/* Inner badge */}
          <div className="w-20 h-20 rounded-full bg-[#0e131f] border border-white/10 flex items-center justify-center shadow-2xl">
            <span className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#ff014f] to-cyan-400">
              RR
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold tracking-tight text-white mb-1">
          Rakesh Reddy Amireddy
        </h2>
        <p className="text-xs font-mono text-slate-400 tracking-wider uppercase mb-8">
          Full Stack & App Developer
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden relative mb-3">
          <motion.div
            className="h-full bg-gradient-to-r from-[#ff014f] via-purple-500 to-cyan-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex items-center justify-center font-mono text-xs text-slate-300">
          <span className="font-bold text-white tracking-widest">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
