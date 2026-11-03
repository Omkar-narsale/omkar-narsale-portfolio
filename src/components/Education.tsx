import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
            Formal Education &amp; Foundational Training
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A8A9A8]">
            A solid grounding in Information Technology, computational mathematics, and software systems.
          </p>
          <div className="w-16 h-1 bg-[#9FCAFC] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Education Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer()}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {EDUCATION_DATA.map((edu, idx) => {
            const isCurrent = idx === 0;

            return (
              <motion.div
                key={edu.institution}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={`flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-7 border transition-colors duration-300 relative overflow-hidden ${
                  isCurrent
                    ? 'border-[#9FCAFC] dark:border-[#9FCAFC]/60 bg-gradient-to-b from-[#9FCAFC]/10 via-white to-white dark:from-[#9FCAFC]/5 dark:via-[#191918] dark:to-[#191918] shadow-md md:scale-105 z-10'
                    : 'border-[#E2E5E9] dark:border-[#2C2C2A] bg-[#F2F4F6] dark:bg-[#191918]/60 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Status & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        isCurrent
                          ? 'bg-[#111110] dark:bg-[#F2F4F6] text-[#F2F4F6] dark:text-[#111110] font-bold'
                          : 'bg-white dark:bg-[#222220] text-slate-700 dark:text-[#F2F4F6]'
                      }`}
                    >
                      {edu.status}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-[#A8A9A8]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#111110] dark:text-[#F2F4F6] mb-1 leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="text-xs font-mono font-medium text-[#9FCAFC] mb-2">
                    {edu.field}
                  </div>

                  <div className="text-xs text-slate-600 dark:text-[#A8A9A8] font-medium mb-4">
                    {edu.institution}
                  </div>

                  {edu.score && (
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      <Award className="w-4 h-4" />
                      <span>Score: {edu.score}</span>
                    </div>
                  )}

                  {/* Highlights List */}
                  <ul className="space-y-2 mt-2">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-[#A8A9A8] leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-[#9FCAFC] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E2E5E9] dark:border-[#2C2C2A] flex items-center gap-1.5 text-xs text-[#A8A9A8] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#A8A9A8]" />
                  <span className="truncate">{edu.location}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
