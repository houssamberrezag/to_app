import React from 'react';

interface Props {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterTodos: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div>
      <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => setFilter('all')}>All</button>
      <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => setFilter('completed')}>Completed</button>
      <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'  onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
};

export default FilterTodos;
