import React, { useState } from 'react';
import { Award, CheckCircle, ShieldCheck, Filter, ExternalLink, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

const CERT_TABS = [
  'All',
  'Academics',
  'Networking & Cyber',
  'Cloud',
  'AI & ML',
  'Data & Programming'
];

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (activeTab === 'All') return true;
    return c.category === activeTab;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white dark:bg-[#060B13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Certifications &amp; Diplomas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            18+ recognized credentials earned through IIT Kanpur, IIT Bombay, Cisco Networking Academy, AWS Academy, Palo Alto Networks, and IBM SkillsBuild.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {CERT_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-[#0D1524]/60 shadow-sm"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {cert.category}
                  </span>

                  {cert.score && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {cert.score}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  {cert.badgeImage ? (
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 p-1 shrink-0 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      <img src={cert.badgeImage} alt={cert.title} className="w-10 h-10 object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cert.date || 'Verified Course'}</span>
                
                {cert.credentialId ? (
                  <span className="flex items-center gap-1 text-emerald-500 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ID: {cert.credentialId}</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

