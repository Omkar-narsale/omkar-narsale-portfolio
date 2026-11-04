import React from 'react';
import { About } from '../components/About';
import { Skills } from '../components/Skills';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      <About />
      <Skills />
    </div>
  );
};

export default AboutPage;
