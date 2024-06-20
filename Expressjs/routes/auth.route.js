const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { signIn, signUp } = require("../controller/auth.controller");
const {validator} = require('../middleware/validtor.middleware')

// app.get('/hello', query('person').notEmpty(), (req, res) => {
//     const reqWithErrors = validationResult(req);
//     console.log(reqWithErrors.array())
//     if (reqWithErrors.array().length === 0) {
//       return res.send(`Hello, ${req.query.person}!`);
//     }

//     res.send({ errors: reqWithErrors.array() });
//   });

router.post("/sign-in", signIn);

// firstname, lastnme, email, password
const signUpValidator = [
  body("firstname").isString().notEmpty().isLength({min: 4}),
  body("lastname").isString().notEmpty(),
  body("email").isEmail().notEmpty(),
  body("password").isStrongPassword().notEmpty(),
  validator
];
router.post(
  "/sign-up",
  signUpValidator,
  signUp
);

module.exports = router;
