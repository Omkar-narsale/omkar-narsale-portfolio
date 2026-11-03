import React from 'react';
import { ArrowRight, FileText, Mail, MapPin, Sparkles, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 flex flex-col justify-center overflow-hidden ethan-grid-pattern">
      {/* Background Soft Blue Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#9FCAFC]/15 dark:bg-[#9FCAFC]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#9FCAFC]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Ethan-Inspired Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Availability Pill */}
            <div className="flex items-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white/80 dark:bg-[#191918]/80 backdrop-blur-md text-xs font-medium text-slate-700 dark:text-[#F2F4F6] shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Summer 2026 Opportunities</span>
              </div>
            </div>

            {/* Greeting */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#A8A9A8] dark:text-[#A8A9A8] font-semibold">
                Hello, I'm Omkar Narsale
              </div>

              {/* Large Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6] leading-[1.12]">
                Building Digital Experiences. <br />
                <span className="text-[#9FCAFC] dark:text-[#9FCAFC] drop-shadow-xs">Turning Data</span> Into Insights.
              </h1>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#A8A9A8] max-w-xl leading-relaxed">
              I'm an Information Technology student passionate about Data Analytics, Artificial Intelligence, Computer Vision and Full-Stack Development.
            </p>

            {/* Personal Branding Role Tags */}
            <div className="text-xs font-mono font-medium text-[#111110] dark:text-[#F2F4F6] flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1E1E1C] border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-2xs">
                Third-Year IT Student
              </span>
              <span className="text-[#A8A9A8]">·</span>
              <span className="text-slate-600 dark:text-[#A8A9A8]">
                Data Analytics &amp; Engineering | AI/ML | Computer Vision | Full-Stack
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#F2F4F6] dark:text-[#111110] bg-[#111110] dark:bg-[#F2F4F6] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] shadow-sm transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#9FCAFC]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#111110] dark:text-[#F2F4F6] bg-white dark:bg-[#191918] hover:bg-[#F2F4F6] dark:hover:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-xs transition-all duration-300 hover:scale-[1.02] focus:outline-none"
              >
                <FileText className="w-4 h-4 text-[#9FCAFC]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 pt-3 border-t border-[#E2E5E9] dark:border-[#2C2C2A]/80">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A8A9A8]">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-full bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] hover:text-[#9FCAFC] dark:hover:text-[#9FCAFC] hover:border-[#9FCAFC] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                  title="GitHub: Omkar-narsale"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-full bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] hover:text-[#9FCAFC] dark:hover:text-[#9FCAFC] hover:border-[#9FCAFC] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                  title="LinkedIn: Omkar Narsale"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="w-9 h-9 rounded-full bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] hover:text-[#9FCAFC] dark:hover:text-[#9FCAFC] hover:border-[#9FCAFC] flex items-center justify-center transition-all shadow-2xs hover:scale-105 font-mono font-bold text-xs"
                  title="LeetCode: 115+ Solved Problems"
                >
                  LC
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Omkar Narsale"
                  className="w-9 h-9 rounded-full bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] hover:text-[#9FCAFC] dark:hover:text-[#9FCAFC] hover:border-[#9FCAFC] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Actual Uploaded Professional Photograph (Ethan Style Frame) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[440px]">
              
              {/* Subtle Backing Frame Glow */}
              <div className="absolute -inset-2 rounded-[38px] ethan-glow opacity-80 blur-xl pointer-events-none" />

              {/* Framed Portrait Container */}
              <div className="relative rounded-[32px] p-2 sm:p-2.5 bg-white/90 dark:bg-[#191918]/90 border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-xl overflow-hidden backdrop-blur-md">
                
                {/* Image Container Preserving 3:4 Proportions & Centering Face */}
                <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-[#E2E5E9] dark:bg-[#222220]">
                  <img
                    src="/assets/omkar-profile.jpeg"
                    alt="Omkar Narsale - Information Technology Student and Data Analyst wearing black formal blazer and mint shirt"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-[center_top] transition-transform duration-700 hover:scale-[1.03]"
                  />
                  
                  {/* Subtle Natural Ambient Gradient at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111110]/75 via-[#111110]/20 to-transparent pointer-events-none" />

                  {/* Inside Floating Badge at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-mono tracking-tight text-white drop-shadow-sm">
                        Omkar Narsale
                      </span>
                      <span className="text-[11px] text-[#F2F4F6]/80 font-mono">
                        SAKEC Mumbai · 3rd Year IT
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#9FCAFC] text-[#111110]">
                      115+ Solved
                    </span>
                  </div>
                </div>

              </div>

              {/* Top Floating Badge */}
              <div className="hidden sm:flex absolute -top-3 -left-4 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#1E1E1C]/95 border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-lg text-xs font-semibold text-[#111110] dark:text-[#F2F4F6] backdrop-blur-md">
                <div className="w-6 h-6 rounded-lg bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] flex items-center justify-center font-bold">
                  🎓
                </div>
                <div>
                  <div className="text-[10px] text-[#A8A9A8] font-mono leading-none">Education</div>
                  <div className="text-xs font-bold leading-tight">B.E. Information Tech</div>
                </div>
              </div>

              {/* Bottom Right Floating Badge */}
              <div className="hidden sm:flex absolute -bottom-3 -right-4 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#1E1E1C]/95 border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-lg text-xs font-semibold text-[#111110] dark:text-[#F2F4F6] backdrop-blur-md">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-[10px] text-[#A8A9A8] font-mono leading-none">Verified NPTEL</div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 leading-tight">Elite 87% (IIT Kanpur)</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Minimalist Bottom Marquee Pill / Highlights */}
        <div className="mt-16 pt-8 border-t border-[#E2E5E9] dark:border-[#2C2C2A]/80">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono">
            <span className="text-[#A8A9A8] uppercase tracking-wider text-[11px] mr-2">
              Core Tech:
            </span>
            {[
              "Python", "SQL", "React 19", "FastAPI", "MySQL", 
              "Groq LLaMA 3.3", "OpenCV", "MediaPipe", "Power BI", 
              "TypeScript", "AWS Academy", "Tailwind CSS"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] text-slate-700 dark:text-[#F2F4F6] hover:border-[#9FCAFC] hover:text-[#9FCAFC] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
