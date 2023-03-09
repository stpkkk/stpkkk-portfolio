import React from 'react';
import { Link } from 'react-scroll';

export const Navigation = () => {
  return (
    <nav className="container mx-auto">
      <ul className="fixed w-full overflow-hidden right-10 top-10 z-50 flex space-x-8   justify-end">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
