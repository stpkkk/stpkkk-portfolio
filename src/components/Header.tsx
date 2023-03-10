import React from 'react';
import { NavMobile } from './NavMobile';
import { useMobile } from '../hooks';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  const isMobile = useMobile();

  return <div>{isMobile ? <NavMobile /> : <Navigation />}</div>;
};
