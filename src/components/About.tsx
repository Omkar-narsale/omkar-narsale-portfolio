import React from 'react';
import { Compass, Lightbulb, Zap, Rocket, BookOpen, Layers, Award, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#080E1A]/50 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Journey &amp; Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            From Core Logic to Scalable Intelligent Systems
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Profile Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Professional Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <p className="text-lg font-medium text-slate-900 dark:text-white">
              Hello! I'm <strong className="text-cyan-600 dark:text-cyan-400">Omkar Narsale</strong>, a third-year Information Technology student at <strong className="text-slate-900 dark:text-slate-100">Shah and Anchor Kutchhi Engineering College (SAKEC), Mumbai</strong>.
            </p>

            <p>
              My journey began with a curiosity about how raw numbers translate into decisions. Starting with fundamental <strong>Python algorithms</strong> and structured <strong>SQL relational queries</strong>, I fell in love with turning messy, disconnected data into clean, structured knowledge.
            </p>

            <p>
              As I developed my skills, I pushed beyond static scripts into engineering complete systems:
            </p>

            <ul className="space-y-2.5 pt-1 font-medium text-slate-800 dark:text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Data Engineering &amp; BI:</strong> Built automated ETL pipelines using Python Watchdog, incremental MySQL loading, and interactive Power BI executive dashboards.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span>
                  <strong>AI &amp; Generative Reasoning:</strong> Created <span className="text-indigo-500 dark:text-indigo-400">NetSage AI</span> using Groq LLaMA 3.3 for network troubleshooting and deployed local TinyLlama agents with Hugging Face.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Computer Vision &amp; Spatial ML:</strong> Implemented <span className="text-emerald-500 dark:text-emerald-400">MirrorFit XR</span> with 468-point face mesh geometry and real-time head pose estimation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Full-Stack Product Engineering:</strong> Shipped modern MERN platforms like <span className="text-pink-500 dark:text-pink-400">Fixly</span> with React 19, Node.js, and MongoDB Atlas.
                </span>
              </li>
            </ul>

            <p className="pt-2 text-sm text-slate-600 dark:text-slate-400 italic">
              "I believe great software isn't just about writing code—it's about understanding data integrity, anticipating edge cases, and delivering an intuitive experience to the user."
            </p>
          </div>

          {/* Right: Personal Brand Identity Card (No fake images, clean geometric developer badge) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800/90 shadow-xl relative overflow-hidden bg-gradient-to-br from-white/90 via-slate-50/70 to-cyan-50/30 dark:from-[#0D1524] dark:via-[#090F1B] dark:to-cyan-950/20">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-emerald-500 p-[3px] shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                  <div className="w-full h-full bg-[#060B13] rounded-[13px] flex items-center justify-center font-mono font-extrabold text-2xl text-cyan-400">
                    ON
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Omkar Narsale
                  </h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    Third-Year B.E. (IT) · SAKEC
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Quick Profile Metadata Rows */}
              <div className="space-y-3 text-xs font-mono border-t border-b border-slate-200 dark:border-slate-800/80 py-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Degree Status:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">3rd Year IT (Expected 2027)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">College:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">SAKEC Mumbai</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">LeetCode Solved:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">115+ Problems (Python &amp; SQL)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Industry Certifications:</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">18+ Verified (IIT, AWS, Cisco)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Primary Languages:</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">Python, SQL, JavaScript, C</span>
                </div>
              </div>

              {/* Verified Badges Preview */}
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Verified LeetCode Badges:
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <img src="/assets/leetcode-100days.png" alt="100 Days Badge" className="w-5 h-5 object-contain" />
                    <span>100 Days</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <img src="/assets/leetcode-50days.png" alt="50 Days Badge" className="w-5 h-5 object-contain" />
                    <span>50 Days</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <img src="/assets/leetcode-sql50.png" alt="SQL 50 Badge" className="w-5 h-5 object-contain" />
                    <span>SQL 50</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 6 Core Pillars Grid */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            What Defines My Engineering Approach
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAL_INFO.corePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#0D1524]/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                  {idx === 0 && <Lightbulb className="w-5 h-5" />}
                  {idx === 1 && <Terminal className="w-5 h-5" />}
                  {idx === 2 && <Zap className="w-5 h-5" />}
                  {idx === 3 && <Rocket className="w-5 h-5" />}
                  {idx === 4 && <BookOpen className="w-5 h-5" />}
                  {idx === 5 && <Layers className="w-5 h-5" />}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

