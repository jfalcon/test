import { createChart, type IChartApi, type UTCTimestamp } from 'lightweight-charts';
import type { ThemeMode } from '@/components/Theme';

export const HISTOGRAM_COLOR_BULLISH = '#4caf50';
export const HISTOGRAM_COLOR_BEARISH = '#f44336';
export const EMA_COLOR = 'orange';

export interface Candle {
  time: UTCTimestamp;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

type CandlestickOptions = Parameters<ReturnType<IChartApi['addSeries']>['applyOptions']>[0];
type GridOptions = Parameters<IChartApi['applyOptions']>[0]['grid'];
type LayoutOptions = Parameters<IChartApi['applyOptions']>[0]['layout'];
type VolumeOptions = Parameters<ReturnType<IChartApi['addSeries']>['applyOptions']>[0];

type ChartOptions = {
  candlestick: CandlestickOptions;
  grid: GridOptions;
  layout: LayoutOptions;
  volume: VolumeOptions;
};

export function create(container: HTMLDivElement, grid: GridOptions, layout: LayoutOptions) {
  return createChart(container, {
    grid,
    handleScroll: {
      mouseWheel: true,
      pressedMouseMove: true,
      horzTouchDrag: true,
      vertTouchDrag: true,
    },
    handleScale: {
      mouseWheel: false,
      pinch: true,
      axisPressedMouseMove: true,
    },
    layout: {
      attributionLogo: false,
      fontFamily: 'Arial',
      fontSize: 12,
      ...layout,
    },
    rightPriceScale: {
      borderColor: '#555',
      scaleMargins: { top: 0.2, bottom: 0.25 },
    },
    timeScale: {
      borderColor: '#555',
      timeVisible: true,
    },
  });
}

export function getOptions(theme: ThemeMode): ChartOptions {
  if (theme === 'dark') {
    return {
      candlestick: {
        upColor: '#26a69a',
        downColor: '#ef5350',
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      },
      grid: {
        vertLines: { color: '#444444' },
        horzLines: { color: '#444444' },
      },
      layout: {
        background: { color: '#000000' },
        textColor: '#ffffff',
      },
      volume: {
        color: '#26a69a',
      },
    };
  } else {
    return {
      candlestick: {
        upColor: '#4caf50',
        downColor: '#f44336',
        wickUpColor: '#4caf50',
        wickDownColor: '#f44336',
      },
      grid: {
        vertLines: { color: '#cccccc' },
        horzLines: { color: '#cccccc' },
      },
      layout: {
        background: { color: '#ffffff' },
        textColor: '#000000',
      },
      volume: {
        color: '#4caf50',
      },
    };
  }
}
