import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import {
  Send,
  X,
  Sparkles,
  Bot,
  User,
  ArrowUpRight,
  RefreshCw,
  Terminal,
  ChevronDown,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, LEETCODE_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import sound from '../utils/sound';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  links?: { label: string; url: string; external?: boolean }[];
  timestamp: string;
}

const QUICK_QUESTIONS = [
  'What are Omkar’s top projects?',
  'What is his LeetCode streak & stats?',
  'What is his primary tech stack?',
  'How can I get in touch with him?',
  'Tell me about his education & college',
];

export const AskOmkarAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'agent',
      text: "Hey! I'm Omkar's AI Assistant. Ask me anything about his projects, LeetCode problem solving, tech stack, or experience!",
      timestamp: 'Just now',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 3D Mouse Tracking Spring for Detective Avatar
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from cursor to avatar
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Rotate up to 25 degrees tracking the mouse
      rotateY.set(Math.max(-25, Math.min(25, deltaX * 25)));
      rotateX.set(Math.max(-25, Math.min(25, -deltaY * 25)));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotateX, rotateY]);

  // Scroll messages to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleOpen = () => {
    sound.playOpen();
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 150);
  };

  const handleClose = () => {
    sound.playClose();
    setIsOpen(false);
  };

  // Generate dynamic, knowledgeable response based on portfolio data
  const generateAnswer = (userQuery: string): { text: string; links?: { label: string; url: string; external?: boolean }[] } => {
    const q = userQuery.toLowerCase().trim();

    // 1. Projects
    if (q.includes('project') || q.includes('built') || q.includes('work') || q.includes('app')) {
      const topProjects = PROJECTS.slice(0, 3).map((p) => p.title).join(', ');
      return {
        text: `Omkar has built 10+ engineering and analytics applications! His flagship systems include **RetailFlow** (Automated ETL & BI Analytics Pipeline), **NetSage AI** (Autonomous Multi-Agent Network Diagnostics), and **MirrorFit** (Real-Time AI Computer Vision Posture Corrector).`,
        links: [
          { label: 'Explore Projects Archive', url: '/projects' },
          { label: 'GitHub Repositories', url: PERSONAL_INFO.github, external: true },
        ],
      };
    }

    // 2. LeetCode / Coding / DSA
    if (q.includes('leetcode') || q.includes('dsa') || q.includes('code') || q.includes('problem') || q.includes('rank') || q.includes('rating') || q.includes('badge')) {
      return {
        text: `Omkar has solved **${LEETCODE_DATA.totalSolved}+ algorithmic problems** on LeetCode! He has mastered 46 Mediums, 65 Easy, and 4 Hard problems, holding a top 30% contest rating and earning multiple official badges including the 50 Days and 100 Days Problem Solving Badges.`,
        links: [
          { label: 'View 3D Badges & Stats', url: '/coding' },
          { label: 'Official LeetCode Profile', url: PERSONAL_INFO.leetcode, external: true },
        ],
      };
    }

    // 3. Tech Stack / Skills / Languages
    if (q.includes('stack') || q.includes('skill') || q.includes('python') || q.includes('language') || q.includes('tool') || q.includes('react')) {
      return {
        text: `Omkar's core toolkit spans **Python, TypeScript, JavaScript, C++, React 19, and Tailwind CSS**. For data & AI, he leverages **NumPy, Pandas, scikit-learn, TensorFlow, MediaPipe, and Power BI**, backed by **MySQL, PostgreSQL, and Supabase** for high-throughput databases.`,
        links: [
          { label: 'View Interactive Tech Stack', url: '/#tech-stack' },
          { label: 'View Experience & Journey', url: '/experience' },
        ],
      };
    }

    // 4. Contact / Email / Hire
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('message')) {
      return {
        text: `You can reach Omkar directly at **${PERSONAL_INFO.email}** or connect via LinkedIn and GitHub. He is actively open to internships, software engineering roles, and AI/Data analytics collaborations!`,
        links: [
          { label: 'Open Contact Form', url: '/contact' },
          { label: 'LinkedIn Profile', url: PERSONAL_INFO.linkedin, external: true },
        ],
      };
    }

    // 5. College / Education / Degree
    if (q.includes('education') || q.includes('college') || q.includes('study') || q.includes('degree') || q.includes('sakec') || q.includes('cgpa')) {
      return {
        text: `Omkar is a **Third-Year Information Technology Student** at **Shah and Anchor Kutchhi Engineering College (SAKEC), Mumbai** (2023 - 2027) with a **7.74 CGPA**, specializing in Data Analytics, Database Management Systems, AI/ML, and Computer Networks.`,
        links: [
          { label: 'View Academic Journey', url: '/experience' },
          { label: 'View Printable Resume', url: '/resume', external: true },
        ],
      };
    }

    // 6. Resume
    if (q.includes('resume') || q.includes('cv')) {
      return {
        text: `You can view and print Omkar's verified ATS-friendly executive resume anytime online! It covers all 10+ projects, 18+ certifications, and engineering credentials.`,
        links: [
          { label: 'Open Printable Resume', url: '/resume', external: true },
        ],
      };
    }

    // Default Fallback
    return {
      text: `Omkar is an IT engineering student specializing in Data Analytics, AI/ML, Computer Vision, and Full-Stack Development with 115+ solved LeetCode challenges. Would you like to check out his flagship projects, LeetCode milestones, or get in touch?`,
      links: [
        { label: 'View Projects', url: '/projects' },
        { label: 'View Coding & DSA', url: '/coding' },
        { label: 'Contact Omkar', url: '/contact' },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isTyping) return;

    sound.playClick();
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate cyber decode typing
    setTimeout(() => {
      const response = generateAnswer(query);
      sound.playTerminalBeep();
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'agent',
          text: response.text,
          links: response.links,
          timestamp: 'Just now',
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* FLOATING 3D INTERACTIVE DETECTIVE AVATAR BUTTON */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 select-none">
        <motion.button
          ref={buttonRef}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={isOpen ? handleClose : handleOpen}
          className="relative group p-1 rounded-full cursor-pointer focus:outline-none"
          aria-label="Ask Omkar AI Assistant"
          title="Ask Omkar AI - Interactive Assistant"
          style={{
            perspective: 800,
          }}
        >
          {/* Subtle outer breathing glow aura */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#9FCAFC]/40 via-blue-500/20 to-purple-500/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse-slow pointer-events-none" />

          {/* 3D Tilting Avatar Container */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-2xl border-2 border-white/20 dark:border-[#9FCAFC]/40 bg-[#111110] transition-shadow group-hover:shadow-[0_0_24px_rgba(159,202,252,0.4)]"
          >
            <img
              src="/assets/detective-agent.png"
              alt="Ask Omkar AI Detective Avatar"
              className="w-full h-full object-cover object-center pointer-events-none filter drop-shadow-md"
            />
          </motion.div>

          {/* Status Online Indicator Dot */}
          <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#111110]"></span>
          </span>

          {/* Floating Pill Tooltip */}
          {!isOpen && (
            <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="px-3 py-1.5 rounded-xl bg-[#111110] text-[#F2F4F6] text-xs font-mono font-medium shadow-xl border border-[#2C2C2A] whitespace-nowrap flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9FCAFC]" />
                <span>Ask Omkar AI</span>
              </div>
            </div>
          )}
        </motion.button>
      </div>

      {/* CHAT TERMINAL MODAL DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:bottom-28 sm:right-8 z-50 w-[92vw] sm:w-[420px] max-h-[580px] h-[78vh] flex flex-col bg-white dark:bg-[#161615] border border-[#E2E5E9] dark:border-[#2C2C2A] rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E5E9] dark:border-[#2C2C2A] bg-[#F9FAFB] dark:bg-[#111110]/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-[#9FCAFC]/40 shadow-xs bg-[#111110]">
                  <img
                    src="/assets/detective-agent.png"
                    alt="Detective Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-[#111110] dark:text-[#F2F4F6]">
                      Omkar AI
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-medium">
                      Agent
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A8A9A8] font-mono">
                    Trained on portfolio &amp; engineering data
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar bg-white dark:bg-[#161615]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#111110] dark:bg-[#F2F4F6] text-[#F2F4F6] dark:text-[#111110] rounded-br-xs font-medium'
                        : 'bg-[#F2F4F6] dark:bg-[#1E1E1C] text-[#222] dark:text-[#E2E5E9] rounded-bl-xs border border-[#E2E5E9] dark:border-[#2C2C2A]'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>

                    {/* Action Links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-1.5">
                        {msg.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target={link.external ? '_blank' : '_self'}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            onClick={() => sound.playClick()}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white dark:bg-[#2A2A28] text-[#111110] dark:text-[#9FCAFC] border border-[#E2E5E9] dark:border-[#383835] hover:border-[#9FCAFC] transition-colors"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-70" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-[#A8A9A8] font-mono mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 text-xs text-[#A8A9A8] font-mono p-2">
                  <span className="w-2 h-2 rounded-full bg-[#9FCAFC] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#9FCAFC] animate-bounce [animation-delay:0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-[#9FCAFC] animate-bounce [animation-delay:0.3s]" />
                  <span className="ml-1 text-[11px]">Omkar AI is thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestion Chips */}
            <div className="px-4 py-2 bg-[#F9FAFB] dark:bg-[#121211] border-t border-[#E2E5E9] dark:border-[#2C2C2A] overflow-x-auto whitespace-nowrap flex gap-1.5 no-scrollbar">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white dark:bg-[#1E1E1C] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#524E4D] dark:text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6] hover:border-[#9FCAFC] transition-colors shrink-0 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#161615] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, LeetCode, skills..."
                className="flex-1 bg-[#F2F4F6] dark:bg-[#1E1E1C] text-[#111110] dark:text-[#F2F4F6] text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-transparent focus:border-[#9FCAFC] focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-[#111110] dark:bg-[#F2F4F6] text-[#F2F4F6] dark:text-[#111110] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] disabled:opacity-40 transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AskOmkarAgent;
