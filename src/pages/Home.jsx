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
import { Link } from "react-router-dom";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    accent: "text-sky-300",
    dot: "bg-sky-400",
    ring: "hover:border-sky-500/40",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    accent: "text-violet-300",
    dot: "bg-violet-400",
    ring: "hover:border-violet-500/40",
    skills: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Database,
    accent: "text-emerald-300",
    dot: "bg-emerald-400",
    ring: "hover:border-emerald-500/40",
    skills: ["Supabase", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    accent: "text-amber-300",
    dot: "bg-amber-400",
    ring: "hover:border-amber-500/40",
    skills: ["Git", "GitHub", "Figma", "Chrome DevTools", "Vercel", "Netlify"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    accent: "text-rose-300",
    dot: "bg-rose-400",
    ring: "hover:border-rose-500/40",
    skills: ["Problem Solving", "Communication", "Attention to Detail"],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen pb-10">
      {/* Banner */}
      <div className="min-h-40 w-full bg-linear-to-r from-violet-800 to-violet-950 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.4) 0, rgba(139, 92, 246, 0.4) 1px, transparent 1px, transparent 32px),
              repeating-linear-gradient(-45deg, rgba(139, 92, 246, 0.4) 0, rgba(139, 92, 246, 0.4) 1px, transparent 1px, transparent 32px)
            `,
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      {/* Profile Header */}
      <div className="px-6 md:px-10 lg:px-12 flex flex-col sm:flex-row items-center sm:items-end w-full relative z-10 -mt-16 sm:-mt-20 mb-12 gap-4 sm:gap-6">
        {/* Avatar */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-main overflow-hidden bg-surface shrink-0 shadow-xl">
          <img
            src={profilepic}
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Info & Action */}
        <div className="flex flex-col items-center sm:items-end justify-between w-full text-center sm:text-left gap-6 sm:gap-0">
          <div className="md:flex-row flex flex-col items-center justify-between w-full gap-6">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold font-spacemono text-white tracking-tight">
                Hrushikesh Jadhav
              </h1>
              <p className="text-gray-300 font-spacemono text-sm sm:text-base">
                Frontend Developer
              </p>
            </div>
            <button className="w-full md:w-auto sm:w-auto flex justify-center items-center space-x-3 bg-btn hover:bg-btn-hover text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-violet-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-900">
              <span>Download Resume</span>
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column (Spans 7/12 on large screens) */}
        <div className="lg:col-span-7 space-y-10">
          {/* About Me */}
          <section className="flex flex-col">
            <h2 className="text-xl font-bold text-white mb-4">About me</h2>
            <div className="text-gray-300/80 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                I'm a frontend developer and programmer based in India,
                dedicated to crafting clean, modern, and aesthetic user
                interfaces. With a strong foundation in React.js, JavaScript,
                and Tailwind CSS, I focus on building responsive and
                accessible web applications. I love bridging the gap between
                design and engineering to deliver engaging digital
                experiences.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium text-sm sm:text-base mt-4 transition-colors group/about"
            >
              Read more
              <ArrowRight
                size={15}
                className="ml-1.5 transition-transform group-hover/about:translate-x-1"
              />
            </Link>
          </section>

          {/* Availability / Open to Work */}
          <section>
            <div className="bg-card border-2 border-main hover:border-violet-500/50 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 shadow-lg relative group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl -mr-10 -mt-10 transition-colors group-hover:bg-violet-600/20"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center space-y-5 sm:space-y-0 sm:space-x-6">
                {/* Icon Ring */}
                <div className="p-4 bg-surface border border-subtle rounded-full text-violet-100 shrink-0">
                  <Briefcase size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <h3 className="text-white text-lg font-semibold">
                      Open to Opportunities
                    </h3>
                    {/* Pulsing Available Badge */}
                    <span className="inline-flex w-max items-center text-xs font-medium text-violet-200 bg-surface px-3 py-1.5 rounded-full">
                      <span className="relative flex w-2 h-2 mr-2">
                        <span className="absolute inline-flex w-full h-full bg-violet-500 rounded-full opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-2 h-2 bg-violet-500 rounded-full"></span>
                      </span>
                      Available Now
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-lg">
                    I am currently open to freelance projects, contract work,
                    and full-time frontend developer roles. If you have an
                    exciting project in mind, let's build something awesome
                    together.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors text-sm font-semibold group/link"
                  >
                    Let's talk
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Spans 5/12 on large screens) */}
        <div className="lg:col-span-5 space-y-8">
          <section>
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-xl font-bold text-white">My Skills</h2>
            </div>

            <div className="space-y-3.5 w-full">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.title}
                    className={`bg-card ${category.ring} py-4 px-5 border-2 border-gray-700 rounded-xl flex flex-col transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <span
                        className={`flex items-center justify-center w-7 h-7 rounded-lg bg-surface ${category.accent} shrink-0`}
                      >
                        <Icon size={15} strokeWidth={2.25} />
                      </span>
                      <h3 className="text-xs font-semibold font-spacemono text-gray-300 uppercase tracking-widest">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 bg-surface tracking-wide text-gray-300 font-medium text-xs sm:text-sm px-3 py-1.5 rounded-lg hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;