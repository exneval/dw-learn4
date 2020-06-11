"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {}
  );
  Book.associate = function (models) {
    Book.hasMany(models.Page, {
      as: "pages",
    });
    Book.belongsToMany(models.Author, {
      as: "authors",
      through: {
        model: "AuthorBooks",
        as: "information",
      },
    });
  };
  return Book;
};
