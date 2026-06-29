import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 pb-8 pt-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-24 bg-violet-600/5 blur-[80px] pointer-events-none" />

      <div className="px-6 md:px-10 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
  
        <div className="flex flex-col items-center md:items-start gap-2 order-2 md:order-1">
          <p className="text-white font-spacemono text-lg font-bold">
            hrushij<span className="text-violet-400">.dev</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            © {currentYear} • Engineered with React & Tailwind
          </p>
        </div>

        {/* Center/Right: Socials & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6 order-1 md:order-2">
          
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

          {/* Divider dot for larger screens */}
          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-subtle"></span>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-xs font-spacemono uppercase tracking-widest text-gray-400 hover:text-violet-400 transition-colors group"
          >
            Back to top
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-subtle group-hover:border-violet-500/50 transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;