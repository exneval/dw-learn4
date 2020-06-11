const { Book, Page } = require("../models");

exports.readBook = async (req, res) => {
  const book = await Book.findAll({
    include: {
      model: Page,
      as: "pages",
      attributes: {
        exclude: ["BookId", "createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  res.send({ data: book });
};

exports.readPage = async (req, res) => {
  const page = await Page.findAll({
    include: {
      model: Book,
      as: "book",
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["bookId", "BookId", "createdAt", "updatedAt"],
    },
  });

  res.send({ data: page });
};
