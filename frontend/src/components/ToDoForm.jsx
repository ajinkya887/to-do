import React, { useState } from "react";
import { createTodo } from "../services/api";

const TodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) {
      alert("Title is required");
      return;
    }

    await createTodo(formData);
    onAdd();
    setFormData({ title: "", description: "", status: "pending", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title (Required)"
        required
        style={styles.input}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        style={styles.input}
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        style={styles.input}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Add To-Do
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "10px",
    margin: "20px auto",
  },
  input: { padding: "8px", fontSize: "16px" },
  button: {
    padding: "10px",
    background: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default TodoForm;
