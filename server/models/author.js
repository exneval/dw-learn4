"use strict";
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      fullName: DataTypes.STRING,
      location: DataTypes.STRING,
      age: DataTypes.STRING,
    },
    {}
  );
  Author.associate = function (models) {
    Author.belongsToMany(models.Book, {
      as: "books",
      through: {
        model: "AuthorBooks",
        as: "information",
      },
    });
  };
  return Author;
};
