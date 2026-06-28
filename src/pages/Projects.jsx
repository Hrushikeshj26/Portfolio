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

// Make sure your path is correct here!
import momento from '../assets/momento.png';

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
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Momento",
    description:
      "A real-time social platform featuring secure user authentication, live database synchronization, image uploads, instant notifications, and optimistic UI updates for likes and comments with a mobile-first architecture.",
    tech: ["React.js", "Supabase", "Tailwind CSS"],
    liveLink: "https://www.linkedin.com/posts/hrushikeshj26_reactjs-tailwindcss-supabase-ugcPost-7469005036220530688-cKyO",
    repoLink: "#",
    image: momento, // FIX: Removed the curly brackets here!
  },
  {
    id: 3,
    title: "Nexora",
    description:
      "A responsive smartphone e-commerce interface equipped with detailed product pages, dynamic add/remove cart functionality, quantity updates, and persistent cart storage using localStorage.",
    tech: ["React.js", "Tailwind CSS", "Context API"],
    liveLink: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "NovaCrypto",
    description:
      "A cryptocurrency tracking dashboard that fetches real-time market data via the CoinGecko API. Includes interactive historical price charts, a search feature, pagination, and dynamic routing.",
    tech: ["React.js", "Tailwind CSS", "CoinGecko API"],
    liveLink: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1621504450181-5d156f828f16?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "TechNest",
    description:
      "A responsive personal tech blog built with dynamic routing and search functionality. Features reusable components and optimized typography for a seamless reading experience.",
    tech: ["React.js", "Tailwind CSS", "React Router"],
    liveLink: "#",
    repoLink: "#",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
  },
];

const ProjectCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-card border border-second hover:border-violet-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-violet-500/10 flex flex-col h-full">
      
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-surface border-b border-second">
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            onError={() => setImgError(true)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 bg-surface">
            <FolderGit2 size={40} strokeWidth={1} />
          </div>
        )}

        {/* Gradient wash for legibility + hover-reveal CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} live`}
          className="absolute inset-0 flex items-end justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none"
        >
          <span className="inline-flex items-center gap-1.5 bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
            Live Demo
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-white font-bold text-xl mb-2 font-spacemono tracking-tight group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
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
        <div className="flex items-center gap-4 pt-4 border-t border-subtle">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex justify-center items-center gap-2 text-sm font-semibold text-gray-300 bg-surface hover:bg-second border border-subtle hover:border-violet-500/30 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
          >
            <FaGithub size={16} />
            Source Code
          </a>
        </div>
      </div>
    </div>
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
        <div className="bg-card border border-second rounded-2xl p-7 sm:p-10 shadow-2xl backdrop-blur-sm">
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
      <div className="px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;