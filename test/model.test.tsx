import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';

const DAY_IN_MS = 86400000; // 1 day = 86,400,000 milliseoncds

// sample XML response with mixed dates, normally this would be in a fixtures
// folder somewhere, but keeping it inline for the sake of clarity for this
const mockXml = `
<?xml version="1.0" encoding="windows-1252"?>
<weeklyevents>
	<event>
		<title>Prelim Industrial Production m/m</title>
		<country>JPY</country>
    <date><![CDATA[${new Date(Date.now() - DAY_IN_MS).toISOString().split('T')[0]}]]></date>
		<time><![CDATA[11:50pm]]></time>
		<impact><![CDATA[High]]></impact>
		<forecast><![CDATA[3.4%]]></forecast>
		<previous><![CDATA[-0.9%]]></previous>
		<url><![CDATA[https://url.com/calendar/225-jn-prelim-industrial-production-mm]]></url>
	</event>
	<event>
		<title>MI Inflation Gauge m/m</title>
		<country>AUD</country>
    <date><![CDATA[${new Date().toISOString().split('T')[0]}]]></date>
		<time><![CDATA[1:00am]]></time>
		<impact><![CDATA[High]]></impact>
		<forecast><![CDATA[3.4%]]></forecast>
		<previous><![CDATA[-0.9%]]></previous>
		<url><![CDATA[https://url.com/calendar/294-au-mi-inflation-gauge-mm]]></url>
	</event>
	<event>
		<title>BOE Gov Bailey Speaks</title>
		<country>GBP</country>
    <date><![CDATA[${new Date(Date.now() - DAY_IN_MS).toISOString().split('T')[0]}]]></date>
		<time><![CDATA[3:45pm]]></time>
		<impact><![CDATA[Low]]></impact>
		<forecast><![CDATA[3.4%]]></forecast>
		<previous><![CDATA[-0.9%]]></previous>
		<url><![CDATA[https://url.com/calendar/838-uk-boe-gov-bailey-speaks]]></url>
	</event>
</weeklyevents>`;

describe('Model Tests', () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        text: () => Promise.resolve(mockXml),
      })
    ) as any;
  });

  it('loads and displays future events after button click', async () => {
    const { default: App } = await import('../src/App');

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const button = screen.getByTestId('load-todos');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId('todo-list').textContent).not.toContain('No todos found');
    });
  });
});
