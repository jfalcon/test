import { configureStore } from "@reduxjs/toolkit";
import todoSlice, { loadTodos, saveTodos } from './todos';
import type { TodoState } from './todos';

export interface RootState {
  todos: TodoState;
}

export function setupStore(preloadedState?: RootState) {
  return configureStore({
    reducer: {
      todos: todoSlice,
    },
    preloadedState,
  });
}

// in the future this can be modified to load all of state if desired
export const store = setupStore({
  todos: {
    todos: loadTodos(),
    filter: 'ALL',
  }
});

store.subscribe(() => {
  const state = store.getState();
  saveTodos(state.todos.todos);
});

export type AppDispatch = typeof store.dispatch;
