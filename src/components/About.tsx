import React from 'react';
import { Compass, Lightbulb, Zap, Rocket, BookOpen, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Journey &amp; Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
            From Core Logic to Scalable Intelligent Systems
          </h2>
          <div className="w-16 h-1 bg-[#9FCAFC] mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Profile Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Professional Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-[#A8A9A8] leading-relaxed text-base">
            <p className="text-lg font-medium text-[#111110] dark:text-[#F2F4F6]">
              Hello! I'm <strong className="text-[#111110] dark:text-[#9FCAFC]">Omkar Narsale</strong>, an Information Technology student at <strong className="text-[#111110] dark:text-[#F2F4F6]">Shah and Anchor Kutchhi Engineering College (SAKEC), Mumbai</strong>.
            </p>

            <p>
              My journey began with a curiosity about how raw numbers translate into decisions. Starting with fundamental <strong>Python algorithms</strong> and structured <strong>SQL relational queries</strong>, I developed a passion for turning messy, disconnected data into clean, structured knowledge.
            </p>

            <p>
              Over the course of my engineering degree, I've expanded into building complete software ecosystems:
            </p>

            <ul className="space-y-3 pt-1 font-medium text-[#111110] dark:text-[#F2F4F6]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9FCAFC] shrink-0 mt-0.5" />
                <span>
                  <strong>Data Engineering &amp; BI:</strong> Built automated ETL pipelines using Python Watchdog, incremental MySQL loading, and interactive Power BI executive dashboards.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9FCAFC] shrink-0 mt-0.5" />
                <span>
                  <strong>AI &amp; Generative Reasoning:</strong> Created <span className="text-[#9FCAFC] font-semibold">NetSage AI</span> using Groq LLaMA 3.3 for network troubleshooting and deployed local TinyLlama agents with Hugging Face.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9FCAFC] shrink-0 mt-0.5" />
                <span>
                  <strong>Computer Vision &amp; Spatial ML:</strong> Implemented <span className="text-[#9FCAFC] font-semibold">MirrorFit XR</span> with 468-point face mesh geometry and real-time head pose estimation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9FCAFC] shrink-0 mt-0.5" />
                <span>
                  <strong>Full-Stack Product Engineering:</strong> Shipped modern MERN platforms like <span className="text-[#9FCAFC] font-semibold">Fixly</span> with React 19, Node.js, and MongoDB Atlas.
                </span>
              </li>
            </ul>

            <p className="pt-2 text-sm text-slate-600 dark:text-[#A8A9A8] italic">
              "I believe great software isn't just about writing code—it's about understanding data integrity, anticipating edge cases, and delivering an intuitive experience to the user."
            </p>
          </div>

          {/* Right: Personal Brand Identity Card (Featuring Actual Profile Photo Avatar) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl glass-panel p-6 sm:p-7 border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-md relative overflow-hidden bg-white/90 dark:bg-[#191918]/90">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#9FCAFC] shadow-sm shrink-0 bg-[#E2E5E9] dark:bg-[#222220]">
                  <img
                    src="/assets/omkar-profile.jpeg"
                    alt="Omkar Narsale Profile"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111110] dark:text-[#F2F4F6]">
                    Omkar Narsale
                  </h3>
                  <p className="text-xs font-mono text-[#9FCAFC] font-semibold">
                    Third-Year B.E. (IT) · SAKEC
                  </p>
                  <p className="text-xs text-[#A8A9A8]">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Quick Profile Metadata Rows */}
              <div className="space-y-3 text-xs font-mono border-t border-b border-[#E2E5E9] dark:border-[#2C2C2A] py-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[#A8A9A8]">Degree Status:</span>
                  <span className="text-[#111110] dark:text-[#F2F4F6] font-semibold">3rd Year IT (Expected 2027)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A8A9A8]">College:</span>
                  <span className="text-[#111110] dark:text-[#F2F4F6] font-semibold">SAKEC Mumbai</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A8A9A8]">LeetCode Solved:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">115+ Problems (Python &amp; SQL)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A8A9A8]">Industry Certifications:</span>
                  <span className="text-[#9FCAFC] font-bold">18+ Verified (IIT, AWS, Cisco)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A8A9A8]">Primary Languages:</span>
                  <span className="text-[#111110] dark:text-[#F2F4F6] font-bold">Python, SQL, JavaScript, C</span>
                </div>
              </div>

              {/* Verified Badges Preview */}
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#A8A9A8] mb-3">
                  Verified LeetCode Badges:
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] text-xs font-medium text-[#111110] dark:text-[#F2F4F6]">
                    <img src="/assets/leetcode-100days.png" alt="100 Days Badge" className="w-4 h-4 object-contain" />
                    <span>100 Days</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] text-xs font-medium text-[#111110] dark:text-[#F2F4F6]">
                    <img src="/assets/leetcode-50days.png" alt="50 Days Badge" className="w-4 h-4 object-contain" />
                    <span>50 Days</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] text-xs font-medium text-[#111110] dark:text-[#F2F4F6]">
                    <img src="/assets/leetcode-sql50.png" alt="SQL 50 Badge" className="w-4 h-4 object-contain" />
                    <span>SQL 50</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 6 Core Pillars Grid */}
        <div>
          <h3 className="text-xl font-bold text-[#111110] dark:text-[#F2F4F6] mb-8 text-center">
            What Defines My Engineering Approach
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAL_INFO.corePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] flex items-center justify-center mb-4 font-bold">
                  {idx === 0 && <Lightbulb className="w-5 h-5" />}
                  {idx === 1 && <Terminal className="w-5 h-5" />}
                  {idx === 2 && <Zap className="w-5 h-5" />}
                  {idx === 3 && <Rocket className="w-5 h-5" />}
                  {idx === 4 && <BookOpen className="w-5 h-5" />}
                  {idx === 5 && <Layers className="w-5 h-5" />}
                </div>
                <h4 className="text-base font-bold text-[#111110] dark:text-[#F2F4F6] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-[#A8A9A8] leading-relaxed">
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
