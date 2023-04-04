import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion/variants';
import { Skills } from './Skills';
import { getParagraphs } from '../services';
import { useMobile } from '../hooks';

export const About: React.FC = () => {
  const { ref } = useInView({
    threshold: 0.5,
  });

  const isMobile = useMobile();

  return (
    <section className="section mt-[50px] sm:my-[40px]" id="about" ref={ref}>
      <div className="container max-w-[1200px] flex items-center justify-between isMobile:flex-col sm:flex-col sm:gap-6 my-0 mx-auto">
        <div className="flex flex-col gap-[40px] items-center justify-center">
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            whileInView={'show'}
            className="bg-myPhoto bg-contain bg-no-repeat min-h-[300px] w-[280px]  sm:min-h-[200px] sm:w-[200px]"
          />
          {!isMobile && (
            <div className="relative max-w-[585px]">
              <Skills />
            </div>
          )}
        </div>
        <motion.div
          variants={fadeIn('left', 0.6)}
          initial="hidden"
          whileInView={'show'}
          className="w-1/2 sm:w-full"
        >
          <h2 className="h2">About me</h2>
          <ul className="flex flex-col gap-y-4">
            {getParagraphs.map(({ paragraph }, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>
        </motion.div>
        {isMobile && <Skills />}
      </div>
    </section>
  );
};
