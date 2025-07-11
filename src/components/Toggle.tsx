import React from 'react';

type ToggleProps = {
};

const Toggle: React.FC<ToggleProps> = () => {
  return (
    <button id="toggle" data-testid="toggle">
      Toggle
    </button>
  );
};

export default Toggle;
