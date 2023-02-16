module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstname: {
      type: Sequelize.STRING,
    },
    secondname: {
      type: Sequelize.STRING,
    },
    phonenumber: {
      type: Sequelize.INTEGER,
    },
    countrycode: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return User;
};
