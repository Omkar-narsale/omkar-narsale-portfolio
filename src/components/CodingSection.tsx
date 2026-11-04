import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, ExternalLink, Award, Flame } from 'lucide-react';
import { GithubIcon } from './Icons';
import { LEETCODE_DATA } from '../data/portfolioData';
import { customEase } from '../utils/animations';
import { MaskedReveal } from './ScrollReveal';

export const CodingSection: React.FC = () => {
  return (
    <section id="coding" className="py-24 relative overflow-hidden bg-white dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: customEase }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Problem Solving &amp; Algorithms</span>
          </div>
          <MaskedReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
              LeetCode DSA &amp; SQL Mastery
            </h2>
          </MaskedReveal>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A8A9A8]">
            Disciplined daily algorithmic practice in Python and advanced SQL database querying.
          </p>
          <div className="w-16 h-1 bg-[#9FCAFC] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Stats Strip & Profile Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Summary Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: customEase }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { count: LEETCODE_DATA.totalSolved, label: 'Total Solved Problems', color: 'text-[#111110] dark:text-[#9FCAFC]' },
                { count: LEETCODE_DATA.pythonDSAProblems, label: 'Python DSA Solutions', color: 'text-indigo-500 dark:text-indigo-400' },
                { count: LEETCODE_DATA.sqlSolved, label: 'SQL Queries (SQL 50)', color: 'text-emerald-500 dark:text-emerald-400' },
              ].map((stat, sIdx) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl glass-panel border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] text-center shadow-2xs hover:shadow-md transition-shadow"
                >
                  <span className={`block text-3xl sm:text-4xl font-extrabold font-mono ${stat.color} mb-1`}>
                    {stat.count}
                  </span>
                  <span className="text-xs font-medium text-slate-600 dark:text-[#A8A9A8]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-slate-600 dark:text-[#A8A9A8] leading-relaxed">
              Every solution in my GitHub solutions repository is documented with mathematical time &amp; space complexity analysis, intuition notes, and multiple approaches—from brute-force to optimal pointer and hash strategies.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={LEETCODE_DATA.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 shadow-sm transition-colors"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={LEETCODE_DATA.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#111110] dark:text-[#F2F4F6] bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] hover:border-[#9FCAFC] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>LeetCode Solutions Repo</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Verified Badges Card with Staggered Badge Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: customEase }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-3xl glass-panel border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] shadow-sm">
              <h3 className="text-base font-bold text-[#111110] dark:text-[#F2F4F6] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Verified LeetCode Badges</span>
              </h3>

              <div className="space-y-3.5">
                {LEETCODE_DATA.badges.map((badge, bIdx) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: bIdx * 0.1, duration: 0.5, ease: customEase }}
                    whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] cursor-default"
                  >
                    <div className="w-14 h-14 rounded-xl bg-slate-950 p-1 shrink-0 flex items-center justify-center border border-slate-800 shadow-2xs">
                      <img src={badge.image} alt={badge.name} className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#111110] dark:text-[#F2F4F6]">
                        {badge.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-[#A8A9A8] leading-snug mt-0.5">
                        {badge.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* DSA & SQL Breakdown Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: Python DSA Topics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="p-6 sm:p-7 rounded-3xl glass-panel border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918]"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 text-[#111110] dark:text-[#9FCAFC] flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111110] dark:text-[#F2F4F6]">
                  Python Data Structures &amp; Algorithms
                </h3>
                <span className="text-xs font-mono text-[#9FCAFC]">
                  Core Problem Patterns
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {LEETCODE_DATA.topicsPythonDSA.map((topic, tIdx) => (
                <motion.div
                  key={topic.name}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="p-3.5 rounded-2xl bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm font-bold text-[#111110] dark:text-[#F2F4F6]">
                      {topic.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/25 px-2.5 py-0.5 rounded-full">
                      {topic.count}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-[#A8A9A8]">
                    Examples: {topic.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: SQL Patterns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: customEase }}
            className="p-6 sm:p-7 rounded-3xl glass-panel border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918]"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 text-[#111110] dark:text-[#9FCAFC] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111110] dark:text-[#F2F4F6]">
                  Relational SQL &amp; Data Engineering Queries
                </h3>
                <span className="text-xs font-mono text-[#9FCAFC]">
                  SQL 50 Mastery
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {LEETCODE_DATA.topicsSQL.map((sqlTopic, sIdx) => (
                <motion.div
                  key={sqlTopic.name}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="p-3.5 rounded-2xl bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A]"
                >
                  <span className="block text-xs sm:text-sm font-bold text-[#111110] dark:text-[#F2F4F6] mb-1">
                    {sqlTopic.name}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-[#A8A9A8]">
                    {sqlTopic.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
