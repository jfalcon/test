import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Candlestick from './components/Candlestick';
import Console from './components/Console';
import Theme from './components/Theme';
import { priceData } from '../test/fixtures/priceData';
import { parseData } from './utility/data'
import { NewYork } from './timezones';
import './styles/App.scss';

const data = parseData(priceData, NewYork);

const App: React.FC = () => {
  useEffect(() => {
    console.log('Hello World!', 'Life is like a box of chocolates.');
  }, []);

  return (
    <Provider store={store}>
      <div id="app" data-testid="app">
        <nav>
          <h1>Chart</h1>
        </nav>
        <div>
          <header>
            <Theme />
          </header>
          <main>
            <Candlestick data={data} timezone={NewYork} />
            <Console />
          </main>
          <footer>Footer</footer>
        </div>
      </div>
    </Provider>
  );
};

export default App;
