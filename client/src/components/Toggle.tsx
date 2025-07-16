import React from 'react';

type ToggleProps = {
  onToggleSidebar: () => void;
};

const Toggle: React.FC<ToggleProps> = ({ onToggleSidebar }) => {
  return (
    <button id="toggle" data-testid="toggle" onClick={onToggleSidebar}>
      Toggle
    </button>
  );
};

export default Toggle;
