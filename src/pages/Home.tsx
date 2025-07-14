import React, { useEffect } from 'react';
import { pricedata } from '#/fixtures/priceData';
import { parseData } from '@/utility/data'
import { UTC } from '@/timezones';
import Candlestick from '@/components/Candlestick';
import Console from '@/components/Console';
import Panel from '@/components/Panel';
import '@/styles/pages/Home.scss';

const data = parseData(pricedata, UTC);

const Home: React.FC = () => {
  useEffect(() => {
    console.log('Hello World!', 'Life is like a box of chocolates.');
  }, []);

  return (
    <div id="home" data-testid="home">
      <Candlestick data={data} />
      <aside>
        <Panel />
        <Console />
      </aside>
    </div>
  );
};

export default Home;
