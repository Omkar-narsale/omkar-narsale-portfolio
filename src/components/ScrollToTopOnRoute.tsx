import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTopOnRoute: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRoute;

