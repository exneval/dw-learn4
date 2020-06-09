const express = require("express");
const router = express.Router();

let todos = [
  {
    id: 1,
    title: "Cuci tangan",
    isDone: false,
  },
  {
    id: 2,
    title: "Jaga jarak",
    isDone: true,
  },
  {
    id: 3,
    title: "Pakai masker",
    isDone: false,
  },
];

router.get("/todos", (req, res) => {
  res.send({ data: todos });
});

router.post("/todo", (req, res) => {
  todos = [...todos, req.body];
  res.send({ data: todos });
});

router.patch("/todo/:id", (req, res) => {
  const { id } = req.params;

  todos[id - 1] = { ...todos[id - 1], ...req.body };
  res.send({ data: todos[id - 1] });
});

router.delete("/todo/:id", (req, res) => {
  const { id } = req.params;

  todos.splice(id - 1, 1);
  res.send({ data: todos });
});

module.exports = router;
