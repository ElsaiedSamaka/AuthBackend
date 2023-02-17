const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const createToken = require("../utils/createToken");

// signup controller
const signup = async (req, res) => {
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      secondname: req.body.secondname,
      phonenumber: req.body.phonenumber,
      countrycode: req.body.countrycode,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    await user.save();
    const token = createToken(user.id);
    res.cookie("token", token, { maxAge: 86400 , httpOnly: true});
    res.status(201).json({ user: user, accessToken: token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// signin controller
const signin = async (req, res) => {
  try {
    const existing_user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!existing_user) {
      return res.status(404).json({ message: "User Not found." });
    }
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      existing_user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = createToken(existing_user.id);
    res.cookie("token", token, { maxAge: 86400 , httpOnly: true});
    res.status(200).send({
      id: existing_user.id,
      firstname: existing_user.username,
      email: existing_user.email,
      accessToken: token,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
// signout controller
const signedin = async (req, res) => {
  try {
    res.send("signedin");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
// signout controller
// TODO: Implement signout controller
const signout = async (req, res) => {
  try {
    res.status(200).send({ message: "User signed out successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  signup,
  signin,
  signout,
  signedin,
};
