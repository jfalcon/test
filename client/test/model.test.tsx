import { StrictMode } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@/store';

import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';
import { SLUG_ABOUT } from '@/constants';

describe('Model Tests', () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
    vi.resetModules(); // resets cached module imports between tests
  });

  it('fetch should be called with the correct URL', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ not: 'used' }),
        status: 200,
        statusText: 'OK',
        headers: new Headers(),
        redirected: false,
        type: 'basic',
        url: '',
        clone: () => new Response(),
        body: null,
        bodyUsed: false,
        arrayBuffer: async () => new ArrayBuffer(0),
        blob: async () => new Blob(),
        formData: async () => new FormData(),
        text: async () => '{"line":"2010.01.03,22:25,1.431500,1.431700,1.431400,1.431600,0"}'
      } as Response)
    );

    globalThis.fetch = mockFetch;

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


    await waitFor(() => {
      const tickButton = screen.getByTestId('tick-button');
      fireEvent.click(tickButton);

      const expectedUrl1 = 'http://localhost:3000';
      const expectedUrl2 = 'http://localhost:3000/';

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringMatching(new RegExp(`^${expectedUrl1}|${expectedUrl2}$`, 'i'))
      );
    });
  });
});
