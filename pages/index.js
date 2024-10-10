import { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get("/api/todos");
    setTodos(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/todos", { text: newTodo });
    setNewTodo("");
    fetchTodos();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Todo
        </button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}
