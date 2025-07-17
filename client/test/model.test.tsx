import { StrictMode } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@/store';
import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';
import { SLUG_ABOUT } from '@/constants';

describe('Panel fetch test', () => {
  beforeEach(() => {
    // ✅ Clean and assign a mock that behaves correctly for async/await
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      text: vi.fn().mockResolvedValue(
        '{"line":"2010.01.03,22:25,1.431500,1.431700,1.431400,1.431600,0"}'
      ),
    } as unknown as Response);
  });

  afterEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it('calls fetch once with the expected URL when clicking Tick', async () => {
    render(
      <StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path={SLUG_ABOUT} element={<About />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      </StrictMode>
    );

    // ✅ Click outside waitFor
    fireEvent.click(screen.getByTestId('tick-button'));

    // ✅ Assertion inside waitFor
    await waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalledTimes(1);

      expect(globalThis.fetch).toHaveBeenCalledWith(
        expect.stringMatching(/^http:\/\/localhost:3000\/?$/),
        expect.any(Object)
      );
    });
  });
});
