import React from 'react';
import styledComponents from '../assets/styled-components.png';
import { useMobile } from '../hooks';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion/variants';
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiAxios,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiSass,
  SiStyledcomponents,
  SiJavascript,
} from 'react-icons/si';

const skillList = [
  { Icon: SiReact, color: '#61dafb' },
  { Icon: SiJavascript, color: '#efd81d' },
  { Icon: SiTypescript, color: '#2f74c0' },
  { Icon: SiRedux, color: '#7046B2' },
  { Icon: SiAxios, color: '#5527d8' },
  { Icon: SiNextdotjs, color: '#000513' },
  { Icon: SiTailwindcss, color: '#38bdf8' },
  { Icon: SiSass, color: '#c26191' },
  { Icon: SiStyledcomponents, color: 'pink' },
  { Icon: SiGit, color: '#e4472a' },
];

export const Skills: React.FC = () => {
  const isMobile = useMobile();

  const desktopView = (
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
      <SiTypescript
        size={40}
        style={{
          color: '#2f74c0',
          position: 'absolute',
          left: '150px',
          top: '-120px',
        }}
      />
      <SiJavascript
        size={80}
        style={{
          color: '#efd81d',
          position: 'absolute',
          left: '250px',
          top: '-90px',
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

  const mobileView = (
    <motion.div
      variants={fadeIn('right', 0.6)}
      initial="hidden"
      whileInView={'show'}
      className="p-[15px]"
    >
      <h3 className="mb-[15px]">My stack:</h3>
      <ul className="flex flex-wrap  max-w-[800px] mx-auto gap-[20px]  after:empty:flex-1 justify-start">
        {skillList.map(({ Icon, color }, index) => (
          <li key={index} className="rounded-full">
            <Icon size={50} style={{ color }} />
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return isMobile ? mobileView : desktopView;
};
