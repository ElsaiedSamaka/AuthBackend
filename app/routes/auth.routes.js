const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifySignUp } = require("../middleware");
const checkUser = require("../middleware/checkUser");

router.post(
  "/signup",
  [verifySignUp.checkDuplicateEmail, verifySignUp.checkPasswordConfirmation],
  authController.signup
);
router.post("/signin", authController.signin);
router.post("/signout", authController.signout);
router.get( "/signedin", [ checkUser.getCurrentUser ], authController.signedin );
router.post(
  "/username",
  [verifySignUp.checkDuplicateEmail],
  authController.checkUserEmail
);

module.exports = router;
