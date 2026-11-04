import React, { useState } from 'react';
import { AsciiIntro } from './components/AsciiIntro';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { CodingSection } from './components/CodingSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  return (
    <>
      {showIntro && <AsciiIntro onComplete={() => setShowIntro(false)} />}
      <div className="min-h-screen flex flex-col bg-[#F2F4F6] dark:bg-[#111110] text-[#111110] dark:text-[#F2F4F6] selection:bg-[#9FCAFC]/40 selection:text-slate-900">
        <ScrollProgress />
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <CodingSection />
          <Contact />
        </main>

        <Footer onReplayIntro={() => setShowIntro(true)} />
        <BackToTop />
      </div>
    </>
  );
};

export default App;
