const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/signup", authController.signup);
router.get("/test", async (req, res) => {
  res.send("signup");
});

module.exports = router;
