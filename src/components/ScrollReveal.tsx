import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { customEase } from '../utils/animations';

interface MaskedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Editorial Masked Text Reveal
 * Slides lines/words upward from an overflow-hidden mask on scroll
 */
export const MaskedReveal: React.FC<MaskedRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 0.75,
          delay,
          ease: customEase,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface ParallaxItemProps {
  children: React.ReactNode;
  speed?: number; // e.g. -20 for floating up, 20 for lagging
  className?: string;
}

/**
 * Subtle Parallax Shift on Scroll
 * Creates multi-layer 3D depth without layout shift
 */
export const ParallaxItem: React.FC<ParallaxItemProps> = ({
  children,
  speed = 25,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

interface CardScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Smooth elevation card reveal on scroll
 */
export const CardScrollReveal: React.FC<CardScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: customEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
