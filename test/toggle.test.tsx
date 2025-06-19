import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import App from '../src/App';
import '@testing-library/jest-dom';

describe('Toggle Tests', () => {
  it('remembers user theme preference', () => {
    // set dark mode in localStorage
    window.localStorage.setItem('theme', 'dark');

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');

    const toggleButton = screen.getByTestId('theme-toggle');
    fireEvent.click(toggleButton);

    expect(window.localStorage.getItem('theme')).toBe('light');
  });

  it('respects system preference for dark mode', () => {
    // mock dark mode preference
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });
})
