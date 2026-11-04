import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, ExternalLink, ArrowUpRight, Search, 
  Info, Sparkles, Filter 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { customEase } from '../utils/animations';
import { MaskedReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

const CATEGORIES = [
  'All',
  'Data Analytics',
  'Data Engineering',
  'Artificial Intelligence',
  'Computer Vision',
  'Full Stack',
  'IoT / Hardware'
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      p.category.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'Artificial Intelligence' && (p.category === 'AI/ML' || p.category === 'Artificial Intelligence')) ||
      (selectedCategory === 'IoT / Hardware' && (p.category === 'IoT / Hardware' || p.category.includes('IoT')));

    if (!searchQuery.trim()) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const matchesTitle = p.title.toLowerCase().includes(query);
    const matchesDesc = p.description.toLowerCase().includes(query);
    const matchesTech = p.technologies.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && (matchesTitle || matchesDesc || matchesTech);
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: customEase }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <MaskedReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
              Featured Projects &amp; Software Systems
            </h2>
          </MaskedReveal>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A8A9A8] max-w-2xl mx-auto">
            Practical, end-to-end applications spanning automated ETL data warehouses, LLM network diagnostics, real-time computer vision try-ons, and full-stack platforms.
          </p>
          <div className="w-16 h-1 bg-[#9FCAFC] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Tabs and Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: customEase }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
        >
          
          {/* Category Filter Pills with Layout Animation */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'text-[#F2F4F6] dark:text-[#111110] font-bold'
                    : 'bg-[#F2F4F6] dark:bg-[#191918] text-slate-600 dark:text-[#A8A9A8] border border-[#E2E5E9] dark:border-[#2C2C2A] hover:text-[#111110] dark:hover:text-[#F2F4F6]'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-[#111110] dark:bg-[#F2F4F6] rounded-full -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A9A8] pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs sm:text-sm bg-[#F2F4F6] dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] placeholder-[#A8A9A8] focus:outline-none focus:ring-2 focus:ring-[#9FCAFC]/50 shadow-2xs"
            />
          </div>

        </motion.div>

        {/* Project Cards Grid with Motion Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.55, ease: customEase }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                data-cursor="view"
                className="flex flex-col justify-between h-full rounded-3xl glass-panel border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] overflow-hidden group shadow-sm hover:border-[#9FCAFC]/60 hover:shadow-xl dark:hover:shadow-[0_16px_36px_rgba(159,202,252,0.12)] transition-colors duration-300 relative"
              >
                <SpotlightCard className="flex flex-col justify-between h-full w-full">
                  <div className="flex flex-col flex-1">
                    {/* Visual 16:9 Thumbnail with Zoom on Hover */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-[#E2E5E9] dark:border-[#2C2C2A]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#111110]/85 text-[#9FCAFC] border border-[#2C2C2A]/80 backdrop-blur-md shadow-xs">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-950/85 text-emerald-400 border border-emerald-800/80 backdrop-blur-md shadow-xs">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#111110] dark:text-[#F2F4F6] group-hover:text-[#9FCAFC] transition-colors mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A8A9A8] line-clamp-3 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Animated Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.05 }}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F2F4F6] dark:bg-[#222220] text-slate-700 dark:text-[#F2F4F6] border border-[#E2E5E9] dark:border-[#2C2C2A] cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-mono text-[#A8A9A8]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons with Micro-interactions */}
                <div className="p-5 sm:p-6 pt-3 border-t border-[#E2E5E9] dark:border-[#2C2C2A] flex items-center justify-between gap-2 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#111110] dark:text-[#9FCAFC] hover:underline focus:outline-none"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </motion.button>

                  <div className="flex items-center gap-2">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#F2F4F6] dark:bg-[#222220] text-slate-700 dark:text-[#F2F4F6] hover:text-[#9FCAFC] hover:bg-[#9FCAFC]/20 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </motion.a>

                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.92 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] hover:bg-[#9FCAFC] hover:text-[#111110] transition-colors"
                        title="Open Live Preview"
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#A8A9A8] font-mono text-sm">
              No projects found matching category "{selectedCategory}" or search term "{searchQuery}".
            </p>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
