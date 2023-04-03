import React from 'react';
import { ProjectCard } from './ProjectCard';
import { getProjectCards } from '../services';

export const Projects: React.FC = () => {
  return (
    <section
      className="section container max-w-[1200px] my-0 mx-auto"
      id="projects"
    >
      <ul className="flex flex-wrap justify-center gap-[40px] w-full">
        {getProjectCards.map((card, index) => (
          <ProjectCard key={index} card={{ ...card }} index={index} />
        ))}
      </ul>
    </section>
  );
};
