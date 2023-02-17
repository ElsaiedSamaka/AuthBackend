module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    secondname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phonenumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    countrycode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        min: 8,
      },
    },
  });
  return User;
};
