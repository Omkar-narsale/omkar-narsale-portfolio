import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'text'>('default');
  const [isClicking, setIsClicking] = useState<boolean>(false);

  // Mouse coordinates with high precision
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring spring physics (soft, fluid follow)
  const springConfig = { damping: 28, stiffness: 380, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine hover pointer (disable on touchscreens/mobile)
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorType('view');
          return;
        }
      }

      const interactive = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
      if (interactive) {
        setCursorType('pointer');
        return;
      }

      setCursorType('default');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* 1. Precision Center Dot (Instant follow) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#111110] dark:bg-[#9FCAFC] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible && cursorType !== 'view' ? 1 : 0,
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* 2. Fluid Follower (Spring interpolated) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        {cursorType === 'view' ? (
          /* Expand into VIEW pill over project cards */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-3.5 py-1.5 rounded-full bg-[#9FCAFC] text-[#111110] font-mono text-[11px] font-bold tracking-wider shadow-lg flex items-center gap-1 border border-white/40"
          >
            <span>VIEW</span>
            <span>↗</span>
          </motion.div>
        ) : (
          /* Sleek Minimalist Ring */
          <motion.div
            animate={{
              width: cursorType === 'pointer' ? 44 : 26,
              height: cursorType === 'pointer' ? 44 : 26,
              scale: isClicking ? 0.85 : 1,
              borderColor: cursorType === 'pointer' ? 'rgba(159, 202, 252, 0.9)' : 'rgba(150, 150, 150, 0.5)',
              backgroundColor: cursorType === 'pointer' ? 'rgba(159, 202, 252, 0.12)' : 'transparent',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="rounded-full border backdrop-blur-[1px]"
          />
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
