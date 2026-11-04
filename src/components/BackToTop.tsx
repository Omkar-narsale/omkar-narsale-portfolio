import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      className="fixed bottom-22 right-7 sm:bottom-26 sm:right-9 z-40 p-2.5 sm:p-3 rounded-full bg-[#111110] dark:bg-[#191918] text-[#F2F4F6] border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-xl backdrop-blur-md hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:bg-[#9FCAFC] dark:hover:text-[#111110] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#9FCAFC] cursor-pointer"
    >
      <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
    </button>
  );
};

