const { Foo, Bar } = require("../models");

exports.readFoo = async (req, res) => {
  const foo = await Foo.findAll({
    include: {
      model: Bar,
      attributes: {
        exclude: ["FooId", "createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  res.send({ data: foo });
};

exports.readBar = async (req, res) => {
  const bar = await Bar.findAll({
    include: {
      model: Foo,
      as: "parent",
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["FooId", "fooId", "createdAt", "updatedAt"],
    },
  });

  res.send({ data: bar });
};
