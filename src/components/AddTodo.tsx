import React, { useState } from 'react';

interface Props {
  onAdd: (title: string) => void;
}

const AddTodo: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="w-full min-w-[200px] relative mt-4 mb-4">
        <label className="block mb-2 text-sm text-slate-600">
          ToDo Title
        </label>

        <div className="relative">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new todo"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" value={title} />
          <button
            className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
