import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Candlestick from './components/Candlestick';
import Console from './components/Console';
import Theme from './components/Theme';
import Toggle from './components/Toggle';
import { pricedata } from '../test/fixtures/priceData';
import { parseData } from './utility/data'
import { UTC } from './timezones';
import './styles/App.scss';

const data = parseData(pricedata, UTC);

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

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
            <Toggle onToggleSidebar={toggleSidebar} />
            <Theme />
          </header>
          <main>
            <Candlestick data={data} />
            <Console />
          </main>
          <footer>Footer</footer>
        </div>
      </div>
    </Provider>
  );
};

export default App;
