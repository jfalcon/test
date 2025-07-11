import React from 'react';

type ToggleProps = {
  onToggleSidebar: () => void;
};

const Toggle: React.FC<ToggleProps> = ({ onToggleSidebar }) => {
  return (
    <button id="theme" data-testid="theme" onClick={onToggleSidebar}>
      Toggle
    </button>
  );
};

export default Toggle;
