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
const {
  readFoo: findFoos,
  readBar: findBars,
} = require("../controllers/fooBar");
const {
  readBook: findBooks,
  readPage: findPages,
} = require("../controllers/bookPage");
const {
  readBookMany: findBooksMany,
  readAuthor: findAuthors,
} = require("../controllers/authorBook");

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

// FooBar Routes = One-to-One
router.get("/foos", findFoos);
router.get("/bars", findBars);

// BookPage Routes = One-to-Many
router.get("/books", findBooks);
router.get("/pages", findPages);

// AuthorBook Routes = Many-to-Many
router.get("/authors", findAuthors);
router.get("/books-many", findBooksMany);

module.exports = router;
