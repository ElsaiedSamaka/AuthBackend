const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifySignUp, joiMiddleware } = require("../middleware");
const checkUser = require("../middleware/checkUser");
const schemas = require("../validations/schemas");

router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateEmail,
    verifySignUp.checkPasswordConfirmation,
    joiMiddleware(schemas.userSchema, "body"),
  ],
  authController.signup
);
router.post("/signin", authController.signin);
router.post("/signout", authController.signout);
router.get("/signedin", [checkUser.getCurrentUser], authController.signedin);
router.post(
  "/username",
  [verifySignUp.checkDuplicateEmail],
  authController.checkUserEmail
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});

module.exports = router;
