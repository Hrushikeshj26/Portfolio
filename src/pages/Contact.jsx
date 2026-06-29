import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    {
    name: "GitHub",
    href: "https://github.com/Hrushikeshj26",
    icon: FaGithub,
    hover: "hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hrushikeshj26/",
    icon: FaLinkedin,
    hover: "hover:text-sky-400 hover:bg-sky-500/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/hrushimj?s=11",
    icon: FaXTwitter,
    hover: "hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/your-username",
    icon: FaInstagram,
    hover: "hover:text-fuchsia-400 hover:bg-fuchsia-500/10 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]",
  },
  ];

  return (
    <div className="min-h-screen pb-16">
      <div className="min-h-40 w-full bg-gradient-to-r from-violet-800 to-violet-950 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.4) 0, rgba(139, 92, 246, 0.4) 1px, transparent 1px, transparent 32px),
              repeating-linear-gradient(-45deg, rgba(139, 92, 246, 0.4) 0, rgba(139, 92, 246, 0.4) 1px, transparent 1px, transparent 32px)
            `,
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      <div className="px-6 md:px-10 lg:px-12 relative z-10 -mt-16 sm:-mt-20 mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-second rounded-2xl p-7 sm:p-10 backdrop-blur-3xl shadow-xl max-w-4xl"
        >
          <p className="text-xs font-spacemono uppercase tracking-widest text-violet-400 mb-3 font-bold">
            Contact Me
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-spacemono text-white tracking-tight mb-4">
            Let's build something.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            Whether you have a freelance project in mind, a full-time opportunity, or just want to chat about code and UI design, my inbox is always open.
          </p>
        </motion.div>
      </div>

      <div className="px-6 md:px-10 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="bg-card2 border border-main hover:border-second transition-colors duration-300 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center font-spacemono tracking-tight">
              <MessageSquare className="text-violet-400 mr-3" size={22} />
              Send a Message
            </h2>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="redirect" value="https://yourwebsite.com/contact" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-spacemono uppercase tracking-wider text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-surface border border-subtle rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-spacemono uppercase tracking-wider text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-surface border border-subtle rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-spacemono uppercase tracking-wider text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="6"
                  className="w-full bg-surface border border-subtle rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all duration-300 resize-none"
                  placeholder="Hi Hrushikesh, I'd like to talk about..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center w-full space-x-2 bg-btn hover:bg-btn-hover text-white px-6 py-4 rounded-xl font-semibold transition-colors duration-300 shadow-lg shadow-violet-500/20 group"
              >
                <span>Send Message</span>
                <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-5 space-y-6 sm:space-y-8"
        >
          <div className="bg-card2 border-2 border-subtle hover:border-second transition-colors duration-300 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-6 font-spacemono tracking-tight">Contact Details</h2>
            
            <div className="space-y-6">
              <a 
                href="mailto:hrushij92@gmail.com"
                className="flex items-start group"
              >
                <div className="bg-surface p-3.5 rounded-xl border-2 border-subtle mr-4 shrink-0 group-hover:border-violet-500 transition-colors">
                  <Mail className="text-violet-200" size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-semibold text-md mb-1 group-hover:text-violet-300 transition-colors">Email</h3>
                  <p className="text-gray-300 text-sm transition-colors">hrushij92@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start group">
                <div className="bg-surface p-3.5 rounded-xl border-2 border-subtle mr-4 shrink-0 group-hover:border-violet-500 transition-colors">
                  <MapPin className="text-violet-200" size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-semibold text-md mb-1 group-hover:text-violet-300 transition-colors">Location</h3>
                  <p className="text-gray-300 text-sm">Belgaum, India</p>
                  <p className="text-gray-400 text-xs mt-1">Available for remote work worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card2 border-2 border-subtle hover:border-second transition-colors duration-300 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-white font-bold text-lg mb-6 font-spacemono tracking-tight">Connect with me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ name, href, icon: Icon, hover }) => (
                <motion.a
                  key={name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-second border-2 border-subtle text-gray-200 transition-colors duration-300 shadow-sm ${hover}`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;