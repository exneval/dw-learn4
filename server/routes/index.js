const express = require("express");
const router = express.Router();
const {
  read: findTodos,
  create: createTodo,
  update: updateTodo,
  delete: deleteTodo,
} = require("../controllers/todos");
const {
  read: findUsers,
  create: createUser,
  readOne: findUser,
} = require("../controllers/user");
const { register, login } = require("../controllers/auth");

const { auth } = require("../middleware/auth");

// Todo Routes
router.get("/todos", findTodos);
router.post("/todo", createTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

// User Routes
router.get("/users", findUsers);
router.get("/user", auth, findUser); //PRIVATE
router.post("/users", createUser);

// Authentication Routes
router.post("/register", register);
router.post("/login", login);

module.exports = router;
