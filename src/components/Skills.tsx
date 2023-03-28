import React from 'react';
import { SiReact } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiAxios } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import styledComponents from '../assets/styled-components.png';

export const Skills: React.FC = () => {
  return (
    <>
      <SiReact
        size={100}
        style={{
          color: '#61dafb',
          position: 'absolute',
          left: '-10px',
          top: '-140px',
          zIndex: '5',
        }}
      />
      <IoLogoJavascript
        size={100}
        style={{
          color: '#efd81d',
          position: 'absolute',
          left: '250px',
          top: '-90px',
        }}
      />
      <SiTypescript
        size={40}
        style={{
          color: '#2f74c0',
          position: 'absolute',
          left: '150px',
          top: '-120px',
        }}
      />
      <SiRedux
        size={40}
        style={{
          color: '#7046B2',
          position: 'absolute',
          left: '-50px',
          top: '-10px',
        }}
      />
      <SiAxios
        size={60}
        style={{
          color: '#5527d8',
          position: 'absolute',
          left: '-120px',
          top: '-90px',
        }}
      />
      <img
        src={styledComponents}
        alt="styled-components"
        className="absolute top-32 left-[-110px] w-20"
      />

      <SiNextdotjs
        size={60}
        style={{
          color: '#000513',
          position: 'absolute',
          left: '-130px',
          top: '30px',
        }}
      />
      <SiGit
        size={60}
        style={{
          color: '#e4472a',
          position: 'absolute',
          left: '-120px',
          top: '240px',
        }}
      />
      <SiTailwindcss
        size={60}
        style={{
          color: ' #38bdf8',
          position: 'absolute',
          left: '-60px',
          top: '270px',
        }}
      />
      <SiSass
        size={70}
        style={{
          color: '#c26191',
          position: 'absolute',
          left: '-70px',
          top: '350px',
          zIndex: '-2px',
        }}
      />
    </>
  );
};
