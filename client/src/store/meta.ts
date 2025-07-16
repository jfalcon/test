import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const STORAGE_KEY = 'meta';

export interface MetaState {
  trueRange: number | null;
}

const initialState: MetaState = {
  trueRange: null,
};

export const metaSlice = createSlice({
  name: STORAGE_KEY,
  initialState,
  reducers: {
    setTrueRange: (state, action: PayloadAction<number | null>) => {
      state.trueRange = action.payload;
    },
  },
});

export const { setTrueRange } = metaSlice.actions;
export default metaSlice.reducer;
