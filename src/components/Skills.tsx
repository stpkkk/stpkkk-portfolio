import React from 'react';
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
  const desktopView = (
    <motion.div
      variants={fadeIn('right', 0.6)}
      initial="hidden"
      whileInView={'show'}
      className="my-[15px]"
    >
      <h3 className="mb-[15px] pl-[15px]">My stack:</h3>
      <ul className="flex flex-wrap items-center justify-center max-w-[350px] mx-auto gap-[20px]  after:empty:flex-1">
        {skillList.map(({ Icon, color }, index) => (
          <li key={index} className="rounded-full">
            <Icon size={50} style={{ color }} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
  return desktopView;
};
