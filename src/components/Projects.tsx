import React from 'react';
import { ProjectCard } from './ProjectCard';
import { getProjectCards } from '../services';

export const Projects: React.FC = () => {
  return (
    <>
      <section
        className="section container max-w-[1200px] mx-auto flex flex-col mb-[100px]"
        id="projects"
      >
        <h2 className="h2">Projects</h2>
        <ul className="max-w-[1200px] flex flex-wrap gap-10 w-full  sm:gap-5">
          {getProjectCards.map((card, index) => (
            <ProjectCard key={index} card={{ ...card }} index={index} />
          ))}
        </ul>
      </section>
    </>
  );
};
