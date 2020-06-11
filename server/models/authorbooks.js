"use strict";
module.exports = (sequelize, DataTypes) => {
  const AuthorBooks = sequelize.define(
    "AuthorBooks",
    {
      sellCount: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {}
  );
  AuthorBooks.associate = function (models) {
    // associations can be defined here
  };
  return AuthorBooks;
};
