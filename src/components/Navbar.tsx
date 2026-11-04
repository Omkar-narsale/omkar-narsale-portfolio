import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const PAGE_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Coding & DSA', path: '/coding' },
  { name: 'Experience', path: '/experience' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Omkar Narsale Home"
          >
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#111110] dark:text-[#F2F4F6] uppercase">
              Omkar Narsale
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9FCAFC] inline-block" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {PAGE_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
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
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action CTA & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#F2F4F6] dark:text-[#111110] bg-[#111110] dark:bg-[#F2F4F6] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] transition-colors duration-200 shadow-xs"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
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
              {PAGE_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] font-semibold'
                        : 'text-[#524E4D] dark:text-[#A8A9A8] hover:bg-black/5 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-3 mt-2 border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full text-center text-xs font-semibold bg-[#111110] text-[#F2F4F6] dark:bg-[#F2F4F6] dark:text-[#111110] block"
                >
                  Let's Talk
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
