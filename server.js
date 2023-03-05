require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const swaggerDoc = require("swagger-ui-express");
const authRouter = require("./app/routes/auth.routes");
const swaggerDocument = require("./helper/swaggerDocument");
const app = express();

// swagger
app.use("/api-docs", swaggerDoc.serve, swaggerDoc.setup(swaggerDocument));

// allow cross origin requests
app.use(
  cors({
    origin: "https://auth-client-saiedsamaka.vercel.app",
    credentials: true,
  })
);
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// parse cookies
app.use(cookieParser());

const db = require("./app/models");

db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs Application." });
});

// routes
app.use("/api/auth", authRouter);

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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
  res.header("Access-Control-Allow-Credentials", true);
  next(); // Important
});

const PORT = process.env.NODE_APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
