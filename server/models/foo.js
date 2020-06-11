"use strict";
module.exports = (sequelize, DataTypes) => {
  const Foo = sequelize.define(
    "Foo",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Foo.associate = function (models) {
    Foo.hasOne(models.Bar);
  };
  return Foo;
};
