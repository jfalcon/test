import { parseData } from '../src/utility/data';
import { pricedata, utcTimestamps } from './fixtures/priceData';
import { NewYork, UTC } from '../src/timezones';

describe('Model Tests', () => {
  it('parseData parses New York times correctly', () => {
    const fiveHours = 18000000; // in milliseconds

    // ignore DST for now
    const candles = parseData(pricedata, NewYork).filter((c, x) => {
      return c.time === (utcTimestamps[x] - fiveHours);
    });

    expect(candles.length).toStrictEqual(utcTimestamps.length);
  });

  it('parseData parses UTC times correctly', () => {
    const candles = parseData(pricedata, UTC).filter((c, x) => {
      return c.time === utcTimestamps[x];
    });

    expect(candles.length).toStrictEqual(utcTimestamps.length);
  });
});
