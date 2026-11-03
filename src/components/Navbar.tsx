import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Coding', href: '#coding' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const currentScroll = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentScroll) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#F2F4F6]/90 dark:bg-[#111110]/90 backdrop-blur-md border-b border-[#E2E5E9]/80 dark:border-[#2C2C2A]/80 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Omkar Narsale Home"
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full bg-[#111110] dark:bg-[#F2F4F6] text-[#F2F4F6] dark:text-[#111110] flex items-center justify-center font-bold text-xs tracking-wider shadow-sm"
            >
              ON
            </motion.div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#111110] dark:text-[#F2F4F6] flex items-center gap-1.5 uppercase">
                Omkar Narsale
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Available for opportunities" />
              </span>
              <span className="text-[11px] font-mono text-[#A8A9A8] tracking-tight">
                IT · Data &amp; AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Sliding Active Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-[#191918]/80 px-2 py-1.5 rounded-full border border-[#E2E5E9] dark:border-[#2C2C2A] backdrop-blur-md shadow-xs">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 z-10 ${
                    isActive
                      ? 'text-[#F2F4F6] dark:text-[#111110] font-semibold'
                      : 'text-slate-600 dark:text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#111110] dark:bg-[#F2F4F6] rounded-full -z-10 shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#111110] dark:text-[#F2F4F6] bg-white dark:bg-[#191918] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] border border-[#E2E5E9] dark:border-[#2C2C2A] transition-colors duration-200 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold text-[#111110] bg-[#9FCAFC] hover:bg-[#88BCFB] shadow-sm transition-colors duration-200"
            >
              <span>Connect</span>
            </motion.a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] text-[#111110] dark:text-[#F2F4F6] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[72px] px-5 pb-6 pt-2 bg-[#F2F4F6]/98 dark:bg-[#111110]/98 backdrop-blur-xl border-b border-[#E2E5E9] dark:border-[#2C2C2A] shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-1.5 py-2">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-[#9FCAFC]/25 text-[#111110] dark:text-[#9FCAFC] font-bold'
                      : 'text-slate-600 dark:text-[#A8A9A8] hover:bg-white dark:hover:bg-[#191918]'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="pt-3 mt-2 border-t border-[#E2E5E9] dark:border-[#2C2C2A] flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] bg-white dark:bg-[#191918]"
                >
                  <FileText className="w-4 h-4 text-[#9FCAFC]" />
                  <span>View Full Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#111110] bg-[#9FCAFC] hover:bg-[#88BCFB]"
                >
                  <span>Get In Touch</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
