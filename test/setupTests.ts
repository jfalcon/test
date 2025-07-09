import * as matchers from '@testing-library/jest-dom/matchers';
import ResizeObserver from 'resize-observer-polyfill';
import '@testing-library/jest-dom';
import 'vitest-canvas-mock';
import { expect } from 'vitest';

// @ts-ignore
global.ResizeObserver = ResizeObserver;

// mock the entire chartjs-chart-financial package
class MockCandlestickController {
  static id = 'candlestick';
}

class MockCandlestickElement {
  static id = 'candlestick';
}

vi.mock('chartjs-chart-financial', () => ({
  CandlestickController: MockCandlestickController,
  CandlestickElement: MockCandlestickElement,
}));


expect.extend(matchers);
