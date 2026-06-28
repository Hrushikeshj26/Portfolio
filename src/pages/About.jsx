import {
  Code2,
  Layers,
  Database,
  Sparkles,
  MapPin,
  Coffee,
  Rocket,
  Briefcase,
  Gamepad2,
  LineChart,
  ArrowUpRight,
  Terminal,
  Camera,
  GraduationCapIcon,
  CodeXml,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const journey = [
  {
    year: "The Pivot",
    icon: GraduationCapIcon,
    title: "Bachelor of Computer Applications",
    description:
      "Realized my true passion lay in software. Transitioned into a BCA program where I went deep on computer science fundamentals and web development.",
  },
  {
    year: "2024",
    icon: CodeXml,
    title: "Independent Frontend Development",
    description:
      "Dedicated my time to intense, self-directed building. Mastered React.js and Tailwind CSS by engineering complex interfaces, building real-world projects, and pushing code daily.",
  },
  {
    year: "2025–26",
    icon: Rocket,
    title: "Full-Stack & React Native",
    description:
      "Expanded my toolbelt to include Supabase and PostgreSQL for full-stack apps (like Cravingo) and started exploring mobile development with React Native.",
  },
  {
    year: "Now",
    icon: Sparkles,
    title: "Open to Opportunities",
    description:
      "Actively seeking full-time roles or contract work where I can ship high-quality digital experiences and bridge the gap between heavy logic and sleek design.",
  },
];

const quickFacts = [
  { label: "Based in", value: "Belgaum, India", icon: MapPin },
  { label: "Experience", value: "Freelance & Indie", icon: Briefcase },
  { label: "Focus", value: "React & UI/UX", icon: Code2 },
  { label: "Fuel of choice", value: "Coffee", icon: Coffee },
];

const focusAreas = [
  {
    title: "Interface Engineering",
    icon: Code2,
    accent: "text-sky-400",
    ring: "bg-sky-500/10 border-sky-500/20 hover:border-sky-500/50",
    description: "Turning designs into responsive, accessible interfaces that hold up across devices using React and Tailwind.",
  },
  {
    title: "Component Architecture",
    icon: Layers,
    accent: "text-violet-400",
    ring: "bg-violet-500/10 border-violet-500/20 hover:border-violet-500/50",
    description: "Structuring React apps so components stay reusable and state stays predictable as projects scale.",
  },
  {
    title: "Full-Stack Foundations",
    icon: Database,
    accent: "text-emerald-400",
    ring: "bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/50",
    description: "Integrating BaaS tools like Supabase to handle authentication, real-time databases, and data architecture.",
  },
  {
    title: "Interaction & Polish",
    icon: Sparkles,
    accent: "text-amber-400",
    ring: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/50",
    description: "Focusing on sleek animations, minimalist design, and edge cases to ensure a product feels truly premium.",
  },
];

const beyondCoding = [
  { title: "Linux & Custom ROMs", icon: Terminal, blurb: "Constantly testing Linux distros and flashing custom Android ROMs." },
  { title: "Competitive Gaming", icon: Gamepad2, blurb: "Grinding ranks in Valorant, CS2, or trying out Marvel Rivals." },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/your-username", icon: FaGithub, hover: "hover:text-white hover:bg-white/10" },
  { name: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedin, hover: "hover:text-sky-400 hover:bg-sky-500/10" },
  { name: "X (Twitter)", href: "https://x.com/your-username", icon: FaXTwitter, hover: "hover:text-white hover:bg-white/10" },
  { name: "Instagram", href: "https://instagram.com/your-username", icon: FaInstagram, hover: "hover:text-fuchsia-400 hover:bg-fuchsia-500/10" },
];

const About = () => {
  return (
    <div className="min-h-screen pb-10">
      
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
        <div className="bg-card border border-second rounded-2xl p-7 sm:p-10 shadow-xl max-w-4xl">
          <p className="text-xs font-spacemono uppercase tracking-widest text-violet-400 mb-3 font-bold">
            About me
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-spacemono text-white tracking-tight mb-4">
            The story so far
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            A closer look at my transition from Mechanical Engineering to full-stack development, what I care about as an engineer, and what I do away from the keyboard.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-12 space-y-16 max-w-7xl mx-auto">
        
        {/* Quick Facts */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="bg-card border border-second hover:border-violet-500/40 rounded-xl p-5 flex flex-col gap-3 transition-colors duration-300"
              >
                <Icon size={20} className="text-violet-400" />
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                    {value}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 font-spacemono uppercase tracking-wider">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Journey */}
          <section className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-white mb-2 font-spacemono tracking-tight">My Journey</h2>
            <p className="text-gray-400 text-sm mb-10">
              From engineering circuits to shipping user interfaces.
            </p>

            <div className="relative pl-3">
              <div className="absolute left-9.5 top-4 bottom-4 w-1 bg-linear-to-b from-violet-500/70 via-violet-500/50 to-transparent rounded-full" />
              
              <div className="space-y-12">
                {journey.map(({ year, icon: Icon, title, description }, i) => (
                  <div key={i} className="relative flex gap-6 group">
                    <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-surface border-2 border-second group-hover:border-violet-500 flex items-center justify-center text-violet-400 transition-colors duration-300 shadow-md">
                      <Icon size={20} />
                    </div>
                    <div className="pt-1.5 pb-2">
                      <span className="inline-block px-2.5 py-1 bg-surface border border-subtle rounded-md text-xs font-bold font-spacemono uppercase tracking-widest text-violet-300 mb-3 shadow-sm">
                        {year}
                      </span>
                      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Right Column: Focus & Hobbies */}
          <div className="lg:col-span-7 space-y-16">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-2 font-spacemono tracking-tight">Core Focus Areas</h2>
              <p className="text-gray-400 text-sm mb-8">Where I spend most of my technical attention.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {focusAreas.map(({ title, icon: Icon, accent, ring, description }) => (
                  <div key={title} className="bg-card border border-subtle hover:border-second rounded-xl p-6 transition-colors duration-300">
                    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border transition-colors duration-300 ${ring} ${accent} mb-5`}>
                      <Icon size={22} />
                    </span>
                    <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-2 font-spacemono tracking-tight">Beyond Coding</h2>
              <p className="text-gray-400 text-sm mb-8">The non-technical stuff that keeps me balanced.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {beyondCoding.map(({ title, icon: Icon, blurb }) => (
                  <div key={title} className="bg-card border border-subtle hover:border-second rounded-xl p-6 transition-colors duration-300 group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-subtle text-violet-400 group-hover:text-violet-300 transition-colors">
                        <Icon size={18} />
                      </span>
                      <h3 className="text-white font-semibold text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{blurb}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Connect CTA */}
        <section className="pt-8">
          <div className="bg-card border border-main rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -mt-32 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-white text-2xl sm:text-3xl font-bold font-spacemono tracking-tight mb-3">
                Let's connect
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
                Always happy to talk shop, swap project ideas, discuss the markets, or just say hello. Find me on:
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                {socialLinks.map(({ name, href, icon: Icon, hover }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-surface border border-subtle text-gray-400 transition-all duration-300 hover:-translate-y-1 shadow-sm ${hover}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-btn hover:bg-btn-hover text-text-btn font-semibold text-sm px-6 py-3 rounded-lg transition-all group/cta"
              >
                Send a message directly
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;