import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/ToDoForm";
import { getTodos } from "../services/api";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm onAdd={loadTodos} />
      <TodoList todos={todos} refreshTodos={loadTodos} />
    </div>
  );
};

export default Home;
