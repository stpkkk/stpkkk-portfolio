import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion/variants';
import { Waves } from './Waves';

export const Banner: React.FC = () => {
  const links = [
    { Icon: BsGithub, link: 'https://github.com/stpkkk' },
    { Icon: BsLinkedin, link: 'https://www.linkedin.com/in/igor-stepanov1' },
    { Icon: FaTelegramPlane, link: 'https://t.me/stpkk' },
  ];

  return (
    <section className="section h-screen" id="home">
      <div>
        <Waves />
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          className="w-full p-6 pl-20 absolute top-1/2 overflow-hidden xl:max-w-[870px] xl:top-10  isMobile:text-[14px] isMobile:pl-[15px] isMobile:mt-80"
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
          <h1 className="font-title text-[87px] leading-none  isMobile:text-[32px]">
            I am Igor Stepanov,
            <br />a creative
            <br /> Frontend Developer.
          </h1>
          <ul className="flex gap-x-3 pt-3">
            {links.map(({ Icon, link }, index) => (
              <li key={index}>
                <a href={link} target={'_blank'}>
                  <Icon size={30} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
