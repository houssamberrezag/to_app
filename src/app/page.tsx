"use client";

import { useEffect, useState } from "react";
import AddTodo from "@/components/AddTodo";
import FilterTodos from "@/components/FilterTodos";
import TodoList from "@/components/TodoList";
import { Todo } from "@/types/Todo";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");

  // Charger les données initiales depuis l'API JSONPlaceholder
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  // Ajouter une tâche
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      userId: 1,
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // Basculer l'état d'une tâche (complétée/non complétée)
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Supprimer une tâche
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Filtrer les tâches en fonction du type sélectionné
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true; // "all"
  });

  // Sauvegarder dans le localStorage côté client uniquement
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <AddTodo onAdd={addTodo} />
      <FilterTodos filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}
