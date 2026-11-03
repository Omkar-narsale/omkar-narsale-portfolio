import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#080E1A]/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Formal Education &amp; Foundational Training
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A solid grounding in Information Technology, computational mathematics, and software systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => {
            const isCurrent = idx === 0;

            return (
              <div
                key={edu.institution}
                className={`flex flex-col justify-between rounded-2xl glass-panel p-6 sm:p-7 border transition-all duration-300 relative overflow-hidden ${
                  isCurrent
                    ? 'border-cyan-500/40 dark:border-cyan-500/50 bg-gradient-to-b from-cyan-500/5 via-white to-white dark:from-cyan-950/20 dark:via-[#0D1524] dark:to-[#0D1524] shadow-lg dark:shadow-[0_8px_30px_rgba(0,240,255,0.1)] md:scale-105 z-10'
                    : 'border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0D1524]/60 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Status & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        isCurrent
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {edu.status}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
                    {edu.field}
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mb-4">
                    {edu.institution}
                  </div>

                  {edu.score && (
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      <Award className="w-4 h-4" />
                      <span>Score: {edu.score}</span>
                    </div>
                  )}

                  {/* Highlights List */}
                  <ul className="space-y-2 mt-2">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate">{edu.location}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

