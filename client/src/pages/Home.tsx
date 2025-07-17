import React, { useEffect } from 'react';
import Console from '@/components/Console';
import Chart from '@/components/Chart';
import Panel from '@/components/Panel';
import '@/styles/pages/Home.scss';

const Home: React.FC = () => {
  useEffect(() => {
    console.log('Hello World!');
  }, []);

  return (
    <div id="home" data-testid="home">
      <Chart />
      <aside>
        <Panel />
        <Console />
      </aside>
    </div>
  );
};

export default Home;
