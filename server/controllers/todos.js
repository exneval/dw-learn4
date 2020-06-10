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

exports.read = (req, res) => {
  res.send({ data: todos });
};

exports.create = (req, res) => {
  todos = [...todos, req.body];
  res.send({ data: todos });
};

exports.update = (req, res) => {
  const { id } = req.params;

  todos[id - 1] = { ...todos[id - 1], ...req.body };
  res.send({ data: todos[id - 1] });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  todos.splice(id - 1, 1);
  res.send({ data: todos });
};
