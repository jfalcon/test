import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todos';

export function setupStore(preloadedState?: RootState) {
  return configureStore({
    reducer: {
      todos: todoSlice,
    },
  });
}

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
