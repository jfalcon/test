import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';

describe('Model Tests', () => {
  it('hiding sidebar should apply close class', async () => {
    const { default: App } = await import('../src/App');

    const container = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const toggleButton = screen.getByTestId('toggle');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(container.getByTestId('app').classList.contains("close")).toBeTruthy();
    });
  });
});
