import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { AsciiIntro } from './components/AsciiIntro';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTopOnRoute } from './components/ScrollToTopOnRoute';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CodingPage } from './pages/CodingPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/coding" element={<CodingPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  return (
    <BrowserRouter>
      <SmoothScroll>
        <CustomCursor />
        <ScrollToTopOnRoute />
        {showIntro && <AsciiIntro onComplete={() => setShowIntro(false)} />}
        
        <div className="min-h-screen flex flex-col bg-[#F2F4F6] dark:bg-[#111110] text-[#111110] dark:text-[#F2F4F6] selection:bg-[#9FCAFC]/40 selection:text-slate-900">
          <ScrollProgress />
          <Navbar onTriggerIntro={() => setShowIntro(true)} />
          
          <main className="flex-1 flex flex-col">
            <AnimatedRoutes />
          </main>

          <Footer onReplayIntro={() => setShowIntro(true)} />
          <BackToTop />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;
