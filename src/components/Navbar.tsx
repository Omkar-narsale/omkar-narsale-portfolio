import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Command } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import sound from '../utils/sound';

interface NavbarProps {
  onTriggerIntro?: () => void;
  onOpenCommandPalette?: () => void;
}

const PAGE_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Coding & DSA', path: '/coding' },
  { name: 'Experience', path: '/experience' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onTriggerIntro, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sound.isSoundEnabled());
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleHomeClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    sound.playClick();
    if (onTriggerIntro) {
      onTriggerIntro();
    }
    navigate('/');
  };

  const handleToggleSound = () => {
    const nextState = sound.toggleSound();
    setSoundEnabled(nextState);
  };

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
          
          {/* Logo / Brand Name - Unique Crazy Syne Typography with Cyber Pulse */}
          <button
            onClick={handleHomeClick}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2.5 group focus:outline-none text-left cursor-pointer"
            aria-label="Omkar Narsale - Launch Intro Matrix"
            title="Click to trigger interactive ASCII matrix intro"
          >
            <div className="flex items-center font-syne font-black text-base sm:text-lg tracking-[-0.03em] uppercase">
              <span className="text-[#111110] dark:text-[#F2F4F6] group-hover:text-[#9FCAFC] transition-colors">
                OMKAR
              </span>
              <span className="mx-1 text-[#9FCAFC] font-light">/</span>
              <span className="text-[#524E4D] dark:text-[#A8A9A8] group-hover:text-[#111110] dark:group-hover:text-[#F2F4F6] transition-colors">
                NARSALE
              </span>
            </div>
            
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9FCAFC] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9FCAFC]"></span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {PAGE_LINKS.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.path === '/') {
                return (
                  <button
                    key={link.name}
                    onClick={handleHomeClick}
                    onMouseEnter={() => sound.playHover()}
                    className={`text-xs sm:text-sm font-medium transition-colors duration-200 relative py-1 cursor-pointer ${
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
                  </button>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
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

          {/* Right Action CTA, Audio Toggle & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Command Palette Trigger Pill (Raycast / Linear Style) */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                sound.playClick();
                if (onOpenCommandPalette) onOpenCommandPalette();
              }}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] text-[#524E4D] dark:text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6] hover:border-[#9FCAFC] transition-colors focus:outline-none cursor-pointer"
              title="Open Command Palette (Cmd + K / Ctrl + K)"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-[#9FCAFC]" />
              <span className="text-[11px] font-mono font-bold tracking-tight">K</span>
            </motion.button>

            {/* Audio FX Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleToggleSound}
              onMouseEnter={() => sound.playHover()}
              className="p-2.5 rounded-full border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] text-[#524E4D] dark:text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6] hover:border-[#9FCAFC] transition-colors focus:outline-none"
              title={soundEnabled ? 'Mute Interactive Sound' : 'Enable Interactive Sound'}
              aria-label="Toggle UI Sound FX"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#9FCAFC]" />
              ) : (
                <VolumeX className="w-4 h-4 opacity-50" />
              )}
            </motion.button>

            <ThemeToggle />

            <button
              onClick={() => {
                sound.playClick();
                navigate('/contact');
              }}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#F2F4F6] dark:text-[#111110] bg-[#111110] dark:bg-[#F2F4F6] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] transition-colors duration-200 shadow-xs cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                sound.playClick();
                if (onOpenCommandPalette) onOpenCommandPalette();
              }}
              className="p-2 rounded-full border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] text-[#524E4D] dark:text-[#A8A9A8]"
              aria-label="Open Command Palette"
              title="Command Palette"
            >
              <Command className="w-4 h-4 text-[#9FCAFC]" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleToggleSound}
              className="p-2 rounded-full border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] text-[#524E4D] dark:text-[#A8A9A8]"
              aria-label="Toggle UI Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#9FCAFC]" /> : <VolumeX className="w-4 h-4 opacity-50" />}
            </motion.button>

            <ThemeToggle />

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
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
              {PAGE_LINKS.map((link) => {
                if (link.path === '/') {
                  return (
                    <button
                      key={link.name}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        handleHomeClick(e);
                      }}
                      className="text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-[#524E4D] dark:text-[#A8A9A8] hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      {link.name} (Trigger Intro)
                    </button>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => {
                      sound.playClick();
                      setMobileMenuOpen(false);
                    }}
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
                );
              })}

              <button
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                  if (onOpenCommandPalette) onOpenCommandPalette();
                }}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-[#524E4D] dark:text-[#A8A9A8] hover:bg-black/5 dark:hover:bg-white/5 text-left"
              >
                <span className="flex items-center gap-2">
                  <Command className="w-4 h-4 text-[#9FCAFC]" />
                  <span>Command Palette</span>
                </span>
                <kbd className="px-2 py-0.5 text-[10px] font-mono rounded bg-black/5 dark:bg-white/10 text-[#888]">
                  ⌘K
                </kbd>
              </button>

              <div className="pt-3 mt-2 border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
                <button
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                    navigate('/contact');
                  }}
                  className="w-full py-3 rounded-full text-center text-xs font-semibold bg-[#111110] text-[#F2F4F6] dark:bg-[#F2F4F6] dark:text-[#111110] block"
                >
                  Let's Talk
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
