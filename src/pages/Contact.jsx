import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/your-username", icon: FaGithub, hover: "hover:text-white hover:bg-white/10" },
    { name: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedin, hover: "hover:text-sky-400 hover:bg-sky-500/10" },
    { name: "X (Twitter)", href: "https://x.com/your-username", icon: FaXTwitter, hover: "hover:text-white hover:bg-white/10" },
    { name: "Instagram", href: "https://instagram.com/your-username", icon: FaInstagram, hover: "hover:text-fuchsia-400 hover:bg-fuchsia-500/10" },
  ];

  return (
    <div className="min-h-screen pb-16">
      {/* Banner */}
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

      {/* Header */}
      <div className="px-6 md:px-10 lg:px-12 relative z-10 -mt-16 sm:-mt-20 mb-14">
        <div className="bg-card border border-second rounded-2xl p-7 sm:p-10 shadow-2xl backdrop-blur-sm max-w-4xl">
          <p className="text-xs font-spacemono uppercase tracking-widest text-violet-400 mb-3 font-bold">
            Contact Me
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-spacemono text-white tracking-tight mb-4">
            Let's build something.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            Whether you have a freelance project in mind, a full-time opportunity, or just want to chat about code and UI design, my inbox is always open.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="px-6 md:px-10 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Form (Spans 7/12) */}
        <div className="lg:col-span-7">
          <div className="bg-card border border-second rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center font-spacemono tracking-tight">
              <MessageSquare className="text-violet-400 mr-3" size={22} />
              Send a Message
            </h2>
            
            {/* Form using Web3Forms */}
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
                    className="w-full bg-surface border border-subtle rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
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
                    className="w-full bg-surface border border-subtle rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
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
                  className="w-full bg-surface border border-subtle rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300 resize-none"
                  placeholder="Hi Hrushikesh, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full space-x-2 bg-btn hover:bg-btn-hover text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-violet-500/20 group"
              >
                <span>Send Message</span>
                <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Contact Info (Spans 5/12) */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          
          <div className="bg-card border border-second rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-6 font-spacemono tracking-tight">Contact Details</h2>
            
            <div className="space-y-6">
              <a 
                href="mailto:hrushij92@gmail.com"
                className="flex items-start group"
              >
                <div className="bg-surface p-3.5 rounded-xl border border-subtle mr-4 shrink-0 group-hover:border-violet-500/50 transition-colors">
                  <Mail className="text-violet-400" size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-violet-300 transition-colors">Email</h3>
                  <p className="text-gray-400 text-sm transition-colors">hrushij92@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start">
                <div className="bg-surface p-3.5 rounded-xl border border-subtle mr-4 shrink-0">
                  <MapPin className="text-violet-400" size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-semibold text-sm mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">Belgaum, India</p>
                  <p className="text-gray-500 text-xs mt-1">Available for remote work worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-second rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-white font-bold text-lg mb-5 font-spacemono tracking-tight">Connect with me</h3>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map(({ name, href, icon: Icon, hover }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`flex items-center justify-center aspect-square rounded-xl bg-surface border border-subtle text-gray-400 transition-all duration-300 hover:-translate-y-1 ${hover}`}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;