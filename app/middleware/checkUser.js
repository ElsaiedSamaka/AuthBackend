const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const getCurrentUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
      authentication: false,
      username: null,
    });
  } else {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
          authentication: false,
          username: null,
          error: err,
        });
      }
      req.userId = decoded.id;
      next();
    });
  }
};
const checkUser = {
  getCurrentUser,
};
module.exports = checkUser;
