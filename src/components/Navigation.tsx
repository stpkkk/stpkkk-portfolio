import React from 'react';
import { Link } from 'react-scroll';

export const Navigation: React.FC = () => {
  return (
    <nav className="container mx-auto ">
      <ul className="fixed w-full overflow-hidden right-10 py-5 z-50 flex space-x-8 backdrop-blur-sm  justify-end ">
        <li>
          <Link
            to="home"
            activeClass="active-main"
            spy={true}
            smooth={true}
            offset={-20}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active-main"
            spy={true}
            smooth={true}
            offset={-70}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active-main"
            spy={true}
            smooth={true}
            offset={-70}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active-main"
            spy={true}
            smooth={true}
            offset={-100}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
