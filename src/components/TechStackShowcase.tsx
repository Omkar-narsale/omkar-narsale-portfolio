import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import {
  AntigravityIcon,
  ChatGPTIcon,
  GeminiIcon,
  DeepSeekIcon,
  PerplexityIcon,
  GitHubCopilotIcon,
} from './AIIcons';

interface TechItem {
  name: string;
  icon: string;
  category?: string;
}

const TECH_STACK_ITEMS: TechItem[] = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
  { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg' },
  { name: 'MediaPipe', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/google.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
];

const WORKFLOW_ITEMS = [
  { name: 'Antigravity', iconNode: <AntigravityIcon className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'ChatGPT', iconNode: <ChatGPTIcon className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Gemini', iconNode: <GeminiIcon className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'DeepSeek', iconNode: <DeepSeekIcon className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Perplexity', iconNode: <PerplexityIcon className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'GitHub Copilot', iconNode: <GitHubCopilotIcon className="w-9 h-9 sm:w-10 sm:h-10" /> },
];

const MARQUEE_ITEMS = [
  'ANTIGRAVITY',
  'CHATGPT',
  'GEMINI',
  'DEEPSEEK',
  'PERPLEXITY',
  'GITHUB COPILOT',
  'PYTHON',
  'REACT 19',
  'TYPESCRIPT',
  'MYSQL',
  'POSTGRESQL',
  'TENSORFLOW',
  'MEDIAPIPE',
  'POWER BI',
  'LEETCODE'
];

export const TechStackShowcase: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-[#F2F4F6] dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: TECH STACK */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase text-red-500 dark:text-red-400 mb-2">
            <span>—</span>
            <span>TOOLKIT</span>
            <span>—</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111110] dark:text-[#F2F4F6] uppercase font-mono">
            TECH STACK
          </h2>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 max-w-6xl mx-auto mb-16">
          {TECH_STACK_ITEMS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="w-[98px] sm:w-[110px] h-[98px] sm:h-[110px] rounded-2xl bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-xs hover:shadow-md hover:border-[#9FCAFC] transition-colors flex flex-col items-center justify-center p-3 text-center cursor-default group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain filter dark:brightness-105"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to text initials if external SVG blocked
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#111110] dark:text-[#F2F4F6] tracking-tight truncate max-w-full">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full max-w-5xl mx-auto h-[1px] bg-[#E2E5E9] dark:bg-[#2C2C2A] mb-16" />

        {/* SECTION 2: WORKFLOW */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase text-red-500 dark:text-red-400 mb-2">
            <span>—</span>
            <span>AI &amp; UTILITIES</span>
            <span>—</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111110] dark:text-[#F2F4F6] uppercase font-mono">
            WORKFLOW
          </h2>
        </div>

        {/* Workflow Cards Row */}
        <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 max-w-4xl mx-auto mb-16">
          {WORKFLOW_ITEMS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="w-[105px] sm:w-[120px] h-[105px] sm:h-[120px] rounded-2xl bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-xs hover:shadow-md hover:border-[#9FCAFC] transition-colors flex flex-col items-center justify-center p-3 text-center cursor-default group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.iconNode}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#111110] dark:text-[#F2F4F6] tracking-tight truncate max-w-full">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* SECTION 3: INFINITE CONTINUOUS RUNNING MARQUEE TICKER AT BOTTOM */}
      <div className="w-full bg-[#111110] text-[#F2F4F6] py-3.5 border-t border-b border-[#2C2C2A] overflow-hidden select-none">
        <div className="flex w-max items-center animate-marquee whitespace-nowrap">
          {/* Double loop for seamless infinite translation */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 px-4">
              <span className="font-mono text-xs sm:text-sm font-extrabold tracking-widest text-[#F2F4F6] hover:text-[#9FCAFC] transition-colors">
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;

