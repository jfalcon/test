import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import type { ThemeMode } from '@/components/Theme';
import { EMA, TrueRange } from 'technicalindicators';
import { setTrueRange } from '@/store/meta';
import type { AppDispatch } from '@/store';
import '@/styles/Candlestick.scss';

import {
  CandlestickSeries,
  createChart,
  HistogramSeries,
  LineSeries,
  type IChartApi,
  type CandlestickData,
  type HistogramData,
  type UTCTimestamp,
} from 'lightweight-charts';

export interface Candle {
  time: number; // in seconds
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

type ChartOptions = {
  layout: Parameters<IChartApi['applyOptions']>[0]['layout'];
  grid: Parameters<IChartApi['applyOptions']>[0]['grid'];
  candlestickOptions: Parameters<ReturnType<IChartApi['addSeries']>['applyOptions']>[0];
  volumeOptions: Parameters<ReturnType<IChartApi['addSeries']>['applyOptions']>[0];
};

type ChartProps = {
  data: Candle[];
};

function getThemeOptions(theme: ThemeMode): ChartOptions {
  if (theme === 'dark') {
    return {
      layout: {
        background: { color: '#000000' },
        textColor: '#ffffff',
      },
      grid: {
        vertLines: { color: '#444444' },
        horzLines: { color: '#444444' },
      },
      candlestickOptions: {
        upColor: '#26a69a',
        downColor: '#ef5350',
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      },
      volumeOptions: {
        color: '#26a69a',
      },
    };
  } else {
    return {
      layout: {
        background: { color: '#ffffff' },
        textColor: '#000000',
      },
      grid: {
        vertLines: { color: '#cccccc' },
        horzLines: { color: '#cccccc' },
      },
      candlestickOptions: {
        upColor: '#4caf50',
        downColor: '#f44336',
        wickUpColor: '#4caf50',
        wickDownColor: '#f44336',
      },
      volumeOptions: {
        color: '#4caf50',
      },
    };
  }
}

const Candlestick: React.FC<ChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ReturnType<IChartApi['addSeries']> | null>(null);
  const volumeSeriesRef = useRef<ReturnType<IChartApi['addSeries']> | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const emaData = useMemo(() => {
    if (!data || data.length < 13) return [];

    const closes = data.map(c => c.close);
    const period = 13;
    const ema = EMA.calculate({ period, values: closes });

    return ema.map((value, i) => ({
      time: data[i + period - 1].time as UTCTimestamp,
      value,
    }));
  }, [data]);

  useEffect(() => {
    const updateTheme = () => {
      const t =
        document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark' : 'light';

      setTheme(t);
    };

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) updateTheme();
      });
    });

    updateTheme();
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!chartContainerRef.current) return;
    const { layout, grid, candlestickOptions, volumeOptions } = getThemeOptions(theme);

    const chart = createChart(chartContainerRef.current, {
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

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      ...candlestickOptions,
      priceFormat: {
        type: 'price',
        precision: 5,
        minMove: 0.00001,
      },
    });

    const volumeSeries = chart.addSeries(HistogramSeries, {
      ...volumeOptions,
      priceFormat: { type: 'volume' },
      priceScaleId: 'volume',
    });

    const emaSeries = chart.addSeries(LineSeries, {
      color: 'orange',
      lineWidth: 2,
    });

    emaSeries.setData(emaData);

    const highs = data.map(d => d.high);
    const lows = data.map(d => d.low);
    const closes = data.map(d => d.close);

    // compute True Ranges
    const trueRanges = TrueRange.calculate({
      high: highs,
      low: lows,
      close: closes,
    });

    dispatch(setTrueRange(trueRanges?.at(-1) ?? null));

    chart.priceScale('right').applyOptions({
      scaleMargins: {
        top: 0,
        bottom: 0.2,  // 80% for the candles, 10% margin, 10% for the volume
      },
    });

    chart.priceScale('volume').applyOptions({
      scaleMargins: {
        top: 0.9,  // 80% for the candles, 10% margin, 10% for the volume
        bottom: 0,
      },
    });

    chart.timeScale().applyOptions({
      barSpacing: 15, // or 20, 30, etc. depending on how large you want each candle
    });

    chartRef.current = chart;
    candlestickSeriesRef.current = candlestickSeries;
    volumeSeriesRef.current = volumeSeries;

    const resizeObserver = new ResizeObserver(() => {
      chart.resize(
        chartContainerRef.current!.clientWidth,
        chartContainerRef.current!.clientHeight
      );
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  useEffect(() => {
    if (!chartRef.current || !candlestickSeriesRef.current || !volumeSeriesRef.current) return;
    const { layout, grid, candlestickOptions, volumeOptions } = getThemeOptions(theme);

    chartRef.current.applyOptions({ layout, grid });
    candlestickSeriesRef.current.applyOptions(candlestickOptions);
    volumeSeriesRef.current.applyOptions(volumeOptions);
  }, [theme]);

  const { candlestickData, volumeData } = useMemo(() => {
    const candlestickData: CandlestickData[] = data.map(c => ({
      time: c.time as UTCTimestamp,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }));

    const volumeData: HistogramData[] = data.map(c => ({
      time: c.time as UTCTimestamp,
      value: c.volume,
      color: c.close > c.open ? '#4caf50' : '#f44336',
    }));

    return { candlestickData, volumeData };
  }, [data]);

  useEffect(() => {
    candlestickSeriesRef.current?.setData(candlestickData);
    volumeSeriesRef.current?.setData(volumeData);
  }, [candlestickData, volumeData]);

  // this needs a container to resize properly
  return (
    <section id="candlestick" data-testid="candlestick">
      <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }} />
    </section>
  );
};

export default Candlestick;
