import React from 'react';
import { Header, Promo } from './components';

export const App = () => {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden h-[4000px]">
        <Header />
        <Promo />
      </div>
    </>
  );
};
