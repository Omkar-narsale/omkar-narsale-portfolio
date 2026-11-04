import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import sound from '../utils/sound';

interface HolographicTiltProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const HolographicTilt: React.FC<HolographicTiltProps> = ({
  children,
  className = '',
  glowColor = 'rgba(159, 202, 252, 0.45)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Spring physics for buttery-smooth rotation
  const springConfig = { damping: 20, stiffness: 260, mass: 0.6 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalized coordinates (-1 to 1) from center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Max 14 degree tilt
    rotateX.set(-normY * 12);
    rotateY.set(normX * 12);

    // Glare position percentage (0% to 100%)
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className={`relative select-none ${className}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full rounded-3xl overflow-hidden will-change-transform"
      >
        {/* Child Content (Portrait image & borders) */}
        <div style={{ transform: 'translateZ(20px)' }} className="w-full h-full">
          {children}
        </div>

        {/* 1. Dynamic Holographic Rainbow Sheen Glare */}
        <motion.div
          animate={{ opacity: isHovered ? 0.75 : 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute inset-0 z-20 mix-blend-color-dodge transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(159, 202, 252, 0.25) 30%, rgba(245, 158, 11, 0.15) 55%, transparent 75%)`,
          }}
        />

        {/* 2. Iridescent Cyber Diagonal Shimmer */}
        <motion.div
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay"
          style={{
            background: `linear-gradient(${glarePos.x * 2.5}deg, transparent 20%, rgba(255, 255, 255, 0.4) 45%, rgba(159, 202, 252, 0.6) 52%, transparent 80%)`,
          }}
        />

        {/* 3. 3D Floating Border Accent */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute -inset-[1px] rounded-3xl z-30 border border-[#9FCAFC]/70 shadow-[0_0_24px_rgba(159,202,252,0.4)]"
        />
      </motion.div>
    </div>
  );
};

export default HolographicTilt;

