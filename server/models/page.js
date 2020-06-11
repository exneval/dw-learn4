"use strict";
module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define(
    "Page",
    {
      name: DataTypes.STRING,
      bookId: DataTypes.INTEGER,
    },
    {}
  );
  Page.associate = function (models) {
    Page.belongsTo(models.Book, {
      as: "book",
      foreignKey: {
        name: "bookId",
      },
    });
  };
  return Page;
};
