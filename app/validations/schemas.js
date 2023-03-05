const Joi = require("joi");
const schemas = {
  userSchema: Joi.object({
    firstname: Joi.string().alphanum().required(),
    lastname: Joi.string().required(),
    phonenumber: Joi.number().required(),
    countrycode: Joi.string(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(8)
      .max(25)
      .required(),
    passwordConfirmation: Joi.ref("password"),
  }),
  // define all the other schemas below
};
module.exports = schemas;
