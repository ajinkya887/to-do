const Todo = require("../models/todo");

const createToDo = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    // Check if title is missing
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = new Todo({ title, description, status, dueDate });
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getToDO = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteToDo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createToDo,
  getToDO,
  updateTodo,
  deleteToDo,
};
