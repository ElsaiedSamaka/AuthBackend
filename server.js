const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fspath = require("path");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./app/routes/user.routes");
dotenv.config({ path: fspath.resolve(__dirname, ".env") });
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");

db.sequelize.sync().then(() => {
  console.log("Drop and Resync Db");
});
db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs Application." });
});

// routes
app.use("/api/user", userRouter);
app.use("/api/auth", userRouter);

// set port, listen for requests
console.log(`Server is running on port ` + process.env.NODE_APP_PORT);
// Handling Errors
app.use((err, req, res, next) => {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
const PORT = process.env.NODE_APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
