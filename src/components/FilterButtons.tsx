import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/todos';
import type { RootState } from '../store';

const FilterButtons: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.todos.filter);

  // we're not using enums for this project
  const filterOptions = [
    { value: 'ALL', label: 'All' },
    { value: 'ACTIVE', label: 'Active' },
    { value: 'COMPLETED', label: 'Completed' },
  ] as const;

  return (
    <section aria-labelledby="filter-heading" className="filter-buttons">
      <h2 id="filter-heading" className="visually-hidden">Filter Todos</h2>
      <div className="filter-group">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => dispatch(setFilter(option.value))}
            className={currentFilter === option.value ? 'active' : ''}
            aria-pressed={currentFilter === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FilterButtons;
