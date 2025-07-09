import React, { useMemo } from 'react';
import { Chart as ChartJS, TimeScale, LinearScale, Tooltip, Legend } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { parse } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { timezones } from '../timezones';
import type { Timezone } from '../timezones';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';
import '../styles/Candlestick.scss';

// register the required components
ChartJS.register(TimeScale, LinearScale, Tooltip, Legend);
ChartJS.register(CandlestickController, CandlestickElement);

interface Candle {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface PriceData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

type ChartProps = {
  data: string | PriceData[];
  label?: string;
  timezone?: Timezone;
};

function parseData(data: string, timezone: Timezone): PriceData[] {
  return data
    .split("\n")
    .map((line) => {
      const [dateStr, timeStr, open, high, low, close, volume] = line.split(',');
      const localDate = parse(`${dateStr} ${timeStr}`, 'yyyy.MM.dd HH:mm', new Date());
      const date = toDate(localDate, { timeZone: timezone.name });

      return {
        date,
        open: parseFloat(open) || 0.0,
        high: parseFloat(high) || 0.0,
        low: parseFloat(low) || 0.0,
        close: parseFloat(close) || 0.0,
        volume: parseInt(volume, 10) || 0,
      };
    });
}

const Candlestick: React.FC<ChartProps> = ({ data, label, timezone }) => {
  const l = (label || 'Candlestick Chart').trim();
  const t: Timezone = timezone ?? timezones.UTC as Timezone;

  const parsedData: PriceData[] = useMemo(() => {
    return Array.isArray(data) ? data : parseData(data, t);
  }, []);

  const chartData: ChartData<'candlestick', Candle[], unknown> = {
    datasets: [
      {
        label: l,
        data: parsedData.map(datum => ({
          x: datum.date,
          o: datum.open,
          h: datum.high,
          l: datum.low,
          c: datum.close,
        })),
      },
    ],
  };

  // always have faster animation speeds
  const options: ChartOptions<'candlestick'> = {
    animation: false,
    maintainAspectRatio: true,
    resizeDelay: 0,
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute",
          tooltipFormat: "yyyy-MM-dd HH:mm",
        },
        ticks: {
          source: "auto",
        },
      },
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // this needs a container to resize properly
  return (
    <section id="candlestick" data-testid="candlestick">
      <div>
        <Chart type="candlestick" data={chartData} options={options} />
      </div>
    </section>
  );
};

export default Candlestick;
