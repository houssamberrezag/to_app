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
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <span
          className={`text-lg ${todo.completed ? "line-through text-gray-500" : ""}`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;
