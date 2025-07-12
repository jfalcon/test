import { MS_IN_MIN } from '@/constants';
import type { Candle } from '@/components/Candlestick';
import type { Timezone } from '@/timezones';

/**
 * Parses CSV OHLC data.
 */
export function parseData(data: string, timezone: Timezone, delimiter = ','): Candle[] {
  return (data || '')
    .trim()
    .split("\n")
    .map((line) => {
      const [dateStr = '', timeStr = '', open, high, low, close, volume] = line.split(delimiter);

      // manually parse to avoid any local timezone shifting
      const [year, month, day] = dateStr.trim().split('.').map(Number);
      const [hour, minute] = timeStr.trim().split(':').map(Number);

      const time = Date.UTC(year, month - 1, day, hour, minute) - (timezone.offset * MS_IN_MIN);

      return {
        time,
        open: parseFloat(open) || 0.0,
        high: parseFloat(high) || 0.0,
        low: parseFloat(low) || 0.0,
        close: parseFloat(close) || 0.0,
        volume: parseInt(volume, 10) || 0,
      };
    });
}
