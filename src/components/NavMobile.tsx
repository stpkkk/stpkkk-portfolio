import React from 'react';
import { Link } from 'react-scroll';
import { TbHome, TbUserCircle, TbBriefcase } from 'react-icons/tb';
import { GiSkills } from 'react-icons/gi';
import { BsChat } from 'react-icons/bs';

export const NavMobile: React.FC = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full mx-auto flex justify-between gap-5 align-center shadow-lg max-w-[420px] h-[70px] bg-black/20 backdrop-blur-xl rounded-3xl items-center px-8 text-2xl ">
          <Link
            to="home"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={-200}
          >
            <TbHome />
          </Link>
          <Link
            to="about"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={0}
          >
            <TbUserCircle />
          </Link>
          {/* <Link
            to="skills"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={0}
          >
            <GiSkills />
          </Link> */}
          <Link
            to="projects"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={-200}
          >
            <TbBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={-200}
          >
            <BsChat />
          </Link>
        </div>
      </div>
    </nav>
  );
};
