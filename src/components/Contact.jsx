import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp, 
  FaCopy, 
  FaCheck, 
  FaPaperPlane, 
  FaComments 
} from "react-icons/fa";

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "rakeyr213@gmail.com";
  const phone = "+91 6305541105";

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with user feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#ff014f] mb-2">
          <FaComments className="text-xs" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Let's Work <span className="text-gradient-pink">Together</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#ff014f] to-rose-400 rounded-full mt-2" />
        <p className="mt-2.5 text-slate-400 max-w-xl text-xs sm:text-sm leading-relaxed">
          I am actively looking for Full-Time & Internship opportunities. Whether you have an open role, a project idea, or just want to chat, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* LEFT COLUMN: Quick Contact Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Email Card */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-[#ff014f] shrink-0 text-xl group-hover:scale-105 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <p className="text-white font-semibold text-sm sm:text-base select-all">
                    {email}
                  </p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(email, "email")}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0 cursor-pointer"
                title="Copy Email"
              >
                {copiedField === "email" ? (
                  <FaCheck className="text-emerald-400" />
                ) : (
                  <FaCopy />
                )}
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400">Response time: &lt; 24 hrs</span>
              <a
                href={`mailto:${email}`}
                className="text-xs font-semibold text-[#ff014f] hover:underline"
              >
                Open Mail Client →
              </a>
            </div>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 text-xl group-hover:scale-105 transition-transform">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Phone & WhatsApp
                  </span>
                  <p className="text-white font-semibold text-sm sm:text-base select-all">
                    {phone}
                  </p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(phone, "phone")}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0 cursor-pointer"
                title="Copy Phone Number"
              >
                {copiedField === "phone" ? (
                  <FaCheck className="text-emerald-400" />
                ) : (
                  <FaCopy />
                )}
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400">Available: 9 AM - 9 PM IST</span>
              <a
                href="https://wa.me/916305541105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
              >
                <FaWhatsapp className="text-sm" /> Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* Location & Relocation Card */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Location & Availability
                </span>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Kadapa, Andhra Pradesh, India
                </p>
                <p className="text-xs text-emerald-400 font-medium mt-0.5">
                  Open to Remote & On-site Relocation
                </p>
              </div>
            </div>
          </div>

          {/* Professional Socials */}
          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 flex items-center justify-around gap-2">
            <a
              href="https://www.linkedin.com/in/amireddy-rakesh-reddy-13540b279"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#0077b5] border border-white/10 text-xs font-semibold transition-all"
            >
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/AMIREDDYRAKEY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send Me a Direct Message
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Fill in the form below and I'll receive your notification immediately.
            </p>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3"
                >
                  <FaCheck className="text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your message has been prepared. You can also email me directly at{" "}
                    <strong>{email}</strong>.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d111a] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff014f] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d111a] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff014f] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Subject / Opportunity Type
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Job Opportunity: Full-Stack Developer"
                  className="w-full px-4 py-3 rounded-xl bg-[#0d111a] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff014f] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hi Rakesh, we reviewed your portfolio and would like to discuss a frontend role..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0d111a] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff014f] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#ff014f] to-[#ff3b76] hover:from-[#e00045] hover:to-[#ff014f] text-white font-semibold text-sm shadow-lg shadow-[#ff014f]/30 hover:shadow-xl hover:shadow-[#ff014f]/50 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
