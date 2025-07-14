import React from 'react';
import { Link, useLocation } from 'react-router';

import { SLUG_ABOUT } from '@/constants';

const Navigation: React.FC = () => {
  const location = useLocation();
  const aboutSlug = `/${SLUG_ABOUT}`;

  return (
    <nav id="nav" data-testid="nav">
      <h1>Chart</h1>
      <div>
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          to={aboutSlug}
          className={location.pathname === aboutSlug ? 'active' : ''}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
