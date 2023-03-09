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
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full mx-auto flex justify-between gap-10 align-center shadow-lg max-w-[420px] h-[96px] bg-black/20 backdrop-blur-2xl rounded-3xl items-center px-8 text-2xl text-white/50">
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
