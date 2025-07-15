import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Candle } from '@/helpers/chart';

export const MAX_CANDLES = 100;
export const STORAGE_KEY = 'chart';

export interface ChartState {
  candles: Candle[];
}

const initialState: ChartState = {
  candles: [],
};

export const chartSlice = createSlice({
  name: STORAGE_KEY,
  initialState,
  reducers: {
    addCandle: (state, action: PayloadAction<Candle>) => {
      // treat this like a queue not to be larger than MAX_CANDLES
      if (state.candles.length >= MAX_CANDLES) state.candles.shift();
      state.candles.push(action.payload)
    },
    setCandles: (state, action: PayloadAction<Candle[]>) => {
      state.candles = action.payload;
      state.candles.splice(0, MAX_CANDLES);
    },
  },
});

export const { addCandle, setCandles } = chartSlice.actions;
export default chartSlice.reducer;
