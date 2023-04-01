import React from 'react';
import { About, Header, Banner, Contact, Projects } from './components';

export const App: React.FC = () => {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden h-[4000px]">
        <Header />
        <Banner />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};
