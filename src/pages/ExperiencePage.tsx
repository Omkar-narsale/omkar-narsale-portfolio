import React from 'react';
import { Experience } from '../components/Experience';
import { Certifications } from '../components/Certifications';
import { Education } from '../components/Education';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-16">
      <Experience />
      <Certifications />
      <Education />
    </div>
  );
};

export default ExperiencePage;
