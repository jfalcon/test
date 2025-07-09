import { parseData } from '../src/utility/data';
import { pricedata, utcTimestamps } from './fixtures/priceData';
import { NewYork, UTC } from '../src/timezones';
import { MS_IN_MIN } from '../src/constants';

describe('Model Tests', () => {
  it('parseData parses New York times correctly', () => {
    // ignore DST for now
    const offset = NewYork.offset * MS_IN_MIN;

    const candles = parseData(pricedata, NewYork).filter((c, x) => {
      return c.time === utcTimestamps[x] - offset;
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
