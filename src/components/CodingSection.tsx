import React from 'react';
import { Terminal, Database, Code, ExternalLink, Award, CheckCircle2, Flame } from 'lucide-react';
import { GithubIcon } from './Icons';
import { LEETCODE_DATA } from '../data/portfolioData';

export const CodingSection: React.FC = () => {
  return (
    <section id="coding" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#080E1A]/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Problem Solving &amp; Algorithms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            LeetCode DSA &amp; SQL Mastery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Disciplined daily algorithmic practice in Python and advanced SQL database querying.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats Strip & Profile Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Summary Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0D1524] text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold font-mono text-cyan-500 mb-1">
                  {LEETCODE_DATA.totalSolved}
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Total Solved Problems
                </span>
              </div>
              
              <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0D1524] text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold font-mono text-indigo-500 mb-1">
                  {LEETCODE_DATA.pythonDSAProblems}
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Python DSA Solutions
                </span>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0D1524] text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold font-mono text-emerald-500 mb-1">
                  {LEETCODE_DATA.sqlSolved}
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  SQL Queries (SQL 50)
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every solution in my GitHub solutions repository is documented with mathematical time &amp; space complexity analysis, intuition notes, and multiple approaches—from brute-force to optimal pointer and hash strategies.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={LEETCODE_DATA.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={LEETCODE_DATA.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-cyan-500 transition-all hover:scale-[1.02]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>LeetCode Solutions Repo</span>
              </a>
            </div>
          </div>

          {/* Right: Verified Badges Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0D1524] shadow-lg">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Verified LeetCode Badges</span>
              </h3>

              <div className="space-y-4">
                {LEETCODE_DATA.badges.map((badge) => (
                  <div
                    key={badge.name}
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60"
                  >
                    <div className="w-14 h-14 rounded-xl bg-slate-950 p-1 shrink-0 flex items-center justify-center border border-slate-800 shadow-sm">
                      <img src={badge.image} alt={badge.name} className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {badge.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* DSA & SQL Breakdown Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: Python DSA Topics */}
          <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-[#0D1524]/60">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Python Data Structures &amp; Algorithms
                </h3>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  Core Problem Patterns
                </span>
              </div>
            </div>

            <div className="space-y-3.5">
              {LEETCODE_DATA.topicsPythonDSA.map((topic) => (
                <div key={topic.name} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      {topic.name}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                      {topic.count}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Examples: {topic.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: SQL Patterns */}
          <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-[#0D1524]/60">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Relational SQL &amp; Data Engineering Queries
                </h3>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                  SQL 50 Mastery
                </span>
              </div>
            </div>

            <div className="space-y-3.5">
              {LEETCODE_DATA.topicsSQL.map((sqlTopic) => (
                <div key={sqlTopic.name} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                  <span className="block text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {sqlTopic.name}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {sqlTopic.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
