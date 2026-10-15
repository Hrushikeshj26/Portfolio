import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:hrushij92@gmail.com?subject=New Contact from ${encodeURIComponent(
      name,
    )}&body=From: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(
      message,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Top Banner */}
      <div className="min-h-40 w-full bg-linear-to-r from-[#89b4fa]/40 to-[#89b4fa]/50 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(203, 166, 247, 0.4) 0, rgba(203, 166, 247, 0.4) 1px, transparent 1px, transparent 32px),
              repeating-linear-gradient(-45deg, rgba(203, 166, 247, 0.4) 0, rgba(203, 166, 247, 0.4) 1px, transparent 1px, transparent 32px)
            `,
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      {/* Top Header Card (Unchanged Structure) */}
      <div className="px-6 md:px-10 lg:px-12 relative z-10 -mt-16 sm:-mt-20 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-second rounded-2xl p-7 sm:p-10 shadow-2xl backdrop-blur-3xl max-w-4xl"
        >
          <p className="text-xs font-spacemono uppercase tracking-widest text-second mb-3 font-bold">
            Contact Me
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-spacemono text-white tracking-tight mb-4">
            Let's build something.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            Whether you have a freelance project in mind, a full-time remote
            opportunity, or just want to chat about code, my inbox is always
            open.
          </p>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="px-6 md:px-10 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="bg-card border-2 border-subtle hover:border-second rounded-2xl p-6 sm:p-8 shadow-xl transition-colors duration-300">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-subtle">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center font-spacemono tracking-tight">
                <MessageSquare className="text-[#89b4fa] mr-3" size={22} />
                Send a Message
              </h2>
              <span className="text-[11px] font-spacemono text-second px-2.5 py-1 rounded-md bg-surface border border-subtle">
                Direct to Email
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-spacemono uppercase tracking-wider text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-surface border border-subtle rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#89b4fa] focus:ring-2 focus:ring-[#89b4fa]/20 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-spacemono uppercase tracking-wider text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-surface border border-subtle rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#89b4fa] focus:ring-2 focus:ring-[#89b4fa]/20 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-spacemono uppercase tracking-wider text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-surface border border-subtle rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#89b4fa] focus:ring-2 focus:ring-[#89b4fa]/20 transition-all duration-200 resize-none"
                  placeholder="Hi Hrushikesh, I'd like to discuss a project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center w-full space-x-2 bg-btn hover:bg-btn-hover text-btn px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200 shadow-lg group"
              >
                <span>Send Message</span>
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Sidebar Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Details Card */}
          <div className="bg-card border-2 border-subtle rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-6 font-spacemono tracking-tight">
              Contact Details
            </h2>

            <div className="space-y-6">
              <a
                href="mailto:hrushij92@gmail.com"
                className="flex items-start group p-3 rounded-xl bg-surface/50 border border-subtle hover:border-second transition-all duration-200"
              >
                <div className="bg-surface p-3 rounded-lg border border-subtle text-[#89b4fa] mr-4 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-white font-semibold text-sm mb-0.5">
                    Email
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    hrushij92@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start group p-3 rounded-xl bg-surface/50 border border-subtle hover:border-second transition-all duration-200">
                <div className="bg-surface p-3 rounded-lg border border-subtle text-[#89b4fa] mr-4">
                  <MapPin size={20} />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-white font-semibold text-sm mb-0.5">
                    Location
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Belgaum, India (Open to Remote)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Status Card */}
          <div className="bg-card border-2 border-subtle rounded-2xl p-6 shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-spacemono uppercase tracking-wider text-emerald-400 font-bold">
                  Status: Available
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Actively looking for full-stack remote roles and freelance
                client projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
