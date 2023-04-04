import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCardProps } from '../models';
import { fadeIn } from '../motion/variants';

interface ShowContent {
  [key: number]: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ card, index }) => {
  const [showContent, setShowContent] = useState<ShowContent>({});

  const handleMouseEnter = (index: number) => {
    setShowContent((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index: number) => {
    setShowContent((prev) => ({ ...prev, [index]: false }));
  };
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      variants={fadeIn('down', 0.6)}
      initial="hidden"
      whileInView={'show'}
      className="relative bg-cover bg-center max-w-[500px] w-full min-h-[350px] rounded-lg"
      style={{ backgroundImage: `url(${card.image})` }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <AnimatePresence>
        {showContent[index] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col p-[20px] absolute bottom-0 left-0 right-0 bg-[#ffffff10] bg-opacity-80 transition-opacity duration-300 h-full w-full  rounded-lg backdrop-blur-[12px] "
          >
            <div className="flex flex-col h-full ">
              <div className="text-[16px] sm:text-[14px]">
                {card.description}
              </div>
              <div className="flex gap-5 ml-auto mt-auto mb-4 mr-4">
                <a className="btn-link" href={card.liveLink} target="_blank">
                  View Live
                </a>
                <a className="btn-link" href={card.codeLink} target="_blank">
                  Code Source
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
