import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { EMA } from 'technicalindicators';
import { DIGITS } from '@/constants';
import { MAX_CANDLES } from '@/store/chart';
import type { RootState } from '@/store';
import type { ThemeMode } from '@/components/Theme';
import '@/styles/components/Chart.scss';

import {
  create as createChart,
  getOptions,
  EMA_COLOR,
  HISTOGRAM_COLOR_BULLISH,
  HISTOGRAM_COLOR_BEARISH,
} from '@/helpers/chart';

import {
  CandlestickSeries,
  HistogramSeries,
  LineSeries,
  type IChartApi,
  type CandlestickData,
  type HistogramData,
} from 'lightweight-charts';

const Candlestick: React.FC = () => {
  const candles = useSelector((state: RootState) => state.chart.candles);

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ReturnType<IChartApi['addSeries']> | null>(null);
  const volumeSeriesRef = useRef<ReturnType<IChartApi['addSeries']> | null>(null);

  const [theme, setTheme] = useState<ThemeMode>('dark');

  const emaData = useMemo(() => {
    if (!candles || ((candles.length === 0) && (candles.length < 13))) return [];
    if (candles.length > MAX_CANDLES) return [];

    const closes = candles.map(c => c.close);
    const period = 13;
    const ema = EMA.calculate({ period, values: closes });

    return ema.map((value, i) => ({
      time: candles[i + period - 1].time,
      value,
    }));
  }, [candles]);

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
    if (!chartContainerRef?.current) return;

    const { candlestick, grid, layout, volume } = getOptions(theme);
    const chart = createChart(chartContainerRef.current, grid, layout);

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      ...candlestick,
      priceFormat: {
        type: 'price',
        precision: DIGITS,
        minMove: Math.pow(10, -DIGITS),
      },
    });

    const volumeSeries = chart.addSeries(HistogramSeries, {
      ...volume,
      priceFormat: { type: 'volume' },
      priceScaleId: 'volume',
    });

    // 80% for the candles, 10% margin, 10% for the volume
    chart.priceScale('right').applyOptions({ scaleMargins: { top: 0, bottom: 0.2 } });
    chart.priceScale('volume').applyOptions({ scaleMargins: { top: 0.9, bottom: 0 } });
    chart.timeScale().applyOptions({ barSpacing: 15 });

    const emaSeries = chart.addSeries(LineSeries, {
      color: EMA_COLOR,
      lineWidth: 2,
    });

    emaSeries.setData(emaData);

    chartRef.current = chart;
    candlestickSeriesRef.current = candlestickSeries;
    volumeSeriesRef.current = volumeSeries;

    const resizeObserver = new ResizeObserver(() => {
      const container = chartContainerRef.current;
      if (!container) return;
      chart.resize(container.clientWidth, container.clientHeight);
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  useEffect(() => {
    if (
      !chartRef?.current
      || !candlestickSeriesRef?.current
      || !volumeSeriesRef?.current
    ) return;

    const { candlestick, grid, layout, volume } = getOptions(theme);

    chartRef.current.applyOptions({ layout, grid });
    candlestickSeriesRef.current.applyOptions(candlestick);
    volumeSeriesRef.current.applyOptions(volume);
  }, [theme]);

  const { candlestickData, volumeData } = useMemo(() => {
    const candlestickData: CandlestickData[] = candles.map(c => ({
      time: c.time,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }));

    const volumeData: HistogramData[] = candles.map(c => ({
      time: c.time,
      value: c.volume,
      color: c.close > c.open ? HISTOGRAM_COLOR_BULLISH : HISTOGRAM_COLOR_BEARISH,
    }));

    return { candlestickData, volumeData };
  }, [candles]);

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
