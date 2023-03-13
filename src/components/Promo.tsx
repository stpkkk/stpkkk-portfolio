import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export const Promo: React.FC = () => {
  return (
    <section className="section min-h-screen h-screen" id="home">
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        className="w-full p-6 pl-20 absolute top-1/2 overflow-hidden xl:max-w-[870px] xl:top-10 xl:pl-10 sm:text-center"
      >
        <motion.div
          variants={fadeIn('left', 0.6)}
          initial="hidden"
          whileInView={'show'}
        >
          <TypeAnimation
            sequence={[
              '⚪⚪⚪ HELLO WORLD',
              4000,
              '',
              1000,
              '⚪⚪⚪ THIS IS MY PORTFOLIO',
              4000,
            ]}
            speed={50}
            wrapper={'span'}
            repeat={Infinity}
          />
        </motion.div>
        <h1 className="font-title text-[87px] leading-none xl:text-[70px] sm:text-[40px]">
          I am Igor Stepanov,
          <br />a creative
          <br /> Frontend Developer.
        </h1>
        <ul className="flex gap-3 py-3">
          <li>
            <a href="https://github.com/stpkkk" target={'_blank'}>
              <BsGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/igor-stepanov1"
              target={'_blank'}
            >
              <BsLinkedin size={30} />
            </a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};
