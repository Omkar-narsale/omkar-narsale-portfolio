import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import sound from '../utils/sound';

interface CircularScrollBadgeProps {
  targetId?: string;
  className?: string;
}

export const CircularScrollBadge: React.FC<CircularScrollBadgeProps> = ({
  targetId = 'tech-stack',
  className = '',
}) => {
  const handleClick = () => {
    sound.playClick();
    const lenis = (window as any).__lenis;
    const target = document.getElementById(targetId);

    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: -70, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => sound.playHover()}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className={`relative flex items-center justify-center group cursor-pointer focus:outline-none select-none ${className}`}
      aria-label="Scroll to explore portfolio"
      title="Scroll to explore"
    >
      {/* 1. Rotating Circular Text Ring */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite] transition-all">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full overflow-visible"
        >
          <path
            id="circularTextPath"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            fill="none"
          />
          <text className="font-mono text-[13px] sm:text-[14px] font-bold tracking-[0.24em] uppercase fill-[#111110] dark:fill-[#F2F4F6] group-hover:fill-[#9FCAFC] transition-colors">
            <textPath
              href="#circularTextPath"
              startOffset="50%"
              textAnchor="middle"
            >
              • SCROLL TO EXPLORE • SCROLL •
            </textPath>
          </text>
        </svg>
      </div>

      {/* 2. Inner Circle with Arrow */}
      <div className="absolute inset-0 m-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#CBD5E1] dark:border-[#383836] bg-white/70 dark:bg-[#191918]/80 backdrop-blur-md shadow-xs flex items-center justify-center group-hover:border-[#9FCAFC] group-hover:bg-[#9FCAFC]/20 transition-all duration-300">
        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#111110] dark:text-[#F2F4F6] group-hover:text-[#9FCAFC] group-hover:translate-y-0.5 transition-all" />
      </div>

      {/* 3. Subtle Outer Glow on Hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-radial from-[#9FCAFC]/20 to-transparent blur-md" />
    </motion.button>
  );
};

export default CircularScrollBadge;

