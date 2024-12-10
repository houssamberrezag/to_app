import React from 'react';

interface Props {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterTodos: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
};

export default FilterTodos;
