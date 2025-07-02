import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  count: number;
}

export const STORAGE_KEY = 'todos';

// not using enums for this project
export type FilterStatus = 'ALL' | 'ACTIVE' | 'COMPLETED';

export interface TodoState {
  todos: Todo[];
  filter: FilterStatus;
}

const initialState: TodoState = {
  todos: [],
  filter: 'ALL', // not using enums for this project
};

export const loadTodos = (): Todo[] => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    const parsed: Partial<Todo[]> = serialized ? JSON.parse(serialized) : [];

    // if the data was corrupted then ensure at least the shape is restored
    return parsed.map(p => {
      return {
        id: p?.id ?? 0,
        text: p?.text ?? '',
        completed: p?.completed ?? false,
        count: p?.count ?? 0,
      };
    });
  } catch {
    return [];
  }
};

export const saveTodos = (todos: Todo[]) => {
  try {
    const serialized = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch {} // ignore write errors
};

export const todoSlice = createSlice({
  name: STORAGE_KEY,
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.todos.length,
        text: action.payload,
        completed: false,
        count: state.todos.length,
      });
    },
    replaceTodos: (state, action: PayloadAction<string[]>) => {
      state.todos = [];

      for (const todo of action.payload) {
        state.todos.push({
          id: state.todos.length,
          text: todo,
          completed: false,
          count: state.todos.length,
        });
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.filter = action.payload;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, replaceTodos, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
