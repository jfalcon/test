import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pricedata } from '#/fixtures/priceData';
import { parseData } from '@/utility/data'
import { UTC } from '@/timezones';
import { setCandles } from '@/store/chart';
import Console from '@/components/Console';
import Chart from '@/components/Chart';
import Panel from '@/components/Panel';
import '@/styles/pages/Home.scss';

const candles = parseData(pricedata, UTC).slice(0, 100);

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCandles(candles));

    console.log('Candles', candles.length);
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
