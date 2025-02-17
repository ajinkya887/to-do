import React, { useEffect, useState } from "react";
import { deleteTodo, getTodos, updateTodo } from "../services/api";

const TodoList = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = async () => {
    const data = await getTodos();
    setToDos(data);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodo();
  };

  const handleUpdate = async (id) => {
    await updateTodo(id, { status: "completed" });
    loadTodo();
  };

  return (
    <>
      <h2>To-Do List</h2>
      <ul>
        {toDos.map((todo) => (
          <li key={todo._id}>
            {todo.title} - {todo.status}
            <button onClick={() => handleUpdate(todo._id)}>Complete</button>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
            <button onClick={() => handleUpdate(todo._id)}>Update</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
