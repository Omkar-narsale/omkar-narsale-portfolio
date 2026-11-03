import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { customEase } from '../utils/animations';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#F2F4F6] dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: customEase }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
            Internships, Hackathons &amp; Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A8A9A8]">
            Chronological timeline of verified virtual internships, intensive national buildathons, and collegiate service.
          </p>
          <div className="w-16 h-1 bg-[#9FCAFC] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#E2E5E9] dark:border-[#2C2C2A] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {EXPERIENCES.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: customEase }}
                className="relative group"
              >
                
                {/* Node Dot on the timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 + 0.15, type: 'spring', stiffness: 300 }}
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-[#F2F4F6] dark:border-[#111110] bg-[#9FCAFC] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(159,202,252,0.8)]"
                />

                {/* Card Container with subtle hover lift */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="rounded-3xl glass-panel p-6 sm:p-7 border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] border border-[#9FCAFC]/30">
                        {item.type}
                      </span>
                      {item.grade && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {item.grade}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-[#A8A9A8]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#111110] dark:text-[#F2F4F6] mb-1">
                    {item.title}
                  </h3>
                  
                  <div className="text-xs sm:text-sm font-medium text-[#9FCAFC] mb-3">
                    {item.organization} &nbsp;·&nbsp; {item.role}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A8A9A8] mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-5">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111110] dark:text-[#F2F4F6]">
                        <CheckCircle2 className="w-4 h-4 text-[#9FCAFC] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer tags & credential verification */}
                  <div className="pt-4 border-t border-[#E2E5E9] dark:border-[#2C2C2A] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F2F4F6] dark:bg-[#222220] text-slate-700 dark:text-[#F2F4F6] border border-[#E2E5E9] dark:border-[#2C2C2A]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.credentialId && (
                      <span className="text-[11px] font-mono text-[#A8A9A8] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>ID: {item.credentialId.substring(0, 16)}...</span>
                      </span>
                    )}
                  </div>

                </motion.div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
