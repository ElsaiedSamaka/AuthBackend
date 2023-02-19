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
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      // type: Sequelize.VIRTUAL,
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your password",
        },
        notEmpty: {
          msg: "Please enter your password",
        },
        min: 8,
        max: 20,
      },
      passwordConfirmation: {
        // type: Sequelize.VIRTUAL,
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "both passwords must match",
          },
        },
      },
    },
  });
  return User;
};
