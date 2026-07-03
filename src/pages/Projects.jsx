import { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiReactrouter,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiCodeCurly } from "react-icons/bi";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import momento from '../assets/momento.JPG';
import nexora from '../assets/Nexora.png';
import novacrypto from '../assets/NovaCrypto.png';
import technest from '../assets/TechNest.jpg';
import cravingo from '../assets/cravingo.JPG'

const TECH_META = {
  "React.js": { icon: SiReact, color: "text-sky-400", ring: "border-sky-500/30 bg-sky-500/10" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-400", ring: "border-cyan-500/30 bg-cyan-500/10" },
  "Supabase": { icon: SiSupabase, color: "text-emerald-400", ring: "border-emerald-500/30 bg-emerald-500/10" },
  "Context API": { icon: BiCodeCurly, color: "text-violet-400", ring: "border-violet-500/30 bg-violet-500/10" },
  "CoinGecko API": { icon: TbApi, color: "text-amber-400", ring: "border-amber-500/30 bg-amber-500/10" },
  "React Router": { icon: SiReactrouter, color: "text-rose-400", ring: "border-rose-500/30 bg-rose-500/10" },
};

const techMeta = (tech) =>
  TECH_META[tech] || { icon: BiCodeCurly, color: "text-gray-300", ring: "border-subtle bg-surface" };

const projectsData = [
  {
    id: 1,
    title: "Cravingo",
    description:
      "A full-stack food delivery and restaurant management platform featuring a customer ordering system and an Admin Portal (KDS) for live order tracking, menu management, and role-based authentication.",
    tech: ["React.js", "Tailwind CSS", "Supabase"],
    liveLink: "#",
    repoLink: "https://github.com/Hrushikeshj26/Cravingo",
    image: cravingo
  },
  {
    id: 2,
    title: "Momento",
    description:
      "A real-time social platform featuring secure user authentication, live database synchronization, image uploads, instant notifications, and optimistic UI updates for likes and comments with a mobile-first architecture.",
    tech: ["React.js", "Supabase", "Tailwind CSS"],
    liveLink: "https://www.linkedin.com/posts/hrushikeshj26_reactjs-tailwindcss-supabase-ugcPost-7469005036220530688-cKyO",
    repoLink: "https://github.com/Hrushikeshj26/Momento",
    image: momento,
  },
  {
    id: 3,
    title: "Nexora",
    description:
      "A responsive smartphone e-commerce interface equipped with detailed product pages, dynamic add/remove cart functionality, quantity updates, and persistent cart storage using localStorage.",
    tech: ["React.js", "Tailwind CSS", "Context API"],
    liveLink: "https://nexora-shop.vercel.app/",
    repoLink: "https://github.com/Hrushikeshj26/Nexora",
    image: nexora,
  },
  {
    id: 4,
    title: "NovaCrypto",
    description:
      "A cryptocurrency tracking dashboard that fetches real-time market data via the CoinGecko API. Includes interactive historical price charts, a search feature, pagination, and dynamic routing.",
    tech: ["React.js", "Tailwind CSS", "CoinGecko API"],
    liveLink: "https://novacrypto.vercel.app/",
    repoLink: "https://github.com/Hrushikeshj26/NovaCrypto",
    image: novacrypto,
  },
  {
    id: 5,
    title: "TechNest",
    description:
      "A responsive personal tech blog built with dynamic routing and search functionality. Features reusable components and optimized typography for a seamless reading experience.",
    tech: ["React.js", "Tailwind CSS", "React Router"],
    liveLink: "https://tech-nestt.vercel.app/",
    repoLink: "https://github.com/Hrushikeshj26/TechNest",
    image: technest
  },
];


const ProjectCard = ({ project, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group  relative bg-card border border-subtle hover:border-second rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_12px_30px_rgba(89,75,160,0.25)] flex flex-col h-full transition-colors duration-300 grow"
    >
      
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-surface border-b border-subtle group-hover:border-second transition-colors duration-300">
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            onError={() => setImgError(true)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/40 bg-surface">
            <FolderGit2 size={40} strokeWidth={1.5} />
          </div>
        )}

        {/* Gradient wash for legibility + hover-reveal CTA */}
        <div className="absolute inset-0 bg-linear-to-t from-main/90 via-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} live`}
          className="absolute inset-0 flex items-end justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 bg-btn text-white text-xs font-bold px-4 py-2 rounded-full translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-second/50"
          >
            Live Demo
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </motion.span>
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="text-white font-bold text-xl mb-3 font-spacemono tracking-tight transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tech.map((tech) => {
            const { icon: Icon, color, ring } = techMeta(tech);
            return (
              <span
                key={tech}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-md border ${ring} ${color}`}
              >
                <Icon size={14} />
                {tech}
              </span>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center pt-5 border-t border-subtle">
          <motion.a
            // 3. Tactile button physics
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex justify-center items-center gap-2 text-sm font-semibold text-white bg-surface border border-subtle hover:border-second hover:bg-second px-4 py-2.5 rounded-lg transition-colors duration-200"
          >
            <FaGithub size={16} />
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pb-16">
      
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

      {/* Header */}
      <div className="px-6 md:px-10 lg:px-12 relative z-10 -mt-16 sm:-mt-20 mb-12">
        <div className="border-2 border-second rounded-2xl p-7 sm:p-10 shadow-2xl backdrop-blur-3xl max-w-4xl">
          <p className="text-xs font-spacemono uppercase tracking-widest text-violet-400 mb-3 font-bold">
            {projectsData.length} projects shipped
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-spacemono text-white tracking-tight mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            A collection of full-stack apps and tools I've built end to
            end — from database schema to the pixel on screen. Each one
            shipped with real users and real edge cases in mind.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-10 mx-auto max-w-7xl lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project}index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;