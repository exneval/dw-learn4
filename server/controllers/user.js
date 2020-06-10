const { User } = require("../models");

exports.read = async (req, res) => {
  try {
    const users = await User.findAll();

    res.send({ data: users });
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};

exports.readOne = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findOne({
      where: {
        id,
      },
    });

    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};
