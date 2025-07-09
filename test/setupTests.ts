import * as matchers from '@testing-library/jest-dom/matchers';
import ResizeObserver from 'resize-observer-polyfill';
import '@testing-library/jest-dom';
import 'vitest-canvas-mock';
import { expect } from 'vitest';

// @ts-ignore
global.ResizeObserver = ResizeObserver;

expect.extend(matchers);
