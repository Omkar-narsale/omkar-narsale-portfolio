import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, FolderGit2, Sparkles, Award } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Contact } from '../components/Contact';
import { PROJECTS, LEETCODE_DATA } from '../data/portfolioData';
import { SpotlightCard } from '../components/SpotlightCard';
import { MaskedReveal } from '../components/ScrollReveal';
import { customEase } from '../utils/animations';

export const HomePage: React.FC = () => {
  // Top 3 Flagship Projects for the homepage preview
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* 1. Ethan Minimalist Hero */}
      <Hero />

      {/* 2. Curated Projects Highlight */}
      <section className="py-20 relative bg-white dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 mb-3">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Selected Works</span>
              </div>
              <MaskedReveal>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
                  Flagship Software Systems
                </h2>
              </MaskedReveal>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111110] dark:text-[#9FCAFC] hover:underline group"
            >
              <span>Explore All {PROJECTS.length} Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: customEase }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                data-cursor="view"
                className="flex flex-col justify-between h-full rounded-3xl glass-panel border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] overflow-hidden group shadow-sm hover:border-[#9FCAFC]/60 hover:shadow-xl dark:hover:shadow-[0_16px_36px_rgba(159,202,252,0.12)] transition-colors duration-300 relative"
              >
                <SpotlightCard className="flex flex-col justify-between h-full w-full">
                  <div className="flex flex-col flex-1">
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-[#E2E5E9] dark:border-[#2C2C2A]">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#111110]/85 text-[#9FCAFC] border border-[#2C2C2A]/80 backdrop-blur-md">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-950/85 text-emerald-400 border border-emerald-800/80 backdrop-blur-md">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-[#111110] dark:text-[#F2F4F6] group-hover:text-[#9FCAFC] transition-colors mb-2 leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-[#A8A9A8] line-clamp-3 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F2F4F6] dark:bg-[#222220] text-slate-700 dark:text-[#F2F4F6] border border-[#E2E5E9] dark:border-[#2C2C2A]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to="/projects"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#F2F4F6] dark:bg-[#222220] hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:bg-[#9FCAFC] dark:hover:text-[#111110] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>View Project Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Problem Solving / LeetCode Preview Strip */}
      <section className="py-20 bg-[#F2F4F6] dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Algorithmic Rigor</span>
              </div>
              <MaskedReveal>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
                  115+ Solved DSA &amp; SQL Queries
                </h2>
              </MaskedReveal>
              <p className="text-sm text-slate-600 dark:text-[#A8A9A8] leading-relaxed max-w-xl">
                Disciplined daily problem-solving on LeetCode with mathematically proven time &amp; space complexities, two-pointer paradigms, and advanced SQL window functions.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-[#111110] dark:text-[#9FCAFC]">
                    {LEETCODE_DATA.totalSolved}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-[#A8A9A8]">Total Solved</span>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-indigo-500 dark:text-indigo-400">
                    {LEETCODE_DATA.pythonDSAProblems}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-[#A8A9A8]">Python DSA</span>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-emerald-500 dark:text-emerald-400">
                    {LEETCODE_DATA.sqlSolved}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-[#A8A9A8]">SQL 50</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/coding"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#111110] text-[#F2F4F6] dark:bg-[#F2F4F6] dark:text-[#111110] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] transition-colors"
                >
                  <span>Explore LeetCode Page &amp; Badges</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Badges Preview on Right */}
            <div className="lg:col-span-5">
              <SpotlightCard className="p-6 rounded-3xl bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-sm">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#111110] dark:text-[#F2F4F6] mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Verified LeetCode Badges</span>
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {LEETCODE_DATA.badges.map((b) => (
                    <div key={b.name} className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A]">
                      <img src={b.image} alt={b.name} className="w-12 h-12 object-contain mb-2" />
                      <span className="text-[11px] font-semibold text-[#111110] dark:text-[#F2F4F6] leading-tight">
                        {b.name}
                      </span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Contact Section */}
      <Contact />
    </div>
  );
};

export default HomePage;
