const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifySignUp } = require("../middleware");
const { authJwt } = require("../middleware");
const checkUser = require("../middleware/checkUser");

router.post(
  "/signup",
  [verifySignUp.checkDuplicateEmail],
  authController.signup
);
router.post("/signin", authController.signin);
router.post("/signout", authController.signout);
router.get("/signedin", [checkUser.getCurrentUser], authController.signedin);

module.exports = router;
