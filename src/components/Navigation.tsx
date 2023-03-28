import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export const Navigation: React.FC = () => {
  return (
    <nav className="container mx-auto ">
      <ul className="fixed w-full overflow-hidden right-10 py-5 z-50 flex space-x-8 backdrop-blur-sm  justify-end ">
        <li>
          <Link to="home" activeClass="active-main" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" activeClass="active-main" spy={true} smooth={true}>
            About
          </Link>
        </li>
        {/* <li>
          <Link to="skills" activeClass="active-main" spy={true} smooth={true}>
            Skills
          </Link>
        </li> */}
        <li>
          <Link
            to="projects"
            activeClass="active-main"
            spy={true}
            smooth={true}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" activeClass="active-main" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
