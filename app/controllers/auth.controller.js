const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// signup controller
const signup = async (req, res) => {
  try {
    const existing_user = await User.findOne({
      where: { email: req.body.email },
    });
    if (existing_user) {
      return res.status(409).json({ message: "User email already exists" });
    }
    const user = await User.create({
      firstname: req.body.firstname,
      secondname: req.body.secondname,
      phonenumber: req.body.phonenumber,
      countrycode: req.body.countrycode,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  signup,
};
