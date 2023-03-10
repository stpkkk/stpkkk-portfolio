import React from 'react';
import { About, Header, Promo, Contact, Projects } from './components';

export const App: React.FC = () => {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden h-[4000px]">
        <Header />
        <Promo />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};
