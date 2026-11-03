import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          {/* Modal Dialog Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-2xl text-[#111110] dark:text-[#F2F4F6] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F2F4F6] dark:bg-[#222220] text-slate-500 hover:text-[#111110] dark:hover:text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] border border-[#9FCAFC]/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {project.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              {project.title}
            </h3>

            {/* Preview image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-[#E2E5E9] dark:border-[#2C2C2A]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Detailed Narrative */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A9A8]">
                Architecture &amp; System Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-[#A8A9A8] leading-relaxed">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* Key Features Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A9A8] mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#9FCAFC]" />
                <span>Implemented Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111110] dark:text-[#F2F4F6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9FCAFC] shrink-0 mt-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A9A8] mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#9FCAFC]" />
                <span>Technologies &amp; Libraries</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F2F4F6] dark:bg-[#222220] text-[#111110] dark:text-[#F2F4F6] border border-[#E2E5E9] dark:border-[#2C2C2A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#111110] dark:bg-[#222220] hover:bg-slate-800 dark:hover:bg-slate-700 border border-[#2C2C2A] transition-colors shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </motion.a>

                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#111110] bg-[#9FCAFC] hover:bg-[#88BCFB] transition-colors shadow-xs"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-medium text-slate-500 hover:text-[#111110] dark:hover:text-[#F2F4F6] transition-colors"
              >
                Close
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
