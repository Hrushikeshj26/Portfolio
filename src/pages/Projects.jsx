import { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiCodeCurly } from "react-icons/bi";
import {
  ArrowUpRight,
  FolderGit2,
  Layers,
  Server,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import momento from "../assets/momento.JPG";
import nexora from "../assets/Nexora.png";
import novacrypto from "../assets/NovaCrypto.png";
import technest from "../assets/TechNest.jpg";
import cravingo from "../assets/cravingo.JPG";
// Uncomment the line below once you drop your FlowBox screenshot into ../assets/
// import flowbox from "../assets/flowbox.png";

const TECH_META = {
  "React.js": {
    icon: SiReact,
    color: "text-[#89b4fa]",
    ring: "border-[#89b4fa]/30 bg-[#89b4fa]/10",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "text-[#89dceb]",
    ring: "border-[#89dceb]/30 bg-[#89dceb]/10",
  },
  "Node.js": {
    icon: SiNodedotjs,
    color: "text-[#a6e3a1]",
    ring: "border-[#a6e3a1]/30 bg-[#a6e3a1]/10",
  },
  "Express.js": {
    icon: SiExpress,
    color: "text-[#cdd6f4]",
    ring: "border-[#cdd6f4]/30 bg-[#cdd6f4]/10",
  },
  MongoDB: {
    icon: SiMongodb,
    color: "text-[#a6e3a1]",
    ring: "border-[#a6e3a1]/30 bg-[#a6e3a1]/10",
  },
  Supabase: {
    icon: SiSupabase,
    color: "text-[#94e2d5]",
    ring: "border-[#94e2d5]/30 bg-[#94e2d5]/10",
  },
  "Context API": {
    icon: BiCodeCurly,
    color: "text-[#cba6f7]",
    ring: "border-[#cba6f7]/30 bg-[#cba6f7]/10",
  },
  "REST API": {
    icon: TbApi,
    color: "text-[#f9e2af]",
    ring: "border-[#f9e2af]/30 bg-[#f9e2af]/10",
  },
  "React Router": {
    icon: SiReactrouter,
    color: "text-[#f38ba8]",
    ring: "border-[#f38ba8]/30 bg-[#f38ba8]/10",
  },
};

const techMeta = (tech) =>
  TECH_META[tech] || {
    icon: BiCodeCurly,
    color: "text-gray-300",
    ring: "border-subtle bg-surface",
  };

const projectsData = [
  {
    id: 1,
    title: "FlowBox",
    category: "Full-Stack",
    subtitle: "Inventory & Analytics System",
    featured: true,
    description:
      "A full-stack inventory management platform engineered with a custom REST API and MongoDB Atlas. Features real-time stock tracking, low-inventory alerts, movement logs, and interactive dashboard analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "https://github.com/Hrushikeshj26/FlowBox",
    image: null,
  },
  {
    id: 2,
    title: "Cravingo",
    category: "Full-Stack",
    subtitle: "Food Delivery & KDS Portal",
    featured: true,
    description:
      "A full-stack food delivery and restaurant management platform featuring a customer ordering system and an Admin Portal (KDS) for live order tracking, menu management, and role-based authentication.",
    tech: ["React.js", "Tailwind CSS", "Supabase"],
    liveLink: "#",
    repoLink: "https://github.com/Hrushikeshj26/Cravingo",
    image: cravingo,
  },
  {
    id: 3,
    title: "Momento",
    category: "Full-Stack",
    subtitle: "Real-Time Social Platform",
    featured: true,
    description:
      "A real-time social platform featuring secure user authentication, live database synchronization, image uploads, instant notifications, and optimistic UI updates for likes and comments with a mobile-first architecture.",
    tech: ["React.js", "Supabase", "Tailwind CSS"],
    liveLink:
      "https://www.linkedin.com/posts/hrushikeshj26_reactjs-tailwindcss-supabase-ugcPost-7469005036220530688-cKyO",
    repoLink: "https://github.com/Hrushikeshj26/Momento",
    image: momento,
  },
  {
    id: 4,
    title: "Nexora",
    category: "Frontend",
    subtitle: "E-Commerce Storefront",
    featured: false,
    description:
      "A responsive smartphone e-commerce interface equipped with detailed product pages, dynamic add/remove cart functionality, quantity updates, and persistent cart storage using localStorage.",
    tech: ["React.js", "Tailwind CSS", "Context API"],
    liveLink: "https://nexora-shop.vercel.app/",
    repoLink: "https://github.com/Hrushikeshj26/Nexora",
    image: nexora,
  },
  {
    id: 5,
    title: "NovaCrypto",
    category: "Frontend",
    subtitle: "Live Data Dashboard",
    featured: false,
    description:
      "A real-time data tracking dashboard powered by external REST APIs. Includes interactive historical charts, instant search filtering, pagination, and dynamic routing.",
    tech: ["React.js", "Tailwind CSS", "REST API"],
    liveLink: "https://novacrypto.vercel.app/",
    repoLink: "https://github.com/Hrushikeshj26/NovaCrypto",
    image: novacrypto,
  },
  {
    id: 6,
    title: "TechNest",
    category: "Frontend",
    subtitle: "Content & Blog Platform",
    featured: false,
    description:
      "A responsive personal tech blog built with dynamic routing and search functionality. Features reusable components and optimized typography for a seamless reading experience.",
    tech: ["React.js", "Tailwind CSS", "React Router"],
    liveLink: "https://tech-nestt.vercel.app/",
    repoLink: "https://github.com/Hrushikeshj26/TechNest",
    image: technest,
  },
];

const filters = ["All", "Full-Stack", "Frontend"];

const ProjectCard = ({ project, index }) => {
  const [imgError, setImgError] = useState(false);
  const hasLiveLink = project.liveLink && project.liveLink !== "#";
  const isFullStack = project.category === "Full-Stack";

  return (
    <div className="group relative bg-card border-2 border-subtle hover:border-second rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_16px_40px_-12px_rgba(137,180,250,0.2)] flex flex-col h-full transition-all duration-300">
      <div className="h-1 w-full bg-linear-to-r from-[#89b4fa] via-[#cba6f7] to-[#f38ba8] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Media / Preview Header */}
      <div className="relative aspect-16/10 overflow-hidden bg-surface border-b border-subtle group-hover:border-second transition-colors duration-300">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            onError={() => setImgError(true)}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-6 bg-linear-to-br from-surface via-card to-surface relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#89b4fa 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f38ba8]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f9e2af]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#a6e3a1]/80" />
              </div>
              <span className="text-[10px] font-spacemono text-gray-400 uppercase tracking-widest">
                {project.title.toLowerCase()}.app
              </span>
            </div>

            <div className="relative z-10 my-auto flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-second/40 border border-second flex items-center justify-center text-[#89b4fa] mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <FolderGit2 size={28} strokeWidth={1.75} />
              </div>
              <p className="text-white font-spacemono font-bold text-base tracking-tight">
                {project.title}
              </p>
              <p className="text-xs text-gray-400 font-spacemono mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <div className="relative z-10 flex justify-center gap-2">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-spacemono px-2 py-0.5 rounded bg-card/90 text-gray-300 border border-subtle"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-spacemono font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm ${
              isFullStack
                ? "bg-main/85 text-[#a6e3a1] border-[#a6e3a1]/30"
                : "bg-main/85 text-[#89b4fa] border-[#89b4fa]/30"
            }`}
          >
            {isFullStack ? <Server size={12} /> : <Layers size={12} />}
            {project.category}
          </span>

          <span className="px-2.5 py-1 rounded-md text-xs font-spacemono font-bold bg-main/85 text-gray-300 border border-subtle backdrop-blur-md">
            0{index + 1}
          </span>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-main/95 via-main/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {hasLiveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} live`}
            className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none z-20"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 bg-[#89b4fa] text-main text-xs font-spacemono font-bold px-4 py-2 rounded-full translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
            >
              Open Live App
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </motion.span>
          </a>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="mb-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-white font-bold text-xl font-spacemono tracking-tight group-hover:text-[#89b4fa] transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-spacemono uppercase tracking-wider text-[#cba6f7] bg-[#cba6f7]/10 border border-[#cba6f7]/25 px-2 py-0.5 rounded-full">
                <Sparkles size={10} /> Featured
              </span>
            )}
          </div>
          <p className="text-xs font-spacemono text-second mt-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((tech) => {
            const { icon: Icon, color, ring } = techMeta(tech);
            return (
              <span
                key={tech}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-transform duration-200 hover:scale-105 ${ring} ${color}`}
              >
                <Icon size={13} />
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-3 pt-5 border-t border-subtle">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex justify-center items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-surface border border-subtle hover:border-second hover:bg-second px-4 py-2.5 rounded-xl transition-colors duration-200"
          >
            <FaGithub size={15} />
            Source Code
          </motion.a>

          {hasLiveLink ? (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex justify-center items-center gap-1.5 text-xs sm:text-sm font-semibold text-btn bg-btn hover:bg-btn-hover px-4 py-2.5 rounded-xl transition-colors duration-200 shadow-md"
            >
              Live Demo
              <ExternalLink size={14} />
            </motion.a>
          ) : (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-1.5 text-xs font-spacemono text-gray-400 hover:text-white bg-surface/50 border border-subtle px-3.5 py-2.5 rounded-xl transition-colors duration-200"
              title="Check repository README for architecture & setup"
            >
              README
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const fullStackCount = projectsData.filter(
    (p) => p.category === "Full-Stack",
  ).length;
  const frontendCount = projectsData.filter(
    (p) => p.category === "Frontend",
  ).length;

  const getCount = (filter) => {
    if (filter === "All") return projectsData.length;
    if (filter === "Full-Stack") return fullStackCount;
    return frontendCount;
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Banner */}
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

      {/* Header */}
      <div className="px-6 md:px-10 lg:px-12 relative z-10 -mt-16 sm:-mt-20 mb-12">
        <div className="border-2 border-second rounded-2xl p-7 sm:p-10 shadow-2xl backdrop-blur-3xl max-w-4xl">
          <p className="text-xs font-spacemono uppercase tracking-widest text-second mb-3 font-bold">
            {projectsData.length} projects shipped
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-spacemono text-white tracking-tight mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            Builded complete digital products from the database schema to the
            client interface, designed with real-world functionality and
            performance in mind.
          </p>
        </div>
      </div>

      {/* Filter Bar & Projects Grid */}
      <div className="px-6 md:px-10 mx-auto max-w-7xl lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-5 border-b border-subtle">
          <div className="flex flex-wrap items-center gap-2.5">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-spacemono font-bold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-second text-white border-main shadow-md"
                      : "bg-card text-gray-400 border-subtle hover:border-second hover:text-gray-200"
                  }`}
                >
                  <span>{filter}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-md ${
                      isActive
                        ? "bg-main/60 text-[#89b4fa]"
                        : "bg-surface text-gray-400"
                    }`}
                  >
                    {getCount(filter)}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-xs font-spacemono text-gray-400 hidden sm:block">
            Showing{" "}
            <span className="text-white font-bold">
              {filteredProjects.length}
            </span>{" "}
            {activeFilter === "All" ? "total" : activeFilter.toLowerCase()}{" "}
            builds
          </p>
        </div>

        {/* Clean Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
