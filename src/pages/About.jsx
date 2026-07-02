import { motion } from "framer-motion";
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
  ArrowUpRight,
  Terminal,
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

const focusAreas = [
  {
    title: "Interface Engineering",
    icon: Code2,
    accent: "text-sky-400",
    ring: "bg-sky-500/10 border-sky-500/20 group-hover:border-sky-500/50",
    description: "Turning designs into responsive, accessible interfaces that hold up across devices using React and Tailwind.",
  },
  {
    title: "Component Architecture",
    icon: Layers,
    accent: "text-violet-400",
    ring: "bg-violet-500/10 border-violet-500/20 group-hover:border-violet-500/50",
    description: "Structuring React apps so components stay reusable and state stays predictable as projects scale.",
  },
  {
    title: "Full-Stack Foundations",
    icon: Database,
    accent: "text-emerald-400",
    ring: "bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/50",
    description: "Integrating BaaS tools like Supabase to handle authentication, real-time databases, and data architecture.",
  },
  {
    title: "Interaction & Polish",
    icon: Sparkles,
    accent: "text-amber-400",
    ring: "bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/50",
    description: "Focusing on sleek animations, minimalist design, and edge cases to ensure a product feels truly premium.",
  },
];

const beyondCoding = [
  { title: "Linux & Custom ROMs", icon: Terminal, blurb: "Constantly testing Linux distros and flashing custom Android ROMs." },
  { title: "Competitive Gaming", icon: Gamepad2, blurb: "Grinding ranks in BGMI, COD-M, Marvel Rivals, Valorant or trying out CS2." },
];

const About = () => {
  return (
    <div className="min-h-screen pb-10">
      
      <div className="min-h-40 w-full bg-linear-to-r from-violet-800 to-violet-950 relative overflow-hidden">
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
            About me
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-spacemono text-white tracking-tight mb-4">
            The story so far
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            A closer look at my transition int Development, what I care about as an engineer, and what I do away from the keyboard.
          </p>
        </motion.div>
      </div>

      <div className="px-6 md:px-5 lg:px-5 space-y-16 md:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <section className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-white mb-2 font-spacemono tracking-tight">My Journey</h2>
            <p className="text-gray-400 text-sm mb-10">
              From engineering circuits to shipping user interfaces.
            </p>

            <div className="relative pl-3">
              <div className="absolute left-12.5 top-4 bottom-4 w-1 bg-linear-to-b from-violet-500/70 via-violet-500/30 to-transparent rounded-full" />
              
              <div className="space-y-12">
                {journey.map(({ year, icon: Icon, title, description }, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative flex gap-6 group"
                  >
                    <div className="relative z-10 shrink-0 w-20 h-20 rounded-full bg-second border-2 border-second group-hover:border-violet-500 flex items-center justify-center text-violet-300 transition-colors duration-300 shadow-md">
                      <Icon size={28} />
                    </div>
                    <div className="pt-1.5 pb-2">
                      <span className="inline-block px-2.5 py-1 bg-surface rounded-md text-xs font-bold font-spacemono uppercase tracking-widest text-violet-100 mb-3 shadow-sm">
                        {year}
                      </span>
                      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                      <p className="text-gray-400 text-md leading-relaxed max-w-sm">{description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="lg:col-span-7 space-y-16">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-2 font-spacemono tracking-tight">Core Focus Areas</h2>
              <p className="text-gray-400 text-sm mb-8">Where I spend most of my technical attention.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {focusAreas.map(({ title, icon: Icon, accent, ring, description }, i) => (
                  <motion.div 
                    key={title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-card border-2 border-subtle hover:border-second rounded-xl p-6 transition-colors duration-300 group shadow-lg"
                  >
                    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border transition-colors duration-300 ${ring} ${accent} mb-5`}>
                      <Icon size={22} />
                    </span>
                    <h3 className="text-white font-semibold text-base mb-2 group-hover:text-violet-300 transition-colors">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-2 font-spacemono tracking-tight">Beyond Coding</h2>
              <p className="text-gray-400 text-sm mb-8">The non-technical stuff that keeps me balanced.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {beyondCoding.map(({ title, icon: Icon, blurb }, i) => (
                  <motion.div 
                    key={title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-card border-2 border-subtle hover:border-second rounded-xl p-6 transition-colors duration-300 group shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface text-violet-200 group-hover:text-violet-300 transition-colors">
                        <Icon size={20} />
                      </span>
                      <h3 className="text-white font-semibold text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{blurb}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="pt-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-main rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -mt-32 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-white text-2xl sm:text-3xl font-bold font-spacemono tracking-tight mb-3">
                Let's connect
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-md mx-auto tracking-wide">
                Always happy to talk shop, swap project ideas, discuss the markets, or just say hello. Find me on:
              </p>
                            
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-2 bg-btn hover:bg-btn-hover text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors shadow-lg group/cta"
              >
                Send a message directly
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;