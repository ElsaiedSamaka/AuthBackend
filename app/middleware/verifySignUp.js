const db = require("../models");
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
  // Email
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!",
      });
      return;
    }
    next();
  });
};
checkPasswordConfirmation = (req, res, next) => {
  // Password
  if (req.body.password !== req.body.passwordConfirmation) {
    res.status(400).send({
      message: "Failed! Passwords do not match!",
    });
    return;
  }
  next();
};
const verifySignUp = {
  checkDuplicateEmail,
  checkPasswordConfirmation,
};
module.exports = verifySignUp;
