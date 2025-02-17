const express = require("express");
const {
  createToDo,
  getToDO,
  deleteToDo,
  updateTodo,
} = require("../controllers/todoControllers");

const router = express.Router();

//create new to-do
router.post("/", createToDo);

router.get("/", getToDO);

router.delete("/:id", deleteToDo);

router.put("/:id", updateTodo);

module.exports = router;
