"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define(
    "Bar",
    {
      name: DataTypes.STRING,
      fooId: DataTypes.STRING,
    },
    {}
  );
  Bar.associate = function (models) {
    Bar.belongsTo(models.Foo, {
      as: "parent",
      foreignKey: {
        name: "fooId",
      },
    });
  };
  return Bar;
};
