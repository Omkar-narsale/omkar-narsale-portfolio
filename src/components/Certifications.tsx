import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

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
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#F2F4F6] dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
            Professional Certifications &amp; Diplomas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A8A9A8]">
            18+ recognized credentials earned through IIT Kanpur, IIT Bombay, Cisco Networking Academy, AWS Academy, Palo Alto Networks, and IBM SkillsBuild.
          </p>
          <div className="w-16 h-1 bg-[#9FCAFC] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {CERT_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#F2F4F6] dark:text-[#111110] font-bold shadow-xs'
                    : 'bg-white dark:bg-[#191918] text-slate-600 dark:text-[#A8A9A8] border border-[#E2E5E9] dark:border-[#2C2C2A] hover:text-[#111110] dark:hover:text-[#F2F4F6]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCertFilter"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    className="absolute inset-0 bg-[#111110] dark:bg-[#F2F4F6] rounded-full z-0"
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Certifications Cards Grid */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer()}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                variants={fadeInUp}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between p-6 rounded-3xl glass-panel glass-panel-hover border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] shadow-xs"
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#F2F4F6] dark:bg-[#222220] text-slate-700 dark:text-[#F2F4F6] border border-[#E2E5E9] dark:border-[#2C2C2A]">
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
                      <div className="w-12 h-12 rounded-2xl bg-[#F2F4F6] dark:bg-[#222220] p-1 shrink-0 border border-[#E2E5E9] dark:border-[#2C2C2A] flex items-center justify-center">
                        <img src={cert.badgeImage} alt={cert.title} className="w-10 h-10 object-contain" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-2xl bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 text-[#111110] dark:text-[#9FCAFC] flex items-center justify-center shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                    )}

                    <div>
                      <h3 className="text-base font-bold text-[#111110] dark:text-[#F2F4F6] leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-medium text-[#9FCAFC] mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 border-t border-[#E2E5E9] dark:border-[#2C2C2A] flex items-center justify-between text-[11px] font-mono text-[#A8A9A8]">
                  <span>{cert.date || 'Verified Course'}</span>
                  
                  {cert.credentialId ? (
                    <span className="flex items-center gap-1 text-emerald-500 dark:text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>ID: {cert.credentialId}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[#A8A9A8]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
