import React from 'react';
import { Todo } from '../types/Todo';

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="border-b border-gray-200 flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        {todo.title}
        <span className={`text-sm ${todo.completed ? "text-green-500" : "text-red-500"}`} >
          ({todo.completed ? 'Completed' : 'pending'})
        </span>
      </div>
      <div className="a">
        <button onClick={() => onToggle(todo.id)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          ({todo.completed ? 'mark as pending' : 'mark as completed'})
          </span>
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          🗑️
        </button>
      </div>

    </li>
  );
};

export default TodoItem;
