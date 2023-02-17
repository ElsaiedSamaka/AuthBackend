const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifySignUp } = require("../middleware");

router.post(
  "/signup",
  [verifySignUp.checkDuplicateEmail],
  authController.signup
);
router.post("/signin", authController.signin);
router.post("/signout", authController.signout);

module.exports = router;
