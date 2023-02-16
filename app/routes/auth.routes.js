const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ data: "auth" });
});

module.exports = router;
