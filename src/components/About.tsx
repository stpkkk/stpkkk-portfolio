import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Skills } from './Skills';
import { useMobile } from '../hooks';

export const About: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const isMobile = useMobile();

  return (
    <section className="section mt-[50px]  sm:mt-[10px]" id="about" ref={ref}>
      <div className="container mx-auto max-w-[1200px] ">
        <div className="flex items-center  sm:flex-col sm:gap-10 my-0 mx-auto">
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            whileInView={'show'}
            className="bg-myPhoto relative bg-contain bg-no-repeat min-h-[300px] w-1/2  sm:min-h-[172.5px] "
          >
            {!isMobile && (
              <div className="relative max-w-[585px]">
                <Skills />
              </div>
            )}
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            whileInView={'show'}
            className=" w-1/2  sm:w-full"
          >
            <h2 className="h2 ">About me</h2>
            <ul className="flex flex-col gap-y-4">
              <li className="indent-6">
                As a React developer, I am passionate about creating highly
                dynamic and interactive user interfaces that seamlessly
                integrate with a variety of technologies. With years of
                experience in the field, I have honed my skills in both
                front-end development and back-end integration, allowing me to
                deliver complex web applications that meet the needs of my
                clients.
              </li>
              <li className="indent-6">
                My expertise in React allows me to create scalable and
                performant applications that are easy to maintain and update
                over time. I am dedicated to staying up-to-date with the latest
                advancements in the React ecosystem, and I am constantly
                exploring new libraries and tools that can help me build better
                applications.
              </li>
              <li className="indent-6">
                In addition to my technical skills, I am also a strong
                collaborator and communicator. I understand the importance of
                working closely with clients and other team members to ensure
                that the final product meets their needs and exceeds their
                expectations. I am always open to feedback and willing to make
                changes to ensure that the end result is a product that everyone
                is proud of.
              </li>
              <li className="indent-6">
                Whether you are looking to build a new web application from
                scratch or need help updating an existing project, I am
                confident that I have the skills and experience to deliver
                results that meet your needs. So if you are looking for a
                talented and experienced React developer to join your team,
                please don't hesitate to get in touch!
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
