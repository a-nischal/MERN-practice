const { body } = require("express-validator");
const validate = require("../middleware/validtor.middleware");

const signUp = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isString(),
  body("firstName").isString({ min: 3 }),
  body("lastName").isString({ min: 5 }),
  validate,
];

const signIn = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isString(),
  validate,
];

module.exports = {
  signUp,
  signIn,
};
