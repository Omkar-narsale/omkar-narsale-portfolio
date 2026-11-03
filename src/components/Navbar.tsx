import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const currentScroll = window.scrollY + 180;

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
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#F2F4F6]/90 dark:bg-[#111110]/90 backdrop-blur-md border-b border-[#E2E5E9]/80 dark:border-[#2C2C2A]/80 shadow-xs'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Omkar Narsale Home"
          >
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#111110] dark:text-[#F2F4F6] uppercase">
              Omkar Narsale
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9FCAFC] inline-block" />
          </a>

          {/* Desktop Nav Links - Clean Minimal Navigation without Bulky Capsule */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs sm:text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#111110] dark:text-[#F2F4F6] font-semibold'
                      : 'text-[#524E4D] dark:text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9FCAFC] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#F2F4F6] dark:text-[#111110] bg-[#111110] dark:bg-[#F2F4F6] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] transition-colors duration-200 shadow-xs"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[68px] px-6 pb-6 pt-3 bg-[#F2F4F6]/98 dark:bg-[#111110]/98 backdrop-blur-xl border-b border-[#E2E5E9] dark:border-[#2C2C2A] shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col gap-1 py-2">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.25 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] font-semibold'
                      : 'text-[#524E4D] dark:text-[#A8A9A8] hover:bg-white dark:hover:bg-[#191918]'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="pt-3 mt-2 border-t border-[#E2E5E9] dark:border-[#2C2C2A] flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#F2F4F6] dark:text-[#111110] bg-[#111110] dark:bg-[#F2F4F6]"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
