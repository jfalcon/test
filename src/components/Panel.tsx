import React from 'react';
import { useSelector } from 'react-redux';
import { DIGITS } from '@/constants';
import type { RootState } from '@/store';
import '@/styles/Panel.scss';

type PanelProps = {
};

const Panel: React.FC<PanelProps> = () => {
  const trueRange = useSelector((state: RootState) => state.meta.trueRange);

  return (
    <section id="panel" data-testid="panel">
      True Range: {trueRange && trueRange.toFixed(DIGITS)}
    </section>
  );
};

export default Panel;
