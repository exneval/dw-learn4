const { Author, Book, AuthorBooks } = require("../models");

exports.readBookMany = async (req, res) => {
  const book = await Book.findAll({
    include: {
      model: Author,
      as: "authors",
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      through: {
        Model: AuthorBooks,
        as: "information",
        attributes: ["sellCount"],
      },
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  res.send({ data: book });
};

exports.readAuthor = async (req, res) => {
  const author = await Author.findAll({
    include: {
      model: Book,
      as: "books",
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      through: {
        model: AuthorBooks,
        as: "information",
        attributes: ["sellCount"],
      },
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  res.send({ data: author });
};
