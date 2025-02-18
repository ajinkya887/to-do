import axios from "axios";

const API_URL = "http://localhost:5000/api/todo";

export const getTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTodo = async (todo) => {
  const res = await axios.post(API_URL, todo);
  return res.data;
};

export const updateTodo = async (id, todo) => {
  const res = await axios.put(`${API_URL}/${id}`, todo);
  return res.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
