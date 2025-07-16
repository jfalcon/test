import React from 'react';
import Theme from '@/components/Theme';
import Toggle from '@/components/Toggle';

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header>
      <Toggle onToggleSidebar={toggleSidebar} />
      <Theme />
    </header>
  );
};

export default Header;
