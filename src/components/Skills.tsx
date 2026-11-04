import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, BarChart3, Database, Cpu, Eye, Globe, Cloud, ShieldAlert, 
  Search, CheckCircle, Sparkles 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { customEase } from '../utils/animations';
import { MaskedReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />
};

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    const matchesCategory = selectedCategory === 'all' || category.title.toLowerCase().includes(selectedCategory.toLowerCase());
    
    if (!searchTerm.trim()) return matchesCategory;

    const lowerQuery = searchTerm.toLowerCase();
    const hasMatchingSkill = category.skills.some((skill) =>
      skill.toLowerCase().includes(lowerQuery)
    );
    const hasMatchingTitle = category.title.toLowerCase().includes(lowerQuery);

    return matchesCategory && (hasMatchingSkill || hasMatchingTitle);
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#F2F4F6] dark:bg-[#111110]">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <MaskedReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
              Engineering Skills &amp; Technology Stack
            </h2>
          </MaskedReveal>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A8A9A8] max-w-2xl mx-auto">
            Systematically categorized technologies backed by real codebases, academic projects, and industry virtual internships. No inflated percentages—only verified proficiency.
          </p>
          <div className="w-16 h-1 bg-[#9FCAFC] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Search & Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: customEase }}
          className="max-w-3xl mx-auto mb-12 flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A9A8] pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by skill (e.g. Python, Power BI, OpenCV, React, AWS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] placeholder-[#A8A9A8] focus:outline-none focus:ring-2 focus:ring-[#9FCAFC]/50 transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#111110] dark:bg-[#F2F4F6] text-[#F2F4F6] dark:text-[#111110] shadow-sm'
                  : 'bg-white dark:bg-[#191918] text-slate-600 dark:text-[#A8A9A8] border border-[#E2E5E9] dark:border-[#2C2C2A] hover:text-[#111110] dark:hover:text-[#F2F4F6]'
              }`}
            >
              All Categories
            </button>
          </div>
        </motion.div>

        {/* Skills Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category, idx) => {
              const hasMatch = searchTerm
                ? category.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
                : true;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.55, ease: customEase }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className={`flex flex-col justify-between rounded-3xl glass-panel border transition-colors duration-300 overflow-hidden ${
                    hasMatch
                      ? 'border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] hover:border-[#9FCAFC]/60 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(159,202,252,0.1)]'
                      : 'opacity-40'
                  }`}
                >
                  <SpotlightCard className="p-6 flex flex-col justify-between h-full w-full">
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 text-[#111110] dark:text-[#9FCAFC] flex items-center justify-center shrink-0">
                          {ICON_MAP[category.iconName] || <Code2 className="w-5 h-5" />}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#111110] dark:text-[#F2F4F6] leading-snug">
                            {category.title}
                          </h3>
                          <span className="text-[11px] font-mono text-[#9FCAFC]">
                            {category.skills.length} competencies
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-[#A8A9A8] mb-5 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Animated Skills Pills */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => {
                          const isHighlighted = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                          return (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.96 }}
                              className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-default ${
                                isHighlighted
                                  ? 'bg-[#9FCAFC] text-[#111110] font-bold shadow-md shadow-[#9FCAFC]/30'
                                  : 'bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] text-slate-700 dark:text-[#F2F4F6] hover:border-[#9FCAFC] hover:text-[#9FCAFC]'
                              }`}
                            >
                              {skill}
                            </motion.span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 mt-6 border-t border-[#E2E5E9] dark:border-[#2C2C2A] flex items-center justify-between text-[11px] font-mono text-[#A8A9A8]">
                      <span>Verified Stack</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#A8A9A8] font-mono text-sm">
              No matching skills found for "{searchTerm}". Try another keyword or clear the search.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
