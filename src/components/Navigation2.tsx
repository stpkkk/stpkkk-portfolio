import React from 'react';
import { Link } from 'react-scroll';
import {
  TbHome,
  TbUserCircle,
  TbClipboardData,
  TbBriefcase,
} from 'react-icons/tb';
import { BsChat } from 'react-icons/bs';

export const Navigation = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 left-5 w-full overflow-hidden z-50">
      <div className="">
        <div className="flex flex-col justify-around gap-3 align-center shadow-lg max-w-[70px] h-[420px] bg-black/20 backdrop-blur-2xl rounded-2xl items-center text-2xl text-white/50">
          <Link to="/">
            <TbHome />
          </Link>
          <Link to="/">
            <TbUserCircle />
          </Link>
          <Link to="/">
            <TbClipboardData />
          </Link>
          <Link to="/">
            <TbBriefcase />
          </Link>
          <Link to="/">
            <BsChat />
          </Link>
        </div>
      </div>
    </nav>
  );
};
