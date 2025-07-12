import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store';

describe('Model Tests', () => {
  it('true range should be set through the store', async () => {
    const { default: App } = await import('../src/App');

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      const panel = screen.getByTestId('panel');
      const text = (panel.innerHTML || '').trim().toLowerCase();

      expect(text !== 'true range:').toBeTruthy();
    });
  });
});
