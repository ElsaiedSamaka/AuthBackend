module.exports = {
  HOST: process.env.MYSQL_HOST || "127.0.0.1",
  USER: process.env.MYSQL_USER || "root",
  DB: process.env.MYSQL_DATABASE || "auth_app",
  PASSWORD: process.env.MYSQL_PASSWORD || "Zamalek#1997",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
