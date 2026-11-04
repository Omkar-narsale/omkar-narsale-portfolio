import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-14 bg-[#111110] text-[#A8A9A8] border-t border-[#2C2C2A] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F2F4F6] text-[#111110] flex items-center justify-center font-bold text-xs">
                ON
              </div>
              <span className="font-bold text-base text-[#F2F4F6] tracking-tight uppercase">
                Omkar Narsale
              </span>
            </div>
            
            <p className="text-[#A8A9A8] text-xs max-w-sm leading-relaxed">
              Third-Year Information Technology Student at Shah and Anchor Kutchhi Engineering College (SAKEC), Mumbai. Focused on Data Engineering, Machine Learning, Computer Vision, and scalable applications.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Summer 2026 Internships &amp; Collaborative Projects</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <span className="block font-mono text-xs uppercase tracking-wider text-[#F2F4F6] font-semibold mb-3">
              Pages
            </span>
            <ul className="space-y-1.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Featured Projects', path: '/projects' },
                { name: 'LeetCode & Problem Solving', path: '/coding' },
                { name: 'Experience & Certifications', path: '/experience' },
                { name: 'About & Tech Capabilities', path: '/about' },
                { name: 'Contact & Inquiries', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-[#9FCAFC] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-mono text-xs uppercase tracking-wider text-[#F2F4F6] font-semibold mb-3">
              Profiles &amp; Documents
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F2F4F6] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>github.com/Omkar-narsale</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F2F4F6] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>linkedin.com/in/omkar-narsale</span>
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#9FCAFC] transition-colors"
              >
                <span className="font-mono font-bold text-amber-500">[LC]</span>
                <span>leetcode.com/u/qlakbkpB58 (115+ Solved)</span>
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9FCAFC] hover:underline font-medium transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View / Print Verified Resume</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2C2C2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Omkar Narsale · Portfolio 2.0. Inspired by Ethan Minimalist Visual Direction.
          </div>

          <div className="flex items-center gap-4">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="flex items-center gap-1.5 text-[#A8A9A8] hover:text-[#E5A83B] transition-colors"
                title="Replay Matrix ASCII Portrait Intro"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider">[Replay Intro]</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#A8A9A8] hover:text-[#9FCAFC] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
