import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FolderGit2,
  Code2,
  Briefcase,
  User,
  Mail,
  FileText,
  Copy,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  ExternalLink,
  Terminal,
  CornerDownLeft,
  X,
  Check,
  Command as CommandIcon,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { PROJECTS, PERSONAL_INFO, Project } from '../data/portfolioData';
import sound from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerIntro?: () => void;
}

interface PaletteItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Navigation' | 'Actions' | 'Projects' | 'Socials';
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onTriggerIntro,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Focus input on open & play sound
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      sound.playOpen();
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const toggleTheme = () => {
    sound.playClick();
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    onClose();
  };

  // Compile all available actions & pages
  const items: PaletteItem[] = [
    // Navigation
    {
      id: 'nav-home',
      title: 'Go to Home',
      subtitle: 'Hero, Tech Stack, Featured Work',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-[#9FCAFC]" />,
      shortcut: 'H',
      action: () => {
        sound.playClick();
        navigate('/');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'View Projects',
      subtitle: 'All 10+ Engineering & Analytics Projects',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />,
      shortcut: 'P',
      action: () => {
        sound.playClick();
        navigate('/projects');
        onClose();
      },
    },
    {
      id: 'nav-coding',
      title: 'LeetCode & Problem Solving',
      subtitle: '115+ Solved Problems, 3D Badges, Topic Mastery',
      category: 'Navigation',
      icon: <Code2 className="w-4 h-4 text-amber-400" />,
      shortcut: 'C',
      action: () => {
        sound.playClick();
        navigate('/coding');
        onClose();
      },
    },
    {
      id: 'nav-experience',
      title: 'View Experience & Journey',
      subtitle: 'Internships, Hackathons, Education Timeline',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
      shortcut: 'E',
      action: () => {
        sound.playClick();
        navigate('/experience');
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: 'About Omkar Narsale',
      subtitle: 'Bio, Technical Philosophy, 18+ Certifications',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-purple-400" />,
      shortcut: 'A',
      action: () => {
        sound.playClick();
        navigate('/about');
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Contact Omkar',
      subtitle: 'Send a message or inquiry directly',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-red-400" />,
      shortcut: 'M',
      action: () => {
        sound.playClick();
        navigate('/contact');
        onClose();
      },
    },
    {
      id: 'nav-resume',
      title: 'Open Printable Resume',
      subtitle: 'Verified ATS-friendly executive resume',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
      shortcut: 'R',
      action: () => {
        sound.playClick();
        window.open('/resume', '_blank');
        onClose();
      },
    },

    // Actions
    {
      id: 'action-copy-email',
      title: 'Copy Email Address',
      subtitle: PERSONAL_INFO.email,
      category: 'Actions',
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-blue-400" />,
      action: copyEmail,
    },
    {
      id: 'action-toggle-theme',
      title: 'Toggle Theme',
      subtitle: 'Switch between Dark and Light mode',
      category: 'Actions',
      icon: document.documentElement.classList.contains('dark') ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-400" />
      ),
      shortcut: 'T',
      action: toggleTheme,
    },
    {
      id: 'action-toggle-sound',
      title: sound.isSoundEnabled() ? 'Mute Interactive Sound' : 'Enable Interactive Sound',
      subtitle: 'Toggle tactile audio sound design',
      category: 'Actions',
      icon: sound.isSoundEnabled() ? (
        <VolumeX className="w-4 h-4 text-rose-400" />
      ) : (
        <Volume2 className="w-4 h-4 text-emerald-400" />
      ),
      action: () => {
        sound.toggleSound();
        sound.playClick();
        onClose();
      },
    },
    {
      id: 'action-ascii-intro',
      title: 'Re-trigger ASCII Intro Matrix',
      subtitle: 'Play the cyberpunk boot sequence animation',
      category: 'Actions',
      icon: <Terminal className="w-4 h-4 text-[#9FCAFC]" />,
      action: () => {
        sound.playClick();
        onClose();
        if (onTriggerIntro) onTriggerIntro();
      },
    },

    // Socials
    {
      id: 'social-github',
      title: 'GitHub Profile',
      subtitle: PERSONAL_INFO.github,
      category: 'Socials',
      icon: <GithubIcon className="w-4 h-4 text-slate-300" />,
      action: () => {
        sound.playClick();
        window.open(PERSONAL_INFO.github, '_blank');
        onClose();
      },
    },
    {
      id: 'social-linkedin',
      title: 'LinkedIn Profile',
      subtitle: PERSONAL_INFO.linkedin,
      category: 'Socials',
      icon: <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />,
      action: () => {
        sound.playClick();
        window.open(PERSONAL_INFO.linkedin, '_blank');
        onClose();
      },
    },
    {
      id: 'social-leetcode',
      title: 'LeetCode Profile',
      subtitle: `${PERSONAL_INFO.leetcode} · 115+ Solved`,
      category: 'Socials',
      icon: <LeetCodeIcon className="w-4 h-4 text-[#FFA116]" />,
      action: () => {
        sound.playClick();
        window.open(PERSONAL_INFO.leetcode, '_blank');
        onClose();
      },
    },

    // Dynamic Projects
    ...PROJECTS.map((proj: Project) => ({
      id: `project-${proj.id}`,
      title: proj.title,
      subtitle: `${proj.category} · ${proj.technologies.slice(0, 3).join(', ')}`,
      category: 'Projects' as const,
      icon: <FolderGit2 className="w-4 h-4 text-[#9FCAFC]" />,
      action: () => {
        sound.playClick();
        navigate(`/projects?id=${proj.id}`);
        onClose();
      },
    })),
  ];

  // Filter items by search query
  const filteredItems = items.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle?.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Keep selected index within bounds
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation inside palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        sound.playClose();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems, onClose]);

  // Scroll active item into view
  useEffect(() => {
    const activeEl = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => {
              sound.playClose();
              onClose();
            }}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white dark:bg-[#161615] border border-[#E2E5E9] dark:border-[#2C2C2A] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#E2E5E9] dark:border-[#2C2C2A] gap-3">
              <Search className="w-5 h-5 text-[#A8A9A8] shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, project, or search..."
                className="w-full bg-transparent text-[#111110] dark:text-[#F2F4F6] text-sm sm:text-base placeholder-[#A8A9A8] focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#F2F4F6] dark:bg-[#222220] text-[#777] dark:text-[#888] border border-[#E2E5E9] dark:border-[#333]">
                ESC
              </kbd>
            </div>

            {/* Notification Toast (e.g. Email Copied) */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-2 text-xs text-emerald-400 flex items-center justify-between"
                >
                  <span className="font-mono flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Copied {PERSONAL_INFO.email} to clipboard!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results List */}
            <div
              ref={listRef}
              className="overflow-y-auto p-2 space-y-1 divide-y divide-transparent select-none custom-scrollbar"
            >
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-sm text-[#A8A9A8] font-mono">
                  No matching commands or projects found.
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      data-index={idx}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={() => item.action()}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors duration-150 ${
                        isSelected
                          ? 'bg-[#9FCAFC]/15 dark:bg-[#9FCAFC]/15 text-[#111110] dark:text-[#F2F4F6]'
                          : 'text-[#524E4D] dark:text-[#A8A9A8] hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-lg shrink-0 ${
                            isSelected
                              ? 'bg-white dark:bg-[#222220] text-[#9FCAFC] shadow-xs'
                              : 'bg-black/5 dark:bg-white/5 text-[#A8A9A8]'
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium tracking-tight truncate flex items-center gap-2">
                            <span>{item.title}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[#888] dark:text-[#aaa]">
                              {item.category}
                            </span>
                          </div>
                          {item.subtitle && (
                            <div className="text-xs text-[#888] dark:text-[#888] truncate font-mono">
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        {item.shortcut && (
                          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-black/5 dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#333] text-[#777]">
                            {item.shortcut}
                          </kbd>
                        )}
                        {isSelected && (
                          <CornerDownLeft className="w-3.5 h-3.5 text-[#9FCAFC]" />
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Hint Bar */}
            <div className="px-4 py-2.5 border-t border-[#E2E5E9] dark:border-[#2C2C2A] bg-[#F9FAFB] dark:bg-[#131312] flex items-center justify-between text-[11px] text-[#A8A9A8] font-mono">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded bg-black/5 dark:bg-[#222] border border-[#E2E5E9] dark:border-[#333]">↑</kbd>
                  <kbd className="px-1 py-0.5 rounded bg-black/5 dark:bg-[#222] border border-[#E2E5E9] dark:border-[#333]">↓</kbd>
                  Navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded bg-black/5 dark:bg-[#222] border border-[#E2E5E9] dark:border-[#333]">↵</kbd>
                  Select
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#888]">
                <span>Linear / Raycast Style</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
