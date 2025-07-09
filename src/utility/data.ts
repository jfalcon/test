import type { Candle } from '../components/Candlestick';
import type { Timezone } from '../timezones';
import { parse } from 'date-fns';
import { toDate } from 'date-fns-tz';

/**
 * Parses CSV OHLC data.
 */
export function parseData(data: string, timezone: Timezone): Candle[] {
  return data
    .split("\n")
    .map((line) => {
      const [dateStr, timeStr, open, high, low, close, volume] = line.split(',');
      const localDate = parse(`${dateStr} ${timeStr}`, 'yyyy.MM.dd HH:mm', new Date());
      const date = toDate(localDate, { timeZone: timezone.name });

      return {
        time: date.valueOf(),
        open: parseFloat(open) || 0.0,
        high: parseFloat(high) || 0.0,
        low: parseFloat(low) || 0.0,
        close: parseFloat(close) || 0.0,
        volume: parseInt(volume, 10) || 0,
      };
    });
}
