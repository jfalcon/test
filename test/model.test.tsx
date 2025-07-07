import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';

describe('Model Tests', () => {
  it('chart.js should not expand pass the viewport width', async () => {
    const { default: App } = await import('../src/App');

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // check the <body> and <html> don't overflow
    const documentWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;

    expect(scrollWidth).toBeLessThanOrEqual(documentWidth);
  });
});
