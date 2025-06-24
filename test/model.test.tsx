import type { RootState } from '../src/store';
import { STORAGE_KEY } from '../src/store/todos';
import { setupStore } from '../src/store';

describe('Model Tests', () => {
  beforeEach(() => localStorage.clear());

  it("loads todos from localStorage", () => {
    const fakeState: RootState = {
      todos: {
        todos: [{
          id: 0,
          text: 'task 1',
          completed: false,
          count: 0,
        }, {
          id: 1,
          text: 'task 2',
          completed: false,
          count: 0,
        }],
        filter: 'ALL',
      }
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeState));

    // since this mocked we don't need to map like we do with production
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed: RootState = stored ? JSON.parse(stored) : undefined;

    const store = setupStore(parsed);

    const state = store.getState();
    expect(state.todos.todos).toStrictEqual(fakeState.todos.todos);
  });

  it("safely initializes todos when localStorage is empty", () => {
    const store = setupStore(undefined);
    const state = store.getState();

    expect(state.todos.todos).toEqual([]);
  });
});
