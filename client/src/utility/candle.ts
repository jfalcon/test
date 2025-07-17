import { MS_IN_MIN, MS_IN_SEC } from '@/constants';
import type { Candle } from '@/helpers/chart';
import type { Timezone } from '@/timezones';
import type { UTCTimestamp } from 'lightweight-charts';

/**
 * Parses a single line of CSV OHLC data.
 */
export function parseCandle(data: string, timezone: Timezone, delimiter = ','): Candle {
  const line = (data || '').trim();
  const [dateStr = '', timeStr = '', open, high, low, close, volume] = line.split(delimiter);

  // manually parse to avoid any local timezone shifting
  const [year, month, day] = dateStr.trim().split('.').map(Number);
  const [hour, minute] = timeStr.trim().split(':').map(Number);

  const time = Date.UTC(year, month - 1, day, hour, minute) - (timezone.offset * MS_IN_MIN);

  return {
    time: (time / MS_IN_SEC) as UTCTimestamp,
    open: parseFloat(open) || 0.0,
    high: parseFloat(high) || 0.0,
    low: parseFloat(low) || 0.0,
    close: parseFloat(close) || 0.0,
    volume: parseInt(volume, 10) || 0,
  };
}

/**
 * Parses multiple lines of CSV OHLC data.
 */
export function parseCandles(data: string, timezone: Timezone, delimiter = ','): Candle[] {
  return (data || '')
    .trim()
    .split("\n")
    .map(line => parseCandle(line, timezone, delimiter));
}
