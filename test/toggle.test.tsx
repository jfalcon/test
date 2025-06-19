import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import App from '../src/App';
import '@testing-library/jest-dom';

describe('Toggle Tests', () => {
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    // mock client side calls
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        // Optional: legacy support
        addListener: vi.fn(),
        removeListener: vi.fn(),
        onchange: null,
        media: query,
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    window.matchMedia = originalMatchMedia;
  });

  it('toggles between modes', () => {
    // set dark mode in localStorage
    window.localStorage.setItem('theme', 'dark');

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

      // const toggleButton = screen.getByCl
    const toggleButton = screen.getByTestId('theme-toggle');
    fireEvent.click(toggleButton);

    expect(window.localStorage.getItem('theme')).toBe('light');
  });

  it('remembers user theme preference', () => {
    // set dark mode in localStorage
    window.localStorage.setItem('theme', 'dark');

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });
})
