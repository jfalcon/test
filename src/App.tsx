import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Chart from './components/Chart';
import Console from './components/Console';
import ThemeToggle from './components/ThemeToggle';
import { priceData as data } from '../test/fixtures/priceData';
import './styles/App.scss';

const App: React.FC = () => {
  const [priceData] = useState({
    labels: data.map(datum => datum.year),
    datasets: [
      {
        label: "Prices",
        data: data.map(datum => datum.gain),
        backgroundColor: [
          "#2cb342",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
    console.log('Hello World!', 'Life is like a box of chocolates.');
  }, []);

  return (
    <Provider store={store}>
      <div id="app">
        <nav>
          <h1>Chart</h1>
        </nav>
        <div>
          <header>
            <ThemeToggle />
          </header>
          <main>
            <Chart data={priceData} />
            <Console />
          </main>
          <footer>Footer</footer>
        </div>
      </div>
    </Provider>
  );
};

export default App;
