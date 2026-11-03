import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#9FCAFC] via-[#88BCFB] to-[#9FCAFC] origin-left shadow-[0_0_12px_rgba(159,202,252,0.9)]"
        style={{ scaleX }}
      />
    </div>
  );
};
