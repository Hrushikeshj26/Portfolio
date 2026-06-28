import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    icon: FaGithub,
    hover: "hover:text-white hover:bg-white/10 hover:shadow-white/10",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: FaLinkedin,
    hover: "hover:text-sky-400 hover:bg-sky-500/10 hover:shadow-sky-500/20",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/your-username",
    icon: FaXTwitter,
    hover: "hover:text-white hover:bg-white/10 hover:shadow-white/10",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/your-username",
    icon: FaInstagram,
    hover: "hover:text-fuchsia-400 hover:bg-fuchsia-500/10 hover:shadow-fuchsia-500/20",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-600 mt-16">
      <div className="px-6 md:px-10 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-gray-400 text-xs sm:text-sm font-spacemono order-2 sm:order-1">
          © 2026 hrushij.dev • All Rights Reserved
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4 order-1 sm:order-2">
          <span className="hidden sm:inline text-xs text-gray-400 font-spacemono uppercase tracking-widest mr-1">
            Find me on
          </span>
          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ name, href, icon: Icon, hover }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-subtle text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-card ${hover}`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;