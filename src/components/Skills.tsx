import React, { useState } from 'react';
import { 
  Code2, BarChart3, Database, Cpu, Eye, Globe, Cloud, ShieldAlert, 
  Search, CheckCircle, Sparkles, Filter 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

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
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-[#060B13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Skills &amp; Technology Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Systematically categorized technologies backed by real codebases, academic projects, and industry virtual internships. No inflated percentages—only verified proficiency.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-3xl mx-auto mb-12 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by skill (e.g. Python, Power BI, OpenCV, React, AWS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Categories
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => {
            const hasMatch = searchTerm
              ? category.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
              : true;

            return (
              <div
                key={category.title}
                className={`flex flex-col justify-between p-6 rounded-2xl glass-panel border transition-all duration-300 ${
                  hasMatch
                    ? 'border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-[#0D1524]/60 hover:border-cyan-500/40 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(0,240,255,0.08)]'
                    : 'opacity-40'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      {ICON_MAP[category.iconName] || <Code2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isHighlighted = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                            isHighlighted
                              ? 'bg-cyan-500 text-slate-950 font-bold scale-105 shadow-md shadow-cyan-500/30'
                              : 'bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Verified Stack</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 font-mono text-sm">
              No matching skills found for "{searchTerm}". Try another keyword or clear the search.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

