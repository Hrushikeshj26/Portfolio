import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Download,
  Code2,
  Layers,
  Database,
  Wrench,
  Users,
} from "lucide-react";
import profilepic from "../assets/profile-pic.png";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    accent: "text-sky-400",
    ring: "hover:border-sky-500/50 hover:shadow-sky-500/10",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    accent: "text-violet-400",
    ring: "hover:border-violet-500/50 hover:shadow-violet-500/10",
    skills: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Database,
    accent: "text-emerald-400",
    ring: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    skills: ["Supabase", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    accent: "text-amber-400",
    ring: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    skills: ["Git", "GitHub", "Figma", "Vercel", "Netlify"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    accent: "text-rose-400",
    ring: "hover:border-rose-500/50 hover:shadow-rose-500/10",
    skills: ["Problem Solving", "Communication", "Attention to Detail"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="min-h-screen pb-10">
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

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="px-6 md:px-10 lg:px-12 flex flex-col sm:flex-row items-center sm:items-end w-full relative z-10 -mt-16 sm:-mt-20 mb-12 gap-5 sm:gap-8"
      >
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-[3px] border-main overflow-hidden bg-surface shrink-0 shadow-2xl"
        >
          <img
            src={profilepic}
            alt="Hrushikesh Jadhav"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-end justify-between w-full text-center sm:text-left gap-6 md:gap-0">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-spacemono text-white tracking-tight mb-1">
              Hrushikesh Jadhav
            </h1>
            <p className="text-violet-300 font-spacemono font-semibold text-sm sm:text-base tracking-wide uppercase">
              Frontend Developer
            </p>
          </div>
          
          <motion.a 
            href="/resume.pdf" 
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto flex justify-center items-center space-x-2 bg-btn hover:bg-btn-hover text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg shadow-violet-500/20"
          >
            <span>Download Resume</span>
            <Download size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-[1400px]">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:col-span-7 space-y-12"
        >
          <motion.section variants={itemVariants} className="flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-4 font-spacemono tracking-tight">About me</h2>
            <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4 max-w-2xl">
              <p>
                I'm a frontend developer based in India, dedicated to crafting clean, modern, and aesthetic user interfaces. With a strong foundation in React.js, JavaScript, and Tailwind CSS, I focus on building responsive and accessible web applications.
              </p>
              <p>
                I love bridging the gap between design and engineering to deliver digital experiences that feel fast, fluid, and genuinely enjoyable to use.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center w-max text-violet-400 hover:text-violet-300 font-semibold text-sm sm:text-base mt-5 transition-colors group/about"
            >
              Read the full story
              <ArrowRight
                size={16}
                className="ml-1.5 transition-transform group-hover/about:translate-x-1"
              />
            </Link>
          </motion.section>

          <motion.section variants={itemVariants}>
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-card border-2 border-main hover:border-second rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 shadow-lg relative group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl -mr-10 -mt-10 transition-colors group-hover:bg-violet-600/20 pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="p-4 bg-surface border border-subtle rounded-2xl text-violet-400 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-md">
                  <Briefcase size={28} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col xl:flex-row xl:items-center gap-3 mb-3">
                    <h3 className="text-white text-lg font-bold font-spacemono tracking-tight">
                      Open to Opportunities
                    </h3>
                    <span className="inline-flex w-max items-center text-xs font-bold text-gray-300 bg-surface border border-subtle px-3 py-1.5 rounded-full shadow-sm">
                      <span className="relative flex w-2 h-2 mr-2">
                        <span className="absolute inline-flex w-full h-full bg-emerald-400 rounded-full opacity-75 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 bg-emerald-500 rounded-full" />
                      </span>
                      Available Now
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-lg">
                    I am currently open to freelance projects, contract work, and full-time frontend roles. If you have an exciting project in mind, let's build something awesome together.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-violet-600 hover:bg-violet-500 text-white transition-colors text-sm font-semibold px-5 py-2.5 rounded-lg shadow-lg group/link"
                  >
                    Let's talk
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </motion.div>

        <div className="lg:col-span-5">
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white mb-6 font-spacemono tracking-tight">
              My Skills
            </motion.h2>

            <div className="space-y-4 w-full">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`bg-card border border-subtle ${category.ring} p-5 rounded-2xl flex flex-col transition-all duration-300 shadow-sm`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`flex items-center justify-center w-9 h-9 rounded-xl bg-surface border border-subtle ${category.accent} shrink-0 shadow-sm`}>
                        <Icon size={18} strokeWidth={2.5} />
                      </span>
                      <h3 className="text-sm font-bold font-spacemono text-white tracking-wide">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center bg-surface border border-subtle text-gray-200 font-semibold text-sm px-3 py-1.5 rounded-md hover:text-white hover:border-second transition-colors shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Home;