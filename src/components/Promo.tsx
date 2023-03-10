import React from 'react';

export const Promo: React.FC = () => {
  return (
    <section className="section min-h-screen h-screen" id="home">
      <div className="w-full  p-6 pl-20 absolute top-1/2 overflow-hidden xl:max-w-[870px] xl:top-10 xl:pl-10">
        <p className="uppercase">
          <span>⚪&nbsp;</span>Hello World
        </p>
        <h1 className="font-title text-[87px] leading-none xl:text-[70px]">
          I am Igor Stepanov,
          <br />a creative
          <br /> Frontend Developer.
        </h1>
      </div>
    </section>
  );
};
